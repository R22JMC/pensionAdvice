import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, RefreshCw, Info, TrendingUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CalculatorLeadForm from "./CalculatorLeadForm";
import { ukPensionTransferConfig as config, sharedConstants } from "@/data/calculatorConfig";
import logo from "@/assets/logo.png";

const UKPensionTransferCalculator = () => {
  const [pensionValueGBP, setPensionValueGBP] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [yearLeftUK, setYearLeftUK] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [exchangeRate, setExchangeRate] = useState<number>(config.constants.fallbackExchangeRate);
  const [rateLastUpdated, setRateLastUpdated] = useState<string>("");
  const [isLoadingRate, setIsLoadingRate] = useState(true);
  const [results, setResults] = useState<{
    gbpValue: number;
    eurValue: number;
    taxFreeLumpSum: number;
    remainingFundForARF: number;
    annualIncome: number;
    monthlyIncome: number;
  } | null>(null);

  // Fetch live exchange rate on mount
  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    setIsLoadingRate(true);
    try {
      // Using exchangerate-api.com free tier (no API key required)
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/GBP');
      if (!response.ok) throw new Error('Failed to fetch exchange rate');
      
      const data = await response.json();
      const eurRate = data.rates.EUR;
      
      if (eurRate && typeof eurRate === 'number') {
        setExchangeRate(eurRate);
        setRateLastUpdated(new Date().toLocaleString('en-IE', {
          dateStyle: 'medium',
          timeStyle: 'short'
        }));
      }
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      // Keep the fallback rate
      setRateLastUpdated('Using fallback rate');
    } finally {
      setIsLoadingRate(false);
    }
  };

  const calculateTransfer = () => {
    const valueGBP = parseFloat(pensionValueGBP) || 0;
    
    // Convert to EUR using live rate
    const eurValue = valueGBP * exchangeRate;
    
    // ARF calculations
    const { taxFreeLumpSumRate, arfWithdrawalRate } = config.constants;
    const taxFreeLumpSum = eurValue * taxFreeLumpSumRate;
    const remainingFundForARF = eurValue - taxFreeLumpSum;
    const annualIncome = remainingFundForARF * arfWithdrawalRate;
    const monthlyIncome = annualIncome / 12;
    
    setResults({
      gbpValue: valueGBP,
      eurValue: Math.round(eurValue * 100) / 100,
      taxFreeLumpSum: Math.round(taxFreeLumpSum * 100) / 100,
      remainingFundForARF: Math.round(remainingFundForARF * 100) / 100,
      annualIncome: Math.round(annualIncome * 100) / 100,
      monthlyIncome: Math.round(monthlyIncome * 100) / 100,
    });
    setShowResults(true);
  };

  const formatCurrency = (amount: number, currency: string = 'EUR') => {
    return new Intl.NumberFormat(sharedConstants.locale, { 
      style: 'currency', 
      currency, 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(amount);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setResults(null);
  };

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

  // Generate year options
  const yearOptions = Array.from({ length: 40 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { value: year.toString(), label: year.toString() };
  });

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">{config.title}</h3>
        </div>
        <p className="text-primary-foreground/80 text-sm">
          {config.description}
        </p>
      </div>

      <div className="p-6">
        {/* Live Exchange Rate Display */}
        <div className="bg-muted/50 rounded-lg p-3 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Live Rate:</span>
            <span className="font-semibold text-foreground">
              £1 = €{exchangeRate.toFixed(4)}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchExchangeRate}
            disabled={isLoadingRate}
            className="h-8 px-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLoadingRate ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {!showResults ? (
          <div className="space-y-6">
            {/* Two-column grid for inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputWithTooltip label={config.inputs.pensionValueGBP.label} tooltip={config.inputs.pensionValueGBP.tooltip}>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">£</span>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder={config.inputs.pensionValueGBP.placeholder}
                    value={pensionValueGBP ? Number(pensionValueGBP).toLocaleString('en-IE') : ''}
                    onChange={(e) => setPensionValueGBP(e.target.value.replace(/[^0-9]/g, ''))}
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

              <div className="md:col-span-2">
                <InputWithTooltip label={config.inputs.yearLeftUK.label} tooltip={config.inputs.yearLeftUK.tooltip}>
                  <Select value={yearLeftUK} onValueChange={setYearLeftUK}>
                    <SelectTrigger>
                      <SelectValue placeholder={config.inputs.yearLeftUK.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {yearOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </InputWithTooltip>
              </div>
            </div>

            <Button 
              onClick={calculateTransfer} 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              disabled={!pensionValueGBP || !currentAge || !yearLeftUK}
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

            {/* Currency Conversion Results */}
            <div className="bg-muted/30 rounded-xl p-5 border border-border">
              <h4 className="text-lg font-bold text-center text-foreground mb-4">
                Your UK Pension in Euro
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.gbpValueLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.gbpValue || 0, 'GBP')}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.exchangeRateLabel}:</span>
                  <span className="font-semibold text-foreground">£1 = €{exchangeRate.toFixed(4)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">{config.results.eurValueLabel}:</span>
                  <span className="font-bold text-primary text-lg">{formatCurrency(results?.eurValue || 0)}</span>
                </div>
              </div>
            </div>

            {/* ARF Income Results */}
            <div className="bg-muted/30 rounded-xl p-5 border border-border">
              <h4 className="text-lg font-bold text-center text-foreground mb-2">
                Retirement Income (ARF)
              </h4>
              <p className="text-xs text-center text-muted-foreground mb-4">
                At retirement, you could take a tax-free lump sum and use the remainder for an ARF that pays a monthly income.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.taxFreeLumpSumLabel}:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">{formatCurrency(results?.taxFreeLumpSum || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{config.results.remainingFundLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.remainingFundForARF || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border bg-green-50 dark:bg-green-950/30 -mx-5 px-5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">{config.results.monthlyIncomeLabel}:</span>
                  </div>
                  <span className="font-bold text-green-700 dark:text-green-300 text-lg">{formatCurrency(results?.monthlyIncome || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">{config.results.annualIncomeLabel}:</span>
                  <span className="font-semibold text-foreground">{formatCurrency(results?.annualIncome || 0)}</span>
                </div>
              </div>
              {rateLastUpdated && (
                <p className="text-xs text-center text-muted-foreground pt-3 mt-3 border-t border-border">
                  {config.results.lastUpdatedLabel}: {rateLastUpdated}
                </p>
              )}
            </div>

            {/* Info Message */}
            <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-700 dark:text-blue-300">
                {config.infoMessage}
              </p>
            </div>

            {/* Lead Form */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <img src={logo} alt="Pension Advice" className="h-12 w-auto mb-2" />
                  <h3 className="text-xl font-bold text-primary">Start your Pension Journey</h3>
                </div>
                
                <CalculatorLeadForm 
                  calculatorType="UK Pension Transfer"
                  resultSummary={`UK pension of ${formatCurrency(results?.gbpValue || 0, 'GBP')} = ${formatCurrency(results?.eurValue || 0)} with ${formatCurrency(results?.monthlyIncome || 0)}/month ARF income`}
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

export default UKPensionTransferCalculator;
