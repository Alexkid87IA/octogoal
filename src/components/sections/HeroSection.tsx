import { ArrowRight, Flame } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0f]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-pink-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="animate-fade-in">
            {/* Badge - glassmorphism */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.08] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-pink-400">Le N°1 du foot digital en France</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
              <span className="text-white">OCTO</span><span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">GOAL</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-lg">
              Quand le <span className="text-white font-semibold">N°1 du foot sur internet</span> lance sa propre émission, ça donne OCTOGOAL.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-lg">
              Une émission. Un show. Et tout un média qui tourne autour. Une audience que personne d'autre ne peut vous offrir.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('story')}
                className="group flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-sm rounded-xl transition-all duration-200"
              >
                <Flame className="w-4 h-4" />
                Découvrir l'histoire
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center gap-2.5 px-6 py-3.5 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] text-white font-semibold text-sm rounded-xl transition-all duration-200"
              >
                Devenir partenaire
              </button>
            </div>
          </div>

          {/* Right column - Video */}
          <div className="animate-fade-in-up delay-200 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              {/* Glass frame around video */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-pink-500/10 via-white/[0.02] to-blue-500/10 backdrop-blur-sm border border-white/[0.06]" />
              <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden bg-black">
                <video
                  src="https://renaissance-cdn.b-cdn.net/BIENVENUE%20DANS%20MON%20E%CC%81MISSION%20OCTOGOAL%20C%E2%80%99EST%20L%E2%80%99E%CC%81MISSION%20DU%20PEUPLE%20%F0%9F%8E%99%EF%B8%8F%20%F0%9F%A5%8A%20%E2%9A%BD%EF%B8%8F.mp4"
                  className="w-full h-[480px] sm:h-[600px] object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar - glassmorphism */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
            {[
              { value: '11M+', label: 'Abonnés' },
              { value: '134M', label: 'Vues vidéo' },
              { value: '6', label: 'Plateformes' },
            ].map((stat) => (
              <div key={stat.label} className="py-6 sm:py-8 px-4 sm:px-6 text-center">
                <p className="font-display text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
