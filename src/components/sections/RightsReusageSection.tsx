import { Share2, Repeat, Users, Mail, Calendar, CheckCircle, Sparkles } from 'lucide-react';

export default function RightsReusageSection() {
  return (
    <section id="rights" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-100 via-white to-slate-50 overflow-hidden">
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
          <span className="text-xs sm:text-sm font-bold tracking-widest text-green-600 uppercase inline-block px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6 md:mb-8">
            Droits & Réutilisation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-6 md:mb-8 leading-tight px-4">
            Maximisez votre investissement
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Des droits étendus pour une exploitation maximale
          </p>
        </div>

        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-slate-200 shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10 md:mb-12">
                <Share2 className="w-12 h-12 sm:w-16 sm:h-16 text-green-600" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
                  Vos droits d'utilisation
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    icon: Repeat,
                    title: 'Réutilisation des extraits',
                    desc: 'Tous les contenus sponsorisés peuvent être republiés sur vos propres réseaux sociaux',
                    gradient: 'from-green-500 to-emerald-600'
                  },
                  {
                    icon: Share2,
                    title: 'Réutilisation des carrousels',
                    desc: 'Les visuels et carrousels sponsorisés sont disponibles pour vos canaux de communication',
                    gradient: 'from-emerald-500 to-teal-600'
                  },
                  {
                    icon: Users,
                    title: 'Posts collaboratifs',
                    desc: 'Publication en collaboration officielle avec Mohamed Henni sur les réseaux',
                    gradient: 'from-teal-500 to-cyan-600'
                  },
                  {
                    icon: Sparkles,
                    title: 'Cross-posting',
                    desc: 'Diffusion simultanée sur les comptes de votre marque avec mention d\'Octogoal',
                    gradient: 'from-cyan-500 to-blue-600'
                  },
                  {
                    icon: Mail,
                    title: 'Intégration CRM',
                    desc: 'Utilisation dans vos newsletters et communications digitales auprès de vos clients',
                    gradient: 'from-blue-500 to-indigo-600'
                  },
                  {
                    icon: Calendar,
                    title: 'Durée d\'exploitation',
                    desc: 'Droits valables pendant toute la CAN + 30 jours supplémentaires après la compétition',
                    gradient: 'from-indigo-500 to-purple-600'
                  }
                ].map((right, index) => {
                  const Icon = right.icon;
                  return (
                    <div key={index} className="relative group">
                      <div className={`absolute -inset-1 bg-gradient-to-br ${right.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all`}></div>
                      <div className="relative bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 h-full">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${right.gradient} flex items-center justify-center mb-5 shadow-xl`}>
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-3">{right.title}</h4>
                        <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{right.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center mb-8 sm:mb-10">
                Ce que cela signifie pour vous
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  {
                    number: '2x',
                    label: 'Double impact',
                    desc: 'Octogoal + vos canaux'
                  },
                  {
                    number: '∞',
                    label: 'Réutilisation',
                    desc: 'Contenus exploitables'
                  },
                  {
                    number: '60+',
                    label: 'Jours d\'usage',
                    desc: 'CAN + 30 jours après'
                  },
                  {
                    number: '100%',
                    label: 'ROI optimisé',
                    desc: 'Exploitation maximale'
                  }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <p className="text-4xl sm:text-5xl font-black text-cyan-400 mb-2">{stat.number}</p>
                    <p className="text-base sm:text-lg font-bold text-white mb-2">{stat.label}</p>
                    <p className="text-sm text-slate-400 font-medium">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute -inset-3 bg-gradient-to-r from-green-500/40 via-emerald-500/40 to-teal-500/40 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-green-400/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
                  Liberté totale d'exploitation
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                  Multipliez les points de contact avec votre audience en redistribuant l'ensemble des contenus sponsorisés sur vos propres canaux. Un investissement qui travaille pour vous bien au-delà de la diffusion initiale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
