import { Ionicons } from '@expo/vector-icons';
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

import { Avatar } from '@/components/Avatar';
import { EmptyState } from '@/components/EmptyState';
import { Grupo, Overline } from '@/components/Grupo';
import { HeroCard } from '@/components/HeroCard';
import { IconeApp } from '@/components/IconeApp';
import { InlineAlert } from '@/components/InlineAlert';
import {
  dataPorExtenso,
  notaSemLeitura,
  proporcaoDoMaior,
  restoDaPilha,
  resumoBloqueios,
  tituloSitesSemBloqueio,
} from '@/components/Inicio/inicio';
import { BarrasTempoTela } from '@/components/Onboarding/BarrasTempoTela';
import { Skeleton } from '@/components/Skeleton';
// Mantido importado de proposito junto com o bloco comentado abaixo.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CalendarioTempoTela } from '@/components/TempoTela/CalendarioTempoTela';
import {
  compararComEstimativa,
  descreverComparacao,
  formatarDuracao,
  isoLocal,
  semanaAteHoje,
} from '@/components/TempoTela/tempoTela';
import { useTempoTela } from '@/components/TempoTela/useTempoTela';
import type { Textos } from '@/i18n/catalogo';
import { capitalizar, formatar } from '@/i18n/formatos';
import { useTextos } from '@/i18n/IdiomaContext';
import AceleralockBlocker, { type InstalledApp } from '@/native/blocker';
import { readDailyHours, readUserName } from '@/state/onboardingStorage';
import { useProtectionVerdictContext } from '@/state/ProtectionVerdictContext';
import { radius, spacing, typography } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';

const ICONES_NA_PILHA = 3;
const MAIS_USADOS = 3;

