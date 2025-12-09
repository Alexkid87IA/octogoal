import { Video, Zap, FileText, Image, TrendingUp, Users, Newspaper, Smile, ListOrdered, Radio, Film, DollarSign, Calendar, Smartphone, Megaphone, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Format {
  title: string;
  items: string[];
}

interface Category {
  icon: typeof Newspaper;
  title: string;
  subtitle: string;
  gradient: string;
  formats: Format[];
}

export default function ContentUniverseSection() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const categories: Category[] = [
    {
      icon: Newspaper,
      title: 'Actualité',
      subtitle: 'L\'info foot en temps réel',
      gradient: 'from-blue-500 to-cyan-600',
      formats: [
        { title: 'Articles Flash', items: ['Breaking news foot', 'Infos transferts', 'Déclarations chocs'] },
        { title: 'Vidéos Courtes', items: ['Résumés matchs (60s)', 'Hot takes de Momo', 'Réactions instants'] }
      ]
    },
    {
      icon: TrendingUp,
      title: 'Analyses tactiques',
      subtitle: 'Le foot décrypté',
      gradient: 'from-cyan-500 to-teal-600',
      formats: [
        { title: 'Vidéos Premium', items: ['Analyses post-match', 'Tactical breakdowns', 'Systèmes de jeu'] },
        { title: 'Articles Longs', items: ['Dossiers tactiques', 'Évolution des équipes', 'Comparaisons joueurs'] }
      ]
    },
    {
      icon: Smile,
      title: 'Humour & Memes',
      subtitle: 'Le foot qui fait rire',
      gradient: 'from-teal-500 to-emerald-600',
      formats: [
        { title: 'Contenus Viraux', items: ['Memes du weekend', 'Moments gênants', 'Fails & ratés'] },
        { title: 'Parodies', items: ['Sketches foot', 'Montages humoristiques', 'Voix off absurdes'] }
      ]
    },
    {
      icon: ListOrdered,
      title: 'Classements & Rankings',
      subtitle: 'Tops et flops',
      gradient: 'from-emerald-500 to-green-600',
      formats: [
        { title: 'Carrousels', items: ['Top 10 joueurs', 'Pires recrues', 'Meilleurs buts'] },
        { title: 'Power Rankings', items: ['Équipes semaine', 'Joueurs forme', 'Entraîneurs sous pression'] }
      ]
    },
    {
      icon: Users,
      title: 'Débats',
      subtitle: 'La communauté s\'exprime',
      gradient: 'from-green-500 to-lime-600',
      formats: [
        { title: 'Lives', items: ['OCTOGOAL Live hebdo', 'Débats post-matchs', 'Q&A communauté'] },
        { title: 'Sondages', items: ['Questions clivantes', 'Votes du public', 'Prédictions'] }
      ]
    },
    {
      icon: Radio,
      title: 'Interviews',
      subtitle: 'Les voix du foot',
      gradient: 'from-lime-500 to-yellow-600',
      formats: [
        { title: 'Formats Longs', items: ['Interviews joueurs', 'Consultants experts', 'Journalistes foot'] },
        { title: 'Formats Courts', items: ['Hot seat questions', 'Réactions rapides', 'Confessions'] }
      ]
    },
    {
      icon: Film,
      title: 'Documentaires',
      subtitle: 'Les histoires du foot',
      gradient: 'from-yellow-500 to-orange-600',
      formats: [
        { title: 'Mini-docs', items: ['Carrières légendaires', 'Clubs historiques', 'Scandales foot'] },
        { title: 'Séries', items: ['Décennies du foot', 'Rivalités mythiques', 'Retours en arrière'] }
      ]
    },
    {
      icon: DollarSign,
      title: 'Business du foot',
      subtitle: 'Les coulisses économiques',
      gradient: 'from-orange-500 to-red-600',
      formats: [
        { title: 'Analyses Mercato', items: ['Budgets clubs', 'Stratégies transferts', 'Fair-play financier'] },
        { title: 'Investigations', items: ['Agents influents', 'Propriétaires', 'Droits TV'] }
      ]
    },
    {
      icon: Image,
      title: 'Culture foot',
      subtitle: 'Le foot lifestyle',
      gradient: 'from-red-500 to-pink-600',
      formats: [
        { title: 'Mode & Style', items: ['Looks joueurs', 'Maillots iconiques', 'Sneakers collection'] },
        { title: 'Off-field', items: ['Vie privée stars', 'Passions joueurs', 'Anecdotes'] }
      ]
    },
    {
      icon: FileText,
      title: 'Opinion & Éditos',
      subtitle: 'Le point de vue OCTOGOAL',
      gradient: 'from-pink-500 to-rose-600',
      formats: [
        { title: 'Chroniques Momo', items: ['Coups de gueule', 'Prises de position', 'Analyses société'] },
        { title: 'Tribunes', items: ['Invités experts', 'Débats contradictoires', 'Regards externes'] }
      ]
    },
    {
      icon: Calendar,
      title: 'Programmes & Calendrier',
      subtitle: 'Ne ratez rien',
      gradient: 'from-rose-500 to-purple-600',
      formats: [
        { title: 'Guides Matchs', items: ['Programme de la journée', 'Chocs à venir', 'Où regarder'] },
        { title: 'Récaps', items: ['Résumé de la semaine', 'Best-of weekend', 'À retenir'] }
      ]
    },
    {
      icon: Smartphone,
      title: 'Réseaux sociaux',
      subtitle: 'Viralité maximale',
      gradient: 'from-purple-500 to-indigo-600',
      formats: [
        { title: 'Stories', items: ['Coulisses OCTOGOAL', 'BTS productions', 'Moments équipe'] },
        { title: 'Threads & Tweets', items: ['Live-tweets matchs', 'Hot takes', 'Réactions communauté'] }
      ]
    },
    {
      icon: Megaphone,
      title: 'Événements spéciaux',
      subtitle: 'Les grands rendez-vous',
      gradient: 'from-indigo-500 to-blue-600',
      formats: [
        { title: 'Couvertures Live', items: ['Coupe du Monde', 'Euro', 'Ligue des Champions'] },
        { title: 'Éditions Spéciales', items: ['Ballon d\'Or', 'Mercato deadline', 'Finales'] }
      ]
    }
  ];

  return (
    <section id="content" className="relative py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-sm font-bold tracking-widest text-blue-300 uppercase inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            L'Univers de Contenu
          </span>
          <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            Tous les formats.<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Tous les jours. Partout.
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-slate-300 font-semibold">
            Une machine de production de contenu foot
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-20 animate-fade-in-up px-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 border border-blue-500/30 h-full flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                <Video className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3 md:mb-4 text-blue-400 bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">4</p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-semibold leading-tight">vidéos premium<br />/ mois<br /><span className="text-[10px] sm:text-xs text-slate-400">(15+ min)</span></p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/40 to-teal-500/40 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 border border-cyan-500/30 h-full flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-2xl group-hover:shadow-cyan-500/50 transition-shadow">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3 md:mb-4 text-cyan-400 bg-gradient-to-br from-cyan-400 to-teal-400 bg-clip-text text-transparent">1</p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-semibold leading-tight">vidéo courte<br />/ jour</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/40 to-emerald-500/40 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 border border-teal-500/30 h-full flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-2xl group-hover:shadow-teal-500/50 transition-shadow">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3 md:mb-4 text-teal-400 bg-gradient-to-br from-teal-400 to-emerald-400 bg-clip-text text-transparent">3</p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-semibold leading-tight">articles<br />/ jour</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/40 to-green-500/40 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 border border-emerald-500/30 h-full flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-2xl group-hover:shadow-emerald-500/50 transition-shadow">
                <Image className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3 md:mb-4 text-emerald-400 bg-gradient-to-br from-emerald-400 to-green-400 bg-clip-text text-transparent">2</p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-semibold leading-tight">carrousels<br />/ jour</p>
            </div>
          </div>
        </div>

        <div className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-4">
              <Sparkles className="w-12 h-12 text-blue-400" />
              13 catégories éditoriales
              <Sparkles className="w-12 h-12 text-cyan-400" />
            </h3>
            <p className="text-xl text-slate-400">Explorez la diversité de nos contenus</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === index;

              return (
                <div key={index} className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${category.gradient} opacity-30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all`}></div>
                  <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all">
                    <button
                      onClick={() => setExpandedCategory(isExpanded ? null : index)}
                      className="w-full p-8 text-left"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-xl`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-slate-400" />
                        )}
                      </div>
                      <h4 className="text-2xl font-black text-white mb-2">{category.title}</h4>
                      <p className="text-sm text-slate-400">{category.subtitle}</p>
                    </button>

                    {isExpanded && (
                      <div className="px-8 pb-8 space-y-6 animate-fade-in-up">
                        {category.formats.map((format, fIndex) => (
                          <div key={fIndex} className="bg-slate-900/50 rounded-2xl p-6 border border-white/5">
                            <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                              {format.title}
                            </h5>
                            <ul className="space-y-2">
                              {format.items.map((item, iIndex) => (
                                <li key={iIndex} className="text-slate-300 text-sm flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative animate-fade-in-up px-4">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-teal-500/40 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-blue-600/90 to-cyan-600/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 border border-blue-400/30 shadow-2xl">
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-center mb-8 sm:mb-12 leading-tight">
              Multidiffusion : YouTube, TikTok, Insta, Snap, Facebook, X
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="relative group text-center">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative py-4">
                  <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-white" />
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 sm:mb-6 text-white">200M+</p>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white/90">impressions / mois</p>
                </div>
              </div>
              <div className="relative group text-center">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative py-4">
                  <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-white" />
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 sm:mb-6 text-white">1M+</p>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white/90">lecteurs / mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
