import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Users, TrendingUp, AlertTriangle, Info } from "lucide-react";
import CalculatorLeadForm from "./CalculatorLeadForm";
import { redundancyConfig as config, sharedConstants } from "@/data/calculatorConfig";
import logo from "@/assets/logo.png";

const RedundancyCalculator = () => {
  const [age, setAge] = useState("");
  const [serviceYears, setServiceYears] = useState("");
  const [annualSalary, setAnnualSalary] = useState("");
  const [pensionValue, setPensionValue] = useState<number>(100000);
  const [retirementAge, setRetirementAge] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    projectedValue: number;
    taxFreeLoss: number;
    yearsToRetirement: number;
    isMaxCapped: boolean;
  } | null>(null);

  const calculateRedundancy = () => {
    const currentAge = parseInt(age) || 50;
    const retirement = parseInt(retirementAge) || 65;
    const pension = pensionValue || 0;
    
    const { growthRate, taxFreeLumpSumRate, maxTaxFreeLoss } = config.constants;
    
    // Calculate years to retirement
    const yearsToRetirement = Math.max(0, retirement - currentAge);
    
    // Gross up pension value by 5% per annum
    let projectedValue = pension;
    for (let i = 0; i < yearsToRetirement; i++) {
      projectedValue = projectedValue * (1 + growthRate);
    }
    
    // Calculate 25% tax-free cash that could be lost
    let taxFreeLoss = projectedValue * taxFreeLumpSumRate;
    
    // Cap at €200k max
    const isMaxCapped = taxFreeLoss > maxTaxFreeLoss;
    if (isMaxCapped) {
      taxFreeLoss = maxTaxFreeLoss;
    }
    
    setResults({
      projectedValue: Math.round(projectedValue),
      taxFreeLoss: Math.round(taxFreeLoss),
      yearsToRetirement,
      isMaxCapped
    });
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(sharedConstants.locale, { 
      style: 'currency', 
      currency: sharedConstants.currency, 
      maximumFractionDigits: 0 
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
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">{config.title}</h3>
        </div>
        <p className="text-primary-foreground/80 text-sm">
          {config.description}
        </p>
      </div>

      <div className="p-6">
        {!showResults ? (
          <div className="space-y-5">
            <div>
              <Label htmlFor="age" className="text-sm font-medium text-foreground">
                {config.inputs.age.label}
              </Label>
              <Input
                id="age"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={config.inputs.age.placeholder}
                value={age}
                onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ''))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="serviceYears" className="text-sm font-medium text-foreground">
                {config.inputs.serviceYears.label}
              </Label>
              <Input
                id="serviceYears"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={config.inputs.serviceYears.placeholder}
                value={serviceYears}
                onChange={(e) => setServiceYears(e.target.value.replace(/[^0-9]/g, ''))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="annualSalary" className="text-sm font-medium text-foreground">
                {config.inputs.annualSalary.label}
              </Label>
              <Input
                id="annualSalary"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={config.inputs.annualSalary.placeholder}
                value={annualSalary}
                onChange={(e) => setAnnualSalary(e.target.value.replace(/[^0-9]/g, ''))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="pensionValue" className="text-sm font-medium text-foreground">
                {config.inputs.pensionValue.label}
              </Label>
              <div className="mt-2 space-y-3">
                <Slider
                  value={[pensionValue]}
                  onValueChange={(values) => setPensionValue(values[0])}
                  min={10000}
                  max={2000000}
                  step={10000}
                  className="w-full"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">€</span>
                  <Input
                    type="text"
                    value={pensionValue.toLocaleString('en-IE')}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^0-9]/g, '');
                      setPensionValue(Number(raw) || 0);
                    }}
                    className="flex-1"
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>€10,000</span>
                  <span>€2,000,000</span>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="retirementAge" className="text-sm font-medium text-foreground">
                {config.inputs.retirementAge.label}
              </Label>
              <Select value={retirementAge} onValueChange={setRetirementAge}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={config.inputs.retirementAge.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {config.inputs.retirementAge.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={calculateRedundancy} 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              disabled={!age || !serviceYears || !retirementAge}
            >
              {config.buttonText}
            </Button>

            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <Info className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                {config.disclaimer}
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

            {/* Projected Value */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold text-blue-700 dark:text-blue-400">{config.results.projectedValueLabel}</span>
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">{formatCurrency(results?.projectedValue || 0)}</p>
              <p className="text-xs text-blue-600 dark:text-blue-500 mt-1">
                {formatCurrency(pensionValue)} grown at 5% over {results?.yearsToRetirement} years
              </p>
            </div>

            {/* Tax-Free Cash Loss Warning */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 rounded-lg p-4 border border-red-300 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="font-semibold text-red-700 dark:text-red-400">{config.results.taxFreeLossLabel}</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 mb-2">
                {config.results.lossWarning}
              </p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                -{formatCurrency(results?.taxFreeLoss || 0)}
              </p>
              <p className="text-xs text-red-500 dark:text-red-500 mt-2">
                25% of {formatCurrency(results?.projectedValue || 0)} = {formatCurrency(results?.taxFreeLoss || 0)}
              </p>
              {results?.isMaxCapped && (
                <p className="text-xs text-red-600 dark:text-red-400 mt-2 font-medium">
                  {config.results.maxCapNote}
                </p>
              )}
            </div>

            {/* Warning message */}
            <div className="flex items-start gap-2 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                  {config.infoMessage}
                </p>
              </div>
            </div>

            {/* Results with logo */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <img src={logo} alt="Pension Advice" className="h-12 w-auto mb-2" />
                  <h3 className="text-xl font-bold text-primary">Start your Pension Journey</h3>
                </div>
                
                <CalculatorLeadForm 
                  calculatorType="Redundancy & Pension"
                  resultSummary={`Potential tax-free cash loss of ${formatCurrency(results?.taxFreeLoss || 0)} if not handled correctly`}
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

export default RedundancyCalculator;
