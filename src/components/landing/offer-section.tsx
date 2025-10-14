
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from '@/components/icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function OfferHeadline() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    setCurrentDate(`${day}/${month}`);
  }, []);

  return (
    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
      OFERTA VÁLIDA APENAS HOJE {currentDate}
    </h2>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);

      const totalSeconds = (endOfDay.getTime() - now.getTime()) / 1000;

      if (totalSeconds < 0) {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 text-center">
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        O tempo para ter acesso ao STUDENT PRO com esta condição EXCLUSIVA está se esgotando:
      </p>
      <div className="flex justify-center items-center space-x-4">
        <div className="text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <span className="text-4xl font-bold text-red-500">{timeLeft.hours}</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">Horas</p>
        </div>
        <div className="text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <span className="text-4xl font-bold text-red-500">{timeLeft.minutes}</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">Minutos</p>
        </div>
        <div className="text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <span className="text-4xl font-bold text-red-500">{timeLeft.seconds}</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">Segundos</p>
        </div>
      </div>
    </div>
  );
}

export function OfferSection() {
  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <OfferHeadline />
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Aproveite o preço especial e transforme sua vida acadêmica para sempre.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <Card className="lg:grid lg:grid-cols-2 lg:items-center shadow-2xl">
            <CardHeader className="text-left p-6 lg:p-8">
               <div className="mb-6">
                <Image
                    src="https://i.imgur.com/WzBd5MA.png"
                    alt="Product bundle"
                    width={600}
                    height={400}
                    className="mx-auto rounded-lg"
                  />
              </div>
              <CardTitle className="text-3xl font-bold">STUDENT PRO</CardTitle>
              <CardDescription>O pacote completo para o sucesso acadêmico.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-green-500">R$ 19,90</span>
                  <span className="ml-2 text-xl font-medium text-red-500 line-through dark:text-red-400">R$ 47,00</span>
                </div>
            </CardHeader>
            <CardContent className="p-6 lg:p-8">
              <ul className="grid gap-4 text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>3 TEMPLATES PREMIUM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Métodos eficazes de estudo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Acesso vitalício</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Acesso imediato</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Suporte via Whatsapp</span>
                </li>
              </ul>
               <Button size="lg" className="w-[90%] mx-auto sm:w-full mt-8 text-lg bg-green-500 hover:bg-green-600 animate-heartbeat" asChild>
                <a href="https://pay.cakto.com.br/jwf4g7o_607138">
                  ME TORNAR UM ESTUDANTE PRO
                </a>
              </Button>
               <p className="text-xs text-gray-500 mt-4 dark:text-gray-400">+472 Estudantes se tornaram PRO</p>
            </CardContent>
          </Card>
        </div>
        <CountdownTimer />
      </div>
    </section>
  );
}
