import {
  BookIcon,
  CalendarIcon,
  ChartDownIcon,
  ClockIcon,
} from '@/components/icons';
import { PixelatedCard } from '@/components/ui/pixelated-card';

const problems = [
  {
    icon: BookIcon,
    title: 'Você ESQUECE de estudar para provas importantes',
    description: 'Sempre fica sabendo das provas em cima da hora',
  },
  {
    icon: ClockIcon,
    title: 'Seus trabalhos ficam para ÚLTIMA HORA sempre',
    description: 'Entrega tudo correndo e com qualidade ruim',
  },
  {
    icon: CalendarIcon,
    title: 'Não consegue ORGANIZAR horários de estudo',
    description: 'Perde tempo sem saber por onde começar',
  },
  {
    icon: ChartDownIcon,
    title: 'Perde PRAZOS de entrega constantemente',
    description: 'Notas baixas que destroem seu futuro',
  },
];

export function PainsSection() {
  return (
    <section className="w-full max-w-6xl py-12 px-4 md:py-24 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-shadow-pixel">
        ❌ GAME OVER PARA SUA VIDA ACADÊMICA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {problems.map((problem, index) => (
          <PixelatedCard key={index} className="flex flex-col items-center p-6 text-center">
            <problem.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-pixel-red" />
            <h3 className="text-base md:text-lg font-bold mb-2">
              <span className="text-pixel-red">🔴</span> {problem.title}
            </h3>
            <p className="text-dark-gray text-xs md:text-sm">{problem.description}</p>
          </PixelatedCard>
        ))}
      </div>
      <div className="mt-10 md:mt-12">
        <PixelatedCard className="bg-pixel-red text-white p-4 md:p-6 animate-blink border-4 border-black">
          <p className="text-base md:text-2xl font-bold">
            = REPROVAS + ESTRESSE + FUTURO DESTRUÍDO
          </p>
        </PixelatedCard>
      </div>
    </section>
  );
}
