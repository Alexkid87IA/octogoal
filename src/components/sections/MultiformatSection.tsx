import { Eye, Heart, Share2, UserPlus, FileText, Globe, Newspaper, Smartphone, TrendingUp, MessageCircle } from 'lucide-react';

const tiktoks = [
  { id: '7588054979416460566' },
  { id: '7587482618912853251' },
  { id: '7587617417564540182' },
  { id: '7596063493552459030' },
  { id: '7603026362710068502' },
];

const reels = [
  { id: 'DTgwPsDCF0K' },
  { id: 'DTV4dcriDOI' },
  { id: 'DTLoTfFiBGa' },
];

const facebookPosts = [
  'pfbid0BTwbcm4DPegfMHX3usefxiTRKhFLxrLDDHkWgUnH8TFtkQ6M3F2CQ6pU82Wjs4Jtl',
  'pfbid0zQ7YqhDfmbeEFYPmcjMUrt8eq2HjKSmX8xzBDz3UGHi9miSYAEvH2i4Ruc7JQYXMl',
  'pfbid02g3K9bE1ntst4ZtfcxjWQtGfcqW75sigdmrJdsrZxux3HxX5ykAbzDyPkqHb51LJTl',
];

const instagramPosts = [
  { id: 'DUgw6FpCGGE' },
  { id: 'DTq0Z2ZCJMm' },
];

