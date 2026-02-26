import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-trust-green" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Thank You for Your Enquiry
            </h1>

            {/* Message */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A pension advice agent will be in touch with you shortly to discuss your needs.
            </p>

            {/* Contact Info Box */}
            <div className="bg-primary rounded-2xl p-8 mb-8">
              <p className="text-primary-foreground/90 mb-4">
                If you'd prefer to speak with us sooner, give us a call:
              </p>
              <a 
                href="tel:019125030" 
                className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-accent hover:text-accent/80 transition-colors"
              >
                <Phone className="w-6 h-6" />
                01 912 5030
              </a>
              <p className="text-primary-foreground/70 text-sm mt-4">
                Monday – Thursday 9am – 5:30pm, Friday by Appointment
              </p>
            </div>

            {/* Back to Home Button */}
            <Link to="/">
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
