import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Pension Transfers & Consolidation", href: "/services/pension-transfers" },
    { name: "Directors & Self-Employed", href: "/services/directors-pensions" },
    { name: "Pension Reviews", href: "/services/pension-reviews" },
    { name: "UK Pension Transfers", href: "/services/uk-pension-transfers" },
    { name: "Early Retirement", href: "/services/early-retirement" },
    { name: "Redundancy & Pensions", href: "/services/redundancy-pensions" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        {/* Mobile Header Bar */}
        <div className="flex lg:hidden items-center justify-between h-14 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Pension Advice" className="h-8 w-auto" />
          </Link>

          {/* Contact Us Button & Hamburger */}
          <div className="flex items-center gap-3">
            <Link to="/contact">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs px-3">
                Contact Us
              </Button>
            </Link>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Header Bar */}
        <div className="hidden lg:flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Pension Advice" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-primary font-medium transition-colors link-underline"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors">
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                  <div className="bg-card rounded-xl shadow-xl border border-border overflow-hidden">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors border-b border-border/50 last:border-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors link-underline"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors link-underline"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href="tel:019125030">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2">
                <Phone className="w-4 h-4" />
                Call us Now
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 px-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Our Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="text-sm text-foreground/70 hover:text-accent py-2 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a href="tel:019125030" className="w-full mt-2 block">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 w-full">
                  <Phone className="w-4 h-4" />
                  Call us Now
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
    {/* Spacer for fixed header */}
    <div className="h-14 lg:h-20" />
    </>
  );
};

export default Header;