import React from 'react';
import { MessageCircle, Heart, Send } from 'lucide-react';

const LiveChat: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
          Discussion en Direct
        </h2>
        
        <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold">Chat en Direct</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>1,247 spectateurs</span>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {[
              { user: 'MusicLover92', message: 'Incroyable performance ! 🔥', time: '20:45' },
              { user: 'AlexFan2024', message: 'Cette chanson me donne des frissons...', time: '20:46' },
              { user: 'ConcertAddict', message: 'Le son est parfait ce soir !', time: '20:46' },
              { user: 'LiveMusicFan', message: 'Merci pour ce moment magique ✨', time: '20:47' },
              { user: 'RockStar88', message: 'Plus fort ! Plus fort ! 🎸', time: '20:47' },
              { user: 'MelodyQueen', message: 'Je suis émue aux larmes... 😭❤️', time: '20:48' }
            ].map((msg, index) => (
              <div key={index} className="flex items-start space-x-3 animate-fade-in">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {msg.user[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-yellow-400 font-semibold text-sm">{msg.user}</span>
                    <span className="text-gray-500 text-xs">{msg.time}</span>
                  </div>
                  <p className="text-gray-200 text-sm">{msg.message}</p>
                </div>
                <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Écrivez votre message..."
                className="flex-1 bg-gray-800 border border-gray-600 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 p-2 rounded-full transition-all duration-300 transform hover:scale-105">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 px-4">
              Soyez respectueux et profitez du spectacle ! 🎵
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;