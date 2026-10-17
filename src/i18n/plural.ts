import type { Idioma } from './idiomas';

/**
 * Categoria de plural do CLDR para contagens inteiras. Tabela propria em vez de
 * `Intl.PluralRules`: o Intl do Hermes varia por build (o mesmo motivo de
 * `Inicio/inicio.ts` ter a propria tabela de meses), e um plural que some no
 * aparelho viraria texto quebrado em 73 idiomas de uma vez. O teste compara
 * esta tabela com o ICU do Node, regra por regra.
 *
 * So inteiros nao negativos: o app conta apps, sites, minutos e dias. Qualquer
 * outra coisa cai em `other`, a unica categoria que todo idioma tem.
 *
 * Um desvio de proposito: no CLDR o portugues do Brasil poe o zero no singular
 * ("0 minuto"). O app sempre disse "Faltam 0 segundos", e e assim que se fala
 * aqui — o pt-BR segue a voz do produto, nao a tabela.
 */
export const DESVIOS_DO_CLDR: readonly Idioma[] = ['pt-BR'];

export type CategoriaPlural = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

type Regra = (n: number) => CategoriaPlural;

const semPlural: Regra = () => 'other';

const umSoNoUm: Regra = (n) => (n === 1 ? 'one' : 'other');

const umNoZeroEUm: Regra = (n) => (n <= 1 ? 'one' : 'other');

/** Frances, italiano, espanhol, catalao e portugues: milhao redondo e `many`. */
function comMilhao(regra: Regra): Regra {
  return (n) => {
    const categoria = regra(n);
    if (categoria !== 'other') {
      return categoria;
    }
    return n !== 0 && n % 1_000_000 === 0 ? 'many' : 'other';
  };
}

const eslavoOriental: Regra = (n) => {
  const unidade = n % 10;
  const dezena = n % 100;
  if (unidade === 1 && dezena !== 11) {
    return 'one';
  }
  if (unidade >= 2 && unidade <= 4 && (dezena < 12 || dezena > 14)) {
    return 'few';
  }
  return 'many';
};

const polones: Regra = (n) => {
  if (n === 1) {
    return 'one';
  }
  const unidade = n % 10;
  const dezena = n % 100;
  return unidade >= 2 && unidade <= 4 && (dezena < 12 || dezena > 14) ? 'few' : 'many';
};

const tchecoEslovaco: Regra = (n) => {
  if (n === 1) {
    return 'one';
  }
  return n >= 2 && n <= 4 ? 'few' : 'other';
};

const servoCroata: Regra = (n) => {
  const unidade = n % 10;
  const dezena = n % 100;
  if (unidade === 1 && dezena !== 11) {
    return 'one';
  }
  return unidade >= 2 && unidade <= 4 && (dezena < 12 || dezena > 14) ? 'few' : 'other';
};

const esloveno: Regra = (n) => {
  const dezena = n % 100;
  if (dezena === 1) {
    return 'one';
  }
  if (dezena === 2) {
    return 'two';
  }
  return dezena === 3 || dezena === 4 ? 'few' : 'other';
};

const lituano: Regra = (n) => {
  const unidade = n % 10;
  const dezena = n % 100;
  const adolescente = dezena >= 11 && dezena <= 19;
  if (unidade === 1 && !adolescente) {
    return 'one';
  }
  return unidade >= 2 && !adolescente ? 'few' : 'other';
};

const leto: Regra = (n) => {
  const unidade = n % 10;
  const dezena = n % 100;
  if (unidade === 0 || (dezena >= 11 && dezena <= 19)) {
    return 'zero';
  }
  return unidade === 1 && dezena !== 11 ? 'one' : 'other';
};

const romeno: Regra = (n) => {
  if (n === 1) {
    return 'one';
  }
  const dezena = n % 100;
  return n === 0 || (dezena >= 1 && dezena <= 19) ? 'few' : 'other';
};

const arabe: Regra = (n) => {
  if (n === 0) {
    return 'zero';
  }
  if (n === 1) {
    return 'one';
  }
  if (n === 2) {
    return 'two';
  }
  const dezena = n % 100;
  if (dezena >= 3 && dezena <= 10) {
    return 'few';
  }
  return dezena >= 11 ? 'many' : 'other';
};

const hebraico: Regra = (n) => {
  if (n === 1) {
    return 'one';
  }
  return n === 2 ? 'two' : 'other';
};

/** Islandes e macedonio: termina em 1, menos 11. */
const terminaEmUm: Regra = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'one' : 'other');

const filipino: Regra = (n) => {
  const unidade = n % 10;
  return unidade === 4 || unidade === 6 || unidade === 9 ? 'other' : 'one';
};

const REGRAS: Readonly<Record<Idioma, Regra>> = {
  'pt-BR': comMilhao(umSoNoUm),
  'pt-PT': comMilhao(umSoNoUm),
  en: umSoNoUm,
  es: comMilhao(umSoNoUm),
  'es-419': comMilhao(umSoNoUm),
  fr: comMilhao(umNoZeroEUm),
  de: umSoNoUm,
  it: comMilhao(umSoNoUm),
  nl: umSoNoUm,
  ru: eslavoOriental,
  uk: eslavoOriental,
  pl: polones,
  cs: tchecoEslovaco,
  sk: tchecoEslovaco,
  hu: umSoNoUm,
  ro: romeno,
  bg: umSoNoUm,
  hr: servoCroata,
  sr: servoCroata,
  sl: esloveno,
  el: umSoNoUm,
  tr: umSoNoUm,
  ar: arabe,
  he: hebraico,
  fa: umNoZeroEUm,
  ur: umSoNoUm,
  hi: umNoZeroEUm,
  bn: umNoZeroEUm,
  mr: umSoNoUm,
  te: umSoNoUm,
  ta: umSoNoUm,
  gu: umNoZeroEUm,
  kn: umNoZeroEUm,
  ml: umSoNoUm,
  pa: umNoZeroEUm,
  'zh-Hans': semPlural,
  'zh-Hant': semPlural,
  ja: semPlural,
  ko: semPlural,
  vi: semPlural,
  th: semPlural,
  id: semPlural,
  ms: semPlural,
  fil: filipino,
  sv: umSoNoUm,
  da: umSoNoUm,
  nb: umSoNoUm,
  fi: umSoNoUm,
  et: umSoNoUm,
  lv: leto,
  lt: lituano,
  ca: comMilhao(umSoNoUm),
  sw: umSoNoUm,
  af: umSoNoUm,
  zu: umNoZeroEUm,
  am: umNoZeroEUm,
  az: umSoNoUm,
  kk: umSoNoUm,
  ka: umSoNoUm,
  hy: umNoZeroEUm,
  km: semPlural,
  lo: semPlural,
  my: semPlural,
  ne: umSoNoUm,
  si: umNoZeroEUm,
  mn: umSoNoUm,
  be: eslavoOriental,
  mk: terminaEmUm,
  sq: umSoNoUm,
  is: terminaEmUm,
  eu: umSoNoUm,
  gl: umSoNoUm,
  ky: umSoNoUm,
};

export function categoriaPlural(idioma: Idioma, n: number): CategoriaPlural {
  if (!Number.isInteger(n) || n < 0) {
    return 'other';
  }
  return REGRAS[idioma](n);
}
