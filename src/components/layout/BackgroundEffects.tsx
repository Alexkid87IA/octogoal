interface BackgroundEffectsProps {
  variant?: 'hero' | 'blue' | 'light';
}

export default function BackgroundEffects({ variant = 'hero' }: BackgroundEffectsProps) {
  const variants = {
    hero: (
      <>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-600 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[100px] opacity-50"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
      </>
    ),
    blue: (
      <>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-600 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[130px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-40"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
      </>
    ),
    light: (
      <>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[130px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-40"></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
      </>
    )
  };

  return variants[variant];
}
