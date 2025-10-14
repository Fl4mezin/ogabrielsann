import { SkullIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-destructive/10 px-3 py-1 text-sm text-destructive">
                Atenção, Estudante!
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-destructive flex items-center gap-4">
                 <SkullIcon className="w-8 h-8 md:w-12 md:h-12" />
                VOCÊ VAI REPROVAR POR DESORGANIZAÇÃO
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Enquanto seus colegas passam com FACILIDADE usando métodos que FUNCIONAM, você continua perdendo prazos, esquecendo provas e tirando notas baixas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#offer">Quero Mudar Isso Agora</a>
              </Button>
            </div>
          </div>
           <div className="w-full h-full flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center animate-pulse">
                <SkullIcon className="w-32 h-32 text-gray-400 dark:text-gray-600"/>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
}