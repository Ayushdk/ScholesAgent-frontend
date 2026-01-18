import { useEffect, useState } from "react";
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  DollarSign,
  Percent,
  Clock,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { getSymbols, calculateOption } from "../../services/api";

export default function CalculatorForm() {
  const [symbols, setSymbols] = useState([]);
  const [form, setForm] = useState({
    symbol: "AAPL",
    strike: "",
    maturity: "",
    rate: "5",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load symbols from Django
  useEffect(() => {
    getSymbols().then((res) => setSymbols(res));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const res = await calculateOption({
        symbol: form.symbol,
        strike: form.strike,
        maturity: form.maturity,
        rate: form.rate,
      });
      setResult(res);
    } catch (err) {
      alert("Calculation failed");
    }
    setLoading(false);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Input */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Input Parameters
          </CardTitle>
          <CardDescription>
            Enter parameters for Black–Scholes calculation
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Symbol */}
          <div className="space-y-2">
            <Label>Stock Symbol</Label>
            <Select
              value={form.symbol}
              onValueChange={(v) => setForm({ ...form, symbol: v })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {symbols.map((s) => (
                  <SelectItem key={s.symbol} value={s.symbol}>
                    {s.symbol} — {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Strike */}
          <div className="space-y-2">
            <Label>Strike Price</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                name="strike"
                value={form.strike}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          {/* Maturity */}
          <div className="space-y-2">
            <Label>Time to Maturity (years)</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                name="maturity"
                value={form.maturity}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          {/* Rate */}
          <div className="space-y-2">
            <Label>Risk-Free Rate (%)</Label>
            <div className="relative">
              <Percent className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                name="rate"
                value={form.rate}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          <Button onClick={handleCalculate} disabled={loading}>
            {loading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Calculating
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-4 w-4" />
                Calculate
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Results</CardTitle>
        </CardHeader>

        <CardContent>
          {result ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  Stock Price: ${result.stock_price}
                </div>
                <div className="p-4 border rounded-lg">
                  Volatility: {result.volatility}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-accent/10 rounded-xl">
                  <TrendingUp /> Call: ${result.call_price}
                </div>
                <div className="p-6 bg-destructive/10 rounded-xl">
                  <TrendingDown /> Put: ${result.put_price}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground text-center">
              Enter values and calculate
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
