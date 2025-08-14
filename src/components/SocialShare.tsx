import React from 'react';
import { Share2, Facebook, Twitter, Instagram, Copy } from 'lucide-react';

const SocialShare: React.FC = () => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Regardez ce concert live incroyable ! 🎵";
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Lien copié dans le presse-papiers !');
        break;
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Share2 className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Partagez l'expérience
          </h2>
        </div>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Invitez vos amis à vivre ce moment magique avec vous ! 
          Partagez le concert sur vos réseaux sociaux préférés.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => handleShare('facebook')}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Facebook className="w-6 h-6" />
            <span className="hidden sm:inline">Facebook</span>
          </button>
          
          <button
            onClick={() => handleShare('twitter')}
            className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Twitter className="w-6 h-6" />
            <span className="hidden sm:inline">X/Twitter</span>
          </button>
          
          <button
            onClick={() => window.open('https://instagram.com', '_blank')}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Instagram className="w-6 h-6" />
            <span className="hidden sm:inline">Instagram</span>
          </button>
          
          <button
            onClick={() => handleShare('copy')}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Copy className="w-6 h-6" />
            <span className="hidden sm:inline">Copier</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;