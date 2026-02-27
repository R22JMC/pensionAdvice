import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CalculatorLeadForm from "./CalculatorLeadForm";
import { pensionReviewConfig as config, sharedConstants } from "@/data/calculatorConfig";
import logo from "@/assets/logo.png";

const InputWithTooltip = ({ label, tooltip, children }: { label: string; tooltip?: string; children: React.ReactNode }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs max-w-xs">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
    {children}
  </div>
);

const PensionReviewCalculator = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [expectedGrowth, setExpectedGrowth] = useState(config.inputs.expectedGrowth.defaultValue);
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [providerFees, setProviderFees] = useState(config.inputs.providerFees.defaultValue);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    estimatedFund: number;
    totalContributions: number;
    totalGrowth: number;
    growthPercentage: number;
    taxFreeLumpSum: number;
    remainingFundForARF: number;
    monthlyIncome: number;
    totalARFPayments: number;
  } | null>(null);

  const calculateProjection = () => {
    const value = parseFloat(currentValue) || 0;
    const age = parseInt(currentAge) || 0;
    const retirement = parseInt(retirementAge) || 65;
    const growth = parseFloat(expectedGrowth) / 100 || 0.05;
    const monthly = parseFloat(monthlyContribution) || 0;
    const fees = parseFloat(providerFees) / 100 || 0;
    
    const yearsToRetirement = Math.max(0, retirement - age);
    const netGrowthRate = growth - fees;
    
    // Calculate future value with compound interest and monthly contributions
    let futureValue = value;
    const annualContribution = monthly * 12;
    
    for (let i = 0; i < yearsToRetirement; i++) {
      futureValue = (futureValue + annualContribution) * (1 + netGrowthRate);
    }
    
    // Calculate total contributions
    const totalContributions = value + (annualContribution * yearsToRetirement);
    const totalGrowth = futureValue - totalContributions;
    const growthPercentage = totalContributions > 0 ? (totalGrowth / totalContributions) * 100 : 0;
    
    // ARF calculations
    const { taxFreeLumpSumRate, arfWithdrawalRate, retirementYears } = config.constants;
    const taxFreeLumpSum = futureValue * taxFreeLumpSumRate;
    const remainingFundForARF = futureValue - taxFreeLumpSum;
    const annualIncome = remainingFundForARF * arfWithdrawalRate;
    const monthlyIncome = annualIncome / 12;
    const totalARFPayments = annualIncome * retirementYears;
    
    setResults({
      estimatedFund: Math.round(futureValue * 100) / 100,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalGrowth: Math.round(totalGrowth * 100) / 100,
      growthPercentage: Math.round(growthPercentage * 100) / 100,
      taxFreeLumpSum: Math.round(taxFreeLumpSum * 100) / 100,
      remainingFundForARF: Math.round(remainingFundForARF * 100) / 100,
      monthlyIncome: Math.round(monthlyIncome * 100) / 100,
      totalARFPayments: Math.round(totalARFPayments * 100) / 100,
    });
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(sharedConstants.locale, { 
      style: 'currency', 
      currency: sharedConstants.currency, 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(amount);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setResults(null);
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">{config.title}</h3>
        </div>
        <p className="text-primary-foreground/80 text-sm">
          {config.description}
        </p>
      </div>

      <div className="p-6">
        {!showResults ? (
          <div className="space-y-6">
            {/* Two-column grid for inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputWithTooltip label={config.inputs.currentValue.label} tooltip={config.inputs.currentValue.tooltip}>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">€</span>
                <Input
                    type="text"
                    inputMode="numeric"
                    placeholder={config.inputs.currentValue.placeholder}
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.target.value.replace(/[^0-9]/g, ''))}
                    className="pl-7"
                  />
                </div>
              </InputWithTooltip>

              <InputWithTooltip label={config.inputs.currentAge.label} tooltip={config.inputs.currentAge.tooltip}>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder={config.inputs.currentAge.placeholder}
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value.replace(/[^0-9]/g, ''))}
                />
              </InputWithTooltip>

              <InputWithTooltip label={config.inputs.retirementAge.label} tooltip={config.inputs.retirementAge.tooltip}>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder={config.inputs.retirementAge.placeholder}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(e.target.value.replace(/[^0-9]/g, ''))}
                />
              </InputWithTooltip>

              <InputWithTooltip label={config.inputs.expectedGrowth.label} tooltip={config.inputs.expectedGrowth.tooltip}>
                <Select value={expectedGrowth} onValueChange={setExpectedGrowth}>
                  <SelectTrigger>
                    <SelectValue placeholder={config.inputs.expectedGrowth.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {config.inputs.expectedGrowth.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </InputWithTooltip>

              <InputWithTooltip label={config.inputs.monthlyContribution.label} tooltip={config.inputs.monthlyContribution.tooltip}>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">€</span>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder={config.inputs.monthlyContribution.placeholder}
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value.replace(/[^0-9]/g, ''))}
                    className="pl-7"
                  />
                </div>
              </InputWithTooltip>

              <InputWithTooltip label={config.inputs.providerFees.label} tooltip={config.inputs.providerFees.tooltip}>
                <Select value={providerFees} onValueChange={setProviderFees}>
                  <SelectTrigger>
                    <SelectValue placeholder={config.inputs.providerFees.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {config.inputs.providerFees.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </InputWithTooltip>
            </div>

            <Button 
              onClick={calculateProjection} 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              disabled={!currentValue || !currentAge || !retirementAge}
            >
              {config.buttonText}
            </Button>

            {/* Quote section */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm italic text-muted-foreground">
                {config.quote}
              </p>
              <p className="text-sm font-medium text-foreground mt-2">
                — {config.quoteAuthor}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Button 
              variant="outline" 
              onClick={resetCalculator}
              className="w-full"
            >
              Recalculate
            </Button>

            {/* Pension Projection Results */}
            <div className="bg-muted/30 rounded-xl p-5 border border-border">
              <h4 className="text-lg font-bold text-center text-foreground mb-4">
                {config.results.projectionTitle}
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.estimatedFundLabel}:</span>
                  <span className="font-bold text-primary">{formatCurrency(results?.estimatedFund || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.totalContributionsLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.totalContributions || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.totalGrowthLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.totalGrowth || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">{config.results.growthPercentageLabel}:</span>
                  <span className="font-semibold text-foreground">{results?.growthPercentage.toFixed(2)}%</span>
                </div>
              </div>
            </div>

            {/* ARF Income Results */}
            <div className="bg-muted/30 rounded-xl p-5 border border-border">
              <h4 className="text-lg font-bold text-center text-foreground mb-2">
                {config.results.incomeTitle}
              </h4>
              <p className="text-xs text-center text-muted-foreground mb-4">
                {config.results.incomeDescription}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.taxFreeLumpSumLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.taxFreeLumpSum || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.remainingFundLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.remainingFundForARF || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.monthlyIncomeLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.monthlyIncome || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">{config.results.totalPaymentsLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.totalARFPayments || 0)}</span>
                </div>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  {config.results.paymentsNote}
                </p>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <img src={logo} alt="Pension Advice" className="h-12 w-auto mb-2" />
                  <h3 className="text-xl font-bold text-primary">Start your Pension Journey</h3>
                </div>
                
                <CalculatorLeadForm 
                  calculatorType="Pension Review"
                  resultSummary={`Estimated fund of ${formatCurrency(results?.estimatedFund || 0)} with ${formatCurrency(results?.monthlyIncome || 0)}/month ARF income`}
                  hideHeader={true}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PensionReviewCalculator;
