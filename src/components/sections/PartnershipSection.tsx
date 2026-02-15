import { Eye, Mic, Award, Crown, Star, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function PartnershipSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="partnership" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[600px] h-[400px] bg-pink-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ──────── PARTIE 1 — Intégration marque ──────── */}
        <div className="mb-24 sm:mb-32">
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">Partenariat</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Votre marque au cœur du show
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mb-12">
            3 leviers d'intégration concrets pour une visibilité maximale auprès de la communauté foot.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Présence visuelle */}
            <div className="group relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:bg-white/[0.04] hover:border-pink-500/20 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative">
                <Eye className="w-6 h-6 text-pink-400 mb-4" />
                <h3 className="font-display text-lg font-bold text-white mb-2">Présence visuelle</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Logo en rotation dans les émissions, habillage graphique brandé, intégration dans les génériques et transitions.
                </p>
              </div>
            </div>

            {/* Mentions par Momo */}
            <div className="group relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:bg-white/[0.04] hover:border-blue-500/20 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative">
                <Mic className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-display text-lg font-bold text-white mb-2">Mentions par Momo</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Momo cite votre marque en ouverture et clôture de chaque émission.
                </p>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-xs text-gray-500 italic">
                    "Cette émission est présentée par [MARQUE]"
                  </p>
                </div>
              </div>
            </div>

            {/* Séquences sponsorisées */}
            <div className="group relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative">
                <Award className="w-6 h-6 text-purple-400 mb-4" />
                <h3 className="font-display text-lg font-bold text-white mb-2">Séquences sponsorisées</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Des moments dédiés à votre marque dans le show.
                </p>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-xs text-gray-500 italic">
                    "La Compo du Match by [MARQUE]"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── PARTIE 2 — 3 Formules ──────── */}
        <div className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-12 text-center">
            Nos <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">formules partenaires</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Sponsor Principal */}
            <div className="relative rounded-2xl border border-pink-500/[0.15] bg-gradient-to-br from-pink-500/[0.06] via-white/[0.02] to-transparent backdrop-blur-xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/[0.06] rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 backdrop-blur-sm border border-pink-500/[0.15] flex items-center justify-center">
                    <Crown className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Sponsor Principal</h3>
                    <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">Exclusif annuel</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-5">Le partenaire fil rouge présent sur l'ensemble du dispositif OCTOGOAL.</p>
                <div className="space-y-2.5">
                  {[
                    'Mention dans toutes les vidéos',
                    'Présence dans tous les lives',
                    'Intégration dans les génériques',
                    'Format exclusif co-créé avec Momo',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-bold text-pink-400 uppercase">1 marque max</span>
                </div>
              </div>
            </div>

            {/* Sponsor Premium */}
            <div className="relative rounded-2xl border border-blue-500/[0.15] bg-gradient-to-br from-blue-500/[0.06] via-white/[0.02] to-transparent backdrop-blur-xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-500/[0.15] flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Sponsor Premium</h3>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">1 live/mois + contenu co-créé</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-5">Large visibilité et intégration éditoriale régulière.</p>
                <div className="space-y-2.5">
                  {[
                    'Mention vidéos longues',
                    '1 live / mois sponsorisé',
                    '1 format vidéo co-créé / mois',
                    'Présence sur le site OCTOGOAL',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-bold text-blue-400 uppercase">2 à 4 marques max</span>
                </div>
              </div>
            </div>

            {/* Activation Digitale */}
            <div className="relative rounded-2xl border border-purple-500/[0.15] bg-gradient-to-br from-purple-500/[0.06] via-white/[0.02] to-transparent backdrop-blur-xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/[0.06] rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-500/[0.15] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Activation Digitale</h3>
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Formats viraux</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-5">Formats courts viraux sur TikTok, Reels & Shorts.</p>
                <div className="space-y-2.5">
                  {[
                    '2 vidéos courtes / semaine',
                    'Cross-plateforme (6 réseaux)',
                    'Co-branding visuel',
                    'Sponsoring de rubriques',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-bold text-purple-400 uppercase">Rotation rapide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── CTA ──────── */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-sm rounded-xl transition-all duration-200"
          >
            Discutons de votre projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
