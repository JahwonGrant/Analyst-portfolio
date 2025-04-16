"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { product: "Product A", revenue: 12000 },
  { product: "Product B", revenue: 9800 },
  { product: "Product C", revenue: 7500 },
  { product: "Product D", revenue: 6200 },
  { product: "Product E", revenue: 5100 },
]

export default function BarChartComponent() {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Revenue",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <BarChart
        accessibilityLayer
        data={data}
        margin={{
          left: 5,
          right: 5,
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="product" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickFormatter={(value) => `$${value}`} tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} maxBarSize={50} />
      </BarChart>
    </ChartContainer>
  )
}
