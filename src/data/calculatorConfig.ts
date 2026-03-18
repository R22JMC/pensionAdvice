// ============================================
// CALCULATOR CONFIGURATION
// Edit this file to change calculator inputs, labels, options, and calculation constants
// ============================================

// ============================================
// SHARED CONSTANTS
// ============================================
export const sharedConstants = {
  currency: 'EUR',
  locale: 'en-IE',
  defaultGrowthRate: 0.05, // 5% annual growth
};

// ============================================
// PENSION TRANSFER CALCULATOR
// ============================================
export const pensionTransferConfig = {
  title: "Pension Transfer or Consolidation",
  description: "See the benefits of consolidating your pensions",
  buttonText: "Calculate Savings",
  disclaimer: "Projections are estimates. Past performance is not a reliable guide to future performance.",
  infoMessage: "Some pensions may have valuable benefits worth retaining. Our specialists will analyse each pension to ensure consolidation is right for you.",
  
  // Calculation constants
  constants: {
    consolidatedFeeRate: 0.0075, // 0.75% consolidated fees
    adminFeePerPension: 50,     // €50 admin fee per pension per year
  },
  
  inputs: {
    numberOfPensions: {
      label: "No. of Pensions",
      placeholder: "Select number",
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4+" },
      ],
    },
    totalValue: {
      label: "Total Value of Your Pension Assets (€)",
      placeholder: "Enter amount",
    },
    averageFees: {
      label: "Approximate Annual Management Fee You Are Currently Paying?",
      placeholder: "Select fees",
      defaultValue: "1.25",
      options: [
        { value: "0.75", label: "Less than 1%" },
        { value: "1.0", label: "1%" },
        { value: "1.25", label: "1.25%" },
        { value: "1.5", label: "1.5%" },
        { value: "1.75", label: "Higher than 1.5%" },
      ],
    },
    retirementAge: {
      label: "Your Current Age",
      placeholder: "e.g., 45",
    },
    riskLevel: {
      label: "Risk Level",
      placeholder: "Select risk level",
      defaultValue: "medium",
      options: [
        { value: "low", label: "Low (3% growth)", growthRate: 0.03 },
        { value: "medium", label: "Medium (5% growth)", growthRate: 0.05 },
        { value: "high", label: "High (8% growth)", growthRate: 0.08 },
      ],
    },
  },
  
  results: {
    keepSeparateLabel: "Keep Separate",
    consolidatedLabel: "Consolidated",
    savingsLabel: "Potential Extra Savings",
    annualFeeLabel: "Annual Fee Saving",
  },
};

// ============================================
// DIRECTORS PENSION CALCULATOR
// ============================================
export const directorsPensionConfig = {
  title: "Director's Pension Calculator",
  description: "Calculate your maximum tax-efficient pension contributions",
  buttonText: "Calculate Tax Relief",
  disclaimer: "Based on Revenue age-related contribution limits for tax relief.",
  infoMessage: "Directors can also make employer contributions which are a business expense. A specialist can help maximise your total tax efficiency.",
  
  // Calculation constants - Irish Revenue age-based limits
  constants: {
    growthRate: 0.05, // 5% annual growth
    ageLimits: [
      { maxAge: 30, percentage: 15 },
      { maxAge: 40, percentage: 20 },
      { maxAge: 50, percentage: 25 },
      { maxAge: 55, percentage: 30 },
      { maxAge: 60, percentage: 35 },
      { maxAge: Infinity, percentage: 40 },
    ],
  },
  
  inputs: {
    annualSalary: {
      label: "Annual Salary/Income (€)",
      placeholder: "e.g., 80000",
    },
    age: {
      label: "Your Age",
      placeholder: "e.g., 45",
    },
    yearsToRetirement: {
      label: "Years Until Retirement",
      placeholder: "e.g., 20",
    },
    taxBand: {
      label: "Your Tax Rate",
      placeholder: "Select tax rate",
      defaultValue: "40",
      options: [
        { value: "20", label: "20% - Standard Rate" },
        { value: "40", label: "40% - Higher Rate" },
      ],
    },
  },
  
  results: {
    maxContributionLabel: "Maximum Contribution Limit",
    taxReliefLabel: "Tax Relief",
    netCostLabel: "Net Cost to You",
    projectedFundLabel: "Projected Fund at Retirement",
  },
};

