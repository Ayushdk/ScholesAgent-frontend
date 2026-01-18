import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const variables = [
  {
    symbol: "S",
    name: "Spot Price",
    description:
      "The current market price of the underlying asset (stock).",
    example: "$182.52",
  },
  {
    symbol: "K",
    name: "Strike Price",
    description: "The price at which the option can be exercised.",
    example: "$180.00",
  },
  {
    symbol: "T",
    name: "Time to Maturity",
    description:
      "The time remaining until the option expires, expressed in years.",
    example: "0.5 years",
  },
  {
    symbol: "r",
    name: "Risk-Free Rate",
    description:
      "The theoretical rate of return on a risk-free investment.",
    example: "5%",
  },
  {
    symbol: "σ",
    name: "Volatility",
    description:
      "The standard deviation of the stock's returns, representing price uncertainty.",
    example: "24.5%",
  },
  {
    symbol: "N(x)",
    name: "Normal CDF",
    description:
      "The cumulative distribution function of the standard normal distribution.",
    example: "0.5 – 1.0",
  },
  {
    symbol: "C",
    name: "Call Price",
    description:
      "The fair market value of a call option (right to buy).",
    example: "$12.45",
  },
  {
    symbol: "P",
    name: "Put Price",
    description:
      "The fair market value of a put option (right to sell).",
    example: "$8.23",
  },
];

export default function VariablesTable() {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader>
        <CardTitle className="text-2xl">Variables Explained</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-hidden rounded-lg border border-border/50">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="font-semibold">Symbol</TableHead>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="hidden font-semibold sm:table-cell">
                  Description
                </TableHead>
                <TableHead className="text-right font-semibold">
                  Example
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {variables.map((v) => (
                <TableRow key={v.symbol}>
                  <TableCell className="font-mono font-semibold text-primary">
                    {v.symbol}
                  </TableCell>
                  <TableCell className="font-medium">{v.name}</TableCell>
                  <TableCell className="hidden max-w-xs text-muted-foreground sm:table-cell">
                    {v.description}
                  </TableCell>
                  <TableCell className="text-right font-mono text-muted-foreground">
                    {v.example}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
