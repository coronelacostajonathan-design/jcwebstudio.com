import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PortfolioDemoModal } from './components/PortfolioDemoModal';
import { CalculatorSection } from './components/CalculatorSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { StatsSection } from './components/StatsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QrModal } from './components/QrModal';
import { Footer } from './components/Footer';
import { PortfolioItem } from './types';

export default function App() {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [calcInitialService, setCalcInitialService] = useState<string | undefined>(undefined);

  const scrollToCalculator = (serviceId?: string) => {
    if (serviceId) {
      setCalcInitialService(serviceId);
    }
    const calcElem = document.getElementById('calculadora');
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-slate-100 font-sans relative selection:bg-[#00C8FF]/30 selection:text-[#00C8FF]">
      
      {/* 3D WebGL Particle Grid Background */}
      <BackgroundCanvas />

      {/* Floating Glass Navbar */}
      <Navbar
        onOpenCalculator={() => scrollToCalculator()}
        onOpenQr={() => setIsQrModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenCalculator={() => scrollToCalculator()}
        />

        {/* 2. Services Section */}
        <ServicesSection
          onOpenCalculator={() => scrollToCalculator()}
          onSelectServiceForCalc={(id) => scrollToCalculator(id)}
        />

        {/* 3. Portfolio & Case Studies Section */}
        <PortfolioSection
          onSelectPortfolioItem={(item) => setSelectedPortfolioItem(item)}
        />

        {/* 4. Interactive Budget Calculator */}
        <CalculatorSection
          initialServiceId={calcInitialService}
        />

        {/* 5. Why Choose Us & Comparison Table */}
        <WhyUsSection />

        {/* 6. Process Section (6 Steps) */}
        <ProcessSection />

        {/* 7. Stats & Counters Section */}
        <StatsSection />

        {/* 8. FAQ Section */}
        <FAQSection />

        {/* 9. Contact & Location Section */}
        <ContactSection
          onOpenQr={() => setIsQrModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Portfolio Live Demo Modal */}
      <PortfolioDemoModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
      />

      {/* WhatsApp QR Modal */}
      <QrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

      {/* Floating WhatsApp Action Button & Chat */}
      <FloatingWhatsApp />

    </div>
  );
}
