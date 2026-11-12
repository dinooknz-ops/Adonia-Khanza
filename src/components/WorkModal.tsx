import React, { useEffect } from 'react';
import { X, Cpu, Wrench, Code2, BookOpen, CheckCircle } from 'lucide-react';
import { WorkItem } from '../data/portfolioData';

interface WorkModalProps {
  work: WorkItem | null;
  onClose: () => void;
}

export const WorkModal: React.FC<WorkModalProps> = ({ work, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (work) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Technology':
        return <Cpu className="w-4 h-4 text-rose-400" />;
      case 'Engineering':
        return <Wrench className="w-4 h-4 text-rose-400" />;
      default:
        return <Code2 className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-800 bg-stone-950/80 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase tracking-wider mb-1.5">
              {getCategoryIcon(work.category)}
              <span>{work.category}</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-400">{work.type}</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {work.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800 transition-colors"
            aria-label="Tutup jendela rincian karya"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-stone-300 leading-relaxed">
          {/* Status Banner */}
          <div className="p-3.5 bg-rose-950/40 border border-rose-900/50 rounded-xl text-xs text-rose-200 flex items-center justify-between">
            <span className="font-medium">Format Karya: Teks Dokumentasi Teknis</span>
            <span className="text-stone-400 font-mono">{work.statusText}</span>
          </div>

          {/* Ringkasan */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-rose-400" />
              <span>Ringkasan Karya</span>
            </h4>
            <p className="text-stone-300 bg-stone-950/50 p-4 rounded-xl border border-stone-800/80">
              {work.shortDescription}
            </p>
          </div>

          {/* Pendekatan Rekayasa */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-rose-400" />
              <span>Pendekatan Rekayasa &amp; Metode Solusi</span>
            </h4>
            <p className="text-stone-300 bg-stone-950/50 p-4 rounded-xl border border-stone-800/80">
              {work.engineeringApproach}
            </p>
          </div>

          {/* Tantangan Teknis yang Dipecahkan */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-rose-400" />
              <span>Tantangan Teknis yang Dipecahkan</span>
            </h4>
            <ul className="space-y-2 bg-stone-950/50 p-4 rounded-xl border border-stone-800/80">
              {work.technicalChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span className="text-stone-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pembelajaran Kunci */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-rose-400" />
              <span>Pembelajaran Kunci (Learning Skills)</span>
            </h4>
            <ul className="space-y-2 bg-stone-950/50 p-4 rounded-xl border border-stone-800/80">
              {work.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span className="text-stone-300">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Konsep Kode yang Diterapkan */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-rose-400" />
              <span>Konsep Kode yang Relevan (Hobi Coding)</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {work.codeConcepts.map((concept, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-mono bg-stone-950 border border-stone-800 text-rose-300 rounded-lg"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-800 bg-stone-950 flex items-center justify-between">
          <span className="text-xs text-stone-400">
            Penulis: Adonia Khanza
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-rose-900 hover:bg-rose-800 rounded-lg transition-colors"
          >
            Tutup Dokumentasi
          </button>
        </div>
      </div>
    </div>
  );
};
