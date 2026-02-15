import { Users, Globe, Tv, Target } from 'lucide-react';

export default function ConceptSection() {
  return (
    <section id="concept" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Photo Mohamed Henni */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-2xl border border-gray-800 overflow-hidden">
              <img
                src="/henni-plateau.png"
                alt="Mohamed Henni sur le plateau OCTOGOAL"
                className="w-full h-full object-cover"
              />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-pink-500/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text */}
          <div className="animate-fade-in-up order-1 lg:order-2">
            <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-6">Le concept</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              Le média foot qui change la donne
            </h2>
            <div className="space-y-5 text-base text-gray-400 leading-relaxed">
              <p>
                OCTOGOAL est le média football porté par <span className="text-white font-semibold">Mohamed Henni</span>, l'un des créateurs les plus influents de France avec <span className="text-pink-400 font-semibold">plus de 11 millions d'abonnés</span>.
              </p>
              <p>
                Pendant la CAN 2025, OCTOGOAL a couvert la compétition avec des émissions live diffusées simultanément sur YouTube, TikTok, Facebook et Twitch. Un dispositif multiplateforme qui a généré des résultats massifs.
              </p>
              <p>
                L'audience : jeune, engagée, présente en France et dans toute l'Afrique francophone — un territoire encore sous-exploité par les annonceurs.
              </p>
            </div>
          </div>
        </div>

        {/* Key figures */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up delay-200">
          {[
            { icon: Users, value: '11M+', label: 'Abonnés cumulés', desc: 'Tous réseaux confondus', color: 'pink' },
            { icon: Tv, value: '7', label: 'Émissions live', desc: 'CAN 2025', color: 'pink' },
            { icon: Globe, value: '6', label: 'Plateformes', desc: 'YouTube, TikTok, FB, Snap...', color: 'pink' },
            { icon: Target, value: '25-34', label: 'ans — cœur de cible', desc: '60%+ de l\'audience', color: 'pink' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="p-5 sm:p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                <Icon className="w-5 h-5 text-pink-500/70 mb-4" />
                <p className="font-display text-2xl sm:text-3xl font-black text-white">{item.value}</p>
                <p className="text-sm font-semibold text-gray-300 mt-1">{item.label}</p>
                <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
