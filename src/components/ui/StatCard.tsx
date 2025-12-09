import { StatCardProps } from '../../types';

export default function StatCard({ value, label, icon: Icon, gradient }: StatCardProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl flex-shrink-0`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-black text-white leading-none">{value}</p>
        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{label}</p>
      </div>
    </div>
  );
}
