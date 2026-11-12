export interface WorkItem {
  id: string;
  title: string;
  category: 'Technology' | 'Engineering' | 'Coding';
  type: string;
  shortDescription: string;
  engineeringApproach: string;
  technicalChallenges: string[];
  keyLearnings: string[];
  codeConcepts: string[];
  statusText: string;
}

export const PERSONAL_DATA: {
  name: string;
  focus: string[];
  bio: string;
  hobby: string;
  publicLinks: {
    instagram: {
      handle: string;
      url: string;
      label: string;
      displayUrl: string;
    };
  };
  works: WorkItem[];
} = {
  name: "Adonia Khanza",
  focus: ["Technology", "Engineering"],
  bio: "Creative, Learning Skills",
  hobby: "Coding",
  publicLinks: {
    instagram: {
      handle: "ykknz1_",
      url: "https://instagram.com/ykknz1_",
      label: "Instagram",
      displayUrl: "instagram.com/ykknz1_"
    }
  },
  works: [
    {
      id: "work-1",
      title: "Sistem Pemantauan & Analisis Metrik Rekayasa",
      category: "Engineering",
      type: "Dokumentasi Teks Proyek Mandiri",
      shortDescription: "Perancangan kerangka analitis untuk memantau performa operasional, efisiensi energi, dan integritas data pada sistem rekayasa perangkat.",
      engineeringApproach: "Menerapkan prinsip rekayasa keandalan (reliability engineering) dengan memecah metrik telemetri ke dalam ambang batas toleransi terukur dan diagram alir data modular.",
      technicalChallenges: [
        "Menentukan batas toleransi kritis sistem agar tidak menghasilkan peringatan palsu",
        "Menyusun struktur data berbasis waktu (time-series) yang ringan dan cepat diproses",
        "Mengintegrasikan prinsip logika fail-safe saat terjadi anomali masukan data"
      ],
      keyLearnings: [
        "Pentingnya abstraksi matematika dalam menyederhanakan fenomena fisik ke model komputasi",
        "Disiplin pengujian kasus ekstrem (edge cases) sebelum implementasi perangkat lunak",
        "Penerapan continuous learning untuk mengevaluasi metodologi rekayasa terbaru"
      ],
      codeConcepts: [
        "State Machine & Event Triggers",
        "Algoritma Smoothing & Filter Rata-Rata Bergerak",
        "Validasi Masukan Nir-Dependensi"
      ],
      statusText: "Karya Teks Konseptual · Eksplorasi Rekayasa"
    },
    {
      id: "work-2",
      title: "Arsitektur Antarmuka Web Interaktif & Responsif",
      category: "Technology",
      type: "Kajian Desain & Kode Teks",
      shortDescription: "Eksplorasi antarmuka berbasis React & Vite yang berfokus pada kecepatan muat tinggi, kontras visual yang tajam, dan navigasi ramah pengguna.",
      engineeringApproach: "Pendekatan sistem desain berorientasi komponen reusable dengan manajemen layout responsif, tipografi proporsional, dan penyesuaian kontras standar WCAG.",
      technicalChallenges: [
        "Memastikan tata letak tetap konsisten di berbagai ukuran layar tanpa pergeseran layout (CLS)",
        "Mengelola palet warna maroon sebagai aksen utama tanpa mengorbankan keterbacaan teks",
        "Membangun interaktivitas satu halaman yang mulus dan bebas latensi navigasi"
      ],
      keyLearnings: [
        "Harmonisasi antara daya tarik visual kreatif dan ketegasan prinsip teknik frontend",
        "Pemanfaatan CSS variabel dan utility modern untuk efisiensi ukuran berkas akhir",
        "Pentingnya pengalaman pengguna (UX) yang jelas dan bebas distraksi"
      ],
      codeConcepts: [
        "Komposisi Komponen Modular React",
        "Desain Responsif Mobile-First",
        "Optimalisasi Aset Statis & Zero-Config Runtime"
      ],
      statusText: "Karya Teks · Implementasi Frontend"
    },
    {
      id: "work-3",
      title: "Utilitas Otomasi Alur Kerja & Skrip CLI",
      category: "Coding",
      type: "Dokumentasi Logika & Skrip Teks",
      shortDescription: "Koleksi skrip otomatisasi berbasis terminal untuk mempercepat transformasi format teks, perapian berkas, dan kalkulasi rutin rekayasa.",
      engineeringApproach: "Merancang skrip mandiri dengan dependensi minimal yang menerima argumen masukan, memvalidasi integritas data, dan mengeluarkan hasil terformat ke konsol.",
      technicalChallenges: [
        "Menghindari kebocoran memori saat membaca berkas teks bervolume besar",
        "Membuat pesan galat (error handling) deskriptif dalam bahasa yang mudah dipahami",
        "Memastikan kompatibilitas eksekusi di berbagai lingkungan terminal"
      ],
      keyLearnings: [
        "Hobi coding memberikan wawasan mendalam mengenai bagaimana komputasi mendasar bekerja di balik layar",
        "Kerapian kode dan struktur fungsi modular mempermudah pengembangan lanjutan",
        "Ketangkasan memecahkan masalah logika melalui iterasi uji coba teratur"
      ],
      codeConcepts: [
        "Pemrosesan Stream Teks & Regex Parser",
        "Modularisasi Fungsi Murni (Pure Functions)",
        "Manajemen Argumen Baris Perintah"
      ],
      statusText: "Karya Teks · Hobi & Eksperimen Kode"
    },
    {
      id: "work-4",
      title: "Eksplorasi Algoritma Optimasi & Struktur Data",
      category: "Engineering",
      type: "Catatan Pembelajaran & Analisis Teks",
      shortDescription: "Analisis komparatif kinerja algoritma pencarian dan struktur data hierarkis untuk memecahkan masalah pengelompokan data teknis.",
      engineeringApproach: "Menganalisis kompleksitas waktu Big-O secara teoritis lalu menguji eksekusi iteratif menggunakan kumpulan data uji buatan.",
      technicalChallenges: [
        "Memilih struktur data yang seimbang antara kecepatan pencarian dan penggunaan memori",
        "Mengoptimalkan algoritma rekursif agar terhindar dari batas maksimum stack",
        "Menghitung perbandingan performa riil terhadap ekspektasi teoretis"
      ],
      keyLearnings: [
        "Algoritma yang tepat menghemat sumber daya komputasi secara signifikan",
        "Keingintahuan kreatif (creative curiosity) mendorong eksplorasi teknik yang lebih efisien",
        "Setiap keputusan arsitektur memiliki trade-off yang harus ditimbang matang"
      ],
      codeConcepts: [
        "Pohon Biner & Hash Map",
        "Analisis Kompleksitas Big-O",
        "Dynamic Programming & Memoization"
      ],
      statusText: "Karya Teks · Riset Belajar Mandiri"
    },
    {
      id: "work-5",
      title: "Kajian Logika Pengambilan Keputusan Otomatis",
      category: "Technology",
      type: "Rancangan Solusi Teks",
      shortDescription: "Kerangka model keputusan logika berbasis aturan (rule-based) untuk sistem kendali otomatisasi sederhana dalam lingkungan rekayasa.",
      engineeringApproach: "Menggunakan diagram pohon keputusan dan mesin status berhingga (finite state machine) untuk memetakan seluruh kemungkinan kondisi dan tindakan aman.",
      technicalChallenges: [
        "Mencegah kondisi perlombaan (race condition) pada pembaruan status sistem",
        "Menjamin setiap aksi memiliki prosedur pemulihan (rollback) jika gagal",
        "Mendokumentasikan diagram alur secara jelas dan terstandarisasi"
      ],
      keyLearnings: [
        "Rekayasa sistem yang kokoh lahir dari perencanaan logika yang teliti",
        "Sikap pantang menyerah dalam menguji berbagai skenario kesalahan",
        "Kemampuan belajar mandiri (learning skills) membuka pemahaman atas konsep teknologi baru"
      ],
      codeConcepts: [
        "Finite State Machine (FSM)",
        "Decision Trees & Truth Tables",
        "Protokol Keamanan Logika"
      ],
      statusText: "Karya Teks · Kajian Konseptual"
    }
  ]
};
