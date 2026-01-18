import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function FormulaSection() {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader>
        <CardTitle className="text-2xl">The Black–Scholes Formula</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          The Black–Scholes model, developed by Fischer Black, Myron Scholes, and
          Robert Merton in 1973, revolutionized the financial industry by
          providing a mathematical framework for pricing European-style options.
        </p>

        {/* Call Option Formula */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">
            Call Option Price
          </h3>

          <div className="rounded-xl border border-border/50 bg-background/50 p-6">
            <div className="font-mono text-center text-lg sm:text-xl text-foreground">
              <span className="text-accent">C</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-foreground">S</span>
              <span className="text-muted-foreground"> · </span>
              <span className="text-primary">N(d₁)</span>
              <span className="text-muted-foreground"> − </span>
              <span className="text-foreground">K</span>
              <span className="text-muted-foreground"> · </span>
              <span className="text-foreground">e</span>
              <sup className="text-sm text-muted-foreground">−rT</sup>
              <span className="text-muted-foreground"> · </span>
              <span className="text-primary">N(d₂)</span>
            </div>
          </div>
        </div>

        {/* Put Option Formula */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">
            Put Option Price
          </h3>

          <div className="rounded-xl border border-border/50 bg-background/50 p-6">
            <div className="font-mono text-center text-lg sm:text-xl text-foreground">
              <span className="text-destructive">P</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-foreground">K</span>
              <span className="text-muted-foreground"> · </span>
              <span className="text-foreground">e</span>
              <sup className="text-sm text-muted-foreground">−rT</sup>
              <span className="text-muted-foreground"> · </span>
              <span className="text-primary">N(−d₂)</span>
              <span className="text-muted-foreground"> − </span>
              <span className="text-foreground">S</span>
              <span className="text-muted-foreground"> · </span>
              <span className="text-primary">N(−d₁)</span>
            </div>
          </div>
        </div>

        {/* d1 and d2 */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">
            Where d₁ and d₂ are:
          </h3>

          <div className="rounded-xl border border-border/50 bg-background/50 p-6 space-y-4">
            <div className="font-mono text-center text-base sm:text-lg text-foreground">
              <span className="text-primary">d₁</span>
              <span className="text-muted-foreground">
                {" "}
                = [ln(S/K) + (r + σ²/2)T] / (σ√T)
              </span>
            </div>

            <div className="font-mono text-center text-base sm:text-lg text-foreground">
              <span className="text-primary">d₂</span>
              <span className="text-muted-foreground">
                {" "}
                = d₁ − σ√T
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
