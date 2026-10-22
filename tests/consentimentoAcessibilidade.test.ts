import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { carregarTextos } from '../src/i18n/catalogos';
import { IDIOMAS } from '../src/i18n/idiomas';

const ROOT = path.join(import.meta.dirname, '..');
const CONSENTIMENTO = path.join(
  'src',
  'components',
  'Bloqueios',
  'ConsentimentoAcessibilidade.tsx'
);

function codigoDoApp(): string[] {
  return ['src', 'app'].flatMap((pasta) =>
    readdirSync(path.join(ROOT, pasta), { recursive: true, encoding: 'utf8' })
      .filter((arquivo) => /\.tsx?$/.test(arquivo))
      .map((arquivo) => path.join(pasta, arquivo))
  );
}

/**
 * Politica da API Accessibility do Google Play: a divulgacao em destaque vem
 * antes do pedido, e o app foi recusado por pedir com um botao so. Atalho direto
 * pras Configuracoes em outra tela e a mesma recusa de novo.
 */
test('barreira: so o consentimento abre as Configuracoes de acessibilidade', () => {
  const abrem = codigoDoApp().filter((arquivo) =>
    /sendIntent\(\s*'android\.settings\.ACCESSIBILITY_SETTINGS'/.test(
      readFileSync(path.join(ROOT, arquivo), 'utf8')
    )
  );
  assert.deepEqual(abrem, [CONSENTIMENTO]);
});

test('regressao: o consentimento tem dois botoes, concordar e recusar', () => {
  const fonte = readFileSync(path.join(ROOT, CONSENTIMENTO), 'utf8');
  assert.match(fonte, /<Button label=\{textos\.concordar\}/);
  assert.match(fonte, /<Button label=\{textos\.recusar\}/);
});

test('feliz: em todo idioma a divulgacao nomeia a API e os dois botoes dizem coisas diferentes', () => {
  for (const { tag } of IDIOMAS) {
    const textos = carregarTextos(tag).bloqueios.consentimentoAcessibilidade;
    assert.ok(textos.introducao.includes('AccessibilityService'), tag);
    assert.notEqual(textos.concordar, textos.recusar, tag);
  }
});