export default function Home() {
  const theme = useTheme();
  const t = useTextos();
  const router = useRouter();
  const tempoTela = useTempoTela();
  const [nome, setNome] = useState<string | null>(null);
  const [estimativa, setEstimativa] = useState<number | null>(null);
  const [bloqueados, setBloqueados] = useState<InstalledApp[] | null>(null);
  const [sites, setSites] = useState<string[] | null>(null);
  const { permissions, restricted, refresh } = useProtectionVerdictContext();

  useFocusEffect(
    useCallback(() => {
      let ativo = true;

      // A cada foco, e nao so na montagem: a estimativa e editavel em Ajustes, e
      // a regua do grafico tem que voltar diferente de la.
      Promise.all([readUserName(), readDailyHours()])
        .then(([nomeSalvo, horasSalvas]) => {
          if (ativo) {
            setNome(nomeSalvo);
            setEstimativa(horasSalvas);
          }
        })
        .catch(() => {});

      // Cruza a lista de bloqueados (nativo) com os apps instalados, que e de
      // onde vem o icone. So a pilha precisa disso; a aba Bloqueios continua
      // sendo a dona da edicao.
      (async () => {
        try {
          const pacotes = new Set(AceleralockBlocker.blockedPackages());
          const apps = await AceleralockBlocker.installedApps();
          if (ativo) {
            setBloqueados(apps.filter((app) => pacotes.has(app.packageName)));
          }
        } catch (error) {
          console.warn('[Home] falha ao montar a pilha de bloqueados', error);
          if (ativo) {
            setBloqueados([]);
          }
        }
      })();

      try {
        setSites(AceleralockBlocker.blockedDomains());
      } catch (error) {
        console.warn('[Home] falha ao ler sites bloqueados', error);
        setSites([]);
      }

      return () => {
        ativo = false;
      };
    }, [])
  );

  const ligarModoRestrito = () => {
    AceleralockBlocker.setRestricted(true);
    void refresh();
  };

  const quantosApps = bloqueados?.length ?? 0;
  const quantosSites = sites?.length ?? 0;

  // Lista cheia com o servico desligado nao pode parecer protecao: nenhum
  // desses sites esta sendo bloqueado agora.
  const sitesDesligados =
    Platform.OS === 'android' && permissions?.accessibility === false && quantosSites > 0;

  const resto = restoDaPilha(quantosApps, quantosSites, ICONES_NA_PILHA, t);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.bgCanvas }]}
      edges={['top']}
    >
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <View style={styles.saudacao}>
            <Text style={[styles.data, { color: theme.colors.textTertiary }]}>
              {dataPorExtenso(new Date(), t)}
            </Text>
            <Text
              accessibilityRole="header"
              style={[styles.ola, { color: theme.colors.textPrimary }]}
            >
              {nome ? formatar(t.inicio.saudacaoComNome, { nome }) : t.inicio.saudacao}
            </Text>
          </View>
          <Avatar nome={nome} size={40} />
        </View>

        <HeroCard>
          <View style={styles.status}>
            <View style={[styles.escudo, { backgroundColor: theme.colors.bgHeroRaised }]}>
              <Ionicons
                name="shield-checkmark-outline"
                size={26}
                color={theme.colors.textOnHeroBrand}
              />
            </View>
            <View style={styles.textos}>
              <Text style={[styles.tituloHero, { color: theme.colors.textOnHero }]}>
                {t.inicio.protecaoAtiva}
              </Text>
              {bloqueados === null || sites === null ? (
                <Skeleton width="70%" height={18} />
              ) : (
                <Text style={[styles.subtituloHero, { color: theme.colors.textOnHeroSecondary }]}>
                  {resumoBloqueios(quantosApps, quantosSites, t, sitesDesligados)}
                </Text>
              )}
            </View>
          </View>

          <View style={[styles.linhaPilha, { borderTopColor: theme.colors.lineOnHero }]}>
            <View style={styles.pilha}>
              {(bloqueados ?? []).slice(0, ICONES_NA_PILHA).map((app, indice) => (
                <View
                  key={app.packageName}
                  style={indice > 0 && styles.sobreposto}
                  accessibilityElementsHidden
                  importantForAccessibility="no"
                >
                  <IconeApp iconUri={app.iconUri} tamanho={32} contorno={theme.colors.bgHero} />
                </View>
              ))}
              {resto && (
                <Text
                  style={[
                    styles.resto,
                    quantosApps > 0 && styles.restoAposPilha,
                    { color: theme.colors.textOnHeroSecondary },
                  ]}
                >
                  {resto}
                </Text>
              )}
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t.inicio.gerenciarBloqueios}
              hitSlop={12}
              onPress={() => router.navigate('/bloqueios')}
              style={({ pressed }) => [styles.gerenciar, { opacity: pressed ? 0.7 : 1 }]}
            >
              <Text style={[styles.acaoHero, { color: theme.colors.textOnHeroBrand }]}>
                {t.inicio.gerenciar}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color={theme.colors.textOnHeroBrand}
                style={I18nManager.isRTL && styles.espelhado}
              />
            </Pressable>
          </View>

          <View style={[styles.restrito, { backgroundColor: theme.colors.bgHeroRaised }]}>
            <Ionicons
              name={restricted ? 'lock-closed-outline' : 'lock-open-outline'}
              size={20}
              color={
                restricted ? theme.colors.textOnHeroFriction : theme.colors.textOnHeroSecondary
              }
            />
            <View style={styles.textos}>
              <Text style={[styles.tituloRestrito, { color: theme.colors.textOnHero }]}>
                {restricted ? t.inicio.modoRestritoLigado : t.inicio.modoRestritoDesligado}
              </Text>
              <Text style={[styles.detalheRestrito, { color: theme.colors.textOnHeroSecondary }]}>
                {restricted
                  ? t.inicio.modoRestritoLigadoDetalhe
                  : t.inicio.modoRestritoDesligadoDetalhe}
              </Text>
            </View>
            {!restricted && (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t.inicio.ligarModoRestrito}
                hitSlop={12}
                onPress={ligarModoRestrito}
                style={({ pressed }) => [styles.ligar, { opacity: pressed ? 0.7 : 1 }]}
              >
                <Text style={[styles.acaoHero, { color: theme.colors.textOnHeroBrand }]}>
                  {t.inicio.ligar}
                </Text>
              </Pressable>
            )}
          </View>
        </HeroCard>

        {sitesDesligados && (
          <View style={styles.aviso}>
            <InlineAlert
              title={tituloSitesSemBloqueio(quantosSites, t)}
              message={t.inicio.sitesSemBloqueioMensagem}
              actionLabel={t.inicio.sitesSemBloqueioAcao}
              onAction={() =>
                Linking.sendIntent('android.settings.ACCESSIBILITY_SETTINGS').catch(() =>
                  Linking.openSettings()
                )
              }
            />
          </View>
        )}

        <View
          style={[
            styles.cartao,
            { backgroundColor: theme.colors.bgSurface, borderColor: theme.colors.borderDefault },
          ]}
        >
          <View style={styles.hoje}>
            <Overline>{t.inicio.tempoDeTelaHoje}</Overline>
            {tempoTela.estado === 'carregando' && <Skeleton width="60%" height={48} />}
            {tempoTela.estado === 'erro' && (
              <Text style={[styles.corpo, { color: theme.colors.textSecondary }]}>
                {t.inicio.erroTempoDeTela}
              </Text>
            )}
            {tempoTela.estado === 'pronto' && (
              <>
                <Text style={[styles.metrica, { color: theme.colors.textPrimary }]}>
                  {formatarDuracao(tempoTela.resumo.todaySeconds, t)}
                </Text>
                <Comparacao
                  segundosHoje={
                    tempoTela.resumo.days.some((dia) => dia.date === isoLocal(new Date()))
                      ? tempoTela.resumo.todaySeconds
                      : null
                  }
                  estimativa={estimativa}
                />
              </>
            )}
          </View>

          {tempoTela.estado === 'pronto' && (
            <View style={[styles.semana, { borderTopColor: theme.colors.borderDefault }]}>
              <Semana leituras={tempoTela.resumo.days} estimativa={estimativa} />
            </View>
          )}
        </View>

        <View style={styles.secao}>
          <Text
            accessibilityRole="header"
            style={[styles.tituloSecao, { color: theme.colors.textPrimary }]}
          >
            {t.inicio.maisUsadosHoje}
          </Text>
          {tempoTela.estado === 'carregando' && <Skeleton width="100%" height={64} />}
          {tempoTela.estado === 'pronto' &&
            (tempoTela.resumo.byPackage.length > 0 ? (
              <Grupo>
                {tempoTela.resumo.byPackage.slice(0, MAIS_USADOS).map((app) => (
                  <View key={app.packageName} style={styles.usado}>
                    <IconeApp iconUri={app.iconUri} tamanho={36} />
                    <View style={styles.textosUsado}>
                      <View style={styles.linhaUsado}>
                        <Text
                          numberOfLines={1}
                          style={[styles.nomeApp, { color: theme.colors.textPrimary }]}
                        >
                          {app.label}
                        </Text>
                        <Text style={[styles.duracaoApp, { color: theme.colors.textPrimary }]}>
                          {formatarDuracao(app.seconds, t)}
                        </Text>
                      </View>
                      <View style={[styles.trilho, { backgroundColor: theme.colors.bgSunken }]}>
                        <View
                          style={[
                            styles.preenchido,
                            {
                              backgroundColor: theme.colors.borderBrand,
                              width: `${
                                proporcaoDoMaior(
                                  app.seconds,
                                  tempoTela.resumo.byPackage[0].seconds
                                ) * 100
                              }%`,
                            },
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                ))}
              </Grupo>
            ) : (
              <EmptyState
                title={t.inicio.nadaRegistradoTitulo}
                message={t.inicio.nadaRegistradoMensagem}
              />
            ))}
        </View>

        {/*
          Calendario do mes fora de vista por decisao de produto (2026-08-30),
          nao por defeito: o componente, os testes e a coleta que o alimenta
          continuam de pe. Para trazer de volta, basta descomentar — nada mais
          precisa mudar, porque `days` ja traz o historico inteiro.

        <View style={styles.secao}>
          <Text style={[styles.tituloSecao, { color: theme.colors.textPrimary }]}>
            {mesPorExtenso(new Date(), t)}
          </Text>
          {tempoTela.estado === 'pronto' && (
            <CalendarioTempoTela ancora={new Date()} leituras={tempoTela.resumo.days} />
          )}
          <Text style={[styles.nota, { color: theme.colors.textTertiary }]}>
            {t.inicio.notaCalendario}
          </Text>
        </View>
        */}
      </ScrollView>
    </SafeAreaView>
  );
}

