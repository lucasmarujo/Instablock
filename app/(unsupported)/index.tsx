import { Linking } from 'react-native';

import { Button } from '@/components/Button';
import { TelaDeEstado } from '@/components/TelaDeEstado';
import { useTextos } from '@/i18n/IdiomaContext';
import { formatar } from '@/i18n/formatos';

const DOMINIO = 'aceleralock.marujo.dev';
const SITE = `https://${DOMINIO}`;

/**
 * Veredito 'plataforma-nao-suportada'. O texto segue o Paper (e o da versao
 * anterior desta tela), que fala do iPhone.
 */
export default function PlatformNotSupported() {
  const t = useTextos();

  return (
    <TelaDeEstado
      icon="phone-portrait-outline"
      title={t.estados.naoSuportado.titulo}
      message={t.estados.naoSuportado.mensagem}
      action={
        <Button
          label={t.estados.naoSuportado.saibaMais}
          variant="secondary"
          onPress={() => void Linking.openURL(SITE)}
        />
      }
      caption={formatar(t.estados.naoSuportado.legenda, { site: DOMINIO })}
    />
  );
}
