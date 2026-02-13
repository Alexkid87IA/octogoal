import { Mail, ArrowRight, Zap, Star, Target } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-6">Contact</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Faites partie de l'aventure
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-12">
          Agence, annonceur, marque — discutons de votre projet et explorons comment OCTOGOAL peut amplifier votre visibilité.
        </p>

        <a
          href="mailto:contact@octogoal.com"
          className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-violet-500 hover:bg-violet-400 text-black font-bold text-base sm:text-lg rounded-xl transition-all duration-200"
        >
          <Mail className="w-5 h-5" />
          contact@octogoal.com
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-violet-500/50" />
            Réponse sous 24h
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-violet-500/50" />
            Media kit sur demande
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-violet-500/50" />
            Dispositif sur-mesure
          </div>
        </div>
      </div>
    </section>
  );
}
