"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DataPoint {
  name: string
  value: number
  [key: string]: any
}

interface ChartData {
  title: string
  description: string
  data: DataPoint[]
  metrics: string[]
  timeRanges?: string[]
  insights: string[]
}

interface InteractiveChartProps {
  chartData: ChartData
  type?: "line" | "bar" | "pie" | "area"
  className?: string
}

export function InteractiveChart({ chartData, type = "line", className = "" }: InteractiveChartProps) {
  const [activeMetric, setActiveMetric] = useState<string>(chartData.metrics[0])
  const [timeRange, setTimeRange] = useState<string>(chartData.timeRanges ? chartData.timeRanges[0] : "all")
  const [chartType, setChartType] = useState<"line" | "bar" | "pie" | "area">(type)
  const [hoveredInsight, setHoveredInsight] = useState<number | null>(null)

  const COLORS = ["#335584", "#2A59FF", "#FFC23A", "#666666", "#4A72FF", "#FFB334", "#515151", "#274271"]

  const filteredData = chartData.data.filter((item) => {
    if (timeRange === "all") return true
    // This is a placeholder. In a real app, you'd filter based on actual date ranges
    return true
  })

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey={activeMetric}
                stroke="var(--primary)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Bar dataKey={activeMetric} fill="var(--primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={filteredData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey={activeMetric}
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {filteredData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )
      case "area":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey={activeMetric}
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        )
      default:
        return null
    }
  }

  return (
    <Card className={`border accent-border ${className}`}>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>{chartData.title}</CardTitle>
            <CardDescription>{chartData.description}</CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Select value={activeMetric} onValueChange={setActiveMetric}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                {chartData.metrics.map((metric) => (
                  <SelectItem key={metric} value={metric}>
                    {metric}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {chartData.timeRanges && (
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  {chartData.timeRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={chartType} value={chartType} onValueChange={(value) => setChartType(value as any)}>
          <TabsList className="mb-6">
            <TabsTrigger value="line">Line</TabsTrigger>
            <TabsTrigger value="bar">Bar</TabsTrigger>
            <TabsTrigger value="area">Area</TabsTrigger>
            <TabsTrigger value="pie">Pie</TabsTrigger>
          </TabsList>

          <TabsContent value={chartType}>{renderChart()}</TabsContent>
        </Tabs>

        <div className="mt-8">
          <h4 className="text-sm font-medium mb-3">Key Insights</h4>
          <div className="space-y-2">
            {chartData.insights.map((insight, index) => (
              <motion.div
                key={index}
                className="p-3 rounded-md bg-muted/30 border border-border"
                whileHover={{ scale: 1.01 }}
                onHoverStart={() => setHoveredInsight(index)}
                onHoverEnd={() => setHoveredInsight(null)}
                animate={{
                  backgroundColor: hoveredInsight === index ? "var(--primary-10)" : "var(--muted-30)",
                  borderColor: hoveredInsight === index ? "var(--primary-20)" : "var(--border)",
                }}
              >
                <p className="text-sm">{insight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
