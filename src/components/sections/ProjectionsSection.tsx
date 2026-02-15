import { ArrowRight, Eye, Trophy, Tv, Users, MessageCircle, FileText, Radio } from 'lucide-react';

export default function ProjectionsSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projections" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-pink-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-orange-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">Et maintenant ?</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          La suite OCTOGOAL
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mb-16">
          La CAN n'était que le début. Les places partenaires sont limitées.
        </p>

        {/* ──────── 2 BIG HERO CARDS with trophy images ──────── */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* Ligue des Champions */}
          <div className="group relative rounded-2xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="https://editorial.uefa.com/resources/0297-1d2cdcfebde9-afc90cb2bd8b-1000/fbl-eur-c1-draw.jpeg"
                alt="Trophée Ligue des Champions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/85 to-[#0a0a0f]/40" />
            </div>

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px]" />

            <div className="relative p-8 sm:p-10 min-h-[340px] flex flex-col justify-end">
              {/* Badge */}
              <div className="mb-auto">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-pink-400 bg-pink-500/10 backdrop-blur-md border border-pink-500/20 px-3 py-1.5 rounded-full">
                  <Trophy className="w-3 h-3" />
                  Prochainement
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                  Ligue des Champions
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-md mb-6">
                  OCTOGOAL couvrira les grands matchs de la LDC avec le même format qui a cartonné pendant la CAN : lives multiplateforme, débriefs, réactions, vidéos courtes virales.
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-4">
                  <div className="px-4 py-3 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1]">
                    <p className="font-display text-2xl font-black text-white">5-7</p>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase">Émissions</p>
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1]">
                    <p className="font-display text-2xl font-black text-white">Live</p>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase">5 plateformes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coupe du Monde 2026 */}
          <div className="group relative rounded-2xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="https://www.cnews.fr/sites/default/files/styles/image_750_422/public/iconsport_247062_0006-taille1200_6957ba6012385.jpg?h=e2560e7f&itok=llAI0wAo"
                alt="Coupe du Monde FIFA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/85 to-[#0a0a0f]/40" />
            </div>

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px]" />

            <div className="relative p-8 sm:p-10 min-h-[340px] flex flex-col justify-end">
              {/* Badge */}
              <div className="mb-auto">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-orange-400 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 px-3 py-1.5 rounded-full">
                  <Tv className="w-3 h-3" />
                  Été 2026
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                  Coupe du Monde 2026
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-md mb-6">
                  OCTOGOAL passera en mode quotidien : un live par jour pendant toute la compétition. Le plus grand événement sportif au monde couvert par le média le plus engageant du foot français.
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-md border border-orange-500/20">
                    <p className="font-display text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">30+</p>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase">Émissions</p>
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-md border border-orange-500/20">
                    <p className="font-display text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">1 Md+</p>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase">Vues projetées</p>
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-md border border-orange-500/20">
                    <p className="font-display text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Daily</p>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase">1 live / jour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── PROJECTION CAN → CDM ──────── */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Projection × 10 vs CAN 2025</p>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white">
              Ce que la Coupe du Monde peut générer
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Eye, can: '239M', cdm: '2 Mds+', label: 'Impressions', color: 'text-pink-400', glow: 'from-pink-500/10' },
              { icon: Tv, can: '134M', cdm: '1 Md+', label: 'Vues vidéo', color: 'text-blue-400', glow: 'from-blue-500/10' },
              { icon: MessageCircle, can: '8M', cdm: '80M+', label: 'Interactions', color: 'text-purple-400', glow: 'from-purple-500/10' },
              { icon: Users, can: '198K', cdm: '2M+', label: 'Nouveaux abonnés', color: 'text-green-400', glow: 'from-green-500/10' },
              { icon: FileText, can: '452', cdm: '4 500+', label: 'Publications', color: 'text-amber-400', glow: 'from-amber-500/10' },
              { icon: Radio, can: '45K', cdm: '100K+', label: 'Peak viewers live', color: 'text-orange-400', glow: 'from-orange-500/10' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="group relative p-5 sm:p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:border-white/[0.12] transition-all overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                  <div className="relative">
                    <Icon className={`w-4 h-4 ${item.color} opacity-50 mb-3`} />
                    <p className={`font-display text-2xl sm:text-3xl font-black ${item.color}`}>{item.cdm}</p>
                    <p className="text-sm font-semibold text-gray-300 mt-1">{item.label}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[10px] text-gray-600">CAN 2025 :</span>
                      <span className="text-[10px] font-bold text-gray-500">{item.can}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-gray-600 mt-4">
            Projections basées sur les performances CAN 2025 · 30+ émissions · 5 semaines de compétition · 48 équipes
          </p>
        </div>

        {/* ──────── CTA ──────── */}
        <div className="relative p-8 sm:p-10 rounded-2xl overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/[0.06] via-white/[0.02] to-orange-500/[0.06]" />
          <div className="absolute inset-0 backdrop-blur-xl border border-white/[0.08] rounded-2xl" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-3">
              Positionnez votre marque maintenant
            </h3>
            <p className="text-base text-gray-400 max-w-xl mx-auto mb-8">
              Les premiers partenaires bénéficieront d'un positionnement privilégié sur l'ensemble du calendrier OCTOGOAL 2025-2026.
            </p>
            <button
              onClick={() => scrollToSection('partnership')}
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-sm rounded-xl transition-all duration-200"
            >
              Sécuriser votre place
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
