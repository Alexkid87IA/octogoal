import { Tv, Video, Zap, Image as ImageIcon, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export default function OffreSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const formats = [
    {
      icon: Tv,
      title: 'Émissions Live',
      volume: '6-8 émissions',
      description: 'Sessions de 60-90 min en simultané sur toutes les plateformes',
      integrations: ['Logo permanent à l\'écran', 'Séquence sponsorisée dédiée', 'Mentions audio par Mohamed Henni', 'Habillage personnalisé'],
    },
    {
      icon: Video,
      title: 'Vidéos Mid-Format',
      volume: '6-10 vidéos',
      description: 'Résumés, analyses, débriefs de 10-15 min',
      integrations: ['Pré-roll sponsorisé', 'Product placement natif', 'Lien en description', 'CTA intégré'],
    },
    {
      icon: Zap,
      title: 'Shorts & Reels',
      volume: '30-60 contenus',
      description: 'Formats viraux 30-90 sec — TikTok, Reels, Shorts, Snap',
      integrations: ['Branding visuel', 'Mention audio', 'Hashtag partenaire', 'Format natif plateforme'],
    },
    {
      icon: ImageIcon,
      title: 'Contenus Statiques',
      volume: '30-50 posts',
      description: 'Carrousels, visuels match, infographies',
      integrations: ['Logo sur visuels', 'Stories sponsorisées', 'Co-branding', 'Posts dédiés'],
    },
    {
      icon: FileText,
      title: 'Articles & SEO',
      volume: '6+ articles',
      description: 'Articles sponsorisés sur le site Octogoal',
      integrations: ['Article dédié', 'Backlink SEO', 'Visibilité permanente', 'Newsletter'],
    },
  ];

  return (
    <section id="offre" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">L'offre annonceurs</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          Votre marque sur OCTOGOAL
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mb-16">
          Un dispositif multi-format complet pour associer votre marque aux plus grands événements football, portés par la communauté de Mohamed Henni.
        </p>

        {/* Format cards */}
        <div className="space-y-3 mb-16">
          {formats.map((format) => {
            const Icon = format.icon;
            return (
              <div key={format.title} className="rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors bg-gray-900/30">
                <div className="p-5 sm:p-7 flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-4 h-4 text-pink-500/70" />
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">{format.title}</h3>
                    </div>
                    <p className="font-display text-base font-bold text-pink-400 mb-1">{format.volume}</p>
                    <p className="text-sm text-gray-500">{format.description}</p>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {format.integrations.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-pink-500/50 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platforms */}
        <div className="rounded-2xl border border-gray-800 p-6 sm:p-8 mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-5">Diffusion sur 6 plateformes</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {['YouTube', 'TikTok', 'Instagram', 'Facebook', 'Snapchat', 'X'].map((p) => (
              <div key={p} className="text-center">
                <p className="text-sm font-semibold text-gray-400">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 rounded-2xl border border-gray-800 bg-gray-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white mb-2">Intéressé ?</h3>
            <p className="text-sm text-gray-400">Construisons un dispositif sur-mesure pour votre marque.</p>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex-shrink-0 flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-sm rounded-xl transition-all"
          >
            Parlons-en
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
