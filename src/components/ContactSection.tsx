import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo.png";
import { submitLead } from "@/lib/submitLead";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const callTimeOptions = [
  "Morning: 9am – 11am",
  "Midday: 11am – 1pm",
  "Afternoon: 1pm – 3pm",
  "Late Afternoon: 3pm – 5pm",
  "Any time",
];

const ContactSection = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
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

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit lead on step 1
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
    // Scroll form into view so step 2 is immediately visible
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
      skipEmail: true,
    });

    console.log("Form submitted:", formData);
    navigate("/thank-you");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-footer text-primary-foreground section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Start With a Consultation
            </h2>
            <p className="text-lg mb-2">
              Get clear advice on your pension options and next steps.
            </p>
            <p className="text-primary-foreground/80 mb-6">
              Fill in your details and we will call you back to discuss your situation.
            </p>
            <p className="text-primary-foreground/80 mb-2">Or give us a call on</p>
            <a href="tel:019125030" className="text-xl font-semibold text-accent hover:underline mb-6 block">
              01 912 5030
            </a>
            <p className="text-primary-foreground/80 mb-6">
              Our team is here to help you take control of your retirement planning.
            </p>

          </div>

          {/* Contact Form */}
          <div ref={formRef} className="bg-card text-card-foreground rounded-2xl shadow-xl overflow-hidden">
            {formStep === 1 ? (
              /* Step 1: Main form */
              <form onSubmit={handleStep1Submit} className="p-6 md:p-8 space-y-5">
                <div className="flex flex-col items-center mb-2">
                  <img src={logo} alt="Pension Advice" className="h-12 w-auto mb-2" />
                  <h3 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">Start your Pension Journey</h3>
                </div>
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</Label>
                  <Input id="name" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required className="h-12 rounded-lg" />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Email*" value={formData.email} onChange={handleChange} required className="h-12 rounded-lg" />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Phone*" value={formData.phone} onChange={handleChange} required className="h-12 rounded-lg" />
                </div>
                <div>
                  <Label htmlFor="age" className="block text-sm font-medium text-foreground mb-2">Age</Label>
                  <Input id="age" name="age" placeholder="Age*" value={formData.age} onChange={handleChange} required className="h-12 rounded-lg" />
                </div>
                <div>
                  <Label htmlFor="enquiryType" className="block text-sm font-medium text-foreground mb-2">Type of Enquiry</Label>
                  <Select onValueChange={(value) => handleSelectChange("enquiryType", value)} value={formData.enquiryType}>
                    <SelectTrigger className="h-12 rounded-lg bg-background">
                      <SelectValue placeholder="Select enquiry type*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pension-transfer">Pension Transfer</SelectItem>
                      <SelectItem value="pension-review">Pension Review</SelectItem>
                      <SelectItem value="directors-pension">Directors Pension</SelectItem>
                      <SelectItem value="uk-pension-transfer">UK Pension Transfer</SelectItem>
                      <SelectItem value="early-retirement">Early Retirement</SelectItem>
                      <SelectItem value="redundancy">Redundancy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="pensionValue" className="block text-sm font-medium text-foreground mb-2">Value of Pension Assets</Label>
                  <Select onValueChange={(value) => handleSelectChange("pensionValue", value)} value={formData.pensionValue}>
                    <SelectTrigger className="h-12 rounded-lg bg-background">
                      <SelectValue placeholder="Select value range*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">Under €25,000</SelectItem>
                      <SelectItem value="25k-50k">€25,000 - €50,000</SelectItem>
                      <SelectItem value="50k-100k">€50,000 - €100,000</SelectItem>
                      <SelectItem value="100k-250k">€100,000 - €250,000</SelectItem>
                      <SelectItem value="250k-500k">€250,000 - €500,000</SelectItem>
                      <SelectItem value="500k-1m">€500,000 - €1,000,000</SelectItem>
                      <SelectItem value="over-1m">Over €1,000,000</SelectItem>
                      <SelectItem value="unsure">I'm not sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-trust-green">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">SECURE SUBMISSION</span>
                  </div>
                  <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                    Next
                  </Button>
                </div>
              </form>
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
    </section>
  );
};

export default ContactSection;
