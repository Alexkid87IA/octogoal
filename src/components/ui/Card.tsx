import { CardProps } from '../../types';

export default function Card({ children, variant = 'glass', className = '', hover = false }: CardProps) {
  const variants = {
    glass: 'bg-white/5 backdrop-blur-lg border border-white/10',
    gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100',
    solid: 'bg-white shadow-2xl border border-slate-100'
  };

  const hoverEffect = hover ? 'hover:shadow-xl transition-all' : '';

  return (
    <div className={`rounded-2xl p-6 ${variants[variant]} ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
}
