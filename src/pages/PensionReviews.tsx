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
import PensionReviewCalculator from "@/components/calculators/PensionReviewCalculator";
import { Phone, FileSearch, FileText, CheckCircle } from "lucide-react";

const PensionReviews = () => {
  const features = [
    "Have one or more old pensions from previous jobs",
    "Aren't sure what fees, funds, or benefits they're currently getting",
    "Want to check if their pension is on track for retirement",
    "Think they might be overpaying charges or missing out on better options",
    "Are self-employed or directors managing their own pensions",
    "Just want a second opinion before committing to anything",
  ];

  const contentBlocks = [
    {
      title: "When Should You Get a Pension Review?",
      content: "A pension review isn't just for people approaching retirement. It's for anyone who wants to know where they stand and whether their pension is working as hard as it could. A review is especially useful if:",
      bullets: [
        "You've had multiple jobs and aren't sure where your old pensions are",
        "You've gone self-employed or started a limited company",
        "You're unsure what charges you're paying or what your fund is invested in",
        "Your pension hasn't been looked at in years",
        "You're getting closer to retirement and want to understand your options",
        "You're not confident your current setup fits your long-term goals",
      ],
      note: "Even if your pension seems fine on paper, a second look can reveal better options or small changes that make a big difference later.",
    },
  ];

  const steps = [
    {
      icon: Phone,
      title: "Step 1 – Get in Touch",
      description: "Start with a short call or message. We'll ask about your existing pensions, any paperwork you have, and what you'd like to know or improve.",
    },
    {
      icon: FileSearch,
      title: "Step 2 – We Gather the Details",
      description: "With your permission, we'll contact your pension providers and request up-to-date information like fund values, charges, investment strategy, and retirement options.",
    },
    {
      icon: FileText,
      title: "Step 3 – You Get a Clear, No-Jargon Report",
      description: "We'll break down each pension you hold. You'll see what's working, what could be better, and if any changes might save you money, improve performance, or simplify things.",
    },
    {
      icon: CheckCircle,
      title: "Step 4 – Advice That's Actually Useful",
      description: "You'll get clear recommendations, not a sales pitch. If your pensions are in good shape, we'll tell you. If something needs fixing, we'll explain your options and help you take action if you want to.",
    },
  ];

  const benefits = [
    {
      title: "See How Your Pension Is Performing",
      description: "We analyse fund values, charges, and growth so you know exactly where you stand and whether your plan is doing its job.",
    },
    {
      title: "Spot Hidden Fees and Gaps",
      description: "We highlight costs you might not see and show you if better-value options are available.",
    },
    {
      title: "Check That Your Plan Still Fits",
      description: "Life changes, and your pension should keep up. We make sure your risk level, investment mix, and drawdown options match your goals.",
    },
    {
      title: "Simplify and Strengthen Your Setup",
      description: "If you have multiple pots or outdated plans, we'll show you whether consolidation could save money or reduce complexity.",
    },
    {
      title: "Get Advice With No Sales Agenda",
      description: "You'll receive clear recommendations. If things are on track, we'll say so. If not, we'll help you fix it.",
    },
  ];

  const faqs = [
    {
      question: "Do I need to have a certain amount saved to get a pension review?",
      answer: "No. Whether you have a small pot or several larger ones, a review helps you understand what you've got and how to improve it.",
    },
    {
      question: "Will I be pressured to switch or buy something?",
      answer: "Absolutely not. Our reviews are focused on clarity and guidance. If your pensions are already well structured, we'll tell you.",
    },
    {
      question: "What kind of pensions can you review?",
      answer: "We can review personal pensions, PRSAs, occupational schemes, executive pensions, and PRBs — including old pensions from past jobs.",
    },
    {
      question: "Can you find pensions I've lost track of?",
      answer: "Yes. If you've changed jobs over the years, we can help trace and retrieve details of old workplace pensions.",
    },
    {
      question: "Is a pension review free?",
      answer: "Yes. There's no charge or obligation. We'll only recommend next steps if it's in your best interest — and you're free to take them or not.",
    },
    {
      question: "How long does it take to get my review?",
      answer: "It usually takes 3-6 weeks, depending on how quickly your providers respond. We handle all the follow-up so you don't have to.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pension Review Ireland | Check Your Pension's Value, Fees & Options</title>
        <meta name="description" content="Not sure how your pension is performing? Our free pension review helps you understand charges, risks, and whether to stay put, switch, or consolidate. No jargon, no pressure." />
        <link rel="canonical" href="https://www.pensionadvice.ie/categories/review-your-pension" />
      </Helmet>
      
      <Header />

      <ServicePageHero
        title="Pension Reviews That Help You Take Control of Your Retirement Savings"
        subtitle="Not sure what pensions you have, what they're worth, or if they're working for you? A pension review gives you clarity without the jargon or pressure. We'll help you understand your existing plans, spot any gaps or excessive charges, and show you whether it makes sense to stay put, switch, or combine. No guesswork, no commitments, just clear answers."
        formType="reviews"
      />

      <ServiceFeatureList
        title="Who Needs a Pension Review"
        description="This service is ideal if you want to understand where you stand with your pensions and how to make the most of them, especially if it's been a few years since you looked at them. We help people who:"
        features={features}
      />

      <div className="text-center py-4 bg-accent/5">
        <p className="text-muted-foreground">If you're asking, "Is my pension actually doing what it should?" — this is for you.</p>
        <p className="text-foreground font-medium mt-2">Not sure if you need a pension review yet? Start with a free consultation.</p>
      </div>

      <ServiceContentSection blocks={contentBlocks} />

      <ServiceVideos
        category="reviews"
        title="Watch: Why Reviewing Your Pension Matters"
        subtitle="A short video on the importance of regular pension reviews."
      />

      {/* Calculator Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">Free Tool</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Pension Review Calculator</h2>
            <p className="text-muted-foreground">Review your pension's projected value at retirement</p>
          </div>
          <div className="max-w-xl mx-auto">
            <PensionReviewCalculator />
          </div>
        </div>
      </section>

      <ServiceSteps
        title="How Our Pension Review Process Works For You"
        subtitle="Getting your pension reviewed doesn't have to be time-consuming or complicated. We handle the technical bits so you get a clear picture of where you stand - and what to do next."
        steps={steps}
      />

      <ServiceBenefits
        title="Why a Pension Review Is Worth It"
        introduction="A pension review helps you take stock of where you stand and where your money could be working harder. Here's how we help you get more from what you already have:"
        benefits={benefits}
      />

      <div className="text-center py-8 bg-primary/5">
        <p className="text-lg font-semibold text-foreground">Let's make your pension work harder — Book a call</p>
      </div>

      <ServiceCTA
        title="Talk to Our Team About Your Pension Review"
        subtitle="Whether you're feeling uncertain, haven't looked at your pension in years, or just want a second opinion, we'll help you understand where you stand and what to do next."
        phone="01 912 5030"
      />

      <ServiceFAQ
        title="Frequently Asked Questions About Pension Reviews"
        faqs={faqs}
      />

      <ServiceReviews category="reviews" />

      <AdvisorContactCard />

      <CorePriorities />

      <Footer />
    </div>
  );
};

export default PensionReviews;
