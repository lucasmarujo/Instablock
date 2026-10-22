import { Ionicons } from '@expo/vector-icons';
import { useCallback, useState, type ReactElement } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';

import { EmptyState } from '@/components/EmptyState';
import { Grupo } from '@/components/Grupo';
import { InlineAlert } from '@/components/InlineAlert';
import { TextField } from '@/components/TextField';
import { useTextos } from '@/i18n/IdiomaContext';
import { formatar } from '@/i18n/formatos';
import AceleralockBlocker, { type PermissionState } from '@/native/blocker';
import { normalizarDominio } from '@/state/blockedSites';
import { radius, spacing, typography } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

import { BarraSalvar } from './BarraSalvar';
import {
  calcularAlteracoes,
  descreverAlteracoes,
  tituloDaBarra,
  totalDeAlteracoes,
} from './bloqueios';
import { ConsentimentoAcessibilidade } from './ConsentimentoAcessibilidade';

type Carga = { estado: 'erro' } | { estado: 'pronto'; salvos: string[]; dominios: string[] };

function lerDominios(): Carga {
  try {
    const salvos = AceleralockBlocker.blockedDomains();
    return { estado: 'pronto', salvos, dominios: salvos };
  } catch (error) {
    console.warn('[PainelSites] falha ao ler sites bloqueados', error);
    return { estado: 'erro' };
  }
}

type Props = {
  cabecalho: ReactElement;
  restricted: boolean;
  permissions: PermissionState | null;
  onSalvo: () => void;
};

/**
 * Par de `PainelApps` para sites: mesmo gate do modo restrito, mesma gravacao
 * so no "Salvar". Adicionar e remover sao livres, como na lista de apps.
 *
 * No Android o bloqueio depende do servico de acessibilidade, que e opcional. O
 * aviso abre o consentimento, e so o "Concordo" de la manda a pessoa pras
 * Configuracoes — a divulgacao vem antes do pedido, nunca depois. A volta das
 * Configuracoes reavalia sozinha: o veredito ja rele as permissoes quando o app
 * volta ao ar.
 */