/**
 * Comparacao com a estimativa do onboarding. Abaixo ganha a cor da marca;
 * acima fica neutro — passar da propria estimativa nao e erro, e o produto nao
 * pune com vermelho (DS §0).
 */
function Comparacao({
  segundosHoje,
  estimativa,
}: {
  segundosHoje: number | null;
  estimativa: number | null;
}) {
  const theme = useTheme();
  const t = useTextos();
  const comparacao = compararComEstimativa(segundosHoje, estimativa);
  if (!comparacao || estimativa === null) {
    return null;
  }
  const abaixo = comparacao.sentido === 'abaixo';
  const icone = comparacao.sentido === 'igual' ? 'checkmark' : abaixo ? 'arrow-down' : 'arrow-up';
  const cor = abaixo ? theme.colors.textBrand : theme.colors.textSecondary;

  return (
    <View
      style={[
        styles.chip,
        { backgroundColor: abaixo ? theme.colors.bgBrandSubtle : theme.colors.bgSunken },
      ]}
    >
      <Ionicons name={icone} size={16} color={cor} />
      <Text style={[styles.textoChip, { color: cor }]}>
        {descreverComparacao(comparacao, estimativa, t)}
      </Text>
    </View>
  );
}

/**
 * Os sete ultimos dias de calendario. Dia sem leitura entra tracejado em vez de
 * sumir ou zerar: barra zero afirmaria que a pessoa nao usou o celular num dia
 * que ninguem mediu.
 */
