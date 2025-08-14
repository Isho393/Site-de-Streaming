import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import VideoPlayer from './components/VideoPlayer';
import ArtistInfo from './components/ArtistInfo';
import LiveChat from './components/LiveChat';
import SocialShare from './components/SocialShare';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main>
        <section className="max-w-7xl mx-auto px-4">
          <Countdown />
          <VideoPlayer />
        </section>
        
        <ArtistInfo />
        
        <section className="max-w-7xl mx-auto px-4">
          <LiveChat />
        </section>
        
        <SocialShare />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;