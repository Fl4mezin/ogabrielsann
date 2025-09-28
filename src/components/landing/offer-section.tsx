import { PixelatedButton } from '@/components/ui/pixelated-button';
import { CountdownTimer } from './countdown-timer';

export function OfferSection() {
  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:py-24">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-shadow-pixel">
          💰 OFERTA ESPECIAL - ÚLTIMA CHANCE
        </h2>
        <div className="bg-pixel-yellow text-black p-4 md:p-8 border-4 border-black shadow-pixel">
          <div className="border-4 border-black p-4 md:p-6 bg-white">
            <h3 className="text-xl md:text-3xl font-bold mb-4">PACOTE COMPLETO</h3>
            <div className="text-left text-xs md:text-base font-bold w-full max-w-xs mx-auto border-2 border-black p-4 space-y-1 bg-gray-200">
              <p>┌─────────────────────┐</p>
              <p>│ 3 TEMPLATES PREMIUM   │</p>
              <p>│ + 5 BÔNUS EXCLUSIVOS│</p>
              <p>│                     │</p>
              <p>│ <span className="line-through">De: R$ 47,00</span>      │</p>
              <p>│ ████████████████    │</p>
              <p>│ POR APENAS: R$ 19,90│</p>
              <p>│                     │</p>
              <p>│ 🔥 PROMOÇÃO VOLTA   │</p>
              <p>│    ÀS AULAS!        │</p>
              <p>└─────────────────────┘</p>
            </div>
            
            <div className="my-6 md:my-8">
              <CountdownTimer />
            </div>

            <PixelatedButton 
              size="lg" 
              className="bg-pixel-green text-black hover:bg-green-400 w-full md:w-auto animate-pulse-8bit text-base md:text-lg"
              asChild
            >
              <a href="#">
                🚀 PRESS START TO WIN!
              </a>
            </PixelatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
