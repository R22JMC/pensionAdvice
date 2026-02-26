import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PensionTransferCalculator from "@/components/calculators/PensionTransferCalculator";

const PensionTransferCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pension Transfer Calculator | Consolidation Savings Estimator</title>
        <meta name="description" content="Use our free pension transfer calculator to see how much you could save by consolidating your pensions." />
      </Helmet>
      <Header />
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-accent font-semibold text-sm mb-3 tracking-wider uppercase">Free Pension Tool</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pension Transfer Calculator</h1>
            <p className="text-lg text-muted-foreground">
              See how much you could save by consolidating your pensions into one plan.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <PensionTransferCalculator />
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

export default PensionTransferCalculatorPage;
