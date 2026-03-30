import { useState } from "react";
import { Link } from "react-router-dom";
import { FileSearch, KeyRound, Signpost, Hourglass, ArrowLeftRight, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import PensionReviewCalculator from "./calculators/PensionReviewCalculator";
import EarlyRetirementCalculator from "./calculators/EarlyRetirementCalculator";
import DirectorsPensionCalculator from "./calculators/DirectorsPensionCalculator";
import RedundancyCalculator from "./calculators/RedundancyCalculator";
import PensionTransferCalculator from "./calculators/PensionTransferCalculator";
import UKPensionTransferCalculator from "./calculators/UKPensionTransferCalculator";

const calculatorOptions = [
  { 
    id: "review", 
    label: "Pension Review",
    icon: FileSearch
  },
  { 
    id: "early", 
    label: "Early Retirement",
    icon: KeyRound
  },
  { 
    id: "directors", 
    label: "Directors",
    icon: Signpost
  },
  { 
    id: "redundancy", 
    label: "Redundancy",
    icon: Hourglass
  },
  { 
    id: "transfer", 
    label: "Consolidation",
    icon: ArrowLeftRight
  },
  { 
    id: "uk", 
    label: "UK Transfer",
    icon: Globe
  }
];

const CalculatorSection = () => {
  const [activeCalculator, setActiveCalculator] = useState("review");

  const renderCalculator = () => {
    switch (activeCalculator) {
      case "review":
        return <PensionReviewCalculator />;
      case "early":
        return <EarlyRetirementCalculator />;
      case "directors":
        return <DirectorsPensionCalculator />;
      case "redundancy":
        return <RedundancyCalculator />;
      case "transfer":
        return <PensionTransferCalculator />;
      case "uk":
        return <UKPensionTransferCalculator />;
      default:
        return <PensionReviewCalculator />;
    }
  };

  return (
    <section id="calculators" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* <span className="inline-block text-accent font-semibold text-sm mb-3 tracking-wider uppercase">
            Pension Tools
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pension Calculators
          </h2>
          <p className="text-lg text-muted-foreground">
            Use our calculators to explore your pension options. Get instant estimates and speak with our team about your personalised results.
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {calculatorOptions.map((calc) => {
            const Icon = calc.icon;
            const isActive = activeCalculator === calc.id;
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-card text-foreground hover:bg-muted border border-border"
                )}
              >
                <Icon className="w-4 h-4" />
                {calc.label}
              </button>
            );
          })}
        </div>

        {/* Active Calculator */}
        <div className="max-w-xl mx-auto">
          {renderCalculator()}
        </div>

        {/* Trust indicators + CTA */}
        <div className="mt-10 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            These calculators provide estimates only. For personalised advice, speak with our team.
          </p>
          <Button asChild variant="outline" className="group">
            <Link to="/resources">
              View All Resources
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;