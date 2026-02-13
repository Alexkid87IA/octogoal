import { useState } from 'react';
import {
  BarChart3, TrendingUp, Users, Eye, Heart, MessageCircle, Share2, Bookmark,
  Play, Monitor, Smartphone, Clock, UserPlus, Image as ImageIcon, FileText,
  ChevronDown, ChevronUp, Zap
} from 'lucide-react';

type Platform = 'youtube' | 'tiktok' | 'facebook' | 'snapchat';

function StatCard({ value, label, desc, icon: Icon }: { value: string; label: string; desc?: string; icon: typeof BarChart3 }) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
      <Icon className="w-4 h-4 text-violet-500/60 mb-3" />
      <p className="font-display text-2xl sm:text-3xl font-black text-white">{value}</p>
      <p className="text-sm font-semibold text-gray-300 mt-1">{label}</p>
      {desc && <p className="text-xs text-gray-600 mt-0.5">{desc}</p>}
    </div>
  );
}

function DemoBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <span className="text-sm font-bold text-white">{percent}%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-violet-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function GeoRow({ country, percent }: { country: string; percent: number }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-300">{country}</span>
      <div className="flex items-center gap-3">
        <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-violet-500/60" style={{ width: `${percent}%` }} />
        </div>
        <span className="text-sm font-bold text-white w-10 text-right">{percent}%</span>
      </div>
    </div>
  );
}

function Collapsible({ title, children, open = false }: { title: string; children: React.ReactNode; open?: boolean }) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div className="rounded-2xl border border-gray-800 overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 sm:p-6 hover:bg-gray-900/50 transition-colors text-left">
        <span className="font-display text-base sm:text-lg font-bold text-white">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>
      {isOpen && <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-4 border-t border-gray-800 pt-4">{children}</div>}
    </div>
  );
}

function YouTubeTab() {
  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Eye} value="5,1M" label="Vues totales" desc="38 capsules" />
        <StatCard icon={BarChart3} value="14,4M" label="Impressions" />
        <StatCard icon={Heart} value="130K" label="J'aime" />
        <StatCard icon={Clock} value="57,2%" label="Rétention moyenne" desc="Excellente" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Collapsible title="Démographie" open>
          <DemoBar label="25-34 ans (cœur de cible)" percent={38.3} />
          <DemoBar label="35-44 ans" percent={23.4} />
          <DemoBar label="18-24 ans" percent={18.2} />
          <div className="flex gap-3 mt-4 pt-4 border-t border-gray-800">
            <div className="flex-1 p-3 rounded-xl bg-gray-800/50 text-center">
              <p className="font-display text-xl font-black text-white">91%</p>
              <p className="text-[11px] text-gray-500">Hommes</p>
            </div>
            <div className="flex-1 p-3 rounded-xl bg-gray-800/50 text-center">
              <p className="font-display text-xl font-black text-white">9%</p>
              <p className="text-[11px] text-gray-500">Femmes</p>
            </div>
          </div>
        </Collapsible>
        <Collapsible title="Géographie" open>
          <GeoRow country="🇫🇷 France" percent={57} />
          <GeoRow country="🇩🇿 Algérie" percent={17} />
          <GeoRow country="🇸🇳 Sénégal" percent={13} />
          <GeoRow country="🇲🇦 Maroc" percent={10} />
          <GeoRow country="🇧🇪 Belgique" percent={5} />
        </Collapsible>
      </div>
      <div className="p-5 rounded-2xl bg-gray-900/50 border border-gray-800">
        <p className="text-sm text-gray-400"><span className="text-white font-semibold">888K spectateurs uniques</span> — chaque spectateur a regardé en moyenne 5 à 6 vidéos. Vidéos courtes : 70-89% de rétention.</p>
      </div>
    </div>
  );
}

function TikTokTab() {
  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Eye} value="31M" label="Vues totales" desc="48 capsules" />
        <StatCard icon={UserPlus} value="172K" label="Nouveaux abonnés" desc="~3 596 / vidéo" />
        <StatCard icon={Heart} value="2,24M" label="Likes" />
        <StatCard icon={Clock} value="196K h" label="Temps de lecture" desc="= 22 ans de visionnage" />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
          <MessageCircle className="w-4 h-4 text-violet-500/60 mx-auto mb-2" />
          <p className="font-display text-xl font-black text-white">114K</p>
          <p className="text-xs text-gray-500">Commentaires</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
          <Share2 className="w-4 h-4 text-violet-500/60 mx-auto mb-2" />
          <p className="font-display text-xl font-black text-white">232K</p>
          <p className="text-xs text-gray-500">Partages</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
          <Bookmark className="w-4 h-4 text-violet-500/60 mx-auto mb-2" />
          <p className="font-display text-xl font-black text-white">178K</p>
          <p className="text-xs text-gray-500">Enregistrements</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Collapsible title="Démographie" open>
          <DemoBar label="25-34 ans (cœur de cible)" percent={43.2} />
          <DemoBar label="18-24 ans" percent={36.4} />
          <DemoBar label="35 ans +" percent={19.6} />
          <div className="flex gap-3 mt-4 pt-4 border-t border-gray-800">
            <div className="flex-1 p-3 rounded-xl bg-gray-800/50 text-center">
              <p className="font-display text-xl font-black text-white">56-67%</p>
              <p className="text-[11px] text-gray-500">Hommes</p>
            </div>
            <div className="flex-1 p-3 rounded-xl bg-gray-800/50 text-center">
              <p className="font-display text-xl font-black text-white">32-43%</p>
              <p className="text-[11px] text-gray-500">Femmes (en hausse)</p>
            </div>
          </div>
        </Collapsible>
        <Collapsible title="Géographie" open>
          <GeoRow country="🇫🇷 France" percent={48} />
          <GeoRow country="🇸🇳 Sénégal" percent={14} />
          <GeoRow country="🇨🇮 Côte d'Ivoire" percent={10} />
          <GeoRow country="🇩🇿 Algérie" percent={8} />
          <GeoRow country="🇨🇩🇧🇪🇲🇦 Autres" percent={6} />
        </Collapsible>
      </div>
    </div>
  );
}

