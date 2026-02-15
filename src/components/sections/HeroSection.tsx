import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0f]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-pink-600/10 rounded-full blur-[160px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              <span className="text-xs font-semibold tracking-wider uppercase text-pink-400">Media Kit CAN 2025</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
              <span className="text-white">OCTO</span><span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">GOAL</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-4 max-w-lg">
              Le média foot de <span className="text-white font-semibold">Mohamed Henni</span> qui a explosé la CAN 2025.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-lg">
              239M d'impressions, 134M de vues, 8M d'interactions. Un terrain de jeu massif pour les marques.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('emissions')}
                className="group flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-sm rounded-xl transition-all duration-200"
              >
                <Play className="w-4 h-4" />
                Voir les émissions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center gap-2.5 px-6 py-3.5 border border-gray-700 hover:border-gray-500 text-white font-semibold text-sm rounded-xl transition-all duration-200"
              >
                Devenir partenaire
              </button>
            </div>
          </div>

          {/* Right column - Video */}
          <div className="animate-fade-in-up delay-200 flex justify-center">
            <div className="relative w-[340px] rounded-2xl border border-gray-800 overflow-hidden bg-black">
              <video
                src="https://renaissance-cdn.b-cdn.net/BIENVENUE%20DANS%20MON%20E%CC%81MISSION%20OCTOGOAL%20C%E2%80%99EST%20L%E2%80%99E%CC%81MISSION%20DU%20PEUPLE%20%F0%9F%8E%99%EF%B8%8F%20%F0%9F%A5%8A%20%E2%9A%BD%EF%B8%8F.mp4"
                className="w-full h-[600px] object-cover"
                controls
                playsInline
                preload="metadata"
                poster=""
              />
              {/* Decorative border glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-pink-500/20 via-transparent to-blue-500/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-800/60">
            {[
              { value: '239M', label: 'Impressions' },
              { value: '134M', label: 'Vues vidéo' },
              { value: '8M', label: 'Interactions' },
              { value: '452', label: 'Publications' },
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
