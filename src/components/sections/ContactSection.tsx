import { Rocket, Users, Star, Target, TrendingUp, ArrowRight, Crown, Video, Globe, Zap, Mail, Sparkles, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-cyan-300 uppercase">Le moment est venu</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight">
            <span className="text-white">Rejoignez la révolution</span><br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              du football digital
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            OCTOGOAL n'est pas qu'un média. C'est une opportunité unique de s'associer au prochain géant du sport digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-cyan-400/30 h-full hover:border-cyan-400/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-2xl">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl sm:text-5xl font-black text-white mb-2">11M+</p>
                <p className="text-base sm:text-lg font-bold text-cyan-300 mb-2">Audience engagée</p>
                <p className="text-sm text-slate-400">Hommes 18-35 ans passionnés</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-400/30 h-full hover:border-blue-400/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-2xl">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl sm:text-5xl font-black text-white mb-2">200M+</p>
                <p className="text-base sm:text-lg font-bold text-blue-300 mb-2">Impressions/mois</p>
                <p className="text-sm text-slate-400">Portée organique massive</p>
              </div>
            </div>
          </div>

          <div className="relative group sm:col-span-2 lg:col-span-1">
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-indigo-400/30 h-full hover:border-indigo-400/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-600 flex items-center justify-center mb-4 shadow-2xl">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl sm:text-5xl font-black text-white mb-2">6</p>
                <p className="text-base sm:text-lg font-bold text-indigo-300 mb-2">Plateformes</p>
                <p className="text-sm text-slate-400">Présence multi-canal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-500/30 rounded-3xl sm:rounded-[3rem] blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 border border-cyan-400/30">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                Ce que nous recherchons
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Des partenaires visionnaires prêts à investir dans le futur du football digital
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
              <div className="flex items-start gap-3 sm:gap-4 bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-black text-white mb-1">Sponsors & Partenaires</p>
                  <p className="text-sm sm:text-base text-slate-400">Visibilité premium, ROI garanti, dispositifs sur-mesure</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-black text-white mb-1">Investisseurs stratégiques</p>
                  <p className="text-sm sm:text-base text-slate-400">Croissance x10, business model solide, équipe experte</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-black text-white mb-1">Talents & Créateurs</p>
                  <p className="text-sm sm:text-base text-slate-400">Rejoignez une équipe d'élite, projets ambitieux</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-black text-white mb-1">Médias & Distributeurs</p>
                  <p className="text-sm sm:text-base text-slate-400">Partenariats stratégiques, co-productions, licensing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Prêt à faire partie de l'histoire ?
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discutons de votre projet et explorons comment OCTOGOAL peut propulser votre marque
            </p>
          </div>

          <div className="relative inline-block group max-w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all opacity-75 animate-pulse"></div>
            <button className="relative px-8 sm:px-12 md:px-16 lg:px-20 py-5 sm:py-6 md:py-7 lg:py-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-2xl sm:rounded-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl font-black hover:shadow-2xl transition-all duration-500 hover:scale-105 inline-flex items-center gap-3 sm:gap-4 border-2 border-cyan-400/50 group-hover:border-cyan-400 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Parlons de votre projet</span>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-slate-400">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-cyan-400" />
              <span>Media kit sur demande</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Accompagnement personnalisé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
