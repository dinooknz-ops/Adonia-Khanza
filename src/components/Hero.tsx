import React from 'react';
import { ArrowRight, Instagram, Code2, Cpu, Sparkles, BookOpen, ChevronDown } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface HeroProps {
  onExploreWorks: () => void;
  onExploreAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWorks, onExploreAbout }) => {
  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden border-b border-stone-800/60"
    >
      {/* Subtle atmospheric ambient glow - maroon accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-rose-950/25 rounded-full blur-[140px] -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Subheader / Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-rose-300/90 tracking-wide uppercase mb-6">
          <span>Website Personal</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Teknologi &amp; Rekayasa</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Portofolio Satu Halaman</span>
        </div>

        {/* Hero Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.1] mb-6">
              Halo, saya{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-rose-500 underline decoration-rose-700/60 decoration-wavy decoration-2">
                {PERSONAL_DATA.name}
              </span>
              .
            </h1>

            <p className="text-lg sm:text-xl text-stone-300 leading-relaxed max-w-2xl mb-8">
              Berfokus pada bidang{' '}
              <strong className="text-white font-semibold">
                {PERSONAL_DATA.focus.join(' & ')}
              </strong>
              . Memadukan daya pikir{' '}
              <span className="text-rose-300 font-medium">{PERSONAL_DATA.bio}</span>{' '}
              dengan kegemaran mendalam dalam dunia{' '}
              <strong className="text-white font-semibold">{PERSONAL_DATA.hobby}</strong>{' '}
              untuk merancang solusi rekayasa yang andal dan solutif.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onExploreWorks}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-rose-800 hover:bg-rose-700 active:bg-rose-900 rounded-xl transition-all shadow-lg shadow-rose-950/60 hover:shadow-rose-900/40 hover:-translate-y-0.5"
              >
                <span>Lihat Karya (Teks)</span>
                <ArrowRight className="w-4 h-4 text-rose-200" />
              </button>

              <button
                type="button"
                onClick={onExploreAbout}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-200 hover:text-white bg-stone-900/90 hover:bg-stone-800/90 border border-stone-800 hover:border-stone-700 rounded-xl transition-all"
              >
                <span>Tentang Saya</span>
              </button>

              <a
                href={PERSONAL_DATA.publicLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/60 rounded-xl transition-all"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
                <span>@{PERSONAL_DATA.publicLinks.instagram.handle}</span>
              </a>
            </div>

            {/* Quick Unboxed Highlights List */}
            <div className="pt-6 border-t border-stone-800/70 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Fokus: {PERSONAL_DATA.focus.join(', ')}</span>
              </div>
              <span aria-hidden="true" className="text-stone-700 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Bio: {PERSONAL_DATA.bio}</span>
              </div>
              <span aria-hidden="true" className="text-stone-700 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Hobi: {PERSONAL_DATA.hobby}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Bento Identity Showcase */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-stone-900/90 to-stone-950/90 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-24 h-24 bg-rose-700/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Profile Monogram & Headline */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-800/80 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-700 to-rose-950 border border-rose-600/50 flex items-center justify-center font-bold text-lg text-white shadow-md shadow-rose-950">
                    AK
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white tracking-tight">
                      {PERSONAL_DATA.name}
                    </h2>
                    <p className="text-xs text-rose-300">
                      Technology &amp; Engineering Enthusiast
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-stone-400 border border-stone-800 bg-stone-900/80 px-2.5 py-1 rounded-md">
                  Profil Publik
                </span>
              </div>

              {/* Identity Matrix Breakdown */}
              <div className="space-y-4">
                <div className="p-3.5 bg-stone-950/70 border border-stone-800/80 rounded-xl hover:border-rose-900/60 transition-colors">
                  <div className="flex items-center gap-2.5 mb-1 text-xs font-semibold text-rose-300">
                    <Cpu className="w-3.5 h-3.5 text-rose-400" />
                    <span>Fokus Utama</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    {PERSONAL_DATA.focus.join(' & ')}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    Pendekatan terstruktur dalam menyelesaikan tantangan rekayasa modern.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-950/70 border border-stone-800/80 rounded-xl hover:border-rose-900/60 transition-colors">
                  <div className="flex items-center gap-2.5 mb-1 text-xs font-semibold text-rose-300">
                    <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                    <span>Prinsip Karakter (Bio)</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    {PERSONAL_DATA.bio}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    Selalu terbuka pada ide-ide baru dan aktif mengasah keahlian mutakhir.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-950/70 border border-stone-800/80 rounded-xl hover:border-rose-900/60 transition-colors">
                  <div className="flex items-center gap-2.5 mb-1 text-xs font-semibold text-rose-300">
                    <Code2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>Hobi &amp; Minat Inti</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    {PERSONAL_DATA.hobby}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    Mengembangkan logika dan algoritma melalui penulisan kode bersih.
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                  <span>Dokumentasi Teks Terbuka</span>
                </span>
                <span className="text-rose-300 font-mono">ID: adonia-portfolio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={onExploreAbout}
            className="flex flex-col items-center gap-1.5 text-xs text-stone-400 hover:text-rose-300 transition-colors group cursor-pointer"
            aria-label="Gulir ke bagian Tentang Saya"
          >
            <span className="tracking-widest uppercase text-[11px] font-medium">Jelajahi Profil</span>
            <ChevronDown className="w-4 h-4 text-rose-400/80 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
