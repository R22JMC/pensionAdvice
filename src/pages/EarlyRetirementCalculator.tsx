import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EarlyRetirementCalculator from "@/components/calculators/EarlyRetirementCalculator";

const EarlyRetirementCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://www.pensionadvice.ie/early-retirement-calculator" />
      </Helmet>
      <Helmet>
        <title>Early Retirement Calculator | Plan Your Early Exit</title>
        <meta name="description" content="Use our free early retirement calculator to estimate your pension lump sum and retirement income options." />
      </Helmet>
      <Header />
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-accent font-semibold text-sm mb-3 tracking-wider uppercase">Free Pension Tool</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Early Retirement Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Estimate your retirement lump sum and income if you retire early.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <EarlyRetirementCalculator />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            This calculator provides estimates only. For personalised advice, speak with our team.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EarlyRetirementCalculatorPage;
