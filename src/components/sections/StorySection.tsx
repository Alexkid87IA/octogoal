import { Trophy, Star, Users, TrendingUp, Image } from 'lucide-react';
import BackgroundEffects from '../layout/BackgroundEffects';

export default function StorySection() {
  return (
    <section id="story" className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white overflow-hidden">
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
      <BackgroundEffects variant="hero" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-300 uppercase inline-block px-3 sm:px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6 md:mb-8">
            L'histoire
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight px-4">
            À la base,<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              il y avait Momo
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            L'homme qui a révolutionné la culture foot sur internet
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
          <div className="relative animate-slide-in-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur-3xl opacity-40"></div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:bg-white/20 transition-all">
                    <Image className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  </div>
                  <p className="text-white font-bold text-xl sm:text-2xl mb-2">Mohamed Henni</p>
                  <p className="text-white/70 text-base sm:text-lg">La légende OCTOGOAL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">11M+</p>
                  <p className="text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wider">Followers</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">10+</p>
                  <p className="text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wider">Années</p>
                </div>
              </div>

              <div className="relative group col-span-2">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">N°1</p>
                  <p className="text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wider">Influenceur Foot en France</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                      <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold mb-1 text-white break-words">Le Marseillais préféré des Parisiens</h3>
                      <p className="text-slate-400 text-xs sm:text-sm">Transcende les rivalités</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold mb-1 text-white break-words">Authenticité totale</h3>
                      <p className="text-slate-400 text-xs sm:text-sm">Sans filtre ni compromis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold mb-1 text-white break-words">Communauté massive</h3>
                      <p className="text-slate-400 text-xs sm:text-sm">Engagement hors norme</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold mb-1 text-white break-words">Leader depuis 10 ans</h3>
                      <p className="text-slate-400 text-xs sm:text-sm">Domination incontestée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
          <div className="relative text-center py-16 px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
                Mais Momo était seul pour gérer sa puissance.
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                <Star className="w-6 h-6 text-blue-400" />
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Et son potentiel était 100 fois supérieur.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
