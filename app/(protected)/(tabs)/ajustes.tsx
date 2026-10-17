import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useCallback, useState } from 'react';
import {
  I18nManager,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useRouter } from 'expo-router';

import {
  contarPendentes,
  itensDePermissao,
  type ItemDePermissao,
} from '@/components/Ajustes/ajustes';
import { Avatar } from '@/components/Avatar';
import { Grupo, Overline } from '@/components/Grupo';
import { ListRow } from '@/components/ListRow';
import { SliderHoras } from '@/components/Onboarding/SliderHoras';
import { SegmentedControl } from '@/components/SegmentedControl';
import { useTextos } from '@/i18n/IdiomaContext';
import { contar, formatar } from '@/i18n/formatos';
import AceleralockBlocker from '@/native/blocker';
import { readDailyHours, readUserName, saveDailyHours } from '@/state/onboardingStorage';
import { useProtectionVerdictContext } from '@/state/ProtectionVerdictContext';
import { PREFERENCIAS, rotuloPreferencia } from '@/theme/preferenciaTema';
import { useThemePreference } from '@/theme/ThemePreferenceContext';
import { radius, spacing, typography } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

const SITE = 'https://aceleralock.marujo.dev';

async function abrirPermissao(item: ItemDePermissao) {
  if (Platform.OS === 'ios' || item.intent === null) {
    await Linking.openSettings();
    return;
  }
  await Linking.sendIntent(item.intent).catch(() => Linking.openSettings());
}

/**
 * Antes "Perfil": misturava tempo de tela (que agora mora na Inicio) com
 * configuracao. Ficou so configuracao, agrupada pelo que a pessoa procura.
 *
 * O modo restrito aparece aqui como atalho para a aba Bloqueios, onde ele mora
 * junto da lista que trava — dois interruptores pro mesmo estado seriam duas
 * confirmacoes pra manter iguais.
 */
