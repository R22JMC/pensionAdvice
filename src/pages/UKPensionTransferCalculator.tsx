import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UKPensionTransferCalculator from "@/components/calculators/UKPensionTransferCalculator";

const UKPensionTransferCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://www.pensionadvice.ie/uk-pension-transfer-calculator" />
      </Helmet>
      <Helmet>
        <title>UK Pension Transfer Calculator | QROPS Estimator</title>
        <meta name="description" content="Use our free UK pension transfer calculator to estimate the value of transferring your UK pension to Ireland." />
      </Helmet>
      <Header />
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-accent font-semibold text-sm mb-3 tracking-wider uppercase">Free Pension Tool</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">UK Pension Transfer Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Estimate the value and benefits of transferring your UK pension to Ireland.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <UKPensionTransferCalculator />
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

export default UKPensionTransferCalculatorPage;
