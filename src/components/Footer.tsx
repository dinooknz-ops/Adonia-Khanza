import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800/80 py-12 text-stone-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800/60">
          {/* Brand & Focus */}
          <div className="space-y-1.5 text-center md:text-left">
            <a
              href="#beranda"
              className="text-base font-bold text-white hover:text-rose-300 transition-colors inline-block"
            >
              {PERSONAL_DATA.name}
            </a>
            <p className="text-stone-400 text-xs">
              {PERSONAL_DATA.focus.join(' · ')} · {PERSONAL_DATA.bio} · Hobi: {PERSONAL_DATA.hobby}
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-medium text-stone-300">
            <a href="#beranda" className="hover:text-white transition-colors">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-white transition-colors">
              Tentang Saya
            </a>
            <a href="#karya" className="hover:text-white transition-colors">
              Karya
            </a>
            <a href="#tautan" className="hover:text-white transition-colors">
              Tautan Publik
            </a>
            <a
              href={PERSONAL_DATA.publicLinks.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-rose-300 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@{PERSONAL_DATA.publicLinks.instagram.handle}</span>
            </a>
          </nav>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
            aria-label="Kembali ke atas halaman"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-rose-400" />
          </button>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <p>© {new Date().getFullYear()} {PERSONAL_DATA.name}. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-2">
            <span>Frontend Statis React + Vite</span>
            <span aria-hidden="true">·</span>
            <span className="text-rose-400 font-medium">Aksen Maroon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
