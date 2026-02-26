import { ArrowLeftRight, Signpost, FileSearch, Globe, KeyRound, Hourglass } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: ArrowLeftRight,
      title: "Transfer & Consolidate your Pensions",
      description: "Move or combine your pensions with clear guidance at every step. We handle the process and help you take control of your pension benefits.",
      colorClass: "accent" as const,
      href: "/services/pension-transfers",
    },
    {
      icon: Signpost,
      title: "Pensions for Directors & Self-Employed",
      description: "Pension planning tailored to directors and self-employed professionals. Clear advice on PRSAs, Directors Pensions, and tax efficiency.",
      colorClass: "primary" as const,
      href: "/services/directors-pensions",
    },
    {
      icon: FileSearch,
      title: "Pension Reviews",
      description: "Understand how your pension is set up, including charges and performance, and whether it still meets your needs.",
      colorClass: "green" as const,
      href: "/services/pension-reviews",
    },
    {
      icon: Globe,
      title: "UK–Ireland Pension Transfers",
      description: "Move your UK pension to Ireland with confidence. We guide you through the transfer process and help you understand your options.",
      colorClass: "accent" as const,
      href: "/services/uk-pension-transfers",
    },
    {
      icon: KeyRound,
      title: "Access your Pension Early",
      description: "Explore your options for accessing pension benefits from age 50. Clear guidance on eligibility and the choices available to you.",
      colorClass: "primary" as const,
      href: "/services/early-retirement",
    },
    {
      icon: Hourglass,
      title: "Pensions & Redundancy Support",
      description: "Know what happens to your pension when you're made redundant. Understand your rights, options, and whether a transfer makes sense.",
      colorClass: "green" as const,
      href: "/services/redundancy-pensions",
    },
  ];

  const getIconStyles = (colorClass: "primary" | "accent" | "green") => {
    switch (colorClass) {
      case "primary": 
        return "bg-primary text-primary-foreground";
      case "accent": 
        return "bg-accent text-accent-foreground";
      case "green": 
        return "bg-trust-green text-white";
    }
  };

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Our Services
          </h2>
        </div>

        {/* Clean 3-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border/50 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center flex flex-col items-center"
            >
              {/* Icon in colored circle */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${getIconStyles(service.colorClass)}`}>
                <service.icon className="w-8 h-8 stroke-[1.5]" />
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-lg text-foreground mb-2 leading-tight">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              
              {/* Single button */}
              <Button 
                asChild 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-xs uppercase tracking-wider"
              >
                <Link to={service.href}>Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