export default function Ajustes() {
  const theme = useTheme();
  const t = useTextos();
  const router = useRouter();
  const { permissions, restricted } = useProtectionVerdictContext();
  const { preferencia, definirPreferencia } = useThemePreference();
  const { waitMinutes } = AceleralockBlocker.protectionState();

  const [nome, setNome] = useState<string | null>(null);
  const [horas, setHoras] = useState<number | null>(null);
  const [editandoHoras, setEditandoHoras] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let ativo = true;
      Promise.all([readUserName(), readDailyHours()])
        .then(([nomeSalvo, horasSalvas]) => {
          if (ativo) {
            setNome(nomeSalvo);
            setHoras(horasSalvas);
          }
        })
        .catch(() => {});
      return () => {
        ativo = false;
      };
    }, [])
  );

  const alterarHoras = (valor: number) => {
    setHoras(valor);
    void saveDailyHours(valor);
  };

  const permissoes = itensDePermissao(permissions, Platform.OS === 'ios' ? 'ios' : 'android', t);
  const nomeVisivel = nome ?? t.ajustes.perfil.semNome;
  const pendentes = contarPendentes(permissoes);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.bgCanvas }]}
      edges={['top']}
    >
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.topo}>
          <Text
            accessibilityRole="header"
            style={[styles.titulo, { color: theme.colors.textPrimary }]}
          >
            {t.ajustes.titulo}
          </Text>

          <View
            style={[
              styles.perfil,
              { backgroundColor: theme.colors.bgSurface, borderColor: theme.colors.borderDefault },
            ]}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={formatar(t.ajustes.perfil.rotuloAcessivel, { nome: nomeVisivel })}
              accessibilityHint={
                editandoHoras ? t.ajustes.perfil.dicaFecharAjuste : t.ajustes.perfil.dicaAbrirAjuste
              }
              accessibilityState={{ expanded: editandoHoras }}
              onPress={() => setEditandoHoras((atual) => !atual)}
              style={({ pressed }) => [
                styles.linhaPerfil,
                pressed && { backgroundColor: theme.colors.bgSunken },
              ]}
            >
              <Avatar nome={nome} size={48} />
              <View style={styles.textos}>
                <Text style={[styles.nome, { color: theme.colors.textPrimary }]}>
                  {nomeVisivel}
                </Text>
                <Text style={[styles.estimativa, { color: theme.colors.textSecondary }]}>
                  {horas === null
                    ? t.ajustes.perfil.estimativaNaoDefinida
                    : contar(t, t.ajustes.perfil.estimativaDeHoras, horas)}
                </Text>
              </View>
              <Ionicons
                name={editandoHoras ? 'chevron-up' : 'chevron-forward'}
                size={20}
                color={theme.colors.textTertiary}
                style={!editandoHoras && I18nManager.isRTL ? styles.espelhado : undefined}
              />
            </Pressable>
            {editandoHoras && (
              <View style={[styles.editor, { borderTopColor: theme.colors.borderDefault }]}>
                <SliderHoras horas={horas ?? 1} onChange={alterarHoras} />
              </View>
            )}
          </View>
        </View>

        <View style={styles.secao}>
          <Grupo titulo={t.ajustes.protecao.grupo}>
            <ListRow
              icon={
                <Ionicons
                  name={restricted ? 'lock-closed-outline' : 'lock-open-outline'}
                  size={20}
                  color={restricted ? theme.colors.textWarning : theme.colors.textSecondary}
                />
              }
              label={t.ajustes.protecao.modoRestrito}
              value={
                restricted
                  ? t.ajustes.protecao.modoRestritoLigado
                  : t.ajustes.protecao.modoRestritoDesligado
              }
              chevron
              onPress={() => router.navigate('/bloqueios')}
            />
            <ListRow
              icon={
                <Ionicons name="hourglass-outline" size={20} color={theme.colors.textSecondary} />
              }
              label={t.ajustes.protecao.tempoDeEspera}
              value={contar(t, t.ajustes.protecao.minutosDeEspera, waitMinutes)}
            />
          </Grupo>
        </View>

        <View style={[styles.secao, styles.aparencia]}>
          <View style={styles.cabecalhoSecao}>
            <Overline>{t.ajustes.aparencia.titulo}</Overline>
          </View>
          <SegmentedControl
            accessibilityLabel={t.ajustes.aparencia.titulo}
            segmentos={PREFERENCIAS.map((opcao) => ({
              valor: opcao,
              rotulo: rotuloPreferencia(opcao, t),
            }))}
            valor={preferencia}
            onChange={definirPreferencia}
            marcarSelecionado
          />
        </View>

        <View style={styles.secao}>
          <Grupo
            titulo={t.ajustes.permissoes.grupo}
            detalhe={
              pendentes === 0 ? undefined : contar(t, t.ajustes.permissoes.pendentes, pendentes)
            }
            corDoDetalhe={theme.colors.textWarning}
          >
            {permissoes.map((item) => (
              <ListRow
                key={item.chave}
                icon={
                  <Ionicons
                    name={item.concedida ? 'checkmark-circle-outline' : 'alert-circle-outline'}
                    size={20}
                    color={item.concedida ? theme.colors.textBrand : theme.colors.iconWarning}
                  />
                }
                label={item.titulo}
                description={item.descricao}
                recuoDireito={item.concedida ? spacing[4] : spacing[3]}
                accessory={
                  item.concedida ? (
                    <Text style={[styles.concedida, { color: theme.colors.textBrand }]}>
                      {item.rotuloConcedida}
                    </Text>
                  ) : (
                    <Pressable
                      accessibilityRole="button"
                      accessibilityLabel={formatar(t.ajustes.permissoes.acaoAcessivel, {
                        acao: item.rotuloAcao,
                        permissao: item.titulo,
                      })}
                      hitSlop={4}
                      onPress={() => void abrirPermissao(item)}
                      style={({ pressed }) => [
                        styles.acao,
                        {
                          borderColor: theme.colors.borderStrong,
                          backgroundColor: pressed ? theme.colors.bgSunken : theme.colors.bgSurface,
                        },
                      ]}
                    >
                      <Text style={[styles.textoAcao, { color: theme.colors.textPrimary }]}>
                        {item.rotuloAcao}
                      </Text>
                    </Pressable>
                  )
                }
              />
            ))}
          </Grupo>
        </View>

        <View style={styles.secao}>
          <Grupo titulo={t.ajustes.sobre.grupo}>
            <ListRow
              label={t.ajustes.sobre.politicaDePrivacidade}
              densa
              recuoDireito={spacing[3] + 2}
              accessory={
                <Ionicons name="open-outline" size={18} color={theme.colors.textTertiary} />
              }
              onPress={() => void Linking.openURL(`${SITE}/#privacidade`)}
            />
            <ListRow
              label={t.ajustes.sobre.termosDeUso}
              densa
              recuoDireito={spacing[3] + 2}
              accessory={
                <Ionicons name="open-outline" size={18} color={theme.colors.textTertiary} />
              }
              onPress={() => void Linking.openURL(`${SITE}/#termos`)}
            />
            <ListRow
              label={t.ajustes.sobre.versao}
              densa
              value={Constants.expoConfig?.version ?? '—'}
            />
          </Grupo>
          <Text style={[styles.rodape, { color: theme.colors.textTertiary }]}>
            {t.ajustes.rodape}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  conteudo: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[8],
  },
  topo: {
    gap: spacing[4],
  },
  titulo: {
    fontSize: typography.heading.fontSize,
    lineHeight: typography.heading.lineHeight,
    fontWeight: typography.heading.fontWeight,
    letterSpacing: typography.heading.letterSpacing,
  },
  perfil: {
    borderWidth: 1,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  linhaPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3] + 2,
    paddingVertical: spacing[3] + 2,
    paddingLeft: spacing[4],
    paddingRight: spacing[3],
  },
  textos: {
    flex: 1,
    gap: 2,
  },
  nome: {
    fontSize: typography.title3.fontSize,
    lineHeight: typography.title3.lineHeight,
    fontWeight: typography.title3.fontWeight,
  },
  estimativa: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
  },
  editor: {
    borderTopWidth: 1,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  secao: {
    paddingTop: spacing[6],
    gap: spacing[2],
  },
  aparencia: {
    gap: spacing[2],
  },
  cabecalhoSecao: {
    paddingHorizontal: spacing[1],
  },
  concedida: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
    fontWeight: '600',
  },
  acao: {
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: spacing[3],
    borderRadius: radius.sm,
    borderWidth: 1,
  },
  textoAcao: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
    fontWeight: '600',
  },
  rodape: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
    paddingHorizontal: spacing[1],
    paddingTop: spacing[1],
  },
  espelhado: {
    transform: [{ scaleX: -1 }],
  },
});
