import type { Textos } from '../catalogo';

export const textos: Textos = {
  idioma: 'id',
  lista: {
    separador: ', ',
    ultimoSeparador: ' dan ',
  },
  datas: {
    diasDaSemana: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    diasDaSemanaAbreviados: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
    diasDaSemanaIniciais: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
    meses: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
    mesesNaData: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
    dataPorExtenso: '{diaDaSemana}, {dia} {mes}',
  },
  hora: {
    modelo: '{HH}.{mm}',
    periodos: ['AM', 'PM'],
  },
  duracao: {
    horasEMinutos: '{h} j, {mm} mnt',
    horas: '{h} j',
    minutos: '{m} mnt',
    segundos: '{s} dtk',
    horasEMinutosCompacta: '{h}j {mm}m',
    horasFaladas: {
      other: '{n} jam',
    },
    minutosFalados: {
      other: '{n} menit',
    },
    segundosFalados: {
      other: '{n} detik',
    },
    nenhumTempo: 'belum ada waktu tercatat',
    menosDeUmMinuto: 'kurang dari semenit',
  },
  comum: {
    fecharFolha: 'Tutup',
    rotuloComValor: '{rotulo}, {valor}',
    rotuloComContador: '{rotulo}, {contador}',
    cabecalhoSeletorDeApps: 'Pilih aplikasi yang ingin diblokir',
  },
  navegacao: {
    abaInicio: 'Beranda',
    abaBloqueios: 'Blokir',
    abaAjustes: 'Setelan',
  },
  estados: {
    pausado: {
      titulo: 'Perlindungan nonaktif',
      mensagem:
        'Kamu meminta untuk menonaktifkannya dan sudah menjalani masa tunggu. Tidak ada yang diblokir sekarang.',
      reativar: 'Aktifkan lagi perlindungan',
      legenda: 'Mengaktifkan lagi langsung berlaku. Daftarnya tetap sama.',
      voltamAoReativar: 'Diblokir lagi saat perlindungan diaktifkan',
    },
    naoSuportado: {
      titulo: 'Belum bisa dipakai di iPhone',
      mensagem:
        'Untuk saat ini AceleraLock hanya memblokir aplikasi di Android. Di iPhone, pemblokiran memerlukan izin khusus dari Apple.',
      saibaMais: 'Pelajari lebih lanjut',
      legenda: 'Membuka {site} di browser.',
    },
    naoEncontrado: {
      titulo: 'Layar ini tidak ada',
      mensagem: 'Tautan yang membawamu ke sini rusak atau sudah usang.',
      voltarParaOInicio: 'Kembali ke beranda',
    },
  },
  ajustes: {
    titulo: 'Setelan',
    perfil: {
      semNome: 'Tanpa nama',
      rotuloAcessivel: '{nome}. Perkiraan waktu layar',
      dicaFecharAjuste: 'Menutup pengaturan',
      dicaAbrirAjuste: 'Membuka pengaturan perkiraan',
      estimativaNaoDefinida: 'Perkiraan belum diatur',
      estimativaDeHoras: {
        other: 'Perkiraan: {n} jam waktu layar per hari',
      },
    },
    protecao: {
      grupo: 'Perlindungan',
      modoRestrito: 'Mode ketat',
      modoRestritoLigado: 'Aktif',
      modoRestritoDesligado: 'Nonaktif',
      tempoDeEspera: 'Masa tunggu',
      minutosDeEspera: {
        other: '{n} mnt',
      },
    },
    aparencia: {
      titulo: 'Tampilan',
      temaSistema: 'Sistem',
      temaClaro: 'Terang',
      temaEscuro: 'Gelap',
    },
    permissoes: {
      grupo: 'Izin',
      pendentes: {
        other: '{n} tertunda',
      },
      acaoAcessivel: '{acao}: {permissao}',
      acessoAoUso: {
        titulo: 'Akses penggunaan',
        descricao: 'Mengukur waktu layar',
        concedida: 'Diberikan',
        acao: 'Perbaiki',
      },
      sobreporApps: {
        titulo: 'Tampilkan di atas aplikasi lain',
        descricao: 'Menampilkan layar blokir',
        concedida: 'Diberikan',
        acao: 'Perbaiki',
      },
      leituraDoNavegador: {
        titulo: 'Pembacaan browser',
        descricao: 'Memblokir situs',
        concedida: 'Aktif',
        acao: 'Aktifkan',
      },
      bateriaSemOtimizacao: {
        titulo: 'Baterai tanpa pengoptimalan',
        descricao: 'Mencegah Android menghentikan perlindungan',
        concedida: 'Ya',
        acao: 'Perbaiki',
      },
      notificacoes: {
        titulo: 'Notifikasi',
        descricao: 'Menjaga notifikasi perlindungan aktif tetap tampil',
        concedida: 'Aktif',
        acao: 'Aktifkan',
      },
    },
    sobre: {
      grupo: 'Tentang',
      politicaDePrivacidade: 'Kebijakan privasi',
      termosDeUso: 'Ketentuan penggunaan',
      versao: 'Versi',
    },
    rodape: 'Semua tetap di ponselmu. Tanpa akun, tanpa server.',
  },
  onboarding: {
    boasVindas: {
      titulo: 'Biarkan dorongan itu menunggu.',
      subtitulo:
        'Pilih aplikasi yang mencuri waktumu. Saat muncul keinginan untuk membukanya, AceleraLock akan menghalangi.',
      promessaBloqueio: 'Memblokir aplikasi dan situs yang kamu pilih',
      promessaEspera: {
        other: 'Berubah pikiran bisa memerlukan masa tunggu {n} menit',
      },
      promessaPrivacidade: 'Semua tetap di ponselmu. Tanpa akun.',
      comecar: 'Mulai',
      sairDoApp: 'Keluar dari aplikasi',
    },
    cabecalho: {
      voltar: 'Kembali',
      progressoAcessivel: 'Langkah {atual} dari {total}',
      contador: '{atual} dari {total}',
    },
    continuar: 'Lanjutkan',
    nome: {
      titulo: 'Kamu ingin dipanggil apa?',
      subtitulo: 'Hanya supaya aplikasi bisa menyapamu.',
      rotuloCampo: 'Namamu',
      placeholder: 'namamu',
      rotuloAcessivel: 'Namamu',
      privacidade: 'Hanya disimpan di ponsel ini.',
    },
    horas: {
      titulo: 'Menurutmu, berapa lama waktu layarmu per hari?',
      subtitulo: 'Tebak dengan jujur. Nanti aplikasi membandingkannya dengan angka sebenarnya.',
      unidadeAoLadoDoNumero: {
        other: 'jam per hari',
      },
      horasAbreviadas: '{n} j',
      rotuloAtalhos: 'Atau ketuk salah satu angka:',
      atalhoAcessivel: {
        other: '{n} jam per hari',
      },
      sliderAcessivel: 'Jam per hari di ponsel',
    },
    acessoAoUso: {
      titulo: 'Ayo ukur waktu layarmu yang sebenarnya',
      subtituloIos: 'Untuk itu, iPhone meminta izinmu.',
      subtituloAndroid: 'Untuk itu, Android meminta izin akses penggunaan.',
      tituloExemplo: 'Yang akan kamu lihat',
      seloExemplo: 'CONTOH',
      legendaExemplo: 'Contoh — izinkan akses penggunaan untuk melihat milikmu',
      veOTempo: 'Melihat berapa lama setiap aplikasi terbuka.',
      naoVeODentro: 'Tidak melihat apa yang kamu lakukan di dalamnya.',
      nadaSai: 'Tidak ada yang keluar dari ponselmu.',
      liberar: 'Izinkan akses penggunaan',
      agoraNao: 'Lain kali',
    },
    escolha: {
      tituloComNome: '{nome}, apa yang ingin kamu blokir?',
      titulo: 'Apa yang ingin kamu blokir?',
      subtitulo: 'Pilih minimal satu aplikasi. Bisa diubah nanti.',
      permissoesFaltando: {
        other: 'Perlu {n} izin lagi untuk memblokir',
      },
      permissaoAcessoAoUso: 'Akses penggunaan',
      permissaoSobreposicao: 'Tampilkan di atas aplikasi lain',
      permissaoPronta: 'Siap',
      liberarPermissao: 'Izinkan',
      liberarPermissaoAcessivel: 'Izinkan {permissao}',
      buscaPlaceholder: 'Cari aplikasi',
      buscaAcessivel: 'Cari aplikasi berdasarkan nama',
      erroAoListar:
        'Daftar aplikasi di perangkat tidak bisa dibaca. Keluar lalu buka layar ini lagi untuk mencoba kembali.',
      semResultado: 'Tidak ada aplikasi dengan nama itu.',
      bloquearSemApps: 'Blokir',
      bloquearApps: {
        other: 'Blokir {n} aplikasi',
      },
      liberePermissoes: {
        other: 'Berikan izin di atas untuk melanjutkan.',
      },
    },
    conclusao: {
      bloqueioCriado: 'Pemblokiran dibuat.',
      umAppBloqueado: '{app} diblokir.',
      variosAppsBloqueados: {
        other: '{n} aplikasi diblokir.',
      },
      subtitulo: 'Saat muncul keinginan untuk membukanya, AceleraLock akan menghalangi.',
      aPartirDeAgora: 'Mulai sekarang',
      eMaisApps: {
        other: 'Dan {n} aplikasi lainnya, mulai sekarang',
      },
      appSemNome: 'Aplikasi',
      seloBloqueado: 'Diblokir',
      irParaOInicio: 'Ke beranda',
    },
    ofertaRestrito: {
      titulo: 'Mode ketat',
      selo: 'DISARANKAN',
      textoComUmApp: {
        other:
          'Tanpa mode ini, kamu bisa langsung mengeluarkan {app} dari daftar. Dengan mode ini, mengubah daftar memerlukan masa tunggu {n} menit — waktu agar keinginan itu reda.',
      },
      textoComVariosApps: {
        other:
          'Tanpa mode ini, kamu bisa langsung mengeluarkan aplikasi dari daftar. Dengan mode ini, mengubah daftar memerlukan masa tunggu {n} menit — waktu agar keinginan itu reda.',
      },
      ligar: 'Aktifkan mode ketat',
      ligarAcessivel: 'Aktifkan mode ketat',
      legenda: 'Langsung aktif. Bisa diubah nanti di Blokir.',
    },
    graficoTempoTela: {
      rotuloAcessivel: '{legenda}. {dias}',
      rotuloAcessivelComEstimativa: '{legenda}. {dias}. Perkiraanmu {estimativa} per hari',
      diaAcessivel: '{dia}: {valor}',
      diaSemLeitura: 'tidak ada data',
    },
  },
  bloqueios: {
    tela: {
      titulo: 'Blokir',
      tipoDeBloqueio: 'Jenis blokir',
      segmentoApps: 'Aplikasi',
      segmentoSites: 'Situs',
    },
    modoRestrito: {
      titulo: 'Mode ketat',
      tituloLigado: 'Mode ketat aktif',
      descricaoLigado: {
        other: 'Daftar terkunci. Menonaktifkannya memerlukan masa tunggu {n} menit.',
      },
      descricaoDesligado: {
        other: 'Saat aktif, mengubah daftar memerlukan masa tunggu {n} menit.',
      },
      rotuloInterruptor: 'Mode ketat',
      dicaQuandoLigado: 'Membuka konfirmasi untuk memulai masa tunggu',
      dicaQuandoDesligado: 'Langsung aktif',
      notaInterruptoresTravados: 'Sakelar tetap terkunci sampai masa tunggu selesai.',
    },
    confirmarDesligar: {
      titulo: 'Nonaktifkan mode ketat?',
      corpo: {
        other:
          'Daftar aplikasi baru bisa diubah lagi setelah masa tunggu {n} menit. Kamu bisa membatalkannya kapan saja, tanpa biaya.',
      },
      linhaDoTempoFalada: {
        other: 'Sekarang, masa tunggu {n} menit, lalu daftar dibuka',
      },
      marcoAgora: 'Sekarang',
      trechoDeEspera: {
        other: 'Tunggu {n} mnt',
      },
      marcoListaLiberada: 'Daftar dibuka',
      manterLigado: 'Biarkan aktif',
      comecarEspera: {
        other: 'Mulai masa tunggu {n} mnt',
      },
    },
    barraSalvar: {
      rotuloBotaoFalado: 'Simpan perubahan',
      botao: 'Simpan',
      titulo: {
        other: '{n} perubahan belum disimpan',
      },
      umItemEntra: '{nome} masuk ke daftar',
      umItemSai: '{nome} keluar dari daftar',
      quantosEntram: {
        other: '{n} masuk',
      },
      quantosSaem: {
        other: '{n} keluar',
      },
      entramESaem: '{entram}, {saem}',
    },
    legendaDaLinha: {
      bloqueado: 'Diblokir',
      bloqueiaAoSalvar: 'Diblokir saat disimpan',
      saiAoSalvar: 'Keluar saat disimpan',
    },
    apps: {
      instrucaoIos: 'Pilih aplikasi yang ingin kamu blokir di pemilih di bawah.',
      cabecalhoSeletorIos: 'Pilih aplikasi yang ingin diblokir',
      salvarLista: 'Simpan daftar',
      secaoBloqueados: 'Diblokir · {n}',
      secaoOutros: 'Aplikasi lain',
      buscaPlaceholder: {
        other: 'Cari di antara {n} aplikasi',
      },
      buscaRotuloFalado: 'Cari aplikasi berdasarkan nama',
      erroAoLer:
        'Daftar aplikasi di perangkat tidak bisa dibaca. Keluar lalu buka layar ini lagi untuk mencoba kembali.',
      nenhumAppNoAparelho: 'Tidak ada aplikasi untuk dipilih di perangkat ini.',
      nenhumAppComEsseNome: 'Tidak ada aplikasi dengan nama itu.',
      botaoHorariosFalado: 'Jam bebas {app}',
    },
    sites: {
      avisoAcessibilidadeTitulo: 'Aktifkan pembacaan browser untuk memblokir situs',
      avisoAcessibilidadeMensagem:
        'AceleraLock memakai layanan aksesibilitas Android hanya untuk membaca alamat di bilah Chrome, Samsung Internet, Firefox, Edge, dan Brave, lalu mencocokkannya dengan daftarmu. Isi halaman tidak dibaca, situs yang kamu kunjungi tidak disimpan, dan tidak ada yang keluar dari perangkat.',
      ativarNasConfiguracoes: 'Aktifkan di Setelan',
      erroAoLer:
        'Daftar situs tidak bisa dibaca. Keluar lalu buka layar ini lagi untuk mencoba kembali.',
      campoRotulo: 'Tambahkan situs',
      campoPlaceholder: 'contoh: instagram.com',
      campoRotuloFalado: 'Alamat situs yang ingin diblokir',
      campoAjuda: 'Memblokir situs ini dan semua alamat di dalamnya, seperti m.instagram.com.',
      campoErro: 'Ketik alamat situs, seperti instagram.com.',
      botaoAdicionarFalado: 'Tambahkan situs',
      botaoAdicionar: 'Tambah',
      vazioTitulo: 'Belum ada situs yang diblokir',
      vazioMensagem: 'Ketik alamat situs pertama yang mencuri waktumu.',
      secaoBloqueados: 'Diblokir · {n}',
      legendaSalvo: 'dan subdomain',
      legendaBloqueiaAoSalvar: 'Diblokir saat disimpan',
      removerFalado: 'Hapus {site}',
      leituraAtiva: 'Pembacaan browser aktif · situs diblokir',
    },
    horarios: {
      titulo: 'Jam bebas',
      rotuloFolhaFalado: 'Jam bebas {app}',
      explicacao: 'Pada jam-jam ini {app} bisa dibuka tanpa diblokir. Di luar itu, tetap diblokir.',
      abrirDataEHora: 'Buka Tanggal & waktu',
      vazio: 'Tidak ada jam bebas: {app} diblokir sepanjang waktu.',
      editarFaixaFalado: 'Edit {faixa}',
      removerFaixaFalado: 'Hapus {faixa}',
      adicionarHorario: 'Tambahkan jam bebas',
      erroAoSalvar: 'Tidak bisa menyimpan. Coba lagi.',
      salvar: 'Simpan',
      cancelar: 'Batal',
      fechar: 'Tutup',
      formulario: {
        dias: 'Hari',
        inicio: 'Dari',
        fim: 'Sampai',
        menosNoInicioFalado: 'Kurangi 15 menit pada jam mulai',
        maisNoInicioFalado: 'Tambah 15 menit pada jam mulai',
        menosNoFimFalado: 'Kurangi 15 menit pada jam selesai',
        maisNoFimFalado: 'Tambah 15 menit pada jam selesai',
        terminaNoDiaSeguinte: 'Berakhir pukul {hora} keesokan harinya.',
        cancelar: 'Batal',
        adicionar: 'Tambah',
        atualizar: 'Perbarui',
      },
      nenhumDia: 'Tidak ada hari',
      todosOsDias: 'Setiap hari',
      intervaloDeDias: '{inicio}–{fim}',
      faixa: '{dias} · {inicio}–{fim}',
      faixaAteODiaSeguinte: '{dias} · {inicio}–{fim} keesokan harinya',
      legendaDaLinha: {
        other: '{n} jam bebas',
      },
      erroSemDia: 'Pilih minimal satu hari.',
      erroDiaInvalido: 'Hari tidak valid.',
      erroHorarioInvalido: 'Waktu tidak valid.',
      erroInicioIgualAoFim: 'Jam mulai dan jam selesai tidak boleh sama.',
      erroMaximoPorApp: {
        other: 'Maksimal {n} jam bebas per aplikasi.',
      },
      avisoModoRestritoTitulo: 'Jam bebas dijeda',
      avisoModoRestritoMensagem:
        'Saat mode ketat aktif, tidak ada jam bebas yang berlaku: aplikasi diblokir sepanjang waktu.',
      avisoRelogioTitulo: 'Aktifkan tanggal dan waktu otomatis',
      avisoRelogioMensagem:
        'Tanpa waktu dan zona waktu otomatis, jam bebas tidak berlaku — jadi tidak ada yang bisa membuka aplikasi dengan mengubah jam.',
    },
  },
  inicio: {
    saudacaoComNome: 'Halo, {nome}',
    saudacao: 'Halo',
    protecaoAtiva: 'Perlindungan aktif',
    gerenciarBloqueios: 'Kelola blokir',
    gerenciar: 'Kelola',
    modoRestritoLigado: 'Mode ketat aktif',
    modoRestritoDesligado: 'Mode ketat nonaktif',
    modoRestritoLigadoDetalhe: 'Mengubah daftar memerlukan masa tunggu.',
    modoRestritoDesligadoDetalhe: 'Mengeluarkan aplikasi dari daftar langsung berlaku.',
    ligarModoRestrito: 'Aktifkan mode ketat',
    ligar: 'Aktifkan',
    sitesSemBloqueioMensagem: 'Pembacaan browser dinonaktifkan. Aplikasi tetap diblokir.',
    sitesSemBloqueioAcao: 'Aktifkan di Setelan',
    tempoDeTelaHoje: 'Waktu layar hari ini',
    erroTempoDeTela: 'Waktu layar tidak bisa dibaca sekarang.',
    maisUsadosHoje: 'Paling sering dipakai hari ini',
    nadaRegistradoTitulo: 'Belum ada catatan hari ini',
    nadaRegistradoMensagem: 'Begitu kamu memakai ponsel, aplikasinya muncul di sini.',
    historicoComecaTitulo: 'Riwayatmu dimulai sekarang',
    historicoComecaMensagem:
      'Mulai hari ini AceleraLock mencatat berapa lama kamu di depan layar, dan grafik ini akan terisi sendiri.',
    ultimos7Dias: '7 hari terakhir',
    legendaEstimativa: 'perkiraanmu',
    legendaGraficoSemana: 'Waktu layar dalam 7 hari terakhir',
    notaCalendario:
      'Hari yang kosong adalah hari tanpa pengukuran — riwayat dimulai saat kamu memasang aplikasi.',
    resumo: {
      nadaBloqueado: 'Belum ada yang diblokir',
      appsBloqueados: {
        other: '{n} aplikasi diblokir',
      },
      sitesBloqueados: {
        other: '{n} situs diblokir',
      },
      appsESitesBloqueados: '{apps} dan {sites} diblokir',
      sitesPausados: {
        other: '{n} situs dijeda',
      },
      appsBloqueadosESitesPausados: '{apps} · situs dijeda',
      appsLiberados: {
        other: '{n} aplikasi diizinkan',
      },
      sitesLiberados: {
        other: '{n} situs diizinkan',
      },
      appsESitesLiberados: '{apps} dan {sites} diizinkan',
      apps: {
        other: '{n} aplikasi',
      },
      sites: {
        other: '{n} situs',
      },
    },
    pilha: {
      maisForaDaPilha: '+ {resto}',
      apps: {
        other: '{n} aplikasi',
      },
      sites: {
        other: '{n} situs',
      },
    },
    sitesSemBloqueioTitulo: {
      other: '{n} situs tidak diblokir sekarang',
    },
    notaSemLeitura: {
      diasDaSemana: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
      umDia: 'Tidak ada data hari {dia}: perangkat tidak mencatat hari itu.',
      variosDias: {
        other: '{n} hari tanpa data: perangkat tidak mencatat hari-hari itu.',
      },
    },
  },
  tempoTela: {
    hoje: 'Hari ini',
    naEstimativa: 'Sesuai perkiraanmu ({estimativa})',
    abaixoDaEstimativa: '{diferenca} lebih sedikit dari perkiraanmu ({estimativa})',
    acimaDaEstimativa: '{diferenca} lebih banyak dari perkiraanmu ({estimativa})',
    diaSemMedicao: 'Tanggal {dia}, tanpa pengukuran',
    diaComDuracao: 'Tanggal {dia}, {duracao}',
  },
  espera: {
    contagem: {
      faltamMinutosESegundos: 'Sisa {m} mnt {s} dtk',
      faltamSegundos: 'Sisa {s} dtk',
      faltamFalado: 'Sisa {tempo}',
      restanteDeTotal: '{restante} dari {total} mnt',
      restantes: 'tersisa',
      carregando: 'Memuat sisa waktu',
      erroLeitura: 'Sisa waktu tidak bisa dibaca.',
      tentarDeNovo: 'Coba lagi',
      concluida: 'Masa tunggu selesai',
    },
    emAndamento: 'Masa tunggu berjalan',
    confirmando: 'Mengonfirmasi…',
    regraAppFechado: 'Hitungan tetap berjalan saat aplikasi ditutup.',
    regraCelularDesligado:
      'Mematikan ponsel menjeda hitungan — hitungan berlanjut dari titik terakhir.',
    desistir: 'Batalkan masa tunggu',
    legendaDesistir: 'Membatalkan itu gratis dan langsung berlaku. {aposDesistir}',
    alvos: {
      desligarProtecao: {
        titulo: 'Menonaktifkan perlindungan',
        corpo:
          'Saat waktunya habis, perlindungan nonaktif dan aplikasi yang diblokir bisa dibuka lagi.',
        fim: 'Saat mencapai nol, perlindungan nonaktif dengan sendirinya.',
        aposDesistir: 'Perlindungan tetap aktif.',
      },
      desbloquearApp: {
        titulo: 'Menunggu untuk membuka blokir',
        corpo: 'Saat waktunya habis, aplikasi bisa dibuka lagi.',
        fim: 'Saat mencapai nol, aplikasi diizinkan.',
        aposDesistir: 'Aplikasi tetap diblokir.',
      },
      mudarDuracao: {
        titulo: 'Menunggu untuk mengubah durasi',
        corpo: 'Durasi baru berlaku begitu waktunya habis.',
        fim: 'Saat mencapai nol, durasi baru mulai berlaku.',
        aposDesistir: 'Durasinya tetap sama.',
      },
      desligarModoRestrito: {
        titulo: 'Menonaktifkan mode ketat',
        corpo: 'Saat waktunya habis, daftar aplikasi bisa diubah lagi.',
        fim: 'Saat mencapai nol, mode ketat nonaktif dengan sendirinya.',
        aposDesistir: 'Mode ketat tetap aktif.',
      },
    },
  },
};
