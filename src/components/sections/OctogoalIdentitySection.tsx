import { Zap, Shield, Trophy, Users, MessageCircle } from 'lucide-react';
import BackgroundEffects from '../layout/BackgroundEffects';

export default function OctogoalIdentitySection() {
  return (
    <section id="identity" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
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
      <BackgroundEffects variant="light" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <div className="inline-block mb-6 sm:mb-8">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl sm:rounded-3xl font-black text-xl sm:text-2xl md:text-3xl border border-indigo-400/30">
                OctoGOAL
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 md:mb-10 leading-tight">
            Le clash version divertissement
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-semibold max-w-4xl mx-auto leading-relaxed">
            Dans OctoGOAL, tu peux avoir :
          </p>
        </div>

        {/* Fan Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
              <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-2xl text-2xl sm:text-3xl md:text-4xl">
                  ⚪
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3">Un Marseillais</p>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300/90 italic leading-relaxed">"le Vélodrome, c'est une religion"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400/30 to-indigo-400/30 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-red-400/20 hover:border-red-400/40 transition-all">
              <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-2xl text-2xl sm:text-3xl md:text-4xl">
                  🔴
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3">Un Parisien</p>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300/90 italic leading-relaxed">"on s'incline devant un stade... quand on n'a pas de Ligue des Champions"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-6xl mx-auto animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/40 to-purple-500/40 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-violet-400/20 hover:border-violet-400/40 transition-all h-full flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[240px]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Le clash, oui.</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/40 to-blue-500/40 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-indigo-400/20 hover:border-indigo-400/40 transition-all h-full flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[240px]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Le hooliganisme,<br />non.</p>
            </div>
          </div>

          <div className="relative group sm:col-span-2 lg:col-span-1">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-purple-400/20 hover:border-purple-400/40 transition-all h-full flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[240px]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">Le chambrage<br />puissant, toujours.</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-violet-500/40 rounded-3xl sm:rounded-[3rem] blur-3xl sm:blur-[4rem] group-hover:blur-[5rem] transition-all"></div>
            <div className="relative bg-gradient-to-br from-indigo-600/30 to-violet-600/30 backdrop-blur-2xl rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-20 border border-indigo-400/30 hover:border-indigo-400/50 transition-all">
              <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  C'est du spectacle.<br />
                  C'est du show.<br />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                    C'est du foot qui rassemble.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Notre mission
            </h3>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 font-bold leading-tight max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12">
            Réconcilier débat et bonne humeur
          </p>

          <div className="relative group inline-block max-w-4xl">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/40 via-red-500/40 to-pink-500/40 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl group-hover:blur-[4rem] transition-all"></div>
            <div className="relative bg-gradient-to-br from-orange-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-orange-400/30">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white italic leading-snug">
                "Qui aime bien, tacle bien... mais proprement."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
