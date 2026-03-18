import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const Footer = () => {
  const [remunerationOpen, setRemunerationOpen] = useState(false);
  const learnMore = [{
    name: "Resources",
    href: "/resources"
  }, {
    name: "Pension Transfers",
    href: "/services/pension-transfers"
  }];
  const about = [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Our Team",
    href: "/about"
  }, {
    name: "Our Services",
    href: "/#services"
  }, {
    name: "Contact Us",
    href: "/contact"
  }];
  const calculators = [{
    name: "Pension Review",
    href: "/pension-review-calculator"
  }, {
    name: "Early Retirement",
    href: "/early-retirement-calculator"
  }, {
    name: "Directors Pension",
    href: "/directors-pension-calculator"
  }, {
    name: "Redundancy",
    href: "/redundancy-calculator"
  }, {
    name: "Pension Transfer",
    href: "/pension-transfer-calculator"
  }, {
    name: "UK Pension Transfer",
    href: "/uk-pension-transfer-calculator"
  }];
  const legal = [{
    name: "Privacy Statement",
    href: "/privacy-statement"
  }, {
    name: "Terms of Business",
    href: "/terms-of-business"
  }];
  return <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Logo & Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Pension Advice" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Ireland's leading pension and retirement planning advisers
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Pension Advice Ireland has over 50 years combined experience in advising all aspects of Pensions.
            </p>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Learn More</h4>
            <ul className="space-y-2">
              {learnMore.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Calculators</h4>
            <ul className="space-y-2">
              {calculators.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2">
              {about.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal Information</h4>
            <ul className="space-y-2">
              {legal.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                    {link.name}
                  </Link>
                </li>)}
              <li>
                <button
                  onClick={() => setRemunerationOpen(true)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Charges
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:019125030" className="hover:text-primary transition-colors">01 912 5030</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@pension-advice.ie" className="hover:text-primary transition-colors">hello@pension-advice.ie</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                Mon – Thurs 9am – 5:30pm,<br />Fri by Appointment
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Suite 2, Block 8,<br />Dunshaughlin Business Park,<br />Dunshaughlin, A85 EE98</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 px-4">
          <div className="text-center text-xs text-muted-foreground space-y-2">
            <p>
              Pension Advice is a trading name of Gen Z Financial Solutions Limited and is regulated by the Central Bank of Ireland C143985.
            </p>
            <p>
              Directors: Chris McKenzie and Chris Crowley. Registered in Ireland under company number 565470.
            </p>
            <p>
              Registered Office: Suite 2, Block 8, Dunshaughlin Business Park, Dunshaughlin, A85 EE98.
            </p>
            <p className="pt-2">
              © 2025 Gen Z Financial Solutions Limited. All Rights Reserved. Web Design by <a href="https://rooftoptwentytwo.ie/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Rooftop Twenty Two</a>.
            </p>
          </div>
        </div>
      </div>
      <Dialog open={remunerationOpen} onOpenChange={setRemunerationOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-2 sm:p-4">
          <VisuallyHidden>
            <DialogTitle>Our Remuneration</DialogTitle>
          </VisuallyHidden>
          <img
            src="/remuneration.jpg"
            alt="Our Remuneration - Page 1"
            className="w-full h-auto"
          />
          <img
            src="/remuneration-2.jpg"
            alt="Our Remuneration - Page 2"
            className="w-full h-auto"
          />
          <img
            src="/remuneration-3.jpg"
            alt="Our Remuneration - Page 3"
            className="w-full h-auto"
          />
          <img
            src="/remuneration-4.jpg"
            alt="Our Remuneration - Page 4"
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </footer>;
};
export default Footer;