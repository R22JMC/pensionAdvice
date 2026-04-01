export interface ServiceReview {
  name: string;
  rating: number;
  text: string;
  verified: boolean;
}

export const serviceReviews: Record<string, ServiceReview[]> = {
  transfers: [
    {
      name: "Tim Clifford",
      rating: 5,
      text: "Pension Advice helped me to reinvest my previous employers pension to a new fund. If serious about investing for your future, it is a minefield of options and finance language. Pension Advice are very helpful and reliable in advising you.",
      verified: true,
    },
    {
      name: "I Campbell",
      rating: 5,
      text: "Dealt with Chris-very clear communication and made the pension transfer process easy to understand and was a pleasure to work with",
      verified: false,
    },
    {
      name: "Laura and Mark",
      rating: 5,
      text: "Absolute pleasure to deal with. I have no experience with pensions Chris and the team made it very easy and understandable as we moved pensions from one company to another. I highly recommend them. Thanks again for all your help.",
      verified: true,
    },
    {
      name: "Gerry",
      rating: 5,
      text: "Dealt with Pension Advice to transfer my old work place pension from my previous employer into a personal retirement bond policy. They took the time to advise me appropriately and help me choose funds that were aligned to my attitude to risk. I'm hoping to retire early and access 25% tax free cash at that time. So very happy with my options moving forward. Would definitely recommend Pension Advice.ie",
      verified: true,
    },
  ],
  directors: [
    {
      name: "Yossef Aviram",
      rating: 5,
      text: "Pension Advice helped me setup my pension plan with Aviva, and helped with all the necessary steps to achieve this, and even set you up their system to receive regular updates on my pension. The follow up was great, and i received regular update in every step and progress we made to achieve this. I am very happy i chose Pension Advice, and i would recommend to use their efficient and good service. Thank you Chris Louise and all the team in Pension Advice :)",
      verified: false,
    },
  ],
  reviews: [
    {
      name: "Larry Millard",
      rating: 5,
      text: "Chris and the team and tremendous! Having been a customer for over 5 years, PensionAdvice are a really great example of an Irish financial services company providing a genuine 5-star service, support and advice both domestically and internationally. I wouldn't hesitate to highly recommend PensionAdvice for any type of financial advice.",
      verified: true,
    },
  ],
  ukTransfer: [
    {
      name: "J Wilson",
      rating: 5,
      text: "The whole team were great from start to finish, they guided me through the whole process of moving my personal pension over from the UK to Ireland, which was a much more complex process than I first thought! But from the planning phone calls to completing all the forms they made it really simple for me, many thanks!",
      verified: false,
    },
    {
      name: "Peter Best",
      rating: 5,
      text: "Both myself and my partner worked in UK for a number of years and needed someone to help facilitate a consolidation of a number of pensions and also a transfer from UK to Ireland. Chris from Pension Advice provided a top class service to enable us to bring our pensions over. He was extremely knowledgeable, very friendly and highly professional. Chris's support made the whole process so easy and I would have no hesitation in recommending Chris for helping to ensure a successful outcome to your pension requirements.",
      verified: true,
    },
    {
      name: "Ian",
      rating: 5,
      text: "Very professional company to work with. PensionAdvice helped me transfer my pension home from the UK. The paperwork for transferring a pension from the UK back to Ireland can be long and tedious, however Chris and Louise helped me and guided me through the process. I was very happy with their effort and I would highly recommend them.",
      verified: true,
    },
    {
      name: "Ian Boardman",
      rating: 5,
      text: "Excellent experience with Chris and Louise from Pension Advice on the setting up of my early retirement funds. From the time I initially contacted Pension Advice I was advised and guided expertly through the process with my pension providers.",
      verified: false,
    },
    {
      name: "John Allen",
      rating: 5,
      text: "I wanted to consolidate two pension schemes accrued whilst living in Ireland. Despite Government's encouraging us to provide for our retirement understanding the legislation and options, particularly as I now live in the UK, was practically impossible. PensionAdvise where clear and good at explaining my options, negotiating with a Dublin provider to receive my investments, and completing the administration process. Very pleased with the service and that I chose to use them",
      verified: true,
    },
  ],
  earlyRetirement: [
    {
      name: "Rosemary",
      rating: 5,
      text: "I found Chris and his team very easy to deal with. Chris was very patient and explained all the options available to me. The advice I got was professional and concise. Louise's customer service was excellent. I was transferring out of my DB Pension and was quite anxious about making the right decisions. I am happy to say that everything went very smoothly. Chris and Louise kept me updated on each stage of the process and responded quickly to any questions i had. Great service.",
      verified: true,
    },
  ],
  redundancy: [
    {
      name: "Mark Brady",
      rating: 5,
      text: "I was contacted very quickly and spoke with Chris who was very knowledgable and gave me some great simple to understand advice, I would highly recommend this service to cut through the jargon and get clear understandable advice.",
      verified: true,
    },
  ],
};
