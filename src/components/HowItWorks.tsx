import { FileText, Phone, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Get in Touch",
      description: "Start with a short call or message. We'll ask about your existing pensions and what you'd like to know or improve.",
    },
    {
      number: "2",
      icon: Phone,
      title: "We Gather the Details",
      description: "With your permission, we contact your pension providers and request up-to-date information on values, charges, and options.",
    },
    {
      number: "3",
      icon: Calendar,
      title: "You Get Clear, No-Jargon Advice",
      description: "We'll break down your options with plain-English recommendations. If your pensions are fine, we'll tell you. If not, we'll help you fix it.",
    },
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
            Get Started
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            How it Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-28 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-accent via-primary to-accent opacity-20" />

          {steps.map((step, index) => (
            <div key={index} className="relative group text-center">
              <div className="relative inline-flex mb-8">
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground font-bold text-lg flex items-center justify-center z-10 shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300 border border-border/50">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-4 text-lg leading-snug px-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
