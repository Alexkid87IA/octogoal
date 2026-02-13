import { useEffect, useState } from 'react';
import { Menu, X, Home, Lightbulb, Play, BarChart3, Briefcase, Mail, Rocket, Image as ImageIcon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Accueil', icon: Home },
    { id: 'concept', label: 'Le Concept', icon: Lightbulb },
    { id: 'emissions', label: 'Émissions', icon: Play },
    { id: 'multiformat', label: 'Contenus', icon: ImageIcon },
    { id: 'bilan', label: 'Bilan CAN', icon: BarChart3 },
    { id: 'projections', label: 'Projections', icon: Rocket },
    { id: 'offre', label: 'Offre', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
          <img
            src="https://octogoalmedia.vercel.app/assets/LOGO_OCTOGOAL-Cvm76VuC.png"
            alt="OCTOGOAL"
            className="h-8 sm:h-10 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection('hero')}
          />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.slice(1, -1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3.5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-3 px-5 py-2.5 text-sm font-bold text-black bg-violet-500 hover:bg-violet-400 rounded-lg transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-gray-800 hover:border-gray-600 transition-colors"
            aria-label="Menu"
          >
            <div className="relative w-5 h-5">
              <Menu className={`absolute inset-0 w-full h-full text-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100'}`} />
              <X className={`absolute inset-0 w-full h-full text-white transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 -rotate-90 scale-0'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-[#0d0d14] border-l border-gray-800/50 z-50 transition-transform duration-400 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-gray-800/50">
            <span className="font-display text-base font-bold text-white">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-800 hover:border-gray-600 transition-colors" aria-label="Fermer">
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-3 px-3">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 p-3.5 rounded-lg hover:bg-white/[0.04] transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <Icon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-300">{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="p-4 border-t border-gray-800/50">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 bg-violet-500 hover:bg-violet-400 text-black font-bold text-sm rounded-lg transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
