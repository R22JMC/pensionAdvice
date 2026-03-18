import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PensionReviewCalculator from "@/components/calculators/PensionReviewCalculator";

const PensionReviewCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://www.pensionadvice.ie/pension-review-calculator" />
      </Helmet>
      <Helmet>
        <title>Pension Review Calculator | Free Pension Check Tool</title>
        <meta name="description" content="Use our free pension review calculator to check the projected value of your pension. Get instant estimates and expert advice." />
      </Helmet>
      <Header />
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-accent font-semibold text-sm mb-3 tracking-wider uppercase">Free Pension Tool</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pension Review Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Check how your pension is performing and see what it could be worth at retirement.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <PensionReviewCalculator />
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

export default PensionReviewCalculatorPage;
