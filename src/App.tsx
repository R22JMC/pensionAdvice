import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { toast } from "sonner";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import DirectorsPensions from "./pages/DirectorsPensions";
import PensionTransfers from "./pages/PensionTransfers";
import PensionReviews from "./pages/PensionReviews";
import UKPensionTransfers from "./pages/UKPensionTransfers";
import EarlyRetirement from "./pages/EarlyRetirement";
import RedundancyPensions from "./pages/RedundancyPensions";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import PrivacyStatement from "./pages/PrivacyStatement";
import TermsOfBusiness from "./pages/TermsOfBusiness";
import PensionReviewCalculatorPage from "./pages/PensionReviewCalculator";
import EarlyRetirementCalculatorPage from "./pages/EarlyRetirementCalculator";
import DirectorsPensionCalculatorPage from "./pages/DirectorsPensionCalculator";
import RedundancyCalculatorPage from "./pages/RedundancyCalculatorPage";
import PensionTransferCalculatorPage from "./pages/PensionTransferCalculator";
import UKPensionTransferCalculatorPage from "./pages/UKPensionTransferCalculator";

const queryClient = new QueryClient();

const AppContent = () => {
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled rejection:", event.reason);
      toast.error("An error occurred. Please try again.");
      event.preventDefault();
    };

    window.addEventListener("unhandledrejection", handleRejection);
    return () => window.removeEventListener("unhandledrejection", handleRejection);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/pension-transfers" element={<PensionTransfers />} />
        <Route path="/services/directors-pensions" element={<DirectorsPensions />} />
        <Route path="/services/pension-reviews" element={<PensionReviews />} />
        <Route path="/services/uk-pension-transfers" element={<UKPensionTransfers />} />
        <Route path="/services/early-retirement" element={<EarlyRetirement />} />
        <Route path="/services/redundancy-pensions" element={<RedundancyPensions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-statement" element={<PrivacyStatement />} />
        <Route path="/terms-of-business" element={<TermsOfBusiness />} />
        <Route path="/pension-review-calculator" element={<PensionReviewCalculatorPage />} />
        <Route path="/early-retirement-calculator" element={<EarlyRetirementCalculatorPage />} />
        <Route path="/directors-pension-calculator" element={<DirectorsPensionCalculatorPage />} />
        <Route path="/redundancy-calculator" element={<RedundancyCalculatorPage />} />
        <Route path="/pension-transfer-calculator" element={<PensionTransferCalculatorPage />} />
        <Route path="/uk-pension-transfer-calculator" element={<UKPensionTransferCalculatorPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
