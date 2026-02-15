import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const menuItems = [
  { id: 'hero', label: 'Accueil', num: '01' },
  { id: 'story', label: "L'Histoire", num: '02' },
  { id: 'emissions', label: 'Le Show', num: '03' },
  { id: 'multiformat', label: 'Contenus', num: '04' },
  { id: 'proof', label: 'Résultats', num: '05' },
  { id: 'sponsor-projection', label: 'Sponsors', num: '06' },
  { id: 'projections', label: 'La Suite', num: '07' },
  { id: 'partnership', label: 'Partenariat', num: '08' },
  { id: 'contact', label: 'Contact', num: '09' },
];

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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
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

          <div className="hidden lg:block w-10" />

          {/* Logo */}
          <img
            src="https://octogoalmedia.vercel.app/assets/LOGO_OCTOGOAL-Cvm76VuC.png"
            alt="OCTOGOAL"
            className="h-8 sm:h-10 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection('hero')}
          />

          <div className="w-10" />
        </div>
      </nav>

      {/* ──────── FULLSCREEN MOBILE MENU ──────── */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-out ${
          isMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-[#08080c] transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Glows */}
          <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        {/* Header */}
        <div className={`relative flex items-center justify-between px-6 py-4 transition-all duration-500 delay-100 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <img
            src="https://octogoalmedia.vercel.app/assets/LOGO_OCTOGOAL-Cvm76VuC.png"
            alt="OCTOGOAL"
            className="h-8"
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Menu items */}
        <div className="relative flex flex-col justify-center px-8 sm:px-12 h-[calc(100%-140px)]">
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-4 py-3 border-b border-white/[0.04] transition-all duration-500 ${
                isMenuOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${150 + i * 50}ms` : '0ms' }}
            >
              <span className="text-[10px] font-mono text-gray-700 w-5">{item.num}</span>
              <span className="font-display text-2xl sm:text-3xl font-black text-white group-active:text-pink-400 transition-colors">
                {item.label}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-700 ml-auto opacity-0 -translate-x-2 group-active:opacity-100 group-active:translate-x-0 transition-all" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className={`absolute bottom-0 left-0 right-0 px-8 sm:px-12 pb-8 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: isMenuOpen ? '600ms' : '0ms' }}>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-sm rounded-xl transition-colors"
          >
            Nous contacter
          </button>
          <p className="text-center text-[10px] text-gray-700 mt-4">contact@octogoal.com</p>
        </div>
      </div>
    </>
  );
}
