import { ShieldIcon, CheckIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function GuaranteeSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
              Proteção Total
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              🛡️ PROTEÇÃO TOTAL - SEM RISCOS
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="text-green-500">
                  <ShieldIcon className="w-20 h-20 md:w-32 md:h-32" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-green-600">GARANTIA BLINDADA 30 DIAS</h3>
                  <p className="mt-4 mb-6 text-base md:text-lg text-gray-600 dark:text-gray-300">
                    Se não melhorar suas notas, <span className="font-bold">DEVOLVEMOS SEU DINHEIRO</span>.
                  </p>
                  <div className="space-y-2 text-left text-sm md:text-base text-gray-700 dark:text-gray-400 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span>Sem perguntas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span>Sem enrolação</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span>Reembolso na hora</span>
                    </div>
                  </div>
                  <p className="mt-6 text-base md:text-xl font-bold bg-yellow-300 text-black p-2 inline-block rounded-md">RISCO ZERO PARA VOCÊ!</p>
                </div>
              </div>
            </CardContent>
          </Card>
           <div className="flex flex-col items-center text-center">
            <p className='text-muted-foreground mb-4'>Sua compra é 100% segura e sua satisfação é garantida.</p>
            <Button
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600 w-full md:w-auto text-base md:text-lg shadow-lg"
              asChild
            >
              <a href="https://go.goatpayments.com.br/ttmmp81duz">
                  ME TORNAR UM ESTUDANTE PRO
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}