interface StatBadge {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

function StatBar({ stats, color }: { stats: StatBadge[]; color: string }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-900/60 border border-gray-800">
            <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
            <div>
              <p className={`font-display text-sm font-bold ${color}`}>{s.value}</p>
              <p className="text-[10px] text-gray-500">{s.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function MultiformatSection() {
  return (
    <section id="multiformat" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-4">L'univers de contenu</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          On tape partout
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mb-16">
          OCTOGOAL ne se limite pas aux lives. C'est un écosystème complet : TikToks viraux, Reels Instagram, posts Facebook, visuels, articles SEO — chaque format est pensé pour maximiser la portée et l'engagement.
        </p>

        {/* ──────── TIKTOK SHOWCASE ──────── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">TikTok</h3>
              <p className="text-xs text-gray-500">@hennidamelio · 48 vidéos CAN 2025</p>
            </div>
          </div>

          <StatBar
            color="text-indigo-400"
            stats={[
              { icon: Eye, value: '31M', label: 'Vues totales' },
              { icon: Heart, value: '2,24M', label: 'Likes' },
              { icon: Share2, value: '232K', label: 'Partages' },
              { icon: UserPlus, value: '172K', label: 'Nouveaux abonnés' },
            ]}
          />

          <div className="flex gap-4 overflow-x-auto pb-4 pt-6 snap-x snap-mandatory scrollbar-thin">
            {tiktoks.map((t) => (
              <div key={t.id} className="flex-shrink-0 w-[320px] snap-start">
                <div className="relative rounded-2xl border border-gray-800 overflow-hidden bg-black" style={{ height: '580px' }}>
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${t.id}`}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="TikTok OCTOGOAL"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-600 mt-3 text-center">
            ~<span className="text-indigo-400 font-semibold">646K</span> vues par vidéo en moyenne · <span className="text-indigo-400 font-semibold">196K heures</span> de temps de lecture total
          </p>
        </div>

        {/* ──────── INSTAGRAM REELS ──────── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-pink-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">Reels Instagram</h3>
              <p className="text-xs text-gray-500">@octogoalofficiel & @hennidamelio</p>
            </div>
          </div>

          <StatBar
            color="text-pink-400"
            stats={[
              { icon: Eye, value: '5,1M+', label: 'Vues Reels' },
              { icon: Heart, value: '130K+', label: 'Likes' },
              { icon: TrendingUp, value: '57%', label: 'Rétention moyenne' },
              { icon: Share2, value: '383K', label: 'Impressions / post' },
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {reels.map((r) => (
              <div key={r.id} className="rounded-2xl border border-gray-800 overflow-hidden bg-black">
                <iframe
                  src={`https://www.instagram.com/reel/${r.id}/embed/`}
                  className="w-full border-0"
                  style={{ minHeight: '580px' }}
                  allowFullScreen
                  loading="lazy"
                  scrolling="no"
                  allowTransparency
                  title="Reel Instagram OCTOGOAL"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ──────── FACEBOOK POSTS ──────── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Globe className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">Facebook</h3>
              <p className="text-xs text-gray-500">@hennimohamedoffficiel · 333 publications CAN 2025</p>
            </div>
          </div>

          <StatBar
            color="text-blue-400"
            stats={[
              { icon: Eye, value: '177,7M', label: 'Impressions' },
              { icon: Eye, value: '127,4M', label: 'Vues vidéo' },
              { icon: Heart, value: '4,77M', label: 'Réactions' },
              { icon: MessageCircle, value: '86,3K', label: 'Commentaires' },
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {facebookPosts.map((postId) => (
              <div key={postId} className="rounded-2xl border border-gray-800 overflow-hidden bg-white">
                <iframe
                  src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhennimohamedoffficiel%2Fposts%2F${postId}&show_text=true&width=500`}
                  className="w-full border-0"
                  style={{ minHeight: '600px' }}
                  loading="lazy"
                  scrolling="no"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Post Facebook OCTOGOAL"
                />
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-600 mt-3 text-center">
            Reels Facebook : <span className="text-blue-400 font-semibold">19K interactions</span> et <span className="text-blue-400 font-semibold">399K impressions</span> en moyenne par post — le format le plus performant
          </p>
        </div>

        {/* ──────── INSTAGRAM POSTS / VISUELS ──────── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-rose-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">Visuels & Posts Instagram</h3>
              <p className="text-xs text-gray-500">@octogoalofficiel · Compositions, scores, infographies</p>
            </div>
          </div>

          <StatBar
            color="text-rose-400"
            stats={[
              { icon: Eye, value: '235', label: 'Photos publiées' },
              { icon: TrendingUp, value: '383K', label: 'Impressions / post' },
              { icon: Heart, value: '8M+', label: 'Interactions totales' },
              { icon: Share2, value: '452', label: 'Publications totales' },
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {instagramPosts.map((post) => (
              <div key={post.id} className="rounded-2xl border border-gray-800 overflow-hidden bg-black">
                <iframe
                  src={`https://www.instagram.com/p/${post.id}/embed/captioned/`}
                  className="w-full border-0"
                  style={{ minHeight: '680px' }}
                  allowFullScreen
                  loading="lazy"
                  scrolling="no"
                  allowTransparency
                  title="Post Instagram OCTOGOAL"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ──────── ARTICLES + SNAPCHAT ──────── */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {/* Articles */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Articles Web</h3>
                  <p className="text-xs text-gray-500">Site octogoal.media · SEO optimisé</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {['Analyse : Le parcours de l\'Algérie à la CAN', 'Débrief : Les révélations de la compétition', 'Top : Les meilleurs moments OCTOGOAL'].map((title, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/40 border border-gray-800 hover:border-amber-500/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <Newspaper className="w-4 h-4 text-amber-400/40" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-300 line-clamp-1">{title}</p>
                      <p className="text-[10px] text-gray-600">Article · SEO</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-display font-bold text-white">6+</span> articles sponsorisables · Backlinks SEO · Visibilité permanente
              </p>
            </div>
          </div>

          {/* Snapchat */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Snapchat Shows</h3>
                  <p className="text-xs text-gray-500">Stories & Shows · Canal de découverte</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { icon: Eye, value: '1,47M', label: 'Vues uniques' },
                  { icon: UserPlus, value: '+13 671', label: 'Nouveaux followers' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-800/40 border border-gray-800">
                      <Icon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <div>
                        <p className="font-display text-sm font-bold text-yellow-400">{s.value}</p>
                        <p className="text-[10px] text-gray-500">{s.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[9/16] rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-800 flex items-center justify-center group hover:border-yellow-500/20 transition-colors">
                    <div className="text-center">
                      <Smartphone className="w-4 h-4 text-yellow-400/40 mx-auto mb-1" />
                      <p className="text-[9px] text-gray-600">Story {i}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-display font-bold text-white">13</span> publications · Format découverte
              </p>
            </div>
          </div>
        </div>

        {/* ──────── TOTAL RECAP BAR ──────── */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-6">Bilan multi-format · CAN 2025</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Émissions live', value: '7', color: 'text-violet-400' },
              { label: 'Capsules vidéo', value: '38', color: 'text-pink-400' },
              { label: 'TikToks / Reels', value: '48+', color: 'text-indigo-400' },
              { label: 'Photos / Visuels', value: '235', color: 'text-rose-400' },
              { label: 'Articles web', value: '6+', color: 'text-amber-400' },
              { label: 'Stories Snap', value: '13', color: 'text-yellow-400' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className={`font-display text-2xl sm:text-3xl font-black ${item.color}`}>{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              <span className="font-display font-bold text-white text-lg">452</span> publications au total ·
              <span className="font-display font-bold text-white text-lg"> 239M</span> impressions ·
              <span className="font-display font-bold text-white text-lg"> 134M</span> vues ·
              <span className="font-display font-bold text-white text-lg"> 8M</span> interactions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
