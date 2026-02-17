import { Eye, Play, Heart, UserPlus, Clock, FileText, Users, Globe, TrendingUp, MessageCircle, Share2, Bookmark, Ghost, Search } from 'lucide-react';

/* ──────── Octagon wrapper ──────── */
function OctagonStat({ value, label, sub, color, glowColor }: {
  value: string;
  label: string;
  sub: string;
  color: string;
  glowColor: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Glow behind octagon */}
        <div className={`absolute inset-0 ${glowColor} blur-[40px] opacity-40 rounded-full`} />

        {/* Octagon shape */}
        <div
          className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
        >
          {/* Background fill */}
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl" />
          {/* Border effect via inset shadow */}
          <div
            className="absolute inset-[1px]"
            style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
          >
            <div className="w-full h-full bg-[#0c0c14]" />
          </div>
          {/* Inner octagon with glass */}
          <div
            className="absolute inset-[2px] flex items-center justify-center"
            style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent" />
            <div className="relative text-center px-4">
              <p className={`font-display text-4xl sm:text-5xl font-black ${color}`}>{value}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-semibold">{label}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4 max-w-[180px] text-center leading-relaxed">{sub}</p>
    </div>
  );
}

/* ──────── Mini stat row ──────── */
function MiniStat({ icon: Icon, value, label, color }: {
  icon: typeof Eye;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06]">
      <Icon className={`w-4 h-4 ${color} flex-shrink-0 opacity-60`} />
      <div>
        <span className={`font-display text-lg font-black ${color}`}>{value}</span>
        <span className="text-xs text-gray-500 ml-2">{label}</span>
      </div>
    </div>
  );
}