function Semana({
  leituras,
  estimativa,
}: {
  leituras: { date: string; seconds: number }[];
  estimativa: number | null;
}) {
  const theme = useTheme();
  const t = useTextos();
  const semana = semanaAteHoje(leituras, new Date(), t);

  if (semana.every((dia) => dia.segundos === null)) {
    return (
      <EmptyState
        title={t.inicio.historicoComecaTitulo}
        message={t.inicio.historicoComecaMensagem}
      />
    );
  }

  const nota = notaSemLeitura(semana, t);

  return (
    <View style={styles.conteudoSemana}>
      <View style={styles.cabecalhoSemana}>
        <Overline>{t.inicio.ultimos7Dias}</Overline>
        {estimativa !== null && (
          <View style={styles.legenda}>
            <View style={styles.tracos}>
              {[0, 1, 2].map((traco) => (
                <View
                  key={traco}
                  style={[styles.traco, { backgroundColor: theme.colors.textTertiary }]}
                />
              ))}
            </View>
            <Text style={[styles.textoLegenda, { color: theme.colors.textSecondary }]}>
              {t.inicio.legendaEstimativa}
            </Text>
          </View>
        )}
      </View>
      <BarrasTempoTela
        dados={semana.map((dia) => ({
          rotulo: dia.rotulo,
          horas: dia.segundos === null ? null : dia.segundos / 3600,
          destaque: dia.hoje,
        }))}
        legenda={t.inicio.legendaGraficoSemana}
        mostrarValor
        estimativaHoras={estimativa}
      />
      {nota && <Text style={[styles.nota, { color: theme.colors.textTertiary }]}>{nota}</Text>}
    </View>
  );
}

