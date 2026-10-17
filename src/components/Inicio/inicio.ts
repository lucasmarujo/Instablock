import type { Textos } from '../../i18n/catalogo';
import { capitalizar, contar, formatar, juntarLista } from '../../i18n/formatos';

/**
 * Logica pura da aba Inicio. Sem import de react-native, pelo mesmo motivo de
 * `TempoTela/tempoTela.ts`: e o que o `node --test` consegue carregar.
 */

/**
 * "Sábado, 11 de outubro". Tabela propria (`t.datas`) em vez de
 * `toLocaleDateString`: o Intl do Hermes varia por build, e um cabecalho em
 * ingles por falta de locale seria pior que nenhum.
 */
export function dataPorExtenso(data: Date, t: Textos): string {
  return capitalizar(
    t,
    formatar(t.datas.dataPorExtenso, {
      diaDaSemana: t.datas.diasDaSemana[data.getDay()],
      dia: data.getDate(),
      mes: t.datas.mesesNaData[data.getMonth()],
    })
  );
}

/**
 * Subtitulo do cartao de protecao. Nunca "0 apps e 0 sites". Com a leitura do
 * navegador desligada, os sites saem da conta de bloqueados: lista cheia sem o
 * servico nao pode parecer protecao.
 */
export function resumoBloqueios(
  apps: number,
  sites: number,
  t: Textos,
  sitesPausados = false
): string {
  const resumo = t.inicio.resumo;
  if (sitesPausados && sites > 0) {
    return apps === 0
      ? contar(t, resumo.sitesPausados, sites)
      : formatar(resumo.appsBloqueadosESitesPausados, {
          apps: contar(t, resumo.appsBloqueados, apps),
        });
  }
  if (apps === 0 && sites === 0) {
    return resumo.nadaBloqueado;
  }
  if (sites === 0) {
    return contar(t, resumo.appsBloqueados, apps);
  }
  if (apps === 0) {
    return contar(t, resumo.sitesBloqueados, sites);
  }
  return formatar(resumo.appsESitesBloqueados, {
    apps: contar(t, resumo.apps, apps),
    sites: contar(t, resumo.sites, sites),
  });
}

/**
 * O que nao coube na pilha de icones do cartao de protecao: apps alem dos
 * visiveis e os sites, que nao tem icone. O "+" so aparece depois de icone.
 */
export function restoDaPilha(
  apps: number,
  sites: number,
  visiveis: number,
  t: Textos
): string | null {
  const partes: string[] = [];
  const appsForaDaPilha = Math.max(0, apps - visiveis);
  if (appsForaDaPilha > 0) {
    partes.push(contar(t, t.inicio.pilha.apps, appsForaDaPilha));
  }
  if (sites > 0) {
    partes.push(contar(t, t.inicio.pilha.sites, sites));
  }
  if (partes.length === 0) {
    return null;
  }
  const resto = juntarLista(t, partes);
  return apps > 0 ? formatar(t.inicio.pilha.maisForaDaPilha, { resto }) : resto;
}

/** Titulo do aviso de sites com a leitura do navegador desligada. */
export function tituloSitesSemBloqueio(sites: number, t: Textos): string {
  return contar(t, t.inicio.sitesSemBloqueioTitulo, sites);
}

/**
 * Linha da tela de protecao desligada: o que ficou livre e volta a ser
 * bloqueado ao reativar. `null` com a lista vazia — nao ha o que listar.
 */
export function resumoLiberados(apps: number, sites: number, t: Textos): string | null {
  const resumo = t.inicio.resumo;
  if (apps === 0 && sites === 0) {
    return null;
  }
  if (sites === 0) {
    return contar(t, resumo.appsLiberados, apps);
  }
  if (apps === 0) {
    return contar(t, resumo.sitesLiberados, sites);
  }
  return formatar(resumo.appsESitesLiberados, {
    apps: contar(t, resumo.apps, apps),
    sites: contar(t, resumo.sites, sites),
  });
}

/** Largura da barra de "mais usados", relativa ao app que mais consumiu. */
export function proporcaoDoMaior(valor: number, maior: number): number {
  if (!(maior > 0) || !(valor > 0)) {
    return 0;
  }
  return Math.min(1, valor / maior);
}

/**
 * Nota embaixo do grafico quando a semana tem dia tracejado. `null` sem dia
 * faltando: nota que diz "nada a declarar" so ocupa espaco.
 */
export function notaSemLeitura(
  semana: { data: string; segundos: number | null }[],
  t: Textos
): string | null {
  const nota = t.inicio.notaSemLeitura;
  const faltando = semana.filter((dia) => dia.segundos === null);
  if (faltando.length === 0) {
    return null;
  }
  if (faltando.length === 1) {
    const [ano, mes, numero] = faltando[0].data.split('-').map(Number);
    const dia = nota.diasDaSemana[new Date(ano, mes - 1, numero).getDay()];
    return capitalizar(t, formatar(nota.umDia, { dia }));
  }
  return contar(t, nota.variosDias, faltando.length);
}
