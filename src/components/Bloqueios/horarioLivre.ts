/**
 * Logica pura dos horarios livres (excecoes de bloqueio por app). Sem import de
 * react-native nem de `@/native/blocker`: o tipo da faixa e redeclarado aqui pelo
 * mesmo motivo de `Ajustes/ajustes.ts` — importar o modulo nativo chamaria
 * `requireNativeModule` no `node --test`.
 *
 * Quem decide se a faixa vale agora e o core (`ScheduleExceptions.kt`), com hora e
 * fuso automaticos e modo restrito na conta. Aqui so se descreve e valida o que a
 * pessoa configura — duas fontes da mesma decisao divergiriam.
 */

import type { Textos } from '../../i18n/catalogo';
import { capitalizar, contar, formatar, formatarHoraDoDia, juntarLista } from '../../i18n/formatos';

/** Dias ISO (1 = segunda ... 7 = domingo), minutos desde 00:00. */
export type Faixa = {
  days: number[];
  start: number;
  end: number;
};

export const MINUTOS_POR_DIA = 24 * 60;

/** Mesmo teto do core (`ScheduleExceptions.MAX_WINDOWS_PER_APP`). */
export const MAX_FAIXAS = 8;

/** Passo do seletor de hora. */
export const PASSO_MINUTOS = 15;

export type DiaDaSemana = { valor: number; curto: string; inicial: string; nome: string };

/** `t.datas` comeca no domingo (`getDay()`); aqui o dia e ISO, da segunda ao domingo. */
function indiceEmDatas(diaIso: number): number {
  return diaIso % 7;
}

export function diasDaSemana(t: Textos): DiaDaSemana[] {
  return [1, 2, 3, 4, 5, 6, 7].map((valor) => ({
    valor,
    curto: t.datas.diasDaSemanaAbreviados[indiceEmDatas(valor)],
    inicial: t.datas.diasDaSemanaIniciais[indiceEmDatas(valor)],
    nome: t.datas.diasDaSemana[indiceEmDatas(valor)],
  }));
}

const DIAS_UTEIS = [1, 2, 3, 4, 5];

/** Faixa que o formulario abre ao adicionar: almoco em dia util. */
export function faixaInicial(): Faixa {
  return { days: [...DIAS_UTEIS], start: 12 * 60, end: 13 * 60 };
}

/** `12:00`, `08:15` no pt-BR; o modelo de hora e do idioma. */
export function formatarHora(minuto: number, t: Textos): string {
  return formatarHoraDoDia(t, minuto);
}

/** Anda `passos` vezes o passo do seletor, dando a volta na meia-noite. */
export function ajustarMinuto(minuto: number, passos: number): number {
  const proximo = minuto + passos * PASSO_MINUTOS;
  return ((proximo % MINUTOS_POR_DIA) + MINUTOS_POR_DIA) % MINUTOS_POR_DIA;
}

export function atravessaMeiaNoite(faixa: Faixa): boolean {
  return faixa.end < faixa.start;
}

/**
 * "Todos os dias", "Seg a sex", "Sáb e dom", "Ter a qui", "Seg, qua e sex".
 * Sequencia de tres ou mais dias seguidos vira intervalo.
 */
export function descreverDias(dias: number[], t: Textos): string {
  const ordenados = [...new Set(dias)].filter((dia) => dia >= 1 && dia <= 7).sort((a, b) => a - b);
  if (ordenados.length === 0) {
    return t.bloqueios.horarios.nenhumDia;
  }
  if (ordenados.length === 7) {
    return t.bloqueios.horarios.todosOsDias;
  }
  const curto = (dia: number) => t.datas.diasDaSemanaAbreviados[indiceEmDatas(dia)];
  const seguidos = ordenados.every((dia, i) => i === 0 || dia === ordenados[i - 1] + 1);
  if (seguidos && ordenados.length >= 3) {
    return capitalizar(
      t,
      formatar(t.bloqueios.horarios.intervaloDeDias, {
        inicio: curto(ordenados[0]),
        fim: curto(ordenados[ordenados.length - 1]),
      })
    );
  }
  return capitalizar(t, juntarLista(t, ordenados.map(curto)));
}

/** "Seg a sex · 12:00–13:00", "Sex · 22:00–02:00 do dia seguinte". */
export function descreverFaixa(faixa: Faixa, t: Textos): string {
  const modelo = atravessaMeiaNoite(faixa)
    ? t.bloqueios.horarios.faixaAteODiaSeguinte
    : t.bloqueios.horarios.faixa;
  return formatar(modelo, {
    dias: descreverDias(faixa.days, t),
    inicio: formatarHora(faixa.start, t),
    fim: formatarHora(faixa.end, t),
  });
}

/**
 * Linha do app na lista: quantos horarios livres ele tem. `null` sem nenhum. Sem o
 * "Bloqueado" na frente: a secao e o interruptor ja dizem, e a legenda tem uma linha
 * so ao lado do botao de horario.
 */
export function legendaComHorarios(quantidade: number, t: Textos): string | null {
  if (quantidade <= 0) {
    return null;
  }
  return contar(t, t.bloqueios.horarios.legendaDaLinha, quantidade);
}

/** Mensagem que diz como resolver, ou `null` quando a faixa pode ser gravada. */
export function validarFaixa(faixa: Faixa, t: Textos): string | null {
  if (faixa.days.length === 0) {
    return t.bloqueios.horarios.erroSemDia;
  }
  if (faixa.days.some((dia) => !Number.isInteger(dia) || dia < 1 || dia > 7)) {
    return t.bloqueios.horarios.erroDiaInvalido;
  }
  const dentroDoDia = (minuto: number) =>
    Number.isInteger(minuto) && minuto >= 0 && minuto < MINUTOS_POR_DIA;
  if (!dentroDoDia(faixa.start) || !dentroDoDia(faixa.end)) {
    return t.bloqueios.horarios.erroHorarioInvalido;
  }
  if (faixa.start === faixa.end) {
    return t.bloqueios.horarios.erroInicioIgualAoFim;
  }
  return null;
}

export function validarFaixas(faixas: Faixa[], t: Textos): string | null {
  if (faixas.length > MAX_FAIXAS) {
    return contar(t, t.bloqueios.horarios.erroMaximoPorApp, MAX_FAIXAS);
  }
  for (const faixa of faixas) {
    const erro = validarFaixa(faixa, t);
    if (erro) {
      return erro;
    }
  }
  return null;
}

/** Mesma configuracao, independente da ordem dos dias. */
export function mesmasFaixas(a: Faixa[], b: Faixa[]): boolean {
  const chave = (faixa: Faixa) =>
    `${[...new Set(faixa.days)].sort((x, y) => x - y).join(',')}|${faixa.start}|${faixa.end}`;
  if (a.length !== b.length) {
    return false;
  }
  return a.every((faixa, i) => chave(faixa) === chave(b[i]));
}

/** Agrupa a lista achatada do nativo por app. */
export function agruparPorApp<T extends Faixa & { packageName: string }>(
  lista: T[]
): Map<string, Faixa[]> {
  const porApp = new Map<string, Faixa[]>();
  for (const { packageName, days, start, end } of lista) {
    porApp.set(packageName, [...(porApp.get(packageName) ?? []), { days, start, end }]);
  }
  return porApp;
}

export type AvisoDoHorario = {
  titulo: string;
  mensagem: string;
  /** So quando ha o que a pessoa possa fazer nas Configuracoes. */
  podeAbrirConfiguracoes: boolean;
};

/**
 * Por que os horarios livres nao estao valendo agora, na ordem em que o core
 * recusa: modo restrito primeiro (decisao do usuario), depois hora ou fuso manual.
 * `null` quando nada impede.
 */
export function avisoDoHorario(
  estado: {
    restricted: boolean;
    automaticTime: boolean;
    automaticZone: boolean;
  },
  t: Textos
): AvisoDoHorario | null {
  if (estado.restricted) {
    return {
      titulo: t.bloqueios.horarios.avisoModoRestritoTitulo,
      mensagem: t.bloqueios.horarios.avisoModoRestritoMensagem,
      podeAbrirConfiguracoes: false,
    };
  }
  if (!estado.automaticTime || !estado.automaticZone) {
    return {
      titulo: t.bloqueios.horarios.avisoRelogioTitulo,
      mensagem: t.bloqueios.horarios.avisoRelogioMensagem,
      podeAbrirConfiguracoes: true,
    };
  }
  return null;
}
