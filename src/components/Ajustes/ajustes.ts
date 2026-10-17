/**
 * Logica pura da aba Ajustes. Sem import de react-native: o tipo de permissao
 * e redeclarado aqui pelo mesmo motivo de `Onboarding/passos.ts#filtrarApps`
 * — importar `@/native/blocker` chamaria `requireNativeModule` no teste.
 */

import type { Textos } from '../../i18n/catalogo';

type Permissoes = {
  usageAccess: boolean;
  overlay: boolean;
  batteryExempt: boolean;
  notifications: boolean;
  accessibility: boolean;
};

export type ItemDePermissao = {
  chave: keyof Permissoes;
  titulo: string;
  /** Para que serve — permissao sem motivo dito e permissao que ninguem corrige. */
  descricao: string;
  concedida: boolean;
  rotuloConcedida: string;
  rotuloAcao: string;
  /** Intent do Android que abre a tela certa; `null` = Configuracoes do app. */
  intent: string | null;
};

type TextosDaPermissao = Textos['ajustes']['permissoes']['acessoAoUso'];

const ITENS: {
  chave: keyof Permissoes;
  textos: (t: Textos) => TextosDaPermissao;
  intent: string | null;
}[] = [
  {
    chave: 'usageAccess',
    textos: (t) => t.ajustes.permissoes.acessoAoUso,
    intent: 'android.settings.USAGE_ACCESS_SETTINGS',
  },
  {
    chave: 'overlay',
    textos: (t) => t.ajustes.permissoes.sobreporApps,
    intent: 'android.settings.action.MANAGE_OVERLAY_PERMISSION',
  },
  {
    chave: 'accessibility',
    textos: (t) => t.ajustes.permissoes.leituraDoNavegador,
    intent: 'android.settings.ACCESSIBILITY_SETTINGS',
  },
  {
    chave: 'batteryExempt',
    textos: (t) => t.ajustes.permissoes.bateriaSemOtimizacao,
    intent: 'android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS',
  },
  {
    chave: 'notifications',
    textos: (t) => t.ajustes.permissoes.notificacoes,
    intent: null,
  },
];

/**
 * Checklist de permissoes na ordem em que importam. `null` (ainda nao sondado)
 * conta como pendente: o lado seguro e oferecer a correcao, mesma regra de
 * `nextMissingCorePermission`. A leitura do navegador so existe no Android — no
 * iOS quem filtra sites e o Family Controls.
 */
export function itensDePermissao(
  permissoes: Permissoes | null,
  plataforma: 'android' | 'ios',
  t: Textos
): ItemDePermissao[] {
  return ITENS.filter((item) => plataforma === 'android' || item.chave !== 'accessibility').map(
    ({ chave, textos, intent }) => {
      const { titulo, descricao, concedida, acao } = textos(t);
      return {
        chave,
        titulo,
        descricao,
        concedida: permissoes?.[chave] === true,
        rotuloConcedida: concedida,
        rotuloAcao: acao,
        intent,
      };
    }
  );
}

export function contarPendentes(itens: ItemDePermissao[]): number {
  return itens.filter((item) => !item.concedida).length;
}
