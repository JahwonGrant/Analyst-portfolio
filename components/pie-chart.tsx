"use client"

import { Cell, Pie, PieChart } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Enterprise", value: 35 },
  { name: "SMB", value: 45 },
  { name: "Consumer", value: 20 },
]

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"]

export default function PieChartComponent() {
  return (
    <ChartContainer
      config={{
        enterprise: {
          label: "Enterprise",
          color: COLORS[0],
        },
        smb: {
          label: "SMB",
          color: COLORS[1],
        },
        consumer: {
          label: "Consumer",
          color: COLORS[2],
        },
      }}
      className="h-[300px]"
    >
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
          nameKey="name"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
      </PieChart>
    </ChartContainer>
  )
}
