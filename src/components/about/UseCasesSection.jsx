import {
  Building2,
  GraduationCap,
  TrendingUp,
  Shield,
  Briefcase,
  LineChart,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const useCases = [
  {
    icon: Building2,
    title: "Institutional Trading",
    description:
      "Investment banks and hedge funds use Black-Scholes as a foundation for their options trading desks, often with proprietary modifications.",
  },
  {
    icon: TrendingUp,
    title: "Market Making",
    description:
      "Market makers use the model to quote bid-ask spreads on options, ensuring they can manage risk while providing liquidity.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Corporations use options pricing to hedge currency, commodity, and interest rate risks in their operations.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description:
      "Portfolio managers use the Greeks (Delta, Gamma, Theta, Vega) derived from Black-Scholes to manage portfolio risk.",
  },
  {
    icon: LineChart,
    title: "Implied Volatility Analysis",
    description:
      "Traders reverse-engineer the model to extract implied volatility from market prices, providing insights into market expectations.",
  },
  {
    icon: GraduationCap,
    title: "Academic Research",
    description:
      "The model serves as a benchmark for developing and testing more sophisticated pricing models in quantitative finance.",
  },
];

export default function UseCasesSection() {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader>
        <CardTitle className="text-2xl">Real-World Applications</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="mb-6 text-muted-foreground">
          Despite its simplifying assumptions, the Black-Scholes model remains
          one of the most widely used tools in finance. Here are some key
          applications:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group rounded-lg border border-border/50 bg-background/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <useCase.icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-medium text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Historical Note */}
        <div className="mt-6 rounded-lg border border-border/50 bg-muted/20 p-4">
          <h4 className="font-medium text-foreground">Historical Note</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            The Black-Scholes model earned Myron Scholes and Robert Merton the
            1997 Nobel Prize in Economics (Fischer Black had passed away in 1995
            and was ineligible). The model transformed the options market and
            enabled the explosive growth of derivatives trading that continues
            today.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
