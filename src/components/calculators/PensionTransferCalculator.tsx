import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ArrowRightLeft, TrendingUp, PiggyBank, AlertCircle, Info } from "lucide-react";
import CalculatorLeadForm from "./CalculatorLeadForm";
import { pensionTransferConfig as config, sharedConstants } from "@/data/calculatorConfig";
import logo from "@/assets/logo.png";

const PensionTransferCalculator = () => {
  const [numberOfPensions, setNumberOfPensions] = useState("");
  const [totalValue, setTotalValue] = useState<number>(100000);
  const [averageFees, setAverageFees] = useState(config.inputs.averageFees.defaultValue);
  const [yearsToRetirement, setYearsToRetirement] = useState("");
  const [riskLevel, setRiskLevel] = useState(config.inputs.riskLevel.defaultValue);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    currentProjection: number;
    consolidatedProjection: number;
    potentialSavings: number;
    annualFeeSaving: number;
    yearsToRetirement: number;
  } | null>(null);

  const getRiskGrowthRate = (risk: string): number => {
    const option = config.inputs.riskLevel.options.find(o => o.value === risk);
    return option?.growthRate || 0.05;
  };

  const calculateTransfer = () => {
    const pensions = parseInt(numberOfPensions) || 1;
    const value = totalValue || 0;
    const fees = parseFloat(averageFees) || 1.25;
    const years = Math.max(0, parseInt(yearsToRetirement) || 0);
    
    const grossGrowthRate = getRiskGrowthRate(riskLevel);
    const { consolidatedFeeRate, adminFeePerPension } = config.constants;
    const currentNetGrowth = grossGrowthRate - (fees / 100);
    const consolidatedNetGrowth = grossGrowthRate - consolidatedFeeRate;
    
    // Additional admin fee savings from consolidation
    const adminFeeSavings = (pensions - 1) * adminFeePerPension * years;
    
    let currentProjection = value;
    let consolidatedProjection = value;
    
    for (let i = 0; i < years; i++) {
      currentProjection = currentProjection * (1 + currentNetGrowth);
      consolidatedProjection = consolidatedProjection * (1 + consolidatedNetGrowth);
    }
    
    const annualFeeSaving = value * ((fees / 100) - consolidatedFeeRate);
    
    setResults({
      currentProjection: Math.round(currentProjection),
      consolidatedProjection: Math.round(consolidatedProjection + adminFeeSavings),
      potentialSavings: Math.round((consolidatedProjection + adminFeeSavings) - currentProjection),
      annualFeeSaving: Math.round(annualFeeSaving),
      yearsToRetirement: years
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
            <ArrowRightLeft className="w-5 h-5" />
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
              <Label htmlFor="numberOfPensions" className="text-sm font-medium text-foreground">
                {config.inputs.numberOfPensions.label}
              </Label>
              <Select value={numberOfPensions} onValueChange={setNumberOfPensions}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={config.inputs.numberOfPensions.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {config.inputs.numberOfPensions.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="totalValue" className="text-sm font-medium text-foreground">
                {config.inputs.totalValue.label}
              </Label>
              <div className="mt-2 space-y-3">
                <Slider
                  value={[totalValue]}
                  onValueChange={(values) => setTotalValue(values[0])}
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
                    value={totalValue ? totalValue.toString() : ''}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^0-9]/g, '');
                      setTotalValue(Number(raw) || 0);
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
              <Label htmlFor="averageFees" className="text-sm font-medium text-foreground">
                {config.inputs.averageFees.label}
              </Label>
              <Select value={averageFees} onValueChange={setAverageFees}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={config.inputs.averageFees.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {config.inputs.averageFees.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="yearsToRetirement" className="text-sm font-medium text-foreground">
                {config.inputs.yearsToRetirement.label}
              </Label>
              <Input
                id="yearsToRetirement"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={config.inputs.yearsToRetirement.placeholder}
                value={yearsToRetirement}
                onChange={(e) => setYearsToRetirement(e.target.value.replace(/[^0-9]/g, ''))}
                className="mt-1"
              />
              {yearsToRetirement && (
                <p className="text-xs text-muted-foreground mt-1">
                  Projection period: {parseInt(yearsToRetirement) || 0} year{(parseInt(yearsToRetirement) || 0) === 1 ? "" : "s"}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="riskLevel" className="text-sm font-medium text-foreground">
                {config.inputs.riskLevel.label}
              </Label>
              <Select value={riskLevel} onValueChange={setRiskLevel}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={config.inputs.riskLevel.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {config.inputs.riskLevel.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={calculateTransfer} 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              disabled={!numberOfPensions || !totalValue || !yearsToRetirement}
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
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">{config.results.keepSeparateLabel}</p>
                <p className="text-lg font-bold text-foreground">{formatCurrency(results?.currentProjection || 0)}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 text-center border border-green-200 dark:border-green-800">
                <p className="text-xs text-green-700 dark:text-green-400 mb-1">{config.results.consolidatedLabel}</p>
                <p className="text-lg font-bold text-green-700 dark:text-green-400">{formatCurrency(results?.consolidatedProjection || 0)}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-4 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">{config.results.projectedFinalFundLabel}</span>
              </div>
              <p className="text-2xl font-bold text-accent">{formatCurrency(results?.consolidatedProjection || 0)}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Based on {numberOfPensions} pension{parseInt(numberOfPensions) > 1 ? 's' : ''}, current value, AMC, risk level and a {results?.yearsToRetirement}-year projection period
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
              <PiggyBank className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{config.results.annualFeeLabel}</p>
                <p className="text-lg font-bold text-foreground">{formatCurrency(results?.annualFeeSaving || 0)}/year</p>
              </div>
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
                  <h3 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">Start your Pension Journey</h3>
                </div>
                
                <CalculatorLeadForm 
                  calculatorType="Pension Transfer/Consolidation"
                  resultSummary={`${formatCurrency(results?.consolidatedProjection || 0)} projected final fund value over ${results?.yearsToRetirement || 0} years`}
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

export default PensionTransferCalculator;
