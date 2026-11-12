import React, { useState, useMemo } from 'react';
import { BookOpen, Cpu, Wrench, Code2, Search, ArrowRight, FileText } from 'lucide-react';
import { PERSONAL_DATA, WorkItem } from '../data/portfolioData';
import { WorkModal } from './WorkModal';

export const Works: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalWork, setActiveModalWork] = useState<WorkItem | null>(null);

  const categories = ['Semua', 'Technology', 'Engineering', 'Coding'];

  const filteredWorks = useMemo(() => {
    return PERSONAL_DATA.works.filter((item) => {
      const matchCategory =
        selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.engineeringApproach.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="karya"
      className="py-24 border-b border-stone-800/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
              <span>Portofolio &amp; Eksplorasi</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Bagian 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Karya &amp; Dokumentasi Teknis
            </h2>
            <p className="mt-3 text-stone-300 leading-relaxed">
              Seluruh karya di bawah ini disajikan dalam <strong className="text-white">format teks terstruktur</strong>, 
              merangkum penerapan prinsip rekayasa (Engineering), solusi teknologi (Technology), serta eksplorasi baris kode (Coding).
            </p>
          </div>

          <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-xs text-stone-300 flex items-center gap-2 self-start md:self-auto">
            <FileText className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Format Teks Terbuka · Sesuai Permintaan</span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center mb-8">
          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-rose-900 text-white shadow-sm shadow-rose-950 font-semibold'
                    : 'text-stone-400 hover:text-white hover:bg-stone-850'
                }`}
              >
                {cat === 'Semua' ? 'Semua Karya' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari karya teks..."
              className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-rose-700 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Works List / Cards */}
        {filteredWorks.length === 0 ? (
          <div className="p-12 text-center bg-stone-900/40 border border-stone-800 rounded-2xl">
            <BookOpen className="w-8 h-8 text-stone-600 mx-auto mb-3" />
            <p className="text-stone-300 font-medium text-sm">Tidak ditemukan karya yang cocok dengan pencarian.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-rose-400 hover:underline cursor-pointer"
            >
              Reset filter pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredWorks.map((work) => {
              return (
                <article
                  key={work.id}
                  className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-7 hover:border-rose-800/80 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-black/30"
                >
                  <div>
                    {/* Unboxed Metadata Header */}
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-rose-400">{work.category}</span>
                        <span aria-hidden="true" className="text-stone-700">·</span>
                        <span className="text-stone-400">{work.type}</span>
                      </div>
                      <span className="font-mono text-[11px] text-stone-400">{work.id}</span>
                    </div>

                    {/* Work Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-200 transition-colors leading-snug">
                      {work.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-stone-300 leading-relaxed mb-4">
                      {work.shortDescription}
                    </p>

                    {/* Engineering Approach Highlight */}
                    <div className="p-3.5 bg-stone-950/80 border border-stone-800/80 rounded-xl mb-4 text-xs text-stone-300 leading-relaxed">
                      <span className="font-semibold text-rose-300 block mb-1">
                        Pendekatan Solusi:
                      </span>
                      {work.engineeringApproach}
                    </div>

                    {/* Code & Logic Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {work.codeConcepts.map((concept, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono text-stone-400 bg-stone-950 px-2.5 py-1 rounded-md border border-stone-800/70"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-xs text-stone-400">
                      Format Teks Lengkap
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalWork(work)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      <span>Baca Detail Karya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Note on Text Works */}
        <div className="mt-12 p-6 bg-stone-900/40 border border-stone-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">
              Transparansi Penyajian Karya
            </h4>
            <p className="text-xs text-stone-400 max-w-2xl leading-relaxed">
              Sesuai preferensi, seluruh karya ditampilkan dalam format narasi teks terstruktur yang menonjolkan analisis logika, tantangan teknis, dan pembelajaran mandiri.
            </p>
          </div>
          <span className="text-xs font-mono text-rose-300 whitespace-nowrap bg-rose-950/40 px-3 py-1.5 rounded-lg border border-rose-900/60">
            Adonia Khanza · Text Portfolio
          </span>
        </div>
      </div>

      {/* Full Detail Modal */}
      <WorkModal
        work={activeModalWork}
        onClose={() => setActiveModalWork(null)}
      />
    </section>
  );
};
