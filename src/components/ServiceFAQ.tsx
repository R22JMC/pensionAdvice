import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  faqs: FAQ[];
}

const ServiceFAQ = ({ title, faqs }: ServiceFAQProps) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-custom px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-green text-white font-medium text-sm mb-4">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{title}</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-lg data-[state=open]:border-accent/20 transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 [&[data-state=open]>svg]:text-accent">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;