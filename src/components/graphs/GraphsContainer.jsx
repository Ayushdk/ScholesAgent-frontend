"use client"

import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

import { Label } from "../ui/label"
import { getSymbols, getGraphData } from "../../services/api"

export default function GraphsContainer() {
  const [symbols, setSymbols] = useState([])
  const [symbol, setSymbol] = useState("AAPL")
  const [data, setData] = useState(null)

  // ---------------- LOAD SYMBOLS ----------------
  useEffect(() => {
    getSymbols().then(setSymbols)
  }, [])

  // ---------------- LOAD GRAPH DATA ----------------
  useEffect(() => {
    setData(null)

    getGraphData({
      symbol,
      strike: 100,
      maturity: 0.5,
      rate: 5,
    })
      .then((res) => {
        const transform = {
          price_history: [],
          returns: [],
          volatility: [],
          strike_curve: res.strike_curve || [],
          time_curve: res.time_curve || [],
        }

        // price
        transform.price_history =
          res.price_history?.dates.map((d, i) => ({
            date: d,
            price: res.price_history.values[i],
          })) || []

        // returns
        transform.returns =
          res.daily_returns?.dates.map((d, i) => ({
            date: d,
            return: res.daily_returns.values[i] * 100,
          })) || []

        // volatility
        transform.volatility =
          res.rolling_volatility?.dates.map((d, i) => ({
            date: d,
            volatility: res.rolling_volatility.values[i] * 100,
          })) || []

        setData(transform)
      })
      .catch(() => {
        setData({
          price_history: [],
          returns: [],
          volatility: [],
          strike_curve: [],
          time_curve: [],
        })
      })
  }, [symbol])

  if (!data) return <p className="text-muted-foreground">Loading charts…</p>

  return (
    <div className="space-y-8">

      {/* ================= SYMBOL SELECT ================= */}
      <div className="flex items-center gap-4">
        <Label>Select Stock</Label>
        <Select value={symbol} onValueChange={setSymbol}>
          <SelectTrigger className="w-[220px]">
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

      {/* ================= MAIN GRID ================= */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* -------- PRICE HISTORY -------- */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Stock Price History</CardTitle>
            <CardDescription>Historical market prices</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={300}>
              <LineChart data={data.price_history}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" hide />
                <YAxis />
                <Tooltip />
                <Line
                  dataKey="price"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* -------- DAILY RETURNS -------- */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Daily Returns</CardTitle>
            <CardDescription>Percentage price change</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={300}>
              <BarChart data={data.returns}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" hide />
                <YAxis />
                <Tooltip />
                <Bar dataKey="return" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* -------- VOLATILITY -------- */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Rolling Volatility</CardTitle>
            <CardDescription>30-day annualized volatility</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={300}>
              <AreaChart data={data.volatility}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" hide />
                <YAxis />
                <Tooltip />
                <Area
                  dataKey="volatility"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.25}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* -------- OPTION vs STRIKE -------- */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Option Price vs Strike</CardTitle>
            <CardDescription>
              ITM • ATM • OTM behavior
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={300}>
              <LineChart data={data.strike_curve}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="strike" />
                <YAxis />
                <Tooltip />
                <Line dataKey="call" stroke="#10b981" dot={false} />
                <Line dataKey="put" stroke="#ef4444" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* ================= TIME DECAY ================= */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>Option Price vs Time to Maturity</CardTitle>
          <CardDescription>
            Theta decay of ATM options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer height={350}>
            <LineChart data={data.time_curve}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="months" />
              <YAxis />
              <Tooltip />
              <Line dataKey="call" stroke="#10b981" dot={false} />
              <Line dataKey="put" stroke="#ef4444" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
