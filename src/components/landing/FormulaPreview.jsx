import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function FormulaPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="relative overflow-hidden border-border/50 bg-linear-to-br from-card to-card/80">
            {/* Decorative gradients */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

            <CardContent className="relative p-8 sm:p-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  The Black-Scholes Formula
                </h2>

                <p className="mt-2 text-muted-foreground">
                  The mathematical foundation of options pricing
                </p>

                {/* Formula */}
                <div className="mt-8 rounded-xl border border-border/50 bg-background/50 p-6 sm:p-8">
                  <div className="font-mono text-lg sm:text-xl md:text-2xl text-foreground">
                    <span className="text-accent">C</span>
                    <span className="text-muted-foreground"> = </span>
                    <span className="text-foreground">S</span>
                    <span className="text-muted-foreground"> · </span>
                    <span className="text-primary">N(d₁)</span>
                    <span className="text-muted-foreground"> - </span>
                    <span className="text-foreground">K</span>
                    <span className="text-muted-foreground"> · </span>
                    <span className="text-foreground">e</span>
                    <sup className="text-sm text-muted-foreground">-rT</sup>
                    <span className="text-muted-foreground"> · </span>
                    <span className="text-primary">N(d₂)</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
                  <Legend label="Call Price" symbol="C" className="text-accent" />
                  <Legend label="Stock Price" symbol="S" />
                  <Legend label="Strike Price" symbol="K" />
                  <Legend label="Risk-Free Rate" symbol="r" />
                  <Legend label="Time to Expiry" symbol="T" />
                  <Legend label="Normal CDF" symbol="N()" className="text-primary" />
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/about">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Legend({ symbol, label, className = "text-foreground" }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className={`font-mono ${className}`}>{symbol}</span>
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}
