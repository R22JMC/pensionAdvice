import { Phone, FileText, CheckCircle, ClipboardCheck } from "lucide-react";
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
import PensionTransferCalculator from "@/components/calculators/PensionTransferCalculator";

const whoShouldConsiderFeatures = [
  "Have multiple pension pots from previous jobs or self-employment",
  "Are unhappy with their current provider's charges, fund options, or service",
  "Are returning to Ireland from living and working in the UK",
  "Want to simplify their pension planning and maximise tax efficiency",
  "Need help comparing defined benefit vs defined contribution schemes",
  "Want to avoid mistakes that reduce their retirement income",
];

const contentBlocks = [
  {
    title: "What Is Pension Consolidation – and Why It Matters",
    content: "If you've worked in several jobs or paid into different types of pensions like PRSAs, personal pensions, or occupational schemes, it's easy to lose track. Pension consolidation means combining your various pots into one streamlined plan.",
    bullets: [
      "Lower overall fees and charges",
      "Easier to manage and track your retirement savings",
      "More consistent investment strategy",
      "Potential for earlier access or greater tax-free cash",
    ],
    note: "We assess whether combining your pensions makes financial sense and guide you through it.",
  },
  {
    title: "Should I Transfer, Consolidate, or Both?",
    content: "Not everyone needs to transfer or consolidate their pension, but for many, one or both steps can simplify finances and improve long-term outcomes. We'll help you decide between:",
    bullets: [
      "Pension transfer – moving one pot to a new provider for better performance or access",
      "Pension consolidation – merging multiple pensions into a single easy-to-manage platform",
      "Combination of both – transferring and combining into a modern, flexible scheme",
    ],
    note: "You don't need to know which is best; we'll map it out for you based on your goals.",
  },
  {
    title: "Am I Eligible to Transfer My Pension in Ireland?",
    content: "Most people can transfer their pension, but rules and advantages vary by scheme and provider. You're likely eligible if:",
    bullets: [
      "You have a personal pension, PRSA, defined benefit, or defined contribution scheme",
      "You're no longer contributing to a workplace scheme",
      "You're changing jobs or retiring early",
      "You've moved back to Ireland with a UK pension",
    ],
    note: "Exceptions: Some pensions include exit penalties, age restrictions, or guaranteed benefits that must be reviewed before transfer.",
  },
];

const processSteps = [
  {
    icon: Phone,
    title: "Step 1 – Get in Touch",
    description: "Contact us by phone, email, or chat. We'll learn about your current pensions and what you're looking to achieve.",
  },
  {
    icon: FileText,
    title: "Step 2 – We Gather Scheme Info",
    description: "We'll send you a simple Letter of Authority to collect transfer values and scheme terms from your existing providers.",
  },
  {
    icon: CheckCircle,
    title: "Step 3 – You Get a Free Transfer Report",
    description: "Our advisors review transfer values and exit fees, any locked-in benefits (e.g. bonuses, annuity rates), tax-free cash implications, access age and retirement options, and fund performance and costs. You'll get a plain-English report outlining your options, free and with no obligation.",
  },
  {
    icon: ClipboardCheck,
    title: "Step 4 – We Handle the Transfer",
    description: "If you decide to proceed, we'll complete the paperwork and manage the process until your new pension is set up.",
  },
];

const transferBenefits = [
  {
    title: "Compare Fees and Fund Performance",
    description: "We benchmark your existing pensions against the market to identify cost savings or stronger-performing options.",
  },
  {
    title: "Clarify Retirement Access and Drawdown",
    description: "Understand when and how you can access your pension, including tax-free cash options and income structures.",
  },
  {
    title: "Avoid Losing Valuable Benefits",
    description: "We carefully review older schemes for guarantees or bonuses that could be lost in a transfer, and flag any risks before you act.",
  },
  {
    title: "Maximise Flexibility and Tax Efficiency",
    description: "We structure your pension for long-term growth and lower tax, tailored to your life stage and financial goals.",
  },
  {
    title: "Get Personalised Advice for Your Situation",
    description: "Our loyalty is to you, not product providers. That means clear, impartial advice focused on your best outcome.",
  },
];

