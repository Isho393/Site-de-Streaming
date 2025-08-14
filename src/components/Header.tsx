import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl mb-6 animate-slide-up">
          CONCERT LIVE
        </h1>
        <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide animate-slide-up-delay">
          Diffusion en Direct • Expérience Immersive
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mt-8 rounded animate-width-expand"></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;