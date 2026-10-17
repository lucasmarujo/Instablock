import type { Textos } from '../catalogo';

export const textos: Textos = {
  idioma: 'my',
  lista: {
    separador: ' - ',
    ultimoSeparador: 'နှင့် ',
  },
  datas: {
    diasDaSemana: ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
    diasDaSemanaAbreviados: [
      'တနင်္ဂနွေ',
      'တနင်္လာ',
      'အင်္ဂါ',
      'ဗုဒ္ဓဟူး',
      'ကြာသပတေး',
      'သောကြာ',
      'စနေ',
    ],
    diasDaSemanaIniciais: ['တ', 'တ', 'အ', 'ဗ', 'က', 'သ', 'စ'],
    meses: [
      'ဇန်နဝါရီ',
      'ဖေဖော်ဝါရီ',
      'မတ်',
      'ဧပြီ',
      'မေ',
      'ဇွန်',
      'ဇူလိုင်',
      'ဩဂုတ်',
      'စက်တင်ဘာ',
      'အောက်တိုဘာ',
      'နိုဝင်ဘာ',
      'ဒီဇင်ဘာ',
    ],
    mesesNaData: [
      'ဇန်နဝါရီ',
      'ဖေဖော်ဝါရီ',
      'မတ်',
      'ဧပြီ',
      'မေ',
      'ဇွန်',
      'ဇူလိုင်',
      'ဩဂုတ်',
      'စက်တင်ဘာ',
      'အောက်တိုဘာ',
      'နိုဝင်ဘာ',
      'ဒီဇင်ဘာ',
    ],
    dataPorExtenso: '{mes} {dia} {diaDaSemana}',
  },
  hora: {
    modelo: '{H}:{mm}',
    periodos: ['နံနက်', 'ညနေ'],
  },
  duracao: {
    horasEMinutos: '{h} နာရီနှင့် {mm} မိနစ်',
    horas: '{h} နာရီ',
    minutos: '{m} မိနစ်',
    segundos: '{s} s',
    horasEMinutosCompacta: '{h}နာ{mm}',
    horasFaladas: {
      other: '{n} နာရီ',
    },
    minutosFalados: {
      other: '{n} မိနစ်',
    },
    segundosFalados: {
      other: '{n} စက္ကန့်',
    },
    nenhumTempo: 'မှတ်တမ်းတင်ထားတဲ့ အချိန် မရှိပါ',
    menosDeUmMinuto: 'တစ်မိနစ်ထက် နည်းပါတယ်',
  },
  comum: {
    fecharFolha: 'ပိတ်မည်',
    rotuloComValor: '{rotulo}၊ {valor}',
    rotuloComContador: '{rotulo}၊ {contador}',
    cabecalhoSeletorDeApps: 'ပိတ်ဆို့မယ့် အက်ပ်တွေကို ရွေးပါ',
  },
  navegacao: {
    abaInicio: 'ပင်မ',
    abaBloqueios: 'ပိတ်ဆို့မှု',
    abaAjustes: 'ဆက်တင်',
  },
  estados: {
    pausado: {
      titulo: 'ကာကွယ်မှု ပိတ်ထားပါတယ်',
      mensagem:
        'သင်ပိတ်ဖို့ တောင်းဆိုပြီး စောင့်ချိန်ကို ပြည့်စုံအောင် စောင့်ခဲ့ပါတယ်။ အခု ဘာမှ ပိတ်ဆို့မထားပါဘူး။',
      reativar: 'ကာကွယ်မှု ပြန်ဖွင့်မည်',
      legenda: 'ပြန်ဖွင့်တာ ချက်ချင်းဖြစ်ပါတယ်။ စာရင်းက အတူတူပါပဲ။',
      voltamAoReativar: 'ပြန်ဖွင့်ရင် ပြန်ပိတ်ဆို့ပါမယ်',
    },
    naoSuportado: {
      titulo: 'iPhone မှာ မလုပ်ဆောင်နိုင်သေးပါဘူး',
      mensagem:
        'အခုအချိန်မှာ AceleraLock က Android မှာပဲ အက်ပ်တွေကို ပိတ်ဆို့ပေးနိုင်ပါတယ်။ iPhone မှာ ပိတ်ဆို့ဖို့ Apple ရဲ့ အထူးခွင့်ပြုချက် လိုအပ်ပါတယ်။',
      saibaMais: 'ပိုမိုလေ့လာရန်',
      legenda: 'ဘရောက်ဇာမှာ {site} ကို ဖွင့်ပါမယ်။',
    },
    naoEncontrado: {
      titulo: 'ဒီစာမျက်နှာ မရှိပါဘူး',
      mensagem: 'သင့်ကို ဒီကိုခေါ်လာတဲ့ လင့်ခ်က ပျက်နေတာ ဒါမှမဟုတ် ဟောင်းနေတာပါ။',
      voltarParaOInicio: 'ပင်မစာမျက်နှာသို့ ပြန်သွားမည်',
    },
  },
  ajustes: {
    titulo: 'ဆက်တင်',
    perfil: {
      semNome: 'အမည်မရှိ',
      rotuloAcessivel: '{nome}။ စခရင်အချိန် ခန့်မှန်းချက်',
      dicaFecharAjuste: 'ချိန်ညှိမှုကို ပိတ်ပါမယ်',
      dicaAbrirAjuste: 'ခန့်မှန်းချက် ချိန်ညှိမှုကို ဖွင့်ပါမယ်',
      estimativaNaoDefinida: 'ခန့်မှန်းချက် မသတ်မှတ်ရသေးပါ',
      estimativaDeHoras: {
        other: 'ခန့်မှန်းချက်: တစ်နေ့ စခရင် {n} နာရီ',
      },
    },
    protecao: {
      grupo: 'ကာကွယ်မှု',
      modoRestrito: 'တင်းကျပ်မုဒ်',
      modoRestritoLigado: 'ဖွင့်ထားသည်',
      modoRestritoDesligado: 'ပိတ်ထားသည်',
      tempoDeEspera: 'စောင့်ချိန်',
      minutosDeEspera: {
        other: '{n} မိနစ်',
      },
    },
    aparencia: {
      titulo: 'အသွင်အပြင်',
      temaSistema: 'စနစ်',
      temaClaro: 'အလင်း',
      temaEscuro: 'အမှောင်',
    },
    permissoes: {
      grupo: 'ခွင့်ပြုချက်များ',
      pendentes: {
        other: '{n} ခု ကျန်သေးသည်',
      },
      acaoAcessivel: '{acao}: {permissao}',
      acessoAoUso: {
        titulo: 'အသုံးပြုမှု ဝင်ခွင့်',
        descricao: 'စခရင်အချိန်ကို တိုင်းတာပေးသည်',
        concedida: 'ခွင့်ပြုထားသည်',
        acao: 'ပြင်မည်',
      },
      sobreporApps: {
        titulo: 'အခြားအက်ပ်များပေါ် ပြသခြင်း',
        descricao: 'ပိတ်ဆို့မျက်နှာပြင်ကို ပြသည်',
        concedida: 'ခွင့်ပြုထားသည်',
        acao: 'ပြင်မည်',
      },
      leituraDoNavegador: {
        titulo: 'ဘရောက်ဇာ ဖတ်ခြင်း',
        descricao: 'ဝဘ်ဆိုက်များကို ပိတ်ဆို့သည်',
        concedida: 'ဖွင့်ထားသည်',
        acao: 'ဖွင့်မည်',
      },
      bateriaSemOtimizacao: {
        titulo: 'ဘက်ထရီ ကန့်သတ်မှုမရှိ',
        descricao: 'Android က ကာကွယ်မှုကို မရပ်စေရန်',
        concedida: 'ဟုတ်ကဲ့',
        acao: 'ပြင်မည်',
      },
      notificacoes: {
        titulo: 'အကြောင်းကြားချက်များ',
        descricao: 'ကာကွယ်မှု ဖွင့်ထားကြောင်း သတိပေးချက်ကို ထိန်းထားသည်',
        concedida: 'ဖွင့်ထားသည်',
        acao: 'ဖွင့်မည်',
      },
    },
    sobre: {
      grupo: 'အကြောင်း',
      politicaDePrivacidade: 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ',
      termosDeUso: 'အသုံးပြုမှု စည်းမျဉ်းများ',
      versao: 'ဗားရှင်း',
    },
    rodape: 'အားလုံးက သင့်ဖုန်းထဲမှာပဲ ရှိပါတယ်။ အကောင့်မလို၊ ဆာဗာမလိုပါ။',
  },
  onboarding: {
    boasVindas: {
      titulo: 'စိတ်ပြင်းပြမှုကို စောင့်ခိုင်းပါ။',
      subtitulo:
        'သင့်အချိန်ကို ခိုးယူနေတဲ့ အက်ပ်တွေကို ရွေးပါ။ ဖွင့်ချင်စိတ် ပေါ်လာတဲ့အခါ AceleraLock က လမ်းကြားမှာ ရှိနေပါမယ်။',
      promessaBloqueio: 'သင်ရွေးတဲ့ အက်ပ်နဲ့ ဝဘ်ဆိုက်တွေကို ပိတ်ဆို့ပေးသည်',
      promessaEspera: {
        other: 'စိတ်ပြောင်းရင် စောင့်ချိန် {n} မိနစ် လိုနိုင်သည်',
      },
      promessaPrivacidade: 'အားလုံးက သင့်ဖုန်းထဲမှာပဲ။ အကောင့်မလိုပါ။',
      comecar: 'စတင်မည်',
      sairDoApp: 'အက်ပ်မှ ထွက်မည်',
    },
    cabecalho: {
      voltar: 'နောက်သို့',
      progressoAcessivel: 'အဆင့် {total} ခုအနက် {atual}',
      contador: '{atual} / {total}',
    },
    continuar: 'ဆက်သွားမည်',
    nome: {
      titulo: 'ဘယ်လို ခေါ်စေချင်လဲ။',
      subtitulo: 'အက်ပ်က နှုတ်ဆက်နိုင်ဖို့ပဲ ဖြစ်ပါတယ်။',
      rotuloCampo: 'သင့်အမည်',
      placeholder: 'သင့်အမည်',
      rotuloAcessivel: 'သင့်အမည်',
      privacidade: 'ဒီဖုန်းထဲမှာပဲ သိမ်းထားပါတယ်။',
    },
    horas: {
      titulo: 'တစ်နေ့ စခရင်အချိန် ဘယ်လောက်ရှိတယ်လို့ ထင်လဲ။',
      subtitulo: 'ရိုးရိုးသားသား ခန့်မှန်းပါ။ နောက်မှ အက်ပ်က တကယ့်အချိန်နဲ့ နှိုင်းယှဉ်ပြပါမယ်။',
      unidadeAoLadoDoNumero: {
        other: 'နာရီ / တစ်နေ့',
      },
      horasAbreviadas: '{n} နာ',
      rotuloAtalhos: 'ဒါမှမဟုတ် တန်ဖိုးတစ်ခုကို နှိပ်ပါ။',
      atalhoAcessivel: {
        other: 'တစ်နေ့ {n} နာရီ',
      },
      sliderAcessivel: 'ဖုန်းမှာ တစ်နေ့ကို နာရီအရေအတွက်',
    },
    acessoAoUso: {
      titulo: 'သင့်တကယ့်စခရင်အချိန်ကို တိုင်းတာကြည့်ရအောင်',
      subtituloIos: 'ဒါအတွက် iPhone က သင့်ခွင့်ပြုချက်ကို တောင်းပါတယ်။',
      subtituloAndroid: 'ဒါအတွက် Android က အသုံးပြုမှု ဝင်ခွင့်ကို တောင်းပါတယ်။',
      tituloExemplo: 'သင်မြင်ရမယ့်အရာ',
      seloExemplo: 'နမူနာ',
      legendaExemplo: 'နမူနာ — သင့်ဟာကို မြင်ရဖို့ အသုံးပြုမှု ဝင်ခွင့်ကို ဖွင့်ပေးပါ',
      veOTempo: 'အက်ပ်တစ်ခုချင်းစီ ဘယ်လောက်ကြာ ဖွင့်ထားလဲ ကြည့်နိုင်ပါတယ်။',
      naoVeODentro: 'အက်ပ်တွေထဲမှာ သင်ဘာလုပ်လဲဆိုတာ မမြင်ရပါဘူး။',
      nadaSai: 'ဘာမှ သင့်ဖုန်းအပြင် မထွက်ပါဘူး။',
      liberar: 'အသုံးပြုမှု ဝင်ခွင့် ဖွင့်ပေးမည်',
      agoraNao: 'ယခု မလုပ်သေးပါ',
    },
    escolha: {
      tituloComNome: '{nome}၊ ဘာတွေကို ပိတ်ဆို့ချင်လဲ။',
      titulo: 'ဘာတွေကို ပိတ်ဆို့ချင်လဲ။',
      subtitulo: 'အနည်းဆုံး အက်ပ်တစ်ခု ရွေးပါ။ နောက်မှ ပြောင်းလို့ရပါတယ်။',
      permissoesFaltando: {
        other: 'ပိတ်ဆို့ဖို့ ခွင့်ပြုချက် {n} ခု လိုနေသေးသည်',
      },
      permissaoAcessoAoUso: 'အသုံးပြုမှု ဝင်ခွင့်',
      permissaoSobreposicao: 'အခြားအက်ပ်များပေါ် ပြသခြင်း',
      permissaoPronta: 'ပြီးပြီ',
      liberarPermissao: 'ဖွင့်ပေးမည်',
      liberarPermissaoAcessivel: '{permissao} ကို ဖွင့်ပေးမည်',
      buscaPlaceholder: 'အက်ပ် ရှာရန်',
      buscaAcessivel: 'အမည်ဖြင့် အက်ပ်ရှာရန်',
      erroAoListar:
        'ဖုန်းထဲက အက်ပ်စာရင်းကို မဖတ်နိုင်ခဲ့ပါဘူး။ ဒီစာမျက်နှာကို ထွက်ပြီး ပြန်ဝင်ကာ ထပ်စမ်းကြည့်ပါ။',
      semResultado: 'ဒီအမည်နဲ့ အက်ပ် မရှိပါဘူး။',
      bloquearSemApps: 'ပိတ်ဆို့မည်',
      bloquearApps: {
        other: 'အက်ပ် {n} ခုကို ပိတ်ဆို့မည်',
      },
      liberePermissoes: {
        other: 'ဆက်သွားဖို့ အပေါ်က ခွင့်ပြုချက်များကို ဖွင့်ပေးပါ။',
      },
    },
    conclusao: {
      bloqueioCriado: 'ပိတ်ဆို့မှု ပြုလုပ်ပြီးပါပြီ။',
      umAppBloqueado: '{app} ကို ပိတ်ဆို့ထားပါတယ်။',
      variosAppsBloqueados: {
        other: 'အက်ပ် {n} ခုကို ပိတ်ဆို့ထားပါတယ်။',
      },
      subtitulo: 'ဖွင့်ချင်စိတ် ပေါ်လာတဲ့အခါ AceleraLock က လမ်းကြားမှာ ရှိနေပါမယ်။',
      aPartirDeAgora: 'ယခုမှစပြီး',
      eMaisApps: {
        other: 'နောက်ထပ် အက်ပ် {n} ခု၊ ယခုမှစပြီး',
      },
      appSemNome: 'အက်ပလီကေးရှင်း',
      seloBloqueado: 'ပိတ်ဆို့ထားသည်',
      irParaOInicio: 'ပင်မစာမျက်နှာသို့ သွားမည်',
    },
    ofertaRestrito: {
      titulo: 'တင်းကျပ်မုဒ်',
      selo: 'အကြံပြုသည်',
      textoComUmApp: {
        other:
          'မဖွင့်ထားရင် {app} ကို စာရင်းကနေ ချက်ချင်း ဖယ်နိုင်ပါတယ်။ ဖွင့်ထားရင် စာရင်းပြောင်းဖို့ စောင့်ချိန် {n} မိနစ် လိုပါတယ် — ဆန္ဒပြေသွားဖို့ အချိန်ပေးတာပါ။',
      },
      textoComVariosApps: {
        other:
          'မဖွင့်ထားရင် အက်ပ်တစ်ခုကို စာရင်းကနေ ချက်ချင်း ဖယ်နိုင်ပါတယ်။ ဖွင့်ထားရင် စာရင်းပြောင်းဖို့ စောင့်ချိန် {n} မိနစ် လိုပါတယ် — ဆန္ဒပြေသွားဖို့ အချိန်ပေးတာပါ။',
      },
      ligar: 'တင်းကျပ်မုဒ် ဖွင့်မည်',
      ligarAcessivel: 'တင်းကျပ်မုဒ် ဖွင့်မည်',
      legenda: 'ဖွင့်တာ ချက်ချင်းဖြစ်ပါတယ်။ နောက်မှ ပိတ်ဆို့မှု မှာ ပြောင်းလို့ရပါတယ်။',
    },
    graficoTempoTela: {
      rotuloAcessivel: '{legenda}။ {dias}',
      rotuloAcessivelComEstimativa:
        '{legenda}။ {dias}။ သင်က တစ်နေ့ {estimativa} လို့ ခန့်မှန်းခဲ့တယ်',
      diaAcessivel: '{dia}: {valor}',
      diaSemLeitura: 'ဖတ်ထားခြင်း မရှိပါ',
    },
  },
  bloqueios: {
    tela: {
      titulo: 'ပိတ်ဆို့မှု',
      tipoDeBloqueio: 'ပိတ်ဆို့မှု အမျိုးအစား',
      segmentoApps: 'အက်ပ်',
      segmentoSites: 'ဝဘ်ဆိုက်',
    },
    modoRestrito: {
      titulo: 'တင်းကျပ်မုဒ်',
      tituloLigado: 'တင်းကျပ်မုဒ် ဖွင့်ထားသည်',
      descricaoLigado: {
        other: 'စာရင်းကို လော့ခ်ချထားပါတယ်။ ပိတ်ဖို့ စောင့်ချိန် {n} မိနစ် လိုပါတယ်။',
      },
      descricaoDesligado: {
        other: 'ဖွင့်ထားရင် စာရင်းပြောင်းဖို့ စောင့်ချိန် {n} မိနစ် လိုပါမယ်။',
      },
      rotuloInterruptor: 'တင်းကျပ်မုဒ်',
      dicaQuandoLigado: 'စောင့်ချိန်စတင်ဖို့ အတည်ပြုချက်ကို ဖွင့်ပါမယ်',
      dicaQuandoDesligado: 'ချက်ချင်း ဖွင့်ပါမယ်',
      notaInterruptoresTravados: 'စောင့်ချိန်မပြီးမချင်း ခလုတ်တွေကို လော့ခ်ချထားပါမယ်။',
    },
    confirmarDesligar: {
      titulo: 'တင်းကျပ်မုဒ်ကို ပိတ်မလား။',
      corpo: {
        other:
          'စောင့်ချိန် {n} မိနစ် ပြည့်ပြီးမှ အက်ပ်စာရင်းကို ပြန်ပြင်လို့ရပါမယ်။ ဘယ်အချိန်မဆို ကုန်ကျစရိတ်မရှိဘဲ စွန့်လွှတ်နိုင်ပါတယ်။',
      },
      linhaDoTempoFalada: {
        other: 'ယခု၊ စောင့်ချိန် {n} မိနစ်၊ ပြီးရင် စာရင်းကို ဖွင့်ပေးပါမယ်',
      },
      marcoAgora: 'ယခု',
      trechoDeEspera: {
        other: 'စောင့်ချိန် {n} မိနစ်',
      },
      marcoListaLiberada: 'စာရင်း ဖွင့်ပေးသည်',
      manterLigado: 'ဖွင့်ထားမည်',
      comecarEspera: {
        other: 'စောင့်ချိန် {n} မိနစ် စတင်မည်',
      },
    },
    barraSalvar: {
      rotuloBotaoFalado: 'ပြောင်းလဲမှုများကို သိမ်းမည်',
      botao: 'သိမ်းမည်',
      titulo: {
        other: 'မသိမ်းရသေးတဲ့ ပြောင်းလဲမှု {n} ခု',
      },
      umItemEntra: '{nome} စာရင်းထဲ ဝင်မည်',
      umItemSai: '{nome} စာရင်းမှ ထွက်မည်',
      quantosEntram: {
        other: '{n} ခု ဝင်မည်',
      },
      quantosSaem: {
        other: '{n} ခု ထွက်မည်',
      },
      entramESaem: '{entram}၊ {saem}',
    },
    legendaDaLinha: {
      bloqueado: 'ပိတ်ဆို့ထားသည်',
      bloqueiaAoSalvar: 'သိမ်းရင် ပိတ်ဆို့မည်',
      saiAoSalvar: 'သိမ်းရင် ထွက်မည်',
    },
    apps: {
      instrucaoIos: 'ပိတ်ဆို့ချင်တဲ့ အက်ပ်တွေကို အောက်က ရွေးချယ်မှုမှာ ရွေးပါ။',
      cabecalhoSeletorIos: 'ပိတ်ဆို့မယ့် အက်ပ်တွေကို ရွေးပါ',
      salvarLista: 'စာရင်း သိမ်းမည်',
      secaoBloqueados: 'ပိတ်ဆို့ထားသည် · {n}',
      secaoOutros: 'အခြားအက်ပ်များ',
      buscaPlaceholder: {
        other: 'အက်ပ် {n} ခုထဲက ရှာရန်',
      },
      buscaRotuloFalado: 'အမည်ဖြင့် အက်ပ်ရှာရန်',
      erroAoLer:
        'ဖုန်းထဲက အက်ပ်စာရင်းကို မဖတ်နိုင်ခဲ့ပါဘူး။ ဒီစာမျက်နှာကို ထွက်ပြီး ပြန်ဝင်ကာ ထပ်စမ်းကြည့်ပါ။',
      nenhumAppNoAparelho: 'ဒီဖုန်းမှာ ရွေးစရာ အက်ပ် မရှိပါဘူး။',
      nenhumAppComEsseNome: 'ဒီအမည်နဲ့ အက်ပ် မရှိပါဘူး။',
      botaoHorariosFalado: '{app} ရဲ့ အခမဲ့ချိန်များ',
    },
    sites: {
      avisoAcessibilidadeTitulo: 'ဝဘ်ဆိုက်တွေကို ပိတ်ဆို့ဖို့ ဘရောက်ဇာ ဖတ်ခြင်းကို ဖွင့်ပါ',
      avisoAcessibilidadeMensagem:
        'AceleraLock က Android ရဲ့ အသုံးပြုနိုင်မှုဝန်ဆောင်မှုကို Chrome၊ Samsung Internet၊ Firefox၊ Edge နဲ့ Brave ရဲ့ လိပ်စာဘားက လိပ်စာကို ဖတ်ပြီး သင့်စာရင်းနဲ့ နှိုင်းယှဉ်ဖို့ပဲ သုံးပါတယ်။ စာမျက်နှာတွေရဲ့ အကြောင်းအရာကို မဖတ်ပါဘူး၊ သင်ကြည့်တာကို မသိမ်းပါဘူး၊ ဘာမှလည်း ဖုန်းအပြင် မထွက်ပါဘူး။',
      ativarNasConfiguracoes: 'ဆက်တင်မှာ ဖွင့်မည်',
      erroAoLer:
        'ဝဘ်ဆိုက်စာရင်းကို မဖတ်နိုင်ခဲ့ပါဘူး။ ဒီစာမျက်နှာကို ထွက်ပြီး ပြန်ဝင်ကာ ထပ်စမ်းကြည့်ပါ။',
      campoRotulo: 'ဝဘ်ဆိုက် ထည့်ရန်',
      campoPlaceholder: 'ဥပမာ instagram.com',
      campoRotuloFalado: 'ပိတ်ဆို့ချင်တဲ့ ဝဘ်ဆိုက်လိပ်စာ',
      campoAjuda: 'ဝဘ်ဆိုက်နဲ့ ၎င်းအတွင်းက m.instagram.com လို လိပ်စာအားလုံးကို ပိတ်ဆို့ပါတယ်။',
      campoErro: 'instagram.com လို ဝဘ်ဆိုက်လိပ်စာကို ရိုက်ထည့်ပါ။',
      botaoAdicionarFalado: 'ဝဘ်ဆိုက် ထည့်ရန်',
      botaoAdicionar: 'ထည့်မည်',
      vazioTitulo: 'ပိတ်ဆို့ထားတဲ့ ဝဘ်ဆိုက် မရှိသေးပါ',
      vazioMensagem: 'သင့်အချိန်ကို ခိုးယူနေတဲ့ ပထမဆုံး ဝဘ်ဆိုက်ရဲ့ လိပ်စာကို ရိုက်ထည့်ပါ။',
      secaoBloqueados: 'ပိတ်ဆို့ထားသည် · {n}',
      legendaSalvo: 'နဲ့ ဆက်စပ်လိပ်စာများ',
      legendaBloqueiaAoSalvar: 'သိမ်းရင် ပိတ်ဆို့မည်',
      removerFalado: '{site} ကို ဖယ်ရှားမည်',
      leituraAtiva: 'ဘရောက်ဇာ ဖတ်ခြင်း ဖွင့်ထားသည် · ဝဘ်ဆိုက်တွေကို ပိတ်ဆို့ထားသည်',
    },
    horarios: {
      titulo: 'အခမဲ့ချိန်များ',
      rotuloFolhaFalado: '{app} ရဲ့ အခမဲ့ချိန်များ',
      explicacao:
        'ဒီအချိန်တွေမှာ {app} ကို ပိတ်ဆို့မှုမရှိဘဲ ဖွင့်နိုင်ပါတယ်။ ဒီအချိန်အပြင်မှာ ပိတ်ဆို့ထားဆဲပါ။',
      abrirDataEHora: 'ရက်စွဲနှင့် အချိန်ကို ဖွင့်မည်',
      vazio: 'အခမဲ့ချိန် မရှိပါ — {app} ကို အချိန်ပြည့် ပိတ်ဆို့ထားပါတယ်။',
      editarFaixaFalado: '{faixa} ကို ပြင်မည်',
      removerFaixaFalado: '{faixa} ကို ဖယ်ရှားမည်',
      adicionarHorario: 'အခမဲ့ချိန် ထည့်မည်',
      erroAoSalvar: 'မသိမ်းနိုင်ခဲ့ပါဘူး။ ထပ်စမ်းကြည့်ပါ။',
      salvar: 'သိမ်းမည်',
      cancelar: 'မလုပ်တော့ပါ',
      fechar: 'ပိတ်မည်',
      formulario: {
        dias: 'ရက်များ',
        inicio: 'မှ',
        fim: 'အထိ',
        menosNoInicioFalado: 'စတင်ချိန်မှ ၁၅ မိနစ် လျှော့မည်',
        maisNoInicioFalado: 'စတင်ချိန်မှာ ၁၅ မိနစ် တိုးမည်',
        menosNoFimFalado: 'ပြီးဆုံးချိန်မှ ၁၅ မိနစ် လျှော့မည်',
        maisNoFimFalado: 'ပြီးဆုံးချိန်မှာ ၁၅ မိနစ် တိုးမည်',
        terminaNoDiaSeguinte: 'နောက်တစ်ရက် {hora} မှာ ပြီးဆုံးသည်။',
        cancelar: 'မလုပ်တော့ပါ',
        adicionar: 'ထည့်မည်',
        atualizar: 'ပြင်ဆင်မည်',
      },
      nenhumDia: 'ရက် မရှိပါ',
      todosOsDias: 'နေ့တိုင်း',
      intervaloDeDias: '{inicio} မှ {fim}',
      faixa: '{dias} · {inicio}–{fim}',
      faixaAteODiaSeguinte: '{dias} · {inicio}–နောက်တစ်ရက် {fim}',
      legendaDaLinha: {
        other: 'အခမဲ့ချိန် {n} ခု',
      },
      erroSemDia: 'အနည်းဆုံး တစ်ရက် ရွေးပါ။',
      erroDiaInvalido: 'ရက်သတ္တပတ်ရက် မမှန်ကန်ပါ။',
      erroHorarioInvalido: 'အချိန် မမှန်ကန်ပါ။',
      erroInicioIgualAoFim: 'စတင်ချိန်နဲ့ ပြီးဆုံးချိန် တူလို့မရပါဘူး။',
      erroMaximoPorApp: {
        other: 'အက်ပ်တစ်ခုကို အခမဲ့ချိန် {n} ခုထက် မပိုရပါ။',
      },
      avisoModoRestritoTitulo: 'အခမဲ့ချိန်များ ခဏရပ်ထားသည်',
      avisoModoRestritoMensagem:
        'တင်းကျပ်မုဒ် ဖွင့်ထားရင် အခမဲ့ချိန် ဘာမှ အလုပ်မလုပ်ပါ — အက်ပ်ကို အချိန်ပြည့် ပိတ်ဆို့ထားပါတယ်။',
      avisoRelogioTitulo: 'အလိုအလျောက် ရက်စွဲနှင့် အချိန်ကို ဖွင့်ပါ',
      avisoRelogioMensagem:
        'အလိုအလျောက် အချိန်နဲ့ အချိန်ဇုန် မရှိရင် အခမဲ့ချိန်တွေ အလုပ်မလုပ်ပါ — နာရီပြောင်းပြီး အက်ပ်ဖွင့်တာကို တားဆီးဖို့ပါ။',
    },
  },
  inicio: {
    saudacaoComNome: 'မင်္ဂလာပါ {nome}',
    saudacao: 'မင်္ဂလာပါ',
    protecaoAtiva: 'ကာကွယ်မှု ဖွင့်ထားသည်',
    gerenciarBloqueios: 'ပိတ်ဆို့မှု စီမံရန်',
    gerenciar: 'စီမံမည်',
    modoRestritoLigado: 'တင်းကျပ်မုဒ် ဖွင့်ထားသည်',
    modoRestritoDesligado: 'တင်းကျပ်မုဒ် ပိတ်ထားသည်',
    modoRestritoLigadoDetalhe: 'စာရင်းပြောင်းရင် စောင့်ချိန် လိုပါတယ်။',
    modoRestritoDesligadoDetalhe: 'အက်ပ်ကို စာရင်းကနေ ဖယ်တာ ချက်ချင်းဖြစ်ပါတယ်။',
    ligarModoRestrito: 'တင်းကျပ်မုဒ်ကို ဖွင့်မည်',
    ligar: 'ဖွင့်မည်',
    sitesSemBloqueioMensagem:
      'ဘရောက်ဇာ ဖတ်ခြင်းကို ပိတ်ထားပါတယ်။ အက်ပ်တွေကိုတော့ ဆက်ပိတ်ဆို့ထားပါတယ်။',
    sitesSemBloqueioAcao: 'ဆက်တင်မှာ ဖွင့်မည်',
    tempoDeTelaHoje: 'ယနေ့ စခရင်အချိန်',
    erroTempoDeTela: 'အခု စခရင်အချိန်ကို မဖတ်နိုင်ခဲ့ပါဘူး။',
    maisUsadosHoje: 'ယနေ့ အသုံးများဆုံး',
    nadaRegistradoTitulo: 'ယနေ့ မှတ်တမ်း မရှိပါ',
    nadaRegistradoMensagem: 'ဖုန်းကို သုံးလိုက်တာနဲ့ အက်ပ်တွေ ဒီမှာ ပေါ်လာပါမယ်။',
    historicoComecaTitulo: 'သင့်မှတ်တမ်းက အခုစတာပါ',
    historicoComecaMensagem:
      'ဒီနေ့ကစပြီး AceleraLock က သင်စခရင်မှာ ဘယ်လောက်ကြာလဲ မှတ်ထားပါမယ်၊ ဒီဇယားလည်း ကိုယ့်ဘာသာ ပြည့်လာပါမယ်။',
    ultimos7Dias: 'လွန်ခဲ့သော ၇ ရက်',
    legendaEstimativa: 'သင့်ခန့်မှန်းချက်',
    legendaGraficoSemana: 'လွန်ခဲ့သော ၇ ရက်က စခရင်အချိန်',
    notaCalendario:
      'အလွတ်ရက်တွေက တိုင်းတာမှုမရှိတဲ့ ရက်တွေပါ — မှတ်တမ်းက အက်ပ်ကို ထည့်သွင်းတဲ့အချိန်ကစပါတယ်။',
    resumo: {
      nadaBloqueado: 'ပိတ်ဆို့ထားတာ မရှိသေးပါ',
      appsBloqueados: {
        other: 'အက်ပ် {n} ခု ပိတ်ဆို့ထားသည်',
      },
      sitesBloqueados: {
        other: 'ဝဘ်ဆိုက် {n} ခု ပိတ်ဆို့ထားသည်',
      },
      appsESitesBloqueados: '{apps} နှင့် {sites}',
      sitesPausados: {
        other: 'ဝဘ်ဆိုက် {n} ခု ခဏရပ်ထားသည်',
      },
      appsBloqueadosESitesPausados: '{apps} · ဝဘ်ဆိုက်များ ခဏရပ်ထားသည်',
      appsLiberados: {
        other: 'အက်ပ် {n} ခု ဖွင့်ပေးထားသည်',
      },
      sitesLiberados: {
        other: 'ဝဘ်ဆိုက် {n} ခု ဖွင့်ပေးထားသည်',
      },
      appsESitesLiberados: '{apps} နှင့် {sites}',
      apps: {
        other: 'အက်ပ် {n} ခု',
      },
      sites: {
        other: 'ဝဘ်ဆိုက် {n} ခု',
      },
    },
    pilha: {
      maisForaDaPilha: '+ {resto}',
      apps: {
        other: 'အက်ပ် {n} ခု',
      },
      sites: {
        other: 'ဝဘ်ဆိုက် {n} ခု',
      },
    },
    sitesSemBloqueioTitulo: {
      other: 'ဝဘ်ဆိုက် {n} ခုကို ယခု မပိတ်ဆို့ထားပါ',
    },
    notaSemLeitura: {
      diasDaSemana: ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
      umDia: '{dia} ဖတ်ထားခြင်း မရှိပါ — ဖုန်းက အဲဒီနေ့ကို မှတ်မထားပါဘူး။',
      variosDias: {
        other: 'ဖတ်ထားခြင်း မရှိတဲ့ ရက် {n} ရက် — ဖုန်းက အဲဒီရက်တွေကို မှတ်မထားပါဘူး။',
      },
    },
  },
  tempoTela: {
    hoje: 'ယနေ့',
    naEstimativa: 'သင့်ခန့်မှန်းချက် {estimativa} အတိုင်း',
    abaixoDaEstimativa: 'သင့်ခန့်မှန်းချက် {estimativa} ထက် {diferenca} နည်းသည်',
    acimaDaEstimativa: 'သင့်ခန့်မှန်းချက် {estimativa} ထက် {diferenca} များသည်',
    diaSemMedicao: '{dia} ရက်၊ တိုင်းတာမှု မရှိပါ',
    diaComDuracao: '{dia} ရက်၊ {duracao}',
  },
  espera: {
    contagem: {
      faltamMinutosESegundos: '{m} မိနစ် {s} စက္ကန့် ကျန်သည်',
      faltamSegundos: '{s} စက္ကန့် ကျန်သည်',
      faltamFalado: '{tempo} ကျန်သည်',
      restanteDeTotal: '{total} မိနစ်အနက် {restante} ကျန်သည်',
      restantes: 'ကျန်သည်',
      carregando: 'ကျန်ချိန်ကို ဖတ်နေသည်',
      erroLeitura: 'ကျန်ချိန်ကို မဖတ်နိုင်ခဲ့ပါဘူး။',
      tentarDeNovo: 'ထပ်စမ်းမည်',
      concluida: 'စောင့်ချိန် ပြည့်ပြီ',
    },
    emAndamento: 'စောင့်ချိန် ဆက်လက်နေသည်',
    confirmando: 'အတည်ပြုနေသည်…',
    regraAppFechado: 'အက်ပ်ကို ပိတ်ထားရင်လည်း ရေတွက်မှု ဆက်သွားပါတယ်။',
    regraCelularDesligado: 'ဖုန်းကို ပိတ်ရင် ရေတွက်မှု ခဏရပ်ပါတယ် — ရပ်ခဲ့တဲ့နေရာကနေ ပြန်စပါမယ်။',
    desistir: 'စောင့်ချိန်ကို စွန့်လွှတ်မည်',
    legendaDesistir: 'စွန့်လွှတ်တာ အခမဲ့ဖြစ်ပြီး ချက်ချင်းပါ။ {aposDesistir}',
    alvos: {
      desligarProtecao: {
        titulo: 'ကာကွယ်မှုကို ပိတ်နေသည်',
        corpo: 'အချိန်ပြည့်ရင် ကာကွယ်မှု ပိတ်သွားပြီး ပိတ်ဆို့ထားတဲ့ အက်ပ်တွေ ပြန်ဖွင့်လို့ရပါမယ်။',
        fim: 'သုညရောက်ရင် ကာကွယ်မှု ကိုယ့်ဘာသာ ပိတ်သွားပါမယ်။',
        aposDesistir: 'ကာကွယ်မှုက ဆက်ဖွင့်ထားပါမယ်။',
      },
      desbloquearApp: {
        titulo: 'ပိတ်ဆို့မှု ဖြေရန် စောင့်နေသည်',
        corpo: 'အချိန်ပြည့်ရင် အက်ပ်ကို ပြန်ဖွင့်လို့ရပါမယ်။',
        fim: 'သုညရောက်ရင် အက်ပ်ကို ဖွင့်ပေးပါမယ်။',
        aposDesistir: 'အက်ပ်ကို ဆက်ပိတ်ဆို့ထားပါမယ်။',
      },
      mudarDuracao: {
        titulo: 'ကြာချိန်ပြောင်းရန် စောင့်နေသည်',
        corpo: 'အချိန်ပြည့်တာနဲ့ ကြာချိန်အသစ် စတင်အသက်ဝင်ပါမယ်။',
        fim: 'သုညရောက်ရင် ကြာချိန်အသစ် အသက်ဝင်ပါမယ်။',
        aposDesistir: 'ကြာချိန်က အတူတူပါပဲ။',
      },
      desligarModoRestrito: {
        titulo: 'တင်းကျပ်မုဒ်ကို ပိတ်နေသည်',
        corpo: 'အချိန်ပြည့်ရင် အက်ပ်စာရင်းကို ပြန်ပြင်လို့ရပါမယ်။',
        fim: 'သုညရောက်ရင် တင်းကျပ်မုဒ် ကိုယ့်ဘာသာ ပိတ်သွားပါမယ်။',
        aposDesistir: 'တင်းကျပ်မုဒ်က ဆက်ဖွင့်ထားပါမယ်။',
      },
    },
  },
};
