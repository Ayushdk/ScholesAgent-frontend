import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight, BarChart3, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-100 w-100 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Financial Analytics Tool</span>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up">
            Options Pricing,{" "}
            <span className="text-primary">Simplified.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl animate-fade-in-up animation-delay-100">
            Accurate Black-Scholes pricing with real market data.
            Calculate call and put option prices instantly with
            interactive visualizations.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-200">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/calculator">
                Try Calculator
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto bg-transparent"
            >
              <Link to="/graphs">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Graphs
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8 animate-fade-in-up animation-delay-300">
            <div>
              <div className="text-2xl font-bold text-foreground sm:text-3xl">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Stocks Supported
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-foreground sm:text-3xl">
                Real-time
              </div>
              <div className="text-sm text-muted-foreground">
                Market Data
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-accent sm:text-3xl">
                5+
              </div>
              <div className="text-sm text-muted-foreground">
                Chart Types
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
