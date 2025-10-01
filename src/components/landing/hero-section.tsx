import { SkullIcon } from '@/components/icons';

export function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-12 px-4 md:py-24 bg-white">
      <div className="w-full max-w-4xl">
        <div className="bg-pixel-red text-white p-4 mb-8 animate-heartbeat pixel-border">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold flex items-center justify-center gap-2 md:gap-4">
            <SkullIcon className="w-6 h-6 md:w-12 md:h-12 hidden sm:block" />
            <span>VOCÊ VAI REPROVAR POR DESORGANIZAÇÃO</span>
            <SkullIcon className="w-6 h-6 md:w-12 md:h-12 hidden sm:block" />
          </h1>
        </div>
        <div className="pixel-border p-4 md:p-6 bg-gray-100 shadow-pixel-light">
          <p className="text-sm md:text-xl text-dark-gray leading-relaxed max-w-3xl mx-auto">
            Enquanto seus colegas passam com FACILIDADE usando métodos que FUNCIONAM, você continua perdendo prazos, esquecendo provas e tirando notas baixas.
          </p>
        </div>
      </div>
    </section>
  );
}
