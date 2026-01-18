import { Card, CardContent } from "../ui/card";
import {
  Target,
  Zap,
  LineChart,
  Shield,
  Calculator,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precise Pricing",
    description:
      "Industry-standard Black-Scholes model for accurate European option valuations.",
  },
  {
    icon: Zap,
    title: "Real-Time Data",
    description:
      "Live stock prices and volatility calculations from real market data.",
  },
  {
    icon: LineChart,
    title: "Visual Analytics",
    description:
      "Interactive charts showing price history, returns, and volatility trends.",
  },
  {
    icon: Calculator,
    title: "Easy Calculator",
    description:
      "Input your parameters and get instant call and put option prices.",
  },
  {
    icon: Shield,
    title: "Educational Tool",
    description:
      "Learn how the Black-Scholes formula works step-by-step.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Docs",
    description:
      "Detailed documentation covering assumptions and use cases.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What is Black-Scholes?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The Black-Scholes model is a mathematical framework for pricing
            European-style options. Our platform makes it easy to understand and
            apply.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
