import React, { useState } from 'react';
import { Cpu, Wrench, Sparkles, Terminal, CheckCircle2, Compass, Layers, ArrowRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface AboutProps {
  onGoToWorks: () => void;
}

export const About: React.FC<AboutProps> = ({ onGoToWorks }) => {
  const [activeTab, setActiveTab] = useState<'profil' | 'prinsip' | 'kode'>('profil');

  const principles = [
    {
      num: '01',
      title: 'Pendekatan Berbasis Engineering',
      desc: 'Setiap tantangan teknis didekati dengan metodologi rekayasa: membedah masalah besar ke modul-modul terukur, menganalisis kendala, dan merancang solusi yang tahan uji serta berdaya guna.',
      icon: Wrench,
    },
    {
      num: '02',
      title: 'Eksplorasi Teknologi Terbuka',
      desc: 'Dunia teknologi berkembang pesat. Fokus utama saya adalah memahami fondasi arsitektur sistem komputasi modern dan mengevaluasi bagaimana teknologi tepat guna dapat memecahkan masalah nyata.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Kreativitas & Daya Cipta (Creative)',
      desc: 'Rekayasa tidak sekadar formula matematis, melainkan seni merajut gagasan baru. Kreativitas memungkinkan lahirnya pendekatan alternatif yang efisien, elegan, dan berorientasi pada kemudahan pengguna.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Pembelajar Berkelanjutan (Learning Skills)',
      desc: 'Rasa ingin tahu yang tinggi dan disiplin belajar mandiri adalah fondasi utama saya. Saya terus memperbarui pemahaman dengan membaca dokumentasi teknis, menguji hipotesis, dan mempraktikkan konsep baru.',
      icon: Compass,
    },
  ];

  return (
    <section
      id="tentang"
      className="py-24 border-b border-stone-800/60 bg-stone-950/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
            <span>Mengenal Profil</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Bagian 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tentang Saya
          </h2>
          <p className="mt-3 text-stone-300 leading-relaxed">
            Dedikasi pada <strong className="text-white">rekayasa (Engineering)</strong>, gairah pada{' '}
            <strong className="text-white">kemajuan teknologi (Technology)</strong>, ditopang oleh{' '}
            <strong className="text-rose-300">kreativitas</strong> dan hobi mendalam pada{' '}
            <strong className="text-white">coding</strong>.
          </p>
        </div>

        {/* Interactive View Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-900 border border-stone-800 rounded-xl max-w-md mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('profil')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'profil'
                ? 'bg-rose-900 text-white shadow-sm shadow-rose-950'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            Profil Lengkap
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('prinsip')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'prinsip'
                ? 'bg-rose-900 text-white shadow-sm shadow-rose-950'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            Nilai &amp; Prinsip
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('kode')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'kode'
                ? 'bg-rose-900 text-white shadow-sm shadow-rose-950'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            Terminal / Logika
          </button>
        </div>

        {/* Tab 1: Profil Lengkap */}
        {activeTab === 'profil' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6 text-stone-300 leading-relaxed">
              <div className="bg-stone-900/60 border border-stone-800/80 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-600" />
                  <span>Siapa Saya?</span>
                </h3>
                <p className="mb-4">
                  Nama saya <strong className="text-white font-semibold">{PERSONAL_DATA.name}</strong>. 
                  Saya mendedikasikan ketertarikan dan energi saya pada ranah{' '}
                  <strong className="text-rose-300 font-semibold">{PERSONAL_DATA.focus.join(' dan ')}</strong>. 
                  Bagi saya, teknologi bukan hanya kumpulan alat, melainkan sarana utama untuk memecahkan persoalan dunia nyata secara terukur.
                </p>
                <p className="mb-4">
                  Dengan latar pola pikir <span className="text-white font-medium">{PERSONAL_DATA.bio}</span>, 
                  saya terbiasa memandang sebuah kendala sebagai kesempatan untuk belajar. Saya menyukai proses menggali dokumentasi baru, memahami konsep teoretis mendasar, dan langsung mempraktikkannya melalui karya nyata.
                </p>
                <p>
                  Kegemaran dan hobi saya yang paling utama adalah{' '}
                  <strong className="text-white font-semibold">{PERSONAL_DATA.hobby}</strong>. 
                  Menulis baris kode bagi saya adalah perpaduan antara logika matematika yang presisi dan kebebasan berekspresi secara kreatif.
                </p>
              </div>

              {/* Fast Fact Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-stone-900/40 border border-stone-800 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Fokus Teknologi Terarah</h4>
                      <p className="text-xs text-stone-400 mt-1">
                        Memahami cara kerja sistem komputasi dan arsitektur perangkat lunak modern.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-stone-900/40 border border-stone-800 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Disiplin Rekayasa</h4>
                      <p className="text-xs text-stone-400 mt-1">
                        Menitikberatkan pada keandalan, keterbacaan, dan efisiensi rancangan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-stone-900/40 border border-stone-800 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Kreativitas Eksploratif</h4>
                      <p className="text-xs text-stone-400 mt-1">
                        Menemukan sudut pandang unik untuk menghadirkan solusi fungsional.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-stone-900/40 border border-stone-800 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Hobi Coding Konsisten</h4>
                      <p className="text-xs text-stone-400 mt-1">
                        Mengeksekusi ide ke dalam baris kode fungsional dan bersih.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Snapshot Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-7">
                <h3 className="text-sm font-bold text-rose-300 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-rose-400" />
                  <span>Matriks Karakter &amp; Kemampuan</span>
                </h3>

                <dl className="space-y-4 text-sm">
                  <div className="pb-3 border-b border-stone-800 flex justify-between items-baseline gap-4">
                    <dt className="text-stone-400">Nama Lengkap</dt>
                    <dd className="font-semibold text-white text-right">{PERSONAL_DATA.name}</dd>
                  </div>

                  <div className="pb-3 border-b border-stone-800 flex justify-between items-baseline gap-4">
                    <dt className="text-stone-400">Bidang Fokus</dt>
                    <dd className="font-semibold text-rose-300 text-right">{PERSONAL_DATA.focus.join(' & ')}</dd>
                  </div>

                  <div className="pb-3 border-b border-stone-800 flex justify-between items-baseline gap-4">
                    <dt className="text-stone-400">Bio &amp; Sifat</dt>
                    <dd className="font-semibold text-white text-right">{PERSONAL_DATA.bio}</dd>
                  </div>

                  <div className="pb-3 border-b border-stone-800 flex justify-between items-baseline gap-4">
                    <dt className="text-stone-400">Hobi Utama</dt>
                    <dd className="font-semibold text-rose-300 text-right">{PERSONAL_DATA.hobby}</dd>
                  </div>

                  <div className="pb-3 border-b border-stone-800 flex justify-between items-baseline gap-4">
                    <dt className="text-stone-400">Akun Publik</dt>
                    <dd className="font-mono text-xs text-stone-200 text-right">
                      <a
                        href={PERSONAL_DATA.publicLinks.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-400 transition-colors underline decoration-stone-600 underline-offset-4"
                      >
                        @{PERSONAL_DATA.publicLinks.instagram.handle}
                      </a>
                    </dd>
                  </div>

                  <div className="pt-1 flex justify-between items-baseline gap-4">
                    <dt className="text-stone-400">Format Karya</dt>
                    <dd className="text-xs text-stone-300 text-right">Teks Dokumentasi Terstruktur</dd>
                  </div>
                </dl>

                <div className="mt-6 pt-5 border-t border-stone-800">
                  <button
                    type="button"
                    onClick={onGoToWorks}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-rose-900/80 hover:bg-rose-800 border border-rose-700/60 rounded-xl transition-all"
                  >
                    <span>Pelajari Hasil Karya (Teks)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-rose-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Prinsip & Nilai Rekayasa */}
        {activeTab === 'prinsip' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.num}
                  className="bg-stone-900/70 border border-stone-800/90 rounded-2xl p-6 sm:p-7 hover:border-rose-800/80 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-800/50 flex items-center justify-center text-rose-300 group-hover:bg-rose-900 transition-colors">
                      <IconComp className="w-5 h-5 text-rose-400" />
                    </div>
                    <span className="text-xs font-mono font-bold text-stone-400">
                      {p.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-200 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Terminal / Logika Profil */}
        {activeTab === 'kode' && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-900/90 border border-rose-700/50" />
                <span className="w-3 h-3 rounded-full bg-stone-700" />
                <span className="w-3 h-3 rounded-full bg-stone-800" />
                <span className="ml-2 text-xs font-mono text-stone-400">
                  adonia_khanza_profile.ts
                </span>
              </div>
              <span className="text-xs font-mono text-stone-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-rose-400" />
                <span>TypeScript Interface</span>
              </span>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs sm:text-sm text-stone-200 overflow-x-auto leading-relaxed">
              <pre>
                <code>
{`// Representasi Objek Profil Pribadi
interface EngineerProfile {
  nama: string;
  fokusUtama: string[];
  karakteristik: string;
  kegemaran: string;
  tautanPublik: { [platform: string]: string };
}

const adoniaKhanza: EngineerProfile = {
  nama: "${PERSONAL_DATA.name}",
  fokusUtama: [
    "${PERSONAL_DATA.focus[0]}", // Rekayasa sistem dan struktur komputasi
    "${PERSONAL_DATA.focus[1]}"   // Prinsip keandalan, efisiensi & pemecahan masalah
  ],
  karakteristik: "${PERSONAL_DATA.bio}", // Adaptif, kreatif & selalu ingin belajar
  kegemaran: "${PERSONAL_DATA.hobby}",          // Menulis kode & eksplorasi algoritma
  tautanPublik: {
    instagram: "https://${PERSONAL_DATA.publicLinks.instagram.displayUrl}"
  }
};

// Fungsi Evaluasi Dedikasi
function jalankanMisi(profil: EngineerProfile): void {
  console.log("Membangun solusi rekayasa terstruktur...");
  console.log("Kreativitas diaktifkan:", profil.karakteristik);
  console.log("Hobi aktif:", profil.kegemaran);
}

jalankanMisi(adoniaKhanza);`}
                </code>
              </pre>
            </div>
            
            <div className="px-6 py-3 bg-stone-950/70 border-t border-stone-800 text-xs text-stone-400 flex items-center justify-between">
              <span>Status Eksekusi: Berhasil dikompilasi secara statis</span>
              <span className="text-rose-400 font-medium">Hobi: Coding Aktif</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
