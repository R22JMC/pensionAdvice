import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DirectorsPensionCalculator from "@/components/calculators/DirectorsPensionCalculator";

const DirectorsPensionCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Directors Pension Calculator | Max Funding Quote</title>
        <meta name="description" content="Get a free max funding quote for your director's pension. Find out how much you can contribute tax-efficiently." />
      </Helmet>
      <Header />
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-accent font-semibold text-sm mb-3 tracking-wider uppercase">Free Pension Tool</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Directors Pension Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Request a personalised max funding quote for your director's or self-employed pension.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <DirectorsPensionCalculator />
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

export default DirectorsPensionCalculatorPage;
