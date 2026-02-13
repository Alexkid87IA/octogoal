import { ChevronRight } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#08080c] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="https://octogoalmedia.vercel.app/assets/LOGO_OCTOGOAL-Cvm76VuC.png"
              alt="OCTOGOAL"
              className="h-8 sm:h-10 mb-4"
            />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Le média foot de Mohamed Henni.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                { label: 'Le Concept', id: 'concept' },
                { label: 'Émissions', id: 'emissions' },
                { label: 'Bilan CAN', id: 'bilan' },
                { label: 'Offre', id: 'offre' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="group flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors">
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-4">Contact</p>
            <a href="mailto:contact@octogoal.com" className="text-sm text-gray-500 hover:text-white transition-colors">contact@octogoal.com</a>
            <p className="text-sm text-gray-600 mt-2">Paris, France</p>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-4">Réseaux</p>
            <div className="flex flex-wrap gap-2">
              {['YouTube', 'TikTok', 'Instagram', 'Facebook', 'X'].map((p) => (
                <span key={p} className="text-xs px-2.5 py-1.5 rounded-md bg-gray-800/50 border border-gray-800 text-gray-500 hover:text-white hover:border-gray-600 transition-colors cursor-pointer">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="py-5 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">&copy; {currentYear} OCTOGOAL. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <button className="hover:text-gray-400 transition-colors">Mentions légales</button>
            <span className="text-gray-800">·</span>
            <button className="hover:text-gray-400 transition-colors">Confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
