import { TrendingUp, Shield, Users, PiggyBank } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  title: string;
  introduction: string;
  benefits: Benefit[];
}

const icons = [TrendingUp, Shield, Users, PiggyBank];

const ServiceBenefits = ({ title, introduction, benefits }: ServiceBenefitsProps) => {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left content */}
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-green text-white font-medium text-sm mb-6">
                <TrendingUp className="w-4 h-4" />
                Why It Matters
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">{title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{introduction}</p>
            </div>

            {/* Right - Benefits cards */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div 
                    key={index} 
                    className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-accent/20 transition-all duration-500"
                  >
                    {/* Gradient accent on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;