/**
 * Logica pura da aba Bloqueios. Sem import de react-native.
 *
 * A gravacao continua sendo no "Salvar" e nao a cada toque (ver
 * `setBlockedPackages`): o que muda e que o botao so aparece quando ha o que
 * salvar, e diz o que vai mudar.
 */

import type { Textos } from '../../i18n/catalogo';
import { contar, formatar } from '../../i18n/formatos';

export type Alteracoes = {
  entram: string[];
  saem: string[];
};

/**
 * O que difere entre a lista gravada e a marcada na tela. Generico (pacotes de
 * app ou dominios) e restrito ao `universo` visivel quando ele vem: pacote
 * gravado que nao aparece na lista nao e "saiu" — e o caso que
 * `mergeBlockedPackages` preserva.
 */
export function calcularAlteracoes(
  salvos: Iterable<string>,
  marcados: Iterable<string>,
  universo?: Iterable<string>
): Alteracoes {
  const salvosSet = new Set(salvos);
  const marcadosSet = new Set(marcados);
  const visiveis = universo ? new Set(universo) : null;
  const dentro = (item: string) => visiveis === null || visiveis.has(item);

  return {
    entram: [...marcadosSet].filter((item) => dentro(item) && !salvosSet.has(item)),
    saem: [...salvosSet].filter((item) => dentro(item) && !marcadosSet.has(item)),
  };
}

export function totalDeAlteracoes(alteracoes: Alteracoes): number {
  return alteracoes.entram.length + alteracoes.saem.length;
}

/**
 * Linha de apoio da barra de salvar. Com uma alteracao so, diz qual; com mais,
 * resume — a lista inteira nao cabe na barra.
 */
export function descreverAlteracoes(
  alteracoes: Alteracoes,
  rotulo: (item: string) => string,
  t: Textos
): string {
  const { entram, saem } = alteracoes;
  const textos = t.bloqueios.barraSalvar;
  if (entram.length === 1 && saem.length === 0) {
    return formatar(textos.umItemEntra, { nome: rotulo(entram[0]) });
  }
  if (saem.length === 1 && entram.length === 0) {
    return formatar(textos.umItemSai, { nome: rotulo(saem[0]) });
  }
  const quantosEntram = contar(t, textos.quantosEntram, entram.length);
  const quantosSaem = contar(t, textos.quantosSaem, saem.length);
  if (entram.length > 0 && saem.length > 0) {
    return formatar(textos.entramESaem, { entram: quantosEntram, saem: quantosSaem });
  }
  if (entram.length > 0) {
    return quantosEntram;
  }
  return saem.length > 0 ? quantosSaem : '';
}

export function tituloDaBarra(alteracoes: Alteracoes, t: Textos): string {
  return contar(t, t.bloqueios.barraSalvar.titulo, totalDeAlteracoes(alteracoes));
}

/**
 * Secoes pela lista *gravada*, nao pela marcacao em curso: se a linha pulasse
 * de secao a cada toque, o dedo perderia o lugar. A legenda da linha ("Bloqueia
 * ao salvar") e quem conta o que vai mudar.
 */
export function separarPorSalvos<T extends { packageName: string }>(
  apps: T[],
  salvos: Iterable<string>
): { bloqueados: T[]; outros: T[] } {
  const salvosSet = new Set(salvos);
  return {
    bloqueados: apps.filter((app) => salvosSet.has(app.packageName)),
    outros: apps.filter((app) => !salvosSet.has(app.packageName)),
  };
}

/** Legenda de status de uma linha. `null` = linha sem mudanca e fora da lista. */
export function legendaDaLinha(salvo: boolean, marcado: boolean, t: Textos): string | null {
  if (salvo && marcado) return t.bloqueios.legendaDaLinha.bloqueado;
  if (!salvo && marcado) return t.bloqueios.legendaDaLinha.bloqueiaAoSalvar;
  if (salvo && !marcado) return t.bloqueios.legendaDaLinha.saiAoSalvar;
  return null;
}
