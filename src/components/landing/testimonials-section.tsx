
import { StarIcon } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';


const testimonials = [
  {
    avatarId: 'ana-carolina-avatar',
    text: 'Nunca mais reprovei depois dos templates!',
    result: 'Passei em Medicina na UFMG!',
    author: 'Ana Carolina, 19 anos',
    rating: 5,
  },
  {
    avatarId: 'pedro-santos-avatar',
    text: 'Valeu cada centavo dos R$ 19,90!',
    result: 'Minhas notas subiram muito!',
    author: 'Pedro Santos, 22 anos',
    rating: 5,
  },
  {
    avatarId: 'julia-ferreira-avatar',
    text: 'Salvou meu semestre!',
    result: 'Agora tenho controle total!',
    author: 'Júlia Ferreira, 20 anos',
    rating: 5,
  },
  {
    avatarId: 'lucas-oliveira-avatar',
    text: 'Saí de aluno mediano para o melhor!',
    result: 'Meus pais ficaram orgulhosos!',
    author: 'Lucas Oliveira, 17 anos',
    rating: 5,
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} fill="currentColor" />
    ))}
  </div>
);

export function TestimonialsSection() {
  const getAvatar = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Depoimentos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                🗣️ LEVEL UP DOS ESTUDANTES
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Depoimentos reais de quem saiu do zero à aprovação.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => {
              const avatar = getAvatar(testimonial.avatarId);
              return (
                <Card key={testimonial.author} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          {avatar && <AvatarImage src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} />}
                          <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          {testimonial.rating && <Rating rating={testimonial.rating} />}
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-primary">"{testimonial.result}"</p>
                      <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
        <div className="flex justify-center pt-12">
            <Button asChild size="lg" className="w-[90%] mx-auto sm:w-auto sm:mx-0 bg-green-500 hover:bg-green-600 animate-heartbeat">
                <a href="#offer">QUERO SER O PRÓXIMO</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
