import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, CheckCircle, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PartnerLogos from "./PartnerLogos";
import ReviewsSection from "./ReviewsSection";
import logo from "@/assets/logo.png";
import { submitLead } from "@/lib/submitLead";
import { toast } from "sonner";

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  highlights?: string[];
  formType?: "transfer" | "directors" | "reviews" | "ukTransfer" | "earlyRetirement" | "redundancy";
}

const redundancyTimelineOptions = [
  "Already made redundant",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months away",
  "Just exploring options",
];

const pensionUnlockValueOptions = [
  "Under €25,000",
  "€25,000 - €50,000",
  "€50,000 - €100,000",
  "€100,000 - €200,000",
  "€200,000 - €500,000",
  "€500,000 - €750,000",
  "€750,000 - €1,000,000",
  "€1,000,000+",
];

const ukLeftOptions = [
  "Less than 5 years ago",
  "5-10 years ago",
  "10-15 years ago",
  "15-20 years ago",
  "More than 20 years ago",
];

const ukPensionValueOptions = [
  "Under £25,000",
  "£25,000 - £50,000",
  "£50,000 - £100,000",
  "£100,000 - £200,000",
  "£200,000 - £500,000",
  "£500,000 - £750,000",
  "£750,000 - £1,000,000",
  "£1,000,000+",
];

const pensionValueOptions = [
  "Under €25,000",
  "€25,000 - €50,000",
  "€50,000 - €100,000",
  "€100,000 - €200,000",
  "€200,000 - €500,000",
  "€500,000 - €750,000",
  "€750,000 - €1,000,000",
  "€1,000,000+",
];

const pensionTypeOptions = [
  "Occupational Pension",
  "Personal Pension",
  "PRSA",
  "Executive Pension/Master Trust",
  "Self-Administered Pension",
  "Multiple Pensions",
  "Not Sure",
];

const adviceOptions = [
  "Starting a Pension",
  "Executive Pension/Master Trust",
  "Self-Administered Pension",
  "PRSA Options",
  "Tax Relief Maximisation",
  "Retirement Planning",
  "Other",
];

const reviewOptions = [
  "Pension Performance",
  "Fees & Charges",
  "Retirement Income Projection",
  "Fund Options",
  "Consolidation Options",
  "Overall Pension Health Check",
];

const callTimeOptions = [
  "Morning: 9am – 11am",
  "Midday: 11am – 1pm",
  "Afternoon: 1pm – 3pm",
  "Late Afternoon: 3pm – 5pm",
  "Any time",
];

