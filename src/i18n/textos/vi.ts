import type { Textos } from '../catalogo';

export const textos: Textos = {
  idioma: 'vi',
  lista: {
    separador: ', ',
    ultimoSeparador: ' và ',
  },
  datas: {
    diasDaSemana: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
    diasDaSemanaAbreviados: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
    diasDaSemanaIniciais: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    meses: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
    mesesNaData: [
      'tháng 1',
      'tháng 2',
      'tháng 3',
      'tháng 4',
      'tháng 5',
      'tháng 6',
      'tháng 7',
      'tháng 8',
      'tháng 9',
      'tháng 10',
      'tháng 11',
      'tháng 12',
    ],
    dataPorExtenso: '{diaDaSemana}, {dia} {mes}',
  },
  hora: {
    modelo: '{HH}:{mm}',
    periodos: ['SA', 'CH'],
  },
  duracao: {
    horasEMinutos: '{h} giờ {mm} phút',
    horas: '{h} giờ',
    minutos: '{m} phút',
    segundos: '{s} giây',
    horasEMinutosCompacta: '{h}h{mm}',
    horasFaladas: {
      other: '{n} giờ',
    },
    minutosFalados: {
      other: '{n} phút',
    },
    segundosFalados: {
      other: '{n} giây',
    },
    nenhumTempo: 'chưa ghi nhận thời gian nào',
    menosDeUmMinuto: 'dưới một phút',
  },
  comum: {
    fecharFolha: 'Đóng',
    rotuloComValor: '{rotulo}, {valor}',
    rotuloComContador: '{rotulo}, {contador}',
    cabecalhoSeletorDeApps: 'Chọn ứng dụng để chặn',
  },
  navegacao: {
    abaInicio: 'Trang chủ',
    abaBloqueios: 'Chặn',
    abaAjustes: 'Cài đặt',
  },
  estados: {
    pausado: {
      titulo: 'Bảo vệ đã tắt',
      mensagem: 'Bạn đã yêu cầu tắt và đã chờ đủ thời gian. Hiện không có gì bị chặn.',
      reativar: 'Bật lại bảo vệ',
      legenda: 'Bật lại có hiệu lực ngay. Danh sách vẫn giữ nguyên.',
      voltamAoReativar: 'Sẽ bị chặn trở lại khi bật lại bảo vệ',
    },
    naoSuportado: {
      titulo: 'Chưa hoạt động trên iPhone',
      mensagem:
        'Hiện tại Instablock chỉ chặn được ứng dụng trên Android. Trên iPhone, việc chặn cần một quyền đặc biệt từ Apple.',
      saibaMais: 'Tìm hiểu thêm',
      legenda: 'Mở {site} trong trình duyệt.',
    },
    naoEncontrado: {
      titulo: 'Màn hình này không tồn tại',
      mensagem: 'Liên kết đưa bạn đến đây bị hỏng hoặc đã cũ.',
      voltarParaOInicio: 'Về trang chủ',
    },
  },
  ajustes: {
    titulo: 'Cài đặt',
    perfil: {
      semNome: 'Chưa có tên',
      rotuloAcessivel: '{nome}. Ước tính thời gian sử dụng',
      dicaFecharAjuste: 'Đóng phần điều chỉnh',
      dicaAbrirAjuste: 'Mở phần điều chỉnh ước tính',
      estimativaNaoDefinida: 'Chưa đặt ước tính',
      estimativaDeHoras: {
        other: 'Ước tính: {n} giờ sử dụng mỗi ngày',
      },
    },
    protecao: {
      grupo: 'Bảo vệ',
      modoRestrito: 'Chế độ nghiêm ngặt',
      modoRestritoLigado: 'Đang bật',
      modoRestritoDesligado: 'Đang tắt',
      tempoDeEspera: 'Thời gian chờ',
      minutosDeEspera: {
        other: '{n} phút',
      },
    },
    aparencia: {
      titulo: 'Giao diện',
      temaSistema: 'Hệ thống',
      temaClaro: 'Sáng',
      temaEscuro: 'Tối',
    },
    permissoes: {
      grupo: 'Quyền',
      pendentes: {
        other: '{n} chưa cấp',
      },
      acaoAcessivel: '{acao}: {permissao}',
      acessoAoUso: {
        titulo: 'Truy cập dữ liệu sử dụng',
        descricao: 'Đo thời gian sử dụng',
        concedida: 'Đã cấp',
        acao: 'Sửa',
      },
      sobreporApps: {
        titulo: 'Hiển thị trên ứng dụng khác',
        descricao: 'Hiện màn hình chặn',
        concedida: 'Đã cấp',
        acao: 'Sửa',
      },
      leituraDoNavegador: {
        titulo: 'Đọc trình duyệt',
        descricao: 'Chặn các trang web',
        concedida: 'Đang bật',
        acao: 'Bật',
      },
      bateriaSemOtimizacao: {
        titulo: 'Không tối ưu hóa pin',
        descricao: 'Tránh để Android dừng bảo vệ',
        concedida: 'Có',
        acao: 'Sửa',
      },
      notificacoes: {
        titulo: 'Thông báo',
        descricao: 'Giữ thông báo bảo vệ đang bật',
        concedida: 'Đã bật',
        acao: 'Bật',
      },
    },
    sobre: {
      grupo: 'Giới thiệu',
      politicaDePrivacidade: 'Chính sách quyền riêng tư',
      termosDeUso: 'Điều khoản sử dụng',
      versao: 'Phiên bản',
    },
    rodape: 'Mọi thứ đều ở trên điện thoại của bạn. Không tài khoản, không máy chủ.',
  },
  onboarding: {
    boasVindas: {
      titulo: 'Để cơn thôi thúc phải chờ.',
      subtitulo:
        'Chọn những ứng dụng đang lấy mất thời gian của bạn. Khi bạn bỗng muốn mở chúng, Instablock sẽ đứng chắn giữa đường.',
      promessaBloqueio: 'Chặn những ứng dụng và trang web bạn chọn',
      promessaEspera: {
        other: 'Đổi ý có thể cần chờ {n} phút',
      },
      promessaPrivacidade: 'Mọi thứ đều ở trên điện thoại của bạn. Không cần tài khoản.',
      comecar: 'Bắt đầu',
      sairDoApp: 'Thoát ứng dụng',
    },
    cabecalho: {
      voltar: 'Quay lại',
      progressoAcessivel: 'Bước {atual} trên {total}',
      contador: '{atual}/{total}',
    },
    continuar: 'Tiếp tục',
    nome: {
      titulo: 'Bạn muốn được gọi là gì?',
      subtitulo: 'Chỉ để ứng dụng chào bạn.',
      rotuloCampo: 'Tên của bạn',
      placeholder: 'tên của bạn',
      rotuloAcessivel: 'Tên của bạn',
      privacidade: 'Chỉ lưu trên điện thoại này.',
    },
    horas: {
      titulo: 'Bạn nghĩ mỗi ngày mình dùng điện thoại bao lâu?',
      subtitulo: 'Cứ đoán thật lòng. Sau đó ứng dụng sẽ so với con số thực tế.',
      unidadeAoLadoDoNumero: {
        other: 'giờ mỗi ngày',
      },
      horasAbreviadas: '{n} giờ',
      rotuloAtalhos: 'Hoặc chạm vào một giá trị:',
      atalhoAcessivel: {
        other: '{n} giờ mỗi ngày',
      },
      sliderAcessivel: 'Số giờ dùng điện thoại mỗi ngày',
    },
    acessoAoUso: {
      titulo: 'Cùng đo thời gian sử dụng thật của bạn',
      subtituloIos: 'Để làm vậy, iPhone cần bạn cho phép.',
      subtituloAndroid: 'Để làm vậy, Android cần quyền truy cập dữ liệu sử dụng.',
      tituloExemplo: 'Bạn sẽ thấy gì',
      seloExemplo: 'VÍ DỤ',
      legendaExemplo: 'Ví dụ — cấp quyền truy cập dữ liệu sử dụng để xem số liệu của bạn',
      veOTempo: 'Thấy mỗi ứng dụng được mở trong bao lâu.',
      naoVeODentro: 'Không thấy bạn làm gì bên trong chúng.',
      nadaSai: 'Không có gì rời khỏi điện thoại của bạn.',
      liberar: 'Cấp quyền truy cập dữ liệu sử dụng',
      agoraNao: 'Để sau',
    },
    escolha: {
      tituloComNome: '{nome}, bạn muốn chặn gì?',
      titulo: 'Bạn muốn chặn gì?',
      subtitulo: 'Chọn ít nhất một ứng dụng. Bạn có thể đổi sau.',
      permissoesFaltando: {
        other: 'Còn thiếu {n} quyền để chặn',
      },
      permissaoAcessoAoUso: 'Truy cập dữ liệu sử dụng',
      permissaoSobreposicao: 'Hiển thị trên ứng dụng khác',
      permissaoPronta: 'Xong',
      liberarPermissao: 'Cấp quyền',
      liberarPermissaoAcessivel: 'Cấp quyền {permissao}',
      buscaPlaceholder: 'Tìm ứng dụng',
      buscaAcessivel: 'Tìm ứng dụng theo tên',
      erroAoListar:
        'Không đọc được danh sách ứng dụng trên thiết bị. Hãy thoát rồi vào lại màn hình này để thử lại.',
      semResultado: 'Không có ứng dụng nào tên như vậy.',
      bloquearSemApps: 'Chặn',
      bloquearApps: {
        other: 'Chặn {n} ứng dụng',
      },
      liberePermissoes: {
        other: 'Hãy cấp quyền ở trên để tiếp tục.',
      },
    },
    conclusao: {
      bloqueioCriado: 'Đã thiết lập chặn.',
      umAppBloqueado: '{app} đã bị chặn.',
      variosAppsBloqueados: {
        other: 'Đã chặn {n} ứng dụng.',
      },
      subtitulo: 'Khi bạn bỗng muốn mở, Instablock sẽ đứng chắn giữa đường.',
      aPartirDeAgora: 'Kể từ bây giờ',
      eMaisApps: {
        other: 'Và thêm {n} ứng dụng nữa, kể từ bây giờ',
      },
      appSemNome: 'Ứng dụng',
      seloBloqueado: 'Đã chặn',
      irParaOInicio: 'Về trang chủ',
    },
    ofertaRestrito: {
      titulo: 'Chế độ nghiêm ngặt',
      selo: 'ĐỀ XUẤT',
      textoComUmApp: {
        other:
          'Không có chế độ này, bạn gỡ được {app} khỏi danh sách ngay lập tức. Có nó, đổi danh sách cần chờ {n} phút — đủ để cơn thôi thúc qua đi.',
      },
      textoComVariosApps: {
        other:
          'Không có chế độ này, bạn gỡ được một ứng dụng khỏi danh sách ngay lập tức. Có nó, đổi danh sách cần chờ {n} phút — đủ để cơn thôi thúc qua đi.',
      },
      ligar: 'Bật chế độ nghiêm ngặt',
      ligarAcessivel: 'Bật chế độ nghiêm ngặt',
      legenda: 'Bật có hiệu lực ngay. Bạn có thể đổi sau trong mục Chặn.',
    },
    graficoTempoTela: {
      rotuloAcessivel: '{legenda}. {dias}',
      rotuloAcessivelComEstimativa: '{legenda}. {dias}. Bạn ước tính {estimativa} mỗi ngày',
      diaAcessivel: '{dia}: {valor}',
      diaSemLeitura: 'không có dữ liệu',
    },
  },
  bloqueios: {
    tela: {
      titulo: 'Chặn',
      tipoDeBloqueio: 'Loại chặn',
      segmentoApps: 'Ứng dụng',
      segmentoSites: 'Trang web',
    },
    modoRestrito: {
      titulo: 'Chế độ nghiêm ngặt',
      tituloLigado: 'Chế độ nghiêm ngặt đang bật',
      descricaoLigado: {
        other: 'Danh sách đang bị khóa. Muốn tắt cần chờ {n} phút.',
      },
      descricaoDesligado: {
        other: 'Khi bật, đổi danh sách cần chờ {n} phút.',
      },
      rotuloInterruptor: 'Chế độ nghiêm ngặt',
      dicaQuandoLigado: 'Mở phần xác nhận để bắt đầu thời gian chờ',
      dicaQuandoDesligado: 'Bật ngay',
      notaInterruptoresTravados: 'Các công tắc bị khóa cho đến khi hết thời gian chờ.',
    },
    confirmarDesligar: {
      titulo: 'Tắt chế độ nghiêm ngặt?',
      corpo: {
        other:
          'Danh sách ứng dụng chỉ chỉnh sửa lại được sau thời gian chờ {n} phút. Bạn có thể hủy thời gian chờ bất cứ lúc nào, không mất gì.',
      },
      linhaDoTempoFalada: {
        other: 'Bây giờ, chờ {n} phút, sau đó danh sách được mở khóa',
      },
      marcoAgora: 'Bây giờ',
      trechoDeEspera: {
        other: 'Chờ {n} phút',
      },
      marcoListaLiberada: 'Danh sách mở khóa',
      manterLigado: 'Giữ bật',
      comecarEspera: {
        other: 'Bắt đầu chờ {n} phút',
      },
    },
    barraSalvar: {
      rotuloBotaoFalado: 'Lưu thay đổi',
      botao: 'Lưu',
      titulo: {
        other: '{n} thay đổi chưa lưu',
      },
      umItemEntra: '{nome} được thêm vào danh sách',
      umItemSai: '{nome} bị gỡ khỏi danh sách',
      quantosEntram: {
        other: '{n} thêm vào',
      },
      quantosSaem: {
        other: '{n} gỡ ra',
      },
      entramESaem: '{entram}, {saem}',
    },
    legendaDaLinha: {
      bloqueado: 'Đang bị chặn',
      bloqueiaAoSalvar: 'Chặn khi lưu',
      saiAoSalvar: 'Gỡ khi lưu',
    },
    apps: {
      instrucaoIos: 'Chọn các ứng dụng bạn muốn chặn trong bộ chọn bên dưới.',
      cabecalhoSeletorIos: 'Chọn ứng dụng để chặn',
      salvarLista: 'Lưu danh sách',
      secaoBloqueados: 'Đang bị chặn · {n}',
      secaoOutros: 'Ứng dụng khác',
      buscaPlaceholder: {
        other: 'Tìm trong {n} ứng dụng',
      },
      buscaRotuloFalado: 'Tìm ứng dụng theo tên',
      erroAoLer:
        'Không đọc được danh sách ứng dụng trên thiết bị. Hãy thoát rồi vào lại màn hình này để thử lại.',
      nenhumAppNoAparelho: 'Không có ứng dụng nào để chọn trên thiết bị này.',
      nenhumAppComEsseNome: 'Không có ứng dụng nào tên như vậy.',
      botaoHorariosFalado: 'Khung giờ tự do của {app}',
    },
    sites: {
      avisoAcessibilidadeTitulo: 'Bật đọc trình duyệt để chặn trang web',
      avisoAcessibilidadeMensagem:
        'Instablock chỉ dùng dịch vụ hỗ trợ tiếp cận của Android để đọc địa chỉ trên thanh địa chỉ của Chrome, Samsung Internet, Firefox, Edge và Brave rồi so với danh sách của bạn. Ứng dụng không đọc nội dung trang, không lưu những gì bạn truy cập và không có gì rời khỏi thiết bị.',
      ativarNasConfiguracoes: 'Bật trong Cài đặt',
      erroAoLer:
        'Không đọc được danh sách trang web. Hãy thoát rồi vào lại màn hình này để thử lại.',
      campoRotulo: 'Thêm trang web',
      campoPlaceholder: 'vd: instagram.com',
      campoRotuloFalado: 'Địa chỉ trang web cần chặn',
      campoAjuda: 'Chặn trang web và mọi địa chỉ bên trong nó, như m.instagram.com.',
      campoErro: 'Hãy nhập địa chỉ của một trang web, như instagram.com.',
      botaoAdicionarFalado: 'Thêm trang web',
      botaoAdicionar: 'Thêm',
      vazioTitulo: 'Chưa chặn trang web nào',
      vazioMensagem: 'Nhập địa chỉ của trang web đầu tiên đang lấy mất thời gian của bạn.',
      secaoBloqueados: 'Đang bị chặn · {n}',
      legendaSalvo: 'và các tên miền phụ',
      legendaBloqueiaAoSalvar: 'Chặn khi lưu',
      removerFalado: 'Gỡ {site}',
      leituraAtiva: 'Đọc trình duyệt đang bật · các trang web đang bị chặn',
    },
    horarios: {
      titulo: 'Khung giờ tự do',
      rotuloFolhaFalado: 'Khung giờ tự do của {app}',
      explicacao:
        'Trong những khung giờ này, {app} mở được mà không bị chặn. Ngoài các khung giờ đó, ứng dụng vẫn bị chặn.',
      abrirDataEHora: 'Mở cài đặt ngày và giờ',
      vazio: 'Chưa có khung giờ tự do: {app} bị chặn mọi lúc.',
      editarFaixaFalado: 'Sửa {faixa}',
      removerFaixaFalado: 'Xóa {faixa}',
      adicionarHorario: 'Thêm khung giờ tự do',
      erroAoSalvar: 'Không lưu được. Hãy thử lại.',
      salvar: 'Lưu',
      cancelar: 'Hủy',
      fechar: 'Đóng',
      formulario: {
        dias: 'Ngày',
        inicio: 'Từ',
        fim: 'Đến',
        menosNoInicioFalado: 'Giảm 15 phút ở mục Từ',
        maisNoInicioFalado: 'Tăng 15 phút ở mục Từ',
        menosNoFimFalado: 'Giảm 15 phút ở mục Đến',
        maisNoFimFalado: 'Tăng 15 phút ở mục Đến',
        terminaNoDiaSeguinte: 'Kết thúc lúc {hora} ngày hôm sau.',
        cancelar: 'Hủy',
        adicionar: 'Thêm',
        atualizar: 'Cập nhật',
      },
      nenhumDia: 'Không có ngày nào',
      todosOsDias: 'Mọi ngày',
      intervaloDeDias: '{inicio} đến {fim}',
      faixa: '{dias} · {inicio}–{fim}',
      faixaAteODiaSeguinte: '{dias} · {inicio}–{fim} hôm sau',
      legendaDaLinha: {
        other: '{n} khung giờ tự do',
      },
      erroSemDia: 'Hãy chọn ít nhất một ngày.',
      erroDiaInvalido: 'Ngày trong tuần không hợp lệ.',
      erroHorarioInvalido: 'Giờ không hợp lệ.',
      erroInicioIgualAoFim: 'Giờ bắt đầu và giờ kết thúc không được trùng nhau.',
      erroMaximoPorApp: {
        other: 'Mỗi ứng dụng có tối đa {n} khung giờ tự do.',
      },
      avisoModoRestritoTitulo: 'Khung giờ tự do đang tạm dừng',
      avisoModoRestritoMensagem:
        'Khi chế độ nghiêm ngặt đang bật, không khung giờ tự do nào có hiệu lực: ứng dụng bị chặn mọi lúc.',
      avisoRelogioTitulo: 'Hãy bật ngày và giờ tự động',
      avisoRelogioMensagem:
        'Nếu giờ và múi giờ không đặt tự động, khung giờ tự do sẽ không có hiệu lực — nhờ vậy không ai mở được ứng dụng bằng cách chỉnh đồng hồ.',
    },
  },
  inicio: {
    saudacaoComNome: 'Chào {nome}',
    saudacao: 'Xin chào',
    protecaoAtiva: 'Bảo vệ đang bật',
    gerenciarBloqueios: 'Quản lý danh sách chặn',
    gerenciar: 'Quản lý',
    modoRestritoLigado: 'Chế độ nghiêm ngặt đang bật',
    modoRestritoDesligado: 'Chế độ nghiêm ngặt đang tắt',
    modoRestritoLigadoDetalhe: 'Đổi danh sách cần thời gian chờ.',
    modoRestritoDesligadoDetalhe: 'Gỡ một ứng dụng khỏi danh sách có hiệu lực ngay.',
    ligarModoRestrito: 'Bật chế độ nghiêm ngặt',
    ligar: 'Bật',
    sitesSemBloqueioMensagem: 'Đọc trình duyệt đã bị tắt. Các ứng dụng vẫn đang bị chặn.',
    sitesSemBloqueioAcao: 'Bật trong Cài đặt',
    tempoDeTelaHoje: 'Thời gian sử dụng hôm nay',
    erroTempoDeTela: 'Hiện chưa đọc được thời gian sử dụng.',
    maisUsadosHoje: 'Dùng nhiều nhất hôm nay',
    nadaRegistradoTitulo: 'Hôm nay chưa ghi nhận gì',
    nadaRegistradoMensagem: 'Khi bạn dùng điện thoại, các ứng dụng sẽ hiện ở đây.',
    historicoComecaTitulo: 'Lịch sử của bạn bắt đầu từ bây giờ',
    historicoComecaMensagem:
      'Từ hôm nay, Instablock sẽ ghi lại thời gian bạn dành cho màn hình, và biểu đồ này sẽ tự đầy dần.',
    ultimos7Dias: '7 ngày qua',
    legendaEstimativa: 'ước tính của bạn',
    legendaGraficoSemana: 'Thời gian sử dụng trong 7 ngày qua',
    notaCalendario:
      'Ngày để trống là ngày không có dữ liệu đo — lịch sử bắt đầu từ khi bạn cài ứng dụng.',
    resumo: {
      nadaBloqueado: 'Chưa chặn gì',
      appsBloqueados: {
        other: 'Đã chặn {n} ứng dụng',
      },
      sitesBloqueados: {
        other: 'Đã chặn {n} trang web',
      },
      appsESitesBloqueados: 'Đã chặn {apps} và {sites}',
      sitesPausados: {
        other: '{n} trang web đang tạm dừng',
      },
      appsBloqueadosESitesPausados: '{apps} · trang web đang tạm dừng',
      appsLiberados: {
        other: 'Đã bỏ chặn {n} ứng dụng',
      },
      sitesLiberados: {
        other: 'Đã bỏ chặn {n} trang web',
      },
      appsESitesLiberados: 'Đã bỏ chặn {apps} và {sites}',
      apps: {
        other: '{n} ứng dụng',
      },
      sites: {
        other: '{n} trang web',
      },
    },
    pilha: {
      maisForaDaPilha: '+ {resto}',
      apps: {
        other: '{n} ứng dụng',
      },
      sites: {
        other: '{n} trang web',
      },
    },
    sitesSemBloqueioTitulo: {
      other: '{n} trang web hiện không bị chặn',
    },
    notaSemLeitura: {
      diasDaSemana: ['chủ nhật', 'thứ hai', 'thứ ba', 'thứ tư', 'thứ năm', 'thứ sáu', 'thứ bảy'],
      umDia: '{dia} không có dữ liệu: thiết bị không ghi nhận ngày này.',
      variosDias: {
        other: '{n} ngày không có dữ liệu: thiết bị không ghi nhận những ngày này.',
      },
    },
  },
  tempoTela: {
    hoje: 'Nay',
    naEstimativa: 'Khớp với ước tính {estimativa} của bạn',
    abaixoDaEstimativa: 'Ít hơn {diferenca} so với ước tính {estimativa} của bạn',
    acimaDaEstimativa: 'Nhiều hơn {diferenca} so với ước tính {estimativa} của bạn',
    diaSemMedicao: 'Ngày {dia}, không có dữ liệu đo',
    diaComDuracao: 'Ngày {dia}, {duracao}',
  },
  espera: {
    contagem: {
      faltamMinutosESegundos: 'Còn {m} phút {s} giây',
      faltamSegundos: 'Còn {s} giây',
      faltamFalado: 'Còn {tempo}',
      restanteDeTotal: '{restante} trên {total} phút',
      restantes: 'còn lại',
      carregando: 'Đang tải thời gian còn lại',
      erroLeitura: 'Không đọc được thời gian còn lại.',
      tentarDeNovo: 'Thử lại',
      concluida: 'Đã hết thời gian chờ',
    },
    emAndamento: 'Đang trong thời gian chờ',
    confirmando: 'Đang xác nhận…',
    regraAppFechado: 'Thời gian vẫn tiếp tục đếm khi ứng dụng đóng.',
    regraCelularDesligado:
      'Tắt điện thoại sẽ tạm dừng đếm giờ — khi bật lại, thời gian đếm tiếp từ chỗ đã dừng.',
    desistir: 'Hủy thời gian chờ',
    legendaDesistir: 'Hủy là miễn phí và có hiệu lực ngay. {aposDesistir}',
    alvos: {
      desligarProtecao: {
        titulo: 'Đang tắt bảo vệ',
        corpo: 'Khi hết giờ, bảo vệ sẽ tắt và các ứng dụng bị chặn sẽ mở lại được.',
        fim: 'Khi về 0, bảo vệ sẽ tự tắt.',
        aposDesistir: 'Bảo vệ vẫn bật.',
      },
      desbloquearApp: {
        titulo: 'Đang chờ để bỏ chặn',
        corpo: 'Khi hết giờ, ứng dụng sẽ mở lại được.',
        fim: 'Khi về 0, ứng dụng sẽ được bỏ chặn.',
        aposDesistir: 'Ứng dụng vẫn bị chặn.',
      },
      mudarDuracao: {
        titulo: 'Đang chờ để đổi thời lượng',
        corpo: 'Thời lượng mới có hiệu lực ngay khi hết giờ.',
        fim: 'Khi về 0, thời lượng mới bắt đầu có hiệu lực.',
        aposDesistir: 'Thời lượng vẫn giữ nguyên.',
      },
      desligarModoRestrito: {
        titulo: 'Đang tắt chế độ nghiêm ngặt',
        corpo: 'Khi hết giờ, danh sách ứng dụng sẽ chỉnh sửa lại được.',
        fim: 'Khi về 0, chế độ nghiêm ngặt sẽ tự tắt.',
        aposDesistir: 'Chế độ nghiêm ngặt vẫn bật.',
      },
    },
  },
};
