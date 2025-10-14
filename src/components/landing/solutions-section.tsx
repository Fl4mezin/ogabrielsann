import {
  BookIcon,
  BriefcaseIcon,
  CheckIcon,
  GraduationCapIcon,
} from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';


const templates = [
  {
    title: 'SCHOOL PLANNER',
    subtitle: 'Para DOMINAR as matérias',
    icon: BookIcon,
    color: 'blue',
    features: [
      'Horário de estudos otimizado',
      'Controle de todas as matérias',
      'Lista de tarefas inteligente',
      'Acompanhamento de notas',
      'Calendário de provas',
    ],
  },
  {
    title: 'PLANNER EXECUTIVO',
    subtitle: 'Para quem trabalha E estuda',
    icon: BriefcaseIcon,
    color: 'green',
    features: [
      'Gestão de tempo profissional',
      'Controle de projetos/estágios',
      'Dashboard de produtividade',
      'Lista de metas e objetivos',
    ],
  },
  {
    title: 'PAINEL DO ESTUDANTE',
    subtitle: 'Para ser O MELHOR da turma',
    icon: GraduationCapIcon,
    color: 'purple',
    features: [
      'Grade horária visual',
      'Biblioteca de materiais',
      'Controle de atividades',
      'Tracker de progresso',
    ],
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/20',
    text: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-500',
    border: 'border-blue-200 dark:border-blue-800'
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/20',
    text: 'text-green-600 dark:text-green-400',
    iconBg: 'bg-green-500',
    border: 'border-green-200 dark:border-green-800'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-500',
    border: 'border-purple-200 dark:border-purple-800'
  },
};

export function SolutionsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Nossas Ferramentas
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              ⚡ POWER-UP PARA ESTUDANTES VENCEDORES
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Templates profissionais e fáceis de usar no Notion que vão transformar sua forma de estudar e organizar sua vida.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {templates.map((template) => {
            const colors = colorClasses[template.color as keyof typeof colorClasses];
            return (
              <Card key={template.title} className={cn('shadow-lg hover:shadow-2xl transition-shadow duration-300', colors.border)}>
                 <CardHeader className="text-center items-center">
                    <div className={cn('p-4 rounded-full mb-4', colors.iconBg)}>
                      <template.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className={cn('text-2xl font-bold', colors.text)}>{template.title}</CardTitle>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{template.subtitle}</p>
                 </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left w-full">
                    {template.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon className={cn('w-5 h-5 mt-1 shrink-0', colors.text)} />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
         <div className="flex justify-center pt-8">
            <Button asChild size="lg" className="w-[90%] mx-auto sm:w-auto sm:mx-0 bg-green-500 hover:bg-green-600">
                <a href="#offer">QUERO MEUS TEMPLATES</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