const ServicePageHero = ({ title, subtitle, highlights = ["Expert Guidance", "Informed Decisions", "Speak with Qualified Advisors"], formType = "transfer" }: ServicePageHeroProps) => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    pensionValue: "",
    pensionType: "",
    adviceType: "",
    reviewType: "",
    ukLeftDate: "",
    redundancyTimeline: "",
    additionalInfo: "",
    bestTimeToCall: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      return;
    }

    // Submit lead on step 1 as well
    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: `service_${formType}_step1`,
      formData: {
        age: formData.age,
        pensionValue: formData.pensionValue,
        pensionType: formData.pensionType,
        adviceType: formData.adviceType,
        reviewType: formData.reviewType,
        ukLeftDate: formData.ukLeftDate,
        redundancyTimeline: formData.redundancyTimeline,
      },
    });

    setFormStep(2);
    // Scroll to top of form so step 2 is visible
    setTimeout(() => {
      document.getElementById("service-form")?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 50);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: `service_${formType}`,
      formData: {
        age: formData.age,
        pensionValue: formData.pensionValue,
        pensionType: formData.pensionType,
        adviceType: formData.adviceType,
        reviewType: formData.reviewType,
        ukLeftDate: formData.ukLeftDate,
        redundancyTimeline: formData.redundancyTimeline,
        additionalInfo: formData.additionalInfo,
        bestTimeToCall: formData.bestTimeToCall,
      },
    });

    setIsSubmitting(false);

    if (!result.success) {
      toast.error("There was an issue submitting your enquiry. Please try again.");
      console.error("Lead submission error:", result.error);
      return;
    }

    console.log("Form submitted:", formData);
    navigate("/thank-you");
  };

  const getFormDescription = () => {
    if (formType === "directors") {
      return "Get expert advice on pensions for directors and the self-employed. Leave your details and a qualified advisor will be in touch.";
    }
    if (formType === "reviews") {
      return "Get a comprehensive review of your pension to ensure it's performing well. Leave your details and a qualified advisor will be in touch.";
    }
    if (formType === "ukTransfer") {
      return "Transfer your UK pension to Ireland with expert guidance. Leave your details and a qualified advisor will be in touch.";
    }
    if (formType === "earlyRetirement") {
      return "Explore your options for unlocking your pension early. Leave your details and a qualified advisor will be in touch.";
    }
    if (formType === "redundancy") {
      return "Get expert advice on your pension options after redundancy. Leave your details and a qualified advisor will be in touch.";
    }
    return "Transfer or consolidate your pension today – your retirement, your way. Leave your details and a qualified advisor will be in touch.";
  };

  return (
    <>
    <section className="relative min-h-[90svh] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(215,70%,18%)] to-[hsl(220,80%,12%)]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10 py-12 md:py-20 px-4 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground order-2 lg:order-1">
            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((highlight, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-green text-white text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-white" />
                  {highlight}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase() === 'protect' || word.toLowerCase() === 'smarter' ? 'text-accent' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
              {subtitle}
            </p>


            {/* Partner Logos */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-primary-foreground/50 mb-4">Trusted by leading pension providers</p>
              <PartnerLogos variant="light" />
            </div>
          </div>

          {/* Right - Form Card */}
          <div id="service-form" className="order-1 lg:order-2 scroll-mt-8 min-w-0">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-primary/30 rounded-3xl blur-2xl" />

              <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
                {formStep === 1 ? (
                  /* Step 1: Main form */
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col items-center mb-4">
                      <img src={logo} alt="Pension Advice" className="h-12 w-auto mb-2" />
                      <h3 className="text-2xl font-bold text-primary">Start your Pension Journey</h3>
                    </div>
                    <p className="text-muted-foreground text-center text-sm mb-6">
                      {getFormDescription()}
                    </p>

                    <form onSubmit={handleStep1Submit} className="space-y-4">
                      <Input
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-secondary/50 border-border/50 pl-4 focus:border-accent focus:ring-accent"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent"
                      />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone*"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent"
                      />
                      
                      {formType === "transfer" && (
                        <>
                          <Input
                            name="age"
                            placeholder="Age*"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent"
                          />
                          <Select 
                            value={formData.pensionValue} 
                            onValueChange={(value) => handleSelectChange("pensionValue", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Value of Your Existing Pension" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {pensionValueOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select 
                            value={formData.pensionType} 
                            onValueChange={(value) => handleSelectChange("pensionType", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Type of Pension" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {pensionTypeOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </>
                      )}

                      {formType === "directors" && (
                        <>
                          <Select 
                            value={formData.pensionValue} 
                            onValueChange={(value) => handleSelectChange("pensionValue", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Existing Pension Assets" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {pensionValueOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select 
                            value={formData.adviceType} 
                            onValueChange={(value) => handleSelectChange("adviceType", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="I would like advice on..." />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {adviceOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </>
                      )}

                      {formType === "reviews" && (
                        <>
                          <Input
                            name="age"
                            placeholder="Age*"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent"
                          />
                          <Select 
                            value={formData.reviewType} 
                            onValueChange={(value) => handleSelectChange("reviewType", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="What is it you would like to review?" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {reviewOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select 
                            value={formData.pensionType} 
                            onValueChange={(value) => handleSelectChange("pensionType", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Type of Pension" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {pensionTypeOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select 
                            value={formData.pensionValue} 
                            onValueChange={(value) => handleSelectChange("pensionValue", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Value of Your Existing Pension" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {pensionValueOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </>
                      )}

                      {formType === "ukTransfer" && (
                        <>
                          <Input
                            name="age"
                            placeholder="Age*"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent"
                          />
                          <Select 
                            value={formData.pensionValue} 
                            onValueChange={(value) => handleSelectChange("pensionValue", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Value of Your UK Pension (£)" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {ukPensionValueOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select 
                            value={formData.pensionType} 
                            onValueChange={(value) => handleSelectChange("pensionType", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Type of Pension" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {pensionTypeOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select 
                            value={formData.ukLeftDate} 
                            onValueChange={(value) => handleSelectChange("ukLeftDate", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="When Did You Leave the UK?" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {ukLeftOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </>
                      )}

                      {formType === "earlyRetirement" && (
                        <>
                          <Input
                            name="age"
                            placeholder="Age*"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent"
                          />
                          <Select 
                            value={formData.pensionValue} 
                            onValueChange={(value) => handleSelectChange("pensionValue", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Value of Pension Fund to Unlock" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {pensionUnlockValueOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </>
                      )}

                      {formType === "redundancy" && (
                        <>
                          <Input
                            name="age"
                            placeholder="Age*"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent"
                          />
                          <Select 
                            value={formData.redundancyTimeline} 
                            onValueChange={(value) => handleSelectChange("redundancyTimeline", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="When are you being made redundant?" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {redundancyTimelineOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select 
                            value={formData.pensionValue} 
                            onValueChange={(value) => handleSelectChange("pensionValue", value)}
                          >
                            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent">
                              <SelectValue placeholder="Estimated Value of Pension" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {pensionValueOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </>
                      )}

                      <div className="flex items-start gap-2">
                        <Checkbox 
                          id="privacy" 
                          checked={privacyAccepted}
                          onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                          className="mt-1"
                        />
                        <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                          I have read and understand the{" "}
                          <a href="/privacy-statement" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                            Privacy Statement
                          </a>
                          .<span className="text-destructive">*</span>
                        </label>
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          type="submit"
                          disabled={!privacyAccepted}
                          className="h-12 sm:h-14 px-6 sm:px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base sm:text-lg shadow-lg shadow-accent/25 group disabled:cursor-not-allowed disabled:opacity-100 animate-[pulse-scale_2s_ease-in-out_infinite]"
                        >
                          Get Help
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <div className="flex items-center gap-2 text-trust-green">
                          <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                          <div className="text-xs leading-tight">
                            <span className="font-bold">SECURE</span>
                            <br />
                            <span>SSL ENCRYPTION</span>
                          </div>
                        </div>
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
                            <SelectTrigger className="h-12 bg-white text-foreground border-0">
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
                            disabled={isSubmitting}
                            className="h-14 px-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg"
                          >
                            {isSubmitting ? "Submitting..." : "Finish"}
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
    
    <ReviewsSection />
    </>
  );
};

export default ServicePageHero;
