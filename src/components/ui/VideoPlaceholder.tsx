import { VideoPlaceholderProps } from '../../types';

export default function VideoPlaceholder({ title, subtitle, aspectRatio }: VideoPlaceholderProps) {
  const containerClass = aspectRatio === '16-9' ? 'video-container-16-9' : 'video-container-9-16';
  const playButtonSize = aspectRatio === '16-9' ? 'w-24 h-24' : 'w-12 h-12';
  const playIconSize = aspectRatio === '16-9'
    ? 'border-t-[16px] border-l-[28px] border-b-[16px]'
    : 'border-t-[8px] border-l-[14px] border-b-[8px]';
  const titleSize = aspectRatio === '16-9' ? 'text-2xl' : 'text-xs';
  const subtitleSize = aspectRatio === '16-9' ? 'text-lg' : 'hidden';

  return (
    <div className={`${containerClass} group hover:scale-[1.02] transition-transform duration-500`}>
      <div className="video-placeholder">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img
            src="https://res.cloudinary.com/dafo6bvhc/image/upload/v1765278836/f856acca-f561-47d5-8266-3653b7549a9b_k1i6gn.png"
            alt="OCTOGOAL Logo Background"
            className="max-w-[60%] max-h-[60%] object-contain"
          />
        </div>
        <div className="text-center relative z-10">
          <div className={`${playButtonSize} rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300`}>
            <div className={`w-0 h-0 border-t-transparent border-l-white border-b-transparent ml-2 ${playIconSize}`}></div>
          </div>
          <p className={`text-white font-bold mb-2 ${titleSize}`}>{title}</p>
          {aspectRatio === '16-9' && <p className={`text-white/70 ${subtitleSize}`}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
