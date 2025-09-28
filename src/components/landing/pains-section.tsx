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
    <section className="w-full max-w-6xl py-16 px-4 md:py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-shadow-pixel">
        ❌ GAME OVER PARA SUA VIDA ACADÊMICA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {problems.map((problem, index) => (
          <PixelatedCard key={index} className="flex flex-col items-center p-6 text-center">
            <problem.icon className="w-12 h-12 mb-4 text-pixel-red" />
            <h3 className="text-lg font-bold mb-2">
              <span className="text-pixel-red">🔴</span> {problem.title}
            </h3>
            <p className="text-dark-gray text-sm">{problem.description}</p>
          </PixelatedCard>
        ))}
      </div>
      <div className="mt-12">
        <PixelatedCard className="bg-pixel-red text-white p-6 animate-blink border-4 border-black">
          <p className="text-xl md:text-2xl font-bold">
            = REPROVAS + ESTRESSE + FUTURO DESTRUÍDO
          </p>
        </PixelatedCard>
      </div>
    </section>
  );
}