function FacebookTab() {
  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Eye} value="177,7M" label="Impressions" desc="333 publications" />
        <StatCard icon={Play} value="127,4M" label="Vues vidéo" />
        <StatCard icon={Heart} value="4,77M" label="Réactions" />
        <StatCard icon={MessageCircle} value="280K" label="Commentaires" />
      </div>
      <Collapsible title="Performance par format" open>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { format: 'Reels', share: '25,5%', interactions: '19 009 / post', impressions: '399 787 / post', tag: 'Format roi' },
            { format: 'Photos', share: '70,6%', interactions: '13 267 / post', impressions: '383 220 / post', tag: 'Volume' },
            { format: 'Textes', share: '3,6%', interactions: '9 680 / post', impressions: '268 578 / post', tag: 'Complément' },
          ].map((f) => (
            <div key={f.format} className="p-4 rounded-xl bg-gray-800/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-white">{f.format}</span>
                <span className="text-[10px] font-bold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">{f.share}</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">{f.tag}</p>
              <p className="text-xs text-gray-400"><span className="text-white font-semibold">{f.interactions}</span> interactions</p>
              <p className="text-xs text-gray-400"><span className="text-white font-semibold">{f.impressions}</span> impressions</p>
            </div>
          ))}
        </div>
      </Collapsible>
      <div className="grid sm:grid-cols-2 gap-4">
        <Collapsible title="Démographie">
          <DemoBar label="25-34 ans" percent={39.5} />
          <DemoBar label="35-44 ans" percent={21.5} />
          <DemoBar label="18-24 ans" percent={17.5} />
        </Collapsible>
        <Collapsible title="Géographie">
          <GeoRow country="🇫🇷 France" percent={52} />
          <GeoRow country="🇨🇩 RDC" percent={18} />
          <GeoRow country="🇨🇮 Côte d'Ivoire" percent={8} />
          <GeoRow country="🇨🇲 Cameroun" percent={6} />
          <GeoRow country="🇧🇪🇨🇭 Belgique/Suisse" percent={5} />
        </Collapsible>
      </div>
    </div>
  );
}

function SnapchatTab() {
  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon={Eye} value="1,47M" label="Vues uniques" desc="13 publications" />
        <StatCard icon={UserPlus} value="+13 671" label="Nouveaux followers" />
        <StatCard icon={Clock} value="1min 08s" label="Temps moyen de visionnage" />
      </div>
      <div className="p-5 rounded-2xl bg-gray-900/50 border border-gray-800 space-y-3">
        <p className="text-sm text-gray-400">
          <span className="text-white font-semibold">Découverte massive</span> — La majorité du trafic vient de non-abonnés (ex: 200K+ sur "Sénégalais"). Socle de 30K-80K spectateurs réguliers.
        </p>
        <p className="text-sm text-gray-400">
          Snapchat est un levier puissant d'<span className="text-violet-400 font-semibold">acquisition</span> : canal idéal pour toucher de nouvelles audiences.
        </p>
      </div>
    </div>
  );
}

export default function BilanSection() {
  const [active, setActive] = useState<Platform>('youtube');

  const tabs: { key: Platform; label: string }[] = [
    { key: 'youtube', label: 'YouTube' },
    { key: 'tiktok', label: 'TikTok' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'snapchat', label: 'Snapchat' },
  ];

  return (
    <section id="bilan" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-4">Bilan CAN 2025</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          Ce qu'OCTOGOAL a réalisé
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mb-4">
          452 publications, 239M d'impressions, 134M de vues, 8M d'interactions — en détail, plateforme par plateforme.
        </p>

        {/* Global summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 text-center">
            <p className="font-display text-xl sm:text-2xl font-black text-violet-400">452</p>
            <p className="text-xs text-gray-500">Publications</p>
          </div>
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 text-center">
            <p className="font-display text-xl sm:text-2xl font-black text-violet-400">239M</p>
            <p className="text-xs text-gray-500">Impressions</p>
          </div>
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 text-center">
            <p className="font-display text-xl sm:text-2xl font-black text-violet-400">134M</p>
            <p className="text-xs text-gray-500">Vues vidéo</p>
          </div>
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 text-center">
            <p className="font-display text-xl sm:text-2xl font-black text-violet-400">8M</p>
            <p className="text-xs text-gray-500">Interactions</p>
          </div>
        </div>

        {/* Platform tabs */}
        <div className="flex gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                active === t.key
                  ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                  : 'text-gray-500 hover:text-gray-300 border border-transparent hover:border-gray-800'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div>
          {active === 'youtube' && <YouTubeTab />}
          {active === 'tiktok' && <TikTokTab />}
          {active === 'facebook' && <FacebookTab />}
          {active === 'snapchat' && <SnapchatTab />}
        </div>
      </div>
    </section>
  );
}
