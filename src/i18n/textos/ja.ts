import type { Textos } from '../catalogo';

export const textos: Textos = {
  idioma: 'ja',
  lista: {
    separador: '、',
    ultimoSeparador: '、',
  },
  datas: {
    diasDaSemana: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    diasDaSemanaAbreviados: ['日', '月', '火', '水', '木', '金', '土'],
    diasDaSemanaIniciais: ['日', '月', '火', '水', '木', '金', '土'],
    meses: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    mesesNaData: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    dataPorExtenso: '{mes}月{dia}日{diaDaSemana}',
  },
  hora: {
    modelo: '{H}:{mm}',
    periodos: ['午前', '午後'],
  },
  duracao: {
    horasEMinutos: '{h}h{mm}m',
    horas: '{h}h',
    minutos: '{m}m',
    segundos: '{s}s',
    horasEMinutosCompacta: '{h}h{mm}m',
    horasFaladas: {
      other: '{n} 時間',
    },
    minutosFalados: {
      other: '{n} 分',
    },
    segundosFalados: {
      other: '{n} 秒',
    },
    nenhumTempo: '使用時間なし',
    menosDeUmMinuto: '1分未満',
  },
  comum: {
    fecharFolha: '閉じる',
    rotuloComValor: '{rotulo}、{valor}',
    rotuloComContador: '{rotulo}、{contador}',
    cabecalhoSeletorDeApps: 'ブロックするアプリを選んでください',
  },
  navegacao: {
    abaInicio: 'ホーム',
    abaBloqueios: 'ブロック',
    abaAjustes: '設定',
  },
  estados: {
    pausado: {
      titulo: '保護は一時停止中です',
      mensagem:
        '保護をオフにするよう選び、待機時間も終わりました。いまは何もブロックされていません。',
      reativar: '保護を再開する',
      legenda: '再開するとすぐに有効になります。リストはそのままです。',
      voltamAoReativar: '再開すると、再びブロックされます',
    },
    naoSuportado: {
      titulo: 'iPhoneにはまだ対応していません',
      mensagem:
        '現在、InstablockでアプリをブロックできるのはAndroidだけです。iPhoneでのブロックには、Appleの特別な許可が必要です。',
      saibaMais: '詳しく見る',
      legenda: 'ブラウザで{site}を開きます。',
    },
    naoEncontrado: {
      titulo: 'この画面は存在しません',
      mensagem: 'ここに来るときに使ったリンクは、壊れているか古くなっています。',
      voltarParaOInicio: 'ホームに戻る',
    },
  },
  ajustes: {
    titulo: '設定',
    perfil: {
      semNome: '名前なし',
      rotuloAcessivel: '{nome}。スクリーンタイムの予想',
      dicaFecharAjuste: '設定を閉じます',
      dicaAbrirAjuste: '予想の設定を開きます',
      estimativaNaoDefinida: '予想は未設定です',
      estimativaDeHoras: {
        other: '予想：1日{n}時間',
      },
    },
    protecao: {
      grupo: '保護',
      modoRestrito: '制限モード',
      modoRestritoLigado: 'オン',
      modoRestritoDesligado: 'オフ',
      tempoDeEspera: '待機時間',
      minutosDeEspera: {
        other: '{n}分',
      },
    },
    aparencia: {
      titulo: '外観',
      temaSistema: 'システム',
      temaClaro: 'ライト',
      temaEscuro: 'ダーク',
    },
    permissoes: {
      grupo: '権限',
      pendentes: {
        other: '{n}件が未設定',
      },
      acaoAcessivel: '{acao}：{permissao}',
      acessoAoUso: {
        titulo: '使用状況へのアクセス',
        descricao: 'スクリーンタイムを計測します',
        concedida: '許可済み',
        acao: '許可する',
      },
      sobreporApps: {
        titulo: '他のアプリの上に重ねて表示',
        descricao: 'ブロック画面を表示します',
        concedida: '許可済み',
        acao: '許可する',
      },
      leituraDoNavegador: {
        titulo: 'ブラウザの読み取り',
        descricao: 'サイトをブロックします',
        concedida: '有効',
        acao: '有効にする',
      },
      bateriaSemOtimizacao: {
        titulo: '電池の最適化をオフ',
        descricao: 'Androidが保護を止めないようにします',
        concedida: '設定済み',
        acao: '許可する',
      },
      notificacoes: {
        titulo: '通知',
        descricao: '保護中のお知らせを表示し続けます',
        concedida: 'オン',
        acao: 'オンにする',
      },
    },
    sobre: {
      grupo: 'アプリについて',
      politicaDePrivacidade: 'プライバシーポリシー',
      termosDeUso: '利用規約',
      versao: 'バージョン',
    },
    rodape: 'データはすべて端末の中にとどまります。アカウントもサーバーもありません。',
  },
  onboarding: {
    boasVindas: {
      titulo: 'その衝動、少し待たせましょう。',
      subtitulo: '時間を奪うアプリを選んでください。開きたくなったとき、Instablockが間に入ります。',
      promessaBloqueio: '選んだアプリとサイトをブロックします',
      promessaEspera: {
        other: '気が変わったときは、{n}分の待機時間が必要になることがあります',
      },
      promessaPrivacidade: 'データはすべて端末の中だけ。アカウントは不要です。',
      comecar: 'はじめる',
      sairDoApp: 'アプリを終了',
    },
    cabecalho: {
      voltar: '戻る',
      progressoAcessivel: '全{total}ステップ中{atual}ステップ目',
      contador: '{atual}/{total}',
    },
    continuar: '続ける',
    nome: {
      titulo: '何とお呼びすればいいですか？',
      subtitulo: 'アプリからあいさつするためだけに使います。',
      rotuloCampo: 'お名前',
      placeholder: 'お名前を入力',
      rotuloAcessivel: 'お名前',
      privacidade: 'この端末にだけ保存されます。',
    },
    horas: {
      titulo: '1日のスクリーンタイムは何時間くらいだと思いますか？',
      subtitulo: '正直な予想で大丈夫です。あとで実際の時間と比べます。',
      unidadeAoLadoDoNumero: {
        other: '時間／日',
      },
      horasAbreviadas: '{n}時間',
      rotuloAtalhos: 'または、値をタップ：',
      atalhoAcessivel: {
        other: '1日{n}時間',
      },
      sliderAcessivel: '1日のスマホ使用時間',
    },
    acessoAoUso: {
      titulo: '実際のスクリーンタイムを測りましょう',
      subtituloIos: 'そのために、iPhoneで許可が必要です。',
      subtituloAndroid: 'そのために、Androidで「使用状況へのアクセス」の許可が必要です。',
      tituloExemplo: '表示される内容',
      seloExemplo: 'サンプル',
      legendaExemplo: 'サンプル — 使用状況へのアクセスを許可すると、自分のデータが表示されます',
      veOTempo: '各アプリを開いていた時間がわかります。',
      naoVeODentro: 'アプリの中で何をしているかは見えません。',
      nadaSai: 'データが端末の外に出ることはありません。',
      liberar: '使用状況へのアクセスを許可',
      agoraNao: 'あとで',
    },
    escolha: {
      tituloComNome: '{nome}さん、何をブロックしますか？',
      titulo: '何をブロックしますか？',
      subtitulo: 'アプリを1つ以上選んでください。あとから変更できます。',
      permissoesFaltando: {
        other: 'ブロックするには、あと{n}件の許可が必要です',
      },
      permissaoAcessoAoUso: '使用状況へのアクセス',
      permissaoSobreposicao: '他のアプリの上に重ねて表示',
      permissaoPronta: '完了',
      liberarPermissao: '許可する',
      liberarPermissaoAcessivel: '{permissao}を許可',
      buscaPlaceholder: 'アプリを検索',
      buscaAcessivel: 'アプリを名前で検索',
      erroAoListar:
        '端末のアプリ一覧を読み込めませんでした。この画面をいったん閉じて、もう一度開いてください。',
      semResultado: 'その名前のアプリはありません。',
      bloquearSemApps: 'ブロック',
      bloquearApps: {
        other: '{n}個のアプリをブロック',
      },
      liberePermissoes: {
        other: '続けるには、上の許可をオンにしてください。',
      },
    },
    conclusao: {
      bloqueioCriado: 'ブロックを設定しました。',
      umAppBloqueado: '{app}をブロックしました。',
      variosAppsBloqueados: {
        other: '{n}個のアプリをブロックしました。',
      },
      subtitulo: '開きたくなったとき、Instablockが間に入ります。',
      aPartirDeAgora: '今からブロックされます',
      eMaisApps: {
        other: 'ほか{n}個のアプリも、今からブロックされます',
      },
      appSemNome: 'アプリ',
      seloBloqueado: 'ブロック中',
      irParaOInicio: 'ホームへ',
    },
    ofertaRestrito: {
      titulo: '制限モード',
      selo: 'おすすめ',
      textoComUmApp: {
        other:
          'オフのままなら、{app}はすぐにリストから外せます。オンにすると、リストの変更に{n}分の待機時間が必要になります。衝動が過ぎ去るまでの時間です。',
      },
      textoComVariosApps: {
        other:
          'オフのままなら、アプリはすぐにリストから外せます。オンにすると、リストの変更に{n}分の待機時間が必要になります。衝動が過ぎ去るまでの時間です。',
      },
      ligar: '制限モードをオンにする',
      ligarAcessivel: '制限モードをオンにする',
      legenda: 'オンにするとすぐに有効になります。あとから「ブロック」で変更できます。',
    },
    graficoTempoTela: {
      rotuloAcessivel: '{legenda}。{dias}',
      rotuloAcessivelComEstimativa: '{legenda}。{dias}。あなたの予想は1日{estimativa}です',
      diaAcessivel: '{dia}：{valor}',
      diaSemLeitura: '計測データなし',
    },
  },
  bloqueios: {
    tela: {
      titulo: 'ブロック',
      tipoDeBloqueio: 'ブロックの種類',
      segmentoApps: 'アプリ',
      segmentoSites: 'サイト',
    },
    modoRestrito: {
      titulo: '制限モード',
      tituloLigado: '制限モード：オン',
      descricaoLigado: {
        other: 'リストは固定されています。オフにするには{n}分の待機時間が必要です。',
      },
      descricaoDesligado: {
        other: 'オンにすると、リストの変更に{n}分の待機時間が必要になります。',
      },
      rotuloInterruptor: '制限モード',
      dicaQuandoLigado: '確認画面を開いて、待機時間を始めます',
      dicaQuandoDesligado: 'すぐにオンになります',
      notaInterruptoresTravados: '待機時間が終わるまで、スイッチは操作できません。',
    },
    confirmarDesligar: {
      titulo: '制限モードをオフにしますか？',
      corpo: {
        other:
          'アプリのリストを編集できるようになるのは、{n}分の待機時間のあとです。待機はいつでもやめられ、何も失いません。',
      },
      linhaDoTempoFalada: {
        other: '今から{n}分の待機のあと、リストが解除されます',
      },
      marcoAgora: '今',
      trechoDeEspera: {
        other: '{n}分の待機',
      },
      marcoListaLiberada: 'リスト解除',
      manterLigado: 'オンのままにする',
      comecarEspera: {
        other: '{n}分の待機を始める',
      },
    },
    barraSalvar: {
      rotuloBotaoFalado: '変更を保存',
      botao: '保存',
      titulo: {
        other: '未保存の変更：{n}件',
      },
      umItemEntra: '{nome}をリストに追加',
      umItemSai: '{nome}をリストから削除',
      quantosEntram: {
        other: '{n}件を追加',
      },
      quantosSaem: {
        other: '{n}件を削除',
      },
      entramESaem: '{entram}、{saem}',
    },
    legendaDaLinha: {
      bloqueado: 'ブロック中',
      bloqueiaAoSalvar: '保存するとブロック',
      saiAoSalvar: '保存するとリストから外れます',
    },
    apps: {
      instrucaoIos: '下の一覧から、ブロックしたいアプリを選んでください。',
      cabecalhoSeletorIos: 'ブロックするアプリを選んでください',
      salvarLista: 'リストを保存',
      secaoBloqueados: 'ブロック中 · {n}',
      secaoOutros: 'ほかのアプリ',
      buscaPlaceholder: {
        other: '{n}個のアプリから検索',
      },
      buscaRotuloFalado: 'アプリを名前で検索',
      erroAoLer:
        '端末のアプリ一覧を読み込めませんでした。この画面をいったん閉じて、もう一度開いてください。',
      nenhumAppNoAparelho: 'この端末には選べるアプリがありません。',
      nenhumAppComEsseNome: 'その名前のアプリはありません。',
      botaoHorariosFalado: '{app}の自由時間帯',
    },
    sites: {
      avisoAcessibilidadeTitulo: 'サイトをブロックするには、ブラウザの読み取りを有効にしてください',
      avisoAcessibilidadeMensagem:
        'InstablockはAndroidのユーザー補助サービスを使い、Chrome、Samsung Internet、Firefox、Edge、Braveのアドレスバーに表示されたアドレスだけを読み取って、あなたのリストと照合します。ページの内容は読み取らず、閲覧したサイトも保存しません。データが端末の外に出ることもありません。',
      ativarNasConfiguracoes: '設定で有効にする',
      erroAoLer:
        'サイトのリストを読み込めませんでした。この画面をいったん閉じて、もう一度開いてください。',
      campoRotulo: 'サイトを追加',
      campoPlaceholder: '例：instagram.com',
      campoRotuloFalado: 'ブロックするサイトのアドレス',
      campoAjuda: 'そのサイトと、m.instagram.comのような配下のアドレスをすべてブロックします。',
      campoErro: 'instagram.comのように、サイトのアドレスを入力してください。',
      botaoAdicionarFalado: 'サイトを追加',
      botaoAdicionar: '追加',
      vazioTitulo: 'ブロック中のサイトはまだありません',
      vazioMensagem: 'まずは、時間を奪っているサイトのアドレスを1つ入力しましょう。',
      secaoBloqueados: 'ブロック中 · {n}',
      legendaSalvo: 'サブドメインも含む',
      legendaBloqueiaAoSalvar: '保存するとブロック',
      removerFalado: '{site}を削除',
      leituraAtiva: 'ブラウザの読み取り：有効 · サイトはブロックされています',
    },
    consentimentoAcessibilidade: {
      titulo: 'ユーザー補助を使ってサイトをブロックしますか？',
      introducao:
        'InstablockはAndroidのAccessibilityService APIを使い、あなたのリストにあるサイトをブロックします。同意した場合にのみ有効になります。',
      lidoTitulo: '読み取られるもの',
      lido: 'Chrome、Samsung Internet、Firefox、Edge、Braveのアドレスバーに表示されたアドレスだけです。ほかのアプリは読み取りません。',
      usoTitulo: '用途',
      uso: 'アドレスをあなたのリストと照合し、サイトがリストにあるときにブロック画面を表示します。',
      privacidadeTitulo: '決して行わないこと',
      privacidade:
        'ページの内容は読み取らず、アドレスは保存せず、データを端末の外に送信したり共有したりすることもありません。',
      comoDesligar:
        '同意すると、Androidの設定に移動し、ユーザー補助でInstablockを有効にします。いつでもオフにできます。',
      concordar: '同意して有効にする',
      recusar: '今はしない',
    },
    horarios: {
      titulo: '自由時間帯',
      rotuloFolhaFalado: '{app}の自由時間帯',
      explicacao:
        'この時間帯は、{app}をブロックなしで開けます。それ以外の時間はブロックされたままです。',
      abrirDataEHora: '日付と時刻の設定を開く',
      vazio: '自由時間帯はありません。{app}は常にブロックされています。',
      editarFaixaFalado: '{faixa}を編集',
      removerFaixaFalado: '{faixa}を削除',
      adicionarHorario: '自由時間帯を追加',
      erroAoSalvar: '保存できませんでした。もう一度お試しください。',
      salvar: '保存',
      cancelar: 'キャンセル',
      fechar: '閉じる',
      formulario: {
        dias: '曜日',
        inicio: '開始',
        fim: '終了',
        menosNoInicioFalado: '開始を15分早める',
        maisNoInicioFalado: '開始を15分遅らせる',
        menosNoFimFalado: '終了を15分早める',
        maisNoFimFalado: '終了を15分遅らせる',
        terminaNoDiaSeguinte: '翌日の{hora}に終わります。',
        cancelar: 'キャンセル',
        adicionar: '追加',
        atualizar: '更新',
      },
      nenhumDia: '曜日が未選択',
      todosOsDias: '毎日',
      intervaloDeDias: '{inicio}〜{fim}',
      faixa: '{dias} · {inicio}〜{fim}',
      faixaAteODiaSeguinte: '{dias} · {inicio}〜翌日{fim}',
      legendaDaLinha: {
        other: '自由時間帯：{n}件',
      },
      erroSemDia: '曜日を1つ以上選んでください。',
      erroDiaInvalido: '曜日が正しくありません。',
      erroHorarioInvalido: '時刻が正しくありません。',
      erroInicioIgualAoFim: '開始と終了を同じ時刻にすることはできません。',
      erroMaximoPorApp: {
        other: '自由時間帯は1つのアプリにつき{n}件までです。',
      },
      avisoModoRestritoTitulo: '自由時間帯は一時停止中',
      avisoModoRestritoMensagem:
        '制限モードがオンの間は、自由時間帯は適用されません。アプリは常にブロックされます。',
      avisoRelogioTitulo: '日付と時刻の自動設定をオンにしてください',
      avisoRelogioMensagem:
        '時刻とタイムゾーンが自動設定でないと、自由時間帯は適用されません。時計を変えてアプリを開けないようにするためです。',
    },
  },
  inicio: {
    saudacaoComNome: 'こんにちは、{nome}さん',
    saudacao: 'こんにちは',
    protecaoAtiva: '保護中',
    gerenciarBloqueios: 'ブロックを管理',
    gerenciar: '管理',
    modoRestritoLigado: '制限モード：オン',
    modoRestritoDesligado: '制限モード：オフ',
    modoRestritoLigadoDetalhe: 'リストの変更には待機時間が必要です。',
    modoRestritoDesligadoDetalhe: 'アプリはすぐにリストから外せます。',
    ligarModoRestrito: '制限モードをオンにする',
    ligar: 'オンにする',
    sitesSemBloqueioMensagem:
      'ブラウザの読み取りがオフになりました。アプリは引き続きブロックされています。',
    sitesSemBloqueioAcao: '設定でオンにする',
    tempoDeTelaHoje: '今日のスクリーンタイム',
    erroTempoDeTela: 'いまはスクリーンタイムを読み込めません。',
    maisUsadosHoje: '今日よく使ったアプリ',
    nadaRegistradoTitulo: '今日はまだ記録がありません',
    nadaRegistradoMensagem: 'スマホを使うと、ここにアプリが表示されます。',
    historicoComecaTitulo: '履歴は今日から始まります',
    historicoComecaMensagem:
      '今日からInstablockがスクリーンタイムを記録し、このグラフが自動で埋まっていきます。',
    ultimos7Dias: '過去7日間',
    legendaEstimativa: 'あなたの予想',
    legendaGraficoSemana: '過去7日間のスクリーンタイム',
    notaCalendario:
      '空白の日は計測データがない日です。履歴はアプリをインストールした日から始まります。',
    resumo: {
      nadaBloqueado: 'まだ何もブロックしていません',
      appsBloqueados: {
        other: '{n}個のアプリをブロック中',
      },
      sitesBloqueados: {
        other: '{n}件のサイトをブロック中',
      },
      appsESitesBloqueados: '{apps}と{sites}をブロック中',
      sitesPausados: {
        other: '{n}件のサイトを一時停止中',
      },
      appsBloqueadosESitesPausados: '{apps} · サイトは一時停止中',
      appsLiberados: {
        other: '{n}個のアプリが解除されています',
      },
      sitesLiberados: {
        other: '{n}件のサイトが解除されています',
      },
      appsESitesLiberados: '{apps}と{sites}が解除されています',
      apps: {
        other: '{n}個のアプリ',
      },
      sites: {
        other: '{n}件のサイト',
      },
    },
    pilha: {
      maisForaDaPilha: '+ {resto}',
      apps: {
        other: '{n}個のアプリ',
      },
      sites: {
        other: '{n}件のサイト',
      },
    },
    sitesSemBloqueioTitulo: {
      other: '{n}件のサイトが現在ブロックされていません',
    },
    notaSemLeitura: {
      diasDaSemana: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
      umDia: '{dia}は計測データがありません。端末がこの日を記録しませんでした。',
      variosDias: {
        other: '{n}日分の計測データがありません。端末がその日を記録しませんでした。',
      },
    },
  },
  tempoTela: {
    hoje: '今日',
    naEstimativa: '予想の{estimativa}どおりです',
    abaixoDaEstimativa: '予想の{estimativa}より{diferenca}少なめです',
    acimaDaEstimativa: '予想の{estimativa}より{diferenca}多めです',
    diaSemMedicao: '{dia}日、計測データなし',
    diaComDuracao: '{dia}日、{duracao}',
  },
  espera: {
    contagem: {
      faltamMinutosESegundos: '残り{m}分{s}秒',
      faltamSegundos: '残り{s}秒',
      faltamFalado: '残り{tempo}',
      restanteDeTotal: '{restante}／{total}分',
      restantes: '残り',
      carregando: '残り時間を読み込み中',
      erroLeitura: '残り時間を読み込めませんでした。',
      tentarDeNovo: 'もう一度試す',
      concluida: '待機時間が終わりました',
    },
    emAndamento: '待機中',
    confirmando: '確認中…',
    regraAppFechado: 'アプリを閉じても、カウントは続きます。',
    regraCelularDesligado:
      'スマホの電源を切るとカウントは止まり、次に起動したとき止まったところから再開します。',
    desistir: '待機をやめる',
    legendaDesistir: '待機はいつでも無料で、すぐにやめられます。{aposDesistir}',
    alvos: {
      desligarProtecao: {
        titulo: '保護のオフを待っています',
        corpo: '時間になると保護がオフになり、ブロック中のアプリが再び開けるようになります。',
        fim: 'カウントがゼロになると、保護は自動でオフになります。',
        aposDesistir: '保護はオンのままです。',
      },
      desbloquearApp: {
        titulo: 'ブロック解除を待っています',
        corpo: '時間になると、アプリが再び開けるようになります。',
        fim: 'カウントがゼロになると、アプリが解除されます。',
        aposDesistir: 'アプリはブロックされたままです。',
      },
      mudarDuracao: {
        titulo: '待機時間の変更を待っています',
        corpo: '時間になると、新しい待機時間が適用されます。',
        fim: 'カウントがゼロになると、新しい待機時間が有効になります。',
        aposDesistir: '待機時間は変わりません。',
      },
      desligarModoRestrito: {
        titulo: '制限モードの解除を待っています',
        corpo: '時間になると、アプリのリストを再び編集できるようになります。',
        fim: 'カウントがゼロになると、制限モードは自動でオフになります。',
        aposDesistir: '制限モードはオンのままです。',
      },
    },
  },
};
