import { Sparkles, Zap, Users, Star, TrendingUp } from 'lucide-react';
import VideoPlaceholder from '../ui/VideoPlaceholder';

export default function FlagshipSection() {
  return (
    <section id="flagship" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
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
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200">
            <span className="text-sm font-black tracking-widest text-indigo-700 uppercase">Le flagship</span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-tight">
            L'émission OCTOGOAL Live
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all"></div>
              <div className="relative">
                <VideoPlaceholder
                  title="Extrait OCTOGOAL Live"
                  subtitle="Format 16:9 - Épisode complet"
                  aspectRatio="16-9"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative">
                  <VideoPlaceholder title="Extrait 1" subtitle="" aspectRatio="9-16" />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-400/20 to-violet-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative">
                  <VideoPlaceholder title="Extrait 2" subtitle="" aspectRatio="9-16" />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative">
                  <VideoPlaceholder title="Extrait 3" subtitle="" aspectRatio="9-16" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-slate-100">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 leading-tight">Une émission premium</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-5 group/item">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl text-slate-900 font-black">Drôle</p>
                      <p className="text-slate-600 text-base mt-1 font-medium">Divertissement garanti</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group/item">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl text-slate-900 font-black">Rythmée</p>
                      <p className="text-slate-600 text-base mt-1 font-medium">Tempo dynamique</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group/item">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl text-slate-900 font-black">Interactive</p>
                      <p className="text-slate-600 text-base mt-1 font-medium">Communauté au coeur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group/item">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <Star className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl text-slate-900 font-black">Incarnée</p>
                      <p className="text-slate-600 text-base mt-1 font-medium">Présence authentique</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group/item">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl text-slate-900 font-black">Virale</p>
                      <p className="text-slate-600 text-base mt-1 font-medium">Séquences mémorables</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/40 to-purple-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 shadow-2xl text-white border border-indigo-400/30">
                <h4 className="text-2xl md:text-3xl font-black mb-8">Opérations commerciales</h4>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-white flex-shrink-0 shadow-lg"></div>
                    <p className="text-xl font-bold">Sponsorisable & brandable</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-white flex-shrink-0 shadow-lg"></div>
                    <p className="text-xl font-bold">Déclinable en extraits viraux</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-white flex-shrink-0 shadow-lg"></div>
                    <p className="text-xl font-bold">Un vrai rendez-vous</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
