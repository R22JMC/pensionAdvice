import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CorePriorities from "@/components/CorePriorities";
import officeImage from "@/assets/office/team-working.jpg";
import logo from "@/assets/logo.png";
import { submitLead } from "@/lib/submitLead";

const enquiryTypes = [
  "Pension Review",
  "Pension Transfer",
  "UK Pension Transfer",
  "Directors Pension",
  "Early Retirement",
  "Redundancy",
  "General Enquiry",
];

const pensionValueRanges = [
  "Under €25,000",
  "€25,000 - €50,000",
  "€50,000 - €100,000",
  "€100,000 - €200,000",
  "€200,000 - €500,000",
  "€500,000 - €750,000",
  "€750,000 - €1,000,000",
  "€1,000,000+",
  "I'm not sure",
];

const callTimeOptions = [
  "Morning: 9am – 11am",
  "Midday: 11am – 1pm",
  "Afternoon: 1pm – 3pm",
  "Late Afternoon: 3pm – 5pm",
  "Any time",
];

const ContactUs = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    enquiryType: "",
    pensionValue: "",
    additionalInfo: "",
    bestTimeToCall: "",
  });

  // Load Reviews.io widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.reviews.io/rich-snippet-reviews-widgets/dist.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).richSnippetReviewsWidgets) {
        (window as any).richSnippetReviewsWidgets("carousel-inline-widget-contact", {
          store: "pension-advice-ie",
          primaryClr: "#F47B20",
          neutralClr: "#1B365D",
          reviewTextClr: "#333333",
          widgetName: "carousel-inline-i498",
          layout: "fullWidth",
          numReviews: 40,
          contentMode: "company;third-party",
          hideDates: false,
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formRef = useRef<HTMLDivElement>(null);

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: `contact_${formData.enquiryType || "general"}_step1`,
      formData: {
        age: formData.age,
        enquiryType: formData.enquiryType,
        pensionValue: formData.pensionValue,
      },
    });

    setFormStep(2);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 50);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: `contact_${formData.enquiryType || "general"}`,
      formData: {
        age: formData.age,
        enquiryType: formData.enquiryType,
        pensionValue: formData.pensionValue,
        additionalInfo: formData.additionalInfo,
        bestTimeToCall: formData.bestTimeToCall,
      },
    });

    console.log("Contact form submitted:", formData);
    navigate("/thank-you");
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Telephone",
      value: "01 912 5030",
      href: "tel:019125030",
      isLink: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@pension-advice.ie",
      href: "mailto:hello@pension-advice.ie",
      isLink: true,
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Suite 2, Block 8, Dunshaughlin Business Park, Dunshaughlin, A85 EE98",
      href: null,
      isLink: false,
    },
    {
      icon: Clock,
      label: "Opening Hours",
      value: "Monday – Thursday 9am – 5:30pm, Friday by Appointment",
      href: null,
      isLink: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Ireland's Leading Authority on Pension Advice</title>
        <meta name="description" content="Contact us today to speak with one of our highly qualified pension experts. Pension Advice is Ireland's leading authority on Pension Advice. We advise on all aspects of Pensions and Retirement Planning." />
      </Helmet>
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img 
          src={officeImage} 
          alt="Contact Pension Advice" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left Column - Contact Info & Reviews */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Contact Pension Advice..
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Contact us today to speak with one of our highly qualified pension experts.
              </p>
              
              {/* Contact Details Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {contactDetails.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-5 bg-section-light rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground mb-1 font-medium">{item.label}</p>
                      {item.isLink && item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-accent transition-colors font-semibold break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div ref={formRef} className="sticky top-24">
                {/* Logo Header - Above Blue Box */}
                {formStep === 1 && (
                  <div className="flex flex-col items-center mb-4 bg-card rounded-t-2xl p-6 border border-b-0 border-border shadow-lg">
                    <img src={logo} alt="Pension Advice" className="h-12 w-auto mb-2" />
                    <h2 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">Start your Pension Journey</h2>
                  </div>
                )}
                
                <div className={`bg-primary ${formStep === 1 ? 'rounded-b-2xl' : 'rounded-2xl'} overflow-hidden shadow-2xl`}>
                {formStep === 1 ? (
                  /* Step 1: Main form */
                  <div className="p-8 md:p-10">
                    
                    <form onSubmit={handleStep1Submit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          maxLength={100}
                          className="bg-white border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-lg shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          maxLength={255}
                          className="bg-white border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-lg shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Phone*"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          maxLength={20}
                          className="bg-white border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-lg shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Age
                        </label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          placeholder="Age*"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          min={18}
                          max={120}
                          className="bg-white border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-lg shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="enquiryType" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Type of Enquiry
                        </label>
                        <Select value={formData.enquiryType} onValueChange={(value) => handleSelectChange("enquiryType", value)}>
                          <SelectTrigger className="bg-white border-0 text-foreground h-12 rounded-lg shadow-sm">
                            <SelectValue placeholder="Select enquiry type*" />
                          </SelectTrigger>
                          <SelectContent>
                            {enquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="pensionValue" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                          Value of Pension Assets
                        </label>
                        <Select value={formData.pensionValue} onValueChange={(value) => handleSelectChange("pensionValue", value)}>
                          <SelectTrigger className="bg-white border-0 text-foreground h-12 rounded-lg shadow-sm">
                            <SelectValue placeholder="Select value range*" />
                          </SelectTrigger>
                          <SelectContent>
                            {pensionValueRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-accent" />
                          <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                            Secure Submission
                          </span>
                        </div>
                        
                        <Button
                          type="submit"
                          size="lg"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 shadow-lg hover:shadow-xl transition-all"
                        >
                          Next
                        </Button>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Step 2: Thank you + additional info */
                  <div>
                    {/* Thank you header */}
                    <div className="bg-accent px-6 py-8 text-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Thank you for your enquiry
                      </h3>
                      <p className="text-white/90">
                        One of our expert pension advisors will be in touch
                      </p>
                    </div>
                    
                    {/* Chevron divider */}
                    <div className="flex justify-center -mt-4">
                      <div className="w-10 h-10 rounded-full bg-accent border-4 border-primary flex items-center justify-center">
                        <ChevronDown className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Additional info form */}
                    <div className="bg-primary p-6 md:p-8">
                      <form onSubmit={handleFinalSubmit} className="space-y-6">
                        <div className="text-center mb-6">
                          <h4 className="text-2xl font-bold text-white mb-2">
                            Tell us a bit more...
                          </h4>
                          <p className="text-primary-foreground/80 text-sm">
                            so we can assign you the most suitable advisor
                          </p>
                        </div>

                        <Textarea
                          name="additionalInfo"
                          placeholder="Start typing here...tell us more..."
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          className="min-h-[120px] bg-white text-foreground border-0 resize-none"
                        />

                        <div className="text-center">
                          <h4 className="text-xl font-bold text-white mb-3">
                            Best time to call?
                          </h4>
                          <Select 
                            value={formData.bestTimeToCall} 
                            onValueChange={(value) => handleSelectChange("bestTimeToCall", value)}
                          >
                            <SelectTrigger type="button" className="h-12 bg-white text-foreground border-0">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {callTimeOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex justify-center pt-2">
                          <Button
                            type="submit"
                            className="h-14 px-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg"
                          >
                            Finish
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us - Map Section */}
      <section className="py-16 bg-section-light">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Find Us</h2>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.4287283767746!2d-6.5410156!3d53.5139167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48674f1c2d4b3b9d%3A0x5c8f9a8b8b8b8b8b!2sDunshaughlin%20Business%20Park!5e0!3m2!1sen!2sie!4v1704067200000!5m2!1sen!2sie"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pension Advice Location"
              className="w-full"
            />
            
            {/* Get Directions Button Overlay */}
            <div className="absolute top-4 right-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Suite+2+Block+8+Dunshaughlin+Business+Park+Dunshaughlin+A85+EE98"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-5 py-3 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </span>
                <span className="text-xs opacity-80 font-normal">on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Core Principles Section */}
      <CorePriorities />

      <Footer />
    </div>
  );
};

export default ContactUs;
