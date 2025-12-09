import { Crown, Star, Zap, TrendingUp, Video, Users, Target, Globe, CheckCircle, Sparkles, Award, Package } from 'lucide-react';

export default function AdvertisersSection() {
  return (
    <section id="advertisers" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        >
          <source src="https://res.cloudinary.com/dafo6bvhc/video/upload/v1764092466/d928c6b7-f494-4466-81f2-040f32b9eadc_1_mseork.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-amber-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-6 md:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-500/30">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-300 uppercase">Dispositifs Commerciaux</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-tight px-4">
            <span className="text-white">Devenez partenaire</span><br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              d'OCTOGOAL
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Des formats pensés pour maximiser votre impact et votre visibilité
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/40 to-orange-500/40 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all"></div>
            <div className="relative bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-10 border border-amber-400/30 h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-2xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <p className="text-6xl md:text-7xl font-black text-white mb-4">11M+</p>
              <p className="text-xl font-bold text-amber-200">Audience active</p>
              <p className="text-base text-slate-300 mt-2">Hommes 18-35 ans passionnés de foot</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/40 to-yellow-500/40 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all"></div>
            <div className="relative bg-gradient-to-br from-orange-600/20 to-yellow-600/20 backdrop-blur-xl rounded-3xl p-10 border border-orange-400/30 h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center mb-6 shadow-2xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <p className="text-6xl md:text-7xl font-black text-white mb-4">200M+</p>
              <p className="text-xl font-bold text-orange-200">Impressions/mois</p>
              <p className="text-base text-slate-300 mt-2">Portée organique massive</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-yellow-500/40 to-amber-500/40 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all"></div>
            <div className="relative bg-gradient-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/30 h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center mb-6 shadow-2xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <p className="text-6xl md:text-7xl font-black text-white mb-4">8%+</p>
              <p className="text-xl font-bold text-yellow-200">Taux d'engagement</p>
              <p className="text-base text-slate-300 mt-2">10x supérieur à la moyenne</p>
            </div>
          </div>
        </div>

        <div className="mb-20 animate-fade-in-up px-2">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/40 via-orange-500/40 to-yellow-500/40 rounded-2xl sm:rounded-3xl md:rounded-[3rem] blur-2xl sm:blur-3xl md:blur-[4rem]"></div>
            <div className="relative bg-gradient-to-br from-amber-600/25 to-orange-600/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 border border-amber-400/40 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl animate-pulse">
                  <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 leading-tight">Sponsor Principal</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-200 font-bold leading-tight">LE FIL ROUGE - Partenaire Exclusif Annuel</p>
                </div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 border border-amber-400/30 mb-6 sm:mb-8 shadow-xl">
                <div className="flex items-start gap-3 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">🔒</span>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 leading-tight">UN SEUL MARQUEUR PAR AN</p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-tight">Exclusivité sectorielle garantie (ex : seule banque, seule boisson, seul opérateur)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800/70 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-tight">Mention dans toutes les vidéos longues</p>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800/70 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-tight">Présence dans tous les lives</p>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800/70 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-tight">Intégration dans tous les génériques</p>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800/70 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-tight">Présence sur le site OCTOGOAL</p>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800/70 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-tight">Mention dans tous les carrousels</p>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800/70 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-tight">Branding sur vidéos courtes premium</p>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800/70 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-tight">1 opération spéciale / trimestre</p>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800/70 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-tight">1 format exclusif co-créé avec Momo</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-amber-400/50 shadow-2xl">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white text-center leading-tight">
                    📈 Plusieurs centaines de millions d'impressions annuelles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-white">
            Nos <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">formules partenaires</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/20 hover:border-amber-400/40 transition-all h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-400 font-bold mb-1">LOT 2</p>
                    <p className="text-xl font-black text-white">Sponsor Premium</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">Le partenaire officiel avec large visibilité et intégration éditoriale</p>
                <div className="space-y-3 pt-6 border-t border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Mention vidéos longues</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">1 live / mois</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">1 format vidéo co-créé / mois</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Présence sur le site</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-xs text-amber-400 font-bold">2 à 4 marques max</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/20 hover:border-orange-400/40 transition-all h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-400 font-bold mb-1">LOT 3</p>
                    <p className="text-xl font-black text-white">Partenaires Officiels</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">Parfait pour les budgets moyens avec forte rotation</p>
                <div className="space-y-3 pt-6 border-t border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Placement produit catégorisé</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">4 vidéos / mois sponsorisées</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">2 carrousels / semaine</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">1 publi-rédactionnel</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-xs text-orange-400 font-bold">5 à 10 marques - Cœur du business</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-yellow-400 font-bold mb-1">LOT 4</p>
                    <p className="text-xl font-black text-white">Activation Digital</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">Format viral pour TikTok, Reels & Shorts</p>
                <div className="space-y-3 pt-6 border-t border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">2 vidéos courtes / semaine</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">1 carrousel / jour</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Cross-plateforme (6 réseaux)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Co-branding visuel</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-xs text-yellow-400 font-bold">Ventes massives - Rotation rapide</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-indigo-400/20 hover:border-indigo-400/40 transition-all h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-400 font-bold mb-1">LOT 5</p>
                    <p className="text-xl font-black text-white">Sponsor Live</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">Le meilleur rapport visibilité/prix</p>
                <div className="space-y-3 pt-6 border-t border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Habillage sponsor dans l'émission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Logo sur décor & écrans</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Mention audio & verbale</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Sponsoring d'une rubrique</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-xs text-indigo-400 font-bold">Format TV-like</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-400 font-bold mb-1">FORMAT SPÉCIAL</p>
                    <p className="text-xl font-black text-white">Droits TV Style</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">Formats inspirés du sport pro</p>
                <div className="space-y-3 pt-6 border-t border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Score sponsorisé</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Power Ranking by [Marque]</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Player of the Week</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Top 5 buts sponsorisé</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-xs text-purple-400 font-bold">Crédibilise la marque dans le sport</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/30 to-indigo-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-violet-400/20 hover:border-violet-400/40 transition-all h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-violet-400 font-bold mb-1">LOT 6</p>
                    <p className="text-xl font-black text-white">Sur-mesure</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">Formats créatifs personnalisés</p>
                <div className="space-y-3 pt-6 border-t border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Séries vidéo exclusives</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Mini documentaires</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Défis football avec talents</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Activation événementielle</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-xs text-violet-400 font-bold">Pour marques innovantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 animate-fade-in-up">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/40 via-orange-500/40 to-yellow-500/40 rounded-[3rem] blur-[4rem]"></div>
            <div className="relative bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-amber-400/30">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 mb-8 shadow-2xl">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Pack 360° - LE BLITZ</h3>
                <p className="text-2xl text-amber-200 font-bold">L'offre la plus complète pour un impact maximal</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-bold">Sponsor live OCTOGOAL</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-bold">Sponsor vidéos longues</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-bold">Sponsor vidéos courtes</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-bold">Sponsor site web</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-bold">Sponsor articles éditoriaux</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-bold">Opération spéciale dédiée</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-bold">Contenu co-créé avec Momo</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-bold">Présence physique en plateau</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 border border-amber-400/30">
                <p className="text-2xl md:text-3xl font-black text-white text-center">
                  🔥 Impact maximal sur plus de 200 millions d'impressions mensuelles
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up">
          <div className="mb-12">
            <p className="text-3xl md:text-4xl font-black text-white mb-6">
              Prêt à rejoindre l'écosystème OCTOGOAL ?
            </p>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Contactez-nous pour recevoir notre media kit complet, nos case studies et nos tarifs
            </p>
          </div>
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/50 via-orange-500/50 to-yellow-500/50 rounded-3xl blur-3xl"></div>
            <button className="relative w-full bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl sm:rounded-3xl px-6 sm:px-8 md:px-12 py-6 sm:py-7 md:py-8 shadow-2xl border border-amber-400/30 group hover:scale-105 transition-all">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 break-words leading-tight">Discutons de votre projet</p>
                  <p className="text-amber-100 text-xs sm:text-sm leading-tight">Réponse sous 24h - Media kit sur demande</p>
                </div>
                <Package className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:rotate-12 transition-transform flex-shrink-0" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
