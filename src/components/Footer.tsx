import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4">
              CONCERT LIVE
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Plateforme de diffusion de concerts en direct offrant des expériences 
              musicales immersives et de haute qualité. Connectez-vous avec vos artistes 
              préférés depuis chez vous.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Accueil</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Concerts à venir</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Artistes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Billetterie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Support technique</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@concertlive.com" className="hover:text-yellow-400 transition-colors">
                  contact@concertlive.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Concert Live. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;