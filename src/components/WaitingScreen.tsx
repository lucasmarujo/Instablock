import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { Countdown } from '@/components/Countdown/Countdown';
import type { RemainingMsReader } from '@/components/Countdown/useCountdown';
import { HeroCard } from '@/components/HeroCard';
import type { Textos } from '@/i18n/catalogo';
import { formatar } from '@/i18n/formatos';
import { useTextos } from '@/i18n/IdiomaContext';
import { radius, spacing, typography } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

export type PendingTarget =
  'UNLOCK_APP' | 'STOP_PROTECTION' | 'CHANGE_DURATIONS' | 'RESTRICTED_MODE_OFF';

type Props = {
  readRemainingMs: RemainingMsReader;
  pendingTarget: PendingTarget;
  onCancel: () => void | Promise<void>;
  /** Duracao configurada, so pra barra de progresso. */
  totalMs?: number;
};

/**
 * docs/design-system.md §3.5. A tela mais importante do produto agora: é
 * onde a pessoa está no pior momento, olhando o contador enquanto quer abrir
 * o que bloqueou. Duas regras não-negociáveis (do `supervisor`, não minhas):
 *
 * - Cancelar é fácil — mesmo peso visual da espera, sempre visível, nunca
 *   atrás de confirmação extra. Por isso é `Button` `primary`, não
 *   `secondary`/`ghost`: nesta tela não existe ação concorrente, e desistir
 *   é o resultado que o produto quer (§0).
 * - O contador nunca é hostil — `Countdown` já não usa vermelho/pisca em
 *   `nearingEnd`; esta tela não adiciona nenhum.
 *
 * As três regras do relógio ficam escritas porque são o que a pessoa testa
 * primeiro (fechar o app, desligar o celular). Nenhum horário de término é
 * mostrado: a espera é monotônica e não existe instante de fim.
 */
export function WaitingScreen({ readRemainingMs, pendingTarget, onCancel, totalMs }: Props) {
  const theme = useTheme();
  const t = useTextos();
  const [canceling, setCanceling] = useState(false);
  const copy = t.espera.alvos[ALVO[pendingTarget]];

  const handleCancel = async () => {
    setCanceling(true);
    await onCancel();
    setCanceling(false);
  };

  const regras: { icone: keyof typeof Ionicons.glyphMap; texto: string }[] = [
    { icone: 'time-outline', texto: t.espera.regraAppFechado },
    { icone: 'power-outline', texto: t.espera.regraCelularDesligado },
    { icone: 'checkmark', texto: copy.fim },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.bgCanvas }]}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <View style={[styles.selo, { backgroundColor: theme.colors.bgWarningSubtle }]}>
            <Ionicons name="hourglass-outline" size={14} color={theme.colors.textWarning} />
            <Text style={[styles.textoSelo, { color: theme.colors.textWarning }]}>
              {t.espera.emAndamento}
            </Text>
          </View>
          <Text
            accessibilityRole="header"
            style={[styles.title, { color: theme.colors.textPrimary }]}
          >
            {copy.titulo}
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>{copy.corpo}</Text>
        </View>

        <HeroCard style={styles.cronometro}>
          <Countdown
            readRemainingMs={readRemainingMs}
            totalMs={totalMs}
            completeSlot={
              <Text style={[styles.subtitle, { color: theme.colors.textOnHeroSecondary }]}>
                {t.espera.confirmando}
              </Text>
            }
          />
        </HeroCard>

        <View style={styles.regras}>
          {regras.map((regra) => (
            <View key={regra.texto} style={styles.regra}>
              <Ionicons
                name={regra.icone}
                size={20}
                style={styles.icone}
                color={theme.colors.textSecondary}
              />
              <Text style={[styles.textoRegra, { color: theme.colors.textSecondary }]}>
                {regra.texto}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.acao}>
        <Button label={t.espera.desistir} loading={canceling} onPress={handleCancel} />
        <Text style={[styles.legenda, { color: theme.colors.textTertiary }]}>
          {formatar(t.espera.legendaDesistir, { aposDesistir: copy.aposDesistir })}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const ALVO: Record<PendingTarget, keyof Textos['espera']['alvos']> = {
  STOP_PROTECTION: 'desligarProtecao',
  UNLOCK_APP: 'desbloquearApp',
  CHANGE_DURATIONS: 'mudarDuracao',
  RESTRICTED_MODE_OFF: 'desligarModoRestrito',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    padding: spacing[4],
    paddingTop: spacing[5],
    gap: spacing[5],
  },
  cabecalho: {
    gap: spacing[2],
  },
  selo: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1] + 2,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3] - 2,
    borderRadius: radius.full,
  },
  textoSelo: {
    fontSize: typography.caption.fontSize,
    lineHeight: typography.caption.lineHeight,
    fontWeight: '600',
    letterSpacing: 0.48,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: typography.heading.fontSize,
    lineHeight: typography.heading.lineHeight,
    fontWeight: typography.heading.fontWeight,
    letterSpacing: typography.heading.letterSpacing,
  },
  subtitle: {
    fontSize: typography.callout.fontSize,
    lineHeight: 21,
  },
  cronometro: {
    paddingVertical: spacing[6],
    alignItems: 'center',
  },
  regras: {
    gap: spacing[3],
    paddingHorizontal: spacing[1],
  },
  // Trava o glifo em 20: a metrica da fonte do icone esticaria a linha.
  icone: {
    width: 20,
    height: 20,
    lineHeight: 20,
  },
  regra: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  textoRegra: {
    flex: 1,
    fontSize: typography.callout.fontSize,
    lineHeight: typography.callout.lineHeight,
  },
  acao: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[3],
    gap: spacing[2] + 2,
    alignItems: 'center',
  },
  legenda: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
    textAlign: 'center',
  },
});
