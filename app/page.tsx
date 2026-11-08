'use client';

// Layout
import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import CustomCursor from '@/components/layout/CustomCursor';

// Sections
import HeroSection from '@/components/sections/HeroSection';
import TrustStrip from '@/components/sections/TrustStrip';
import ServicesSection from '@/components/sections/ServicesSection';
import WhySection from '@/components/sections/WhySection';
import ProcessSection from '@/components/sections/ProcessSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TechMarquee from '@/components/sections/TechMarquee';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <WhySection />
        <ProcessSection />
        <PortfolioSection />
        <TechMarquee />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