// ============================================
// PENSION REVIEW CALCULATOR
// ============================================
export const pensionReviewConfig = {
  title: "Pension Review Calculator",
  description: "Calculate the value of your pension at retirement with compound interest",
  buttonText: "Calculate Pension Value",
  disclaimer: "This calculator provides estimates only. Actual results may vary based on market conditions.",
  infoMessage: "These figures are illustrative. A full pension review will provide accurate projections based on your specific funds and circumstances.",
  quote: '"Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn\'t, pays it."',
  quoteAuthor: "Albert Einstein",
  
  // Calculation constants
  constants: {
    taxFreeLumpSumRate: 0.25,    // 25% tax-free lump sum
    arfWithdrawalRate: 0.05,     // 5% ARF annual withdrawal
    retirementYears: 20,         // Assumed years in retirement for projections
  },
  
  inputs: {
    currentValue: {
      label: "Current Pension Fund Value (€)",
      placeholder: "e.g., 50000",
      tooltip: "The current total value of your pension fund",
    },
    currentAge: {
      label: "Current Age",
      placeholder: "e.g., 35",
      tooltip: "Your current age",
    },
    retirementAge: {
      label: "Expected Retirement Age",
      placeholder: "e.g., 65",
      tooltip: "The age at which you plan to retire",
    },
    expectedGrowth: {
      label: "Expected Annual Growth (%)",
      placeholder: "Select growth rate",
      defaultValue: "5.0",
      tooltip: "The expected annual growth rate of your pension fund",
      options: [
        { value: "3.0", label: "3.0%" },
        { value: "4.0", label: "4.0%" },
        { value: "5.0", label: "5.0%" },
        { value: "6.0", label: "6.0%" },
        { value: "7.0", label: "7.0%" },
        { value: "8.0", label: "8.0%" },
      ],
    },
    monthlyContribution: {
      label: "Monthly Contributions (€)",
      placeholder: "e.g., 500",
      tooltip: "Your monthly contribution to the pension fund",
    },
    providerFees: {
      label: "Pension Provider Fees (%)",
      placeholder: "Select fees",
      defaultValue: "0.0",
      tooltip: "The annual fee charged by your pension provider",
      options: [
        { value: "0.0", label: "0.0%" },
        { value: "0.5", label: "0.5%" },
        { value: "0.9", label: "0.9%" },
        { value: "1.0", label: "1.0%" },
        { value: "1.25", label: "1.25%" },
        { value: "1.5", label: "1.5%" },
        { value: "2.0", label: "2.0%" },
      ],
    },
  },
  
  results: {
    projectionTitle: "Your Pension Projection",
    estimatedFundLabel: "Estimated Pension Fund at Retirement",
    totalContributionsLabel: "Total Effective Contributions",
    totalGrowthLabel: "Total Growth",
    growthPercentageLabel: "Growth Percentage",
    incomeTitle: "Retirement Income (ARF)",
    incomeDescription: "At retirement, you could take a 25% lump sum and use the remainder to buy an ARF that pays a monthly income.",
    taxFreeLumpSumLabel: "25% Lump Sum",
    remainingFundLabel: "Remaining Fund for ARF",
    monthlyIncomeLabel: "Estimated Monthly Income",
    totalPaymentsLabel: "Total ARF Payments",
    paymentsNote: "Payments projected over 20 years.",
  },
};

// ============================================
// UK PENSION TRANSFER CALCULATOR
// ============================================
export const ukPensionTransferConfig = {
  title: "UK Pension Calculator",
  description: "Calculate your UK pension value in Euro with live exchange rates",
  buttonText: "Calculate Value",
  disclaimer: "Exchange rates are fetched live and subject to market fluctuations.",
  infoMessage: "This is an estimate only. Actual transfer values depend on your specific scheme, timing, and market conditions.",
  
  // Calculation constants
  constants: {
    taxFreeLumpSumRate: 0.25,    // 25% tax-free lump sum
    arfWithdrawalRate: 0.05,     // 5% ARF annual withdrawal
    fallbackExchangeRate: 1.17,  // Fallback GBP to EUR if API fails
  },
  
  inputs: {
    pensionValueGBP: {
      label: "Value of UK Pension (£)",
      placeholder: "e.g., 100000",
      tooltip: "The current value of your UK pension in Sterling",
    },
    currentAge: {
      label: "Your Age",
      placeholder: "e.g., 55",
      tooltip: "Your current age",
    },
    yearLeftUK: {
      label: "When did you leave the UK?",
      placeholder: "Select year",
      tooltip: "The year you left the UK",
      options: Array.from({ length: 40 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { value: year.toString(), label: year.toString() };
      }),
    },
  },
  
  results: {
    exchangeRateLabel: "Live Exchange Rate",
    gbpValueLabel: "UK Pension Value (GBP)",
    eurValueLabel: "Value in Euro",
    taxFreeLumpSumLabel: "25% Tax-Free Lump Sum",
    remainingFundLabel: "75% Remaining Fund for ARF",
    monthlyIncomeLabel: "Estimated Monthly Income (5% ARF)",
    annualIncomeLabel: "Estimated Annual Income",
    lastUpdatedLabel: "Exchange rate last updated",
  },
};

