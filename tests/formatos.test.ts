import { test } from 'node:test';
import assert from 'node:assert/strict';

import type { Textos } from '../src/i18n/catalogo';
import {
  capitalizar,
  contar,
  formatar,
  formatarHoraDoDia,
  juntarLista,
} from '../src/i18n/formatos';
import { ptBR } from '../src/i18n/textos/pt-BR';

function comIdioma(idioma: Textos['idioma'], mudancas: Partial<Textos> = {}): Textos {
  return { ...ptBR, idioma, ...mudancas };
}

test('feliz: formatar troca cada marcador pelo valor', () => {
  assert.equal(formatar('{a} e {b}', { a: 'Instagram', b: 3 }), 'Instagram e 3');
  assert.equal(formatar('{a}{a}', { a: 'x' }), 'xx');
});

test('regressao: marcador sem valor fica visivel em vez de virar "undefined"', () => {
  assert.equal(formatar('{nome} esta bloqueado', {}), '{nome} esta bloqueado');
  assert.equal(formatar('{toString}', {}), '{toString}');
});

test('feliz: contar escolhe a forma do idioma e preenche {n}', () => {
  const entrada = { one: '{n} app', other: '{n} apps' };
  assert.equal(contar(ptBR, entrada, 1), '1 app');
  assert.equal(contar(ptBR, entrada, 0), '0 apps');
  assert.equal(contar(ptBR, entrada, 7), '7 apps');
});

test('regressao: forma que o catalogo nao trouxe cai em other, nunca em vazio', () => {
  const ru = comIdioma('ru');
  assert.equal(contar(ru, { one: '{n} одно', other: '{n} много' }, 5), '5 много');
  const ar = comIdioma('ar');
  assert.equal(contar(ar, { other: '{n} x', two: 'dois' }, 2), 'dois');
  assert.equal(contar(ar, { other: '{n} x', two: 'dois' }, 3), '3 x');
});

test('feliz: contar aceita outros marcadores junto com a contagem', () => {
  const entrada = { one: '{n} app em {lugar}', other: '{n} apps em {lugar}' };
  assert.equal(contar(ptBR, entrada, 2, { lugar: 'pausa' }), '2 apps em pausa');
});

test('feliz: lista junta com a conjuncao do idioma', () => {
  assert.equal(juntarLista(ptBR, []), '');
  assert.equal(juntarLista(ptBR, ['a']), 'a');
  assert.equal(juntarLista(ptBR, ['a', 'b']), 'a e b');
  assert.equal(juntarLista(ptBR, ['a', 'b', 'c']), 'a, b e c');
  const ja = comIdioma('ja', { lista: { separador: '、', ultimoSeparador: '、' } });
  assert.equal(juntarLista(ja, ['a', 'b', 'c']), 'a、b、c');
});

test('feliz: capitalizar usa a regra do idioma', () => {
  assert.equal(capitalizar(ptBR, 'sábado'), 'Sábado');
  assert.equal(capitalizar(comIdioma('tr'), 'istanbul'), 'İstanbul');
  assert.equal(capitalizar(ptBR, ''), '');
});

test('regressao: capitalizar nao parte caractere fora do plano basico', () => {
  assert.equal(capitalizar(ptBR, '𝒶bc'), '𝒶bc');
});

test('feliz: hora do dia no modelo de cada idioma', () => {
  assert.equal(formatarHoraDoDia(ptBR, 8 * 60 + 15), '08:15');
  assert.equal(formatarHoraDoDia(ptBR, 13 * 60), '13:00');
  const en = comIdioma('en', { hora: { modelo: '{h}:{mm} {periodo}', periodos: ['AM', 'PM'] } });
  assert.equal(formatarHoraDoDia(en, 0), '12:00 AM');
  assert.equal(formatarHoraDoDia(en, 12 * 60 + 30), '12:30 PM');
  assert.equal(formatarHoraDoDia(en, 13 * 60), '1:00 PM');
  const ko = comIdioma('ko', {
    hora: { modelo: '{periodo} {h}:{mm}', periodos: ['오전', '오후'] },
  });
  assert.equal(formatarHoraDoDia(ko, 9 * 60), '오전 9:00');
});

test('regressao: hora da a volta na meia-noite nos dois sentidos', () => {
  assert.equal(formatarHoraDoDia(ptBR, 24 * 60 + 5), '00:05');
  assert.equal(formatarHoraDoDia(ptBR, -15), '23:45');
});
