import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface Episode {
  ep: string;
  title: string;
  videoId: string;
  thumbnail: string;
}

const episodes: Episode[] = [
  { ep: 'EP01', title: 'Le Classico', videoId: 'lbnBCzRrlGg', thumbnail: 'https://i.ytimg.com/vi/lbnBCzRrlGg/hqdefault.jpg' },
  { ep: 'EP03', title: "L'Algérie fait trembler l'Afrique", videoId: 'N2sntkVGvY0', thumbnail: 'https://i.ytimg.com/vi/N2sntkVGvY0/hqdefault.jpg' },
  { ep: 'EP04', title: "L'Algérie va gagner la CAN", videoId: 'aIStLalPrSg', thumbnail: 'https://i.ytimg.com/vi/aIStLalPrSg/hqdefault.jpg' },
  { ep: 'EP05', title: 'Débrief Algérie vs RDC', videoId: 'qip4oKBARak', thumbnail: 'https://i.ytimg.com/vi/qip4oKBARak/hqdefault.jpg' },
  { ep: 'EP06', title: "L'Algérie est éliminée", videoId: 'm85LBJ75Lwk', thumbnail: 'https://i.ytimg.com/vi/m85LBJ75Lwk/hqdefault.jpg' },
  { ep: 'EP07', title: 'Je porte le maillot du Maroc', videoId: 'JjSHKRAYiWo', thumbnail: 'https://i.ytimg.com/vi/JjSHKRAYiWo/hqdefault.jpg' },
];

export default function EmissionsSection() {
  const [activeEp, setActiveEp] = useState(4);

  return (
    <section id="emissions" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      {/* Subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* ──────────────────── LIVES SECTION ──────────────────── */}
        <div className="mb-24 sm:mb-32">
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">Les émissions live</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Le show qui a captivé la CAN 2025
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mb-12">
            Chaque émission de 60-90 min, diffusée en simultané sur YouTube, TikTok, Meta et Twitch. Un pic à 11 100 viewers simultanés sur TikTok.
          </p>

          {/* Player */}
          <div className="mb-6 rounded-2xl overflow-hidden border border-gray-800 bg-black">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${episodes[activeEp].videoId}?rel=0&modestbranding=1`}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title={episodes[activeEp].title}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/80 border-t border-gray-800">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-[11px] font-bold tracking-wider uppercase text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded flex-shrink-0">{episodes[activeEp].ep}</span>
                <span className="text-sm font-semibold text-white truncate">{episodes[activeEp].title}</span>
              </div>
              <a href={`https://www.youtube.com/watch?v=${episodes[activeEp].videoId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors flex-shrink-0">
                YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Episode thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {episodes.map((ep, i) => (
              <button
                key={ep.videoId}
                onClick={() => setActiveEp(i)}
                className={`group relative rounded-xl overflow-hidden border transition-all ${
                  i === activeEp ? 'border-pink-500 ring-1 ring-pink-500/30' : 'border-gray-800 hover:border-gray-600'
                }`}
              >
                <div className="aspect-video">
                  <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  {i === activeEp && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 text-black fill-black ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-2 bg-gray-900">
                  <p className={`text-[10px] font-bold ${i === activeEp ? 'text-pink-400' : 'text-gray-500'}`}>{ep.ep}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ──────────────────── SHORTS / CLIPS SECTION ──────────────────── */}
        <div>
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">Vidéos courtes — Le format roi</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Les clips qui ont explosé
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mb-12">
            48 capsules TikTok, des dizaines de Reels et Shorts : le format court a été le moteur de la viralité OCTOGOAL.
          </p>

          {/* Real YouTube Shorts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: 'LmQkQC8cApI', label: 'Short #1' },
              { id: 'u4zQjLjsJ1Q', label: 'Short #2' },
              { id: 'Vt6Lj4ZJP1U', label: 'Short #3' },
            ].map((short) => (
              <div key={short.id} className="relative aspect-[9/16] rounded-2xl border border-gray-800 overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={short.label}
                />
              </div>
            ))}
          </div>

          {/* Caption */}
          <p className="text-sm text-gray-400 text-center mt-6">
            <span className="font-display font-bold text-white">48</span> capsules. <span className="font-display font-bold text-white">35.9M</span> de vues. Le format court qui explose.
          </p>
        </div>
      </div>
    </section>
  );
}
