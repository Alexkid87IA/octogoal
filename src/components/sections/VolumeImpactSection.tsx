import { BarChart3, Video, Zap, Image as ImageIcon, FileText, Tv, TrendingUp, Users } from 'lucide-react';

export default function VolumeImpactSection() {
  const volumetrics = [
    {
      icon: Tv,
      category: 'Émissions Live',
      volume: '6',
      description: 'Émissions de 60-90 min',
      details: ['Logo permanent', 'Séquence sponsorisée', 'Mentions audio'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Video,
      category: 'Vidéos 10-15 min',
      volume: '6',
      description: 'Résumés sponsorisés',
      details: ['YouTube', 'Facebook', 'Site Octogoal'],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Zap,
      category: 'Extraits Courts',
      volume: '30-60',
      description: 'Contenus 30-90 sec',
      details: ['TikTok', 'Reels', 'Shorts', 'Snap'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: ImageIcon,
      category: 'Carrousels Émissions',
      volume: '12-18',
      description: 'Posts sponsorisés',
      details: ['Compo', 'Notes', 'Top 5', 'Score'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: ImageIcon,
      category: 'Contenus Statiques',
      volume: '20-30',
      description: 'Matchs non couverts',
      details: ['Instagram', 'Facebook', 'X'],
      gradient: 'from-pink-500 to-orange-600'
    },
    {
      icon: FileText,
      category: 'Articles CAN',
      volume: '6',
      description: 'Articles sponsorisés',
      details: ['Site Octogoal', 'SEO optimisé'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="volume" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-300 uppercase inline-block px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6 md:mb-8">
            Volumétrie & Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight px-4">
            Le dispositif complet<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              en chiffres
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Une couverture totale de la CAN 2024
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          {volumetrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} opacity-30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all`}></div>
                <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all h-full">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-2xl`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className={`text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.volume}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{item.category}</h3>
                  <p className="text-sm sm:text-base text-slate-400 font-semibold mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.details.map((detail, idx) => (
                      <span key={idx} className="text-xs font-bold px-2 py-1 rounded-lg bg-white/10 text-white border border-white/20">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-10 md:mb-12 text-white">
            Plateformes de diffusion
          </h3>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-orange-500/40 rounded-3xl blur-3xl"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'YouTube', color: 'red' },
                  { name: 'TikTok', color: 'cyan' },
                  { name: 'Instagram', color: 'pink' },
                  { name: 'Facebook', color: 'blue' },
                  { name: 'Snapchat', color: 'yellow' },
                  { name: 'X (Twitter)', color: 'slate' }
                ].map((platform, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-${platform.color}-500/20 border border-${platform.color}-400/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <div className="w-8 h-8 rounded-lg bg-white/10"></div>
                    </div>
                    <p className="text-sm font-bold text-white">{platform.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-lg sm:text-xl font-bold text-slate-300">
                  + Site web Octogoal pour les articles et contenus premium
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all"></div>
            <div className="relative bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 border border-cyan-400/30 h-full flex flex-col items-center justify-center text-center">
              <TrendingUp className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mb-6" />
              <p className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4">200M+</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300 mb-2">Impressions mensuelles</p>
              <p className="text-sm sm:text-base text-slate-400 font-medium">Portée organique massive</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-3xl blur-3xl group-hover:blur-[4rem] transition-all"></div>
            <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 border border-purple-400/30 h-full flex flex-col items-center justify-center text-center">
              <Users className="w-16 h-16 sm:w-20 sm:h-20 text-purple-400 mb-6" />
              <p className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4">11M+</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-300 mb-2">Communauté active</p>
              <p className="text-sm sm:text-base text-slate-400 font-medium">Hommes 18-35 ans passionnés foot</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/40 via-pink-500/40 to-purple-500/40 rounded-3xl blur-[4rem]"></div>
          <div className="relative bg-gradient-to-br from-orange-600/90 to-pink-600/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-orange-400/30 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <BarChart3 className="w-16 h-16 sm:w-20 sm:h-20 text-white mb-6 sm:mb-8" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8">
                Le résultat final
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-bold max-w-4xl leading-relaxed">
                Ce dispositif associe votre marque à l'un des moments football les plus suivis, avec une présence massive, continue et multi-format, portée par la personnalité forte de Mohamed Henni et la puissance éditoriale du média Octogoal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
