'use client';

import { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
  // Set the offer to end 24 hours from the first render
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setHours(date.getHours() + 24);
    return date;
  });

  const difference = +targetDate - +new Date();
  let timeLeft = {
    hours: '00',
    minutes: '00',
    seconds: '00',
  };

  if (difference > 0) {
    timeLeft = {
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  }

  return timeLeft;
};

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: '23', minutes: '59', seconds: '59' });
  
  useEffect(() => {
    // We calculate initial time in useEffect to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm md:text-base font-bold mb-2">⏰ TEMPO RESTANTE:</p>
      <div className="bg-black text-pixel-red p-2 md:p-4 border-2 border-gray-600 shadow-inner w-fit">
        <span className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest animate-blink">
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </span>
      </div>
    </div>
  );
}
