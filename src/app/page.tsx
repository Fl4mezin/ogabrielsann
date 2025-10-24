import { OfferSection } from '@/components/landing/offer-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { SocialProofNotification } from '@/components/landing/social-proof-notification';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-background">
      <OfferSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <SocialProofNotification />
    </main>
  );
}
