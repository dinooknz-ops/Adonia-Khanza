import React, { useState } from 'react';
import { Instagram, Copy, Check, ExternalLink, ArrowRight, MessageSquare, Send, ShieldCheck } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const PublicLinks: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const instagramData = PERSONAL_DATA.publicLinks.instagram;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(instagramData.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulateMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formMessage.trim()) return;

    // Because this is a static site without a backend, we prepare the message
    // and guide user to send it via Instagram DM or copied draft
    setSentNotice(true);
  };

  return (
    <section
      id="tautan"
      className="py-24 border-b border-stone-800/60 bg-stone-950/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
            <span>Koneksi &amp; Jejaring</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Bagian 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tautan Publik &amp; Kontak
          </h2>
          <p className="mt-3 text-stone-300 leading-relaxed">
            Terhubung langsung dengan saya melalui kanal publik resmi. Mari berdiskusi seputar 
            dunia <strong className="text-white">teknologi</strong>, proyek <strong className="text-white">rekayasa</strong>, 
            maupun pengalaman dalam <strong className="text-rose-300">coding</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Public Link Card (Instagram) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-br from-stone-900/90 via-stone-900/80 to-rose-950/30 border border-stone-800 hover:border-rose-800/80 rounded-2xl p-6 sm:p-8 transition-all shadow-xl">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-900 to-rose-700 border border-rose-600/60 flex items-center justify-center text-white shadow-md shadow-rose-950">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Instagram Resmi
                    </h3>
                    <p className="text-xs text-rose-300 font-mono">
                      @{instagramData.handle}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-stone-300 bg-stone-950/80 px-2.5 py-1 rounded-md border border-stone-800">
                  Tautan Publik Terverifikasi
                </span>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed mb-6">
                Ikuti pembaruan terkini, aktivitas harian, serta proses belajar dan eksplorasi rekayasa saya secara berkala melalui profil Instagram.
              </p>

              {/* Action Buttons for Instagram */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-800/80">
                <a
                  href={instagramData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-rose-800 hover:bg-rose-700 active:bg-rose-900 rounded-xl transition-all shadow-md shadow-rose-950/50"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Kunjungi @{instagramData.handle}</span>
                  <ExternalLink className="w-4 h-4 text-rose-300" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-stone-200 hover:text-white bg-stone-950/80 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 rounded-xl transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-400" />
                      <span>Salin URL</span>
                    </>
                  )}
                </button>
              </div>

              {/* URL Display */}
              <div className="mt-4 p-3 bg-stone-950/80 border border-stone-850 rounded-xl flex items-center justify-between text-xs font-mono text-stone-400">
                <span className="truncate">{instagramData.displayUrl}</span>
                <span className="text-rose-400 text-[11px] shrink-0 font-sans ml-2">Tautan Aktif</span>
              </div>
            </div>

            {/* Static Architecture Guarantee */}
            <div className="p-4 bg-stone-900/40 border border-stone-800 rounded-xl flex items-start gap-3 text-xs text-stone-400 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium block mb-0.5">Website Murni Statis</span>
                <span>Berjalan mandiri di sisi peramban tanpa server backend, basis data, atau pelacakan privasi.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Draft Form */}
          <div className="lg:col-span-6">
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-2">
                <MessageSquare className="w-5 h-5 text-rose-400" />
                <h3 className="text-base font-bold text-white">
                  Kirim Pesan / Catatan Diskusi
                </h3>
              </div>
              <p className="text-xs text-stone-400 mb-6 leading-relaxed">
                Tulis pesan Anda untuk Adonia Khanza. Pesan akan disiapkan dan dapat langsung diteruskan via Direct Message Instagram.
              </p>

              {sentNotice ? (
                <div className="p-5 bg-rose-950/40 border border-rose-800/60 rounded-xl space-y-4">
                  <div className="flex items-center gap-2 text-rose-200 text-sm font-semibold">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Draf Pesan Telah Disiapkan!</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Halo {formName || 'Rekan'}, draf pesan Anda sudah siap. Silakan klik tombol di bawah untuk langsung membuka obrolan di Instagram Adonia Khanza.
                  </p>
                  <div className="p-3 bg-stone-950 rounded-lg text-xs font-mono text-stone-300 border border-stone-800">
                    &ldquo;{formMessage}&rdquo;
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <a
                      href={instagramData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-rose-800 hover:bg-rose-700 rounded-lg transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Buka Instagram DM</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(formMessage);
                      }}
                      className="px-4 py-2.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-750 rounded-lg transition-colors"
                    >
                      Salin Teks Pesan
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSentNotice(false);
                        setFormMessage('');
                      }}
                      className="px-3 py-2.5 text-xs text-stone-400 hover:text-white transition-colors"
                    >
                      Tulis Baru
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSimulateMessage} className="space-y-4">
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-medium text-stone-300 mb-1.5">
                      Nama atau Identitas Anda
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-stone-600 focus:outline-none focus:border-rose-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message-input" className="block text-xs font-medium text-stone-300 mb-1.5">
                      Isi Pesan / Topik Diskusi
                    </label>
                    <textarea
                      id="message-input"
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      required
                      placeholder="Tulis gagasan, pertanyaan seputar rekayasa, atau sapaan..."
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-stone-600 focus:outline-none focus:border-rose-700 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-rose-900 hover:bg-rose-800 active:bg-rose-950 rounded-xl transition-all shadow-md shadow-rose-950/40"
                  >
                    <Send className="w-4 h-4 text-rose-300" />
                    <span>Siapkan Pesan untuk Instagram</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
