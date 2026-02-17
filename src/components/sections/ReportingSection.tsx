import { useState } from 'react';
import {
  BarChart3, TrendingUp, Users, Eye, Heart, MessageCircle, Share2, Bookmark,
  Play, Globe, Monitor, Smartphone, Clock, UserPlus, Image as ImageIcon, FileText,
  ChevronDown, ChevronUp, Zap
} from 'lucide-react';

type Platform = 'global' | 'youtube' | 'tiktok' | 'facebook' | 'snapchat';

const platformConfig: Record<Platform, { label: string; gradient: string; accent: string; border: string; bg: string }> = {
  global: { label: 'Global', gradient: 'from-cyan-500 via-purple-500 to-orange-500', accent: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'from-cyan-600/20 to-purple-600/20' },
  youtube: { label: 'YouTube', gradient: 'from-red-500 to-red-700', accent: 'text-red-400', border: 'border-red-400/30', bg: 'from-red-600/20 to-red-800/20' },
  tiktok: { label: 'TikTok', gradient: 'from-cyan-400 to-pink-500', accent: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'from-cyan-600/20 to-pink-600/20' },
  facebook: { label: 'Facebook', gradient: 'from-blue-500 to-blue-700', accent: 'text-blue-400', border: 'border-blue-400/30', bg: 'from-blue-600/20 to-blue-800/20' },
  snapchat: { label: 'Snapchat', gradient: 'from-yellow-400 to-yellow-600', accent: 'text-yellow-400', border: 'border-yellow-400/30', bg: 'from-yellow-600/20 to-yellow-800/20' },
};

function StatBigCard({ value, label, sublabel, gradient, icon: Icon }: { value: string; label: string; sublabel?: string; gradient: string; icon: typeof BarChart3 }) {
  return (
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} opacity-30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all`} />
      <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center justify-center text-center">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white/60 mb-4" />
        <p className={`text-3xl sm:text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{value}</p>
        <p className="text-base sm:text-lg font-bold text-white">{label}</p>
        {sublabel && <p className="text-sm text-slate-400 mt-1">{sublabel}</p>}
      </div>
    </div>
  );
}

function EngagementRow({ icon: Icon, label, value, gradient }: { icon: typeof Heart; label: string; value: string; gradient: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-400 font-semibold">{label}</p>
        <p className="text-xl sm:text-2xl font-black text-white">{value}</p>
      </div>
    </div>
  );
}