/* ──────── Progress bar ──────── */
function ProgressRow({ label, value, pct, gradient }: {
  label: string;
  value: string;
  pct: number;
  gradient: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-400">{label}</span>
        <span className="text-xs font-bold text-white">{value}</span>
      </div>
      <div className="w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden">
        <div className={`${gradient} h-1.5 rounded-full`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function ProofSection() {
  return (
    <section id="proof" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-pink-600/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/2 w-[500px] h-[300px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">Résultats CAN 2025</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          La preuve par les chiffres
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mb-16">
          3 semaines de CAN. 452 publications. Des résultats qui parlent d'eux-mêmes.
        </p>

        {/* ──────── 3 OCTAGONAL HEADLINE STATS ──────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-12">
          <OctagonStat
            value="239M"
            label="Impressions"
            sub="La portée totale cumulée sur l'ensemble des plateformes."
            color="text-pink-400"
            glowColor="bg-pink-500/20"
          />
          <OctagonStat
            value="134M"
            label="Vues vidéo"
            sub="Toutes les vidéos vues sur YouTube, TikTok et Meta (Facebook + Instagram)."
            color="text-blue-400"
            glowColor="bg-blue-500/20"
          />
          <OctagonStat
            value="8M"
            label="Interactions"
            sub="Likes, commentaires, partages et sauvegardes cumulés."
            color="text-purple-400"
            glowColor="bg-purple-500/20"
          />
        </div>

        {/* ──────── 3 SECONDARY STATS ──────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-20">
          <MiniStat icon={UserPlus} value="198K" label="Nouveaux abonnés" color="text-green-400" />
          <MiniStat icon={Clock} value="57%" label="Rétention moyenne" color="text-amber-400" />
          <MiniStat icon={FileText} value="452" label="Publications" color="text-cyan-400" />
        </div>

        {/* ──────── ANALYSE PAR CANAL ──────── */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-3 text-center">
            Analyse par Canal
          </h3>
          <p className="text-sm text-gray-500 text-center mb-10">Audiences et performances détaillées</p>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">

            {/* ──── TIKTOK ──── */}
            <div className="group relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-cyan-500/20 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-white/[0.1]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.89a8.28 8.28 0 0 0 4.76 1.5V6.94a4.84 4.84 0 0 1-1-.25z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">TikTok</h4>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Viralité & Mixité</span>
                  </div>
                </div>

                {/* Big number */}
                <div className="my-5 text-center">
                  <p className="font-display text-4xl font-black text-cyan-400">35.9M</p>
                  <p className="text-xs text-gray-500 mt-1">vues totales · 48 capsules</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">198K</p>
                    <p className="text-[10px] text-gray-500">Nouveaux abonnés</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">4.1M</p>
                    <p className="text-[10px] text-gray-500">Likes</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">232K</p>
                    <p className="text-[10px] text-gray-500">Partages</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">25K</p>
                    <p className="text-[10px] text-gray-500">Peak CCU Live</p>
                  </div>
                </div>

                {/* Engagement detail */}
                <div className="flex items-center gap-4 mb-5 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />114K comments</span>
                  <span className="flex items-center gap-1"><Bookmark className="w-3 h-3" />290K saves</span>
                </div>

                {/* Insight */}
                <div className="p-3 rounded-lg bg-cyan-500/[0.06] border border-cyan-500/[0.1] mb-5">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-cyan-300/80 leading-relaxed">
                      Audience féminine en hausse : <span className="font-bold text-cyan-300">32% → 43%</span>. Un levier de mixité unique dans l'écosystème foot.
                    </p>
                  </div>
                </div>

                {/* Demographics */}
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-3">Démographie</p>
                <div className="space-y-2 mb-5">
                  <ProgressRow label="25-34 ans" value="43.2%" pct={43} gradient="bg-gradient-to-r from-cyan-500 to-cyan-400" />
                  <ProgressRow label="18-24 ans" value="36.4%" pct={36} gradient="bg-gradient-to-r from-cyan-500/80 to-cyan-400/80" />
                  <ProgressRow label="35+ ans" value="19.6%" pct={20} gradient="bg-gradient-to-r from-cyan-500/50 to-cyan-400/50" />
                </div>

                {/* Geography */}
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-3">Géographie</p>
                <div className="space-y-2">
                  <ProgressRow label="France" value="48%" pct={48} gradient="bg-gradient-to-r from-cyan-500 to-blue-500" />
                  <ProgressRow label="Sénégal" value="14%" pct={14} gradient="bg-gradient-to-r from-cyan-500/60 to-blue-500/60" />
                  <ProgressRow label="Côte d'Ivoire" value="10%" pct={10} gradient="bg-gradient-to-r from-cyan-500/40 to-blue-500/40" />
                </div>
              </div>
            </div>

            {/* ──── YOUTUBE ──── */}
            <div className="group relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-red-500/20 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">YouTube</h4>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Fidélité & Rétention</span>
                  </div>
                </div>

                {/* Big number */}
                <div className="my-5 text-center">
                  <p className="font-display text-4xl font-black text-red-400">5.1M</p>
                  <p className="text-xs text-gray-500 mt-1">vues totales · 38 vidéos</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">14.4M</p>
                    <p className="text-[10px] text-gray-500">Impressions</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">57.2%</p>
                    <p className="text-[10px] text-gray-500">Rétention moy.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">130K</p>
                    <p className="text-[10px] text-gray-500">Likes</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">888K</p>
                    <p className="text-[10px] text-gray-500">Spectateurs uniques</p>
                  </div>
                </div>

                {/* Live performance */}
                <div className="flex items-center gap-4 mb-5 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1"><Share2 className="w-3 h-3" />17K partages</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" />5-6 vues/viewer</span>
                </div>

                {/* Insight */}
                <div className="p-3 rounded-lg bg-red-500/[0.06] border border-red-500/[0.1] mb-5">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-red-300/80 leading-relaxed">
                      Rétention <span className="font-bold text-red-300">70-89%</span> sur les formats courts. Audience fidèle : chaque viewer regarde <span className="font-bold text-red-300">5 à 6 vidéos</span> en moyenne.
                    </p>
                  </div>
                </div>

                {/* Demographics */}
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-3">Démographie</p>
                <div className="space-y-2 mb-5">
                  <ProgressRow label="25-34 ans" value="38.3%" pct={38} gradient="bg-gradient-to-r from-red-500 to-red-400" />
                  <ProgressRow label="35-44 ans" value="23.4%" pct={23} gradient="bg-gradient-to-r from-red-500/80 to-red-400/80" />
                  <ProgressRow label="18-24 ans" value="18.2%" pct={18} gradient="bg-gradient-to-r from-red-500/50 to-red-400/50" />
                </div>

                {/* Geography */}
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-3">Géographie</p>
                <div className="space-y-2">
                  <ProgressRow label="France" value="57%" pct={57} gradient="bg-gradient-to-r from-red-500 to-pink-500" />
                  <ProgressRow label="Algérie" value="17%" pct={17} gradient="bg-gradient-to-r from-red-500/60 to-pink-500/60" />
                  <ProgressRow label="Sénégal" value="13%" pct={13} gradient="bg-gradient-to-r from-red-500/40 to-pink-500/40" />
                </div>
              </div>
            </div>

            {/* ──── META (Facebook + Instagram) ──── */}
            <div className="group relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-blue-500/20 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.477 2 2 6.477 2 12c0 2.136.669 4.116 1.81 5.74L2 22l4.26-1.81A9.94 9.94 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-3.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8.21 15.5s1.29 2 3.79 2 3.79-2 3.79-2" /></svg>
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">Meta</h4>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Facebook + Instagram</span>
                  </div>
                </div>

                {/* Big number */}
                <div className="my-5 text-center">
                  <p className="font-display text-4xl font-black text-blue-400">127.4M</p>
                  <p className="text-xs text-gray-500 mt-1">vues vidéo · 568 publications combinées</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">177.7M</p>
                    <p className="text-[10px] text-gray-500">Impressions FB</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">383K</p>
                    <p className="text-[10px] text-gray-500">Impressions/post IG</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">4.77M</p>
                    <p className="text-[10px] text-gray-500">Réactions</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">280K</p>
                    <p className="text-[10px] text-gray-500">Commentaires</p>
                  </div>
                </div>

                {/* Format performance */}
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-3">Performance par format</p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-400">Reels</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold">Format roi</span>
                    </div>
                    <span className="text-[10px] text-gray-400">19K interactions/post</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-xs font-bold text-gray-300">Photos & Carrousels</span>
                    <span className="text-[10px] text-gray-400">13.3K interactions/post</span>
                  </div>
                </div>

                {/* Insight */}
                <div className="p-3 rounded-lg bg-blue-500/[0.06] border border-blue-500/[0.1] mb-5">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-blue-300/80 leading-relaxed">
                      Audience majoritairement française : <span className="font-bold text-blue-300">52% France</span>. Le reach le plus puissant de l'écosystème OCTOGOAL. Reels Instagram en forte croissance via <span className="font-bold text-blue-300">@octogoalofficiel</span>.
                    </p>
                  </div>
                </div>

                {/* Demographics */}
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-3">Démographie</p>
                <div className="space-y-2 mb-5">
                  <ProgressRow label="25-34 ans" value="39.5%" pct={40} gradient="bg-gradient-to-r from-blue-500 to-blue-400" />
                  <ProgressRow label="35-44 ans" value="21.5%" pct={22} gradient="bg-gradient-to-r from-blue-500/80 to-blue-400/80" />
                  <ProgressRow label="18-24 ans" value="17.5%" pct={18} gradient="bg-gradient-to-r from-blue-500/50 to-blue-400/50" />
                </div>

                {/* Geography */}
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-3">Géographie</p>
                <div className="space-y-2">
                  <ProgressRow label="France" value="52%" pct={52} gradient="bg-gradient-to-r from-blue-500 to-indigo-500" />
                  <ProgressRow label="RDC" value="18%" pct={18} gradient="bg-gradient-to-r from-blue-500/60 to-indigo-500/60" />
                  <ProgressRow label="Côte d'Ivoire" value="8%" pct={8} gradient="bg-gradient-to-r from-blue-500/40 to-indigo-500/40" />
                </div>
              </div>
            </div>
          </div>

          {/* ──── Row 2: Snapchat ──── */}
          <div className="max-w-md mx-auto mt-4 sm:mt-6">

            {/* ──── SNAPCHAT ──── */}
            <div className="group relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-yellow-500/20 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center">
                    <Ghost className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">Snapchat</h4>
                    <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider">Découverte & Acquisition</span>
                  </div>
                </div>

                {/* Big number */}
                <div className="my-5 text-center">
                  <p className="font-display text-4xl font-black text-yellow-400">1.47M</p>
                  <p className="text-xs text-gray-500 mt-1">vues uniques · 13 publications</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">13.6K</p>
                    <p className="text-[10px] text-gray-500">Nouveaux followers</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="font-display text-lg font-black text-white">1m08s</p>
                    <p className="text-[10px] text-gray-500">Durée moy. de vue</p>
                  </div>
                </div>

                {/* Insight */}
                <div className="p-3 rounded-lg bg-yellow-500/[0.06] border border-yellow-500/[0.1]">
                  <div className="flex items-start gap-2">
                    <Search className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-yellow-300/80 leading-relaxed">
                      Trafic majoritairement <span className="font-bold text-yellow-300">discovery</span> (non-abonnés). Jusqu'à <span className="font-bold text-yellow-300">200K+ vues</span> par contenu — levier d'acquisition puissant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── AUDIENCE GLOBALE ──────── */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-6">Audience consolidée</p>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Démographie */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-pink-400" />
                <h3 className="text-sm font-bold text-white">Démographie</h3>
              </div>
              <div className="space-y-3">
                <ProgressRow label="Cœur de cible : 25-34 ans" value="~40%" pct={40} gradient="bg-gradient-to-r from-pink-500 to-blue-500" />
                <ProgressRow label="Hommes" value="91%" pct={91} gradient="bg-gradient-to-r from-pink-500 to-blue-500" />
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] mt-3">
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Public masculin CSP+ passionné de foot. Sur TikTok, <span className="text-white font-semibold">jusqu'à 43% de femmes</span> — un cas unique dans l'écosystème foot digital.
                  </p>
                </div>
              </div>
            </div>

            {/* Géographie */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Géographie</h3>
              </div>
              <div className="space-y-3">
                <ProgressRow label="France" value="48-57%" pct={53} gradient="bg-gradient-to-r from-blue-500 to-cyan-500" />
                <ProgressRow label="Afrique francophone" value="30%+" pct={33} gradient="bg-gradient-to-r from-blue-500/70 to-cyan-500/70" />
                <ProgressRow label="Belgique / Suisse" value="~5%" pct={5} gradient="bg-gradient-to-r from-blue-500/40 to-cyan-500/40" />
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] mt-3">
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    <span className="text-white font-semibold">Audience majoritairement française</span> sur toutes les plateformes. Forte pénétration en Afrique francophone — un bonus de reach exceptionnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── CLOSING ──────── */}
        <p className="text-center text-base sm:text-lg text-gray-400">
          En <span className="text-white font-semibold">3 semaines</span> de CAN. <span className="text-pink-400 font-semibold">Imaginez une saison complète.</span>
        </p>
      </div>
    </section>
  );
}
