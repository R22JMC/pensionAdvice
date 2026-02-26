import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceFeatureListProps {
  title: string;
  features: string[];
  description?: string;
}

const ServiceFeatureList = ({ title, features, description }: ServiceFeatureListProps) => {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-green text-white font-medium text-sm mb-6">
            <Check className="w-4 h-4" />
            Is this right for you?
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
          
          {description && (
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">{description}</p>
          )}
          
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground font-medium pt-1">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#service-form">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg shadow-accent/20">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureList;