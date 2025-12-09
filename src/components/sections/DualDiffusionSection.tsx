import { Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function DualDiffusionSection() {
  return (
    <section id="diffusion" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-100 via-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="https://res.cloudinary.com/dafo6bvhc/video/upload/v1764092466/d928c6b7-f494-4466-81f2-040f32b9eadc_1_mseork.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6 md:mb-8">
            Double Diffusion
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-6 md:mb-8 leading-tight px-4">
            Le meilleur des deux mondes
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Tous les contenus sponsorisés seront publiés sur les deux écosystèmes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-200/50 to-blue-200/50 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all"></div>
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-200 shadow-2xl h-full">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 text-center mb-6">
                Réseaux de Mohamed Henni
              </h3>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-cyan-200 mb-6">
                <p className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-3 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  11M+
                </p>
                <p className="text-base sm:text-lg text-center text-slate-700 font-bold">Followers actifs</p>
              </div>
              <ul className="space-y-3">
                {[
                  'Audience installée et engagée',
                  'Communauté ultra-fidèle',
                  'Crédibilité et autorité maximales',
                  'Portée immédiate garantie'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                    <span className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-orange-200/50 to-pink-200/50 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all"></div>
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-200 shadow-2xl h-full">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-xl">
                  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 text-center mb-6">
                Média OCTOGOAL
              </h3>
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-orange-200 mb-6">
                <p className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-3 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Nouveau
                </p>
                <p className="text-base sm:text-lg text-center text-slate-700 font-bold">Audience en croissance</p>
              </div>
              <ul className="space-y-3">
                {[
                  'Construction d\'une nouvelle audience',
                  'Identité de marque propre',
                  'Contenu structuré et premium',
                  'Potentiel de croissance exponentiel'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <span className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-orange-500/40 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-white/10 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mb-6 sm:mb-8" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8">
                  Les bénéfices pour votre marque
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
                  {[
                    {
                      title: 'Portée immédiate massive',
                      desc: 'Accès instantané à 11M+ followers de Momo'
                    },
                    {
                      title: 'Double exposition',
                      desc: 'Votre marque visible sur deux canaux simultanément'
                    },
                    {
                      title: 'Audience diversifiée',
                      desc: 'Touchez différents segments de fans de foot'
                    },
                    {
                      title: 'Investissement futur',
                      desc: 'Positionnement sur le nouveau média en croissance'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-left">
                      <div className="flex items-start gap-3 mb-3">
                        <ArrowRight className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <h4 className="text-lg sm:text-xl font-black text-white">{benefit.title}</h4>
                      </div>
                      <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-10 md:p-12 border border-blue-400/30 shadow-2xl">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center text-white leading-tight">
              💡 Une stratégie gagnante : maximiser l'impact aujourd'hui tout en investissant dans l'écosystème média de demain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
