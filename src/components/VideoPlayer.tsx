import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
          Diffusion Live
        </h2>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/30 p-6">
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe
              className="w-full h-96 md:h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=0&mute=0"
              title="Concert Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Live indicator */}
          <div className="absolute top-8 left-8 flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-semibold">LIVE</span>
          </div>
        </div>
        
        {/* Video controls placeholder */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Qualité HD
          </button>
          <button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Plein écran
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;