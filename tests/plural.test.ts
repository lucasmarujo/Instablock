import { test } from 'node:test';
import assert from 'node:assert/strict';

import { IDIOMAS } from '../src/i18n/idiomas';
import { DESVIOS_DO_CLDR, categoriaPlural } from '../src/i18n/plural';

const CONTAGENS = [
  ...Array.from({ length: 10_001 }, (_, n) => n),
  1_000_000,
  1_000_001,
  2_000_000,
  10_000_000,
];

/**
 * O ICU do Node e a referencia: tem o CLDR inteiro. O app nao pode usar o
 * `Intl.PluralRules` do Hermes, que varia por build — entao a tabela propria
 * precisa bater com esta, idioma por idioma.
 */
test('feliz: plural de cada idioma bate com o CLDR do ICU de 0 a 10000 e nos milhoes', () => {
  for (const { tag } of IDIOMAS) {
    if (DESVIOS_DO_CLDR.includes(tag)) {
      continue;
    }
    const icu = new Intl.PluralRules(tag);
    for (const n of CONTAGENS) {
      assert.equal(categoriaPlural(tag, n), icu.select(n), `${tag} com ${n}`);
    }
  }
});

test('regressao: pt-BR mantem o zero no plural, so diverge do CLDR nisso', () => {
  assert.deepEqual(DESVIOS_DO_CLDR, ['pt-BR']);
  assert.equal(categoriaPlural('pt-BR', 0), 'other');
  assert.equal(categoriaPlural('pt-BR', 1), 'one');
  assert.equal(categoriaPlural('pt-BR', 2), 'other');
  const icu = new Intl.PluralRules('pt-BR');
  for (const n of CONTAGENS.filter((n) => n !== 0)) {
    assert.equal(categoriaPlural('pt-BR', n), icu.select(n), `pt-BR com ${n}`);
  }
});

test('feliz: arabe usa as seis formas', () => {
  assert.deepEqual(
    [0, 1, 2, 3, 11, 100].map((n) => categoriaPlural('ar', n)),
    ['zero', 'one', 'two', 'few', 'many', 'other']
  );
});

test('regressao: contagem fora dos inteiros nao negativos cai em other', () => {
  for (const n of [-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY]) {
    assert.equal(categoriaPlural('ru', n), 'other');
    assert.equal(categoriaPlural('en', n), 'other');
  }
});
