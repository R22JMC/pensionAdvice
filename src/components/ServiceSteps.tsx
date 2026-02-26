import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
}

interface ServiceStepsProps {
  title: string;
  subtitle?: string;
  steps: Step[];
}

const ServiceSteps = ({ title, subtitle, steps }: ServiceStepsProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-[hsl(215,70%,18%)] to-[hsl(220,80%,15%)] text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
      </div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-500 h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-lg shadow-accent/30">
                    {index + 1}
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">{step.description}</p>
                  
                  {step.bullets && step.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2 text-sm text-primary-foreground/60">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps;