import type { Plural, Textos } from './catalogo';
import { categoriaPlural } from './plural';

/**
 * Montagem de texto a partir do catalogo. Sem import de react-native: e o que a
 * logica pura de cada tela usa, e o que o `node --test` carrega.
 */

export type Valores = Readonly<Record<string, string | number>>;

/** Troca `{nome}` pelo valor. Marcador sem valor fica como esta, visivel no teste. */
export function formatar(modelo: string, valores: Valores = {}): string {
  return modelo.replace(/\{(\w+)\}/g, (marcador, chave: string) =>
    Object.prototype.hasOwnProperty.call(valores, chave) ? String(valores[chave]) : marcador
  );
}

/** Escolhe a forma de plural do idioma e preenche `{n}` com a contagem. */
export function contar(t: Textos, entrada: Plural, n: number, valores: Valores = {}): string {
  const forma = entrada[categoriaPlural(t.idioma, n)] ?? entrada.other;
  return formatar(forma, { ...valores, n });
}

/** "a, b e c" — com a pontuacao e a conjuncao de cada idioma. */
export function juntarLista(t: Textos, partes: readonly string[]): string {
  if (partes.length <= 1) {
    return partes.join('');
  }
  const ultima = partes[partes.length - 1];
  return `${partes.slice(0, -1).join(t.lista.separador)}${t.lista.ultimoSeparador}${ultima}`;
}

/** Primeira letra maiuscula pela regra do idioma (o `i` turco vira `İ`). */
export function capitalizar(t: Textos, texto: string): string {
  const [primeira = '', ...resto] = Array.from(texto);
  return primeira.toLocaleUpperCase(t.idioma) + resto.join('');
}

const MINUTOS_POR_DIA = 24 * 60;

function doisDigitos(valor: number): string {
  return String(valor).padStart(2, '0');
}

/**
 * Hora do dia a partir de minutos desde 00:00, no modelo do idioma: `13:00` no
 * pt-BR, `1:00 PM` no ingles. Da a volta na meia-noite.
 */
export function formatarHoraDoDia(t: Textos, minuto: number): string {
  const normalizado = ((Math.round(minuto) % MINUTOS_POR_DIA) + MINUTOS_POR_DIA) % MINUTOS_POR_DIA;
  const horas = Math.floor(normalizado / 60);
  const horas12 = horas % 12 === 0 ? 12 : horas % 12;
  return formatar(t.hora.modelo, {
    H: horas,
    HH: doisDigitos(horas),
    h: horas12,
    hh: doisDigitos(horas12),
    mm: doisDigitos(normalizado % 60),
    periodo: t.hora.periodos[horas < 12 ? 0 : 1],
  });
}
