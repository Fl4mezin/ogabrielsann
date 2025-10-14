import { SkullIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-500">
              Atenção, Estudante!
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-destructive flex items-center justify-center gap-4">
              <SkullIcon className="w-8 h-8 md:w-12 md:h-12" />
              VOCÊ VAI REPROVAR POR DESORGANIZAÇÃO
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Enquanto seus colegas passam com FACILIDADE usando métodos que FUNCIONAM, você continua perdendo prazos, esquecendo provas e tirando notas baixas.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="w-[90%] mx-auto sm:w-auto sm:mx-0 bg-green-500 hover:bg-green-600">
              <a href="#offer">Quero Mudar Isso Agora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
