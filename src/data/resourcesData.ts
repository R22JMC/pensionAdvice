export const videos = [
  {
    id: "QWpUeZzjfXQ",
    title: "Introduction to Pension Advice",
    description: "Learn about pension advice and how it can help secure your financial future.",
    category: "general",
    thumbIndex: 2,
  },
  {
    id: "eh4JlU0Qc2o",
    title: "ARF Investment Strategies Explained",
    description: "Understanding Approved Retirement Fund investment strategies for your retirement.",
    category: "retirement",
    customThumb: "hqdefault",
  },
  {
    id: "oq2bFvkpvy4",
    title: "Why Reviewing Your Pension Matters",
    description: "Discover the importance of regular pension reviews to maximise your retirement income.",
    category: "reviews",
    customThumb: "hqdefault",
  },
  {
    id: "q24q8UqpaFQ",
    title: "What Sets PensionAdvice.ie Apart",
    description: "Learn what makes our pension advice service unique and client-focused.",
    category: "general",
    thumbIndex: 1,
  },
  {
    id: "OcyGRnekH6A",
    title: "UK to Ireland Pension Transfers: What to Know",
    description: "Essential information about transferring your UK pension to Ireland.",
    category: "ukTransfer",
    customThumb: "hqdefault",
  },
  {
    id: "It0HOVq-hs8",
    title: "Your Guide to UK Pension Transfers",
    description: "A comprehensive guide to the UK pension transfer process.",
    category: "ukTransfer",
    customThumb: "hqdefault",
  },
  {
    id: "2t-vCK2zJ-4",
    title: "Portfolio Construction and Risk Explained",
    description: "Understanding how pension portfolios are constructed and risk is managed.",
    category: "general",
    customThumb: "hqdefault",
  },
  {
    id: "4uZile1091I",
    title: "Can You Access Your Pension From Age 50?",
    description: "Find out if you're eligible to access your pension early from age 50.",
    category: "earlyRetirement",
    thumbIndex: 3,
  },
  {
    id: "Q7mSXNwgrJ0",
    title: "Technology-Led Cashflow Planning",
    description: "How technology helps plan your retirement cashflow for the future.",
    category: "general",
    customThumb: "hqdefault",
  },
  {
    id: "oq2bFvkpvy4",
    title: "Why a Pension Review Matters for Directors",
    description: "Chris McKenzie explains the importance of reviewing your pension as a director or self-employed professional.",
    category: "directors",
    customThumb: "hqdefault",
  },
];

export const guides = [
  {
    id: "guide-retirement-options",
    title: "Make the Right Retirement Choice",
    subtitle: "Your Guide to Retirement Options",
    description: "Discover tax-free lump sums, ARFs, and annuities — and which is right for you.",
    downloadUrl: "/guides/your-guide-to-retirement-options.pdf",
    coverImage: "retirement-options-cover",
  },
  {
    id: "guide-defined-benefit",
    title: "Is Your Final Salary Pension Worth More?",
    subtitle: "Guide to Defined Benefit Transfer Values",
    description: "Understand your transfer options before making this life-changing decision.",
    downloadUrl: "/guides/guide-to-defined-benefit-transfer-values.pdf",
    coverImage: "defined-benefit-cover",
  },
];

export type Video = typeof videos[number];
export type Guide = typeof guides[number];
