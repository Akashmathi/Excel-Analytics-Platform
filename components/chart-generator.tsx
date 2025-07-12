"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ChartDisplay } from "@/components/chart-display"
import { Download, BarChart3 } from "lucide-react"

const chartTypes = [
  { value: "bar", label: "Bar Chart" },
  { value: "line", label: "Line Chart" },
  { value: "pie", label: "Pie Chart" },
  { value: "scatter", label: "Scatter Plot" },
  { value: "3d-bar", label: "3D Bar Chart" },
  { value: "3d-scatter", label: "3D Scatter Plot" },
]

const columns = [
  { value: "month", label: "Month" },
  { value: "sales", label: "Sales" },
  { value: "profit", label: "Profit" },
  { value: "region", label: "Region" },
]

export function ChartGenerator() {
  const [chartType, setChartType] = useState("")
  const [xAxis, setXAxis] = useState("")
  const [yAxis, setYAxis] = useState("")
  const [showChart, setShowChart] = useState(false)

  const generateChart = () => {
    if (chartType && xAxis && yAxis) {
      setShowChart(true)
    }
  }

  const downloadChart = () => {
    // In real app, this would generate and download the chart
    const link = document.createElement("a")
    link.download = "chart.png"
    link.href = "/placeholder.svg?height=400&width=600"
    link.click()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Chart Configuration</CardTitle>
          <CardDescription>Select chart type and axes to generate your visualization.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="chart-type">Chart Type</Label>
              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select chart type" />
                </SelectTrigger>
                <SelectContent>
                  {chartTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="x-axis">X-Axis</Label>
              <Select value={xAxis} onValueChange={setXAxis}>
                <SelectTrigger>
                  <SelectValue placeholder="Select X-axis" />
                </SelectTrigger>
                <SelectContent>
                  {columns.map((column) => (
                    <SelectItem key={column.value} value={column.value}>
                      {column.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="y-axis">Y-Axis</Label>
              <Select value={yAxis} onValueChange={setYAxis}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Y-axis" />
                </SelectTrigger>
                <SelectContent>
                  {columns.map((column) => (
                    <SelectItem key={column.value} value={column.value}>
                      {column.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={generateChart} disabled={!chartType || !xAxis || !yAxis}>
              <BarChart3 className="mr-2 h-4 w-4" />
              Generate Chart
            </Button>
            {showChart && (
              <Button variant="outline" onClick={downloadChart}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {showChart && <ChartDisplay type={chartType} xAxis={xAxis} yAxis={yAxis} />}
    </div>
  )
}
