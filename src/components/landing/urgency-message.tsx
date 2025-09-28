'use client';

import { useEffect, useState } from 'react';

export function UrgencyMessage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    setCurrentDate(today.toLocaleDateString('pt-BR', options));
  }, []);

  return (
    <div className="bg-pixel-red text-white p-4 pixel-border animate-blink">
      <h2 className="text-xl md:text-3xl font-bold">
        OFERTA VÁLIDA APENAS HOJE ({currentDate})
      </h2>
    </div>
  );
}