// ============================================
// EARLY RETIREMENT CALCULATOR
// ============================================
export const earlyRetirementConfig = {
  title: "Early Retirement Calculator",
  description: "Estimate your tax-free lump sum and retirement income",
  buttonText: "Calculate My Options",
  disclaimer: "Projections are estimates. Past performance is not a reliable guide to future performance.",
  infoMessage: "Early access rules vary by pension type. A specialist can confirm your exact entitlements and tax implications.",
  
  // Calculation constants
  constants: {
    taxFreeLumpSumRate: 0.25,   // 25% tax-free lump sum
    sustainableWithdrawalRate: 0.05, // 5% withdrawal rate
    growthRate: 0.05,           // 5% annual growth
  },
  
  inputs: {
    pensionValue: {
      label: "Total Pension Value You Will Access (€)",
      placeholder: "Enter amount",
    },
    currentAge: {
      label: "Your Current Age",
      placeholder: "e.g., 55",
    },
    accessAge: {
      label: "Age You Wish to Access the Pension",
      placeholder: "Select age",
      options: [
        { value: "now", label: "Now" },
        { value: "50", label: "50" },
        { value: "51", label: "51" },
        { value: "52", label: "52" },
        { value: "53", label: "53" },
        { value: "54", label: "54" },
        { value: "55", label: "55" },
        { value: "56", label: "56" },
        { value: "57", label: "57" },
        { value: "58", label: "58" },
        { value: "59", label: "59" },
        { value: "60", label: "60" },
        { value: "61", label: "61" },
        { value: "62", label: "62" },
        { value: "63", label: "63" },
        { value: "64", label: "64" },
        { value: "65", label: "65" },
      ],
    },
    desiredIncome: {
      label: "Desired Annual Income (€)",
      placeholder: "e.g., 30000",
      defaultValue: "30000",
    },
  },
  
  results: {
    taxFreeLumpSumLabel: "Tax-Free Lump Sum",
    remainingFundLabel: "Remaining Fund",
    monthlyIncomeLabel: "Sustainable Monthly Income (5%)",
    incomeGapLabel: "Annual Income Gap",
  },
};

// ============================================
// REDUNDANCY CALCULATOR
// ============================================
export const redundancyConfig = {
  title: "Redundancy & Pension Calculator",
  description: "Understand your pension options during redundancy",
  buttonText: "Calculate Impact",
  disclaimer: "Projections are estimates. Past performance is not a reliable guide to future performance.",
  infoMessage: "Talk to us before making any redundancy decisions. Your choices now can significantly impact your retirement.",
  
  // Calculation constants
  constants: {
    growthRate: 0.05,           // 5% annual growth
    taxFreeLumpSumRate: 0.25,   // 25% tax-free lump sum
    maxTaxFreeLoss: 200000,     // €200k max loss cap
  },
  
  inputs: {
    age: {
      label: "Your Age",
      placeholder: "e.g., 50",
    },
    serviceYears: {
      label: "Service in Years with Your Employer",
      placeholder: "e.g., 15",
    },
    annualSalary: {
      label: "Annual Salary (€)",
      placeholder: "e.g., 60000",
    },
    pensionValue: {
      label: "Pension Value Accrued with This Employer (€)",
      placeholder: "Enter amount",
    },
    retirementAge: {
      label: "Expected Retirement Age",
      placeholder: "Select age",
      options: [
        { value: "60", label: "60" },
        { value: "61", label: "61" },
        { value: "62", label: "62" },
        { value: "63", label: "63" },
        { value: "64", label: "64" },
        { value: "65", label: "65" },
        { value: "66", label: "66" },
        { value: "67", label: "67" },
        { value: "68", label: "68" },
        { value: "69", label: "69" },
        { value: "70", label: "70" },
      ],
    },
  },
  
  results: {
    projectedValueLabel: "Expected Pension Value at Retirement",
    taxFreeLossLabel: "Tax-Free Cash You Could Lose",
    lossWarning: "If you waive your right to tax-free cash through the redundancy process",
    maxCapNote: "Maximum tax-free cash loss capped at €200,000",
  },
};
