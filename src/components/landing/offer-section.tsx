import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from '@/components/icons';
import Image from 'next/image';

export function OfferSection() {
  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            OFERTA VÁLIDA APENAS HOJE
          </h2>
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
                  <span className="text-4xl font-bold">R$ 19,90</span>
                  <span className="ml-2 text-xl font-medium text-gray-500 line-through dark:text-gray-400">R$ 47,00</span>
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
               <Button size="lg" className="w-[90%] mx-auto sm:w-full mt-8 text-lg bg-green-500 hover:bg-green-600" asChild>
                <a href="https://go.goatpayments.com.br/ttmmp81duz">
                  ME TORNAR UM ESTUDANTE PRO
                </a>
              </Button>
               <p className="text-xs text-gray-500 mt-4 dark:text-gray-400">+472 Estudantes se tornaram PRO</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
