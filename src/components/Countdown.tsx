import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Set concert date - you can modify this
    const concertDate = new Date('2025-08-15T20:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = concertDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsLive(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLive) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-pink-600 px-8 py-4 rounded-full shadow-2xl animate-pulse">
          <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
          <span className="text-2xl font-bold text-white">EN DIRECT MAINTENANT</span>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text mb-8">
        Le concert commence dans
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[
          { label: 'Jours', value: timeLeft.days },
          { label: 'Heures', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Secondes', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={item.label} className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;