export function PainelSites({ cabecalho, restricted, permissions, onSalvo }: Props) {
  const theme = useTheme();
  const t = useTextos();
  const textos = t.bloqueios.sites;
  const [carga, setCarga] = useState<Carga>(lerDominios);
  const [entrada, setEntrada] = useState('');
  const [invalido, setInvalido] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [pedindoConsentimento, setPedindoConsentimento] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setCarga(lerDominios());
    }, [])
  );

  const adicionar = () => {
    if (restricted) {
      return;
    }
    const dominio = normalizarDominio(entrada);
    if (!dominio) {
      setInvalido(true);
      return;
    }
    setInvalido(false);
    setEntrada('');
    setCarga((anterior) =>
      anterior.estado === 'pronto' && !anterior.dominios.includes(dominio)
        ? { ...anterior, dominios: [...anterior.dominios, dominio] }
        : anterior
    );
  };

  const remover = (dominio: string) => {
    if (restricted) {
      return;
    }
    setCarga((anterior) =>
      anterior.estado === 'pronto'
        ? { ...anterior, dominios: anterior.dominios.filter((d) => d !== dominio) }
        : anterior
    );
  };

  const salvar = () => {
    if (carga.estado !== 'pronto' || restricted) {
      return;
    }
    setSalvando(true);
    try {
      AceleralockBlocker.setBlockedDomains(carga.dominios);
      setCarga(lerDominios());
      onSalvo();
    } finally {
      setSalvando(false);
    }
  };

  const precisaAcessibilidade = Platform.OS === 'android' && permissions?.accessibility === false;
  const alteracoes =
    carga.estado === 'pronto'
      ? calcularAlteracoes(carga.salvos, carga.dominios)
      : { entram: [], saem: [] };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
        {cabecalho}

        {precisaAcessibilidade && (
          <InlineAlert
            title={textos.avisoAcessibilidadeTitulo}
            message={textos.avisoAcessibilidadeMensagem}
            actionLabel={textos.ativarNasConfiguracoes}
            onAction={() => setPedindoConsentimento(true)}
          />
        )}

        {carga.estado === 'erro' && (
          <Text style={[styles.corpo, { color: theme.colors.textSecondary }]}>
            {textos.erroAoLer}
          </Text>
        )}

        {carga.estado === 'pronto' && (
          <>
            <TextField
              label={textos.campoRotulo}
              value={entrada}
              onChangeText={(texto) => {
                setEntrada(texto);
                setInvalido(false);
              }}
              placeholder={textos.campoPlaceholder}
              accessibilityLabel={textos.campoRotuloFalado}
              leadingIcon="globe-outline"
              helper={textos.campoAjuda}
              error={invalido ? textos.campoErro : null}
              keyboardType="url"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={adicionar}
              editable={!restricted}
              trailing={
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={textos.botaoAdicionarFalado}
                  accessibilityState={{ disabled: restricted }}
                  onPress={adicionar}
                  disabled={restricted}
                  style={({ pressed }) => [
                    styles.adicionar,
                    {
                      backgroundColor: pressed
                        ? theme.colors.surfaces.brand.pressedFill
                        : theme.colors.surfaces.brand.fill,
                      opacity: restricted ? 0.4 : 1,
                    },
                  ]}
                >
                  <Ionicons name="add" size={18} color={theme.colors.surfaces.brand.onFill} />
                  <Text
                    style={[styles.rotuloAdicionar, { color: theme.colors.surfaces.brand.onFill }]}
                  >
                    {textos.botaoAdicionar}
                  </Text>
                </Pressable>
              }
            />

            {carga.dominios.length === 0 ? (
              <EmptyState title={textos.vazioTitulo} message={textos.vazioMensagem} />
            ) : (
              <View style={styles.secao}>
                <Grupo titulo={formatar(textos.secaoBloqueados, { n: carga.dominios.length })}>
                  {carga.dominios.map((dominio) => (
                    <View key={dominio} style={styles.linha}>
                      <View style={[styles.globo, { backgroundColor: theme.colors.bgSunken }]}>
                        <Ionicons
                          name="globe-outline"
                          size={20}
                          color={theme.colors.textSecondary}
                        />
                      </View>
                      <View style={styles.textos}>
                        <Text style={[styles.dominio, { color: theme.colors.textPrimary }]}>
                          {dominio}
                        </Text>
                        <Text style={[styles.legenda, { color: theme.colors.textSecondary }]}>
                          {carga.salvos.includes(dominio)
                            ? textos.legendaSalvo
                            : textos.legendaBloqueiaAoSalvar}
                        </Text>
                      </View>
                      {!restricted && (
                        <Pressable
                          accessibilityRole="button"
                          accessibilityLabel={formatar(textos.removerFalado, { site: dominio })}
                          onPress={() => remover(dominio)}
                          style={styles.remover}
                        >
                          <Ionicons name="close" size={20} color={theme.colors.textSecondary} />
                        </Pressable>
                      )}
                    </View>
                  ))}
                </Grupo>
              </View>
            )}

            {Platform.OS === 'android' &&
              permissions?.accessibility === true &&
              carga.salvos.length > 0 && (
                <View style={styles.status}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={18}
                    color={theme.colors.textBrand}
                  />
                  <Text style={[styles.textoStatus, { color: theme.colors.textBrand }]}>
                    {textos.leituraAtiva}
                  </Text>
                </View>
              )}
          </>
        )}
      </ScrollView>

      {totalDeAlteracoes(alteracoes) > 0 && !restricted && (
        <BarraSalvar
          titulo={tituloDaBarra(alteracoes, t)}
          detalhe={descreverAlteracoes(alteracoes, (dominio) => dominio, t)}
          salvando={salvando}
          onSalvar={salvar}
        />
      )}

      <ConsentimentoAcessibilidade
        visible={pedindoConsentimento}
        onClose={() => setPedindoConsentimento(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[6],
    gap: spacing[6],
  },
  secao: {
    marginTop: spacing[1],
  },
  corpo: {
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
  },
  adicionar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    height: 40,
    paddingLeft: spacing[2] + 2,
    paddingRight: spacing[3] + 2,
    borderRadius: radius.sm + 1,
  },
  rotuloAdicionar: {
    fontSize: typography.callout.fontSize,
    lineHeight: typography.callout.lineHeight,
    fontWeight: '600',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    paddingVertical: spacing[2] + 2,
    paddingLeft: spacing[4],
    paddingRight: spacing[2],
    minHeight: 64,
  },
  globo: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textos: {
    flex: 1,
    gap: 1,
  },
  dominio: {
    fontSize: typography.body.fontSize,
    lineHeight: 22,
  },
  legenda: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
  },
  remover: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    paddingHorizontal: spacing[1],
    marginTop: -spacing[2],
  },
  textoStatus: {
    flex: 1,
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
  },
});
