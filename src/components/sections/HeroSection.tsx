import { ArrowRight, Users, Video, Trophy, Zap, Target, Play, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import Button from '../ui/Button';
import VideoPlaceholder from '../ui/VideoPlaceholder';
import StatCard from '../ui/StatCard';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e27]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://res.cloudinary.com/dafo6bvhc/video/upload/v1764092466/d928c6b7-f494-4466-81f2-040f32b9eadc_1_mseork.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0a0e27]/95 to-[#0a0e27]"></div>
      </div>

      {/* Logo Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dafo6bvhc/image/upload/v1765278836/f856acca-f561-47d5-8266-3653b7549a9b_k1i6gn.png"
          alt="OCTOGOAL Background"
          className="w-auto h-[60%] sm:h-[70%] md:h-[80%] opacity-[0.03] object-contain"
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-orange-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-20 sm:py-24 lg:py-32">
        {/* Main Content */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-orange-500/10 border border-orange-500/30 backdrop-blur-sm mb-6 sm:mb-8">
            <Trophy className="w-4 h-4 text-orange-400" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-300 uppercase">
              Dispositif Sponsor CAN 2024
            </span>
          </div>

          {/* Logo Title */}
          <h1 className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 blur-3xl opacity-40 animate-pulse"></div>
              <span className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter">
                <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]">OCTO</span>
                <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]">GOAL</span>
              </span>
            </div>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Le nouveau média foot de
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Mohamed Henni
            </span>
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-4 sm:mb-6 max-w-3xl mx-auto font-medium leading-relaxed px-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-orange-400 font-bold">6 émissions cultes</span> pour couvrir la Coupe d'Afrique des Nations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
            <Button onClick={() => scrollToSection('program')} variant="primary" className="w-full sm:w-auto min-w-[200px]">
              <Play className="w-5 h-5" />
              Découvrir l'offre CAN
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="secondary" className="w-full sm:w-auto min-w-[200px]">
              <Target className="w-5 h-5" />
              Devenir partenaire
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <StatCard value="6" label="Émissions live CAN" icon={Video} gradient="from-cyan-500 to-blue-600" />
            <StatCard value="200M+" label="Impressions mensuelles" icon={Users} gradient="from-orange-500 to-pink-600" />
            <StatCard value="11M+" label="Communauté active" icon={Trophy} gradient="from-pink-500 to-orange-600" />
          </div>
        </div>

        {/* Video Showcase */}
        <div className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {/* Main Video */}
          <div className="relative mb-6 sm:mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-orange-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-sm">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="https://res.cloudinary.com/dafo6bvhc/image/upload/v1765278836/f856acca-f561-47d5-8266-3653b7549a9b_k1i6gn.png"
                >
                  <source src="https://www.dropbox.com/scl/fi/13eepbbn82elprfxapt4h/OCTOGOAL-EP2_v01.mp4?rlkey=ge3gjs47dai2ajjx6qjo357w8&raw=1" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-800 hover:border-orange-500/50 transition-all duration-300 group/btn z-10"
                  aria-label={isMuted ? 'Activer le son' : 'Désactiver le son'}
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-slate-400 group-hover/btn:text-orange-400 transition-colors" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-orange-400 group-hover/btn:text-orange-300 transition-colors" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Highlights Grid - TikTok Videos */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              { url: 'https://www.tiktok.com/embed/v2/7458109088536284448', gradient: 'from-cyan-500/20 to-blue-500/20' },
              { url: 'https://www.tiktok.com/embed/v2/7449842068779609377', gradient: 'from-orange-500/20 to-pink-500/20' },
              { url: 'https://www.tiktok.com/embed/v2/7458109534677044512', gradient: 'from-pink-500/20 to-orange-500/20' }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative rounded-xl overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-slate-800">
                  <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                    <iframe
                      src={item.url}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      scrolling="no"
                      allow="encrypted-media;"
                      title={`TikTok Video ${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Mobile optimized */}
        <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection('program')}>
            <span className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
