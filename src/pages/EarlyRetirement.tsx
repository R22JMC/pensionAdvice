import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceFeatureList from "@/components/ServiceFeatureList";
import ServiceContentSection from "@/components/ServiceContentSection";
import ServiceSteps from "@/components/ServiceSteps";
import ServiceBenefits from "@/components/ServiceBenefits";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceFAQ from "@/components/ServiceFAQ";
import AdvisorContactCard from "@/components/AdvisorContactCard";
import CorePriorities from "@/components/CorePriorities";
import ServiceVideos from "@/components/ServiceVideos";
import ServiceReviews from "@/components/ServiceReviews";
import { Phone, FileSearch, FileText, CheckCircle } from "lucide-react";
import EarlyRetirementCalculator from "@/components/calculators/EarlyRetirementCalculator";

const EarlyRetirement = () => {
  const features = [
    "Are no longer employed by the company that set up your pension",
    "Are aged 50 or over (or approaching it)",
    "Want to explore retirement before the standard age",
    "Would like to access part of your fund as tax-free cash",
    "Prefer flexible drawdown options rather than a fixed annuity",
    "Need help deciding if moving or unlocking your pension makes sense",
  ];

  const contentBlocks = [
    {
      title: "What Is Early Retirement and Why It Matters",
      content: "Early retirement means accessing your pension benefits before the usual retirement age, typically from age 50 for occupational schemes and from age 60 for personal pensions or PRSAs. If you've left an employer, you may now have the option to:",
      bullets: [
        "Take up to 25% of your pension fund as tax-free cash (within Revenue limits)",
        "Transfer the remainder to a flexible income arrangement (such as an ARF)",
        "Control how your fund is invested and drawn down",
        "Preserve pension wealth for your family",
      ],
      note: "This gives you more freedom over how and when to use the savings you've worked hard for.",
    },
    {
      title: "Are You Eligible to Unlock Your Pension Early?",
      content: "Eligibility depends on your age, the type of pension, and whether you're still employed by the company that set it up. You may qualify if:",
      bullets: [
        "You've left a company and have a pension from your time there",
        "You're at least age 50 (or will be soon)",
        "Your previous scheme rules allow early access",
        "You hold a PRSA or personal pension and are approaching age 60",
      ],
      note: "We'll clarify what applies to you, when early access makes sense, and how to avoid any pitfalls.",
    },
  ];

  const steps = [
    {
      icon: Phone,
      title: "Step 1 – Initial Call",
      description: "We listen to your goals, assess your pension type, and confirm whether early access is possible.",
    },
    {
      icon: FileSearch,
      title: "Step 2 – We Gather Scheme Info",
      description: "With your consent, we contact your provider to gather key details like transfer values, benefit options, and scheme rules.",
    },
    {
      icon: FileText,
      title: "Step 3 – You Receive Clear Guidance",
      description: "We explain the pros and cons of unlocking now versus waiting, and how options like ARF, AMRF or annuity might work for you.",
    },
    {
      icon: CheckCircle,
      title: "Step 4 – You Decide, We Handle the Setup",
      description: "If you decide to proceed, we handle the paperwork, liaise with your provider, and make sure your chosen route is implemented smoothly.",
    },
  ];

  const benefits = [
    {
      title: "Greater Flexibility",
      description: "Access funds on your terms, rather than waiting for scheme retirement age or buying a fixed annuity.",
    },
    {
      title: "More Control",
      description: "Choose how your fund is invested, adjust income over time, and make changes as life evolves.",
    },
    {
      title: "Potential for Higher Tax-Free Lump Sum",
      description: "In many cases, up to 25% of your fund can be taken tax-free.",
    },
    {
      title: "Preserve Wealth",
      description: "With flexible drawdown, your pension can pass to your spouse or estate instead of ending with an annuity.",
    },
    {
      title: "Confidence from Tailored Early Retirement Advice",
      description: "We'll explain the options, outline the trade-offs, and only recommend a transfer or early access if it makes sense for your long-term goals.",
    },
  ];

  const faqs = [
    {
      question: "Can I access my pension if I've left my job?",
      answer: "Yes. If you've left a company and have a pension from your time there, you may be able to access it from age 50, depending on your scheme's rules and Revenue guidelines.",
    },
    {
      question: "What types of pensions can be unlocked early?",
      answer: "Early access usually applies to occupational or company pensions where you're no longer employed by the sponsoring company. Personal pensions and PRSAs can generally be accessed from age 60.",
    },
    {
      question: "Do I need to transfer my pension first?",
      answer: "Not always. Some people choose to transfer to a new arrangement for flexibility, but others can access benefits directly from their existing scheme. We'll review your situation and explain the most efficient route.",
    },
    {
      question: "Is there a minimum pension size for early access or transfer?",
      answer: "There's no official minimum, but in practice, it's usually worthwhile for funds of around €10,000 or more. Smaller pensions can be less cost-effective once fees and administration are considered.",
    },
    {
      question: "How much can I take as tax-free cash?",
      answer: "You can normally take up to 25% of your pension fund tax-free, within Revenue limits. The rest can provide flexible income or be left invested for future use.",
    },
    {
      question: "What if I'm still working for the same employer?",
      answer: "You can only unlock your pension early if you've left the company that set up the scheme. If you're still employed there, you'll need to wait until the scheme's normal retirement age.",
    },
    {
      question: "Can I take early access from a PRSA or personal pension?",
      answer: "Yes, but typically not until age 60. These pensions follow different Revenue rules than occupational schemes.",
    },
    {
      question: "Will unlocking my pension affect my tax position?",
      answer: "It depends on how and when you access your funds. We'll explain your tax options clearly before you make any decisions, so there are no surprises.",
    },
    {
      question: "Can I still pay into a pension after unlocking one?",
      answer: "Yes. You can continue contributing to a separate PRSA or personal pension even if you've taken early access from a previous employer's scheme.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Unlock Your Pension Early in Ireland | Expert Early Retirement Advice</title>
        <meta name="description" content="Over 50? You may be able to unlock your pension early. Get clear, expert advice on eligibility, tax-free cash, and flexible retirement options." />
        <link rel="canonical" href="https://www.pensionadvice.ie/categories/unlock-your-pension-early" />
      </Helmet>
      
      <Header />

      <ServicePageHero
        title="Unlock Your Pension Early with Expert Advice"
        subtitle="If you're a former member of an occupational pension scheme and thinking about early retirement, you may have more options than you realise. Thanks to changes in Irish pension legislation, it's now possible to unlock your pension from age 50 and take greater control over how your retirement savings are accessed and managed. We'll guide you through the process, make sure the numbers work, and explain your options clearly so you can decide what's right for you."
        formType="earlyRetirement"
      />

      <ServiceFeatureList
        title="Who Early Retirement Services Are For"
        description="This service is designed for people who have left a company or changed jobs and still have benefits in a previous employer's pension scheme. It may be right for you if you:"
        features={features}
      />

      <div className="text-center py-4 bg-accent/5">
        <p className="text-muted-foreground">If you're asking whether you can unlock your pension early, we'll help you understand your options and avoid costly mistakes.</p>
        <p className="text-foreground font-medium mt-2">Not sure if it's time to unlock your pension? Start with a free consultation.</p>
      </div>

      <ServiceContentSection blocks={contentBlocks} />

      <ServiceVideos
        category="earlyRetirement"
        title="Watch: Can You Access Your Pension From Age 50?"
        subtitle="A short explainer on the rules around taking your pension early."
      />

      {/* Calculator Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">Free Tool</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Early Retirement Calculator</h2>
            <p className="text-muted-foreground">Estimate your tax-free lump sum and retirement income</p>
          </div>
          <div className="max-w-xl mx-auto">
            <EarlyRetirementCalculator />
          </div>
        </div>
      </section>

      <ServiceSteps
        title="How the Early Pension Access Process Works"
        subtitle="Unlocking your pension early doesn't have to be a hassle. Here's how we help:"
        steps={steps}
      />

      <ServiceBenefits
        title="Why Unlocking Your Pension Early Can Be Worth It"
        introduction="Accessing your pension earlier may give you:"
        benefits={benefits}
      />

      <ServiceCTA
        title="Talk to Our Team About Early Pension Access"
        subtitle="If you're thinking about retiring early or just want to understand your options, we're here to help. No pressure, no jargon."
        phone="01 912 5030"
      />

      <ServiceFAQ
        title="Frequently Asked Questions About Getting Your Pension Early"
        faqs={faqs}
      />

      <ServiceReviews category="earlyRetirement" />

      <AdvisorContactCard />

      <CorePriorities />

      <Footer />
    </div>
  );
};

export default EarlyRetirement;
