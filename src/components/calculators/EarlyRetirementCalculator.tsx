import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Clock, Wallet, PiggyBank, AlertCircle, Info } from "lucide-react";
import CalculatorLeadForm from "./CalculatorLeadForm";
import { earlyRetirementConfig as config, sharedConstants } from "@/data/calculatorConfig";
import logo from "@/assets/logo.png";

const EarlyRetirementCalculator = () => {
  const [pensionValue, setPensionValue] = useState<number>(100000);
  const [currentAge, setCurrentAge] = useState("");
  const [accessAge, setAccessAge] = useState("");
  const [desiredIncome, setDesiredIncome] = useState(config.inputs.desiredIncome.defaultValue);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    grossedUpValue: number;
    taxFreeLumpSum: number;
    remainingFund: number;
    monthlyIncome: number;
    incomeGap: number;
  } | null>(null);

  const calculateEarlyRetirement = () => {
    const value = pensionValue || 0;
    const current = parseInt(currentAge) || 55;
    const access = accessAge === "now" ? current : parseInt(accessAge) || current;
    const desired = parseFloat(desiredIncome) || 30000;
    
    const { taxFreeLumpSumRate, sustainableWithdrawalRate, growthRate } = config.constants;
    
    // Calculate years to grow
    const yearsToGrow = Math.max(0, access - current);
    
    // Gross up pension value by 5% compounding each year
    let grossedUpValue = value;
    for (let i = 0; i < yearsToGrow; i++) {
      grossedUpValue = grossedUpValue * (1 + growthRate);
    }
    
    // Tax-free lump sum = 25% of grossed up amount
    const taxFreeLumpSum = grossedUpValue * taxFreeLumpSumRate;
    
    // Remaining fund = 75% of grossed up amount
    const remainingFund = grossedUpValue * (1 - taxFreeLumpSumRate);
    
    // Sustainable withdrawal at 5% annually, shown monthly
    const annualWithdrawal = remainingFund * sustainableWithdrawalRate;
    const monthlyIncome = Math.round(annualWithdrawal / 12);
    
    // Calculate income gap based on 5% sustainable income
    const incomeGap = desired - annualWithdrawal;
    
    setResults({
      grossedUpValue: Math.round(grossedUpValue),
      taxFreeLumpSum: Math.round(taxFreeLumpSum),
      remainingFund: Math.round(remainingFund),
      monthlyIncome,
      incomeGap: Math.round(incomeGap)
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
            <Clock className="w-5 h-5" />
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
                    inputMode="numeric"
                    value={pensionValue ? pensionValue.toString() : ''}
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
              <Label htmlFor="currentAge" className="text-sm font-medium text-foreground">
                {config.inputs.currentAge.label}
              </Label>
              <Input
                id="currentAge"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={config.inputs.currentAge.placeholder}
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value.replace(/[^0-9]/g, ''))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="accessAge" className="text-sm font-medium text-foreground">
                {config.inputs.accessAge.label}
              </Label>
              <Select value={accessAge} onValueChange={setAccessAge}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={config.inputs.accessAge.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {config.inputs.accessAge.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="desiredIncome" className="text-sm font-medium text-foreground">
                {config.inputs.desiredIncome.label}
              </Label>
              <Input
                id="desiredIncome"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={config.inputs.desiredIncome.placeholder}
                value={desiredIncome}
                onChange={(e) => setDesiredIncome(e.target.value.replace(/[^0-9]/g, ''))}
                className="mt-1"
              />
            </div>

            <Button 
              onClick={calculateEarlyRetirement} 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              disabled={!pensionValue || !currentAge || !accessAge}
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

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 rounded-lg p-4 text-center border border-green-200 dark:border-green-800">
                <Wallet className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <p className="text-xs text-green-700 dark:text-green-400 mb-1">{config.results.taxFreeLumpSumLabel}</p>
                <p className="text-xl font-bold text-green-700 dark:text-green-400">{formatCurrency(results?.taxFreeLumpSum || 0)}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800">
                <PiggyBank className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-blue-700 dark:text-blue-400 mb-1">{config.results.remainingFundLabel}</p>
                <p className="text-xl font-bold text-blue-700 dark:text-blue-400">{formatCurrency(results?.remainingFund || 0)}</p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{config.results.monthlyIncomeLabel}</span>
                <span className="font-semibold text-foreground">{formatCurrency(results?.monthlyIncome || 0)}/month</span>
              </div>
              {results?.incomeGap && results.incomeGap > 0 && (
                <div className="flex justify-between items-center text-amber-600 dark:text-amber-400">
                  <span className="text-sm">{config.results.incomeGapLabel}</span>
                  <span className="font-semibold">{formatCurrency(results.incomeGap)}/year</span>
                </div>
              )}
            </div>

            <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-700 dark:text-blue-300">
                {config.infoMessage}
              </p>
            </div>

            {/* Results with logo */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <img src={logo} alt="Pension Advice" className="h-12 w-auto mb-2" />
                  <h3 className="text-xl font-bold text-primary">Start your Pension Journey</h3>
                </div>
                
                <CalculatorLeadForm 
                  calculatorType="Early Retirement"
                  resultSummary={`Tax-free lump sum of ${formatCurrency(results?.taxFreeLumpSum || 0)} with ${formatCurrency(results?.monthlyIncome || 0)}/month sustainable income`}
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

export default EarlyRetirementCalculator;
