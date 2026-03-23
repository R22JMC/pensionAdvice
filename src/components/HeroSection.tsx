import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero/happy-pensioners.jpg";
import avivaLogo from "@/assets/partners/aviva.jpg";
import bcpLogo from "@/assets/partners/bcp.jpg";
import cantorFitzgeraldLogo from "@/assets/partners/cantor-fitzgerald.jpg";
import coneximLogo from "@/assets/partners/conexim.jpg";
import davyLogo from "@/assets/partners/davy.jpg";
import irishLifeLogo from "@/assets/partners/irish-life.jpg";
import newIrelandLogo from "@/assets/partners/new-ireland.jpg";
import zurichLogo from "@/assets/partners/zurich.jpg";
import standardLifeLogo from "@/assets/partners/standard-life.jpg";
import royalLondonLogo from "@/assets/partners/royal-london.jpg";
import pensionPropertyLogo from "@/assets/partners/pension-property.jpg";

const HeroSection = () => {
  const partnerLogosDesktop = useMemo(
    () => [      
      { src: bcpLogo, alt: "BCP" },
      { src: cantorFitzgeraldLogo, alt: "Cantor Fitzgerald" },
      { src: coneximLogo, alt: "Conexim" },
      { src: zurichLogo, alt: "Zurich" },
      { src: newIrelandLogo, alt: "New Ireland Assurance" },
      { src: royalLondonLogo, alt: "Royal London" },
      { src: standardLifeLogo, alt: "Standard Life" },
      { src: irishLifeLogo, alt: "Irish Life" },     
      { src: avivaLogo, alt: "Aviva" },     
      
      { src: davyLogo, alt: "Davy" },
      { src: pensionPropertyLogo, alt: "Pension Property" },
    ],
    [],
  );

  // Mobile reorder so the "main" providers appear first under 767px.
  const partnerLogosMobile = useMemo(
    () => [
      { src: zurichLogo, alt: "Zurich" },
      { src: newIrelandLogo, alt: "New Ireland Assurance" },
      { src: royalLondonLogo, alt: "Royal London" },
      { src: standardLifeLogo, alt: "Standard Life" },
      { src: irishLifeLogo, alt: "Irish Life" },
      { src: avivaLogo, alt: "Aviva" },
      // The remaining providers
      { src: bcpLogo, alt: "BCP" },
      { src: cantorFitzgeraldLogo, alt: "Cantor Fitzgerald" },
      { src: coneximLogo, alt: "Conexim" },
      { src: davyLogo, alt: "Davy" },
      { src: pensionPropertyLogo, alt: "Pension Property" },
    ],
    [],
  );

  const [isMobile, setIsMobile] = useState(false);
  const [logosInView, setLogosInView] = useState(false);
  const logosSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mql.matches);
    onChange();

    // Safari < 14 fallback
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    // eslint-disable-next-line deprecation/deprecation
    mql.addListener(onChange);
    // eslint-disable-next-line deprecation/deprecation
    return () => mql.removeListener(onChange);
  }, []);

  useEffect(() => {
    if (!logosSectionRef.current) return;
    if (logosInView) return; // start once

    const el = logosSectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setLogosInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [logosInView]);

  const partnerLogos = isMobile ? partnerLogosMobile : partnerLogosDesktop;

  // Load Reviews.io widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.reviews.io/rich-snippet-reviews-widgets/dist.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.richSnippetReviewsWidgets) {
        // @ts-ignore
        window.richSnippetReviewsWidgets('carousel-inline-widget-810', {
          store: 'pension-advice',
          widgetName: 'carousel-inline',
          primaryClr: '#f47e27',
          neutralClr: '#f4f4f4',
          reviewTextClr: '#2f2f2f',
          ratingTextClr: '#2f2f2f',
          layout: 'fullWidth',
          numReviews: 21
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return <section className="relative overflow-hidden">
      {/* Hero Background with animated gradient */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up bg-trust-green">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Ireland's Trusted Pension Experts
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight animate-fade-up" style={{
              animationDelay: '0.1s'
            }}>
                Pension Advice That Helps You 
                <span className="text-accent"> Take Control</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{
              animationDelay: '0.2s'
            }}>
                Understand your pension and take control of your retirement planning with confidence. With clear advice and practical guidance, we help you make well-informed decisions at every stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{
              animationDelay: '0.3s'
            }}>
                <Link to="/contact" className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-lg shadow-accent/25 animate-[pulse-scale_2s_ease-in-out_infinite]">
                  Get Pension Advice
                </Link>
                <a href="#services" className="inline-flex items-center justify-center backdrop-blur-sm font-semibold px-8 py-3 rounded-lg border border-primary-foreground/20 transition-all bg-primary-foreground text-accent">
                  Our Services
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-transparent rounded-[2rem] blur-xl" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <img src={heroImage} alt="Happy couple enjoying retirement - pension planning success" className="w-full h-full object-cover" />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground p-4 rounded-xl shadow-xl animate-fade-up" style={{
                animationDelay: '0.5s'
              }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-trust-green/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-trust-green">50+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Years Experience</p>
                      <p className="text-xs text-muted-foreground">Trusted team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section - Reviews.io Widget */}
      <div className="bg-card py-8 border-b border-border">
        <div className="container-custom px-4">
          <div id="carousel-inline-widget-810" style={{
          width: '100%',
          maxWidth: '810px',
          margin: '0 auto'
        }}></div>
        </div>
      </div>

      {/* Partner Logos Scroller */}
      <div className="bg-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.02] to-transparent bg-white" />
        <div className="relative" ref={logosSectionRef}>
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
            Trusted by Ireland's leading pension providers
          </p>
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className={`flex w-max justify-center ${logosInView ? "animate-scroll-x" : ""}`}>
            <div className="flex items-center gap-12 md:gap-16 px-8 shrink-0">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-[120px] md:w-[160px] flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="h-14 md:h-16 w-auto max-w-full object-contain transition-all duration-300" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-12 md:gap-16 px-8 shrink-0">
              {partnerLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 w-[120px] md:w-[160px] flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="h-14 md:h-16 w-auto max-w-full object-contain transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;