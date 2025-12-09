import { Layers, Globe, Video, Users, Target, TrendingUp, Zap } from 'lucide-react';
import VideoPlaceholder from '../ui/VideoPlaceholder';

export default function VisionInfrastructureSection() {
  return (
    <section id="vision" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-100 via-slate-50 to-white overflow-hidden">
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
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            La Vision
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-6 leading-tight px-4 break-words">
            Ce que nous construisons
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 px-4">
            Un média. Une marque. Un écosystème.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24 items-center animate-fade-in-up">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <VideoPlaceholder
                title="Le média foot nouvelle génération"
                subtitle="TikTok + YouTube + Instagram"
                aspectRatio="9-16"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="aspect-[9/16] bg-slate-800/50 backdrop-blur-xl rounded-xl border border-blue-500/20 flex items-center justify-center">
                <p className="text-xs text-slate-600 font-bold text-center px-2">TikTok</p>
              </div>
              <div className="aspect-[9/16] bg-slate-800/50 backdrop-blur-xl rounded-xl border border-cyan-500/20 flex items-center justify-center">
                <p className="text-xs text-slate-600 font-bold text-center px-2">Reels</p>
              </div>
              <div className="aspect-[9/16] bg-slate-800/50 backdrop-blur-xl rounded-xl border border-teal-500/20 flex items-center justify-center">
                <p className="text-xs text-slate-600 font-bold text-center px-2">Shorts</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-200">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 sm:mb-10 md:mb-12 break-words">Le premier média foot conçu pour :</h3>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg md:text-xl text-slate-700 font-semibold leading-relaxed">L'ère TikTok, YouTube & Instagram</p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-3 h-3 rounded-full bg-cyan-600 mt-2 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg md:text-xl text-slate-700 font-semibold leading-relaxed">Une diffusion multicanal quotidienne</p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-3 h-3 rounded-full bg-teal-600 mt-2 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg md:text-xl text-slate-700 font-semibold leading-relaxed">La viralité comme ADN</p>
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 sm:mb-8">Un média qui mélange :</h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 flex items-center justify-center">
                  <p className="text-sm sm:text-base font-black text-slate-900 text-center">Analyse</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 flex items-center justify-center">
                  <p className="text-sm sm:text-base font-black text-slate-900 text-center">Culture foot</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 flex items-center justify-center">
                  <p className="text-sm sm:text-base font-black text-slate-900 text-center">Humour</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 flex items-center justify-center">
                  <p className="text-sm sm:text-base font-black text-slate-900 text-center">Narration</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 flex items-center justify-center">
                  <p className="text-sm sm:text-base font-black text-slate-900 text-center">Formats viraux</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 flex items-center justify-center">
                  <p className="text-sm sm:text-base font-black text-slate-900 text-center">Émissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 px-4 break-words">L'infrastructure complète</h3>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-bold px-4">Les 4 piliers de notre média</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-200/50 to-cyan-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Layers className="w-20 h-20 mx-auto mb-4 text-blue-600" />
                    <p className="text-slate-700 font-bold text-xl">Architecture média OCTOGOAL</p>
                    <p className="text-slate-500 mt-2">Infrastructure professionnelle complète</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-lg flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                <p className="text-sm sm:text-base md:text-lg font-black text-slate-900 text-center">Stratégie éditoriale</p>
              </div>
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-lg flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                <p className="text-sm sm:text-base md:text-lg font-black text-slate-900 text-center">Plateformes sociales</p>
              </div>
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-lg flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                <p className="text-sm sm:text-base md:text-lg font-black text-slate-900 text-center">CMS & infrastructure tech</p>
              </div>
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-lg flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                <p className="text-sm sm:text-base md:text-lg font-black text-slate-900 text-center">Production industrielle</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 px-4 break-words">Ce que nous bâtissons concrètement</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-200/50 to-cyan-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-lg h-full flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[200px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed">Un site complet + CMS sur mesure</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-200/50 to-teal-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-lg h-full flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[200px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed">Une boîte de prod dédiée</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-teal-200/50 to-emerald-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-lg h-full flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[200px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed">Une équipe édito structurée</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-200/50 to-green-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-lg h-full flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[200px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed">Une stratégie de diffusion quotidienne</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-green-200/50 to-lime-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-lg h-full flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[200px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-lime-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed">Une architecture qui transforme chaque contenu en impression</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-lime-200/50 to-yellow-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-lg h-full flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[200px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-yellow-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed">Un système pensé pour l'audience ET les marques</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 leading-tight px-4 break-words">
            Mission : Transformer Momo<br />en empire média.
          </p>
        </div>
      </div>
    </section>
  );
}
