import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lock, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { submitLead } from "@/lib/submitLead";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CalculatorLeadFormProps {
  calculatorType: string;
  resultSummary: string;
  onSubmit?: (data: LeadFormData) => void;
  hideHeader?: boolean;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  calculatorType: string;
  additionalInfo?: string;
  bestTimeToCall?: string;
}

const callTimeOptions = [
  "Morning: 9am – 11am",
  "Midday: 11am – 1pm",
  "Afternoon: 1pm – 3pm",
  "Late Afternoon: 3pm – 5pm",
  "Any time",
];

const CalculatorLeadForm = ({ calculatorType, resultSummary, onSubmit, hideHeader = false }: CalculatorLeadFormProps) => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    calculatorType,
    additionalInfo: "",
    bestTimeToCall: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit lead on step 1
    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: `calculator_${calculatorType}_step1`,
      formData: { resultSummary },
    });

    setFormStep(2);
    // Scroll form into view so step 2 is immediately visible
    setTimeout(() => {
      (e.target as HTMLElement)?.closest('[class]')?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 50);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: `calculator_${calculatorType}`,
      formData: {
        resultSummary,
        additionalInfo: formData.additionalInfo,
        bestTimeToCall: formData.bestTimeToCall,
      },
      skipEmail: true,
    });

    setIsSubmitting(false);

    if (!result.success) {
      toast.error("There was an issue submitting your enquiry. Please try again.");
      console.error("Lead submission error:", result.error);
      return;
    }

    console.log("Lead form submitted:", formData);
    onSubmit?.(formData);
    navigate("/thank-you");
  };

  return (
    <div className={hideHeader ? "" : "bg-card rounded-xl border border-border overflow-hidden"}>
      {formStep === 1 ? (
        /* Step 1: Main form */
        <div className={hideHeader ? "" : "p-6"}>
          {!hideHeader && (
            <div className="flex flex-col items-center mb-4">
              <img src={logo} alt="Pension Advice" className="h-12 w-auto mb-2" />
              <h3 className="text-xl font-bold text-primary">Start your Pension Journey</h3>
            </div>
          )}
          <p className="text-sm text-muted-foreground mb-4">
            Based on your calculation: <span className="font-medium text-foreground">{resultSummary}</span>
          </p>
        
          <form onSubmit={handleStep1Submit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 rounded-lg"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 rounded-lg"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-12 rounded-lg"
              />
            </div>
            
            <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg">
              Speak with an Advisor
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="w-3 h-3" />
              <span>Your information is secure and confidential</span>
            </div>
          </form>
        </div>
      ) : (
        /* Step 2: Thank you + additional info */
        <div>
          {/* Thank you header */}
          <div className="bg-accent px-6 py-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Thank you for your enquiry
            </h3>
            <p className="text-white/90 text-sm">
              One of our expert pension advisors will be in touch
            </p>
          </div>
          
          {/* Chevron divider */}
          <div className="flex justify-center -mt-4">
            <div className="w-8 h-8 rounded-full bg-accent border-4 border-primary flex items-center justify-center">
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Additional info form */}
          <div className="bg-primary p-6">
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white mb-1">
                  Tell us a bit more...
                </h4>
                <p className="text-primary-foreground/80 text-xs">
                  so we can assign you the most suitable advisor
                </p>
              </div>

              <Textarea
                name="additionalInfo"
                placeholder="Start typing here...tell us more..."
                value={formData.additionalInfo}
                onChange={handleChange}
                className="min-h-[100px] bg-white text-foreground border-0 resize-none"
              />

              <div className="text-center">
                <h4 className="text-lg font-bold text-white mb-2">
                  Best time to call?
                </h4>
                <Select 
                  value={formData.bestTimeToCall} 
                  onValueChange={(value) => handleSelectChange("bestTimeToCall", value)}
                >
                  <SelectTrigger type="button" className="h-11 bg-white text-foreground border-0">
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
                  className="h-12 px-10 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Finish"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorLeadForm;
