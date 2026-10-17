import { useLocales } from 'expo-localization';
import { createContext, useContext, useMemo, type ReactNode } from 'react';

import type { Textos } from './catalogo';
import { carregarTextos } from './catalogos';
import { resolverIdioma } from './resolverIdioma';

const IdiomaContext = createContext<Textos | null>(null);

/**
 * Monta uma vez na raiz, por fora de tudo: a `SplashScreen` ja fala com a pessoa.
 * `useLocales` reage a troca de idioma com o app aberto (o plugin do
 * expo-localization poe `locale` no `configChanges` da Activity), entao o texto
 * troca sem reiniciar. A direcao do layout (arabe, hebraico, persa, urdu) e do
 * React Native e so vira na proxima abertura.
 */
export function IdiomaProvider({ children }: { children: ReactNode }) {
  const locales = useLocales();
  const textos = useMemo(
    () => carregarTextos(resolverIdioma(locales.map((locale) => locale.languageTag))),
    [locales]
  );
  return <IdiomaContext.Provider value={textos}>{children}</IdiomaContext.Provider>;
}

export function useTextos(): Textos {
  const textos = useContext(IdiomaContext);
  if (!textos) {
    throw new Error('useTextos precisa estar dentro de IdiomaProvider');
  }
  return textos;
}
