import { Globe, Tv, Smartphone, MessageSquare, Ghost, Monitor } from 'lucide-react';

const platforms = [
  { name: 'YouTube', icon: Tv, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', desc: 'Lives · Mid-format · Shorts' },
  { name: 'TikTok', icon: Smartphone, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', desc: 'Shorts · Clips viraux' },
  { name: 'Meta', icon: Globe, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', desc: 'Facebook · Instagram · Reels' },
  { name: 'Snapchat', icon: Ghost, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', desc: 'Stories · Shows' },
  { name: 'X', icon: MessageSquare, color: 'text-gray-300', bg: 'bg-gray-500/10', border: 'border-gray-500/20', desc: 'Tweets · Threads · Live' },
  { name: 'Site internet', icon: Monitor, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20', desc: 'octogoal.media' },
];

const calendar = [
  {
    timing: 'J-1',
    label: 'Avant match',
    color: 'text-amber-400',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/10',
    dot: 'bg-amber-400',
    contents: ['Compositions probables', 'Pronostics & sondages', 'Previews vidéo', 'Stories teasing'],
    platforms: ['Meta', 'TikTok', 'X', 'Snapchat'],
  },
  {
    timing: 'Jour J',
    label: 'Jour de match',
    color: 'text-red-400',
    bg: 'bg-red-500/5',
    border: 'border-red-500/10',
    dot: 'bg-red-400',
    contents: ['Émission live 60-90 min', 'Réactions temps réel', 'Score & mi-temps', 'Clips live instantanés'],
    platforms: ['YouTube', 'TikTok', 'Meta', 'X'],
  },
  {
    timing: 'J+1',
    label: 'Après match',
    color: 'text-blue-400',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/10',
    dot: 'bg-blue-400',
    contents: ['Débrief & analyse vidéo', 'Highlights & best-of', 'Carrousels résumé', 'Articles & SEO'],
    platforms: ['YouTube', 'TikTok', 'Meta', 'Snapchat'],
  },
  {
    timing: 'Continu',
    label: 'Hors match',
    color: 'text-green-400',
    bg: 'bg-green-500/5',
    border: 'border-green-500/10',
    dot: 'bg-green-400',
    contents: ['Infos & transferts', 'Tops & classements', 'Engagement communauté', 'Articles de fond'],
    platforms: ['Meta', 'X', 'TikTok', 'Snapchat'],
  },
];

function PlatformBadge({ name, small }: { name: string; small?: boolean }) {
  const p = platforms.find((pl) => pl.name === name);
  if (!p) return null;
  const Icon = p.icon;
  return (
    <div className={`inline-flex items-center gap-1.5 ${small ? 'px-2 py-1' : 'px-2.5 py-1.5'} rounded-full ${p.bg} ${p.border} border`}>
      <Icon className={`${small ? 'w-3 h-3' : 'w-3.5 h-3.5'} ${p.color}`} />
      <span className={`${small ? 'text-[10px]' : 'text-xs'} font-medium ${p.color}`}>{name}</span>
    </div>
  );
}

export default function MultiformatSection() {
  return (
    <section id="multiformat" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">L'écosystème de contenu</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Une machine à contenu
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Chaque match est une opportunité éditoriale. Avant, pendant, après — OCTOGOAL produit et diffuse sur 6 plateformes simultanément.
          </p>
        </div>

        {/* ──────── HUB VISUAL ──────── */}
        <div className="relative mb-20">
          {/* Center: Website */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-2xl" />
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 border border-pink-500/30 flex flex-col items-center justify-center">
                <span className="font-display text-base sm:text-lg font-black tracking-wide bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">OCTOGOAL</span>
              </div>
            </div>
          </div>

          {/* Platform grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {platforms.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className={`group p-4 sm:p-5 rounded-2xl ${p.bg} border ${p.border} hover:border-opacity-50 transition-all text-center`}
                >
                  <div className={`w-10 h-10 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <p className={`font-display text-sm font-bold ${p.color} mb-0.5`}>{p.name}</p>
                  <p className="text-[10px] text-gray-500">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ──────── CONTENT CALENDAR ──────── */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="font-display text-xl sm:text-2xl font-black text-white mb-2">
              Le calendrier éditorial
            </h3>
            <p className="text-sm text-gray-500">
              Chaque moment a son format. Chaque plateforme a son contenu.
            </p>
          </div>

          <div className="space-y-4">
            {calendar.map((row) => (
              <div
                key={row.timing}
                className={`rounded-2xl border ${row.border} ${row.bg} overflow-hidden`}
              >
                <div className="p-5 sm:p-6">
                  {/* Row header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${row.dot} flex-shrink-0`} />
                      <div>
                        <span className={`font-display text-base sm:text-lg font-bold ${row.color}`}>{row.timing}</span>
                        <span className="text-sm text-gray-500 ml-2">— {row.label}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:ml-auto">
                      {row.platforms.map((pName) => (
                        <PlatformBadge key={pName} name={pName} small />
                      ))}
                    </div>
                  </div>

                  {/* Content types */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {row.contents.map((content) => (
                      <div
                        key={content}
                        className="px-3 py-2.5 rounded-xl bg-gray-800/40 border border-gray-800/60"
                      >
                        <p className="text-xs font-medium text-gray-300">{content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ──────── VOLUME RECAP ──────── */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-6 text-center">Volume CAN 2025 — 3 semaines</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {[
              { value: '7', label: 'Lives', color: 'text-red-400' },
              { value: '38', label: 'Vidéos', color: 'text-pink-400' },
              { value: '48+', label: 'Shorts', color: 'text-indigo-400' },
              { value: '235', label: 'Visuels', color: 'text-blue-400' },
              { value: '6+', label: 'Articles', color: 'text-amber-400' },
              { value: '13', label: 'Snaps', color: 'text-yellow-400' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className={`font-display text-2xl sm:text-3xl font-black ${item.color}`}>{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6 pt-6 border-t border-gray-800">
            <span className="font-display font-bold text-white text-lg">452</span> contenus publiés sur <span className="font-display font-bold text-white text-lg">6</span> plateformes en <span className="font-display font-bold text-white text-lg">3</span> semaines
          </p>
        </div>
      </div>
    </section>
  );
}
