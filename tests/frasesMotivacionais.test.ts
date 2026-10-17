import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { IDIOMAS } from '../src/i18n/idiomas';

const ROOT = path.join(import.meta.dirname, '..');

const RES = 'native/modules/aceleralock-blocker/android/src/main/res';

/** A fonte das mil frases. As outras pastas sao traducao desta, na mesma ordem. */
const ARRAYS_XML = `${RES}/values-pt/arrays.xml`;

/**
 * A tela de bloqueio e nativa e nao tem teste: `BlockScreenView` vive em `android/`,
 * e so o modulo `core` (Kotlin puro) roda em JVM. O que da pra travar daqui e o
 * conteudo — que e onde mora o risco real desta feature, porque sao mil frases
 * escritas a mao e qualquer uma delas pode quebrar o build de recurso do Android
 * ou trair o tom do produto sem ninguem perceber na revisao.
 */
function frasesDe(arquivo: string): string[] {
  const xml = readFileSync(path.join(ROOT, arquivo), 'utf8');
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);
}

function frases(): string[] {
  return frasesDe(ARRAYS_XML);
}

/** Minusculas, sem acento e sem pontuacao — pega quase-repeticao, nao so a exata. */
function normalizar(frase: string): string {
  return frase
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

test('são exatamente 1000 frases', () => {
  assert.equal(frases().length, 1000);
});

test('nenhuma frase se repete — nem igual, nem quase igual', () => {
  const vistas = new Map<string, string>();
  for (const frase of frases()) {
    const chave = normalizar(frase);
    const anterior = vistas.get(chave);
    assert.equal(anterior, undefined, `repetida: "${frase}" já aparece como "${anterior}"`);
    vistas.set(chave, frase);
  }
});

test('nenhum caractere que o resource do Android exige escapar', () => {
  // Apostrofo e aspas o Android desescapa por conta propria e quebram a string;
  // & < > sao XML; % faz o lint tratar como format string. Nada disso e necessario
  // pra escrever portugues — a saida barata e nao usar, e nao escapar mil vezes.
  for (const frase of frases()) {
    assert.doesNotMatch(frase, /['"&<>%]/, `caractere que exige escape em: "${frase}"`);
    // `@` e `?` no inicio viram referencia de recurso em vez de texto literal.
    assert.doesNotMatch(frase, /^[@?]/, `inicio vira referencia de recurso em: "${frase}"`);
  }
});

test('cabem numa TextView de 17sp centralizada com 32dp de padding', () => {
  for (const frase of frases()) {
    assert.ok(
      frase.length >= 8 && frase.length <= 90,
      `${frase.length} caracteres, fora de 8..90: "${frase}"`
    );
  }
});

test('nenhuma frase culpa a pessoa — regra de tom do design-system §3.4', () => {
  // A tela esta do lado de quem chegou nela. Quem pediu ajuda e topou a espera nao
  // vai ser chamado de viciado pelo proprio app. Isso e regra do produto, entao
  // vira teste em vez de boa intencao na revisao.
  const culpa = /vici(ad|o)|fracass|pregui|vergonha|culpa|falhou|fraco|patetic|ridicul/i;
  for (const frase of frases()) {
    assert.doesNotMatch(frase, culpa, `tom de culpa em: "${frase}"`);
  }
});

test('nenhuma frase é só espaço ou quebra de linha malformada', () => {
  for (const frase of frases()) {
    assert.equal(frase, frase.trim(), `espaço nas bordas: "${frase}"`);
    assert.doesNotMatch(frase, /\s{2,}|\n/, `espaçamento irregular em: "${frase}"`);
  }
});

function pasta(android: string): string {
  return android === '' ? `${RES}/values` : `${RES}/values-${android}`;
}

function textosDe(arquivo: string): Map<string, string> {
  const xml = readFileSync(path.join(ROOT, arquivo), 'utf8');
  return new Map(
    [...xml.matchAll(/<string name="([^"]+)">([\s\S]*?)<\/string>/g)].map((m) => [m[1], m[2]])
  );
}

/**
 * Largura visual, nao contagem de caracteres: ideograma e hangul ocupam dois,
 * sinal combinante (devanagari, tailandes, arabe vocalizado) nao ocupa nada.
 */
function largura(texto: string): number {
  let total = 0;
  for (const ch of texto) {
    if (/[\p{M}\p{Cf}]/u.test(ch)) {
      continue;
    }
    total += /[ᄀ-ᅟ⺀-꓏가-힣豈-﫿︰-﹏＀-｠￠-￦\u{20000}-\u{3FFFD}]/u.test(ch) ? 2 : 1;
  }
  return total;
}

const NOMES_DO_OVERLAY = [...textosDe(`${RES}/values-pt/strings.xml`).keys()];

test('barreira de idioma: todo idioma do app tem as mil frases e os textos do overlay', () => {
  for (const { tag, android } of IDIOMAS) {
    const arrays = `${pasta(android)}/arrays.xml`;
    const strings = `${pasta(android)}/strings.xml`;
    assert.ok(existsSync(path.join(ROOT, arrays)), `${tag}: falta ${arrays}`);
    assert.ok(existsSync(path.join(ROOT, strings)), `${tag}: falta ${strings}`);
    assert.equal(frasesDe(arrays).length, 1000, `${tag}: quantidade de frases`);
    assert.deepEqual([...textosDe(strings).keys()].sort(), [...NOMES_DO_OVERLAY].sort(), tag);
  }
});

test('regressao: nenhuma traducao tem caractere que o resource do Android exige escapar', () => {
  for (const { tag, android } of IDIOMAS) {
    for (const frase of frasesDe(`${pasta(android)}/arrays.xml`)) {
      assert.doesNotMatch(frase, /['"&<>%]/, `${tag}: exige escape em "${frase}"`);
      assert.doesNotMatch(frase, /^[@?]/, `${tag}: vira referencia de recurso em "${frase}"`);
      assert.equal(frase, frase.trim(), `${tag}: espaco nas bordas em "${frase}"`);
      assert.doesNotMatch(frase, /\s{2,}|\n/, `${tag}: espacamento irregular em "${frase}"`);
    }
    for (const [nome, texto] of textosDe(`${pasta(android)}/strings.xml`)) {
      assert.doesNotMatch(texto, /['"&<>]/, `${tag} ${nome}: exige escape`);
      assert.ok(texto.trim().length > 0, `${tag} ${nome}: vazio`);
    }
  }
});

test('regressao: titulo do bloqueio leva o nome do app em todo idioma, uma vez so', () => {
  for (const { tag, android } of IDIOMAS) {
    for (const [nome, texto] of textosDe(`${pasta(android)}/strings.xml`)) {
      const marcas = texto.match(/%\S*/g) ?? [];
      const esperado = nome === 'aceleralock_block_title' ? ['%1$s'] : [];
      assert.deepEqual(
        marcas.map((marca) => marca.slice(0, 4)),
        esperado,
        `${tag} ${nome}: "${texto}"`
      );
    }
  }
});

/**
 * Traducao cresce ate 30% (alemao, russo). 110 de largura ainda cabe em quatro
 * linhas da TextView de 17sp — a frase quebra, nao corta.
 */
test('cabem na tela em todo idioma: largura visual de 6 a 110', () => {
  for (const { tag, android } of IDIOMAS) {
    for (const frase of frasesDe(`${pasta(android)}/arrays.xml`)) {
      const w = largura(frase);
      assert.ok(w >= 6 && w <= 110, `${tag}: largura ${w} em "${frase}"`);
    }
  }
});

test('nenhuma frase se repete dentro do mesmo idioma', () => {
  for (const { tag, android } of IDIOMAS) {
    const vistas = new Set<string>();
    for (const frase of frasesDe(`${pasta(android)}/arrays.xml`)) {
      const chave = frase
        .normalize('NFKC')
        .toLocaleLowerCase(tag)
        .replace(/[\p{P}\p{S}\s]+/gu, ' ')
        .trim();
      assert.ok(!vistas.has(chave), `${tag}: repetida "${frase}"`);
      vistas.add(chave);
    }
  }
});

/**
 * O plugin do expo-localization transforma a lista de idiomas em
 * `resourceConfigurations`, que apaga do APK toda pasta de idioma que ela nao
 * nomeia. Pasta que sobra aqui seria traducao jogada fora sem erro nenhum.
 */
test('regressao: nenhuma pasta values-* de idioma fica fora da lista do app', () => {
  const doApp = new Set<string>(IDIOMAS.map(({ android }) => android));
  const pastas = readdirSync(path.join(ROOT, RES)).filter(
    (nome) => nome.startsWith('values-') && existsSync(path.join(ROOT, RES, nome, 'strings.xml'))
  );
  for (const nome of pastas) {
    assert.ok(doApp.has(nome.slice('values-'.length)), `${nome} nao e idioma do app`);
  }
});