function GeoBar({ country, percent, color }: { country: string; percent: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-white">{country}</span>
        <span className="text-sm font-bold text-slate-400">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function DemoBar({ label, percent, color }: { label: string; percent: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-bold text-white">{label}</span>
        <span className="text-xs sm:text-sm font-bold text-slate-400">{percent}%</span>
      </div>
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function CollapsibleCard({ title, gradient, children, defaultOpen = false }: { title: string; gradient: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} opacity-20 rounded-3xl blur-2xl`} />
      <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-white/5 transition-colors"
        >
          <h4 className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{title}</h4>
          {isOpen ? <ChevronUp className="w-6 h-6 text-white/60" /> : <ChevronDown className="w-6 h-6 text-white/60" />}
        </button>
        {isOpen && <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6">{children}</div>}
      </div>
    </div>
  );
}

// ── Platform tab content ──

function GlobalStats() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatBigCard icon={FileText} value="452" label="Publications" sublabel="~9,2 posts/jour" gradient="from-cyan-500 to-blue-600" />
        <StatBigCard icon={Eye} value="239M" label="Impressions" sublabel="Visibilité totale" gradient="from-blue-500 to-indigo-600" />
        <StatBigCard icon={Play} value="134M" label="Vues vidéo" sublabel="Consommation totale" gradient="from-indigo-500 to-purple-600" />
        <StatBigCard icon={Heart} value="8M" label="Interactions" sublabel="Engagement total" gradient="from-purple-500 to-pink-600" />
      </div>

      {/* Key insight */}
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-orange-500/30 rounded-3xl blur-3xl" />
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-2xl">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Bilan CAN 2025</h4>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                5 lives diffusés simultanément sur YouTube, Twitch, Facebook et TikTok. 452 publications au total sur l'ensemble des réseaux sociaux de Mohamed Henni, générant <span className="text-cyan-400 font-bold">239 millions d'impressions</span> et <span className="text-purple-400 font-bold">8 millions d'interactions</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function YouTubeStats() {
  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Live stats */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Monitor className="w-6 h-6 text-red-400" />
          Performances Lives
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <StatBigCard icon={Users} value="1 451" label="Viewers moyens / session" sublabel="Pic à 2 612 (Live 4)" gradient="from-red-500 to-red-700" />
          <StatBigCard icon={TrendingUp} value="7 255" label="Viewers cumulés" sublabel="Croissance constante" gradient="from-red-500 to-orange-600" />
          <StatBigCard icon={Zap} value="×8" label="Croissance audience" sublabel="Live 1 → Live 4" gradient="from-orange-500 to-red-600" />
        </div>
      </div>

      {/* Post-live capsules */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Play className="w-6 h-6 text-red-400" />
          Capsules Post-Live (38 vidéos)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatBigCard icon={Eye} value="5,1M" label="Vues totales" gradient="from-red-500 to-red-700" />
          <StatBigCard icon={BarChart3} value="14,4M" label="Impressions" gradient="from-red-600 to-orange-600" />
          <StatBigCard icon={Heart} value="130K" label="J'aime" gradient="from-orange-500 to-red-500" />
          <StatBigCard icon={Share2} value="17K" label="Partages" gradient="from-red-400 to-pink-600" />
        </div>
      </div>

      {/* Retention & unique viewers */}
      <div className="grid sm:grid-cols-2 gap-6">
        <CollapsibleCard title="Rétention & Fidélité" gradient="from-red-500 to-red-700" defaultOpen>
          <div className="space-y-4">
            <EngagementRow icon={Clock} label="Rétention moyenne" value="57,2%" gradient="from-red-500 to-red-700" />
            <EngagementRow icon={Users} label="Spectateurs uniques" value="888K" gradient="from-red-600 to-orange-600" />
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="text-white font-bold">Vidéos courtes (&lt;60s)</span> : 70-89% de rétention<br />
              <span className="text-white font-bold">Vidéos longues (&gt;150s)</span> : 42-46% de rétention<br />
              En moyenne, chaque spectateur regarde 5 à 6 vidéos.
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Démographie" gradient="from-red-500 to-orange-600" defaultOpen>
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Tranches d'âge</p>
            <DemoBar label="25-34 ans (Cœur de cible)" percent={38.3} color="from-red-500 to-red-600" />
            <DemoBar label="35-44 ans" percent={23.4} color="from-red-400 to-orange-500" />
            <DemoBar label="18-24 ans" percent={18.2} color="from-orange-400 to-yellow-500" />
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Genre</p>
              <div className="flex gap-4">
                <div className="flex-1 text-center p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <p className="text-2xl font-black text-blue-400">91%</p>
                  <p className="text-xs font-bold text-slate-400">Hommes</p>
                </div>
                <div className="flex-1 text-center p-3 rounded-xl bg-pink-500/10 border border-pink-400/20">
                  <p className="text-2xl font-black text-pink-400">9%</p>
                  <p className="text-xs font-bold text-slate-400">Femmes</p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleCard>
      </div>

      {/* Geo */}
      <CollapsibleCard title="Répartition Géographique" gradient="from-red-500 to-red-700">
        <div className="space-y-3">
          <GeoBar country="🇫🇷 France" percent={57} color="from-blue-500 to-blue-600" />
          <GeoBar country="🇩🇿 Algérie" percent={17} color="from-green-500 to-green-600" />
          <GeoBar country="🇸🇳 Sénégal" percent={13} color="from-green-400 to-yellow-500" />
          <GeoBar country="🇲🇦 Maroc" percent={10} color="from-red-500 to-green-500" />
          <GeoBar country="🇧🇪 Belgique" percent={5} color="from-yellow-500 to-red-500" />
          <p className="text-xs text-slate-500 mt-2">Moyennes sur l'ensemble des 5 lives</p>
        </div>
      </CollapsibleCard>
    </div>
  );
}

function TikTokStats() {
  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Live stats */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Monitor className="w-6 h-6 text-cyan-400" />
          Performances Lives
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <StatBigCard icon={Eye} value="2,25M" label="Vues cumulées" sublabel="5 sessions live" gradient="from-cyan-400 to-pink-500" />
          <StatBigCard icon={Users} value="25 000" label="Pic CCV" sublabel="Record Live 4" gradient="from-pink-500 to-cyan-400" />
          <StatBigCard icon={TrendingUp} value="×5" label="Audience multipliée" sublabel="Du Live 1 au Live 5" gradient="from-cyan-500 to-purple-500" />
        </div>
      </div>

      {/* Post-live capsules */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Smartphone className="w-6 h-6 text-cyan-400" />
          Capsules Post-Live (48 vidéos)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatBigCard icon={Eye} value="31M" label="Vues totales" sublabel="~646K / vidéo" gradient="from-cyan-400 to-cyan-600" />
          <StatBigCard icon={UserPlus} value="172K" label="Nouveaux abonnés" sublabel="~3 596 / vidéo" gradient="from-cyan-500 to-pink-500" />
          <StatBigCard icon={Heart} value="2,24M" label="Likes" gradient="from-pink-400 to-pink-600" />
          <StatBigCard icon={Clock} value="196K h" label="Temps de lecture" sublabel="≈ 22 ans de visionnage" gradient="from-purple-500 to-cyan-500" />
        </div>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <EngagementRow icon={MessageCircle} label="Commentaires" value="114 000+" gradient="from-cyan-400 to-pink-500" />
          <EngagementRow icon={Share2} label="Partages" value="232 400" gradient="from-pink-500 to-purple-500" />
          <EngagementRow icon={Bookmark} label="Enregistrements" value="178 800" gradient="from-purple-500 to-cyan-500" />
        </div>
      </div>

      {/* Demo & Geo */}
      <div className="grid sm:grid-cols-2 gap-6">
        <CollapsibleCard title="Démographie" gradient="from-cyan-400 to-pink-500" defaultOpen>
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Tranches d'âge</p>
            <DemoBar label="25-34 ans (Cœur de cible)" percent={43.2} color="from-cyan-400 to-cyan-600" />
            <DemoBar label="18-24 ans" percent={36.4} color="from-pink-400 to-pink-600" />
            <DemoBar label="35 ans +" percent={19.6} color="from-purple-400 to-purple-600" />
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Genre</p>
              <div className="flex gap-4">
                <div className="flex-1 text-center p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <p className="text-2xl font-black text-blue-400">56-67%</p>
                  <p className="text-xs font-bold text-slate-400">Hommes</p>
                </div>
                <div className="flex-1 text-center p-3 rounded-xl bg-pink-500/10 border border-pink-400/20">
                  <p className="text-2xl font-black text-pink-400">32-43%</p>
                  <p className="text-xs font-bold text-slate-400">Femmes</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Audience féminine en forte hausse (32% → 43%)</p>
            </div>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Répartition Géographique" gradient="from-cyan-400 to-pink-500" defaultOpen>
          <div className="space-y-3">
            <GeoBar country="🇫🇷 France" percent={48} color="from-blue-500 to-blue-600" />
            <GeoBar country="🇸🇳 Sénégal" percent={14} color="from-green-400 to-yellow-500" />
            <GeoBar country="🇨🇮 Côte d'Ivoire" percent={10} color="from-orange-400 to-green-500" />
            <GeoBar country="🇩🇿 Algérie" percent={8} color="from-green-500 to-green-600" />
            <GeoBar country="🇨🇩 RDC / 🇧🇪 Belgique / 🇲🇦 Maroc" percent={6} color="from-yellow-500 to-orange-500" />
          </div>
        </CollapsibleCard>
      </div>

      {/* Strategic insights */}
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 rounded-3xl blur-3xl" />
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10">
          <h4 className="text-lg font-black text-white mb-4">Points stratégiques</h4>
          <ul className="space-y-3 text-sm sm:text-base text-slate-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-cyan-400 flex-shrink-0" />
              <span><strong className="text-white">Viralité massive</strong> : Passage de 2,4K à 25K viewers entre le Live 2 et le Live 4</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-pink-400 flex-shrink-0" />
              <span><strong className="text-white">Mixité croissante</strong> : TikTok attire un public féminin beaucoup plus large (jusqu'à 43%)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span><strong className="text-white">Rendement algorithmique</strong> : 1 abonné pour ~180 vues — profil "destination" et non simple canal de passage</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FacebookStats() {
  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Live stats */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Monitor className="w-6 h-6 text-blue-400" />
          Performances Lives
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <StatBigCard icon={Users} value="2 598" label="Pic viewers simultanés" sublabel="Live du 10/01" gradient="from-blue-500 to-blue-700" />
          <StatBigCard icon={Eye} value="113K+" label="Spectateurs cumulés" sublabel="Sur les sessions live" gradient="from-blue-600 to-indigo-600" />
          <StatBigCard icon={TrendingUp} value="48,2K" label="Volume France" sublabel="Record le 10/01" gradient="from-indigo-500 to-blue-600" />
        </div>
      </div>

      {/* Post-live publications */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <ImageIcon className="w-6 h-6 text-blue-400" />
          Publications Post-Live (333 posts)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatBigCard icon={Eye} value="177,7M" label="Impressions" gradient="from-blue-500 to-blue-700" />
          <StatBigCard icon={Play} value="127,4M" label="Vues vidéo" gradient="from-blue-600 to-indigo-600" />
          <StatBigCard icon={Heart} value="4,77M" label="Réactions" gradient="from-indigo-500 to-blue-500" />
          <StatBigCard icon={MessageCircle} value="280K" label="Commentaires" gradient="from-blue-400 to-blue-600" />
        </div>
      </div>

      {/* Format performance */}
      <CollapsibleCard title="Performance par Format" gradient="from-blue-500 to-blue-700" defaultOpen>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { format: 'Reels', share: '25,5%', interactions: '19 009', impressions: '399 787', color: 'from-blue-500 to-indigo-600', label: 'Format roi' },
            { format: 'Photos', share: '70,6%', interactions: '13 267', impressions: '383 220', color: 'from-blue-400 to-blue-600', label: 'Pilier du volume' },
            { format: 'Textes', share: '3,6%', interactions: '9 680', impressions: '268 578', color: 'from-indigo-400 to-blue-500', label: 'Complémentaire' },
          ].map((f) => (
            <div key={f.format} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-white">{f.format}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-lg bg-gradient-to-r ${f.color} text-white`}>{f.share}</span>
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase">{f.label}</p>
              <div className="space-y-1">
                <p className="text-sm text-slate-300"><span className="text-white font-bold">{f.interactions}</span> interactions / post</p>
                <p className="text-sm text-slate-300"><span className="text-white font-bold">{f.impressions}</span> impressions / post</p>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleCard>

      {/* Demo & Geo */}
      <div className="grid sm:grid-cols-2 gap-6">
        <CollapsibleCard title="Démographie" gradient="from-blue-500 to-blue-700" defaultOpen>
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Tranches d'âge</p>
            <DemoBar label="25-34 ans" percent={39.5} color="from-blue-500 to-blue-600" />
            <DemoBar label="35-44 ans" percent={21.5} color="from-blue-400 to-indigo-500" />
            <DemoBar label="18-24 ans" percent={17.5} color="from-indigo-400 to-blue-500" />
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Genre</p>
              <div className="flex gap-4">
                <div className="flex-1 text-center p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <p className="text-2xl font-black text-blue-400">91%</p>
                  <p className="text-xs font-bold text-slate-400">Hommes</p>
                </div>
                <div className="flex-1 text-center p-3 rounded-xl bg-pink-500/10 border border-pink-400/20">
                  <p className="text-2xl font-black text-pink-400">8,5%</p>
                  <p className="text-xs font-bold text-slate-400">Femmes</p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Répartition Géographique" gradient="from-blue-500 to-blue-700" defaultOpen>
          <div className="space-y-3">
            <GeoBar country="🇫🇷 France" percent={52} color="from-blue-500 to-blue-600" />
            <GeoBar country="🇨🇩 RDC" percent={18} color="from-green-500 to-yellow-500" />
            <GeoBar country="🇨🇮 Côte d'Ivoire" percent={8} color="from-orange-400 to-green-500" />
            <GeoBar country="🇨🇲 Cameroun" percent={6} color="from-green-500 to-red-500" />
            <GeoBar country="🇧🇪 Belgique / 🇨🇭 Suisse" percent={5} color="from-yellow-500 to-red-500" />
            <p className="text-xs text-slate-500 mt-2">La RDC — percée fulgurante le 06/01 avec 25,5K spectateurs en 1ère place</p>
          </div>
        </CollapsibleCard>
      </div>
    </div>
  );
}

function SnapchatStats() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Smartphone className="w-6 h-6 text-yellow-400" />
          Show Snapchat (13 publications)
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <StatBigCard icon={Eye} value="1,47M" label="Vues uniques" sublabel="Portée totale" gradient="from-yellow-400 to-yellow-600" />
          <StatBigCard icon={UserPlus} value="+13 671" label="Nouveaux followers" sublabel="Via les stories" gradient="from-yellow-500 to-orange-500" />
          <StatBigCard icon={Clock} value="1min 08s" label="Temps moyen" sublabel="Durée de visionnage" gradient="from-orange-400 to-yellow-500" />
        </div>
      </div>

      <CollapsibleCard title="Analyse de l'Audience" gradient="from-yellow-400 to-yellow-600" defaultOpen>
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <p className="text-sm text-slate-300"><strong className="text-white">Découverte</strong> : Majorité du trafic vient de non-abonnés (ex: 200K+ sur "Sénégalais")</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <p className="text-sm text-slate-300"><strong className="text-white">Fidélisation</strong> : Socle de 30K-80K spectateurs réguliers selon le sujet</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Snapchat est un levier puissant de <strong className="text-white">découvrabilité</strong> : la majorité écrasante du trafic provient de personnes qui ne suivent pas encore le compte, constituant un canal d'acquisition massif.
          </p>
        </div>
      </CollapsibleCard>
    </div>
  );
}

