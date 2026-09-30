export const DEFAULT_CAMERA = {
  eye: [60, -80, 20],
  target: [10, 0, 30],
  duration: 1.5
};

export const ORGAN_LIST = [
  {
    id: 'muscle-tissue',
    title: 'Anatomi Tubuh Manusia',
    views: '3.7k',
    comments: 0,
    likes: 13,
    thumbnail: '/assets/human_anatomy.jpg', 
    //sumber : https://unsplash.com/id/foto/sosok-anatomi-manusia-di-bawah-langit-langit-kayu-putih-F4cJtI7HCMw
    wikiQuery: 'Jaringan_otot', //sumber : wikipedia/jaringan_otot
    sketchfabId: 'e8239f94d87b4e278f0cf02dbad1a330', //sumber : https://sketchfab.com/3d-models/ecorche-anatomy-study-e8239f94d87b4e278f0cf02dbad1a330
    defaultCamera: DEFAULT_CAMERA,
    parts: [
      {
        id: 'biseps',
        name: 'Otot Bisep',
        wikiQuery: "Otot_biseps",
        camera: {
          eye: [15, -15, 50],
          target: [-5, 30, 55],
          duration: 1.8
        }
      },
      {
        id: 'pektoralis',
        name: 'Otot Pektoralis Mayor',
        wikiQuery: "Otot_pektoralis_mayor",
        camera: {
          eye: [15, -15, 60],
          target: [-15, 20, 45],
          duration: 1.8
        }
      },
      {
        id: 'deltoideus',
        name: 'Otot Deltoideus',
        wikiQuery: 'Otot_deltoideus',
        camera: {
          eye: [25, 0, 70],
          target: [-5, 10, 45],
          duration: 1.8
        }
      },
      {
        id: 'hamstring',
        name: 'Otot Hamstring',
        wikiQuery:"Hamstring",
        camera: {
          eye: [15, -15, 35],
          target: [-15, 20, 30],
          duration: 1.8
        }
      }
    ]
  },
  {
    id: 'mata',
    title: 'Mata',
    views: '12k',
    comments: 25,
    likes: 122,
    thumbnail: 'assets/organ_mata.jpg', // sumber : https://unsplash.com/id/foto/bola-mata-kuning-dan-abu-abu-KJCyvlA_aAQ
    wikiQuery: 'Mata',
    // sumber: Web wikipedia/Mata
    sketchfabId: '1a23ab8f624e40a9a461d984f312b609',
    //sumber: https://sketchfab.com/3d-models/human-eye-anatomy-1a23ab8f624e40a9a461d984f312b609
    defaultCamera: {
      eye: [0.06, -0.09, 0.04],
      target: [-0.02, 0, -0.01],
      duration: 1.8
    },
    parts: [
      {
        id: 'lensa_mata',
        name: 'Lensa Mata',
        wikiQuery:"Lensa_mata",
        camera: {
          eye: [-0.04, -0.09, 0.01],
          target: [-0.03, -0.04, -0.01],
          duration: 1.8
        }
      },
      {
        id: 'iris_mata',
        name: 'Iris Mata',
        wikiQuery:"Selaput_pelangi",
        camera: {
          eye: [-0.03, -0.1, 0],
          target: [-0.03, -0.04, -0.01],
          duration: 1.8
        }
      },
      {
        id: 'kornea',
        name: 'Kornea',
        wikiQuery:"Kornea",
        camera: {
          eye: [-0.08, -0.16, 0.02],
          target: [-0.03, -0.04, -0.01],
          duration: 1.8
        }
      },
      {
        id: 'sklera',
        name: 'Sklera Mata',
        wikiQuery:"Sklera",
        camera: {
          eye: [-0.06, -0.14, 0.01],
          target: [-0.03, -0.04, -0.01],
          duration: 1.8
        }
      },
      {
        id: 'retina',
        name: 'Retina',
        wikiQuery:"Retina",
        camera: {
          eye: [0, 0, -0.01],
          target: [-0.01, 0.01, -0.01],
          duration: 1.8
        }
      },
      {
        id: 'saraf_optik',
        name: 'Saraf Optik',
        wikiQuery:"Saraf_optik",
        camera: {
          eye: [-0.08, 0.12, -0.02],
          target: [-0.01, 0.01, -0.01],
          duration: 1.8
        }
      },
      {
        id: 'koroid',
        name: 'Koroid',
        wikiQuery:"Koroid",
        camera: {
          eye: [0.05, -0.03, -0.01],
          target: [-0.01, 0.01, -0.01],
          duration: 1.8
        }
      },
      {
        id: 'zonular',
        name: 'Zonular',
        wikiQuery:"Zonular",
        camera: {
          eye: [-0.01, 0.02, -0.01],
          target: [-0.01, 0.01, -0.01],
          duration: 1.8
        }
      },
      {
        id: 'badan_bening_mata',
        name: 'Badan Bening Mata',
        wikiQuery:"Badan_Bening_(mata)",
        camera: {
          eye: [0.05, -0.07, -0.02],
          target: [-0.01, 0.01, -0.01],
          duration: 1.8
        }
      },
    ]
  },
  {
    id: 'jantung',
    title: 'Jantung',
    views: '1.7k',
    comments: 1,
    likes: 31,
    thumbnail: '/assets/organ_jantung.jpg',
    // sumber gambar : https://unsplash.com/id/foto/model-jantung-anatomi-di-atas-stand-Us3AQvyOP-o
    wikiQuery: 'Jantung', //sumner wikipedia jantung
    sketchfabId: '8634c4334f4d4059a2c89e8eafef5bc8', // sumber: https://sketchfab.com/3d-models/300051-human-heart-model-section-8634c4334f4d4059a2c89e8eafef5bc8
    defaultCamera: {
      eye: [0.11, -6.49, 0.79],
      target: [0.19, 0.14, -0.16],
      duration: 1.8
    },
    parts: [
      {
        id: 'atrium_kanan',
        name: 'Atrium Kanan',
        wikiQuery: "Serambi_jantung",
        camera: {
          eye: [-0.64, -2.65, 0.77],
          target: [-0.02, 0.02, 0.91],
          duration: 1.8
        }
      },
      {
        id: 'atrium_kiri',
        name: 'Atrium Kiri',
        wikiQuery: "tidakada1",
        camera: {
          eye: [1.46, -2.59, -0.06],
          target: [2.06, 1.34, 0.96],
          duration: 1.8
        }
      },
      {
        id: 'bilik_kanan',
        name: 'Bilik Kanan',
        wikiQuery: "Bilik_jantung",
        camera: {
          eye: [-0.59, -2.04, -0.97],
          target: [-0.08, 0.13, -0.86],
          duration: 1.8
        }
      },
      {
        id: 'bilik_kiri',
        name: 'Bilik Kiri',
        wikiQuery: 'tidakada2',
        camera: {
          eye: [-0.12, -0.71, -1.37],
          target: [0.84, 0.09, -0.6],
          duration: 1.8
        }
      },
      {
        id: 'katup_trikuspidalis',
        name: 'Katup Trikuspidalis',
        wikiQuery:"Katup_jantung",
        camera: {
          eye: [-0.74, -0.37, -0.85],
          target: [-0.23, 0.39, -0.04],
          duration: 1.8
        }
      },
      {
        id: 'katup_aorta',
        name: 'Katup Aorta',
        wikiQuery:"Katup_aorta",
        camera: {
          eye: [1.72, -0.78, 1.04],
          target: [0.98, 0.54, 0.4],
          duration: 1.8
        }
      }
    ]
  },
  {
    id: 'liver',
    title: 'Liver (Hati)',
    views: '720',
    comments: 0,
    likes: 31,
    thumbnail: '/assets/organ_liver.jpg', // sumber : https://unsplash.com/id/foto/gambar-kepala-dan-leher-manusia-_TmpQnqS2ng
    wikiQuery: 'Hati', //sumber wikipedia / hati
    sketchfabId: '7717eb7ee9cf466fb30f1cd134562c50', // sumber : https://sketchfab.com/3d-models/anatomy-of-human-liver-exploding-view-7717eb7ee9cf466fb30f1cd134562c50
    defaultCamera: {
      eye: [-0.09, -0.41, 1.29],
      target: [-0.01, -0.03, 1.25],
      duration: 1.8
    },
    parts: [
     
    ]
  },
  {
    id: 'otak',
    title: 'Otak',
    views: '18k',
    comments: 23,
    likes: 101,
    thumbnail: 'assets/organ_otak.jpg', //sumber : https://unsplash.com/id/foto/close-up-otak-manusia-dengan-latar-belakang-hitam-ii6BOPjAtVY
    wikiQuery: 'Otak', //sumber : wikipedia/otak
    sketchfabId: '6ccfbaaf1ac84a119fc249cf004f2e49', //sumber 3d : https://sketchfab.com/3d-models/human-brain-1-annotated-for-addiction-education-6ccfbaaf1ac84a119fc249cf004f2e49
    defaultCamera: {
      eye: [1.07, -0.49, 0.97],
      target: [0, -0.06, 0.21],
      duration: 1.8
    },
    parts: [
      {
        id: 'lobus_frontal',
        name: 'Lobus Frontal',
        wikiQuery:"Lobus_frontal",
        camera: {
          eye: [0.44, -0.83, 1.05],
          target: [0, -0.06, 0.21],
          duration: 1.8
        }
      },
      {
        id: 'lobus_parietal',
        name: 'Lobus Parietal',
        wikiQuery:"Lobus_parietal",
        camera: {
          eye: [0.61, 0.41, 1.14],
          target: [0, -0.06, 0.21],
          duration: 1.8
        }
      },
      {
        id: 'lobus_temporal_kiri',
        name: 'Lobus Temporal Kiri',
        wikiQuery:"Otak_manusia",
        camera: {
          eye: [1.13, -0.05, 0.31],
          target: [0, -0.06, 0.21],
          duration: 1.8
        }
      },
      {
        id: 'lobus_temporal_kanan',
        name: 'Lobus Temporal kanan',
        wikiQuery:"Lobus_temporalis",
        camera: {
          eye: [-1.06, -0.2, 0.36],
          target: [0, -0.06, 0.21],
          duration: 1.8
        }
      },
      {
        id: 'lobus_oksipital',
        name: 'Lobus Oksipital',
        wikiQuery:"Lobus_oksipitalis",
        camera: {
          eye: [-0.21, 1.56, 0.1],
          target: [0, -0.06, 0.21],
          duration: 1.8
        }
      },
      {
        id: 'otak_kecil',
        name: 'Otak Kecil',
        wikiQuery:"Otak_kecil",
        camera: {
          eye: [-0.11, 1.2, -0.95],
          target: [0, -0.06, 0.21],
          duration: 1.8
        }
      },
      {
        id: 'brainstem',
        name: 'Batang Otak',
        wikiQuery:"Batang_otak",
        camera: {
          eye: [-0.05, 0.12, -0.61],
          target: [0, -0.06, 0.21],
          duration: 1.8
        }
      }
    ]
  },
  {
    id: 'ginjal',
    title: 'Ginjal',
    views: '28k',
    comments: 89,
    likes: 521,
    thumbnail: 'assets/organ_ginjal.jpg', //sumber : https://unsplash.com/id/foto/peralatan-belajar-organ-manusia-coklat-igwG8aIaypo
    wikiQuery: 'Ginjal', 
    // sumber: Web Wikipedia Ginjal
    sketchfabId: 'd8c0652ddff4474585ccba155c490622', 
    //sumber: https://sketchfab.com/3d-models/human-kidney-anatomy-cross-section-d8c0652ddff4474585ccba155c490622
    defaultCamera: {
      eye: [-23.48, -344.33, 32.42],
      target: [2.75, 6.27, 57.88],
      duration: 1.8
    },
    parts: [
      {
        id: 'korteks_ginjal',
        name: 'Korteks Ginjal',
        wikiQuery:"Korteks_(anatomi)",
        camera: {
          eye: [-27.42, -82.45, 177.1],
          target: [2.75, 6.27, 57.88],
          duration: 1.8
        }
      },
      {
        id: 'arteri_renalis',
        name: 'Arteri Renalis',
        wikiQuery:"arteri_renalis",
        camera: {
          eye: [-174.77, -13.57, 66.93],
          target: [2.75, 6.27, 57.88],
          duration: 1.8
        }
      },
      {
        id: 'ureter',
        name: 'Ureter',
        wikiQuery:"Ureter",
        camera: {
          eye: [-73.76, -16.08, -23.04],
          target: [2.75, 6.27, 57.88],
          duration: 1.8
        }
      }
    ]
  },
  {
    id: 'paru_paru',
    title: 'Paru-paru',
    views: '8k',
    comments: 298,
    likes: 231,
    thumbnail: 'assets/organ_paru.jpg', //sumber : https://unsplash.com/id/foto/fotografi-fokus-selektif-paru-paru-anatomi-Pw9aFhc92P8
    wikiQuery: 'Paru-paru',
    // sumber: Web Wikipedia paru-paru
    sketchfabId: 'c3f91521c53b43458afd509ea6ae2617',
    //sumber: https://sketchfab.com/3d-models/human-lungs-c3f91521c53b43458afd509ea6ae2617
    defaultCamera: {
      eye: [61.56, -333.64, 35.03],
      target: [3.35, -38.44, 28.61],
      duration: 1.8
    },
    parts: [
      {
        id: 'batang_tenggorokan',
        name: 'Batang Tenggorokan',
        wikiQuery:"Trakea",
        camera: {
          eye: [-17.25, 11.33, 130.74],
          target: [3.35, -38.44, 28.61],
          duration: 1.8
        }
      },
      {
        id: 'bronkus',
        name: 'Bronkus',
        wikiQuery:"Bronkus",
        camera: {
          eye: [4.13, -106.3, 29.66],
          target: [3.35, -38.44, 28.61],
          duration: 1.8
        }
      },
      {
        id: 'bronkiolus',
        name: 'Bronkiolus',
        wikiQuery:"Bronkiolus",
        camera: {
          eye: [-17.12, 91.24, 15.65],
          target: [3.35, -38.44, 28.61],
          duration: 1.8
        }
      },
      {
        id: 'alveolus',
        name: 'Alveolus',
        wikiQuery:"Alveolus",
        camera: {
          eye: [115.95, 132.74, 48.31],
          target: [3.35, -38.44, 28.61],
          duration: 1.8
        }
      },
      {
        id: 'sufaktan',
        name: 'Sufaktan Paru',
        wikiQuery:"Sufaktan_paru",
          camera: {
            eye: [-181.44, -230.16, 28.31],
            target: [3.35, -38.44, 28.61],
            duration: 1.8
          }
      }
    ]
  },
  {
    id: 'tulang_tangan',
    title: 'Tulang Tangan',
    views: '3.7k',
    comments: 21,
    likes: 1,
    thumbnail: 'assets/organ_tangan.jpg', //sumber : https://unsplash.com/id/foto/gambar-anatomi-otot-dan-tendon-tangan-manusia-kZu3CXxZUPE
    wikiQuery: 'Tangan', //sumber: website wikipedia id api tentang tangan
    sketchfabId: '7cecfd9fb2214b59bcb3faa9730ee6a6',
    // sumber:https://sketchfab.com/3d-models/dynamic-human-hand-anatomy-hand-anatomy-7cecfd9fb2214b59bcb3faa9730ee6a6
    defaultCamera: {
      eye: [-0.77, -7.34, 5.97],
      target: [0.34, 0.05, 3.53],
      duration: 1.8
    },
    parts: [
      {
        id: 'karpus',
        name: 'Karpus',
        wikiQuery: "Pergelangan_tangan",
        camera: {
          eye: [0.75, 3.95, -4.63],
          target: [0.34, 0.05, 3.53],
          duration: 1.8
        }
      },
      {
        id: 'metakarpus',
        name: 'Metakarpus',
        wikiQuery: "Metakarpus",
        camera: {
          eye: [-2.37, -3.74, -0.44],
          target: [0.34, 0.05, 3.53],
          duration: 1.8
        }
      },
      {
        id: 'falang',
        name: 'Falang',
        wikiQuery: "Jari_tangan",
        camera: {
          eye: [-0.56, 3.47, 5.59],
          target: [0.34, 0.05, 3.53],
          duration: 1.8
        }
      },
    ]
  },
  {
    id: 'pankreas',
    title: 'Pankreas',
    views: '26.3k',
    comments: 0,
    likes: 28,
    thumbnail: '/assets/organ_pankreas.jpeg', //sumber: https://media.sketchfab.com/models/8acf64dc315b49308b4fcbd47e48b92b/thumbnails/96b582adf4704f2c9df8235bbc05167b/aeb692d32afe48cd8f292bce8f39dd17.jpeg
    wikiQuery: 'Pankreas', //sumber materi: wikipedia pankreas
    sketchfabId: '8acf64dc315b49308b4fcbd47e48b92b', // sumber : https://sketchfab.com/3d-models/pancreas-cross-section-anatomy-8acf64dc315b49308b4fcbd47e48b92b
    defaultCamera: DEFAULT_CAMERA,
    parts: [
      //tidak nemu ada informasi sumber untuk ini
    ]
  },
  {
    id: 'lidah',
    title: 'Lidah',
    views: '14.2k',
    comments: 3,
    likes: 17,
    thumbnail: 'assets/organ_lidah.jpg', //sumber gamber : https://unsplash.com/id/foto/kue-berbentuk-hati-merah-muda-dan-putih-gt9bbQH0uGY
    wikiQuery: 'Lidah', // sumber : wikipedia halaman Lidah
    sketchfabId: 'afa408912123471fb1c0e999a9c0e27a', // sumber : https://sketchfab.com/3d-models/tongue-anatomy-dorsum-of-tongue-afa408912123471fb1c0e999a9c0e27a
    defaultCamera: DEFAULT_CAMERA,
    parts: []
  }
];