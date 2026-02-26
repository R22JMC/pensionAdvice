import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import chrisMcKenzieImg from "@/assets/team/chris-mckenzie.jpg";
import chrisCrowleyImg from "@/assets/team/chris-crowley.jpg";

const DirectorsSection = () => {
  const directors = [
    {
      name: "Chris McKenzie",
      title: "Director",
      credentials: ["CFP®", "SIA", "QFA"],
      image: chrisMcKenzieImg,
      bio: "Chris is the Managing Director of Pension Advice.ie. Originally from Scotland, Chris came to Ireland in 2003, working for some of Ireland's leading financial institutions before becoming a director in 2011.",
      phone: "(01) 912 5030",
      email: "chris@pension-advice.ie",
      linkedin: "https://www.linkedin.com/in/chrismckenzie1",
    },
    {
      name: "Chris Crowley",
      title: "Director",
      credentials: ["PgD", "SIA", "RPA", "FPRA", "QFA"],
      image: chrisCrowleyImg,
      bio: "Chris is a Director with extensive experience in financial services. He has worked for leading brokerages and ran his own successful brokerage before joining Pension Advice in 2019.",
      phone: "(01) 912 5030",
      email: "chriscrowley@pension-advice.ie",
      linkedin: "https://www.linkedin.com/in/chriscrowley",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
            Meet Our Team
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Directors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert pension professionals with decades of combined experience, dedicated to helping you secure your financial future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {directors.map((director, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              {/* Circular Image with ring */}
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-xl bg-muted">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-[center_20%] scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {director.credentials.slice(0, 3).map((cred, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  {director.name}
                </h3>
                <p className="text-accent font-medium text-sm">
                  {director.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  {director.bio}
                </p>

                {/* Contact Links */}
                <div className="flex items-center justify-center gap-4 pt-3">
                  <a
                    href={`tel:${director.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${director.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  {director.linkedin && (
                    <a
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link to="/about">Meet the Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
