import { test } from 'node:test';
import assert from 'node:assert/strict';

import { IDIOMAS, IDIOMA_PADRAO } from '../src/i18n/idiomas';
import { resolverIdioma } from '../src/i18n/resolverIdioma';

test('feliz: aparelho em ingles abre o app em ingles', () => {
  assert.equal(resolverIdioma(['en-US']), 'en');
  assert.equal(resolverIdioma(['en-GB']), 'en');
});

test('feliz: cada idioma da lista e escolhido pela propria tag', () => {
  for (const { tag } of IDIOMAS) {
    assert.equal(resolverIdioma([tag]), tag, tag);
  }
});

test('feliz: idioma fora da lista cai no ingles, nunca no portugues', () => {
  assert.equal(IDIOMA_PADRAO, 'en');
  assert.equal(resolverIdioma(['yo-NG']), 'en');
  assert.equal(resolverIdioma([]), 'en');
});

test('feliz: o primeiro idioma da preferencia que o app fala vence', () => {
  assert.equal(resolverIdioma(['yo-NG', 'fr-FR', 'en-US']), 'fr');
  assert.equal(resolverIdioma(['de-AT', 'pt-BR']), 'de');
});

test('regressao: portugues fora do Brasil recebe o europeu, como o Android faz', () => {
  assert.equal(resolverIdioma(['pt-BR']), 'pt-BR');
  assert.equal(resolverIdioma(['pt']), 'pt-BR');
  assert.equal(resolverIdioma(['pt-PT']), 'pt-PT');
  assert.equal(resolverIdioma(['pt-AO']), 'pt-PT');
  assert.equal(resolverIdioma(['pt-MZ']), 'pt-PT');
});

test('regressao: espanhol das Americas recebe es-419, o resto recebe o da Espanha', () => {
  for (const tag of ['es-MX', 'es-AR', 'es-CO', 'es-US', 'es-419']) {
    assert.equal(resolverIdioma([tag]), 'es-419', tag);
  }
  for (const tag of ['es-ES', 'es', 'es-GQ']) {
    assert.equal(resolverIdioma([tag]), 'es', tag);
  }
});

test('regressao: chines escolhe a escrita pela regiao quando a tag nao diz', () => {
  assert.equal(resolverIdioma(['zh-CN']), 'zh-Hans');
  assert.equal(resolverIdioma(['zh-SG']), 'zh-Hans');
  assert.equal(resolverIdioma(['zh']), 'zh-Hans');
  assert.equal(resolverIdioma(['zh-TW']), 'zh-Hant');
  assert.equal(resolverIdioma(['zh-HK']), 'zh-Hant');
  assert.equal(resolverIdioma(['zh-Hant-MO']), 'zh-Hant');
  assert.equal(resolverIdioma(['zh-Hans-HK']), 'zh-Hans');
});

test('regressao: codigos antigos do Java chegam no idioma certo', () => {
  assert.equal(resolverIdioma(['iw-IL']), 'he');
  assert.equal(resolverIdioma(['in-ID']), 'id');
  assert.equal(resolverIdioma(['tl-PH']), 'fil');
  assert.equal(resolverIdioma(['no-NO']), 'nb');
  assert.equal(resolverIdioma(['nb-NO']), 'nb');
});

test('regressao: tag que pede outra escrita e pulada em vez de receber a errada', () => {
  assert.equal(resolverIdioma(['sr-Latn-RS']), 'en');
  assert.equal(resolverIdioma(['sr-Latn-RS', 'hr-HR']), 'hr');
  assert.equal(resolverIdioma(['sr-Cyrl-RS']), 'sr');
  assert.equal(resolverIdioma(['pa-Arab-PK']), 'en');
  assert.equal(resolverIdioma(['pa-Guru-IN']), 'pa');
});

test('regressao: separador e caixa do Android nao confundem a leitura', () => {
  assert.equal(resolverIdioma(['pt_BR']), 'pt-BR');
  assert.equal(resolverIdioma(['EN-us']), 'en');
  assert.equal(resolverIdioma(['', 'x', '123', 'de']), 'de');
});
