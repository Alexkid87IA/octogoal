import { SectionHeaderProps } from '../../types';

export default function SectionHeader({ badge, title, subtitle, gradient = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-20 animate-fade-in-up">
      <span className="text-sm font-bold tracking-widest text-blue-300 uppercase inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
        {badge}
      </span>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
        {gradient ? (
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {title}
          </span>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed mt-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}
