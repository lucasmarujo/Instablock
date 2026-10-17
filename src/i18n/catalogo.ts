import type { Idioma } from './idiomas';
import type { CategoriaPlural } from './plural';
import type { ptBR } from './textos/pt-BR';

/** `other` sempre; as demais so nos idiomas cuja regra as usa. */
export type Plural = { readonly other: string } & {
  readonly [Categoria in Exclude<CategoriaPlural, 'other'>]?: string;
};

type Tupla<T extends readonly string[]> = { readonly [Indice in keyof T]: string };

/**
 * A forma de todo catalogo, derivada do pt-BR: chave que falta numa traducao e
 * erro de `tsc`, nao texto sumido no aparelho. Listas mantem o tamanho (sete
 * dias, doze meses) e plural aceita as categorias que o idioma precisar.
 */
export type Catalogo<T> = {
  readonly [Chave in keyof T]: Chave extends 'idioma'
    ? Idioma
    : T[Chave] extends string
      ? string
      : T[Chave] extends readonly string[]
        ? Tupla<T[Chave]>
        : T[Chave] extends { readonly other: string }
          ? Plural
          : Catalogo<T[Chave]>;
};

export type Textos = Catalogo<typeof ptBR>;
