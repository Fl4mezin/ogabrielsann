'use client';

import { generatePixelatedHeadline } from '@/ai/flows/generate-pixelated-headline';
import { PixelatedButton } from '@/components/ui/pixelated-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export function HeadlineGeneratorSection() {
  const [description, setDescription] = useState('templates de organização para estudantes que querem melhorar as notas e evitar a reprovação.');
  const [headlines, setHeadlines] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setHeadlines([]);
    try {
      const result = await generatePixelatedHeadline({ description });
      setHeadlines(result.headlines);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao gerar headlines',
        description: 'Não foi possível se conectar com a IA. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:py-24">
      <div className="w-full max-w-3xl mx-auto">
        <Card className="pixel-border shadow-pixel">
          <CardHeader>
            <CardTitle className="text-xl md:text-3xl text-center font-bold text-shadow-pixel">
              🤖 Gerador de Headline
            </CardTitle>
            <CardDescription className="text-center text-xs !font-body text-dark-gray pt-2 md:text-sm">
              Use nossa IA para criar outras headlines no estilo 8-bit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="description" className="text-sm font-bold block mb-2">Descrição da Página</label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ex: Landing page para vender templates..."
                  className="pixel-border !font-body text-xs md:text-sm"
                />
              </div>
              <PixelatedButton type="submit" disabled={loading} className="w-full text-sm md:text-base">
                {loading ? 'Gerando...' : 'Gerar Headlines'}
              </PixelatedButton>
            </form>

            {headlines.length > 0 && (
              <div className="mt-8">
                <h3 className="font-bold text-center text-base md:text-lg mb-4">Opções Geradas:</h3>
                <ul className="space-y-4">
                  {headlines.map((headline, index) => (
                    <li key={index} className="pixel-border p-4 text-center bg-gray-50 text-sm md:text-base">
                      {headline}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
