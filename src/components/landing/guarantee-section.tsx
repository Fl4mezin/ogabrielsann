import { ShieldIcon, CheckIcon } from '@/components/icons';
import { PixelatedButton } from '@/components/ui/pixelated-button';
import { PixelatedCard } from '@/components/ui/pixelated-card';

export function GuaranteeSection() {
  return (
    <section className="w-full max-w-5xl py-12 px-4 md:py-24">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-10 text-shadow-pixel">
        🛡️ PROTEÇÃO TOTAL - SEM RISCOS
      </h2>
      <PixelatedCard className="bg-white p-6 md:p-10 !border-pixel-green shadow-pixel-light mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="text-pixel-green">
            <ShieldIcon className="w-20 h-20 md:w-32 md:h-32" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-pixel-green">GARANTIA BLINDADA 30 DIAS</h3>
            <p className="mt-4 mb-6 text-base md:text-lg text-dark-gray">
              Se não melhorar suas notas, <span className="font-bold">DEVOLVEMOS SEU DINHEIRO</span>.
            </p>
            <div className="space-y-2 text-left text-sm md:text-base text-dark-gray flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-pixel-green" />
                <span>Sem perguntas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-pixel-green" />
                <span>Sem enrolação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-pixel-green" />
                <span>Reembolso na hora</span>
              </div>
            </div>
            <p className="mt-6 text-base md:text-xl font-bold bg-pixel-yellow text-black p-2 inline-block">RISCO ZERO PARA VOCÊ!</p>
          </div>
        </div>
      </PixelatedCard>
      <div className="text-center mt-10">
        <PixelatedButton
          size="lg"
          className="bg-pixel-green text-black hover:bg-green-400 w-full md:w-auto animate-pulse-8bit text-base md:text-lg"
          asChild
        >
          <a href="#">
            <span className="md:hidden">
              ME TORNAR UM
              <br />
              ESTUDANTE PRO
            </span>
            <span className="hidden md:inline">ME TORNAR UM ESTUDANTE PRO</span>
          </a>
        </PixelatedButton>
      </div>
    </section>
  );
}
