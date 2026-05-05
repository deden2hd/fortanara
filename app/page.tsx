import { AboutSection } from "./_components/landing/about-section";
import { AttackImpactSection } from "./_components/landing/attack-impact-section";
import { CarouselScript } from "./_components/landing/carousel-script";
import { CTASection } from "./_components/landing/cta-section";
import { FAQSection } from "./_components/landing/faq-section";
import { HeroSection } from "./_components/landing/hero-section";
import { PortfolioSection } from "./_components/landing/portfolio-section";
import { RecoverySection } from "./_components/landing/recovery-section";
import { RecoveryStagesSection } from "./_components/landing/recovery-stages-section";
import { SiteFooter } from "./_components/landing/site-footer";
import { SiteHeader } from "./_components/landing/site-header";
import { TestimonialsSection } from "./_components/landing/testimonials-section";
import { WhyUsSection } from "./_components/landing/why-us-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <RecoverySection />
      <AttackImpactSection />
      <WhyUsSection />
      <RecoveryStagesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <SiteFooter />
      <CarouselScript />
    </main>
  );
}
