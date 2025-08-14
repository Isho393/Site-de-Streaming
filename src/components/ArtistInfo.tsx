import React from 'react';

const ArtistInfo: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            À propos de l'artiste
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Artist Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
            <img 
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              alt="Artiste"
              className="relative w-80 h-80 mx-auto rounded-full object-cover shadow-2xl"
            />
          </div>
          
          {/* Artist Info */}
          <div className="space-y-6">
            <h3 className="text-5xl font-bold text-yellow-400">
              ALEX RIVERA
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Artiste multi-instrumentiste et producteur reconnu mondialement, Alex Rivera
              fusionne les sonorités électroniques avec des instruments acoustiques pour
              créer une expérience musicale unique et immersive.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Avec plus de 10 ans de carrière et des concerts dans plus de 50 pays,
              Alex vous invite à vivre une performance exceptionnelle qui mêle
              technologie de pointe et émotion pure.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-400 uppercase">Pays</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">2M+</div>
                <div className="text-sm text-gray-400 uppercase">Fans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-gray-400 uppercase">Albums</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;