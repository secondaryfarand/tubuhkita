export const MODULE_DATA = [
  {
    id: 'jantung',
    title: 'Anatomi & Fisiologi Jantung',
    category: 'Sistem Kardiovaskular',
    readTime: '8 Menit',
    description: 'Pelajari struktur anatomi organ jantung, sistem ruang, katup, serta mekanisme sirkulasi darah sistemik dan pulmonal secara mendalam.',
    // sumber : Unsplash (Photo by Robina Weermeijer)
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Jantung (Heart) adalah organ berotot berbentuk kerucut tumpul yang terletak di dalam rongga dada (mediastinum) di antara kedua paru-paru. Organ ini berdetak rata-rata 100.000 kali per hari untuk memompa sekitar 7.500 liter darah, membawa oksigen dan nutrisi vital ke seluruh jaringan tubuh manusia.',
      sections: [
        {
          heading: '1. Struktur Ruang Jantung',
          text: 'Jantung terbagi menjadi empat ruang utama yang bekerja secara terkoordinasi:',
          list: [
            'Atrium Kanan (Serambi Kanan): Menerima darah deoksigenasi (kaya CO2) dari seluruh tubuh melalui Vena Cava Superior dan Inferior.',
            'Ventrikel Kanan (Bilik Kanan): Memompa darah kotor menuju paru-paru melalui Arteri Pulmonalis untuk pertukaran gas.',
            'Atrium Kiri (Serambi Kiri): Menerima darah kaya oksigen dari paru-paru melalui Vena Pulmonalis.',
            'Ventrikel Kiri (Bilik Kiri): Memiliki dinding miokardium paling tebal; memompa darah kaya O2 ke seluruh jaringan tubuh melalui Aorta.'
          ]
        },
        {
          heading: '2. Sistem Katup Jantung (Cardiac Valves)',
          text: 'Katup jantung berfungsi menjaga agar aliran darah tetap mengalir searah dan mencegah aliran balik (backflow):',
          list: [
            'Katup Trikuspid: Terletak di antara atrium kanan dan ventrikel kanan.',
            'Katup Mitral (Bikuspid): Terletak di antara atrium kiri dan ventrikel kiri.',
            'Katup Semilunar Pulmonal & Aorta: Mengatur aliran darah keluar dari ventrikel menuju pembuluh darah utama.'
          ]
        },
        {
          heading: '3. Sistem Konduksi & Siklus Jantung',
          text: 'Jantung memiliki kelistrikan mandiri yang mengatur irama denyut (autoritmisitas):',
          list: [
            'Nodus Sinoatrial (Nodus SA): Bertindak sebagai pemacu jantung alami (pacemaker) yang mengawali impuls listrik.',
            'Nodus Atrioventrikular (Nodus AV): Memperlambat impuls sejenak agar atrium selesai berkontraksi sebelum ventrikel terangsang.',
            'Berkas His & Serabut Purkinje: Menyebarkan impuls listrik ke seluruh miokardium ventrikel untuk memicu sistol (kontraksi).'
          ]
        }
      ],
      // sumber : Kementerian Kesehatan RI (Ayo Sehat) & RS Jantung Harapan Kita
      clinicalNote: 'Catatan Klinis (Kemenkes RI / RS Harapan Kita): Penyakit Jantung Koroner (PJK) terjadi akibat penyempitan arteri koroner oleh plak aterosklerosis. PJK menjadi salah satu penyebab kematian tertinggi di Indonesia.'
    }
  },
  {
    id: 'pankreas',
    title: 'Sistem Endokrin & Eksokrin Pankreas',
    category: 'Sistem Pencernaan & Hormonal',
    readTime: '7 Menit',
    description: 'Pahami fungsi ganda kelenjar pankreas dalam memproduksi enzim pencernaan serta hormon insulin dan glukagon.',
    // sumber : Unsplash (Photo by National Cancer Institute)
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Pankreas adalah kelenjar memanjang yang terletak di belakang lambung (retroperitoneal). Pankreas unik karena memiliki dua fungsi utama sekaligus: sebagai kelenjar eksokrin (pencernaan) dan kelenjar endokrin (metabolisme gula darah).',
      sections: [
        {
          heading: '1. Fungsi Eksokrin (Enzim Pencernaan)',
          text: 'Sekitar 99% jaringan pankreas menghasilkan getah pankreas yang disalurkan ke duodenum via saluran pankreas:',
          list: [
            'Amilase Pankreas: Mencerna karbohidrat kompleks menjadi disakarida.',
            'Tripsin & Kimotripsin: Memecah protein menjadi peptida sederhana.',
            'Lipase Pankreas: Memecah molekul lemak menjadi asam lemak dan gliserol.'
          ]
        },
        {
          heading: '2. Fungsi Endokrin (Pulau Langerhans)',
          text: 'Mengontrol kadar glukosa darah melalui sekresi hormon secara langsung ke pembuluh darah:',
          list: [
            'Sel Alfa: Menghasilkan hormon Glukagon untuk meningkatkan kadar gula darah saat berpuasa.',
            'Sel Beta: Menghasilkan hormon Insulin yang memicu penyerapan glukosa oleh sel-sel tubuh.'
          ]
        },
        {
          heading: '3. Regulasi Homeostatis Glukosa',
          text: 'Keseimbangan hormon pankreas menjaga kestabilan energi tubuh:',
          list: [
            'Kondisi Hiperglikemia: Pankreas melepas insulin untuk mengubah glukosa menjadi glikogen simpanan di hati dan otot.',
            'Kondisi Hipoglikemia: Glukagon disekresikan untuk memicu glikogenolisis (pemecahan glikogen menjadi glukosa kembali).'
          ]
        }
      ],
      // sumber : Siloam Hospitals / Halodoc Indonesia
      clinicalNote: 'Catatan Klinis (Siloam Hospitals): Kerusakan sel beta pankreas akibat respons autoimun memicu Diabetes Melitus Tipe 1, sedangkan resistensi insulin seluler memicu Diabetes Melitus Tipe 2 yang prevalensinya terus meningkat di Indonesia.'
    }
  },
  {
    id: 'paru-paru',
    title: 'Sistem Respirasi & Alveolus Paru-Paru',
    category: 'Sistem Respirasi',
    readTime: '8 Menit',
    description: 'Mempelajari anatomi paru-paru, mekanika pernapasan, serta proses difusi gas oksigen dan karbon dioksida pada alveolus.',
    // sumber : Unsplash (Photo by CDC)
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Paru-paru (Lungs) adalah organ utama sistem pernapasan manusia yang terletak di dalam rongga dada, dilindungi oleh tulang rusuk dan selaput pleura. Paru-paru kanan terdiri dari 3 lobus, sedangkan paru-paru kiri memiliki 2 lobus untuk memberi ruang bagi posisi jantung.',
      sections: [
        {
          heading: '1. Struktur Bronkus hingga Alveolus',
          text: 'Udara masuk melalui trakea yang bercabang menjadi bronkus kanan dan kiri, lalu terus bercabang menjadi bronkiolus hingga berujung di alveolus:',
          list: [
            'Alveolus: Kantung udara mikroskopis tempat terjadinya pertukaran gas secara difusi.',
            'Kapiler Pulmonalis: Pembuluh darah tipis yang melapisi alveolus untuk mengikat O2 ke hemoglobin dan melepaskan CO2.',
            'Surfaktan: Cairan lipoprotein yang diproduksi sel alveolus tipe II untuk mencegah paru-paru kolaps saat menghembuskan napas.'
          ]
        },
        {
          heading: '2. Mekanika Pernapasan (Inspirasi & Ekspirasi)',
          text: 'Proses keluar-masuknya udara diatur oleh perbedaan tekanan udara akibat kontraksi otot diafragma dan otot antartulang rusuk (interkostal).'
        },
        {
          heading: '3. Volume dan Kapasitas Paru-Paru',
          text: 'Pengukuran volume paru dilakukan untuk menilai fungsi ventilasi pernapasan:',
          list: [
            'Volume Tidal (VT): Volume udara yang dihirup atau dihembuskan pada pernapasan biasa (sekitar 500 mL).',
            'Kapasitas Vital Paru: Jumlah maksimal udara yang dapat dikeluarkan setelah inspirasi maksimal (sekitar 3.500–4.500 mL).'
          ]
        }
      ],
      // sumber : Kementerian Kesehatan RI (Direktorat Jenderal Pelayanan Kesehatan)
      clinicalNote: 'Catatan Klinis (Kemenkes RI): Pneumonia dan Tuberkulosis (TBC) merupakan gangguan respirasi yang sangat umum di Indonesia. Pneumonia menyebabkan peradangan kantung alveolus yang terisi cairan atau nanah.'
    }
  },
  {
    id: 'hati',
    title: 'Fungsi Metabolik & Detoksifikasi Hati',
    category: 'Sistem Pencernaan & Metabolisme',
    readTime: '9 Menit',
    description: 'Memahami peran hati sebagai kelenjar terbesar tubuh dalam metabolisme nutrisi, sekresi empedu, dan detoksifikasi racun.',
    // sumber : Unsplash (Photo by Bermix Studio)
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Hati (Liver/Hepar) adalah organ padat terbesar dalam tubuh manusia dengan berat sekitar 1.5 kg, terletak di kuadran kanan atas rongga perut. Hati menerima suplai darah ganda dari Arteri Hepatika (oksigen) dan Vena Porta Hepatika (nutrisi dari saluran pencernaan).',
      sections: [
        {
          heading: '1. Fungsi Utama Hati',
          text: 'Hati menjalankan lebih dari 500 fungsi vital dalam tubuh manusia, di antaranya:',
          list: [
            'Metabolisme Nutrisi: Mengonversi glukosa menjadi glikogen (glikogenesis) serta memecah asam amino.',
            'Sintesis Protein Plasma: Memproduksi albumin, fibrinogen, dan faktor pembekuan darah.',
            'Produksi Empedu: Menghasilkan garam empedu untuk mengemulsikan lemak di usus halus.',
            'Detoksifikasi: Mengubah senyawa beracun (seperti amonia menjadi urea dan memecah obat-obatan).'
          ]
        },
        {
          heading: '2. Vaskularisasi Sitem Porta Hepatika',
          text: 'Hati memproses seluruh nutrisi yang diserap dari usus sebelum diedarkan ke seluruh tubuh via Vena Porta Hepatika.'
        },
        {
          heading: '3. Regenerasi Jaringan Hati',
          text: 'Hati memiliki kemampuan unik untuk meregenerasi jaringannya yang rusak selama cedera atau pengangkatan parsial tidak melebihi 70-75% dari total massanya.'
        }
      ],
      // sumber : Alodokter / RSUP Dr. Sardjito Yogyakarta
      clinicalNote: 'Catatan Klinis (RSUP Dr. Sardjito): Hepatitis B dan C kronis menjadi pemicu utama sirosis hati dan hepatoma (kanker hati) di Indonesia, yang ditandai dengan penggantian jaringan hati sehat menjadi jaringan parut fibrous.'
    }
  },
  {
    id: 'ginjal',
    title: 'Filtrasi & Ekskresi Ginjal',
    category: 'Sistem Ekskresi',
    readTime: '9 Menit',
    description: 'Eksplorasi struktur nefron, proses pembentukan urine (filtrasi, reabsorpsi, sekresi), dan regulasi tekanan darah.',
    // sumber : Unsplash (Photo by Robina Weermeijer)
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Ginjal (Kidney) adalah sepasang organ berbentuk kacang merah yang terletak di area pinggang (retroperitoneal). Setiap ginjal mengandung sekitar 1 juta unit fungsional yang disebut nefron untuk menyaring darah dan mempertahankan keseimbangan cairan serta elektrolit.',
      sections: [
        {
          heading: '1. Tahapan Pembentukan Urine',
          text: 'Proses penyaringan darah di ginjal berlangsung melalui tiga tahap utama:',
          list: [
            'Filtrasi Glomerulus: Menyaring air dan zat terlarut kecil dari darah menghasilkan urine primer.',
            'Reabsorpsi Tubulus: Menyerap kembali zat berguna (glukosa, asam amino, air) di tubulus kontortus proksimal.',
            'Sekresi Tubular (Augmentasi): Menambahkan zat sisa (seperti ion H+, K+, racun) di tubulus distal membentuk urine sejati.'
          ]
        },
        {
          heading: '2. Fungsi Endokrin Ginjal',
          text: 'Ginjal memproduksi hormon Erythropoietin (EPO) untuk merangsang pembentukan sel darah merah dan Renin untuk mengatur tekanan darah.'
        },
        {
          heading: '3. Keseimbangan Cairan & Sistem RAAS',
          text: 'Sistem Renin-Angiotensin-Aldosteron (RAAS) diatur oleh ginjal untuk mengontrol volume darah sistemik dan retensi garam.'
        }
      ],
      // sumber : KlikDokter / Pernefri (Perhimpunan Nefrologi Indonesia)
      clinicalNote: 'Catatan Klinis (Pernefri): Penyakit Ginjal Kronis (PGK) di Indonesia banyak disebabkan oleh hipertensi tidak terkontrol dan diabetes melitus yang menyebabkan kerusakan glomerulus secara progresif.'
    }
  },
  {
    id: 'lambung',
    title: 'Anatomi & Pencernaan Kimiawi Lambung',
    category: 'Sistem Pencernaan',
    readTime: '7 Menit',
    description: 'Mempelajari fisiologi pencernaan mekanis dan kimiawi di lambung serta peran Asam Klorida (HCl) dan Pepsin.',
    // sumber : Unsplash (Photo by Marcelo Leal)
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Lambung (Stomach) adalah organ berbentuk kantung berotot tebal yang terletak di bagian atas rongga perut sebelah kiri. Lambung berfungsi meremas makanan (pencernaan mekanis) dan mencernanya secara kimiawi menggunakan getah lambung.',
      sections: [
        {
          heading: '1. Komponen Getah Lambung',
          text: 'Dinding lambung melapisi sel-sel sekretori parietal dan utama yang menghasilkan:',
          list: [
            'Asam Klorida (HCl): Membunuh patogen dan mengaktifkan pepsinogen menjadi pepsin.',
            'Pepsin: Enzim pencerna protein menjadi peptida pendek.',
            'Mukus (Lendir): Melindungi lapisan mukosa lambung dari pengikisan oleh asam kuat.'
          ]
        },
        {
          heading: '2. Struktur Dinding & Otot Lambung',
          text: 'Lambung memiliki tiga lapisan otot polos (longitudinal, sirkular, obliqus) yang memungkinkan pencampuran makanan menjadi kimus (chyme).'
        },
        {
          heading: '3. Fase Sekresi Asam Lambung',
          text: 'Sekresi asam lambung dipicu oleh tiga fase berurutan: Fase Sefalik (rangsangan indra), Fase Gastrik (makanan masuk lambung), dan Fase Intestinal.'
        }
      ],
      // sumber : Halodoc / RS St. Carolus Jakarta
      clinicalNote: 'Catatan Klinis (Halodoc / RS St. Carolus): Gastritis (sakit maag) dan penyakit GERD terjadi akibat iritasi asam lambung pada mukosa atau kelemahan sfingter esofagus bawah.'
    }
  },
  {
    id: 'otak',
    title: 'Sistem Saraf Pusat & Fungsi Otak',
    category: 'Sistem Saraf',
    readTime: '10 Menit',
    description: 'Membedakan fungsi Cerebrum, Cerebellum, dan Batang Otak dalam mengontrol kesadaran, gerakan, dan fungsi otonom.',
    // sumber : Unsplash (Photo by Robina Weermeijer)
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Otak (Brain) adalah pusat kendali utama dari seluruh aktivitas tubuh manusia. Dilindungi oleh tengkorak keras dan tiga lapisan membran meninges, otak mengandung sekitar 86 miliar neuron yang terhubung secara kompleks.',
      sections: [
        {
          heading: '1. Bagian-Bagian Utama Otak',
          text: 'Otak terbagi menjadi beberapa struktur dominan:',
          list: [
            'Cerebrum (Otak Besar): Mengontrol berpikir, memori, emosi, bahasa, dan persepsi sensori.',
            'Cerebellum (Otak Kecil): Mengatur koordinasi motorik halus, keseimbangan, dan postur tubuh.',
            'Batang Otak (Brainstem): Mengontrol fungsi vital otonom seperti detak jantung, pernapasan, dan tekanan darah.'
          ]
        },
        {
          heading: '2. Pembagian Lobus Otak Besar',
          text: 'Korteks serebral dibagi menjadi empat lobus dengan spesialisasi tugas tersendiri:',
          list: [
            'Lobus Frontal: Fungsi eksekutif, penalaran, dan kontrol motorik voluntar.',
            'Lobus Parietal: Pemrosesan informasi somatosensori (sentuhan, suhu, nyeri).',
            'Lobus Okspital: Pusat pemrosesan visual dan persepsi warna.',
            'Lobus Temporal: Pusat pendengaran, memori jangka panjang, dan pemahaman bahasa.'
          ]
        },
        {
          heading: '3. Pelindung & Cairan Serebrospinal (CSF)',
          text: 'Otak dilindungi oleh selaput meninges (duramater, araknoid, piamater) serta cairan serebrospinal yang meredam guncangan fisik.'
        }
      ],
      // sumber : Yayasan Stroke Indonesia (Yastroki) / Kemenkes RI
      clinicalNote: 'Catatan Klinis (Kemenkes RI / Yastroki): Stroke merupakan kondisi darurat medis akibat sumbatan (iskemik) atau pecahnya pembuluh darah otak (hemoragik) yang menjadi penyebab kecacatan utama di Indonesia.'
    }
  },
  {
    id: 'usus-halus',
    title: 'Usus Halus & Penyerapan Nutrisi',
    category: 'Sistem Pencernaan',
    readTime: '8 Menit',
    description: 'Memahami proses pencernaan akhir dan mekanisme penyerapan nutrisi melalui mikrovili di duodenum, jejunum, dan ileum.',
    // sumber : Unsplash (Photo by National Cancer Institute)
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Usus Halus (Small Intestine) adalah saluran pencernaan terpanjang (mencapai 6 meter pada orang dewasa) yang menghubungkan lambung dengan usus besar. Di sinilah mayoritas pencernaan kimiawi dan penyerapan (absorpsi) zat gizi berlangsung.',
      sections: [
        {
          heading: '1. Tiga Bagian Usus Halus',
          text: 'Usus halus terbagi secara fungsional menjadi tiga segmen:',
          list: [
            'Duodenum (Usus 12 Jari): Tempat bercampurnya chyme dengan enzim pankreas dan cairan empedu.',
            'Jejunum (Usus Kosong): Tempat utama penyerapan karbohidrat, protein, dan vitamin.',
            'Ileum (Usus Penyerapan): Menyerap asam empedu, garam, dan Vitamin B12.'
          ]
        },
        {
          heading: '2. Struktur Vili & Mikrovili',
          text: 'Dinding dalam usus halus dilapisi lipatan vili dan mikrovili yang memperluas permukaan absorpsi hingga puluhan meter persegi.'
        },
        {
          heading: '3. Enzim Enterosit pada Brush Border',
          text: 'Permukaan mikrovili menghasilkan enzim-enzim pencernaan tingkat akhir seperti maltase, sukrase, laktase, dan peptidase.'
        }
      ],
      // sumber : Alodokter / PGI (Perhimpunan Gastroenterologi Indonesia)
      clinicalNote: 'Catatan Klinis (Alodokter / PGI): Intoleransi laktosa terjadi akibat defisiensi enzim laktase pada mukosa usus halus, yang sangat umum ditemui pada populasi dewasa di Indonesia.'
    }
  },
  {
    id: 'usus-besar',
    title: 'Usus Besar & Pembentukan Feses',
    category: 'Sistem Pencernaan',
    readTime: '6 Menit',
    description: 'Pelajari reabsorpsi air, pembentukan feses, serta peran penting mikrobioma usus pada Sekum, Kolon, dan Rektum.',
    // sumber : Unsplash (Photo by National Cancer Institute)
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Usus Besar (Large Intestine/Colon) memiliki panjang sekitar 1.5 meter yang mengelilingi usus halus. Fungsi utamanya adalah menyerap sisa air dan elektrolit dari sisa makanan yang tidak terdeteksi serta memadatkannya menjadi feses.',
      sections: [
        {
          heading: '1. Struktur Kolon & Peran Mikrobioma',
          text: 'Kolon terbagi menjadi kolon asendens, transversum, desendens, dan sigmoid:',
          list: [
            'Reabsorpsi Air: Mengubah sisa limbah cair menjadi feses semi-padat.',
            'Mikrobioma Gut: Triliunan bakteri baik (seperti E. coli) membantu memfermentasi serat dan memproduksi Vitamin K serta B12.',
            'Rektum & Anus: Tempat penyimpanan sementara feses sebelum dikeluarkan melalui proses defekasi.'
          ]
        },
        {
          heading: '2. Gerakan Peristaltik & Mass Movement',
          text: 'Gerakan kontraksi gelombang pendorong memindahkan ampas makanan menuju kolon sigmoid 3 hingga 4 kali sehari.'
        },
        {
          heading: '3. Refleks Defekasi',
          text: 'Peregangan dinding rektum memicu sinyal saraf spinal yang merelaksasikan sfingter anus internal secara tidak sadar.'
        }
      ],
      // sumber : SehatQ / Kemenkes RI
      clinicalNote: 'Catatan Klinis (SehatQ / Kemenkes RI): Diare terjadi ketika pergerakan usus terlalu cepat sehingga reabsorpsi air berkurang, sedangkan konstipasi disebabkan oleh penyerapan air yang berlebihan akibat kurang konsumsi serat.'
    }
  },
  {
    id: 'kulit',
    title: 'Anatomi Kulit & Sistem Integumen',
    category: 'Sistem Integumen',
    readTime: '7 Menit',
    description: 'Mempelajari lapisan Epidermis, Dermis, dan Hipodermis dalam proteksi tubuh, termoregulasi, dan sensori.',
    // sumber : Unsplash (Photo by Content Pixie)
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kulit (Skin) adalah organ terbesar tubuh manusia berdasarkan luas permukaan dan beratnya (mencapai 15% berat badan). Kulit bertindak sebagai benteng pertahanan utama (barrier) dari bahaya patogen, radiasi UV, dan trauma fisik.',
      sections: [
        {
          heading: '1. Tiga Lapisan Utama Kulit',
          text: 'Secara struktural, kulit tersusun atas tiga lapisan:',
          list: [
            'Epidermis: Lapisan terluar yang mengandung sel keratinosit dan melanosit (pembuat pigmen kulit).',
            'Dermis: Lapisan tengah berisi pembuluh darah, saraf sensori, folikel rambut, kelenjar keringat, dan kolagen.',
            'Hipodermis (Subkutan): Lapisan lemak terdalam yang berfungsi sebagai isolator panas dan cadangan energi.'
          ]
        },
        {
          heading: '2. Mekanisme Termoregulasi Kulit',
          text: 'Kulit menjaga suhu tubuh konstan melalui ekskresi keringat dan pengaturan diameter pembuluh darah (vasodilatasi/vasokonstriksi).'
        },
        {
          heading: '3. Reseptor Sensori Kulit',
          text: 'Ujung saraf tepi pada dermis mendeteksi berbagai rangsangan lingkungan seperti sentuhan halus (Meissner), tekanan kuat (Pacini), rasa nyeri, dan suhu.'
        }
      ],
      // sumber : Perdoski (Perhimpunan Dokter Spesialis Kulit dan Kelamin Indonesia)
      clinicalNote: 'Catatan Klinis (Perdoski): Dermatitis Atopik dan jerawat (Acne Vulgaris) merupakan masalah integumen yang sangat sering ditangani oleh dokter spesialis kulit di Indonesia.'
    }
  },
  {
    id: 'limpa',
    title: 'Sistem Imun & Filtrasi Darah Limpa',
    category: 'Sistem Limfatik & Imun',
    readTime: '6 Menit',
    description: 'Memahami peran Pulpa Merah dan Pulpa Putih limpa dalam memfilter eritrosit tua dan memproduksi limfosit.',
    // sumber : Unsplash (Photo by National Cancer Institute)
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Limpa (Spleen) adalah organ limfoid terbesar yang terletak di bagian kiri atas perut, tepat di bawah diafragma. Walau bukan organ vital mutlak, limpa memegang peran kunci dalam sistem kekebalan tubuh dan sirkulasi darah.',
      sections: [
        {
          heading: '1. Dua Komponen Fungsional Limpa',
          text: 'Limpa terbagi menjadi dua area jaringan utama:',
          list: [
            'Pulpa Merah: Menyaring darah, menghancurkan sel darah merah yang sudah tua/rusak, dan menyimpan cadangan trombosit.',
            'Pulpa Putih: Mengandung limfosit (sel B dan T) yang memicu respon imun terhadap infeksi patogen dalam darah.'
          ]
        },
        {
          heading: '2. Daur Ulang Hemoglobin',
          text: 'Makrofag di pulpa merah memecah hemoglobin eritrosit tua menjadi zat besi (dikembalikan ke sumsum tulang) dan bilirubin (dikirim ke hati).'
        },
        {
          heading: '3. Peran Cadangan Darah',
          text: 'Limpa dapat menyimpan volume trombosit dan eritrosit tertentu yang siap dilepaskan sewaktu-waktu terjadi perdarahan hebat.'
        }
      ],
      // sumber : Halodoc / RS Hasan Sadikin Bandung
      clinicalNote: 'Catatan Klinis (Halodoc / RS Hasan Sadikin): Splenomegali (pembesaran limpa) sering dijumpai pada pasien DBD, malaria, serta penderita Thalassemia di Indonesia.'
    }
  },
  {
    id: 'kandung-kemih',
    title: 'Sistem Perkemihan & Kandung Kemih',
    category: 'Sistem Ekskresi',
    readTime: '5 Menit',
    description: 'Pelajari struktur epitel transisional dan kerja otot detrusor dalam menampung serta mengeluarkan urine.',
    // sumber : Unsplash (Photo by National Cancer Institute)
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kandung Kemih (Urinary Bladder) adalah organ berongga berotot elastis yang terletak di bagian dasar panggul. Organ ini berfungsi menampung urine sementara dari ginjal sebelum dibuang melalui saluran uretra.',
      sections: [
        {
          heading: '1. Fisiologi Penampungan & Refleks Mikturisi',
          text: 'Dinding kandung kemih dilapisi oleh epitel transisional yang dapat meregang dan mengkerut:',
          list: [
            'Otot Detrusor: Otot polos tebal yang merelaksasi saat penampungan dan berkontraksi saat buang air kecil.',
            'Kapasitas Normal: Mampu menampung sekitar 400-600 mL urine pada dewasa sebelum memicu sinyal rasa ingin berkemih.'
          ]
        },
        {
          heading: '2. Mekanisme Sfingter Uretra',
          text: 'Pengeluaran urine dikontrol oleh dua sfingter: Sfingter Internal (otot polos otonom) dan Sfingter Eksternal (otot lurik sadar).'
        },
        {
          heading: '3. Saraf Pengatur Berkemih',
          text: 'Sistem saraf parasimpatis merangsang kontraksi detrusor, sementara sistem somatis mengontrol kendali volunter sfingter eksternal.'
        }
      ],
      // sumber : IAUI (Ikatan Ahli Urologi Indonesia) / Alodokter
      clinicalNote: 'Catatan Klinis (IAUI): Sistitis atau Infeksi Saluran Kemih (ISK) bawah merupakan gangguan kandung kemih yang paling sering ditemukan, terutama pada wanita.'
    }
  },
  {
    id: 'lambung-empedu',
    title: 'Kandung Empedu & Metabolisme Lipid',
    category: 'Sistem Pencernaan',
    readTime: '5 Menit',
    description: 'Memahami proses penyimpanan dan pelepasan cairan empedu menuju usus halus untuk mengemulsikan lemak makanan.',
    // sumber : Unsplash (Photo by CDC)
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kandung Empedu (Gallbladder) adalah organ berbentuk buah pir kecil berukuran sekitar 7-10 cm yang terletak di bawah organ hati. Organ ini memegang peran pendukung penting dalam sistem pencernaan makanan berlemak.',
      sections: [
        {
          heading: '1. Konsentrasi & Sekresi Empedu',
          text: 'Kandung empedu tidak memproduksi empedu sendiri, melainkan menyimpannya dari hati:',
          list: [
            'Penyimpanan: Mempekatkan cairan empedu hingga 10 kali lipat dengan menyerap air dan elektrolit.',
            'Hormon Cholecystokinin (CCK): Memicu kontraksi kandung empedu saat makanan berlemak masuk ke duodenum.'
          ]
        },
        {
          heading: '2. Komposisi Cairan Empedu',
          text: 'Cairan empedu tersusun atas garam empedu, kolesterol, fosfolipid (lesitin), bilirubin, dan elektrolit.'
        },
        {
          heading: '3. Sirkulasi Enterohepatik',
          text: 'Sekitar 95% garam empedu yang dilepaskan ke usus halus akan diserap kembali di ileum dan dikembalikan ke hati via sirkulasi porta.'
        }
      ],
      // sumber : RSUP Fatmawati Jakarta / KlikDokter
      clinicalNote: 'Catatan Klinis (RSUP Fatmawati): Kolelitiasis (batu empedu) terbentuk akibat pengendapan kolesterol atau bilirubin, yang sering kali memerlukan tindakan kolesistektomi pembedahan.'
    }
  },
  {
    id: 'tiroid',
    title: 'Kelenjar Tiroid & Metabolisme Tubuh',
    category: 'Sistem Endokrin',
    readTime: '7 Menit',
    description: 'Pelajari peran hormon Tiroksin (T4) dan Triiodotironin (T3) dalam mengatur laju metabolisme basal sel.',
    // sumber : Unsplash (Photo by Hush Naidoo Jade Photography)
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kelenjar Tiroid (Thyroid Gland) adalah kelenjar endokrin berbentuk kupu-kupu yang terletak di bagian depan leher, tepat di bawah jakun. Hormon yang dihasilkannya mengatur kecepatan sel-sel tubuh dalam membakar energi.',
      sections: [
        {
          heading: '1. Hormon Utama Tiroid',
          text: 'Kelenjar tiroid memproduksi hormon vital menggunakan yodium dari makanan:',
          list: [
            'Tiroksin (T4) & Triiodotironin (T3): Mengatur Laju Metabolisme Basal (BMR), suhu tubuh, serta detak jantung.',
            'Kalsitonin: Mengatur kadar kalsium darah dengan memicu penyerapan kalsium ke dalam tulang.'
          ]
        },
        {
          heading: '2. Aksis Hipotalamus-Hipofisis-Tiroid (HPT)',
          text: 'Pelepasan T3 dan T4 dikontrol oleh hormon TSH (Thyroid Stimulating Hormone) dari kelenjar hipofisis anterior melalui mekanisme umpan balik negatif.'
        },
        {
          heading: '3. Struktur Folikel Tiroid',
          text: 'Jaringan tiroid tersusun atas folikel-folikel berisi koloid (tempat penyimpanan tiroglobulin) yang dikelilingi oleh sel-sel folikuler.'
        }
      ],
      // sumber : InaTA (Indonesian Thyroid Association) / Alodokter
      clinicalNote: 'Catatan Klinis (InaTA / Alodokter): Gangguan tiroid seperti Hipertiroidisme (Graves disease) dan Hipotiroidisme umum ditemui di Indonesia, dipengaruhi oleh kondisi autoimun atau asupan yodium.'
    }
  },
  {
    id: 'mata',
    title: 'Anatomi Mata & Fisiologi Penglihatan',
    category: 'Sistem Sensori',
    readTime: '8 Menit',
    description: 'Eksplorasi pembiasan cahaya dari Kornea, Lensa, hingga transmisi impuls saraf visual oleh Sel Batang dan Kerucut Retina.',
    // sumber : Unsplash (Photo by Amanda Dalbjörn)
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Mata (Eye) adalah organ fotoreseptor kompleks yang menangkap rangsangan cahaya dan mengonversinya menjadi impuls saraf yang diterjemahkan oleh otak sebagai gambaran visual.',
      sections: [
        {
          heading: '1. Struktur Refraksi Cahaya',
          text: 'Cahaya melewati beberapa media refraksi sebelum sampai ke saraf:',
          list: [
            'Kornea & Lensa: Membiaskan dan memfokuskan bayangan cahaya tepat pada retina.',
            'Iris & Pupil: Mengatur intensitas cahaya yang masuk ke dalam bola mata.',
            'Retina: Mengandung sel fotoreseptor Batang (penglihatan redup/hitam-putih) dan Kerucut (penglihatan warna).'
          ]
        },
        {
          heading: '2. Akomodasi Lensa Mata',
          text: 'Otot siliaris mengubah kelengkungan lensa mata agar fokus penglihatan dapat berpindah secara fleksibel dari objek dekat ke jauh.'
        },
        {
          heading: '3. Jalur Saraf Visual ke Korteks',
          text: 'Impuls saraf dari retina dikirim melalui Nerves Optikus (N. II) menuju kiasma optikum lalu diteruskan ke korteks okspitalis otak.'
        }
      ],
      // sumber : PERDAMI (Persatuan Dokter Spesialis Mata Indonesia) / Kemenkes RI
      clinicalNote: 'Catatan Klinis (PERDAMI / Kemenkes RI): Katarak dan kelainan refraksi (miopi/hipermetropi) merupakan pemicu gangguan penglihatan dan kebutaan paling mendominasi di Indonesia.'
    }
  },
  {
    id: 'telinga',
    title: 'Anatomi Telinga & Pendengaran',
    category: 'Sistem Sensori & Keseimbangan',
    readTime: '7 Menit',
    description: 'Memahami konversi gelombang suara di Tulang Pendengaran, Koklea, serta sistem Keseimbangan Vestibular.',
    // sumber : Unsplash (Photo by Franco Antonio Giovanella)
    image: 'https://images.unsplash.com/photo-1590159763121-7c9fc312190d?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Telinga (Ear) memiliki fungsi ganda sebagai organ pendengaran (auditori) sekaligus organ pengatur keseimbangan tubuh (vestibular). Telinga terbagi menjadi tiga area: Luar, Tengah, dan Dalam.',
      sections: [
        {
          heading: '1. Mekanisme Pendengaran & Keseimbangan',
          text: 'Gelombang mekanis suara diubah menjadi sinyal listrik:',
          list: [
            'Telinga Tengah: Membran timpani dan 3 tulang pendengaran (Maleus, Inkus, Stapes) memperkuat getaran suara.',
            'Koklea (Rumah Siput): Mengandung sel rambut sel sensorik yang mengubah getaran cairan menjadi sinyal listrik saraf.',
            'Kanal Semisirkularis: Mengdeteksi posisi kepala dan gerak tubuh untuk menjaga keseimbangan.'
          ]
        },
        {
          heading: '2. Tuba Eustachius',
          text: 'Saluran yang menghubungkan telinga tengah dengan nasofaring untuk menjaga tekanan udara di kedua sisi gendang telinga tetap seimbang.'
        },
        {
          heading: '3. Organ Korti & Transduksi Sinyal',
          text: 'Gelombang endolimfe merangsang sel-sel rambut di Organ Korti untuk menghasilkan potensial aksi pada Saraf Auditori (N. VIII).'
        }
      ],
      // sumber : PERHATI-KL (Perhimpunan Dokter Spesialis Telinga Hidung Tenggorok Bedah Kepala Leher Indonesia)
      clinicalNote: 'Catatan Klinis (PERHATI-KL): Otitis Media Akut (OMA) dan ketulian akibat bising (NIHL) menjadi masalah kesehatan pendengaran yang umum ditangani di Indonesia.'
    }
  },
  {
    id: 'timus',
    title: 'Kelenjar Timus & Maturasi Sel T',
    category: 'Sistem Limfatik & Imun',
    readTime: '6 Menit',
    description: 'Pelajari peran kelenjar timus dalam proses diferensiasi dan edukasi sel limfosit T untuk kekebalan tubuh.',
    // sumber : Unsplash (Photo by Bermix Studio)
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kelenjar Timus (Thymus Gland) adalah organ limfoid primer yang terletak di rongga dada atas, tepat di belakang tulang dada (sternum). Timus sangat aktif pada masa kanak-kanak dan mengalami penyusutan (involusi) seiring bertambahnya usia.',
      sections: [
        {
          heading: '1. Edukasi & Pematangan Limfosit T',
          text: 'Fungsi utama timus adalah "sekolah" bagi sel-sel kekebalan tubuh:',
          list: [
            'Maturasi Sel T: Mengubah prekursor limfosit dari sumsum tulang menjadi Sel T matang yang siap melawan antigen spesifik.',
            'Seleksi Positif & Negatif: Mengeliminasi sel T yang berpotensi menyerang sel-sel tubuh sendiri (mencegah penyakit autoimun).'
          ]
        },
        {
          heading: '2. Hormon Timus',
          text: 'Timus menghasilkan hormon timosin dan timopoietin yang merangsang perkembangan sel T serta organ limfoid sekunder.'
        },
        {
          heading: '3. Involusi Timus Sesuai Usia',
          text: 'Seiring bertambahnya usia pasca-pubertas, jaringan limfoid timus secara bertahap digantikan oleh jaringan lemak tanpa menghilangkan fungsi imunologis esensialnya.'
        }
      ],
      // sumber : Halodoc / Alodokter
      clinicalNote: 'Catatan Klinis (Halodoc): Tumor kelenjar timus (Timoma) sering dihubungkan dengan penyakit autoimun Myasthenia Gravis (kelemahan otot kronis).'
    }
  }
];