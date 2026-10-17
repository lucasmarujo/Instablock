import { IDIOMAS, IDIOMA_PADRAO, type Idioma } from './idiomas';

/**
 * Escolhe o catalogo a partir das tags do aparelho, na ordem de preferencia da
 * pessoa. Sem import de react-native nem de expo-localization: e o que o
 * `node --test` consegue carregar.
 *
 * As regras imitam o que o Android faz ao escolher `res/values-*` pro overlay
 * nativo. Se o JS escolhesse diferente, a mesma pessoa leria o app num idioma e
 * a tela de bloqueio em outro.
 */

/** Codigos antigos que o Java e alguns aparelhos ainda entregam. */
const CODIGO_ATUAL: Readonly<Record<string, string>> = {
  iw: 'he',
  in: 'id',
  ji: 'yi',
  tl: 'fil',
  no: 'nb',
  nn: 'nb',
  mo: 'ro',
};

/** Filhos de `es-419` no `parentLocales` do CLDR — o resto do espanhol e o da Espanha. */
const REGIOES_ES_419 = new Set([
  '419',
  'AR',
  'BO',
  'BR',
  'BZ',
  'CL',
  'CO',
  'CR',
  'CU',
  'DO',
  'EC',
  'GT',
  'HN',
  'MX',
  'NI',
  'PA',
  'PE',
  'PR',
  'PY',
  'SV',
  'US',
  'UY',
  'VE',
]);

/** Regioes cujo chines e o tradicional quando a tag nao diz a escrita. */
const REGIOES_HANT = new Set(['TW', 'HK', 'MO']);

type TagDoAparelho = { idioma: string; escrita: string | null; regiao: string | null };

function lerTag(tag: string): TagDoAparelho | null {
  const partes = tag.trim().replace(/_/g, '-').split('-').filter(Boolean);
  if (partes.length === 0 || !/^[a-zA-Z]{2,3}$/.test(partes[0])) {
    return null;
  }
  const idioma = partes[0].toLowerCase();
  let escrita: string | null = null;
  let regiao: string | null = null;
  for (const parte of partes.slice(1)) {
    if (escrita === null && regiao === null && /^[a-zA-Z]{4}$/.test(parte)) {
      escrita = parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase();
    } else if (regiao === null && /^([a-zA-Z]{2}|\d{3})$/.test(parte)) {
      regiao = parte.toUpperCase();
    }
  }
  return { idioma: CODIGO_ATUAL[idioma] ?? idioma, escrita, regiao };
}

function candidato({ idioma, escrita, regiao }: TagDoAparelho): string {
  if (idioma === 'zh') {
    if (escrita === 'Hans' || escrita === 'Hant') {
      return `zh-${escrita}`;
    }
    return regiao !== null && REGIOES_HANT.has(regiao) ? 'zh-Hant' : 'zh-Hans';
  }
  if (idioma === 'pt') {
    return regiao === null || regiao === 'BR' ? 'pt-BR' : 'pt-PT';
  }
  if (idioma === 'es') {
    return regiao !== null && REGIOES_ES_419.has(regiao) ? 'es-419' : 'es';
  }
  return idioma;
}

const POR_TAG = new Map<string, (typeof IDIOMAS)[number]>(IDIOMAS.map((item) => [item.tag, item]));

/**
 * Primeiro idioma da lista que o app fala; `IDIOMA_PADRAO` quando nenhum. Uma
 * tag que pede outra escrita (`sr-Latn`) e pulada em vez de receber a escrita
 * errada — e o mesmo que o Android faz com `values-sr`.
 */
export function resolverIdioma(tagsDoAparelho: readonly string[]): Idioma {
  for (const tag of tagsDoAparelho) {
    const lida = lerTag(tag);
    if (lida === null) {
      continue;
    }
    const encontrado = POR_TAG.get(candidato(lida));
    if (encontrado === undefined) {
      continue;
    }
    const escritaPedida = lida.idioma === 'zh' ? null : lida.escrita;
    if (escritaPedida !== null && escritaPedida !== encontrado.escrita) {
      continue;
    }
    return encontrado.tag;
  }
  return IDIOMA_PADRAO;
}