/** Usada so pelo calendario, que esta comentado acima. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mesPorExtenso(data: Date, t: Textos): string {
  return capitalizar(t, t.datas.meses[data.getMonth()]);
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  conteudo: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[6],
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    paddingBottom: spacing[5],
  },
  saudacao: {
    flex: 1,
    gap: 2,
  },
  data: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
  },
  ola: {
    fontSize: typography.heading.fontSize,
    lineHeight: typography.heading.lineHeight,
    fontWeight: typography.heading.fontWeight,
    letterSpacing: typography.heading.letterSpacing,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3] + 2,
  },
  escudo: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textos: {
    flex: 1,
    gap: 2,
  },
  tituloHero: {
    fontSize: typography.title2.fontSize,
    lineHeight: typography.title2.lineHeight,
    fontWeight: '700',
  },
  subtituloHero: {
    fontSize: typography.callout.fontSize,
    lineHeight: typography.callout.lineHeight,
  },
  linhaPilha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing[3],
    borderTopWidth: 1,
    paddingTop: spacing[4],
  },
  pilha: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sobreposto: {
    marginLeft: -spacing[2],
  },
  resto: {
    fontSize: typography.callout.fontSize,
    lineHeight: typography.callout.lineHeight,
  },
  restoAposPilha: {
    marginLeft: spacing[3] + 2,
  },
  gerenciar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  espelhado: {
    transform: [{ scaleX: -1 }],
  },
  acaoHero: {
    fontSize: typography.callout.fontSize,
    lineHeight: typography.callout.lineHeight,
    fontWeight: '600',
  },
  restrito: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[3] + 2,
    borderRadius: radius.md,
  },
  tituloRestrito: {
    fontSize: typography.callout.fontSize,
    lineHeight: typography.callout.lineHeight,
    fontWeight: '600',
  },
  detalheRestrito: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
  },
  ligar: {
    justifyContent: 'center',
    paddingLeft: spacing[2],
  },
  aviso: {
    marginTop: spacing[3],
  },
  cartao: {
    marginTop: spacing[6],
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing[5],
    gap: spacing[5],
  },
  hoje: {
    gap: spacing[2],
    alignItems: 'flex-start',
  },
  metrica: {
    fontSize: typography.metric.fontSize,
    lineHeight: typography.metric.lineHeight,
    fontWeight: typography.metric.fontWeight,
    letterSpacing: typography.metric.letterSpacing,
    fontVariant: ['tabular-nums'],
  },
  corpo: {
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1] + 2,
    paddingVertical: spacing[1] + 2,
    paddingLeft: spacing[2],
    paddingRight: spacing[2] + 2,
    borderRadius: radius.full,
  },
  textoChip: {
    fontSize: typography.footnote.fontSize,
    lineHeight: typography.footnote.lineHeight,
    fontWeight: '600',
  },
  semana: {
    borderTopWidth: 1,
    paddingTop: spacing[4],
  },
  conteudoSemana: {
    gap: spacing[3],
  },
  cabecalhoSemana: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  legenda: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1] + 2,
  },
  tracos: {
    flexDirection: 'row',
    gap: 2,
  },
  traco: {
    width: 4,
    height: 2,
    borderRadius: 1,
  },
  textoLegenda: {
    fontSize: typography.caption.fontSize,
    lineHeight: typography.caption.lineHeight,
  },
  nota: {
    fontSize: typography.caption.fontSize,
    lineHeight: typography.caption.lineHeight,
  },
  secao: {
    marginTop: spacing[6] + spacing[1],
    gap: spacing[3],
  },
  tituloSecao: {
    fontSize: typography.title2.fontSize,
    lineHeight: typography.title2.lineHeight,
    fontWeight: typography.title2.fontWeight,
  },
  usado: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    paddingVertical: spacing[3] + 2,
    paddingHorizontal: spacing[4],
  },
  textosUsado: {
    flex: 1,
    gap: spacing[1] + 2,
  },
  linhaUsado: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[2],
  },
  nomeApp: {
    flex: 1,
    fontSize: typography.body.fontSize,
    lineHeight: 22,
  },
  duracaoApp: {
    fontSize: typography.callout.fontSize,
    lineHeight: typography.callout.lineHeight,
    fontWeight: '600',
    fontVariant: ['tabular-nums'],
  },
  trilho: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  preenchido: {
    height: 4,
    borderRadius: 2,
  },
});
