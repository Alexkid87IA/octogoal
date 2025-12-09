import { useEffect, useState } from 'react';
import { Menu, X, Home, Calendar, Sparkles, Video, Share2, BarChart3, Award, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Accueil', icon: Home },
    { id: 'program', label: 'Programme CAN', icon: Calendar },
    { id: 'integration', label: 'Intégration Marque', icon: Sparkles },
    { id: 'content', label: 'Formats de Contenu', icon: Video },
    { id: 'diffusion', label: 'Double Diffusion', icon: Share2 },
    { id: 'volume', label: 'Volumétrie', icon: BarChart3 },
    { id: 'rights', label: 'Droits & Usage', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/dafo6bvhc/image/upload/v1765278836/f856acca-f561-47d5-8266-3653b7549a9b_k1i6gn.png"
            alt="OCTOGOAL"
            className="h-12 sm:h-16 md:h-20 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group ${
              isScrolled
                ? 'bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg hover:shadow-xl'
                : 'bg-white/10 backdrop-blur-md hover:bg-white/20'
            }`}
            aria-label="Menu"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7">
              <Menu
                className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                } ${
                  isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                } ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-50 shadow-2xl transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-black text-white">Navigation</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full group relative"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6 border-t border-white/10">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
              <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl px-6 py-4 shadow-xl group-hover:shadow-2xl transition-all">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-white" />
                  <span className="text-lg font-black text-white">Nous rejoindre</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
