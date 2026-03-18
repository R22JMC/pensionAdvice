import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyStatement = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.pensionadvice.ie/privacy-statement" />
      </Helmet>
      <Helmet>
        <title>Privacy Statement | Pension Advice Ireland</title>
        <meta name="description" content="Privacy Statement for Pension Advice Ireland. Learn how we collect, use, and protect your personal data." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
              Privacy Statement
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none text-foreground">
              
              {/* Section 1 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Introduction</h2>
              
              <p className="text-muted-foreground mb-4">
                1.1 The pensionadvice.ie website (the "Website") is operated by Gen Z Financial Solutions Limited. We respect your right to privacy. This Privacy Statement (together with our Website Terms and Conditions of Use ("Terms"), our Terms of Business and any other documents referred to) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
              </p>
              
              <p className="text-muted-foreground mb-4">
                1.2 The following discloses our information gathering and dissemination practices relating to this Website. In order to fully understand your rights, we encourage you to read this Privacy Statement and to consult our Terms and Terms of Business. Each time you use this Website you will be bound by the then current Privacy Statement and you should review this each time you use the Website to satisfy yourself that you are happy with it. Any external links to other websites are clearly identifiable as such and we are not responsible for the content or the privacy statements of these other websites.
              </p>
              
              <p className="text-muted-foreground mb-4">
                1.3 For the purpose of the Data Protection Acts 1988 and 2003 (the "Acts"), the data controller is Gen Z Financial Solutions Limited trading as pensionadvice.ie. Our Address is Suite 2, Block 8, Dunshaughlin Business Park, Dunshaughlin, A85 EE98, Ireland. Gen Z Financial Solutions Limited is regulated by the Central Bank of Ireland and is a limited company.
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Acceptance Of This Privacy Statement</h2>
              
              <p className="text-muted-foreground mb-4">
                By using this Website, you signify acceptance of this Privacy Statement. If you do not agree with or you are not comfortable with any aspect of the Privacy Statement, your only remedy is to discontinue use of the Website. We reserve the right to modify this Privacy Statement at any time. Your continued use of any portion of the Website following notification or posting of such changes will constitute your acceptance of those changes.
              </p>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Information We May Collect From You</h2>
              
              <p className="text-muted-foreground mb-4">We may collect and process the following data:</p>
              
              <p className="text-muted-foreground mb-4">
                3.1 information that you provide to us when obtaining quotes or applying for cover for a product, or when you use this Website or avail of our services. Such information might include a name, address, email address, telephone number, or sensitive personal data such as health information or occupation and salary or date of birth.
              </p>
              
              <p className="text-muted-foreground mb-4">
                3.2 information about you and any third parties whose data you disclose to us;
              </p>
              
              <p className="text-muted-foreground mb-4">
                3.3 information provided at the time of registering to use this Website, posting material on the Website or requesting further services if such is applicable;
              </p>
              
              <p className="text-muted-foreground mb-4">
                3.4 we may record telephone calls for training and verification purposes and if you contact us for any reason, we may keep a record of that correspondence;
              </p>
              
              <p className="text-muted-foreground mb-4">
                3.5 we may also ask you to complete surveys that we use for research purposes, although you do not have to respond to them; and
              </p>
              
              <p className="text-muted-foreground mb-4">
                3.6 details of your visits to the Website including, but not limited to, traffic data, location data and other communication data and the resources, advertisements and linked sites that you access.
              </p>
              
              <p className="text-muted-foreground mb-4">
                3.7 should you contact us by web chat, phone, email, post or by any other method, we may hold the content, contact details and any additional information you provide to us on record for future reference and use.
              </p>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4 my-6">
                <p className="text-foreground font-semibold mb-2">IMPORTANT:</p>
                <p className="text-muted-foreground">
                  Please do not send us any genetic test results. If you provide us with sensitive data or other information you are confirming that you consent to the processing of such data as set out in this Privacy Statement. You are further confirming that you have explained to all third parties whose data you provide to us, how their data is processed and that you have obtained the requisite consent to our processing of such data as set out in this Privacy Statement.
                </p>
              </div>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Where We Store Your Personal Data</h2>
              
              <p className="text-muted-foreground mb-4">
                4.1 The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA who work for us or one of the underwriting life assurance companies. We may need to transfer data outside the EEA in order that the life assurance company can provide to you and administer the cover required. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Statement.
              </p>
              
              <p className="text-muted-foreground mb-4">
                4.2 All information you provide to us is stored on secure servers. Where we have given you (or where you have chosen) a password or username which enables you to access certain parts of our Website, you are responsible for keeping this password or username confidential. We ask you not to share this information with anyone.
              </p>
              
              <p className="text-muted-foreground mb-4">
                4.3 Unfortunately, the transmission of information via the Internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Website; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access. We have security in place such as firewalls, backup and other appropriate technical security measures.
              </p>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Uses Made Of Your Information</h2>
              
              <p className="text-muted-foreground mb-4">5.1 We use information held about you:</p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                5.1.1 to ensure that content from our Website is presented in the most effective manner for you and for your computer;
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                5.1.2 to provide you with cover, quotes, information, products or services that (a) you request from us or (b) which we feel may interest you where you have consented to be contacted for such purposes;
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                5.1.3 to carry out our obligations arising from any contracts entered into between you and us or the underwriting life assurance companies;
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                5.1.4 to allow you to participate in interactive features of our Website; and
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                5.1.5 to notify you about changes to our Website and/or services.
              </p>
              
              <p className="text-muted-foreground mb-4">
                5.2 We will also disclose your data to selected life assurance companies who will use your data, to provide you with products and services, cover and to administer your policy.
              </p>
              
              <p className="text-muted-foreground mb-4">
                5.3 If you do not want us to use your data in this way, or to pass your details on to third parties for marketing purposes, please tick the relevant boxes when we collect your marketing preferences. You may change your preferences at any time by contacting us at <a href="mailto:hello@pension-advice.ie" className="text-accent hover:underline">hello@pension-advice.ie</a>
              </p>
              
              <p className="text-muted-foreground mb-4">
                5.4 We do not, without your consent, disclose information about identifiable individuals to third parties, but we may provide anonymised statistical data to them for research and survey purposes. We may also use such information to help advertisers reach the kind of audience they want to target (for example, those looking working in the education sector). We may make use of the personal data we have collected from you to enable us to comply with our advertisers' wishes by displaying their advertisement to that target audience.
              </p>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Disclosure Of Your Information</h2>
              
              <p className="text-muted-foreground mb-4">6.1 We may disclose your personal information to third parties:</p>
              
              <p className="text-muted-foreground mb-4">
                6.2 if we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our Terms and other agreements; or to protect the rights, property, or safety of Gen Z Financial Solutions Limited, our users, or others;
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                6.2.1 including insurance and life assurance companies who provide quotes and/or cover to you and to reinsurance companies.
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                6.2.2 to third parties as part of a due diligence exercise or sales process connected with Gen Z Financial Solutions Limited.
              </p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Security</h2>
              
              <p className="text-muted-foreground mb-4">
                We take your online security very seriously and this Website has security measures in place to protect the loss, misuse and alteration of the information under our control. However, as no data transmission over the Internet can be guaranteed as 100% secure, we cannot ensure or warrant the security of any information you transmit to us and you transfer the data at your own risk. We endeavour to use appropriate security measures.
              </p>

              {/* Section 8 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Cookies</h2>
              
              <p className="text-muted-foreground mb-4">
                8.1 We may collect information about your computer, including where available your IP address, operating system and browser type, for system administration, to report aggregate information to our advertisers to record session information and/or to assist you in answering questions in connection with the quotation process. This may in some instances only be statistical data about how you browse our Website.
              </p>
              
              <p className="text-muted-foreground mb-4">
                8.2 For the same reason, we may obtain information about your Website usage by using a cookie file which is stored on the hard drive of your computer. Cookies contain information that is transferred to your computer's hard drive. Cookies help us to improve our Website and to deliver a better and more personalised service. They enable us:
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                8.2.1 to estimate usage numbers and patterns;
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                8.2.2 to store information about your preferences, and so allow us to customise our Website according to your individual interests; and
              </p>
              
              <p className="text-muted-foreground mb-4 pl-4">
                8.2.3 to recognise you when you return to the Website.
              </p>
              
              <p className="text-muted-foreground mb-4">8.3 The following cookies are used in the Website:</p>
              
              <div className="bg-muted/50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                <p className="text-muted-foreground text-sm">
                  Google Analytics is a free service offered by Google that generates detailed statistics about the visitors to a website. We use it to track how users navigate through our website e.g. what pages are performing well/badly, what browsers perform best, the average time a person spends on our website etc.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-foreground mb-2">Google Adwords</h4>
                <p className="text-muted-foreground text-sm">
                  Google Adwords Conversion Tracking allows us to determine our best performing Adwords campaigns. The conversion tracking involves placing a cookie on a user's computer when he/she clicks on an ad. Then, if the user clicks on your ad and reaches one of your conversion pages, a successful conversion is recorded.
                </p>
              </div>
              
              <p className="text-muted-foreground mb-4">
                8.4 You may refuse to accept or disable cookies by activating the setting on your browser which allows you to refuse the setting of cookies. However, if you select this setting you may be unable to access certain parts of the Website or unable to avail of our services. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you log on to the Website.
              </p>
              
              <p className="text-muted-foreground mb-4">
                8.5 For further information on cookies and how you can adjust settings in your browser, click 'HELP' on your browser or visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.allaboutcookies.org</a>.
              </p>
              
              <p className="text-muted-foreground mb-4">
                8.6 If you have any queries about our cookies please contact us at <a href="mailto:hello@pension-advice.ie" className="text-accent hover:underline">hello@pension-advice.ie</a>
              </p>

              {/* Section 9 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Your Rights</h2>
              
              <p className="text-muted-foreground mb-4">
                9.1 You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by emailing us at <a href="mailto:hello@pension-advice.ie" className="text-accent hover:underline">hello@pension-advice.ie</a>
              </p>
              
              <p className="text-muted-foreground mb-4">
                9.2 The Website may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.
              </p>

              {/* Section 10 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Access To Information</h2>
              
              <p className="text-muted-foreground mb-4">
                You have the right to request a copy of the information held by us about you. We may charge a fee for this which will not exceed €6.35. You also have the right to access your data, have changed any inaccuracies in the details we hold about you, the right to object to the use of your data and the right to block any specific uses of your data, by means of a request in writing to Suite 2, Block 8, Dunshaughlin Business Park, Dunshaughlin, A85 EE98, Ireland or by emailing <a href="mailto:hello@pension-advice.ie" className="text-accent hover:underline">hello@pension-advice.ie</a>
              </p>

              {/* Section 11 */}
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">11. Contact</h2>
              
              <p className="text-muted-foreground mb-4">
                Questions, comments and requests regarding this Privacy Statement are welcomed and should be addressed to Gen Z Financial Solutions Limited, Suite 2, Block 8, Dunshaughlin Business Park, Dunshaughlin, A85 EE98, Ireland or by emailing <a href="mailto:hello@pension-advice.ie" className="text-accent hover:underline">hello@pension-advice.ie</a>
              </p>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyStatement;
