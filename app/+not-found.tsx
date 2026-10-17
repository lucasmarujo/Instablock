import { useRouter, type Href } from 'expo-router';

import { Button } from '@/components/Button';
import { TelaDeEstado } from '@/components/TelaDeEstado';
import { useTextos } from '@/i18n/IdiomaContext';
import { useProtectionVerdictContext } from '@/state/ProtectionVerdictContext';
import type { ProtectionVerdict } from '@/state/verdict';

/**
 * `/` nao serve de destino: todo grupo tem um `index`, e o router resolve `/`
 * pro primeiro deles — que quase sempre esta com o `Stack.Protected` fechado, e
 * a navegacao e ignorada em silencio. O destino e o grupo do veredito atual.
 */
const INICIO_DO_VEREDITO: Record<Exclude<ProtectionVerdict, 'loading'>, Href> = {
  'plataforma-nao-suportada': '/(unsupported)',
  'onboarding-incompleto': '/(onboarding)',
  pausado: '/(paused)',
  protegido: '/(protected)/(tabs)',
};

export default function NotFound() {
  const t = useTextos();
  const router = useRouter();
  const { verdict } = useProtectionVerdictContext();

  return (
    <TelaDeEstado
      icon="compass-outline"
      title={t.estados.naoEncontrado.titulo}
      message={t.estados.naoEncontrado.mensagem}
      action={
        verdict === 'loading' ? undefined : (
          <Button
            label={t.estados.naoEncontrado.voltarParaOInicio}
            onPress={() => router.replace(INICIO_DO_VEREDITO[verdict])}
          />
        )
      }
    />
  );
}
