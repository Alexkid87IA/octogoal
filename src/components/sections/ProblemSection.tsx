import { XCircle, ArrowRight } from 'lucide-react';
import BackgroundEffects from '../layout/BackgroundEffects';

export default function ProblemSection() {
  const problems = [
    {
      title: 'Les créateurs foot ne sont pas structurés',
      points: [
        'Trop de dépendance aux réseaux',
        'Pas de médias hybrides foot + culture Internet',
        'Du contenu massif mais non industrialisé',
        'Pas de formats récurrents, pas de ligne éditoriale'
      ]
    },
    {
      title: 'Les marques n\'ont aucune offre simple pour toucher la Génération Foot',
      points: [
        'Audience jeune = difficile à capter',
        'Fragmentée entre TikTok, Insta, YouTube, Snap',
        'Les médias traditionnels ne parlent plus leur langage',
        'Impossible de toucher cette audience avec des formats classiques'
      ]
    },
    {
      title: 'Momo a une puissance ÉNORME… mais sous-exploitée',
      points: [
        '1er influenceur foot FR',
        'Viral, culte, incontournable',
        'Mais pas d\'équipe, pas d\'infrastructure, pas de média',
        'Gestion opérationnelle trop lourde',
        'Aucun funnel : audience → contenu → monétisation'
      ]
    },
    {
      title: 'Le marché réclame un média foot moderne',
      points: [
        'Capable de produire du contenu tous les jours',
        'Capable d\'être partout',
        'Capable d\'être drôle, sérieux, rapide, culturel',
        'Capable de prendre le relais des médias traditionnels vieillissants'
      ]
    }
  ];

  return (
    <section id="problem" className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0a0e27] text-white overflow-hidden">
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

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-pink-950/20"></div>
      <BackgroundEffects variant="light" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-orange-300 uppercase inline-block px-3 sm:px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/30 mb-6 md:mb-8">
            Le problème
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight px-4 break-words">
            Pourquoi Octogoal doit exister ?<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Pourquoi maintenant ?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed px-4">
            Aujourd'hui, dans l'écosystème foot français
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
          {problems.map((problem, index) => (
            <div key={index} className="group relative h-full">
              <div className="absolute -inset-[2px] bg-gradient-to-br from-orange-500/30 via-pink-500/30 to-orange-600/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-orange-500/40 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                    <XCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-black text-white leading-tight pt-1">
                    {problem.title}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {problem.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span className="text-orange-400 mt-1.5 flex-shrink-0 text-lg font-bold">•</span>
                      <span className="text-sm sm:text-base text-slate-300 leading-relaxed group-hover/item:text-slate-200 transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-400/20 rounded-[2rem] blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 md:p-14 lg:p-16 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 sm:mb-12 md:mb-14 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Conclusion
            </h3>
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {[
                'Il existe un vide énorme entre la culture foot jeune et les médias actuels.',
                'Il fallait un média moderne, structuré, multi-format, multi-plateformes, incarné.',
                'Octogoal est créé pour combler ce vide.'
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-5 sm:gap-6 group/arrow">
                  <ArrowRight className="w-7 h-7 sm:w-9 sm:h-9 text-cyan-400 flex-shrink-0 mt-1 group-hover/arrow:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-orange-500/20 rounded-[3rem] blur-[100px] animate-pulse"></div>
          <div className="relative text-center py-12 sm:py-16 md:py-20 px-4">
            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white drop-shadow-2xl">
                Personne ne parle au public foot comme lui.
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white drop-shadow-2xl">
                Personne ne structure cette puissance.
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight bg-gradient-to-r from-orange-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                Jusqu'à Octogoal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