const faqs = [
  {
    question: "Can I transfer my pension from an old employer?",
    answer: "Yes. If you're no longer contributing to a workplace pension, you can usually transfer it to another scheme such as a PRSA or personal pension. We'll help you assess the value and any penalties before making the move.",
  },
  {
    question: "Will I lose benefits if I transfer my pension?",
    answer: "Possibly. Some pensions have valuable guarantees like annuity rates or bonus features. Our free report highlights what you'd keep or lose, so you make a fully informed decision.",
  },
  {
    question: "What are the risks of transferring a defined benefit pension?",
    answer: "You could lose income security or benefits linked to your salary and service. We only recommend transfers if it's clearly in your financial interest.",
  },
  {
    question: "How long does a pension transfer take?",
    answer: "It typically takes 3-6 weeks, depending on how quickly providers supply the required paperwork. We handle the follow-ups for you.",
  },
  {
    question: "Can I combine multiple pensions into one?",
    answer: "Yes. Consolidating pensions often reduces fees, simplifies management, and increases flexibility—but only when done correctly. We'll review if it's right for you.",
  },
  {
    question: "What's the minimum pension size to transfer?",
    answer: "There's no fixed minimum, but in practice, transfers usually make most sense for pension pots of around €10,000 or more. Smaller amounts can be less cost-effective once fees and administration are factored in, and we'll always give you honest guidance based on value and outcomes.",
  },
  {
    question: "Can I combine pensions from old jobs?",
    answer: "Yes. If you're no longer contributing to old workplace pensions, we can often help you consolidate them into a single scheme. This simplifies administration and may reduce fees or improve investment performance.",
  },
];

const PensionTransfers = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Transfer or Consolidate Your Pensions | Expert Advice to Simplify & Save</title>
        <meta name="description" content="Thinking of consolidating or transferring your pensions? We handle the paperwork, explain the risks, and make sure you don't lose valuable benefits." />
        <link rel="canonical" href="https://www.pensionadvice.ie/categories/pension-transfers-and-consolidation" />
      </Helmet>
      
      <Header />

      <ServicePageHero
        title="Pension Transfers and Consolidation"
        subtitle="Transferring or consolidating a pension is a significant decision. We provide clear guidance to help you assess your options and support you through the process, keeping your pension aligned with your long-term goals."
      />

      {/* Video Section - Chris Crowley */}
      <section className="section-padding bg-gradient-to-b from-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
                Learn More
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Hear from Pension Advice on Pension Transfers
              </h2>
              <p className="text-muted-foreground">
                Our team explains how we can help protect your retirement savings.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-2xl opacity-50" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50">
                <video
                  src="/videos/pension-transfers.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatureList
        title="Who Should Consider a Pension Transfer or Consolidation"
        features={whoShouldConsiderFeatures}
        description="This service is ideal for individuals who:"
      />

      <div className="text-center py-4 bg-accent/5">
        <p className="text-muted-foreground">We also help employers or HR professionals handling bulk pension transfers for teams.</p>
        <p className="text-foreground font-medium mt-2">Not sure if you're ready to transfer or consolidate? Start with a free consultation.</p>
      </div>

      <ServiceContentSection blocks={contentBlocks} />

      {/* Calculator Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">Free Tool</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Pension Consolidation Calculator</h2>
            <p className="text-muted-foreground">See the benefits of consolidating your pensions</p>
          </div>
          <div className="max-w-xl mx-auto">
            <PensionTransferCalculator />
          </div>
        </div>
      </section>

      <ServiceSteps
        title="How We Make Pension Transfers Simple and Smart"
        subtitle="Whether you're consolidating, transferring, or both, we'll help you get the full picture before you commit. Moving your pension involves reviewing your existing benefits, assessing your goals, and finding the best destination for your funds. Here's how we help:"
        steps={processSteps}
      />

      <ServiceBenefits
        title="Why Transferring or Consolidating Your Pension Matters"
        introduction="Transferring or combining your pensions can unlock long-term value, but only with the right advice. Here's how we help you make smarter financial decisions:"
        benefits={transferBenefits}
      />

      <div className="text-center py-8 bg-primary/5">
        <p className="text-lg font-semibold text-foreground">Let's make your pensions work harder — Book a call</p>
      </div>

      <ServiceCTA
        title="Talk to Our Team About Pension Transfers and Consolidation"
        subtitle="Whether you're consolidating pensions or moving one scheme, we'll help you make the smartest financial decision."
        phone="01 912 5030"
      />

      <ServiceFAQ
        title="Frequently Asked Questions about Pension Transfers in Ireland"
        faqs={faqs}
      />

      <ServiceReviews category="transfers" />

      <AdvisorContactCard />

      <CorePriorities />

      <Footer />
    </div>
  );
};

export default PensionTransfers;
