import { ArrowRight, Calendar, Trophy, Tv, Zap } from 'lucide-react';

export default function ProjectionsSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projections" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-4">Et maintenant ?</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          La suite OCTOGOAL
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mb-16">
          La CAN n'était que le début. OCTOGOAL prépare une saison complète de contenus — Ligue des Champions, Coupe du Monde 2026 — avec une montée en puissance massive.
        </p>

        {/* Timeline / Roadmap */}
        <div className="space-y-6 mb-16">
          {/* Ligue des Champions */}
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-colors overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-violet-500" />
            <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-violet-400" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-violet-400 bg-violet-500/10 px-2.5 py-0.5 rounded">Prochainement</span>
                  <span className="text-xs text-gray-600">Avant la Coupe du Monde</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white mb-2">Ligue des Champions — 5 à 7 émissions</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                  OCTOGOAL couvrira les grands matchs de la Ligue des Champions avec le même format qui a cartonné pendant la CAN : lives multiplateforme, débriefs, réactions, vidéos courtes virales.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-gray-800/50 text-center">
                  <p className="font-display text-2xl font-black text-white">5-7</p>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Émissions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coupe du Monde */}
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-colors overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-orange-500" />
            <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-orange-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Tv className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded">Été 2026</span>
                  <span className="text-xs text-gray-600">Coupe du Monde USA/Canada/Mexique</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white mb-2">Coupe du Monde 2026 — La quotidienne</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                  OCTOGOAL passera en mode quotidien pour la Coupe du Monde : un live par jour pendant toute la compétition. Le plus grand événement sportif au monde couvert par le média le plus engageant du foot français.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/5 to-orange-500/5 border border-gray-800 text-center">
                  <p className="font-display text-2xl font-black bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">30+</p>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Émissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projection stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 text-center">
            <Calendar className="w-5 h-5 text-violet-500/60 mx-auto mb-3" />
            <p className="font-display text-3xl sm:text-4xl font-black text-white">40+</p>
            <p className="text-sm font-semibold text-gray-300 mt-1">Émissions prévues</p>
            <p className="text-xs text-gray-600">LDC + Coupe du Monde</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 text-center">
            <Zap className="w-5 h-5 text-violet-500/60 mx-auto mb-3" />
            <p className="font-display text-3xl sm:text-4xl font-black text-white">×10</p>
            <p className="text-sm font-semibold text-gray-300 mt-1">Volume projeté</p>
            <p className="text-xs text-gray-600">vs CAN 2025</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 text-center">
            <Trophy className="w-5 h-5 text-violet-500/60 mx-auto mb-3" />
            <p className="font-display text-3xl sm:text-4xl font-black text-white">CDM 2026</p>
            <p className="text-sm font-semibold text-gray-300 mt-1">Le rendez-vous majeur</p>
            <p className="text-xs text-gray-600">Plus gros événement sportif mondial</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-violet-500/5 via-gray-900/50 to-orange-500/5 border border-gray-800 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-3">
            Positionnez votre marque maintenant
          </h3>
          <p className="text-base text-gray-400 max-w-xl mx-auto mb-8">
            Les premiers partenaires bénéficieront d'un positionnement privilégié sur l'ensemble du calendrier OCTOGOAL 2025-2026.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2.5 px-7 py-4 bg-violet-500 hover:bg-violet-400 text-black font-bold text-sm rounded-xl transition-all duration-200"
          >
            Réserver votre place
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
