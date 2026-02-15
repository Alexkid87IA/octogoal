import { ArrowRight, Lock, Eye, Play, Heart, Share2, UserPlus, Clock, MessageCircle, TrendingUp, BarChart3 } from 'lucide-react';

interface PlatformCardProps {
  platform: string;
  handle: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  stats: { icon: React.ComponentType<{ className?: string }>; value: string; label: string }[];
  teaserLines: string[];
}

function PlatformCard({ platform, handle, color, gradientFrom, gradientTo, borderColor, stats, teaserLines }: PlatformCardProps) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`rounded-2xl border ${borderColor} bg-gray-900/30 overflow-hidden`}>
      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-gray-800/50">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display text-lg font-bold text-white">{platform}</h3>
          <span className={`text-xs font-medium ${color}`}>{handle}</span>
        </div>
      </div>

      {/* Visible stats */}
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-3 mb-5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${color} opacity-60 flex-shrink-0`} />
                <div>
                  <p className={`font-display text-base sm:text-lg font-bold ${color}`}>{s.value}</p>
                  <p className="text-[10px] text-gray-500">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Teaser / blurred content */}
        <div className="relative">
          <div className="space-y-2 blur-[6px] select-none pointer-events-none">
            {teaserLines.map((line, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-800/30">
                <span className="text-xs text-gray-400">{line}</span>
                <span className="text-xs font-bold text-gray-400">••••</span>
              </div>
            ))}
          </div>

          {/* Overlay CTA */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={scrollToContact}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} border border-gray-700 hover:border-gray-500 transition-all backdrop-blur-sm`}
            >
              <Lock className="w-3.5 h-3.5 text-gray-300" />
              <span className="text-xs font-semibold text-white">Voir dans le reporting</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudySection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const platforms: PlatformCardProps[] = [
    {
      platform: 'YouTube',
      handle: '@mohamedhenni',
      color: 'text-red-400',
      gradientFrom: 'from-red-500/10',
      gradientTo: 'to-red-500/5',
      borderColor: 'border-red-500/10',
      stats: [
        { icon: Play, value: '5,1M', label: 'Vues vidéo' },
        { icon: Eye, value: '14,4M', label: 'Impressions' },
        { icon: Heart, value: '130K', label: 'Likes' },
        { icon: Clock, value: '57,2%', label: 'Rétention moyenne' },
      ],
      teaserLines: [
        'Top 5 vidéos par vues',
        'Courbe de rétention par épisode',
        'Répartition démographique YouTube',
        'Sources de trafic détaillées',
      ],
    },
    {
      platform: 'TikTok',
      handle: '@hennidamelio',
      color: 'text-indigo-400',
      gradientFrom: 'from-indigo-500/10',
      gradientTo: 'to-indigo-500/5',
      borderColor: 'border-indigo-500/10',
      stats: [
        { icon: Eye, value: '31M', label: 'Vues totales' },
        { icon: Heart, value: '2,24M', label: 'Likes' },
        { icon: Share2, value: '232K', label: 'Partages' },
        { icon: UserPlus, value: '172K', label: 'Nouveaux abonnés' },
      ],
      teaserLines: [
        'Performance par vidéo (top 10)',
        'Temps de lecture total : 196K heures',
        'Taux d\'engagement par format',
        'Analyse viralité et partages',
      ],
    },
    {
      platform: 'Facebook',
      handle: '@hennimohamedoffficiel',
      color: 'text-blue-400',
      gradientFrom: 'from-blue-500/10',
      gradientTo: 'to-blue-500/5',
      borderColor: 'border-blue-500/10',
      stats: [
        { icon: Eye, value: '177,7M', label: 'Impressions' },
        { icon: Play, value: '127,4M', label: 'Vues vidéo' },
        { icon: Heart, value: '4,77M', label: 'Réactions' },
        { icon: MessageCircle, value: '86,3K', label: 'Commentaires' },
      ],
      teaserLines: [
        'Performance Reels vs Photos vs Textes',
        'Impressions moyennes par format',
        'Reach organique vs payant',
        'Meilleurs posts par engagement',
      ],
    },
    {
      platform: 'Instagram',
      handle: '@octogoalofficiel',
      color: 'text-pink-400',
      gradientFrom: 'from-pink-500/10',
      gradientTo: 'to-pink-500/5',
      borderColor: 'border-pink-500/10',
      stats: [
        { icon: Eye, value: '235', label: 'Photos publiées' },
        { icon: TrendingUp, value: '383K', label: 'Impressions / post' },
        { icon: Heart, value: '8M+', label: 'Interactions totales' },
        { icon: UserPlus, value: '57%', label: 'Rétention vidéo' },
      ],
      teaserLines: [
        'Carrousels vs Reels vs Posts simples',
        'Taux de sauvegarde et partages',
        'Croissance followers pendant la CAN',
        'Heures de publication optimales',
      ],
    },
    {
      platform: 'Snapchat',
      handle: 'Discover & Shows',
      color: 'text-yellow-400',
      gradientFrom: 'from-yellow-500/10',
      gradientTo: 'to-yellow-500/5',
      borderColor: 'border-yellow-500/10',
      stats: [
        { icon: Eye, value: '1,47M', label: 'Vues uniques' },
        { icon: UserPlus, value: '+13 671', label: 'Nouveaux followers' },
        { icon: BarChart3, value: '13', label: 'Publications' },
        { icon: Clock, value: '45s', label: 'Temps moyen / story' },
      ],
      teaserLines: [
        'Performance par story',
        'Taux de complétion',
        'Démographie Snapchat',
        'Potentiel Discover',
      ],
    },
  ];

  return (
    <section id="reporting" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-pink-400">Étude de cas · CAN 2025</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Le reporting complet
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Toutes plateformes confondues. Chaque métrique, chaque insight, chaque apprentissage de 3 semaines de CAN.
          </p>
        </div>

        {/* Global headline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            { value: '239M', label: 'Impressions', color: 'text-pink-400' },
            { value: '134M', label: 'Vues vidéo', color: 'text-blue-400' },
            { value: '8M', label: 'Interactions', color: 'text-purple-400' },
            { value: '452', label: 'Publications', color: 'text-green-400' },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 sm:p-5 rounded-2xl bg-gray-900/50 border border-gray-800">
              <p className={`font-display text-2xl sm:text-3xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Platform cards grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {platforms.slice(0, 4).map((p) => (
            <PlatformCard key={p.platform} {...p} />
          ))}
        </div>

        {/* Snapchat - full width */}
        <div className="mb-16">
          <PlatformCard {...platforms[4]} />
        </div>

        {/* Big CTA */}
        <div className="relative rounded-2xl border border-pink-500/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-blue-500/5" />
          <div className="relative p-8 sm:p-12 text-center">
            <Lock className="w-8 h-8 text-pink-400/60 mx-auto mb-4" />
            <h3 className="font-display text-xl sm:text-2xl font-black text-white mb-3">
              Accédez au reporting complet
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mb-8">
              Données détaillées par plateforme, analyses par format, courbes de rétention, démographie, géographie, top contenus, et recommandations stratégiques.
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-sm sm:text-base rounded-xl transition-all"
            >
              Demander le reporting
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-xs text-gray-600 mt-4">
              PDF complet envoyé sous 24h · Données vérifiables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
