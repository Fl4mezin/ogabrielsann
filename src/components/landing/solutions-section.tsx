import {
  BookIcon,
  BriefcaseIcon,
  CheckIcon,
  GraduationCapIcon,
} from '@/components/icons';
import { PixelatedCard } from '@/components/ui/pixelated-card';

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
    border: 'border-pixel-blue',
    text: 'text-pixel-blue',
    iconBg: 'bg-pixel-blue'
  },
  green: {
    border: 'border-pixel-green',
    text: 'text-pixel-green',
    iconBg: 'bg-pixel-green'
  },
  purple: {
    border: 'border-pixel-purple',
    text: 'text-pixel-purple',
    iconBg: 'bg-pixel-purple'
  },
};

export function SolutionsSection() {
  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:py-24 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-shadow-pixel">
          ⚡ POWER-UP PARA ESTUDANTES VENCEDORES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {templates.map((template) => {
            const colors = colorClasses[template.color as keyof typeof colorClasses];
            return (
              <PixelatedCard
                key={template.title}
                className={`!border-4 md:!border-8 ${colors.border} p-6 flex flex-col items-center hover:shadow-pixel-light transition-shadow duration-200`}
              >
                <div className={`p-3 md:p-4 ${colors.iconBg} border-2 md:border-4 border-black mb-4`}>
                  <template.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${colors.text}`}>{template.title}</h3>
                <p className="text-dark-gray font-bold text-xs md:text-sm mb-6">{template.subtitle}</p>
                <ul className="space-y-2 text-left w-full">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 shrink-0 ${colors.text}`} />
                      <span className="text-xs md:text-sm text-dark-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </PixelatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
