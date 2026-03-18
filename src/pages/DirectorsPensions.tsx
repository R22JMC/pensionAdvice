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
import { Phone, FileText, Calculator, Settings } from "lucide-react";
import DirectorsPensionCalculator from "@/components/calculators/DirectorsPensionCalculator";

const DirectorsPensions = () => {
  const features = [
    "Are self-employed with no access to a workplace pension",
    "Run a limited company and want to make tax-efficient employer contributions",
    "Work as a contractor or consultant and need help choosing the right pension structure",
    "Have built up pensions from previous jobs and want to consolidate or review them",
    "Are starting from scratch and want a clear path to retirement saving",
  ];

  const contentBlocks = [
    {
      title: "Am I Eligible for a Director or Self-Employed Pension?",
      content: "If you're earning income outside a traditional PAYE role, chances are you qualify. You may be eligible if you:",
      bullets: [
        "Are self-employed as a sole trader, freelancer, or contractor",
        "Run your own limited company and take a salary as a director",
        "Want to transfer existing pensions from previous employment",
        "Aren't currently enrolled in a workplace pension scheme",
      ],
      note: "We'll help you confirm what you're eligible for, choose the right pension type, and make the most of available tax relief, whether contributing personally or through your business.",
    },
  ];

  const steps = [
    {
      icon: Phone,
      title: "Step 1 – Talk to Us About Your Business Setup",
      description: "Whether you're a sole trader, contractor, or director of a limited company, we'll clarify your income structure, goals, and what's already in place (if anything).",
    },
    {
      icon: FileText,
      title: "Step 2 – Choose the Right Pension Type",
      description: "Based on your earnings and business structure, we'll recommend the best option:",
      bullets: [
        "PRSA – Flexible, no minimum contributions, great for irregular income",
        "Personal Pension (PPP) – Broader fund options, typically lower fees",
        "Executive Pension Plan (EPP) – Higher contribution limits for directors",
        "Self-Administered Pension (SAPS) – Full control for experienced investors",
        "Personal Retirement Bond (PRB) – Ideal for consolidating older pensions",
      ],
    },
    {
      icon: Calculator,
      title: "Step 3 – Plan Your Contributions and Tax Relief",
      description: "We calculate how much you or your company can contribute and how to structure it:",
      bullets: [
        "Maximise personal or employer tax relief",
        "Turn company profits into personal pension savings",
        "Run funding projections to help you plan long term",
      ],
    },
    {
      icon: Settings,
      title: "Step 4 – Set Up and Manage Your Pension",
      description: "We handle the paperwork, setup, and transfers so you can focus on your business. After setup, you'll get:",
      bullets: [
        "Transparent view of charges and fund allocation",
        "Access to risk-aligned investment options",
        "Ongoing advice to adjust contributions or review fund performance",
      ],
    },
  ];

  const benefits = [
    {
      title: "Avoid Relying on the State Pension Alone",
      description: "The State pension is under €300 per week, and only if you qualify. Building your own pension puts you in control of your financial future.",
    },
    {
      title: "Use Generous Tax Reliefs Before You Miss Them",
      description: "Business owners can make far higher pension contributions than employees and offset them against tax, but these advantages are often underused or poorly structured.",
    },
    {
      title: "Turn Profits Into Personal Wealth",
      description: "Company directors can move money from the business into a pension, reducing corporation tax and building long-term personal savings, all within Revenue limits.",
    },
    {
      title: "Avoid Mistakes That Limit Your Options Later",
      description: "From choosing the wrong product to missing contribution caps, early missteps can reduce your flexibility at retirement. We help you get it right from the start.",
    },
    {
      title: "Plan With Confidence, Even as Income Fluctuates",
      description: "Whether your earnings are irregular or your company's growing fast, we'll help you adapt your pension strategy and stay aligned with your goals.",
    },
  ];

  const faqs = [
    {
      question: "Do I qualify for a pension if I'm self-employed or a company director?",
      answer: "Yes. If you're earning income as a sole trader, freelancer, contractor, or company director, you're eligible to set up a personal or executive pension. We'll help you choose the most tax-efficient structure for your situation.",
    },
    {
      question: "What's the best pension option for company directors?",
      answer: "For directors of limited companies, an Executive Pension Plan (EPP) often provides the greatest flexibility and contribution limits. It allows your company to make large, tax-deductible contributions on your behalf.",
    },
    {
      question: "Can I make both personal and employer contributions?",
      answer: "Yes. Personal contributions qualify for income tax relief, while company contributions reduce your business's corporation tax. We'll help you plan both for maximum benefit.",
    },
    {
      question: "What's the difference between a PRSA and a Personal Pension?",
      answer: "PRSAs are flexible and have capped charges, making them ideal for smaller or irregular contributions. Personal Pensions may offer broader fund choices and lower fees for higher contributions. We'll guide you on which suits your needs.",
    },
    {
      question: "Can I transfer old pensions into a new one?",
      answer: "Absolutely. You can consolidate older pensions into a new structure like a PRB or PRSA for easier management and potentially lower costs. We'll ensure no valuable benefits are lost in the process.",
    },
    {
      question: "How much tax relief can I get on my pension contributions?",
      answer: "You can get income tax relief at your marginal rate (20% or 40%) on personal contributions, subject to age-based limits. Directors can also benefit from company-funded pensions that don't affect these personal limits.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pensions for Directors & the Self-Employed | Tax-Smart Advice</title>
        <meta name="description" content="We help directors and self-employed professionals set up tax-efficient pensions. Get expert advice on PRSAs, EPPs, and personal retirement plans." />
        <link rel="canonical" href="https://www.pensionadvice.ie/categories/pensions-for-directors-and-self-employed" />
      </Helmet>
      
      <Header />

      <ServicePageHero
        title="Personalised Pension Strategies for Directors and the Self-Employed"
        subtitle="Running a business means juggling a lot, but your pension shouldn't be the thing that gets neglected. Whether you're self-employed or a company director, we help you set up the right pension structure to reduce tax, grow your wealth, and plan confidently for retirement."
        formType="directors"
      />

      <ServiceFeatureList
        title="Who This Director/Self-Employed Pension Service Is For"
        description="This service is ideal for individuals who:"
        features={features}
      />

      <div className="text-center py-4 bg-accent/5">
        <p className="text-muted-foreground">We also support business owners who already have pensions in place but want to optimise for charges, fund choice, or drawdown flexibility.</p>
        <p className="text-foreground font-medium mt-2">Not sure which option fits you? Start with a free consultation.</p>
      </div>

      <ServiceContentSection blocks={contentBlocks} />

      <ServiceVideos
        category="directors"
        title="Watch: Pension Reviews for Directors"
        subtitle="Learn why reviewing your pension matters as a director or self-employed professional."
      />

      {/* Calculator Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">Free Tool</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Director's Pension Calculator</h2>
            <p className="text-muted-foreground">Calculate your maximum tax-efficient contributions</p>
          </div>
          <div className="max-w-xl mx-auto">
            <DirectorsPensionCalculator />
          </div>
        </div>
      </section>

      <ServiceSteps
        title="How We Provide Tailored Pension Setup for Business Owners and the Self-Employed"
        subtitle="Choosing and setting up a pension as a business owner or sole trader can feel overwhelming, but it doesn't have to be. We simplify the process, help you get the tax relief you deserve, and build a plan that grows with you. Here's how it works:"
        steps={steps}
      />

      <ServiceBenefits
        title="Why Pensions for the Self-Employed and Directors Are Worth Getting Right"
        introduction="When you work for yourself or run a company, your pension is your most powerful, tax-efficient way to build wealth and protect your future. Here's why it pays to get expert advice from the start:"
        benefits={benefits}
      />

      <div className="text-center py-8 bg-primary/5">
        <p className="text-lg font-semibold text-foreground">Let's make your pension work harder — Book a call</p>
      </div>

      <ServiceCTA
        title="Talk to Our Team About Directors and Self-Employed Pensions"
        subtitle="Whether you're starting from scratch or reviewing what you already have, we'll help you build a pension strategy that works."
        phone="01 912 5030"
      />

      <ServiceFAQ
        title="Frequently Asked Questions About Pensions for Directors and the Self-Employed"
        faqs={faqs}
      />

      <ServiceReviews category="directors" />

      <AdvisorContactCard />

      <CorePriorities />

      <Footer />
    </div>
  );
};

export default DirectorsPensions;
