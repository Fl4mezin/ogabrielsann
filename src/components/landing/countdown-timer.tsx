'use client';

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setHours(date.getHours() + 24);
    return date;
  });

  const calculateTimeLeft = () => {
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

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm md:text-base font-bold mb-2">⏰ TEMPO RESTANTE:</p>
      <div className="bg-black text-pixel-red p-2 md:p-4 border-2 border-gray-600 shadow-inner w-fit">
        <span className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest animate-heartbeat">
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </span>
      </div>
    </div>
  );
}
