import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Works } from './components/Works';
import { PublicLinks } from './components/PublicLinks';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'tentang', 'karya', 'tautan'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-rose-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onExploreWorks={() => scrollToSection('karya')}
          onExploreAbout={() => scrollToSection('tentang')}
        />
        <About onGoToWorks={() => scrollToSection('karya')} />
        <Works />
        <PublicLinks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
