export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  phone: string;
  mobile: string;
  email: string;
  linkedin: string;
  image: string;
  shortBio: string;
  fullBio: string;
  education: string[];
  qualifications: string[];
  specializations: string[];
}

export const chrisMcKenzie: TeamMember = {
  id: "chris-mckenzie",
  name: "Chris McKenzie",
  title: "Director",
  credentials: ["CFP®", "SIA", "QFA"],
  phone: "(01) 912 5030",
  mobile: "(083) 350 9980",
  email: "chris@pension-advice.ie",
  linkedin: "https://www.linkedin.com/in/chrismckenzie1",
  image: "",
  shortBio: "Certified Financial Planner, Specialist Investment Advisor, Qualified Financial Advisor",
  fullBio: `Chris is a Director of Pension Advice.ie. Originally from Scotland, Chris came to Ireland in 2003, working for some of Ireland's leading financial institutions before becoming a director of his own business in 2011.

Chris is a highly qualified financial executive. He has qualified from the prestigious (level 9) Graduate Diploma and certified financial planner designation CFP® from UCD.`,
  education: [
    "University College Dublin",
    "Life Insurance Association (LIA)",
    "Institute of Bankers",
    "Edinburgh University",
  ],
  qualifications: [
    "Certified Financial Planner (CFP®)",
    "Specialist Investment Advisor (SIA)",
    "Qualified Financial Advisor (QFA)",
    "Communication with Media",
    "Graduate Diploma in Financial Planning",
  ],
  specializations: [
    "Pension Planning",
    "Pensions for employees, self-employed and directors",
    "Retirement Options",
    "Exiting a Defined Benefit (DB) scheme",
    "Exiting a Defined Contribution (DC) scheme",
    "Pension transfers",
    "QROPS (overseas pension transfers)",
    "Max Funding advice",
    "Tax free lump sums",
    "Early Retirement",
    "Pension Investment Advice",
    "Pension Property",
    "Alternative Investments",
    "Risk Assessment",
    "Tax Advice",
  ],
};

export const chrisCrowley: TeamMember = {
  id: "chris-crowley",
  name: "Chris Crowley",
  title: "Director",
  credentials: ["PgD", "SIA", "RPA", "FPRA", "QFA"],
  phone: "(01) 912 5030",
  mobile: "(085) 862 3328",
  email: "chriscrowley@pension-advice.ie",
  linkedin: "https://www.linkedin.com/in/chriscrowley",
  image: "",
  shortBio: "Postgraduate Diploma in Business, Specialist Investment Advisor, Retirement Planning Advisor, Financial Planning Risk Advisor, Qualified Financial Advisor",
  fullBio: `Chris is a director of Pension Advice. He is a highly qualified financial executive with over thirteen years of experience in the financial services industry.

Having started his career in financial advice with Cornmarket, who are recognised as one of the leading brokerages in Ireland. Chris went on to work for other large brokerages, he set up and ran his own successful brokerage from 2015 – 2018 before becoming a director of Pension Advice in 2019.`,
  education: [
    "University College Dublin (PgD, SIA, QFA)",
    "IT Sligo (RPA)",
    "Life Insurance Association (LIA)",
  ],
  qualifications: [
    "Postgraduate Diploma in Business (PgD)",
    "Specialist Investment Advisor (SIA)",
    "Financial Planning Risk Advisor (FPRA)",
    "Retirement Planning Advisor (RPA)",
    "Qualified Financial Advisor (QFA)",
  ],
  specializations: [
    "Pension Planning",
    "Pensions for employees, self-employed and directors",
    "Retirement Options",
    "Exiting a Defined Benefit (DB) scheme",
    "Exiting a Defined Contribution (DC) scheme",
    "Pension transfers",
    "QROPS (overseas pension transfers)",
    "Max Funding advice",
    "Tax free lump sums",
    "Early Retirement",
    "Pension Investment Advice",
    "Pension Property",
    "Alternative Investments",
    "Risk Assessment",
    "Tax Advice",
  ],
};

export const louiseWilliams: TeamMember = {
  id: "louise-williams",
  name: "Louise Williams",
  title: "Head of Client Services",
  credentials: ["QFA"],
  phone: "(01) 912 5030",
  mobile: "",
  email: "hello@pension-advice.ie",
  linkedin: "",
  image: "",
  shortBio: "Qualified Financial Advisor, Head of Client Services",
  fullBio: `Louise is the Head of Client Services at Pension Advice. As a Qualified Financial Advisor, she ensures our clients receive exceptional service and support throughout their pension journey.`,
  education: [],
  qualifications: [
    "Qualified Financial Advisor (QFA)",
  ],
  specializations: [
    "Client Services",
    "Pension Administration",
    "Client Support",
  ],
};

export const hannaGallagher: TeamMember = {
  id: "hanna-gallagher",
  name: "Hanna Gallagher",
  title: "Client Services",
  credentials: [],
  phone: "(01) 912 5030",
  mobile: "",
  email: "hello@pension-advice.ie",
  linkedin: "",
  image: "",
  shortBio: "Client Services",
  fullBio: `Hanna is part of the Client Services team at Pension Advice, providing excellent support to our clients throughout their pension journey.`,
  education: [],
  qualifications: [],
  specializations: [
    "Client Services",
    "Client Support",
  ],
};

export const pamelaMcGann: TeamMember = {
  id: "pamela-mcgann",
  name: "Pamela McGann",
  title: "Qualified Financial Advisor",
  credentials: ["RPA", "QFA", "AIIPM"],
  phone: "(01) 912 5030",
  mobile: "",
  email: "hello@pension-advice.ie",
  linkedin: "",
  image: "",
  shortBio: "Qualified Financial Advisor, Associate of The Irish Institute of Pension Management",
  fullBio: `Pamela is a Qualified Financial Advisor and Associate of The Irish Institute of Pension Management at Pension Advice, bringing expertise in retirement planning and pension management.`,
  education: [],
  qualifications: [
    "Retirement Planning Advisor (RPA)",
    "Qualified Financial Advisor (QFA)",
    "Associate of The Irish Institute of Pension Management (AIIPM)",
  ],
  specializations: [
    "Pension Planning",
    "Retirement Planning",
    "Pension Management",
  ],
};

export const teamMembers: TeamMember[] = [chrisMcKenzie, chrisCrowley, louiseWilliams, hannaGallagher, pamelaMcGann];
