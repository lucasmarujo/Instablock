<div align="center">

<img alt="Instablock" src="assets/icon-1024.png" width="132">

<h1>Instablock</h1>

<br>

**Fricção deliberada entre você e o app que está comendo o seu dia.**

Bloqueio de apps e sites que roda **100% no aparelho** — sem backend, sem cadastro, sem nuvem.

<br>

[![Google Play](https://img.shields.io/badge/Google_Play-Baixar-3DDC84?logo=googleplay&logoColor=white)](https://play.google.com/store/apps/details?id=dev.marujo.appblocker)
[![CI](https://github.com/lucasmarujo/Instablock/actions/workflows/ci.yml/badge.svg)](https://github.com/lucasmarujo/Instablock/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-03c3bf.svg)](LICENSE)
[![Idiomas](https://img.shields.io/badge/Idiomas-73-03c3bf.svg)](#idiomas)
[![React Native](https://img.shields.io/badge/React_Native-0.86-61DAFB?logo=react&logoColor=white)](https://reactnative.dev)
[![Expo](https://img.shields.io/badge/Expo-57-000020?logo=expo&logoColor=white)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Kotlin](https://img.shields.io/badge/Kotlin-JVM-7F52FF?logo=kotlin&logoColor=white)](https://kotlinlang.org)

**[Baixar no Google Play](https://play.google.com/store/apps/details?id=dev.marujo.appblocker)** ·
**[Site](https://acelera.marujo.dev)** ·
**[Privacidade e termos](https://aceleralock.marujo.dev)**

<br>

Um projeto open source construído com a comunidade

<img alt="AceleraDev" src="assets/aceleradev-logo.png" width="96">

</div>

---

## Sumário

- [O problema](#o-problema)
- [O que o app faz](#o-que-o-app-faz)
- [As duas restrições que explicam este código](#as-duas-restrições-que-explicam-este-código)
- [Arquitetura](#arquitetura)
- [Stack](#stack)
- [Começando](#começando)
- [Testes](#testes)
- [Idiomas](#idiomas)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Decisões contraintuitivas](#decisões-contraintuitivas)
- [Estado atual](#estado-atual)
- [Marca e design system](#marca-e-design-system)
- [Contribuindo](#contribuindo)
- [Comunidade AceleraDev](#comunidade-aceleradev)
- [Licença](#licença)

---

## O problema

Aplicativos de controle de tempo de tela costumam falhar pelo mesmo motivo: o botão
de desligar fica a um toque de distância. Quando o impulso chega — e ele dura
segundos —, desativar o bloqueio é mais fácil do que resistir a ele.

O Instablock ataca exatamente esse ponto. Abrir um app bloqueado não é impossível:
é **caro**.

| Ação | Custo |
| --- | --- |
| Abrir um app bloqueado | Overlay imediato, sem botão de escape |
| Pedir desbloqueio | Espera monotônica acumulada |
| Desligar a proteção | Passa pela **mesma** espera |
| Reduzir a duração da espera | Passa pela **mesma** espera |
| Desistir do pedido | **Grátis** — desistir é o resultado desejado |
| Apps críticos (telefone, emergência) | Nunca bloqueados |

O produto é **fricção, não prisão** — e a diferença é deliberada. Quem usa isto é
alguém que pediu ajuda contra o próprio impulso, não um invasor de quem o app se
defende.

---

## O que o app faz

- **Bloqueia apps e sites.** Abriu um app da lista, a tela do Instablock aparece por
  cima na hora. Site é bloqueado por domínio e subdomínios; no Android, a única coisa
  lida é a barra de endereço dos navegadores suportados.
- **Uma frase entre mil.** A tela de bloqueio sorteia uma frase por tentativa — do lado
  da pessoa, sem sermão e sem contar tentativas.
- **Mudar de ideia pede espera.** Desligar a proteção, reduzir a espera ou desligar o
  modo restrito custam 30 minutos (configurável). Desistir do pedido é grátis.
- **Modo restrito.** Trava a lista de bloqueio: ligar é imediato, desligar passa pela
  espera.
- **Horários livres por app.** Faixas por dia da semana em que um app fica liberado — e
  só valem com data, hora e fuso automáticos, para ninguém abrir o app mudando o relógio.
- **Tempo de tela.** O próprio app mede e guarda o histórico. Dia sem medição aparece
  como sem leitura, nunca como zero.
- **Fala o idioma do celular.** 73 idiomas, inclusive árabe, hebraico, persa e urdu da
  direita para a esquerda. Ver [Idiomas](#idiomas).
- **Nada sai do aparelho.** Sem conta, sem servidor, sem anúncio, sem rastreador.

---

## As duas restrições que explicam este código

Sem elas, boa parte do repositório parece rigor gratuito.

### 1. No iOS, o identificador do app nunca sai do aparelho

O Family Controls devolve `ApplicationToken`, e o `bundleIdentifier` é `nil` **por
design** para tudo que vem do `FamilyActivityPicker`. Não é escolha de modelagem: a
plataforma não deixa. É por isso que o alvo de bloqueio é uma referência opaca, e
não um nome de pacote.

### 2. Sem servidor, o relógio do aparelho é do dono do aparelho

Quem quer burlar adianta a hora. Por isso **toda defesa de tempo aqui é
monotônica** — espera e concessão contam `elapsedRealtime`, nunca hora de parede, e
**não existe "instante de fim"** para comparar em lugar nenhum do caminho de
decisão.

### O teto declarado: desinstalar derrota tudo

> [!IMPORTANT]
> **Desinstalar** sempre está disponível e apaga a configuração. **Force-stop** pelas
> Configurações é ainda mais barato: dois toques, e o app entra no *stopped state*,
> onde o Android não entrega mais broadcast nenhum — nem `BOOT_COMPLETED`. A proteção
> fica desligada atravessando reboot, até a pessoa abrir o app de novo.

Não há defesa contra isso sem Device Admin, que foi **vetado**: app que impede a
própria remoção cai em *Deceptive Behavior* do Google Play e, pior, vira malware aos
olhos de quem instalou.

A resposta do produto é **medir e mostrar**, não impedir. Para quem instalou a
ferramenta, um lapso invisível é o que a faz falhar em silêncio; um lapso visível é
exatamente a informação que ela veio buscar.

**Antes de abrir uma issue propondo impedir a desinstalação, leia
[`docs/decisoes.md`](docs/decisoes.md).** A resposta já está lá, com o porquê.

---

## Arquitetura

Três camadas e uma fronteira que importa: **a regra vive em Kotlin puro, testável em
JVM; o que toca o Android é adaptador burro.**

```mermaid
flowchart TB
    subgraph JS["React Native · TypeScript"]
        ROUTER["expo-router<br/>app/"]
        COMP["Componentes<br/>src/components/"]
        STATE["Veredito e estado local<br/>src/state/verdict.ts"]
        I18N["Idioma do aparelho<br/>src/i18n/"]
        BRIDGE["Ponte fina<br/>src/native/blocker.ts"]
    end

    subgraph MODULE["Módulo nativo · aceleralock-blocker"]
        subgraph ANDROID["android/ — adaptadores, sem decisão"]
            EXPO["AceleralockBlockerModule<br/>ponte Expo"]
            SERVICE["BlockerService<br/>foreground service + poll"]
            DETECT["ForegroundAppDetector"]
            OVERLAY["OverlayPresenter<br/>BlockScreenView"]
            COLLECT["ScreenTimeCollector"]
            SITES["SiteAccessibilityService<br/>só a barra de endereço"]
        end

        subgraph CORE["core/ — Kotlin puro, testado em JVM"]
            DECIDER["BlockDecider"]
            WAIT["WaitingPeriod"]
            GRANT["GrantWindow"]
            POLICY["BlockPolicy · PolicyReader"]
            SCHEDULE["ScheduleExceptions<br/>horários livres"]
            MATCH["SiteMatcher"]
            LOG["ProtectionLog"]
            SCREEN["ScreenTime<br/>Sessions · Buckets · History"]
        end
    end

    subgraph OS["Android"]
        USAGE["UsageStatsManager"]
        WINDOW["WindowManager<br/>TYPE_APPLICATION_OVERLAY"]
        A11Y["AccessibilityService"]
        PREFS["SharedPreferences"]
        ALARM["AlarmManager<br/>watchdog + boot"]
    end

    ROUTER --> COMP --> STATE --> BRIDGE
    COMP --> I18N
    BRIDGE <--> EXPO
    EXPO --> SERVICE
    SERVICE --> DETECT & OVERLAY & COLLECT
    SERVICE --> DECIDER & WAIT & GRANT & POLICY & LOG
    DECIDER --> MATCH & SCHEDULE
    SITES -- "último endereço" --> SERVICE
    COLLECT --> SCREEN
    DETECT --> USAGE
    COLLECT --> USAGE
    OVERLAY --> WINDOW
    SITES --> A11Y
    POLICY --> PREFS
    SERVICE --> ALARM

    classDef ts fill:#e8f7ff,stroke:#0b6fa4,stroke-width:1px,color:#04141c
    classDef adapter fill:#fdf0dd,stroke:#c9871f,stroke-width:1px,color:#04141c
    classDef core fill:#ddf7f6,stroke:#03c3bf,stroke-width:2px,color:#04141c
    classDef sys fill:#eef0f3,stroke:#6c7480,stroke-width:1px,color:#04141c

    class ROUTER,COMP,STATE,I18N,BRIDGE ts
    class EXPO,SERVICE,DETECT,OVERLAY,COLLECT,SITES adapter
    class DECIDER,WAIT,GRANT,POLICY,SCHEDULE,MATCH,LOG,SCREEN core
    class USAGE,WINDOW,A11Y,PREFS,ALARM sys
```

A separação `core/` × `android/` não é cerimônia: o `core` **não importa nada de
Android**, então a regra tem teste de verdade em JVM. O que está em `android/` é
adaptador, e **não tem teste automatizado** — por isso o mínimo possível de decisão
mora lá.

### O veredito decide a tela raiz

[`src/state/verdict.ts`](src/state/verdict.ts) resolve em cinco valores, e
[`app/_layout.tsx`](app/_layout.tsx) mapeia cada um num grupo de rotas.

```mermaid
stateDiagram-v2
    direction LR
    [*] --> loading

    loading --> nao_suportada: fora de Android e iOS
    loading --> incompleto: falta permissão ou configuração
    loading --> pausado: desligado de propósito
    loading --> protegido: tudo pronto

    incompleto --> protegido: permissões concedidas + durações definidas
    protegido --> pausado: STOP_PROTECTION após a espera cumprida
    pausado --> protegido: religar

    nao_suportada: plataforma-nao-suportada · o recurso não existe
    incompleto: onboarding-incompleto · falta permissão do sistema
    pausado: pausado · flag persistida, não "serviço no ar"
    protegido: protegido · serviço rodando
```

São cinco e não três porque **cada valor existe para não contar uma mentira**: uma
plataforma sem o recurso não é "permissão pendente"; `loading` não é
"onboarding-incompleto"; e `pausado` é quem desligou de propósito, não quem teve o
serviço morto pelo sistema.

### O ciclo de decisão, com o app fechado

```mermaid
sequenceDiagram
    autonumber
    participant U as Pessoa
    participant S as BlockerService
    participant D as ForegroundAppDetector
    participant C as core · BlockDecider
    participant O as OverlayPresenter

    loop poll adaptativo — 400ms dentro da janela, 2s fora
        S->>D: qual app está em primeiro plano?
        D-->>S: packageName
        S->>C: decide(pacote, política, concessão ativa)
        alt bloqueado e sem concessão
            C-->>S: BLOCK
            S->>O: exibir overlay
            O-->>U: tela de bloqueio, sem botão de escape
        else app crítico, concessão válida ou fora da lista
            C-->>S: ALLOW
            S->>O: remover overlay
        end
    end

    U->>S: requestUnlock(pacote)
    Note over S,C: WaitingPeriod conta em elapsedRealtime.<br/>Um pedido por vez. Cancelar é grátis.
    C-->>S: espera cumprida, GrantWindow abre saldo
    Note over C: Saldo só diminui. Reboot encerra<br/>a concessão e congela a espera.
```

---

## Stack

| Camada | Tecnologia | Papel |
| --- | --- | --- |
| App | React Native 0.86 · Expo SDK 57 · New Architecture | UI e navegação |
| Navegação | expo-router (typed routes) | Rotas por grupo de veredito |
| Linguagem | TypeScript 6 | Toda a camada JS |
| Regra de negócio | Kotlin/JVM puro (`core/`) | Bloqueio, espera, concessão, tempo de tela |
| Integração nativa | Expo Modules API · config plugin (CNG) | Ponte e prebuild |
| Persistência | `SharedPreferences` (nativo) · `AsyncStorage` (UI) | A fonte única da política é o nativo |
| Idiomas | `expo-localization` · catálogos tipados próprios | 73 idiomas, plural CLDR, RTL, idioma por app |
| Testes | `node:test` + `tsx` · JUnit 5 | 413 testes, zero emulador |
| CI | GitHub Actions | Formatação, lint, tipagem, testes JS e Kotlin |

---

## Começando

### Pré-requisitos

- **Node.js 22+**
- **JDK 17** — o `core` usa `jvmToolchain(17)`
- **Android SDK** e um aparelho ou emulador

> [!WARNING]
> **Expo Go não serve.** O app usa foreground service e overlay do sistema — exige
> `prebuild` e development build.

### Instalação

```bash
git clone git@github.com:lucasmarujo/Instablock.git
cd Instablock
npm install
```

### Comandos

| Comando | O que faz |
| --- | --- |
| `npm run verify` | Formatação + lint + tipagem + testes JS. **Rode antes de abrir PR.** |
| `npm test` | Testes JS puros, sem emulador |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run android` | Development build no aparelho ou emulador |
| `npm run prebuild` | Regenera `android/` a partir do config plugin |
| `npm run build:aab` | Prebuild limpo + AAB de release assinado para a Play Console |
| `npm run test:kotlin` | Testes do `core` (exige `gradle` no PATH) |

### Publicando na Play Store

```bash
npm run build:aab
# → android/app/build/outputs/bundle/release/app-release.aab
```

O AAB sai assinado com a **chave de upload** em `credentials/android/upload-keystore.jks`,
com alias e senhas em [`credentials.json`](credentials.json). Os dois são versionados de
propósito: qualquer pessoa do time gera um bundle que a Play aceita. Quem liga a chave ao
build é o config plugin [`native/plugins/withReleaseSigning.js`](native/plugins/withReleaseSigning.js).
Por isso a assinatura sobrevive ao `prebuild --clean`.

> [!IMPORTANT]
> **Suba o `versionCode` em `app.json` antes de cada envio.** A Play recusa um número que
> já recebeu. O `version` vira o `versionName` exibido na loja.

A chave de upload não é a chave que assina o app no aparelho. Essa fica com o Google
(Play App Signing). Se o `.jks` vazar ou for perdido, peça a redefinição da chave de
upload na Play Console (Integridade do app → Assinatura do app).

---

## Testes

| Suíte | Quantidade | Runner | Onde |
| --- | --- | --- | --- |
| JavaScript / TypeScript | **283** | `node:test` + `tsx` | [`tests/`](tests/) |
| Kotlin `core` | **130** | JUnit 5 em JVM | [`core/src/test/`](native/modules/aceleralock-blocker/core/src/test/kotlin/com/aceleralock/blocker/core/) |
| Camada `android/` | — | sem teste automatizado — por isso quase sem decisão | — |

Contagem de 2026-10-17. O número do `core` se confere no XML do JUnit (ver a nota
abaixo).

### Rodando o core Kotlin sem `gradle` no PATH

O `core/` é Kotlin puro, tem `settings.gradle.kts` próprio e **não tem `gradlew`**.
Quando o `gradle` não está no PATH, o caminho que funciona é a distribuição que o
wrapper já baixou:

```bash
cd native/modules/aceleralock-blocker
JAVA_HOME="<caminho do JDK 17+>" \
  "$HOME/.gradle/wrapper/dists/gradle-<versão>-bin/*/gradle-<versão>/bin/gradle" \
  :core:test --console=plain
```

> [!NOTE]
> O `build.gradle.kts` do core usa `testLogging { events("failed") }`, então **build
> verde não imprime contagem nenhuma**. Para saber quantos testes rodaram, leia
> `core/build/test-results/test/*.xml` — não confie no console.

---

## Idiomas

O app abre no idioma do celular — ou no escolhido para ele em *Configurações → Idioma do
app*, no Android 13+. São **73 idiomas**: todos os que a Play Console publica e o Android
oferece como idioma do sistema. Fora da lista, o app **e** a tela de bloqueio nativa caem
juntos no inglês.

| Onde | O quê |
| --- | --- |
| [`src/i18n/textos/pt-BR.ts`](src/i18n/textos/pt-BR.ts) | A fonte de todo texto da interface — e o tipo `Textos` |
| `src/i18n/textos/<idioma>.ts` | Uma tradução por idioma; chave faltando é erro de `tsc` |
| [`src/i18n/idiomas.ts`](src/i18n/idiomas.ts) | A lista, com a pasta `values-*` de cada idioma no Android |
| `native/.../res/values-pt/` | Fonte dos textos da tela de bloqueio e das mil frases |
| `native/.../res/values/` | Inglês, o padrão do overlay |

Plural, dias, meses e formato de hora vêm do CLDR e moram no catálogo de cada idioma —
o app não depende do `Intl` do Hermes, que varia por build. Árabe, hebraico, persa e urdu
espelham o layout.

**Texto novo** entra em `pt-BR.ts` e precisa da tradução nos outros 72 catálogos; o
`tsc` acusa a chave que faltar, e os testes acusam marcador `{x}` trocado, forma de plural
faltando e pasta nativa sem tradução.

> [!NOTE]
> As traduções foram geradas com IA e ainda não passaram por falante nativo. Revisão
> de quem fala o idioma é uma das contribuições mais úteis — abra um PR no catálogo
> correspondente.

---

## Estrutura do repositório

```
app/                        Rotas (expo-router), agrupadas por veredito:
                            (onboarding) · (protected) · (paused) · (unsupported)
src/
  components/               Componentes compartilhados e a lógica pura testável
                            (countdownStatus.ts, tempoTela.ts, passos.ts)
  i18n/                     Idioma do aparelho: 73 catálogos tipados (pt-BR é a
                            fonte), plural CLDR próprio, escolha do idioma
  native/                   Ponte TS fina sobre o módulo nativo
  state/                    Veredito, apps bloqueados, storage do onboarding
  theme/                    Tokens e tema (claro/escuro)
native/
  modules/aceleralock-blocker/
    core/                   Kotlin puro, testado em JVM. É onde mora a regra:
                            decisão de bloqueio, espera, concessão, leitura da
                            política, registro de interrupção, tempo de tela.
    android/                Adaptadores: serviço de poll, detecção de app em
                            primeiro plano, overlay, coleta de uso, ponte Expo.
  plugins/                  Config plugin que liga o core ao prebuild.
assets/
  icon-square-1024.png      Mestre de loja: sangra até a borda, sem alfa. É o
                            `icon` do app.json; iOS e Android arredondam sozinhos.
  icon-1024.png             O mesmo ícone já recortado. Splash nativa, tela de
                            marca, onboarding e overlay — onde o recorte é nosso.
  android/ ios/             Export do design por plataforma: conjunto do Xcode,
                            escada de mipmap, ícone da Play Store e as camadas
                            do adaptive derivadas do ícone.
  aceleradev-logo.svg       Marca da comunidade AceleraDev.
docs/                       Produto, design system, decisões e QA.
tests/                      Testes JS puros (node:test).
web/                        Site estático: política de privacidade e termos
                            (aceleralock.marujo.dev) e a landing em landing/
                            (acelera.marujo.dev).
assets.old/                 Histórico: marca anterior (mark, wordmark, lockups,
                            favicons). Nada no app aponta pra cá.
backend.bkp/                Histórico: backend Spring Boot e infra Docker/blue-green
                            da arquitetura com servidor. Não roda.
```

---

## Decisões contraintuitivas

Todas com o porquê em [`docs/decisoes.md`](docs/decisoes.md). As que mais confundem
quem chega:

- **Desbloquear exige esperar**, em tempo monotônico acumulado. Impulso dura
  segundos; a espera derrota o impulso, não a pessoa.
- **Um pedido por vez.** Esperas em paralelo fariam a fricção custar trinta minutos
  uma vez, e não uma vez por decisão.
- **Desligar a proteção passa pela mesma espera**, e mudar a duração também. Fricção
  com porta dos fundos é encenação.
- **Cancelar é livre.** Desistir de desbloquear é o resultado desejado; cancelar caro
  empurraria a pessoa a esperar por teimosia.
- **A concessão não é uma lista, é um saldo que só diminui.** Concessão encerrada é
  apagada, não arquivada — guardada, cada liberação já obtida viraria uma chave
  permanente.
- **Reboot encerra a concessão e preserva a espera.** As políticas são opostas pelo
  mesmo critério conservador.
- **Dia sem leitura de tempo de tela é `null`, nunca `0`.** Zero é "não usou o
  celular"; ausência de medição é outra coisa, e mostrar as duas iguais é mentira.
- **O estado ativo é flag persistida**, não "o serviço está no ar" — serviço morto por
  falta de memória diria "pausado" a quem nunca pausou.
- **A fonte única da lista de bloqueados é o nativo.** O serviço decide com o app
  fechado, e o `AsyncStorage` é inalcançável sem JS rodando.
- **Horário livre é a única regra que lê o relógio de parede** — e só vale com data,
  hora e fuso automáticos. Espera e concessão continuam monotônicas.
- **Idioma sem tradução cai no inglês, no JS e no nativo ao mesmo tempo.** Se cada lado
  escolhesse sozinho, a mesma pessoa leria o app num idioma e a tela de bloqueio em
  outro.

As assinaturas da ponte mudam: leia
[`native/modules/aceleralock-blocker/index.ts`](native/modules/aceleralock-blocker/index.ts)
em vez de confiar numa lista aqui — foi exatamente essa lista que apodreceu na versão
anterior deste README.

### Documentação de referência

| Documento | Conteúdo |
| --- | --- |
| [`docs/decisoes.md`](docs/decisoes.md) | Toda decisão de produto e arquitetura, com o porquê e as dívidas conhecidas |
| [`docs/decisao-modulos-nativos.md`](docs/decisao-modulos-nativos.md) | Por que um módulo próprio em vez de biblioteca pronta |
| [`docs/design-system.md`](docs/design-system.md) | Tokens, contraste WCAG, componentes |
| [`docs/qa/matriz-cenarios-burla.md`](docs/qa/matriz-cenarios-burla.md) | Vetores de burla e o custo de cada um |
| [`docs/qa/roteiro-validacao-aparelho.md`](docs/qa/roteiro-validacao-aparelho.md) | Roteiro de validação em aparelho real |

---

## Estado atual

O Instablock está **em produção no Google Play** para Android. A tabela separa o que
é garantido por teste automatizado do que ainda depende de validação em aparelho — é
por aí que uma contribuição rende mais.

| Item | Estado |
| --- | --- |
| App Android publicado no Google Play | ✅ Em produção |
| Regra de bloqueio, espera, concessão e horários livres (`core`) | ✅ Testada em JVM |
| Bloqueio de sites: casamento de domínio (`SiteMatcher`) | ✅ Testado em JVM |
| Agregação de tempo de tela (`core`) | ✅ Testada em JVM |
| Interface em 73 idiomas | ✅ Completa e travada por teste |
| CI: formatação, lint, tipagem, testes JS e Kotlin | ✅ Verde a cada push |
| Revisão das traduções por falante nativo | ⚠️ Pendente — feitas com IA |
| Layout da direita para a esquerda em aparelho | ⚠️ Não conferido tela a tela |
| Leitura da barra de endereço, navegador por navegador | ⚠️ Sem validação sistemática por versão |
| Sobrevivência do serviço em fabricante agressivo | ⚠️ Não medida |
| Force-stop | ⚠️ Comportamento documentado do Android, não medido |
| Build de release no CI | ⚠️ Desativado — o AAB sai local, com `npm run build:aab` |
| iOS | ⚠️ Implementado (Swift + Family Controls), sem teste, fora do CI e sem o entitlement da Apple |

O inventário completo, com o porquê de cada item, está no fim de
[`docs/decisoes.md`](docs/decisoes.md).

---

## Marca e design system

<div align="center">
  <img alt="Ícone do Instablock" src="assets/icon-1024.png" width="120">
</div>

A marca vive em [`assets/`](assets/): o ícone composto em dois mestres —
`icon-square-1024.png` (sangra até a borda, pras lojas arredondarem) e
`icon-1024.png` (já recortado, pro que o app desenha) — mais o conjunto do Xcode,
a escada de mipmap do Android e o ícone da Play Store. As camadas do adaptive icon
(`assets/android/adaptive/`) são derivadas do próprio ícone: a mesma arte a 72% com
o degradê replicado até a borda, pra máscara do launcher cortar degradê e nunca o
cadeado. A marca anterior ficou em [`assets.old/`](assets.old/) e não é mais
referenciada.

Os tokens de cor estão em [`src/theme/tokens.ts`](src/theme/tokens.ts), com contraste
revalidado contra WCAG e coberto por teste. A regra é do sistema, não coincidência de
hex: **o primário é sempre a cor que contrasta com o canvas do tema, e o rótulo é
sempre a oposta.**

> [!NOTE]
> O overlay nativo tem recurso de cor próprio no Android: mudar cor de marca em
> `tokens.ts` exige tocar o `colors.xml` do módulo na mesma passada — não há lint que
> alcance isso.

---

## Contribuindo

Contribuições são bem-vindas — issues, PRs e discussões.

- **Conventional Commits** (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`,
  `build:`, `ci:`), com escopo quando ajudar e `BREAKING CHANGE:` no rodapé quando o
  contrato quebrar.
- **Toda implementação vem com teste.** No `core`, JUnit 5 com `@DisplayName`
  descrevendo o cenário em português — categoria e comportamento, não o nome do
  método. No JS, `node:test` puro.
- **Regra em Kotlin puro, adaptador burro.** Se a decisão der para testar em JVM, ela
  pertence ao `core`.
- **Nenhum texto de interface escrito direto no componente.** Ele nasce em
  [`src/i18n/textos/pt-BR.ts`](src/i18n/textos/pt-BR.ts) e ganha tradução nos outros
  72 idiomas — ver [Idiomas](#idiomas).
- **`npm run verify` verde antes de abrir PR.** É o mesmo conjunto que o CI roda.
- **Leia [`docs/decisoes.md`](docs/decisoes.md) antes de desfazer algo que pareça
  estranho.** Boa parte do que parece rigor gratuito é consequência das duas
  restrições do topo.

---

## Comunidade AceleraDev

<div align="center">
  <img alt="AceleraDev" src="assets/aceleradev-logo.png" width="110">
</div>

O Instablock é um projeto aberto construído junto com a comunidade **AceleraDev** —
pessoas desenvolvedoras trocando código, revisão e experiência de verdade. Cada
decisão deste repositório está documentada justamente para que qualquer pessoa da
comunidade consiga entrar, entender o porquê e contribuir sem precisar adivinhar.

Se você chegou por aqui pela comunidade: comece por
[`docs/decisoes.md`](docs/decisoes.md), rode `npm run verify` e pegue um item da
tabela de [Estado atual](#estado-atual).

---

## Licença

[MIT](LICENSE) © 2026 Lucas Marujo

<div align="center">
<br>
<sub>Feito com a comunidade AceleraDev · <b>Fricção, não prisão.</b></sub>
</div>
