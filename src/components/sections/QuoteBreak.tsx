import { Quote } from 'lucide-react';

interface QuoteBreakProps {
  stat: string;
  text: string;
  sub?: string;
  accentColor?: 'pink' | 'blue' | 'purple';
}

const accents = {
  pink: {
    glow: 'bg-pink-500/10',
    stat: 'from-pink-500 to-blue-500',
    quote: 'text-pink-400/30',
    border: 'via-pink-500/20',
  },
  blue: {
    glow: 'bg-blue-500/10',
    stat: 'from-blue-500 to-cyan-500',
    quote: 'text-blue-400/30',
    border: 'via-blue-500/20',
  },
  purple: {
    glow: 'bg-purple-500/10',
    stat: 'from-purple-500 to-pink-500',
    quote: 'text-purple-400/30',
    border: 'via-purple-500/20',
  },
};

export default function QuoteBreak({ stat, text, sub, accentColor = 'pink' }: QuoteBreakProps) {
  const a = accents[accentColor];

  return (
    <section className="relative py-16 sm:py-24 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      {/* Top & bottom lines */}
      <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${a.border} to-transparent`} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] ${a.glow} rounded-full blur-[120px]`} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <Quote className={`w-6 h-6 ${a.quote} mx-auto mb-6 rotate-180`} />

        {/* Big stat */}
        <p className={`font-display text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r ${a.stat} bg-clip-text text-transparent mb-4`}>
          {stat}
        </p>

        {/* Text */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug max-w-3xl mx-auto">
          {text}
        </p>

        {/* Optional sub */}
        {sub && (
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
