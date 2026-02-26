import { Check, ChevronRight } from "lucide-react";

interface ContentBlock {
  title: string;
  content: string;
  bullets?: string[];
  note?: string;
}

interface ServiceContentSectionProps {
  blocks: ContentBlock[];
}

const ServiceContentSection = ({ blocks }: ServiceContentSectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background relative">
      <div className="container-custom px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blocks.map((block, index) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:shadow-xl hover:border-accent/20 transition-all duration-500">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {block.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {block.content}
                  </p>
                  
                  {block.bullets && (
                    <ul className="space-y-3">
                      {block.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {block.note && (
                    <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground italic">{block.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContentSection;