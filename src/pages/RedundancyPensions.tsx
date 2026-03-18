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
import ServiceReviews from "@/components/ServiceReviews";
import { Phone, FileSearch, FileText, CheckCircle } from "lucide-react";
import RedundancyCalculator from "@/components/calculators/RedundancyCalculator";

const RedundancyPensions = () => {
  const features = [
    "Are navigating present redundancy concerns",
    "Were a member of a company pension scheme (defined benefit or defined contribution)",
    "Have questions about leaving your pension where it is or moving it elsewhere",
    "Want to explore whether a Buy Out Bond or PRSA is more suitable",
    "Need help accessing benefits after redundancy (especially from age 50)",
    "Want to make sure you don't lose out on your tax-free pension lump sum",
    "Prefer expert, impartial advice before making any decisions",
  ];

  const contentBlocks = [
    {
      title: "What Happens to Your Pension After Redundancy?",
      content: "Once you're made redundant, both you and your employer stop contributing to the company pension scheme. But what happens next depends on your circumstances, including the type of scheme you were in, your length of service, and your age. In general, you'll have four main options:",
      bullets: [
        "Leave your pension in the existing scheme and access it at retirement",
        "Transfer it into a new employer's scheme (if applicable)",
        "Move it into a Buy Out Bond (also known as a Personal Retirement Bond)",
        "Transfer it to a PRSA (subject to restrictions, especially for DB members)",
      ],
      note: "Each option has pros and cons, depending on your goals. We'll walk you through them clearly so you can make the best decision for your future.",
    },
  ];

  const steps = [
    {
      icon: Phone,
      title: "Step 1: Book a Quick Call",
      description: "We start by discussing your redundancy, your pension scheme, your service history, and your financial priorities.",
    },
    {
      icon: FileSearch,
      title: "Step 2: We Gather the Details",
      description: "With your consent, we contact your pension provider to request a full breakdown of your entitlements and transfer options.",
    },
    {
      icon: FileText,
      title: "Step 3: You Get Straightforward Advice",
      description: "We explain your rights, outline the options available, and help you weigh the pros and cons of leaving your pension where it is or moving it elsewhere.",
    },
    {
      icon: CheckCircle,
      title: "Step 4: You Decide What Happens Next",
      description: "If you want to move forward, we handle the paperwork and coordinate the transfer so your pension is ready for what comes next.",
    },
  ];

  const benefits = [
    {
      title: "Avoid Leaving Benefits Behind",
      description: "Old pensions can get forgotten or mismanaged if left untouched.",
    },
    {
      title: "Maximise Your Tax-Free Lump Sum",
      description: "Coordinating your pension and redundancy tax strategies can make a big difference, especially with the €200,000 lifetime cap on tax-free lump sums.",
    },
    {
      title: "Protect Your Retirement Security",
      description: "With many defined benefit schemes underfunded, securing your value now may prevent losses later.",
    },
    {
      title: "Consolidate and Simplify",
      description: "One clear strategy, in your name, under your control, not scattered across old employers and schemes.",
    },
  ];

  const faqs = [
    {
      question: "What happens to my pension if I'm made redundant?",
      answer: "Your contributions stop, but your existing benefits remain. Depending on your service and scheme type, you may have the option to transfer or access them early.",
    },
    {
      question: "Can I take my pension early after redundancy?",
      answer: "Yes, in many cases from age 50, especially if you transfer to a Buy Out Bond. Scheme rules and structure matter.",
    },
    {
      question: "What is a Buy Out Bond and should I consider one?",
      answer: "It's a personal pension account that holds your benefits after leaving a company scheme. It gives you control, flexible access, and investment freedom.",
    },
    {
      question: "Will I lose my pension if I was only in the scheme for a short time?",
      answer: "Not necessarily. If under two years' service, you may still be entitled to a refund of your contributions, or more, depending on scheme rules.",
    },
    {
      question: "Can I combine old pensions into one place?",
      answer: "Yes, a Buy Out Bond or PRSA can consolidate previous schemes, making management easier and improving access.",
    },
    {
      question: "What if my defined benefit scheme is underfunded?",
      answer: "You may receive a reduced transfer value, and early access could be restricted. It's critical to understand the implications before acting.",
    },
    {
      question: "How do I know which option is best for me?",
      answer: "We offer personalised advice based on your employment history, pension type, age, and retirement goals. Our aim is to help you make a confident, informed decision.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Redundancy and Pensions in Ireland | Your Rights & Options</title>
        <meta name="description" content="Made redundant in Ireland? Understand what happens to your pension, how to protect your benefits, and whether a Buy Out Bond or transfer makes sense. Expert advice with no obligation." />
        <link rel="canonical" href="https://www.pensionadvice.ie/categories/pensions-and-redundancy" />
      </Helmet>
      
      <Header />

      <ServicePageHero
        title="Redundancy and Your Pension — Know Your Rights, Maximise Your Options"
        subtitle="If you've been made redundant, your pension entitlements may be one of your biggest financial concerns. Whether you've spent years building up a company pension or only joined recently, it's important to understand your options and make decisions that protect your long-term security. We'll guide you through your rights, help you access benefits where possible, and structure your pension for maximum flexibility and value."
        formType="redundancy"
      />

      <ServiceFeatureList
        title="Who This Pension & Redundancy Support Is For"
        description="This service is ideal for anyone in Ireland who is going through the redundancy process now or has been made redundant previously and wants to understand what happens to their workplace pension. It's especially useful if you:"
        features={features}
      />

      <div className="text-center py-4 bg-accent/5">
        <p className="text-muted-foreground">Made redundant recently or reviewing your pension options after a career change? We'll help you take control of your retirement savings and avoid costly mistakes.</p>
        <p className="text-foreground font-medium mt-2">Not sure what to do if you've been made redundant? Start with a free consultation.</p>
      </div>

      <ServiceContentSection blocks={contentBlocks} />

      {/* Calculator Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">Free Tool</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Redundancy & Pension Calculator</h2>
            <p className="text-muted-foreground">Estimate your redundancy entitlements and pension options</p>
          </div>
          <div className="max-w-xl mx-auto">
            <RedundancyCalculator />
          </div>
        </div>
      </section>

      <ServiceSteps
        title="How We Help You Manage Your Pension After Redundancy"
        subtitle="We make it simple to understand your pension position and take action if it makes sense for you."
        steps={steps}
      />

      <ServiceBenefits
        title="Why Understanding Pension After Redundancy Is So Important"
        introduction="Redundancy doesn't mean starting over. It can be a chance to take real ownership of your financial future. A pension review can help you:"
        benefits={benefits}
      />

      <div className="text-center py-8 bg-primary/5">
        <p className="text-lg font-semibold text-foreground">Let's make the most of your pension after redundancy — Book a call</p>
      </div>

      <ServiceCTA
        title="Talk to Our Team About Redundancy Pension Options"
        subtitle="If you've recently been made redundant or expect to be, your pension should be one of your first priorities. We'll help you understand your entitlements, avoid unnecessary taxes, and create a plan that gives you control over your retirement savings."
        phone="01 912 5030"
      />

      <ServiceFAQ
        title="Frequently Asked Questions About Redundancy and Pensions"
        faqs={faqs}
      />

      <ServiceReviews category="redundancy" />

      <AdvisorContactCard />

      <CorePriorities />

      <Footer />
    </div>
  );
};

export default RedundancyPensions;
