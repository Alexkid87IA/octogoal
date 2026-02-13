import { Play, Image as ImageIcon, FileText, Zap, Tv, Smartphone, Globe, Newspaper } from 'lucide-react';

export default function MultiformatSection() {
  return (
    <section id="multiformat" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-4">L'univers de contenu</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          On tape partout
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mb-16">
          OCTOGOAL ne se limite pas aux lives. C'est un écosystème complet : vidéos longues, clips viraux, visuels, carrousels, articles SEO — chaque format est pensé pour maximiser la portée et l'engagement.
        </p>

        {/* ──────── FORMAT GRID ──────── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">

          {/* ── ÉMISSIONS LIVE ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <Tv className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Émissions Live</h3>
                  <p className="text-xs text-gray-500">60-90 min · YouTube, TikTok, Facebook, Twitch</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[1, 2].map((i) => (
                  <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-800 flex items-center justify-center group hover:border-violet-500/20 transition-colors">
                    <div className="text-center">
                      <Play className="w-6 h-6 text-violet-400/40 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-600">Capture live {i}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400"><span className="font-display font-bold text-white">7</span> émissions CAN</span>
                <span className="text-gray-500">Pic : <span className="text-violet-400 font-semibold">11.1K</span> viewers</span>
              </div>
            </div>
          </div>

          {/* ── VIDÉOS MID-FORMAT ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center">
                  <Play className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Vidéos Mid-Format</h3>
                  <p className="text-xs text-gray-500">10-15 min · Résumés, analyses, débriefs</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-800 flex items-center justify-center group hover:border-pink-500/20 transition-colors">
                    <div className="text-center">
                      <Play className="w-5 h-5 text-pink-400/40 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-600">Vidéo {i}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400"><span className="font-display font-bold text-white">38</span> capsules YouTube</span>
                <span className="text-gray-500"><span className="text-pink-400 font-semibold">5,1M</span> vues · <span className="text-pink-400 font-semibold">57%</span> rétention</span>
              </div>
            </div>
          </div>

          {/* ── SHORTS / REELS / TIKTOK ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Shorts, Reels & TikToks</h3>
                  <p className="text-xs text-gray-500">30-90 sec · Le format roi de la viralité</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[9/16] rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-800 flex items-center justify-center group hover:border-indigo-500/20 transition-colors">
                    <div className="text-center">
                      <Smartphone className="w-4 h-4 text-indigo-400/40 mx-auto mb-1" />
                      <p className="text-[9px] text-gray-600">Short {i}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400"><span className="font-display font-bold text-white">48</span> TikToks + Reels</span>
                <span className="text-gray-500"><span className="text-indigo-400 font-semibold">31M</span> vues · <span className="text-indigo-400 font-semibold">232K</span> partages</span>
              </div>
            </div>
          </div>

          {/* ── VISUELS & CARROUSELS ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Visuels & Carrousels</h3>
                  <p className="text-xs text-gray-500">Compositions, scores, Top 5, infographies</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {['Compo', 'Score', 'Top 5'].map((label) => (
                  <div key={label} className="aspect-square rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-800 flex items-center justify-center group hover:border-rose-500/20 transition-colors">
                    <div className="text-center">
                      <ImageIcon className="w-5 h-5 text-rose-400/40 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-600">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400"><span className="font-display font-bold text-white">235</span> photos publiées</span>
                <span className="text-gray-500"><span className="text-rose-400 font-semibold">383K</span> impressions / post</span>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── ARTICLES + SNAPCHAT ROW ──────── */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {/* Articles */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Articles Web</h3>
                  <p className="text-xs text-gray-500">Site octogoal.media · SEO optimisé</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {['Analyse : Le parcours de l\'Algérie à la CAN', 'Débrief : Les révélations de la compétition', 'Top : Les meilleurs moments OCTOGOAL'].map((title, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/40 border border-gray-800 hover:border-amber-500/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <Newspaper className="w-4 h-4 text-amber-400/40" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-300 line-clamp-1">{title}</p>
                      <p className="text-[10px] text-gray-600">Article · Image placeholder</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-display font-bold text-white">6+</span> articles sponsorisables · Backlinks SEO · Visibilité permanente
              </p>
            </div>
          </div>

          {/* Snapchat */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Snapchat Shows</h3>
                  <p className="text-xs text-gray-500">Stories & Shows · Canal de découverte</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[9/16] rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-800 flex items-center justify-center group hover:border-yellow-500/20 transition-colors">
                    <div className="text-center">
                      <Smartphone className="w-4 h-4 text-yellow-400/40 mx-auto mb-1" />
                      <p className="text-[9px] text-gray-600">Story {i}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400"><span className="font-display font-bold text-white">13</span> publications</span>
                <span className="text-gray-500"><span className="text-yellow-400 font-semibold">1,47M</span> vues uniques</span>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── TOTAL RECAP BAR ──────── */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-6">Bilan multi-format · CAN 2025</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Émissions live', value: '7', color: 'text-violet-400' },
              { label: 'Capsules vidéo', value: '38', color: 'text-pink-400' },
              { label: 'TikToks / Reels', value: '48+', color: 'text-indigo-400' },
              { label: 'Photos / Visuels', value: '235', color: 'text-rose-400' },
              { label: 'Articles web', value: '6+', color: 'text-amber-400' },
              { label: 'Stories Snap', value: '13', color: 'text-yellow-400' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className={`font-display text-2xl sm:text-3xl font-black ${item.color}`}>{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              <span className="font-display font-bold text-white text-lg">452</span> publications au total ·
              <span className="font-display font-bold text-white text-lg"> 239M</span> impressions ·
              <span className="font-display font-bold text-white text-lg"> 134M</span> vues ·
              <span className="font-display font-bold text-white text-lg"> 8M</span> interactions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
