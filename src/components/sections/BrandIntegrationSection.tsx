import { Eye, Sparkles, Mic, Award, BarChart3, Repeat } from 'lucide-react';

export default function BrandIntegrationSection() {
  return (
    <section id="integration" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-100 via-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="https://res.cloudinary.com/dafo6bvhc/video/upload/v1764092466/d928c6b7-f494-4466-81f2-040f32b9eadc_1_mseork.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-orange-600 uppercase inline-block px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-6 md:mb-8">
            Intégration Marque
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-6 md:mb-8 leading-tight px-4">
            Votre marque au cœur<br />
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              de chaque émission
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Une présence maximale à chaque instant de la compétition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-orange-200/50 to-pink-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl h-full">
              <div className="flex items-start gap-4 sm:gap-5 mb-6">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-xl">
                  <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2">Présence visuelle permanente</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">Votre logo toujours visible</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Logo en rotation toutes les 3 secondes',
                  'Affichage dynamique : Octogoal → Marque → Octogoal',
                  'Présent pendant l\'intégralité des 6 émissions',
                  'Visibilité maximale garantie'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-200/50 to-orange-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl h-full">
              <div className="flex items-start gap-4 sm:gap-5 mb-6">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-600 flex items-center justify-center shadow-xl">
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2">Habillage complet</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">Intégration graphique premium</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Intégration dans le générique d\'ouverture',
                  'Lower thirds personnalisés',
                  'Transitions graphiques brandées',
                  'Surlignages statistiques co-brandés'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
                    <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-200/50 to-blue-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl h-full">
              <div className="flex items-start gap-4 sm:gap-5 mb-6">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl">
                  <Mic className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2">Mentions programmatiques</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">Momo parle de vous</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 sm:p-5 border border-cyan-200">
                  <p className="text-xs sm:text-sm font-bold text-cyan-900 mb-2 uppercase">Ouverture</p>
                  <p className="text-sm sm:text-base text-slate-700 italic font-medium">
                    "Cette émission spéciale CAN d'Octogoal est présentée par [MARQUE]."
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 sm:p-5 border border-blue-200">
                  <p className="text-xs sm:text-sm font-bold text-blue-900 mb-2 uppercase">Clôture</p>
                  <p className="text-sm sm:text-base text-slate-700 italic font-medium">
                    "Merci à [MARQUE], partenaire officiel Octogoal CAN."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-200/50 to-indigo-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl h-full">
              <div className="flex items-start gap-4 sm:gap-5 mb-6">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2">Séquences sponsorisées</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">Vos moments dédiés</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'La Compo du Match - by [MARQUE]',
                  'Les Notes du Match - présenté par [MARQUE]',
                  'Le Joueur du Match - powered by [MARQUE]',
                  'Le Top 3 Moments - avec [MARQUE]'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-3 border border-purple-200">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/30 via-pink-500/30 to-orange-500/30 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-orange-600 to-pink-600 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-orange-400/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
                  Habillage graphique brandé inclus
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                  Tous les éléments graphiques sont créés sur mesure aux couleurs de votre marque pour une intégration parfaite et naturelle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
