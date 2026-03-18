import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import { chrisMcKenzie, chrisCrowley, louiseWilliams, hannaGallagher, pamelaMcGann } from "@/data/teamData";
import { CheckCircle, Award, Users, Target, Phone, Mail, Linkedin, ChevronRight, Quote } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import chrisMcKenzieImage from "@/assets/team/chris-mckenzie.jpg";
import chrisCrowleyImage from "@/assets/team/chris-crowley.jpg";
import louiseWilliamsImage from "@/assets/team/louise-williams.jpg";
import hannaGallagherImage from "@/assets/team/hanna-gallagher.jpg";
import pamelaMcGannImage from "@/assets/team/pamela-mcgann.jpg";
import officeImage from "@/assets/office/team-working.jpg";
import loungeImage from "@/assets/office/lounge.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your financial goals are our priority. We provide personalised advice tailored to your unique circumstances.",
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Our team holds the highest qualifications in the industry, ensuring you receive the best possible guidance.",
    },
    {
      icon: Users,
      title: "Trusted Partners",
      description: "We work with Ireland's leading pension providers to offer you the widest range of options.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Service",
      description: "No hidden fees, no jargon. We explain everything clearly so you can make informed decisions.",
    },
  ];

  const directors = [
    { member: chrisMcKenzie, image: chrisMcKenzieImage },
    { member: chrisCrowley, image: chrisCrowleyImage },
  ];

  const teamMembers = [
    { member: louiseWilliams, image: louiseWilliamsImage },
    { member: hannaGallagher, image: hannaGallagherImage },
    { member: pamelaMcGann, image: pamelaMcGannImage },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | Ireland's Leading Authority on Pension Advice</title>
        <meta name="description" content="About Us - Our aim at Pension Advice is to put our client's needs and expectations first in everything we do. We focus on the delivery of truly independent expert advice, delivered to you by a team of highly qualified & specialised Consultants with a combined 25 years' experience." />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={loungeImage} 
            alt="Our office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-56 h-56 bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-trust-green text-white rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              About Pension Advice
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Trusted Pension Experts
              <span className="text-accent block mt-1">You Can Rely On</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90 max-w-xl leading-relaxed mb-6">
              We help Irish people secure their financial future with clear, honest pension advice.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get In Touch
                </Button>
              </Link>
              <a href="tel:019125030">
                <Button size="lg" className="bg-white hover:bg-white/90 text-accent font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  (01) 912 5030
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-8 bg-gradient-to-b from-background to-accent/5">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
            {[
              { value: "50+", label: "Years Experience", bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
              { value: "€100M+", label: "Under Management", bg: "bg-trust-green/10", text: "text-trust-green", border: "border-trust-green/20" },
              { value: "1000+", label: "Clients Helped", bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center px-4 py-4 md:px-8 md:py-5 rounded-xl ${stat.bg} border ${stat.border}`}
              >
                <p className={`text-lg sm:text-2xl md:text-3xl font-bold ${stat.text}`}>{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-14 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
                Our Story
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                Built on Trust, Driven by Results
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Pension Advice was founded with a simple mission: to provide clear, honest, and expert pension guidance to people across Ireland.
                </p>
                <p>
                  With over 50 years of combined experience, we have helped thousands of clients navigate pension planning, transfers, and retirement options.
                </p>
                <p>
                  We are regulated by the Central Bank of Ireland, ensuring the highest standards of professional conduct and client protection.
                </p>
              </div>
              
              {/* Quote */}
              <div className="mt-5 p-4 bg-section-light rounded-xl border-l-4 border-accent relative">
                <Quote className="absolute top-3 right-3 w-6 h-6 text-accent/20" />
                <p className="text-foreground italic text-sm mb-2">
                  "Our goal is simple: help you understand your pension options so you can make the best decisions for your future."
                </p>
                <p className="text-accent font-semibold text-sm">— Chris McKenzie, Director</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl" />
              <div className="relative">
                <img
                  src={officeImage}
                  alt="Our team at work"
                  className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
                />
                {/* Floating Card */}
                <a
                  href="https://registers.centralbank.ie/FirmRegisterDataPage.aspx?firmReferenceNumber=C143985&register=7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 left-0 sm:-left-4 bg-card p-3 rounded-lg shadow-lg border border-border hover:shadow-xl hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">Central Bank</p>
                      <p className="text-xs text-muted-foreground">Regulated</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-14 bg-section-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
              What Guides Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything we do is guided by our commitment to putting clients first.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-card p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <value.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-12 md:py-14 bg-background">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
              Leadership
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Meet Our Directors
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Experienced professionals leading Pension Advice with expertise and dedication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map(({ member, image }, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center text-center"
              >
                {/* Circular Image */}
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-xl bg-muted">
                    <img
                      src={image}
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_20%] scale-110 group-hover:scale-125 transition-transform duration-500"
                    />
                  </div>
                </div>
                  
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {member.credentials.slice(0, 3).map((cred, i) => (
                      <span key={i} className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {cred}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent font-medium text-sm">{member.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{member.shortBio}</p>
                  
                  {/* Contact */}
                  <div className="flex items-center justify-center gap-4 pt-3">
                    <a 
                      href={`tel:${member.phone.replace(/\s/g, "")}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-1.5 text-sm mt-4">
                        View Full Bio
                        <ChevronRight className="w-3 h-3" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-start gap-3">
                          <img
                            src={image}
                            alt={member.name}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                          <div>
                            <DialogTitle className="text-xl">{member.name}</DialogTitle>
                            <p className="text-accent font-medium text-sm">{member.credentials.join(" | ")}</p>
                            <p className="text-muted-foreground text-sm">{member.title}</p>
                          </div>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-4 mt-3">
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-1">About</h4>
                          <p className="text-muted-foreground text-sm whitespace-pre-line">{member.fullBio}</p>
                        </div>

                        {member.education.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-1">Education</h4>
                            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                              {member.education.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {member.qualifications.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-1">Qualifications</h4>
                            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                              {member.qualifications.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {member.specializations.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-1">Specialises in</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {member.specializations.map((item, i) => (
                                <span key={i} className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-14 bg-section-light">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
              Our People
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              The Team Behind Your Success
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dedicated professionals here to support you throughout your pension journey.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map(({ member, image }, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center text-center"
              >
                {/* Circular Image */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-xl bg-muted">
                    <img
                      src={image}
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_20%] scale-110 group-hover:scale-125 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  {member.credentials.length > 0 && (
                    <div className="flex justify-center gap-1.5">
                      {member.credentials.slice(0, 2).map((cred, i) => (
                        <span key={i} className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {cred}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent text-sm font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Tour Section */}
      <section className="py-12 md:py-14 bg-background">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
              Visit Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Take a Virtual Office Tour
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our Dublin office from the comfort of your home. See where our team works to help you secure your financial future.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <div className="aspect-video">
                <iframe
                  src="https://my.matterport.com/show/?m=bzEh5jggpgR"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                  title="Pension Advice Office Tour"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Get Started?
            </h2>
            <p className="opacity-90 mb-5 max-w-lg mx-auto">
              Book a free consultation with our expert team today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Book Consultation
                </Button>
              </Link>
              <a href="tel:019125030">
                <Button size="lg" className="bg-white hover:bg-white/90 text-accent font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Info */}
      <section className="py-4 bg-muted/50 border-t border-border">
        <div className="container-custom text-center">
          <p className="text-xs text-muted-foreground">
            Pension Advice is regulated by the Central Bank of Ireland. Registered in Ireland under company number 565470.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;