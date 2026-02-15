import { AlertTriangle, Quote, Star, Users, Clock, Award, Tv, Radio, Layers } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ──────── PARTIE 1 — "À la base, il y avait Momo" ──────── */}
        <div className="mb-24 sm:mb-32">
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">L'histoire</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            À la base, il y avait <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Momo</span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mb-12">
            L'homme qui a révolutionné la culture foot sur internet.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden bg-gray-900">
                <img
                  src="/henni-plateau.png"
                  alt="Mohamed Henni sur le plateau OCTOGOAL"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

            {/* 3 faits clés - glassmorphism cards */}
            <div className="space-y-4">
              {[
                { icon: Users, value: '11M+', label: 'abonnés sur les réseaux', color: 'text-pink-400', gradFrom: 'from-pink-500/[0.08]', gradTo: 'to-pink-500/[0.02]', border: 'border-pink-500/[0.12]' },
                { icon: Clock, value: '10+', label: 'ans de domination', color: 'text-blue-400', gradFrom: 'from-blue-500/[0.08]', gradTo: 'to-blue-500/[0.02]', border: 'border-blue-500/[0.12]' },
                { icon: Award, value: 'N°1', label: 'Influenceur Foot en France', color: 'text-purple-400', gradFrom: 'from-purple-500/[0.08]', gradTo: 'to-purple-500/[0.02]', border: 'border-purple-500/[0.12]' },
              ].map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className={`flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r ${fact.gradFrom} ${fact.gradTo} backdrop-blur-md border ${fact.border} hover:border-opacity-50 transition-all`}>
                    <Icon className={`w-5 h-5 ${fact.color} flex-shrink-0`} />
                    <div>
                      <span className={`font-display text-2xl sm:text-3xl font-black ${fact.color}`}>{fact.value}</span>
                      <span className="text-sm text-gray-400 ml-2">{fact.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transition */}
          <div className="text-center py-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-700" />
              <Star className="w-4 h-4 text-gray-600" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-700" />
            </div>
            <p className="text-lg sm:text-xl text-gray-400 italic">
              Mais Momo était seul... Et son potentiel était <span className="text-white font-bold not-italic">100x supérieur.</span>
            </p>
          </div>
        </div>

        {/* ──────── PARTIE 2 — "L'émission, puis le média" ──────── */}
        <div className="mb-24 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Il lance <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">son émission</span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mb-12">
            Pas un média d'abord. Une émission. Le show d'après-match qui manquait à toute une génération.
          </p>

          {/* L'émission → le média */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-pink-500/[0.1] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.04] to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/[0.15] flex items-center justify-center">
                    <Tv className="w-5 h-5 text-pink-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">L'émission</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Un plateau, Momo au micro, les après-matchs en direct. Le rendez-vous que la communauté foot attendait.
                </p>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <Radio className="w-4 h-4 text-pink-400" />
                  <span className="text-xs text-gray-300 font-semibold">Live simultané sur 5 plateformes</span>
                </div>
              </div>
            </div>

            <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-blue-500/[0.1] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/[0.15] flex items-center justify-center">
                    <Layers className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">Le média</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Autour de l'émission, tout un écosystème de contenus : capsules, Reels, TikToks, articles, Stories — sur 6 plateformes.
                </p>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-gray-300 font-semibold">452 publications pendant la CAN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pourquoi ça marche */}
          <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-4">Pourquoi ça marche</p>
          <div className="space-y-3 mb-12">
            {[
              { num: '01', text: 'Les créateurs foot ne sont pas structurés. OCTOGOAL l\'est.' },
              { num: '02', text: "Les marques n'ont aucun accès simple à la Génération Foot. OCTOGOAL leur ouvre la porte." },
              { num: '03', text: 'Personne ne parle au public foot comme Momo. Personne.' },
            ].map((problem) => (
              <div key={problem.num} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:bg-white/[0.04] transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/[0.15] flex items-center justify-center backdrop-blur-sm">
                  <AlertTriangle className="w-4 h-4 text-pink-400" />
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-bold text-gray-600">{problem.num}</span>
                  <p className="text-base sm:text-lg text-gray-300 font-medium">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ──────── PARTIE 3 — Citation clé ──────── */}
        <div>
          <div className="relative p-8 sm:p-12 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] overflow-hidden">
            {/* Inner glass glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-b from-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="relative text-center">
              <Quote className="w-8 h-8 text-pink-400/40 mx-auto mb-6 rotate-180" />
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-4">L'émission du peuple</p>
              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                "C'est du spectacle. C'est du show.<br />
                <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">C'est du foot qui rassemble."</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
