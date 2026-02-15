import { Monitor, Play, Film, Image, Radio, Users, Globe, ArrowRight, TrendingUp } from 'lucide-react';

/* ──────── Touchpoint card ──────── */
function Touchpoint({ icon: Icon, where, how, reach, reachLabel, color, border, glow }: {
  icon: typeof Monitor;
  where: string;
  how: string;
  reach: string;
  reachLabel: string;
  color: string;
  border: string;
  glow: string;
}) {
  return (
    <div className="group relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-opacity-50 transition-all overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-xl ${border} flex items-center justify-center backdrop-blur-sm`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
          <div className="text-right">
            <p className={`font-display text-2xl sm:text-3xl font-black ${color}`}>{reach}</p>
            <p className="text-[10px] text-gray-500 font-semibold">{reachLabel}</p>
          </div>
        </div>
        <h4 className="font-display text-sm font-bold text-white mb-1.5">{where}</h4>
        <p className="text-xs text-gray-400 leading-relaxed">{how}</p>
      </div>
    </div>
  );
}

export default function SponsorProjectionSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sponsor-projection" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-pink-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">Projection sponsor</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          Votre marque, <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">partout</span>
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mb-16">
          Voilà exactement où, comment et devant combien de personnes votre marque apparaît — pour chaque match couvert par OCTOGOAL.
        </p>

        {/* ──────── PARCOURS D'UN MATCH ──────── */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-8">Un match OCTOGOAL = votre marque sur tous les écrans</p>

          {/* Timeline: Avant / Pendant / Après */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {/* AVANT */}
            <div className="relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-500/50" />
              <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">Avant le match</span>
              <h4 className="font-display text-lg font-bold text-white mt-3 mb-3">Teasing & Annonce</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300 font-semibold">Posts d'annonce brandés</p>
                    <p className="text-[10px] text-gray-500">Logo dans les visuels d'annonce sur 6 réseaux</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300 font-semibold">Stories & Reels teasing</p>
                    <p className="text-[10px] text-gray-500">"Ce soir, on est en live grâce à [MARQUE]"</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                <p className="text-[10px] text-gray-500">Reach estimé par match</p>
                <p className="font-display text-lg font-black text-pink-400">~2M impressions</p>
              </div>
            </div>

            {/* PENDANT */}
            <div className="relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-pink-500/[0.15] p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.03] to-blue-500/[0.03] pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Pendant le live</span>
                  <span className="flex items-center gap-1 text-[9px] font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full">
                    <Radio className="w-2.5 h-2.5" /> En direct
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-white mt-3 mb-3">Le show en direct</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-300 font-semibold">Logo à l'écran en continu</p>
                      <p className="text-[10px] text-gray-500">Incrustation dans le décor du plateau + lower third</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-300 font-semibold">Momo vous cite en live</p>
                      <p className="text-[10px] text-gray-500">"Merci à [MARQUE] qui nous accompagne ce soir"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-300 font-semibold">Segment dédié</p>
                      <p className="text-[10px] text-gray-500">"La Compo du Match by [MARQUE]"</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-[10px] text-gray-500">Viewers simultanés</p>
                  <p className="font-display text-lg font-black text-white">jusqu'à 45 000</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">sur 5 plateformes en même temps</p>
                </div>
              </div>
            </div>

            {/* APRÈS */}
            <div className="relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 to-blue-500" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Après le match</span>
              <h4 className="font-display text-lg font-bold text-white mt-3 mb-3">Contenu & Viralité</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300 font-semibold">Capsules YouTube brandées</p>
                    <p className="text-[10px] text-gray-500">Logo dans le générique + description</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300 font-semibold">TikToks & Reels viraux</p>
                    <p className="text-[10px] text-gray-500">Co-branding visuel sur chaque capsule courte</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300 font-semibold">Posts récap multi-plateformes</p>
                    <p className="text-[10px] text-gray-500">Photos, carrousels, articles — votre logo partout</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                <p className="text-[10px] text-gray-500">Reach post-match estimé</p>
                <p className="font-display text-lg font-black text-blue-400">~8M impressions</p>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── VOS POINTS DE CONTACT ──────── */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-3">
            Vos points de contact
          </h3>
          <p className="text-sm text-gray-500 mb-8">Chaque format, son reach, sa visibilité pour votre marque.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Touchpoint
              icon={Radio}
              where="Live multiplateforme"
              how="Logo à l'écran, mentions vocales par Momo, segment brandé. Diffusé simultanément sur YouTube, TikTok, Meta, Twitch, X."
              reach="45K"
              reachLabel="viewers simultanés"
              color="text-pink-400"
              border="bg-pink-500/10 border border-pink-500/[0.15]"
              glow="from-pink-500/[0.04]"
            />
            <Touchpoint
              icon={Play}
              where="Capsules YouTube"
              how="Présence dans le générique d'ouverture et de fermeture, logo en overlay, lien en description."
              reach="134K"
              reachLabel="vues / vidéo en moyenne"
              color="text-red-400"
              border="bg-red-500/10 border border-red-500/[0.15]"
              glow="from-red-500/[0.04]"
            />
            <Touchpoint
              icon={Film}
              where="TikToks & Reels"
              how="Co-branding visuel, intro/outro brandée, mention en caption. Format viral natif."
              reach="748K"
              reachLabel="vues / capsule en moyenne"
              color="text-cyan-400"
              border="bg-cyan-500/10 border border-cyan-500/[0.15]"
              glow="from-cyan-500/[0.04]"
            />
            <Touchpoint
              icon={Image}
              where="Meta (Facebook + Instagram)"
              how="Posts, Reels, Stories, carrousels brandés sur les deux plateformes. Format Reel = 19K interactions/post."
              reach="383K"
              reachLabel="impressions / post"
              color="text-blue-400"
              border="bg-blue-500/10 border border-blue-500/[0.15]"
              glow="from-blue-500/[0.04]"
            />
            <Touchpoint
              icon={Monitor}
              where="Snapchat Discover"
              how="Présence dans le Show Snapchat. Audience discovery : majoritairement de nouveaux viewers."
              reach="113K"
              reachLabel="vues / publication"
              color="text-yellow-400"
              border="bg-yellow-500/10 border border-yellow-500/[0.15]"
              glow="from-yellow-500/[0.04]"
            />
          </div>
        </div>

        {/* ──────── TOTAL PAR MATCH ──────── */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 mb-16 overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-b from-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-3">Au total, pour chaque match couvert</p>
              <p className="font-display text-4xl sm:text-5xl font-black bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">~10M</p>
              <p className="text-lg text-white font-bold">d'impressions par événement</p>
              <p className="text-sm text-gray-500 mt-2">
                Avant, pendant et après le match — votre marque touche des millions de passionnés de foot, majoritairement français, 25-34 ans.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-pink-400" />
                <h4 className="text-sm font-bold text-white">Qui verra votre marque</h4>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: 'Hommes 25-34 ans', value: 'Cœur de cible', tag: '~40%' },
                  { label: 'France', value: 'Audience principale', tag: '50%+' },
                  { label: 'CSP+ passionnés foot', value: 'Pouvoir d\'achat élevé', tag: 'Core' },
                  { label: 'Femmes (TikTok)', value: 'Audience croissante', tag: '43%' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <div>
                      <p className="text-xs text-white font-semibold">{item.label}</p>
                      <p className="text-[10px] text-gray-500">{item.value}</p>
                    </div>
                    <span className="text-[10px] font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ──────── CTA ──────── */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">Prêt à apparaître devant des millions de fans ?</p>
          <button
            onClick={() => scrollToSection('partnership')}
            className="group inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-sm rounded-xl transition-all duration-200"
          >
            Voir les formules partenaires
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
