import { useState, useEffect, useRef, useCallback } from 'react';

const sections = [
  { id: 'hero', label: 'Accueil' },
  { id: 'story', label: 'L\'Histoire' },
  { id: 'emissions', label: 'Le Show' },
  { id: 'multiformat', label: 'Contenus' },
  { id: 'proof', label: 'Résultats' },
  { id: 'sponsor-projection', label: 'Sponsor' },
  { id: 'projections', label: 'La Suite' },
  { id: 'partnership', label: 'Partenariat' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNav() {
  const [active, setActive] = useState('hero');
  const [visible, setVisible] = useState(false);
  const [idle, setIdle] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pillStyle, setPillStyle] = useState({ top: 0, height: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePill = useCallback(() => {
    const btn = itemRefs.current[active];
    const nav = navRef.current;
    if (!btn || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    setPillStyle({
      top: btnRect.top - navRect.top,
      height: btnRect.height,
    });
  }, [active]);

  useEffect(() => {
    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [updatePill]);

  // Auto-hide after 2s of inactivity
  const resetIdleTimer = useCallback(() => {
    setIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIdle(true), 2000);
  }, []);

  useEffect(() => {
    const handleMouseMove = () => resetIdleTimer();
    const handleScrollIdle = () => resetIdleTimer();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScrollIdle, { passive: true });
    resetIdleTimer();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScrollIdle);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [resetIdleTimer]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        { threshold: 0.15, rootMargin: '-5% 0px -5% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-all duration-500 ${
        visible
          ? idle && !hovered
            ? 'opacity-0 translate-x-4 pointer-events-auto'
            : 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8 pointer-events-none'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); resetIdleTimer(); }}
    >
      <div
        ref={navRef}
        className="relative flex flex-col items-stretch bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        {/* Sliding pill */}
        <div
          className="absolute left-1.5 right-1.5 rounded-xl bg-gradient-to-r from-pink-500/15 to-blue-500/15 border border-white/[0.1] pointer-events-none"
          style={{
            top: pillStyle.top,
            height: pillStyle.height,
            transitionProperty: 'top, height',
            transitionDuration: '400ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />

        {sections.map((section) => {
          const isActive = section.id === active;
          return (
            <button
              key={section.id}
              ref={(el) => { itemRefs.current[section.id] = el; }}
              onClick={() => scrollTo(section.id)}
              className={`relative z-10 px-4 py-2 rounded-xl text-[12px] font-semibold whitespace-nowrap text-right transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-gray-600 hover:text-gray-300'
              }`}
            >
              {section.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
