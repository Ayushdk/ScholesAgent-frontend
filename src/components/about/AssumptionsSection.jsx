import { AlertCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const assumptions = [
  {
    id: "log-normal",
    title: "Log-Normal Distribution",
    description:
      "The model assumes that stock prices follow a log-normal distribution, meaning the logarithm of stock prices is normally distributed. This implies that stock prices cannot go below zero and that returns are symmetric around the mean.",
    limitation:
      "In reality, stock returns often exhibit fat tails and skewness, leading to more extreme movements than predicted.",
  },
  {
    id: "no-dividends",
    title: "No Dividends",
    description:
      "The basic Black-Scholes model assumes the underlying stock pays no dividends during the life of the option.",
    limitation:
      "Most stocks pay dividends, which affects option pricing.",
  },
  {
    id: "european-style",
    title: "European-Style Options Only",
    description:
      "The formula applies only to European options, which can only be exercised at expiration.",
    limitation:
      "Many traded options are American-style.",
  },
  {
    id: "constant-volatility",
    title: "Constant Volatility",
    description:
      "Volatility is assumed constant throughout the option's life.",
    limitation:
      "Volatility varies in real markets.",
  },
  {
    id: "risk-free-rate",
    title: "Constant Risk-Free Rate",
    description:
      "Risk-free interest rate is assumed constant.",
    limitation:
      "Interest rates fluctuate in practice.",
  },
  {
    id: "efficient-markets",
    title: "Efficient Markets",
    description:
      "Markets are assumed frictionless and arbitrage-free.",
    limitation:
      "Transaction costs and liquidity exist in real markets.",
  },
];

export default function AssumptionsSection() {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader>
        <CardTitle className="text-2xl">Model Assumptions</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            Understanding these assumptions is crucial for properly applying the
            model. Real-world deviations can lead to pricing errors.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {assumptions.map((a) => (
            <AccordionItem key={a.id} value={a.id}>
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-medium">{a.title}</span>
              </AccordionTrigger>

              <AccordionContent className="space-y-3">
                <p className="text-muted-foreground">{a.description}</p>

                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3">
                  <p className="text-sm">
                    <span className="font-medium text-destructive">
                      Limitation:{" "}
                    </span>
                    <span className="text-muted-foreground">
                      {a.limitation}
                    </span>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
