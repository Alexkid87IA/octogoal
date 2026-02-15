import { useState } from 'react';
import { Globe, Tv, Smartphone, MessageSquare, Ghost, Monitor } from 'lucide-react';

const platforms = [
  { name: 'YouTube', icon: Tv, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', ring: 'ring-red-500/30', desc: 'Lives · Mid-format · Shorts', stat: '134M vues' },
  { name: 'TikTok', icon: Smartphone, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', ring: 'ring-cyan-500/30', desc: 'Shorts · Clips viraux', stat: '35.9M vues' },
  { name: 'Meta', icon: Globe, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', ring: 'ring-blue-500/30', desc: 'Facebook · Instagram · Reels', stat: '127M vues' },
  { name: 'Snapchat', icon: Ghost, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', ring: 'ring-yellow-500/30', desc: 'Stories · Shows', stat: '1.5M vues' },
  { name: 'X', icon: MessageSquare, color: 'text-gray-300', bg: 'bg-gray-500/10', border: 'border-gray-500/20', ring: 'ring-gray-500/30', desc: 'Tweets · Threads · Live', stat: '2.3M impressions' },
  { name: 'Site internet', icon: Monitor, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20', ring: 'ring-pink-500/30', desc: 'octogoal.media', stat: 'Hub central' },
];

export default function MultiformatSection() {
  const [exploded, setExploded] = useState(false);

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

        {/* ──────── INTERACTIVE HUB ──────── */}
        <div className="relative mb-20">
          {/* Center button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setExploded(!exploded)}
              className="group relative cursor-pointer"
            >
              {/* Glow - pulses when not exploded */}
              <div className={`absolute -inset-8 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-2xl transition-all duration-700 ${exploded ? 'opacity-100 scale-110' : 'opacity-60 animate-pulse'}`} />

              {/* Ring animation */}
              <div className={`absolute -inset-4 rounded-full border transition-all duration-700 ${exploded ? 'border-pink-500/30 scale-110' : 'border-pink-500/10 scale-100'}`} />

              {/* Main circle */}
              <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 border border-pink-500/30 flex flex-col items-center justify-center transition-all duration-500 ${exploded ? 'scale-95 from-pink-500/30 to-blue-500/30 shadow-[0_0_60px_rgba(236,72,153,0.3)]' : 'group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]'}`}>
                <span className="font-display text-base sm:text-lg font-black tracking-wide bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  OCTOGOAL
                </span>
                <span className={`text-[10px] font-semibold mt-1 transition-all duration-300 ${exploded ? 'text-pink-400' : 'text-gray-500 group-hover:text-gray-400'}`}>
                  {exploded ? '6 plateformes actives' : 'Appuyez ici'}
                </span>
              </div>
            </button>
          </div>

          {/* Platform cards - hidden until exploded */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className={`group p-4 sm:p-5 rounded-2xl ${p.bg} border ${p.border} text-center transition-all ${
                    exploded
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
                  }`}
                  style={{
                    transitionDuration: '500ms',
                    transitionDelay: exploded ? `${i * 80}ms` : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <div className={`w-10 h-10 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <p className={`font-display text-sm font-bold ${p.color} mb-0.5`}>{p.name}</p>
                  <p className="text-[10px] text-gray-500 mb-2">{p.desc}</p>
                  <p className={`text-[10px] font-bold ${p.color} opacity-70`}>{p.stat}</p>
                </div>
              );
            })}
          </div>

          {/* Hint text */}
          <p className={`text-center text-xs mt-6 transition-all duration-500 ${exploded ? 'text-gray-600' : 'text-gray-500 animate-pulse'}`}>
            {exploded ? 'Un match = 6 plateformes = maximum d\'impact' : 'Cliquez sur OCTOGOAL pour voir l\'écosystème'}
          </p>
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
