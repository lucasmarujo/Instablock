import type { Textos } from '../catalogo';

export const textos: Textos = {
  idioma: 'ms',
  lista: {
    separador: ', ',
    ultimoSeparador: ' dan ',
  },
  datas: {
    diasDaSemana: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
    diasDaSemanaAbreviados: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
    diasDaSemanaIniciais: ['A', 'I', 'S', 'R', 'K', 'J', 'S'],
    meses: [
      'Januari',
      'Februari',
      'Mac',
      'April',
      'Mei',
      'Jun',
      'Julai',
      'Ogos',
      'September',
      'Oktober',
      'November',
      'Disember',
    ],
    mesesNaData: [
      'Januari',
      'Februari',
      'Mac',
      'April',
      'Mei',
      'Jun',
      'Julai',
      'Ogos',
      'September',
      'Oktober',
      'November',
      'Disember',
    ],
    dataPorExtenso: '{diaDaSemana}, {dia} {mes}',
  },
  hora: {
    modelo: '{h}:{mm} {periodo}',
    periodos: ['PG', 'PTG'],
  },
  duracao: {
    horasEMinutos: '{h} j {mm} min',
    horas: '{h} j',
    minutos: '{m} min',
    segundos: '{s} s',
    horasEMinutosCompacta: '{h}j{mm}',
    horasFaladas: {
      other: '{n} jam',
    },
    minutosFalados: {
      other: '{n} minit',
    },
    segundosFalados: {
      other: '{n} saat',
    },
    nenhumTempo: 'tiada masa direkodkan',
    menosDeUmMinuto: 'kurang daripada seminit',
  },
  comum: {
    fecharFolha: 'Tutup',
    rotuloComValor: '{rotulo}, {valor}',
    rotuloComContador: '{rotulo}, {contador}',
    cabecalhoSeletorDeApps: 'Pilih apl untuk disekat',
  },
  navegacao: {
    abaInicio: 'Utama',
    abaBloqueios: 'Sekatan',
    abaAjustes: 'Tetapan',
  },
  estados: {
    pausado: {
      titulo: 'Perlindungan dimatikan',
      mensagem:
        'Anda meminta untuk mematikannya dan sudah melalui tempoh menunggu. Tiada apa yang disekat sekarang.',
      reativar: 'Hidupkan semula perlindungan',
      legenda: 'Menghidupkan semula berlaku serta-merta. Senarai kekal sama.',
      voltamAoReativar: 'Disekat semula apabila perlindungan dihidupkan',
    },
    naoSuportado: {
      titulo: 'Belum berfungsi di iPhone',
      mensagem:
        'Buat masa ini, AceleraLock hanya menyekat apl di Android. Di iPhone, sekatan memerlukan kebenaran khas daripada Apple.',
      saibaMais: 'Ketahui lebih lanjut',
      legenda: 'Membuka {site} dalam pelayar.',
    },
    naoEncontrado: {
      titulo: 'Skrin ini tidak wujud',
      mensagem: 'Pautan yang membawa anda ke sini rosak atau sudah lapuk.',
      voltarParaOInicio: 'Kembali ke halaman utama',
    },
  },
  ajustes: {
    titulo: 'Tetapan',
    perfil: {
      semNome: 'Tiada nama',
      rotuloAcessivel: '{nome}. Anggaran masa skrin',
      dicaFecharAjuste: 'Menutup pelarasan',
      dicaAbrirAjuste: 'Membuka pelarasan anggaran',
      estimativaNaoDefinida: 'Anggaran belum ditetapkan',
      estimativaDeHoras: {
        other: 'Anggaran: {n} jam masa skrin sehari',
      },
    },
    protecao: {
      grupo: 'Perlindungan',
      modoRestrito: 'Mod terhad',
      modoRestritoLigado: 'Hidup',
      modoRestritoDesligado: 'Mati',
      tempoDeEspera: 'Tempoh menunggu',
      minutosDeEspera: {
        other: '{n} min',
      },
    },
    aparencia: {
      titulo: 'Penampilan',
      temaSistema: 'Sistem',
      temaClaro: 'Cerah',
      temaEscuro: 'Gelap',
    },
    permissoes: {
      grupo: 'Kebenaran',
      pendentes: {
        other: '{n} belum diberi',
      },
      acaoAcessivel: '{acao}: {permissao}',
      acessoAoUso: {
        titulo: 'Akses penggunaan',
        descricao: 'Mengukur masa skrin',
        concedida: 'Diberikan',
        acao: 'Betulkan',
      },
      sobreporApps: {
        titulo: 'Paparkan di atas apl lain',
        descricao: 'Menunjukkan skrin sekatan',
        concedida: 'Diberikan',
        acao: 'Betulkan',
      },
      leituraDoNavegador: {
        titulo: 'Bacaan pelayar',
        descricao: 'Menyekat tapak web',
        concedida: 'Aktif',
        acao: 'Aktifkan',
      },
      bateriaSemOtimizacao: {
        titulo: 'Bateri tanpa pengoptimuman',
        descricao: 'Menghalang Android daripada menghentikan perlindungan',
        concedida: 'Ya',
        acao: 'Betulkan',
      },
      notificacoes: {
        titulo: 'Pemberitahuan',
        descricao: 'Mengekalkan makluman perlindungan aktif',
        concedida: 'Diaktifkan',
        acao: 'Aktifkan',
      },
    },
    sobre: {
      grupo: 'Perihal',
      politicaDePrivacidade: 'Dasar privasi',
      termosDeUso: 'Terma penggunaan',
      versao: 'Versi',
    },
    rodape: 'Semuanya kekal dalam telefon anda. Tanpa akaun, tanpa pelayan.',
  },
  onboarding: {
    boasVindas: {
      titulo: 'Biar dorongan itu menunggu.',
      subtitulo:
        'Pilih apl yang mencuri masa anda. Apabila datang keinginan untuk membukanya, AceleraLock akan menghalang.',
      promessaBloqueio: 'Menyekat apl dan tapak web yang anda pilih',
      promessaEspera: {
        other: 'Menukar fikiran mungkin memerlukan tempoh menunggu {n} min',
      },
      promessaPrivacidade: 'Semuanya kekal dalam telefon anda. Tanpa akaun.',
      comecar: 'Mula',
      sairDoApp: 'Keluar dari apl',
    },
    cabecalho: {
      voltar: 'Kembali',
      progressoAcessivel: 'Langkah {atual} daripada {total}',
      contador: '{atual} daripada {total}',
    },
    continuar: 'Teruskan',
    nome: {
      titulo: 'Apa nama panggilan anda?',
      subtitulo: 'Supaya apl boleh menyapa anda.',
      rotuloCampo: 'Nama anda',
      placeholder: 'nama anda',
      rotuloAcessivel: 'Nama anda',
      privacidade: 'Disimpan dalam telefon ini sahaja.',
    },
    horas: {
      titulo: 'Agaknya berapa lama masa skrin anda sehari?',
      subtitulo: 'Teka dengan jujur. Nanti apl akan membandingkannya dengan masa sebenar.',
      unidadeAoLadoDoNumero: {
        other: 'jam sehari',
      },
      horasAbreviadas: '{n} j',
      rotuloAtalhos: 'Atau ketik satu nilai:',
      atalhoAcessivel: {
        other: '{n} jam sehari',
      },
      sliderAcessivel: 'Jam sehari di telefon',
    },
    acessoAoUso: {
      titulo: 'Mari ukur masa skrin sebenar anda',
      subtituloIos: 'Untuk itu, iPhone meminta kebenaran anda.',
      subtituloAndroid: 'Untuk itu, Android meminta kebenaran akses penggunaan.',
      tituloExemplo: 'Apa yang anda akan lihat',
      seloExemplo: 'CONTOH',
      legendaExemplo: 'Contoh — benarkan akses penggunaan untuk melihat data anda',
      veOTempo: 'Melihat berapa lama setiap apl dibuka.',
      naoVeODentro: 'Tidak melihat apa yang anda lakukan di dalamnya.',
      nadaSai: 'Tiada apa yang keluar dari telefon anda.',
      liberar: 'Benarkan akses penggunaan',
      agoraNao: 'Bukan sekarang',
    },
    escolha: {
      tituloComNome: '{nome}, apa yang anda mahu sekat?',
      titulo: 'Apa yang anda mahu sekat?',
      subtitulo: 'Pilih sekurang-kurangnya satu apl. Boleh diubah kemudian.',
      permissoesFaltando: {
        other: 'Perlu {n} kebenaran lagi untuk menyekat',
      },
      permissaoAcessoAoUso: 'Akses penggunaan',
      permissaoSobreposicao: 'Paparkan di atas apl lain',
      permissaoPronta: 'Sedia',
      liberarPermissao: 'Benarkan',
      liberarPermissaoAcessivel: 'Benarkan {permissao}',
      buscaPlaceholder: 'Cari apl',
      buscaAcessivel: 'Cari apl mengikut nama',
      erroAoListar:
        'Senarai apl pada peranti tidak dapat dibaca. Keluar dan masuk semula ke skrin ini untuk mencuba lagi.',
      semResultado: 'Tiada apl dengan nama itu.',
      bloquearSemApps: 'Sekat',
      bloquearApps: {
        other: 'Sekat {n} apl',
      },
      liberePermissoes: {
        other: 'Berikan kebenaran di atas untuk meneruskan.',
      },
    },
    conclusao: {
      bloqueioCriado: 'Sekatan dibuat.',
      umAppBloqueado: '{app} disekat.',
      variosAppsBloqueados: {
        other: '{n} apl disekat.',
      },
      subtitulo: 'Apabila datang keinginan untuk membukanya, AceleraLock akan menghalang.',
      aPartirDeAgora: 'Mulai sekarang',
      eMaisApps: {
        other: 'Dan {n} apl lagi, mulai sekarang',
      },
      appSemNome: 'Apl',
      seloBloqueado: 'Disekat',
      irParaOInicio: 'Pergi ke halaman utama',
    },
    ofertaRestrito: {
      titulo: 'Mod terhad',
      selo: 'DISYORKAN',
      textoComUmApp: {
        other:
          'Tanpanya, anda boleh keluarkan {app} daripada senarai serta-merta. Dengannya, menukar senarai memerlukan tempoh menunggu {n} min — masa untuk keinginan itu berlalu.',
      },
      textoComVariosApps: {
        other:
          'Tanpanya, anda boleh keluarkan apl daripada senarai serta-merta. Dengannya, menukar senarai memerlukan tempoh menunggu {n} min — masa untuk keinginan itu berlalu.',
      },
      ligar: 'Hidupkan mod terhad',
      ligarAcessivel: 'Hidupkan mod terhad',
      legenda: 'Menghidupkannya berlaku serta-merta. Boleh diubah kemudian dalam Sekatan.',
    },
    graficoTempoTela: {
      rotuloAcessivel: '{legenda}. {dias}',
      rotuloAcessivelComEstimativa: '{legenda}. {dias}. Anggaran anda {estimativa} sehari',
      diaAcessivel: '{dia}: {valor}',
      diaSemLeitura: 'tiada bacaan',
    },
  },
  bloqueios: {
    tela: {
      titulo: 'Sekatan',
      tipoDeBloqueio: 'Jenis sekatan',
      segmentoApps: 'Apl',
      segmentoSites: 'Tapak web',
    },
    modoRestrito: {
      titulo: 'Mod terhad',
      tituloLigado: 'Mod terhad dihidupkan',
      descricaoLigado: {
        other: 'Senarai dikunci. Mematikannya memerlukan tempoh menunggu {n} min.',
      },
      descricaoDesligado: {
        other: 'Apabila dihidupkan, menukar senarai memerlukan tempoh menunggu {n} min.',
      },
      rotuloInterruptor: 'Mod terhad',
      dicaQuandoLigado: 'Membuka pengesahan untuk memulakan tempoh menunggu',
      dicaQuandoDesligado: 'Dihidupkan serta-merta',
      notaInterruptoresTravados: 'Suis dikunci sehingga tempoh menunggu tamat.',
    },
    confirmarDesligar: {
      titulo: 'Matikan mod terhad?',
      corpo: {
        other:
          'Senarai apl hanya boleh diedit semula selepas tempoh menunggu {n} minit. Anda boleh membatalkannya pada bila-bila masa, tanpa sebarang kos.',
      },
      linhaDoTempoFalada: {
        other: 'Sekarang, {n} minit menunggu, kemudian senarai dibuka kunci',
      },
      marcoAgora: 'Sekarang',
      trechoDeEspera: {
        other: '{n} min menunggu',
      },
      marcoListaLiberada: 'Senarai dibuka kunci',
      manterLigado: 'Kekalkan hidup',
      comecarEspera: {
        other: 'Mula menunggu {n} min',
      },
    },
    barraSalvar: {
      rotuloBotaoFalado: 'Simpan perubahan',
      botao: 'Simpan',
      titulo: {
        other: '{n} perubahan belum disimpan',
      },
      umItemEntra: '{nome} masuk ke senarai',
      umItemSai: '{nome} keluar dari senarai',
      quantosEntram: {
        other: '{n} masuk',
      },
      quantosSaem: {
        other: '{n} keluar',
      },
      entramESaem: '{entram}, {saem}',
    },
    legendaDaLinha: {
      bloqueado: 'Disekat',
      bloqueiaAoSalvar: 'Disekat apabila disimpan',
      saiAoSalvar: 'Keluar apabila disimpan',
    },
    apps: {
      instrucaoIos: 'Pilih apl yang anda mahu sekat dalam pemilih di bawah.',
      cabecalhoSeletorIos: 'Pilih apl untuk disekat',
      salvarLista: 'Simpan senarai',
      secaoBloqueados: 'Disekat · {n}',
      secaoOutros: 'Apl lain',
      buscaPlaceholder: {
        other: 'Cari antara {n} apl',
      },
      buscaRotuloFalado: 'Cari apl mengikut nama',
      erroAoLer:
        'Senarai apl pada peranti tidak dapat dibaca. Keluar dan masuk semula ke skrin ini untuk mencuba lagi.',
      nenhumAppNoAparelho: 'Tiada apl untuk dipilih pada peranti ini.',
      nenhumAppComEsseNome: 'Tiada apl dengan nama itu.',
      botaoHorariosFalado: 'Waktu bebas {app}',
    },
    sites: {
      avisoAcessibilidadeTitulo: 'Aktifkan bacaan pelayar untuk menyekat tapak web',
      avisoAcessibilidadeMensagem:
        'AceleraLock menggunakan perkhidmatan kebolehaksesan Android hanya untuk membaca alamat pada bar Chrome, Samsung Internet, Firefox, Edge dan Brave, lalu membandingkannya dengan senarai anda. Ia tidak membaca kandungan halaman, tidak menyimpan apa yang anda lawati dan tiada apa yang keluar dari peranti.',
      ativarNasConfiguracoes: 'Aktifkan dalam Tetapan',
      erroAoLer:
        'Senarai tapak web tidak dapat dibaca. Keluar dan masuk semula ke skrin ini untuk mencuba lagi.',
      campoRotulo: 'Tambah tapak web',
      campoPlaceholder: 'cth.: instagram.com',
      campoRotuloFalado: 'Alamat tapak web untuk disekat',
      campoAjuda: 'Menyekat tapak web itu dan semua alamat di dalamnya, seperti m.instagram.com.',
      campoErro: 'Masukkan alamat tapak web, seperti instagram.com.',
      botaoAdicionarFalado: 'Tambah tapak web',
      botaoAdicionar: 'Tambah',
      vazioTitulo: 'Belum ada tapak web yang disekat',
      vazioMensagem: 'Masukkan alamat tapak web pertama yang mencuri masa anda.',
      secaoBloqueados: 'Disekat · {n}',
      legendaSalvo: 'dan subdomain',
      legendaBloqueiaAoSalvar: 'Disekat apabila disimpan',
      removerFalado: 'Alih keluar {site}',
      leituraAtiva: 'Bacaan pelayar aktif · tapak web disekat',
    },
    horarios: {
      titulo: 'Waktu bebas',
      rotuloFolhaFalado: 'Waktu bebas {app}',
      explicacao:
        'Pada waktu ini, {app} dibuka tanpa sekatan. Di luar waktu ini, ia kekal disekat.',
      abrirDataEHora: 'Buka tarikh dan masa',
      vazio: 'Tiada waktu bebas: {app} disekat sepanjang masa.',
      editarFaixaFalado: 'Edit {faixa}',
      removerFaixaFalado: 'Alih keluar {faixa}',
      adicionarHorario: 'Tambah waktu bebas',
      erroAoSalvar: 'Tidak dapat disimpan. Cuba lagi.',
      salvar: 'Simpan',
      cancelar: 'Batal',
      fechar: 'Tutup',
      formulario: {
        dias: 'Hari',
        inicio: 'Dari',
        fim: 'Hingga',
        menosNoInicioFalado: 'Kurang 15 minit pada waktu mula',
        maisNoInicioFalado: 'Tambah 15 minit pada waktu mula',
        menosNoFimFalado: 'Kurang 15 minit pada waktu tamat',
        maisNoFimFalado: 'Tambah 15 minit pada waktu tamat',
        terminaNoDiaSeguinte: 'Tamat pada {hora} hari berikutnya.',
        cancelar: 'Batal',
        adicionar: 'Tambah',
        atualizar: 'Kemas kini',
      },
      nenhumDia: 'Tiada hari',
      todosOsDias: 'Setiap hari',
      intervaloDeDias: '{inicio} hingga {fim}',
      faixa: '{dias} · {inicio}–{fim}',
      faixaAteODiaSeguinte: '{dias} · {inicio}–{fim} hari berikutnya',
      legendaDaLinha: {
        other: '{n} waktu bebas',
      },
      erroSemDia: 'Pilih sekurang-kurangnya satu hari.',
      erroDiaInvalido: 'Hari tidak sah.',
      erroHorarioInvalido: 'Waktu tidak sah.',
      erroInicioIgualAoFim: 'Waktu mula dan waktu tamat tidak boleh sama.',
      erroMaximoPorApp: {
        other: 'Maksimum {n} waktu bebas bagi setiap apl.',
      },
      avisoModoRestritoTitulo: 'Waktu bebas dijeda',
      avisoModoRestritoMensagem:
        'Apabila mod terhad dihidupkan, tiada waktu bebas yang berkuat kuasa: apl disekat sepanjang masa.',
      avisoRelogioTitulo: 'Hidupkan tarikh dan masa automatik',
      avisoRelogioMensagem:
        'Tanpa masa dan zon waktu automatik, waktu bebas tidak berkuat kuasa — supaya tiada siapa boleh membuka apl dengan menukar jam.',
    },
  },
  inicio: {
    saudacaoComNome: 'Hai, {nome}',
    saudacao: 'Hai',
    protecaoAtiva: 'Perlindungan aktif',
    gerenciarBloqueios: 'Urus sekatan',
    gerenciar: 'Urus',
    modoRestritoLigado: 'Mod terhad dihidupkan',
    modoRestritoDesligado: 'Mod terhad dimatikan',
    modoRestritoLigadoDetalhe: 'Menukar senarai memerlukan tempoh menunggu.',
    modoRestritoDesligadoDetalhe: 'Mengeluarkan apl daripada senarai berlaku serta-merta.',
    ligarModoRestrito: 'Hidupkan mod terhad',
    ligar: 'Hidupkan',
    sitesSemBloqueioMensagem: 'Bacaan pelayar telah dimatikan. Apl masih disekat.',
    sitesSemBloqueioAcao: 'Hidupkan dalam Tetapan',
    tempoDeTelaHoje: 'Masa skrin hari ini',
    erroTempoDeTela: 'Masa skrin tidak dapat dibaca sekarang.',
    maisUsadosHoje: 'Paling banyak digunakan hari ini',
    nadaRegistradoTitulo: 'Tiada apa direkodkan hari ini',
    nadaRegistradoMensagem: 'Sebaik sahaja anda menggunakan telefon, apl akan muncul di sini.',
    historicoComecaTitulo: 'Sejarah anda bermula sekarang',
    historicoComecaMensagem:
      'Mulai hari ini, AceleraLock merekodkan berapa lama anda menggunakan skrin, dan graf ini akan terisi dengan sendirinya.',
    ultimos7Dias: '7 hari lepas',
    legendaEstimativa: 'anggaran anda',
    legendaGraficoSemana: 'Masa skrin dalam 7 hari lepas',
    notaCalendario:
      'Hari kosong ialah hari tanpa ukuran — sejarah bermula apabila anda memasang apl.',
    resumo: {
      nadaBloqueado: 'Belum ada yang disekat',
      appsBloqueados: {
        other: '{n} apl disekat',
      },
      sitesBloqueados: {
        other: '{n} tapak web disekat',
      },
      appsESitesBloqueados: '{apps} dan {sites} disekat',
      sitesPausados: {
        other: '{n} tapak web dijeda',
      },
      appsBloqueadosESitesPausados: '{apps} · tapak web dijeda',
      appsLiberados: {
        other: '{n} apl dibenarkan',
      },
      sitesLiberados: {
        other: '{n} tapak web dibenarkan',
      },
      appsESitesLiberados: '{apps} dan {sites} dibenarkan',
      apps: {
        other: '{n} apl',
      },
      sites: {
        other: '{n} tapak web',
      },
    },
    pilha: {
      maisForaDaPilha: '+ {resto}',
      apps: {
        other: '{n} apl',
      },
      sites: {
        other: '{n} tapak web',
      },
    },
    sitesSemBloqueioTitulo: {
      other: '{n} tapak web tidak disekat sekarang',
    },
    notaSemLeitura: {
      diasDaSemana: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
      umDia: '{dia} tiada bacaan: peranti tidak merekodkan hari itu.',
      variosDias: {
        other: '{n} hari tiada bacaan: peranti tidak merekodkan hari-hari itu.',
      },
    },
  },
  tempoTela: {
    hoje: 'Kini',
    naEstimativa: 'Tepat dengan anggaran {estimativa} anda',
    abaixoDaEstimativa: '{diferenca} di bawah anggaran {estimativa} anda',
    acimaDaEstimativa: '{diferenca} di atas anggaran {estimativa} anda',
    diaSemMedicao: 'Tarikh {dia}, tiada ukuran',
    diaComDuracao: 'Tarikh {dia}, {duracao}',
  },
  espera: {
    contagem: {
      faltamMinutosESegundos: 'Tinggal {m} min {s} s',
      faltamSegundos: 'Tinggal {s} s',
      faltamFalado: 'Tinggal {tempo}',
      restanteDeTotal: '{restante} daripada {total} min',
      restantes: 'lagi',
      carregando: 'Memuatkan baki masa',
      erroLeitura: 'Baki masa tidak dapat dibaca.',
      tentarDeNovo: 'Cuba lagi',
      concluida: 'Tempoh menunggu selesai',
    },
    emAndamento: 'Sedang menunggu',
    confirmando: 'Mengesahkan…',
    regraAppFechado: 'Kiraan diteruskan walaupun apl ditutup.',
    regraCelularDesligado:
      'Mematikan telefon menjeda kiraan — ia bersambung dari tempat ia berhenti.',
    desistir: 'Batalkan tempoh menunggu',
    legendaDesistir: 'Membatalkan adalah percuma dan serta-merta. {aposDesistir}',
    alvos: {
      desligarProtecao: {
        titulo: 'Mematikan perlindungan',
        corpo:
          'Apabila masa tamat, perlindungan dimatikan dan apl yang disekat boleh dibuka semula.',
        fim: 'Apabila sampai sifar, perlindungan dimatikan dengan sendirinya.',
        aposDesistir: 'Perlindungan kekal hidup.',
      },
      desbloquearApp: {
        titulo: 'Menunggu untuk nyahsekat',
        corpo: 'Apabila masa tamat, apl boleh dibuka semula.',
        fim: 'Apabila sampai sifar, apl dibenarkan.',
        aposDesistir: 'Apl kekal disekat.',
      },
      mudarDuracao: {
        titulo: 'Menunggu untuk menukar tempoh',
        corpo: 'Tempoh baharu berkuat kuasa sebaik sahaja masa tamat.',
        fim: 'Apabila sampai sifar, tempoh baharu mula berkuat kuasa.',
        aposDesistir: 'Tempoh kekal sama.',
      },
      desligarModoRestrito: {
        titulo: 'Mematikan mod terhad',
        corpo: 'Apabila masa tamat, senarai apl boleh diedit semula.',
        fim: 'Apabila sampai sifar, mod terhad dimatikan dengan sendirinya.',
        aposDesistir: 'Mod terhad kekal hidup.',
      },
    },
  },
};
