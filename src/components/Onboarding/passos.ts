/**
 * Logica pura do onboarding em secoes. Fica separada dos componentes pelo
 * mesmo motivo de `countdownStatus.ts` e `verdict.ts`: o runner do repo e
 * `node --test`, sem renderer de RN, entao so modulo sem import nativo e
 * testavel. Nada aqui importa react-native.
 */

import type { Textos } from '../../i18n/catalogo';
import { contar, formatar } from '../../i18n/formatos';

export type Passo = 1 | 2 | 3 | 4 | 5;

export const PASSO_PRIMEIRO: Passo = 1;
export const PASSO_ULTIMO: Passo = 5;

export const HORAS_MIN = 1;
export const HORAS_MAX = 12;
export const HORAS_PADRAO = 1;

/**
 * Dados ilustrativos das barras da secao 3 — decisao do usuario, 2026-08-30:
 * o app nao le tempo de tela (`docs/decisao-modulos-nativos.md`: "nao medimos
 * tempo de tela, so bloqueamos"), entao a secao mostra a forma do dado, nunca
 * um numero que finja vir do aparelho. Por isso o componente rotula "Exemplo".
 * Trocar por leitura real e trocar esta funcao por uma prop — o
 * `BarrasTempoTela` ja recebe os dados de fora.
 *
 * A semana comeca na segunda; `diasDaSemanaIniciais` comeca no domingo.
 */
const HORAS_EXEMPLO_DA_SEGUNDA_AO_DOMINGO = [3.2, 4.6, 3.9, 5.4, 4.1, 6.8, 5.7];

export function tempoTelaExemplo(t: Textos): { rotulo: string; horas: number }[] {
  return HORAS_EXEMPLO_DA_SEGUNDA_AO_DOMINGO.map((horas, indice) => ({
    rotulo: t.datas.diasDaSemanaIniciais[(indice + 1) % 7],
    horas,
  }));
}

/**
 * Quem ja concluiu o onboarding uma vez e so caiu de volta no grupo porque
 * revogou uma permissao nao responde nome nem estimativa de novo: entra
 * direto na secao que pede a permissao que falta.
 */
export function passoInicial(onboardingComplete: boolean): Passo {
  return onboardingComplete ? 3 : PASSO_PRIMEIRO;
}

/**
 * Posicao continua (0..1) do dedo na trilha. Separada do arredondamento de
 * proposito: o thumb segue esta, o numero segue `horasDaProporcao`. Derivar a
 * posicao da hora ja arredondada e o que faz o thumb andar aos pulos, porque
 * ele so consegue parar nas 12 posicoes inteiras.
 *
 * Clampado nas duas pontas: arrastar pra fora da trilha satura, nao extrapola.
 */
export function proporcaoDoToque(x: number, largura: number): number {
  if (largura <= 0) {
    return 0;
  }
  return Math.min(1, Math.max(0, x / largura));
}

export function horasDaProporcao(proporcao: number, min = HORAS_MIN, max = HORAS_MAX): number {
  return Math.round(min + Math.min(1, Math.max(0, proporcao)) * (max - min));
}

export function horasDoToque(x: number, largura: number, min = HORAS_MIN, max = HORAS_MAX): number {
  return horasDaProporcao(proporcaoDoToque(x, largura), min, max);
}

/** Posicao (0..1) do valor na trilha — inverso de `horasDoToque`. */
export function proporcaoDasHoras(horas: number, min = HORAS_MIN, max = HORAS_MAX): number {
  if (max === min) {
    return 0;
  }
  return Math.min(1, Math.max(0, (horas - min) / (max - min)));
}

/** `null` quando so ha espaco em branco — o que `saveUserName` tambem recusa. */
export function normalizarNome(input: string): string | null {
  const limpo = input.trim();
  return limpo.length > 0 ? limpo : null;
}

/**
 * Generico de proposito: tipar por `InstalledApp` puxaria `@/native/blocker`,
 * que chama `requireNativeModule` no import e derrubaria o `node --test`.
 * Ignora acento nos dois lados — "video" acha "Vídeo".
 */
export function filtrarApps<T extends { label: string }>(apps: T[], termo: string): T[] {
  const alvo = semAcento(termo);
  if (alvo.length === 0) {
    return apps;
  }
  return apps.filter((app) => semAcento(app.label).includes(alvo));
}

function semAcento(texto: string): string {
  return texto
    .trim()
    .toLocaleLowerCase('pt-BR')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

/** Atalhos de valor da secao 2: o slider sozinho e dificil com leitor de tela. */
export const HORAS_ATALHOS = [2, 4, 5, 8] as const;

/**
 * "1 de 5" do cabecalho, medido no caminho desta pessoa — mesma regra da barra:
 * quem entra na secao 3 por reentrada ve "1 de 3", nao "3 de 5".
 */
export function progressoDoPasso(passo: Passo, inicial: Passo): { atual: number; total: number } {
  return { atual: passo - inicial + 1, total: PASSO_ULTIMO - inicial + 1 };
}

/** Titulo da secao 5: diz o que aconteceu, com o nome do app quando e um so. */
export function tituloDaConclusao(rotulos: string[], t: Textos): string {
  const textos = t.onboarding.conclusao;
  if (rotulos.length === 0) {
    return textos.bloqueioCriado;
  }
  if (rotulos.length === 1) {
    return formatar(textos.umAppBloqueado, { app: rotulos[0] });
  }
  return contar(t, textos.variosAppsBloqueados, rotulos.length);
}

export type PermissaoEssencial = 'usageAccess' | 'overlay';

/**
 * As duas permissoes sem as quais o bloqueio nao funciona, na ordem do
 * checklist da secao 4. `null` (sem sonda ainda) conta as duas como faltando —
 * mesmo lado seguro de `nextMissingCorePermission`.
 */
export function permissoesFaltando(
  permissoes: { usageAccess: boolean; overlay: boolean } | null
): PermissaoEssencial[] {
  return (['usageAccess', 'overlay'] as const).filter((chave) => permissoes?.[chave] !== true);
}

export function tituloPermissoesFaltando(faltando: number, t: Textos): string {
  return contar(t, t.onboarding.escolha.permissoesFaltando, faltando);
}

/** CTA da secao 4: diz quantos apps o toque bloqueia. */
export function rotuloDoBloqueio(marcados: number, t: Textos): string {
  if (marcados === 0) {
    return t.onboarding.escolha.bloquearSemApps;
  }
  return contar(t, t.onboarding.escolha.bloquearApps, marcados);
}

/** Linha sob o app no cartao da secao 5. */
export function legendaDaConclusao(total: number, t: Textos): string {
  if (total <= 1) {
    return t.onboarding.conclusao.aPartirDeAgora;
  }
  return contar(t, t.onboarding.conclusao.eMaisApps, total - 1);
}

/**
 * Oferta do modo restrito na secao 5. Diz o custo dos dois lados com o app que
 * a pessoa acabou de escolher — "um app" quando ha mais de um.
 */
export function textoOfertaRestrito(rotulos: string[], esperaMinutos: number, t: Textos): string {
  const textos = t.onboarding.ofertaRestrito;
  if (rotulos.length === 1) {
    return contar(t, textos.textoComUmApp, esperaMinutos, { app: rotulos[0] });
  }
  return contar(t, textos.textoComVariosApps, esperaMinutos);
}
