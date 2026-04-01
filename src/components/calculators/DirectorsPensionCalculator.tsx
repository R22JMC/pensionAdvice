import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitLead } from "@/lib/submitLead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Info, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import logo from "@/assets/logo.png";

const callTimeOptions = [
  "Morning: 9am – 11am",
  "Midday: 11am – 1pm",
  "Afternoon: 1pm – 3pm",
  "Late Afternoon: 3pm – 5pm",
  "Any time",
];

const DirectorsPensionCalculator = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: undefined as Date | undefined,
    gender: "",
    maritalStatus: "",
    salary: "",
    startDate: undefined as Date | undefined,
    retirementAge: "",
    definedBenefitAmount: "",
    definedContributionValue: "",
    additionalNotes: "",
    bestTimeToCall: "",
  });

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit step 1 lead
    const directorNotes = [
      `DOB: ${formData.dob ? formData.dob.toLocaleDateString() : 'N/A'}`,
      `Gender: ${formData.gender}`,
      `Marital Status: ${formData.maritalStatus}`,
      `Salary: ${formData.salary}`,
      `Start Date: ${formData.startDate ? formData.startDate.toLocaleDateString() : 'N/A'}`,
      `Retirement Age: ${formData.retirementAge}`,
      `Defined Benefit: ${formData.definedBenefitAmount || 'N/A'}`,
      `Defined Contribution: ${formData.definedContributionValue || 'N/A'}`,
    ].join(' | ');

    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: 'directors_pension_step1',
      formData: { directorNotes },
    });

    setFormStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const directorNotes = [
      `DOB: ${formData.dob ? formData.dob.toLocaleDateString() : 'N/A'}`,
      `Gender: ${formData.gender}`,
      `Marital Status: ${formData.maritalStatus}`,
      `Salary: ${formData.salary}`,
      `Start Date: ${formData.startDate ? formData.startDate.toLocaleDateString() : 'N/A'}`,
      `Retirement Age: ${formData.retirementAge}`,
      `Defined Benefit: ${formData.definedBenefitAmount || 'N/A'}`,
      `Defined Contribution: ${formData.definedContributionValue || 'N/A'}`,
    ].join(' | ');

    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: 'directors_pension',
      formData: {
        directorNotes,
        additionalInfo: formData.additionalNotes,
        bestTimeToCall: formData.bestTimeToCall,
      },
      // Avoid sending the confirmation email twice (step 1 already triggers it)
      skipEmail: true,
    });

    console.log("Director's Pension Quote Request:", formData);
    navigate("/thank-you");
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.dob &&
      formData.gender &&
      formData.maritalStatus &&
      formData.salary &&
      formData.startDate &&
      formData.retirementAge
    );
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">Director's Pension - Max Fund Quote</h3>
        </div>
        <p className="text-primary-foreground/80 text-sm">
          Get a detailed max funding quote tailored to your circumstances
        </p>
      </div>

      {formStep === 1 ? (
        <form onSubmit={handleStep1Submit} className="p-6 space-y-5">
          {/* Logo and intro */}
          <div className="text-center pb-4 border-b border-border">
            <img src={logo} alt="Pension Advice" className="h-10 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              Complete the form below and we'll provide a detailed max funding quote via email.
            </p>
          </div>

          {/* Personal Details */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Personal Details</h4>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label className="text-sm font-medium">Date of Birth *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-1",
                        !formData.dob && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.dob ? format(formData.dob, "dd/MM/yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.dob}
                      onSelect={(date) => handleInputChange("dob", date)}
                      defaultMonth={new Date(1970, 0)}
                      fromYear={1940}
                      toYear={new Date().getFullYear() - 18}
                      captionLayout="dropdown-buttons"
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="gender" className="text-sm font-medium">Gender *</Label>
                <Select value={formData.gender} onValueChange={(v) => handleInputChange("gender", v)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="maritalStatus" className="text-sm font-medium">Marital Status *</Label>
                <Select value={formData.maritalStatus} onValueChange={(v) => handleInputChange("maritalStatus", v)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="separated">Separated</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div className="space-y-4 pt-4 border-t border-border">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Employment Details</h4>
            
            <div>
              <Label htmlFor="salary" className="text-sm font-medium">Annual Salary (€) *</Label>
              <Input
                id="salary"
                type="number"
                placeholder="e.g., 80000"
                value={formData.salary}
                onChange={(e) => handleInputChange("salary", e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Start Date with Employer/Ltd Company *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-1",
                        !formData.startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => handleInputChange("startDate", date)}
                      fromYear={1970}
                      toYear={new Date().getFullYear()}
                      captionLayout="dropdown-buttons"
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="retirementAge" className="text-sm font-medium">Expected Retirement Age *</Label>
                <Select value={formData.retirementAge} onValueChange={(v) => handleInputChange("retirementAge", v)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 11 }, (_, i) => 60 + i).map((age) => (
                      <SelectItem key={age} value={age.toString()}>{age}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Retained Benefits */}
          <div className="space-y-4 pt-4 border-t border-border">
            <div>
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Retained Benefits / Existing Pensions</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Please outline any existing pensions you have in place – this should be as accurate as possible.
              </p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 space-y-4">
              <div>
                <Label htmlFor="definedBenefitAmount" className="text-sm font-medium">
                  1. Defined Benefit Pension
                </Label>
                <p className="text-xs text-muted-foreground mb-2">
                  Expected annual pension receivable at NRA from previous employments in a DB scheme
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">€</span>
                  <Input
                    id="definedBenefitAmount"
                    type="number"
                    placeholder="e.g., 10000"
                    value={formData.definedBenefitAmount}
                    onChange={(e) => handleInputChange("definedBenefitAmount", e.target.value)}
                  />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">per annum</span>
                </div>
              </div>

              <div>
                <Label htmlFor="definedContributionValue" className="text-sm font-medium">
                  2. Defined Contribution Pension
                </Label>
                <p className="text-xs text-muted-foreground mb-2">
                  Include any AVC or DC pension values from previous employments
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">€</span>
                  <Input
                    id="definedContributionValue"
                    type="number"
                    placeholder="e.g., 100000"
                    value={formData.definedContributionValue}
                    onChange={(e) => handleInputChange("definedContributionValue", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            disabled={!isFormValid()}
          >
            Get My Max Funding Quote
          </Button>

          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
            <Info className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              Your information is secure and will only be used to prepare your personalised max funding quote.
            </p>
          </div>
        </form>
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
                name="additionalNotes"
                placeholder="Start typing here...tell us more..."
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                className="min-h-[100px] bg-white text-foreground border-0 resize-none"
              />

              <div className="text-center">
                <h4 className="text-lg font-bold text-white mb-2">
                  Best time to call?
                </h4>
                <Select 
                  value={formData.bestTimeToCall} 
                  onValueChange={(value) => handleInputChange("bestTimeToCall", value)}
                >
                  <SelectTrigger className="h-11 bg-white text-foreground border-0">
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
                  className="h-12 px-10 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Finish
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectorsPensionCalculator;
