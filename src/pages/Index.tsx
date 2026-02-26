import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyPensionAdvice from "@/components/WhyPensionAdvice";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import DirectorsSection from "@/components/DirectorsSection";
import ContactSection from "@/components/ContactSection";
import CalculatorSection from "@/components/CalculatorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyPensionAdvice />
        <ServicesSection />
        <HowItWorks />
        <ContactSection />
        <DirectorsSection />
        <CalculatorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
