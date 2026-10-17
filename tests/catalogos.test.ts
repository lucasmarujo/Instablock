import { readFileSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';

import type { Textos } from '../src/i18n/catalogo';
import { carregarTextos } from '../src/i18n/catalogos';
import { IDIOMAS, type Idioma } from '../src/i18n/idiomas';
import { categoriaPlural, type CategoriaPlural } from '../src/i18n/plural';
import { ptBR } from '../src/i18n/textos/pt-BR';

const ROOT = path.join(import.meta.dirname, '..');

type Folha =
  | { tipo: 'texto'; valor: string }
  | { tipo: 'lista'; valor: readonly string[] }
  | { tipo: 'plural'; valor: Readonly<Record<string, string>> };

/** Achata o catalogo em `caminho.da.chave -> folha`, que e o que se compara entre idiomas. */
function folhas(objeto: unknown, prefixo = '', saida = new Map<string, Folha>()) {
  for (const [chave, valor] of Object.entries(objeto as Record<string, unknown>)) {
    const caminho = prefixo ? `${prefixo}.${chave}` : chave;
    if (typeof valor === 'string') {
      saida.set(caminho, { tipo: 'texto', valor });
    } else if (Array.isArray(valor)) {
      saida.set(caminho, { tipo: 'lista', valor });
    } else if (valor !== null && typeof valor === 'object' && 'other' in valor) {
      saida.set(caminho, { tipo: 'plural', valor: valor as Record<string, string> });
    } else {
      folhas(valor, caminho, saida);
    }
  }
  return saida;
}

function marcadores(texto: string): Set<string> {
  return new Set([...texto.matchAll(/\{(\w+)\}/g)].map((m) => m[1]));
}

function marcadoresDaFolha(folha: Folha): Set<string> {
  if (folha.tipo === 'texto') {
    return marcadores(folha.valor);
  }
  const textos = folha.tipo === 'lista' ? folha.valor : Object.values(folha.valor);
  return new Set(textos.flatMap((texto) => [...marcadores(texto)]));
}

function textosDaFolha(folha: Folha): string[] {
  if (folha.tipo === 'texto') {
    return [folha.valor];
  }
  return folha.tipo === 'lista' ? [...folha.valor] : Object.values(folha.valor);
}

const FONTE = folhas(ptBR);
const CATALOGOS: [Idioma, Textos][] = IDIOMAS.map(({ tag }) => [tag, carregarTextos(tag)]);

test('feliz: todo idioma da lista tem catalogo, e o catalogo diz o proprio idioma', () => {
  for (const [tag, textos] of CATALOGOS) {
    assert.equal(textos.idioma, tag);
  }
});

test('barreira de completude: todo catalogo tem as mesmas chaves e tipos do pt-BR', () => {
  for (const [tag, textos] of CATALOGOS) {
    const traducao = folhas(textos);
    assert.deepEqual([...traducao.keys()].sort(), [...FONTE.keys()].sort(), tag);
    for (const [caminho, folha] of FONTE) {
      const traduzida = traducao.get(caminho)!;
      assert.equal(traduzida.tipo, folha.tipo, `${tag} ${caminho}`);
      if (folha.tipo === 'lista') {
        assert.equal(traduzida.valor.length, folha.valor.length, `${tag} ${caminho}`);
      }
    }
  }
});

test('regressao: nenhum texto vazio em nenhum idioma', () => {
  for (const [tag, textos] of CATALOGOS) {
    for (const [caminho, folha] of folhas(textos)) {
      for (const texto of textosDaFolha(folha)) {
        // Separador de lista pode ser so espaco: e assim que o tailandes junta itens.
        const conteudo = caminho.startsWith('lista.') ? texto : texto.trim();
        assert.ok(conteudo.length > 0, `${tag} ${caminho} vazio`);
      }
    }
  }
});

test('regressao: marcadores {x} de cada texto batem com o pt-BR', () => {
  for (const [tag, textos] of CATALOGOS) {
    for (const [caminho, folha] of folhas(textos)) {
      // Relogio de 12h troca {HH} por {h} e {periodo}; o teste do modelo de hora cobre.
      if (caminho === 'hora.modelo') {
        continue;
      }
      const esperados = marcadoresDaFolha(FONTE.get(caminho)!);
      const usados = marcadoresDaFolha(folha);
      if (folha.tipo === 'plural') {
        esperados.delete('n');
        usados.delete('n');
        for (const forma of Object.values(folha.valor)) {
          for (const marcador of marcadores(forma)) {
            assert.ok(
              marcador === 'n' || esperados.has(marcador),
              `${tag} ${caminho}: {${marcador}} nao existe no pt-BR`
            );
          }
        }
      }
      assert.deepEqual([...usados].sort(), [...esperados].sort(), `${tag} ${caminho}`);
    }
  }
});

test('barreira de plural: cada plural traz todas as formas que o idioma usa', () => {
  for (const [tag, textos] of CATALOGOS) {
    const usadas = new Set<CategoriaPlural>();
    for (let n = 0; n <= 1000; n += 1) {
      usadas.add(categoriaPlural(tag, n));
    }
    for (const [caminho, folha] of folhas(textos)) {
      if (folha.tipo !== 'plural') {
        continue;
      }
      for (const categoria of usadas) {
        assert.ok(folha.valor[categoria], `${tag} ${caminho}: falta a forma "${categoria}"`);
      }
    }
  }
});

/**
 * Texto que ficou igual ao pt-BR num catalogo de outro idioma e quase sempre
 * traducao esquecida. Texto curto ("{h}h", "AM") pode coincidir de verdade, por
 * isso so conta o que tem letras de sobra depois de tirar os marcadores.
 *
 * Nos vizinhos do portugues a coincidencia tambem e real ("Buscar app", "{n}
 * segundos" em espanhol): ali se toleram umas poucas — um namespace esquecido
 * daria dezenas. Em todo outro idioma, nenhuma.
 */
const VIZINHOS_DO_PORTUGUES: readonly Idioma[] = ['es', 'es-419', 'gl', 'ca'];
const COINCIDENCIAS_TOLERADAS = 10;

test('regressao: nenhum texto ficou em portugues num catalogo de outro idioma', () => {
  for (const [tag, textos] of CATALOGOS) {
    if (tag === 'pt-BR' || tag === 'pt-PT') {
      continue;
    }
    const esquecidos = [...folhas(textos)]
      .filter(([caminho, folha]) => {
        const original = textosDaFolha(FONTE.get(caminho)!);
        return textosDaFolha(folha).some(
          (texto, i) =>
            texto === original[i] &&
            texto.replace(/\{\w+\}/g, '').replace(/[^\p{L}]/gu, '').length >= 8
        );
      })
      .map(([caminho]) => caminho);
    if (VIZINHOS_DO_PORTUGUES.includes(tag)) {
      assert.ok(
        esquecidos.length <= COINCIDENCIAS_TOLERADAS,
        `${tag} com ${esquecidos.length} textos iguais ao pt-BR: ${esquecidos.join(', ')}`
      );
    } else {
      assert.deepEqual(esquecidos, [], `${tag} com texto em portugues`);
    }
  }
});

test('feliz: modelo de hora de cada idioma usa so marcadores que a formatacao conhece', () => {
  const conhecidos = new Set(['H', 'HH', 'h', 'hh', 'mm', 'periodo']);
  for (const [tag, textos] of CATALOGOS) {
    const usados = marcadores(textos.hora.modelo);
    assert.ok(usados.has('mm'), `${tag} sem minutos`);
    assert.ok(
      ['H', 'HH', 'h', 'hh'].some((m) => usados.has(m)),
      `${tag} sem hora`
    );
    for (const marcador of usados) {
      assert.ok(conhecidos.has(marcador), `${tag}: {${marcador}} desconhecido`);
    }
    if (usados.has('h') || usados.has('hh')) {
      assert.ok(usados.has('periodo'), `${tag}: hora de 12h sem AM/PM e ambigua`);
    }
  }
});

test('regressao: app.json declara ao Android e ao iOS exatamente os idiomas do catalogo', () => {
  const app = JSON.parse(readFileSync(path.join(ROOT, 'app.json'), 'utf8'));
  const plugin = app.expo.plugins.find(
    (item: unknown) => Array.isArray(item) && item[0] === 'expo-localization'
  );
  assert.ok(plugin, 'expo-localization sem configuracao no app.json');
  assert.equal(plugin[1].supportsRTL, true);
  assert.deepEqual(
    plugin[1].supportedLocales.ios,
    IDIOMAS.map(({ tag }) => tag)
  );
  /**
   * No Android a lista vira `resourceConfigurations`, que descarta toda pasta
   * `values-*` que ela nao nomeia. Por isso cada tag tem de ser a da pasta, com o
   * codigo antigo (`iw`, `in`) — uma tag "certa" que nao bata com a pasta apagaria
   * a traducao do APK sem erro nenhum.
   */
  const daPasta = (pasta: string) =>
    pasta === ''
      ? 'en'
      : pasta.startsWith('b+')
        ? pasta.slice(2).split('+').join('-')
        : pasta.replace('-r', '-');
  assert.deepEqual(
    plugin[1].supportedLocales.android,
    IDIOMAS.map(({ android }) => daPasta(android))
  );
});