// ── Main Section ──

export default function ReportingSection() {
  const [activePlatform, setActivePlatform] = useState<Platform>('global');

  const platforms: Platform[] = ['global', 'youtube', 'tiktok', 'facebook', 'snapchat'];

  return (
    <section id="reporting" className="relative py-24 sm:py-32 md:py-40 px-5 sm:px-8 bg-[#08080E] text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[150px]" />
      </div>
      <div className="grain absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="animate-fade-in mb-16 sm:mb-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-600 mb-4">03 — Reporting</p>
          <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        {/* Section header */}
        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in-up max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6">
            Stats détaillées<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              CAN 2025
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Performance détaillée sur l'ensemble des plateformes
          </p>
        </div>

        {/* Platform tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14 animate-fade-in-up delay-200">
          {platforms.map((p) => {
            const cfg = platformConfig[p];
            const isActive = activePlatform === p;
            return (
              <button
                key={p}
                onClick={() => setActivePlatform(p)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-white/10 border border-white/15'
                    : 'text-slate-500 bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {cfg.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="animate-fade-in-up">
          {activePlatform === 'global' && <GlobalStats />}
          {activePlatform === 'youtube' && <YouTubeStats />}
          {activePlatform === 'tiktok' && <TikTokStats />}
          {activePlatform === 'facebook' && <FacebookStats />}
          {activePlatform === 'snapchat' && <SnapchatStats />}
        </div>
      </div>
    </section>
  );
}
