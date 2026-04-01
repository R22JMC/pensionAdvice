import { HeartHandshake, TrendingUp, Headphones, BadgeCheck } from "lucide-react";

// TODO: Add video rotation when "What Sets Pension Advice Apart" mp4 is ready
// const homepageVideos = ["/videos/why-pension-advice.mp4", "/videos/what-sets-pension-advice-apart.mp4"];

const WhyPensionAdvice = () => {
  const features = [{
    icon: HeartHandshake,
    title: "Clear advice, focused on you",
    description: "We listen carefully to your needs and offer advice that helps you make informed pension decisions.",
    colorClass: "accent" as const,
  }, {
    icon: TrendingUp,
    title: "Make your pension work harder",
    description: "We review your pensions to assess investment performance and identify opportunities aligned with your long-term goals.",
    colorClass: "primary" as const,
  }, {
    icon: Headphones,
    title: "Speak directly with our team",
    description: "Get dedicated support from our experienced team who take the time to understand your situation and goals.",
    colorClass: "green" as const,
  }, {
    icon: BadgeCheck,
    title: "A track record you can trust",
    description: "Thousands of clients across Ireland rely on us to review, transfer, and manage their pensions.",
    colorClass: "accent" as const,
  }];

  const stats = [
    { value: "50+", label: "Years Experience", colorClass: "primary" as const },
    { value: "€100M+", label: "Under Management", colorClass: "green" as const },
    { value: "1000+", label: "Clients Helped", colorClass: "accent" as const },
  ];

  const getColorClasses = (colorClass: "accent" | "primary" | "green") => {
    switch (colorClass) {
      case "accent":
        return { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" };
      case "primary":
        return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" };
      case "green":
        return { bg: "bg-trust-green/10", text: "text-trust-green", border: "border-trust-green/20" };
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      <div className="container-custom relative">
        {/* Header - Centered */}
        <div className="text-center mb-10">
          <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
            About Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Pension Advice?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help people across Ireland move forward with their pensions. Whether that means reviewing existing arrangements, consolidating plans, or preparing for retirement, we provide clear direction at every stage.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Stats + Video */}
          <div className="flex flex-col gap-6">
            {/* Stats Row - Above Video */}
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {stats.map((stat, index) => {
                const colors = getColorClasses(stat.colorClass);
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center px-3 py-3 md:px-6 md:py-4 rounded-xl ${colors.bg} border ${colors.border}`}
                  >
                    <p className={`text-lg sm:text-2xl md:text-3xl font-bold ${colors.text}`}>{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            
            {/* Video */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-2xl opacity-50" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50">
                <video
                  src="/videos/why-pension-advice.mp4#t=0.5"
                  controls 
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="flex flex-col gap-4">

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => {
                const colors = getColorClasses(feature.colorClass);
                return (
                  <div 
                    key={index} 
                    className="group flex items-start gap-4 p-4 rounded-xl bg-card shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
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

export default WhyPensionAdvice;
