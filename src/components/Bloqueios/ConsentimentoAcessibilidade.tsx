import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Linking, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { Button } from '@/components/Button';
import { Sheet } from '@/components/Sheet';
import { useTextos } from '@/i18n/IdiomaContext';
import { radius, spacing, typography } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

type Props = {
  visible: boolean;
  onClose: () => void;
};

type NomeDoIcone = ComponentProps<typeof Ionicons>['name'];

/** Fracao da altura da janela que o texto ocupa antes de rolar: os dois botoes ficam sempre a vista. */
const ALTURA_MAXIMA_DO_TEXTO = 0.5;

/**
 * Divulgacao em destaque da politica da API Accessibility do Google Play: diz o
 * que e lido, para que serve e o que nunca acontece, e so "Concordo" leva as
 * Configuracoes. Recusar, tocar fora e o voltar fecham sem abrir nada — fechar
 * nunca conta como consentimento. Todo caminho do app ate
 * ACCESSIBILITY_SETTINGS passa por aqui.
 */
export function ConsentimentoAcessibilidade({ visible, onClose }: Props) {
  const theme = useTheme();
  const t = useTextos();
  const { height } = useWindowDimensions();
  const textos = t.bloqueios.consentimentoAcessibilidade;

  const topicos: { icone: NomeDoIcone; titulo: string; texto: string }[] = [
    { icone: 'globe-outline', titulo: textos.lidoTitulo, texto: textos.lido },
    { icone: 'shield-checkmark-outline', titulo: textos.usoTitulo, texto: textos.uso },
    { icone: 'lock-closed-outline', titulo: textos.privacidadeTitulo, texto: textos.privacidade },
  ];

  const concordar = () => {
    onClose();
    Linking.sendIntent('android.settings.ACCESSIBILITY_SETTINGS').catch(() =>
      Linking.openSettings()
    );
  };

  return (
    <Sheet visible={visible} onClose={onClose} accessibilityLabel={textos.titulo}>
      <ScrollView style={{ maxHeight: height * ALTURA_MAXIMA_DO_TEXTO }}>
        <View style={styles.conteudo}>
          <View style={[styles.icone, { backgroundColor: theme.colors.bgBrandSubtle }]}>
            <Ionicons name="accessibility-outline" size={24} color={theme.colors.textBrand} />
          </View>
          <Text
            accessibilityRole="header"
            style={[styles.titulo, { color: theme.colors.textPrimary }]}
          >
            {textos.titulo}
          </Text>
          <Text style={[styles.corpo, { color: theme.colors.textSecondary }]}>
            {textos.introducao}
          </Text>

          {topicos.map((topico) => (
            <View key={topico.icone} style={styles.topico}>
              <Ionicons name={topico.icone} size={20} color={theme.colors.textSecondary} />
              <View style={styles.textosDoTopico}>
                <Text style={[styles.tituloDoTopico, { color: theme.colors.textPrimary }]}>
                  {topico.titulo}
                </Text>
                <Text style={[styles.corpo, { color: theme.colors.textSecondary }]}>
                  {topico.texto}
                </Text>
              </View>
            </View>
          ))}

          <Text style={[styles.nota, { color: theme.colors.textTertiary }]}>
            {textos.comoDesligar}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.acoes}>
        <Button label={textos.concordar} onPress={concordar} />
        <Button label={textos.recusar} variant="secondary" onPress={onClose} />
      </View>
    </Sheet>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    gap: spacing[3],
    paddingHorizontal: spacing[1],
  },
  icone: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: typography.title2.fontSize,
    lineHeight: typography.title2.lineHeight,
    fontWeight: '700',
  },
  corpo: {
    fontSize: typography.callout.fontSize,
    lineHeight: 22,
  },
  topico: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  textosDoTopico: {
    flex: 1,
    gap: 2,
  },
  tituloDoTopico: {
    fontSize: typography.callout.fontSize,
    lineHeight: typography.callout.lineHeight,
    fontWeight: '600',
  },
  nota: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
  },
  acoes: {
    gap: spacing[2] + 2,
  },
});
