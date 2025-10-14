import {
  BookIcon,
  CalendarIcon,
  ChartDownIcon,
  ClockIcon,
} from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
              Sua Realidade
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">
              ❌ GAME OVER PARA SUA VIDA ACADÊMICA
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Se você se identifica com algum desses pontos, seu futuro acadêmico está em sério risco. A desorganização é o caminho mais curto para o fracasso.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {problems.map((problem, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                  <problem.icon className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
            <div className="inline-block bg-red-600 text-white rounded-lg px-6 py-3">
              <p className="text-lg md:text-2xl font-bold">
                = REPROVAS + ESTRESSE + FUTURO DESTRUÍDO
              </p>
            </div>
        </div>
         <div className="flex justify-center pt-12">
            <Button asChild size="lg" className="w-[90%] mx-auto sm:w-auto sm:mx-0 bg-green-500 hover:bg-green-600">
                <a href="#offer">QUERO MINHA APROVAÇÃO</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
