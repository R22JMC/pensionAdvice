import { Phone, Mail, MessageCircle, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCTAProps {
  title: string;
  subtitle: string;
  phone: string;
}

const ServiceCTA = ({ title, subtitle, phone }: ServiceCTAProps) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Response within 24 hours
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={`tel:${phone.replace(/\s/g, '')}`}>
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-white/90 font-semibold gap-2 h-12 px-6 shadow-xl group"
              >
                <Phone className="w-5 h-5" />
                Call Now: {phone}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-accent-foreground gap-2 h-12 px-6 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                Email Your Query
              </Button>
            </Link>
          </div>

          <p className="text-accent-foreground/70 flex items-center justify-center gap-2 text-sm">
            <MessageCircle className="w-4 h-4" />
            Advice, no obligation – we're here to help
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;