import { StarIcon } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

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
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-pixel-yellow' : 'text-gray-400'}`} />
    ))}
  </div>
);

export function TestimonialsSection() {
  const getAvatar = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section className="w-full max-w-6xl py-16 px-4 md:py-24">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-shadow-pixel">
        🗣️ LEVEL UP DOS ESTUDANTES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((testimonial) => {
          const avatar = getAvatar(testimonial.avatarId);
          return (
            <div key={testimonial.author} className="flex items-start gap-4">
              {avatar && (
                 <div className="pixel-border bg-gray-200">
                    <Image
                      src={avatar.imageUrl}
                      alt={avatar.description}
                      width={64}
                      height={64}
                      className="shrink-0"
                      data-ai-hint={avatar.imageHint}
                    />
                 </div>
              )}
              <div className="relative bg-gray-100 pixel-border p-4 w-full">
                <div className="absolute -left-3 top-4 w-3 h-3 bg-gray-100" style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}></div>
                <div className="absolute -left-4 top-4 w-4 h-3 bg-black -z-10" style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}></div>
                
                <p className="text-base text-dark-gray italic">"{testimonial.text}"</p>
                <p className="font-bold text-base my-2 bg-pixel-yellow text-black p-1 inline-block">"{testimonial.result}"</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3">
                    <p className="text-sm font-bold text-dark-gray">{testimonial.author}</p>
                    {testimonial.rating && <Rating rating={testimonial.rating} />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
