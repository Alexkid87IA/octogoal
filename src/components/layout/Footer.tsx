import { Twitter, Instagram, Youtube, Linkedin, Facebook, TrendingUp, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-red-500' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
    { icon: TrendingUp, label: 'TikTok', href: '#', color: 'hover:text-slate-100' },
  ];

  const quickLinks = [
    { label: 'Notre Histoire', id: 'story' },
    { label: 'Notre Identité', id: 'identity' },
    { label: 'Notre Vision', id: 'vision' },
    { label: 'Programmes', id: 'flagship' },
  ];

  const partnerLinks = [
    { label: 'Devenir Partenaire', id: 'advertisers' },
    { label: 'Sponsor Principal', id: 'advertisers' },
    { label: 'Formules', id: 'advertisers' },
    { label: 'Media Kit', id: 'contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://res.cloudinary.com/dafo6bvhc/image/upload/v1765278836/f856acca-f561-47d5-8266-3653b7549a9b_k1i6gn.png"
              alt="OCTOGOAL"
              className="h-16 sm:h-20 mb-4 sm:mb-6"
            />
            <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 leading-relaxed max-w-sm">
              Le média football nouvelle génération qui réinvente l'info foot avec authenticité, expertise et passion.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 hover:border-slate-600 ${social.color} hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-black text-white mb-4 sm:mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center gap-2 text-sm sm:text-base text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-black text-white mb-4 sm:mb-6">Partenaires</h3>
            <ul className="space-y-3">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center gap-2 text-sm sm:text-base text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-black text-white mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Email</p>
                  <a href="mailto:contact@octogoal.com" className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors">
                    contact@octogoal.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Téléphone</p>
                  <a href="tel:+33123456789" className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Adresse</p>
                  <p className="text-sm sm:text-base text-slate-300">
                    Paris, France
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <p className="text-lg sm:text-xl font-black text-white mb-2">
                  Restez connecté à l'actualité OCTOGOAL
                </p>
                <p className="text-sm sm:text-base text-slate-400">
                  Recevez nos dernières actualités et opportunités de partenariat
                </p>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-white hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
              >
                Nous rejoindre
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
              © {currentYear} OCTOGOAL. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button className="text-slate-500 hover:text-cyan-400 transition-colors">
                Mentions légales
              </button>
              <span className="text-slate-700">•</span>
              <button className="text-slate-500 hover:text-cyan-400 transition-colors">
                Politique de confidentialité
              </button>
              <span className="text-slate-700">•</span>
              <button className="text-slate-500 hover:text-cyan-400 transition-colors">
                CGU
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
