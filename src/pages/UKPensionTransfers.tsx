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
import UKPensionTransferCalculator from "@/components/calculators/UKPensionTransferCalculator";

const UKPensionTransfers = () => {
  const features = [
    "Previously worked in the UK and left behind one or more personal or workplace pensions",
    "Have returned to live in Ireland permanently",
    "Want your UK pension managed in euro by an Irish provider",
    "Are unsure about QROPS rules, tax risks, or the right next step",
    "Want to access retirement benefits in Ireland under Irish rules",
    "Prefer guidance before committing to a transfer",
  ];

  const contentBlocks = [
    {
      title: "What Is a UK Pension Transfer — and Why It Matters",
      content: "A UK pension transfer lets you bring your pension savings home after working abroad. If done correctly through a HMRC-recognised structure (QROPS), it gives you:",
      bullets: [
        "Easier management in your local currency (euro)",
        "More flexible retirement options under Irish rules",
        "Reduced risk of future tax or currency complications",
        "Full control of your funds in your own name",
        "Peace of mind knowing your pension is aligned with where you live",
      ],
      note: "A UK pension transfer gives you the opportunity to take control of your savings and align them with your life back in Ireland.",
    },
    {
      title: "Are You Eligible to Transfer a UK Pension to Ireland?",
      content: "Most people can transfer, but timing and tax rules matter. You're likely eligible if:",
      bullets: [
        "You've been a member of a personal or workplace UK pension scheme in the past",
        "You now live in Ireland full-time",
        "You want your pension held in your name, managed locally",
        "Your current UK provider allows overseas transfers",
      ],
      note: "There may be reporting requirements to HMRC for ten years after a transfer. We'll walk you through what applies to you and ensure the transfer is done right. Note: Our transfer service applies to personal and workplace pensions only. The UK State Pension can't be transferred, but we can help you understand how it fits into your overall retirement planning.",
    },
  ];

  const steps = [
    {
      icon: Phone,
      title: "Step 1 – Start With a Call",
      description: "We'll talk through your UK pension history, current residency, and what you want from your retirement savings.",
    },
    {
      icon: FileSearch,
      title: "Step 2 – We Request Transfer Info",
      description: "With your approval, we contact your UK provider and request full transfer options, including overseas transfer terms.",
    },
    {
      icon: FileText,
      title: "Step 3 – You Get Clear Advice",
      description: "We explain your options, any UK tax considerations, and whether QROPS is suitable for your situation, with no pressure to proceed.",
    },
    {
      icon: CheckCircle,
      title: "Step 4 – We Manage the Transfer",
      description: "If you go ahead, we'll complete the paperwork, select an Irish QROPS provider together, and ensure the funds arrive and are invested in euro under your control.",
    },
  ];

  const benefits = [
    {
      title: "Avoid Unnecessary UK Tax Traps",
      description: "We help ensure you meet the QROPS timing rules, so your transfer isn't hit with surprise charges.",
    },
    {
      title: "Reduce Currency Risk",
      description: "Keep your retirement savings in euro, where you live, not pounds in a post-Brexit UK.",
    },
    {
      title: "Unlock Irish Retirement Flexibility",
      description: "Once transferred, you can access benefits through ARFs, annuities, or lump sums on your terms.",
    },
    {
      title: "Simplify and Consolidate",
      description: "Having everything managed in Ireland gives you better visibility, control, and peace of mind.",
    },
    {
      title: "Customised Advice for Your UK-Ireland Pension Transfer",
      description: "We'll only recommend a transfer if it benefits you, and we're not tied to product providers.",
    },
    {
      title: "Make Pension Access Easy for Beneficiaries",
      description: "Make it simple for your loved ones to access your pension benefits after your death, without dealing with UK provider delays or overseas regulations.",
    },
  ];

  const faqs = [
    {
      question: "Can I transfer my UK pension if I now live in Ireland?",
      answer: "Yes, in most cases. If you're a former UK pension scheme member now living in Ireland, you can usually transfer your pension through a QROPS structure. We'll help check eligibility and make sure it's done correctly.",
    },
    {
      question: "What is a QROPS and why is it needed?",
      answer: "A QROPS (Qualifying Recognised Overseas Pension Scheme) is a pension scheme approved by HMRC to receive UK pension transfers. It ensures your transfer follows UK rules and avoids unnecessary taxes.",
    },
    {
      question: "Will I pay UK tax on the transfer or when I access the money?",
      answer: "You typically won't pay UK tax if you've been a non-UK tax resident for the past ten UK tax years. However, QROPS transfers must be reported to HMRC for ten years. We'll help you avoid pitfalls.",
    },
    {
      question: "Can I access my transferred pension early?",
      answer: "Yes. Once transferred to Ireland, your pension can usually be accessed from age 55, depending on your Irish provider and Revenue rules.",
    },
    {
      question: "What happens to my pension after it transfers?",
      answer: "It moves into your own name and is managed by an Irish provider in euro. You'll have access to retirement options like ARFs, annuities, or lump sums under Irish regulation.",
    },
    {
      question: "Does my UK pension lose value in the transfer?",
      answer: "Not usually, though exchange rates and provider fees can affect the final amount. We work to ensure your transfer is cost-effective and secure.",
    },
    {
      question: "What documents do I need to start a transfer?",
      answer: "We'll need basic ID, your UK scheme details, and a signed Letter of Authority. We'll also request your UK transfer options on your behalf. We handle the rest, including contacting the UK provider.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Transfer Your UK Pension to Ireland | Expert QROPS Guidance</title>
        <meta name="description" content="Thinking of transferring your UK pension? We simplify QROPS transfers, manage paperwork, and help avoid UK tax pitfalls." />
        <link rel="canonical" href="https://www.pensionadvice.ie/categories/transferring-your-uk-pension-to-ireland" />
      </Helmet>
      
      <Header />

      <ServicePageHero
        title="UK Pension Transfers That Put You in Control"
        subtitle="If you've worked in the UK and now live in Ireland, your pension doesn't have to stay behind. Transferring it home can simplify your retirement planning, reduce tax exposure, and give you full control over your savings. We'll help you understand your options, complete the paperwork, and make sure everything's done correctly, with no pressure to act unless it makes sense."
        formType="ukTransfer"
      />

      <ServiceFeatureList
        title="Who UK Pension Transfer Services Are For"
        description="This service is ideal for Irish residents who have built up pension savings in the UK and want to manage them locally. It's especially useful if you:"
        features={features}
      />

      <div className="text-center py-4 bg-accent/5">
        <p className="text-muted-foreground">Living in Ireland with a UK pension? We'll help you decide whether transferring makes sense for your goals.</p>
        <p className="text-foreground font-medium mt-2">Not sure if you're ready to transfer your UK pension to Ireland? Start with a free consultation.</p>
      </div>

      <ServiceContentSection blocks={contentBlocks} />

      <ServiceVideos
        category="ukTransfer"
        title="Watch: UK to Ireland Pension Transfers Explained"
        subtitle="A clear overview of how UK pensions can be transferred to Ireland."
      />

      {/* Calculator Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">Free Tool</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">UK Pension Transfer Calculator</h2>
            <p className="text-muted-foreground">Understand your UK pension value and currency risk</p>
          </div>
          <div className="max-w-xl mx-auto">
            <UKPensionTransferCalculator />
          </div>
        </div>
      </section>

      <ServiceSteps
        title="How the UK Pension Transfer Process Works"
        subtitle="Transferring your UK pension doesn't have to be complicated. We manage the process from start to finish."
        steps={steps}
      />

      <ServiceBenefits
        title="Why Transferring Your UK Pension Is Worth It"
        introduction="Transferring your personal or workplace UK pension to Ireland can simplify your finances and give you more control over how your money's managed long term. Here's what you get:"
        benefits={benefits}
      />

      <div className="text-center py-8 bg-primary/5">
        <p className="text-lg font-semibold text-foreground">Let's make your pension work harder — Book a call</p>
      </div>

      <ServiceCTA
        title="Talk to Our Team About UK Pension Transfers"
        subtitle="If you're thinking about transferring your pension from the UK to Ireland, start with expert advice. No obligation – we're here to help."
        phone="01 912 5030"
      />

      <ServiceFAQ
        title="Frequently Asked Questions About UK Pension Transfers"
        faqs={faqs}
      />

      <ServiceReviews category="ukTransfer" />

      <AdvisorContactCard />

      <CorePriorities />

      <Footer />
    </div>
  );
};

export default UKPensionTransfers;
