import { Calendar, Clock, Trophy, Star, Zap } from 'lucide-react';

export default function CANProgramSection() {
  const emissions = [
    {
      number: 1,
      title: 'Match 1 - Algérie',
      date: '24 décembre 2024',
      type: 'Phase de groupes',
      gradient: 'from-cyan-500 to-blue-600',
      icon: Star
    },
    {
      number: 2,
      title: 'Match 2 - Algérie',
      date: '28 décembre 2024',
      type: 'Phase de groupes',
      gradient: 'from-blue-500 to-indigo-600',
      icon: Star
    },
    {
      number: 3,
      title: 'Match 3 - Algérie',
      date: '31 décembre 2024',
      type: 'Phase de groupes',
      gradient: 'from-indigo-500 to-purple-600',
      icon: Star
    },
    {
      number: 4,
      title: 'Quart de Finale',
      date: 'À confirmer',
      type: 'Phase finale',
      gradient: 'from-purple-500 to-pink-600',
      icon: Trophy
    },
    {
      number: 5,
      title: 'Demi-Finale',
      date: 'À confirmer',
      type: 'Phase finale',
      gradient: 'from-pink-500 to-orange-600',
      icon: Trophy
    },
    {
      number: 6,
      title: 'Finale',
      date: 'À confirmer',
      type: 'Phase finale',
      gradient: 'from-orange-500 to-red-600',
      icon: Trophy
    }
  ];

  return (
    <section id="program" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
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

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-300 uppercase inline-block px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6 md:mb-8">
            Le Programme
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight px-4">
            6 émissions live<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              pour la CAN 2026
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Suivez toute la compétition avec Mohamed Henni et OCTOGOAL
          </p>
        </div>

        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-cyan-400/20 h-full flex flex-col items-center justify-center text-center min-h-[180px]">
                <Clock className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 mb-4" />
                <p className="text-3xl sm:text-4xl font-black text-white mb-2">60-90 min</p>
                <p className="text-sm sm:text-base text-slate-400 font-semibold">Durée par émission</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/40 to-indigo-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-blue-400/20 h-full flex flex-col items-center justify-center text-center min-h-[180px]">
                <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mb-4" />
                <p className="text-3xl sm:text-4xl font-black text-white mb-2">En direct</p>
                <p className="text-sm sm:text-base text-slate-400 font-semibold">+ rediffusion</p>
              </div>
            </div>

            <div className="relative group sm:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/40 to-purple-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-indigo-400/20 h-full flex flex-col items-center justify-center text-center min-h-[180px]">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-400 mb-4" />
                <p className="text-3xl sm:text-4xl font-black text-white mb-2">3 + 3</p>
                <p className="text-sm sm:text-base text-slate-400 font-semibold">Matchs Algérie + Phases finales</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-10 md:mb-12 text-white">
            Les 6 dates à retenir
          </h3>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {emissions.map((emission, index) => {
              const Icon = emission.icon;
              return (
                <div key={index} className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${emission.gradient} opacity-30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all`}></div>
                  <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${emission.gradient} flex items-center justify-center shadow-2xl`}>
                        <span className="text-2xl sm:text-3xl font-black text-white">{emission.number}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`w-5 h-5 bg-gradient-to-br ${emission.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                          <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${emission.gradient} bg-clip-text text-transparent`}>
                            {emission.type}
                          </span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-black text-white mb-3 leading-tight">
                          {emission.title}
                        </h4>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm sm:text-base font-semibold">{emission.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-indigo-500/40 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-cyan-400/30">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6 sm:mb-8 text-white">
              Format de l'émission
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                'Débrief complet du match',
                'Réactions à chaud de Momo',
                'Compo et analyse tactique',
                'Notes des joueurs',
                'Top moments & highlights',
                'Séquences sponsorisées intégrées'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-900/50 rounded-xl p-4 border border-cyan-400/10">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                  <p className="text-base sm:text-lg text-white font-semibold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
