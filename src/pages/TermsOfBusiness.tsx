import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfBusiness = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Business | Pension Advice Ireland</title>
        <meta name="description" content="Terms of Business for Gen Z Financial Solutions Limited trading as Pension Advice. Read our regulatory status, services, and client responsibilities." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
              Terms of Business
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none text-foreground">
              
              {/* Company Header */}
              <div className="bg-muted/50 p-6 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Gen Z Financial Solutions Limited</h2>
                <p className="text-muted-foreground mb-2"><strong>Trading as:</strong></p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Zed Insurance</li>
                  <li>Pension Advice</li>
                </ul>
                <p className="text-muted-foreground mb-1">Suite 2, Block 8, Dunshaughlin Business Park, Dunshaughlin, A85 EE98</p>
                <p className="text-muted-foreground mb-1">
                  Phone: <a href="tel:019125030" className="text-accent hover:underline">01 912 5030</a> | 
                  <a href="https://www.zed.ie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">www.zed.ie</a> | 
                  <a href="https://www.pensionadvice.ie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">www.pensionadvice.ie</a>
                </p>
                <p className="text-muted-foreground">Limited company number: 565470</p>
              </div>

              <p className="text-muted-foreground mb-6">
                <strong>Terms of Business of Gen Z Financial Solutions Limited t/a Zed Insurance.ie or pension advice.ie</strong>
              </p>

              <p className="text-muted-foreground mb-6">
                These Terms of Business set out the basis which Gen Z Financial Solutions Limited will provide insurance business services to you as a client of the firm and the respective duties and responsibilities of both the firm and you in relation to such services. Please take a few minutes to read through these and if you have any questions we will be happy to answer them.
              </p>

              <p className="text-muted-foreground mb-8">
                Zed Insurance / Pension Advice is an Insurance Broker and is a member of the Professional Insurance Brokers Association (PIBA) Membership number 201710. The full name and address of the firm and communication details are set out on this document.
              </p>

              {/* Table of Contents */}
              <div className="bg-section-light p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Contents</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#regulatory-status" className="text-accent hover:underline">Regulatory Status</a></li>
                  <li><a href="#commission" className="text-accent hover:underline">Commission and Charges</a></li>
                  <li><a href="#codes-of-conduct" className="text-accent hover:underline">Codes of Conduct</a></li>
                  <li><a href="#life-protection" className="text-accent hover:underline">Life & Protection, Pensions & Investments</a></li>
                  <li><a href="#our-services" className="text-accent hover:underline">Our Services</a></li>
                  <li><a href="#regular-reviews" className="text-accent hover:underline">Regular Reviews</a></li>
                  <li><a href="#conflicts-of-interest" className="text-accent hover:underline">Conflicts of Interest</a></li>
                  <li><a href="#disclosure" className="text-accent hover:underline">Disclosure of Information</a></li>
                  <li><a href="#legal-rights" className="text-accent hover:underline">Legal Rights</a></li>
                  <li><a href="#complaints" className="text-accent hover:underline">Complaints</a></li>
                  <li><a href="#appendix-1" className="text-accent hover:underline">Appendix 1</a></li>
                  <li><a href="#appendix-2" className="text-accent hover:underline">Appendix 2</a></li>
                </ul>
              </div>

              {/* Regulatory Status */}
              <h2 id="regulatory-status" className="text-2xl font-bold text-primary mt-10 mb-4">Regulatory Status</h2>
              <p className="text-muted-foreground mb-4">
                Zed Insurance / Pension Advice is regulated by the Central Bank of Ireland as an Insurance Intermediary. A copy of the firm's Statement of Authorised status from the Central Bank of Ireland is attached at Appendix 1.
              </p>
              <p className="text-muted-foreground mb-4">
                Our Central Bank number is <strong>C143985</strong> and you can verify our regulatory status by checking the live register of regulated entities at <a href="https://www.centralbank.ie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.centralbank.ie</a>.
              </p>
              <p className="text-muted-foreground mb-6">
                Zed Insurance / Pension Advice does not hold any shareholding in an insurer and likewise no insurer holds a shareholding in this firm.
              </p>

              {/* Commission and Charges */}
              <h2 id="commission" className="text-2xl font-bold text-primary mt-10 mb-4">Commission and Charges</h2>
              <p className="text-muted-foreground mb-4">
                Zed Insurance / Pension Advice may receive commission and other payments from the product producer to whom orders are transmitted. Where applicable in relation to certain life assurance and pension policies, summary details of these payments will be included in a product information document, which you are legally entitled to receive before an application for a product is completed. Full details will be included with your cooling-off letter.
              </p>
              <p className="text-muted-foreground mb-6">
                We may receive additional remuneration from product producers based on the volume of business placed or other arrangements. We may also receive renewal commissions while your policy remains inforce. All of these payments contribute to the overall cost of running our business and providing you with service on an ongoing basis.
              </p>

              {/* Codes of Conduct */}
              <h2 id="codes-of-conduct" className="text-2xl font-bold text-primary mt-10 mb-4">Codes of Conduct</h2>
              <p className="text-muted-foreground mb-6">
                Zed Insurance / Pension Advice is subject to the Consumer Protection Code, Minimum Competency Code and Fitness & Probity Standards which offer protection to consumers. These Codes can be found on the Central Bank's website <a href="https://www.centralbank.ie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.centralbank.ie</a>
              </p>

              {/* Life & Protection */}
              <h2 id="life-protection" className="text-2xl font-bold text-primary mt-10 mb-4">Life & Protection, Pensions & Investments</h2>
              <p className="text-muted-foreground mb-4">
                Life Assurance Companies provide products such as Life Cover, Serious Illness Cover, Pensions, investments and Income Protection. Depending on your individual circumstances, we may provide you with advice in relation to the nature of these products and which product may be suitable for your needs. You may however, wish to focus on our advice on areas of particular interest to you.
              </p>
              <p className="text-muted-foreground mb-6">
                We provide advice on a fair analysis basis as we can give you advice on all the products on offer from the Life Insurers listed in Appendix 2 and other Insurers who make information available to intermediaries. We can receive and transmit orders for such products on your behalf to the Insurers listed in Appendix 2.
              </p>

              {/* Our Services */}
              <h2 id="our-services" className="text-2xl font-bold text-primary mt-10 mb-4">Our Services</h2>
              <p className="text-muted-foreground mb-4">The services which the firm is authorised to provide are:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Advising you in relation to the nature of each of the products set out below and advising you as to which product is suitable for your needs.</li>
                <li>Identifying and selecting a suitable product producer.</li>
                <li>Receiving and transmitting orders on your behalf for a product(s) to one or more product producers listed in Appendix 2.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We provide advice on Life and Protection policies, such as life insurance/assurance, serious illness cover and Income Protection.
              </p>
              <p className="text-muted-foreground mb-6">
                We also provide advice on Pension & Investment policies from the product producers listed in Appendix 2.
              </p>

              {/* Regular Reviews */}
              <h2 id="regular-reviews" className="text-2xl font-bold text-primary mt-10 mb-4">Regular Reviews</h2>
              <p className="text-muted-foreground mb-6">
                It is in your best interest that you review, on a regular basis the products which we have arranged for you. As your circumstances change, your needs will change. You must advise us of those changes and request a review of the relevant policy so that we can ensure that you are provided with up to date advice and products best suited to your needs. Failure to contact us in relation to changes in your circumstances or failure to require a review may result in you having insufficient insurance cover and/or inappropriate investments.
              </p>

              {/* Conflicts of Interest */}
              <h2 id="conflicts-of-interest" className="text-2xl font-bold text-primary mt-10 mb-4">Conflicts of Interest</h2>
              <p className="text-muted-foreground mb-6">
                It is the policy of the firm to avoid any conflict of interest when providing business services to its clients. However, where an unavoidable conflict may arise, we will advise you of this in writing before proceeding to provide any business service. If you have not been advised of any such conflict, you are entitled to assume that none arises.
              </p>

              {/* Disclosure of Information */}
              <h2 id="disclosure" className="text-2xl font-bold text-primary mt-10 mb-4">Disclosure of Information</h2>
              <p className="text-muted-foreground mb-6">
                It is important to note that a failure to disclose material, correct, or complete information on a Proposal Form may result in an insurer rejecting a claim. Therefore, it is your responsibility to read and check that the information recorded on a Proposal Form is correct and if there are any errors you must notify us immediately. Otherwise, it will be taken that the information shown has been recorded correctly.
              </p>

              {/* Legal Rights */}
              <h2 id="legal-rights" className="text-2xl font-bold text-primary mt-10 mb-4">Legal Rights</h2>
              <p className="text-muted-foreground mb-4">
                Zed Insurance / Pension Advice will, if necessary, exercise its legal rights to receive any payments due to it, from clients for business services provided by it and to be reimbursed for any value obtained by it for clients arising from payments to it by clients which subsequently default.
              </p>
              <p className="text-muted-foreground mb-6">
                Insurance Providers may withdraw benefits on default of payments due under any products arranged for your benefit. Details of these provisions will be included in your product terms and conditions.
              </p>

              {/* Complaints */}
              <h2 id="complaints" className="text-2xl font-bold text-primary mt-10 mb-4">Complaints</h2>
              <p className="text-muted-foreground mb-4">
                Any complaint will be acknowledged within 5 business days. The complaint will be fully investigated by Zed Insurance and a full response will be provided to you. We will aim to provide this response not later than one month from receipt of your complaint.
              </p>
              <p className="text-muted-foreground mb-6">
                In the event that you remain dissatisfied with the firm's handling and response to your complaint, you are entitled to refer your complaint to the Financial Services Ombudsman or the Pensions Ombudsman. A full copy of our complaints procedure is available on request.
              </p>

              {/* Appendix 1 */}
              <h2 id="appendix-1" className="text-2xl font-bold text-primary mt-10 mb-4">Appendix 1</h2>
              <div className="bg-muted/50 p-6 rounded-xl mb-6">
                <p className="text-foreground font-semibold">Central Bank Certification of Gen Z Financial Solutions Limited</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Central Bank Reference Number: C143985
                </p>
              </div>

              {/* Appendix 2 */}
              <h2 id="appendix-2" className="text-2xl font-bold text-primary mt-10 mb-4">Appendix 2</h2>
              <div className="bg-muted/50 p-6 rounded-xl mb-6">
                <p className="text-foreground font-semibold mb-4">
                  Gen Z Financial Solutions Limited trading as Zed Insurance & Pension Advice
                </p>
                <p className="text-muted-foreground mb-4">We hold agencies with the following companies:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>New Ireland Assurance</li>
                  <li>Friends First Life</li>
                  <li>Zurich Life</li>
                  <li>Royal London</li>
                  <li>Irish Life plc</li>
                  <li>Aviva Life and Pension</li>
                  <li>One Network IFG</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsOfBusiness;
