import { Video, Zap, Image as ImageIcon, FileText, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import VideoPlaceholder from '../ui/VideoPlaceholder';

export default function ContentFormatsSection() {
  return (
    <section id="content" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-300 uppercase inline-block px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6 md:mb-8">
            Production de Contenus
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight px-4">
            Un dispositif éditorial<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              massif et multi-format
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Chaque émission génère des dizaines de contenus sponsorisés
          </p>
        </div>

        {/* Vidéos 10-15 min */}
        <div className="mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Video className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Vidéos Mid-Format</h3>
            </div>
            <p className="text-lg sm:text-xl text-slate-400 font-medium">10 à 15 minutes par émission</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative">
                <VideoPlaceholder
                  title="Résumé Émission CAN"
                  subtitle="Format 10-15 min sponsorisé"
                  aspectRatio="16-9"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-cyan-400/20 h-full">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-cyan-400">6</span>
                    <span className="text-sm sm:text-base text-cyan-300 font-bold ml-2">vidéos sponsorisées</span>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-6">Contenu de chaque vidéo :</h4>
                <ul className="space-y-3">
                  {[
                    'Résumé du live',
                    'Moments forts de l\'émission',
                    'Séquences sponsorisées intégrées',
                    'Réactions marquantes de Momo'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                      <span className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h5 className="text-base sm:text-lg font-black text-white mb-3">Diffusion :</h5>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/20 border border-red-400/30">
                      <Youtube className="w-4 h-4 text-red-400" />
                      <span className="text-sm font-bold text-red-300">YouTube</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30">
                      <Facebook className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-bold text-blue-300">Facebook</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-500/20 border border-slate-400/30">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-bold text-slate-300">Site Octogoal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenus courts */}
        <div className="mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Contenus Courts Viraux</h3>
            </div>
            <p className="text-lg sm:text-xl text-slate-400 font-medium">30 à 90 secondes - Format vertical</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {[
              { title: 'Moments drôles', gradient: 'from-orange-500/20 to-pink-500/20' },
              { title: 'Réactions fortes', gradient: 'from-pink-500/20 to-red-500/20' },
              { title: 'Punchlines Momo', gradient: 'from-red-500/20 to-orange-500/20' },
              { title: 'Stats sponsorisées', gradient: 'from-yellow-500/20 to-orange-500/20' }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.gradient} rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative">
                  <VideoPlaceholder
                    title={item.title}
                    subtitle=""
                    aspectRatio="9-16"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/40 via-pink-500/40 to-orange-500/40 rounded-3xl blur-3xl"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-orange-400/20">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-orange-400">30-60</span>
                    <span className="text-sm sm:text-base text-orange-300 font-bold ml-2">extraits sponsorisés</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-4">Types de contenus :</h4>
                  <ul className="space-y-2">
                    {[
                      'Séquence sponsorisée (Compo, Notes, Top 3)',
                      'Joueur du match sponsorisé',
                      'Stat du jour by [Marque]',
                      'Moments drôles & réactions',
                      'Punchlines de Momo'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-400 font-bold mt-1">•</span>
                        <span className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-6">Plateformes de diffusion :</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'TikTok', gradient: 'from-cyan-500 to-pink-500' },
                      { name: 'Instagram Reels', gradient: 'from-purple-500 to-pink-500' },
                      { name: 'YouTube Shorts', gradient: 'from-red-500 to-orange-500' },
                      { name: 'Snapchat', gradient: 'from-yellow-400 to-yellow-500' },
                      { name: 'Facebook Reels', gradient: 'from-blue-500 to-indigo-500' },
                      { name: 'X (Twitter)', gradient: 'from-slate-700 to-slate-900' }
                    ].map((platform, index) => (
                      <div key={index} className="relative group/item">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${platform.gradient} rounded-xl blur opacity-30 group-hover/item:opacity-60 transition-opacity`}></div>
                        <div className="relative bg-slate-900/80 rounded-xl p-3 sm:p-4 border border-white/10 text-center">
                          <p className="text-sm sm:text-base font-bold text-white">{platform.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl p-6 border border-orange-400/30">
                <p className="text-lg sm:text-xl md:text-2xl font-black text-center text-white">
                  🔥 Potentiel viral massif sur toutes les plateformes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenus statiques */}
        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Contenus Statiques & Carrousels</h3>
            </div>
            <p className="text-lg sm:text-xl text-slate-400 font-medium">Posts Instagram, Facebook, X</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 to-indigo-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-purple-400/20 h-full">
                <h4 className="text-xl sm:text-2xl font-black text-white mb-6">Pour les émissions couvertes</h4>
                <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-purple-400">12-18</span>
                  <span className="text-sm sm:text-base text-purple-300 font-bold ml-2">carrousels sponsorisés</span>
                </div>
                <ul className="space-y-3">
                  {[
                    'Carrousel "Compo du Match"',
                    'Carrousel "Notes des Joueurs"',
                    'Carrousel "Top 5 Moments"',
                    'Visuel score finale sponsorisé'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-purple-500/10 rounded-xl p-3 border border-purple-400/20">
                      <ImageIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-white font-semibold leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/40 to-purple-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-indigo-400/20 h-full">
                <h4 className="text-xl sm:text-2xl font-black text-white mb-6">Pour les matchs non couverts</h4>
                <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-indigo-400">20-30</span>
                  <span className="text-sm sm:text-base text-indigo-300 font-bold ml-2">contenus sponsorisés</span>
                </div>
                <ul className="space-y-2">
                  {[
                    'Score Final sponsorisé',
                    'Compo Officielle by [Marque]',
                    'Moments à Retenir',
                    'Joueur du Match by [Marque]',
                    'Statistiques du Match',
                    'Top 3 Actions',
                    'Buts en Images',
                    'Résumé en 3 points'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold mt-1">•</span>
                      <span className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Récap final */}
        <div className="relative animate-fade-in-up">
          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/40 via-orange-500/40 to-purple-500/40 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-white/10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-10 sm:mb-12 text-white">
              Une présence continue tout au long de la CAN
            </h3>
            <p className="text-lg sm:text-xl text-slate-300 text-center font-medium max-w-4xl mx-auto">
              Même lorsqu'Octogoal ne fait pas de live, votre marque reste visible avec des contenus statiques sponsorisés sur tous les matchs importants de la compétition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
