import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beranda', label: 'Beranda', id: 'beranda' },
    { href: '#tentang', label: 'Tentang Saya', id: 'tentang' },
    { href: '#karya', label: 'Karya', id: 'karya' },
    { href: '#tautan', label: 'Tautan Publik', id: 'tautan' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-stone-800/40 py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#beranda');
            }}
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-rose-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-700 shadow-sm shadow-rose-900" />
            <span>{PERSONAL_DATA.name}</span>
          </a>

          {/* Zone 2: 4 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-stone-400 hover:text-stone-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={PERSONAL_DATA.publicLinks.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-rose-900/80 hover:bg-rose-800 border border-rose-700/60 rounded-lg transition-all shadow-sm hover:shadow-rose-950/50 whitespace-nowrap shrink-0 active:scale-95"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@{PERSONAL_DATA.publicLinks.instagram.handle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose-300" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-900 border border-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-700"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-stone-800/80 bg-stone-950/95 rounded-b-xl px-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-rose-950/60 text-white border border-rose-800/40'
                      : 'text-stone-300 hover:text-white hover:bg-stone-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-stone-800/60 mt-1">
                <a
                  href={PERSONAL_DATA.publicLinks.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-white bg-rose-900 hover:bg-rose-800 rounded-lg transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <span>Instagram @{PERSONAL_DATA.publicLinks.instagram.handle}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-rose-300" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
