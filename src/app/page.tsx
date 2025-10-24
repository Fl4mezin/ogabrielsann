import { HeroSection } from '@/components/landing/hero-section';
import { PainsSection } from '@/components/landing/pains-section';
import { SolutionsSection } from '@/components/landing/solutions-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { OfferSection } from '@/components/landing/offer-section';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { Footer } from '@/components/landing/footer';
import { SocialProofNotification } from '@/components/landing/social-proof-notification';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-background">
      <HeroSection />
      <PainsSection />
      <SolutionsSection />
      <OfferSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <Footer />
      <SocialProofNotification />
    </main>
  );
}
