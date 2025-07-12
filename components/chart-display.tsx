"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar, Line, Pie, Scatter } from "react-chartjs-2"
import { ThreeJSChart } from "@/components/threejs-chart"

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend)

interface ChartDisplayProps {
  type: string
  xAxis: string
  yAxis: string
}

// Sample data for charts
const chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12500, 15200, 18700, 16800, 21300],
      backgroundColor: [
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 99, 132, 0.8)",
        "rgba(255, 205, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
}

const scatterData = {
  datasets: [
    {
      label: "Sales vs Profit",
      data: [
        { x: 12500, y: 2500 },
        { x: 15200, y: 3100 },
        { x: 18700, y: 4200 },
        { x: 16800, y: 3800 },
        { x: 21300, y: 5100 },
      ],
      backgroundColor: "rgba(54, 162, 235, 0.8)",
      borderColor: "rgba(54, 162, 235, 1)",
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Data Visualization",
    },
  },
}

export function ChartDisplay({ type, xAxis, yAxis }: ChartDisplayProps) {
  const renderChart = () => {
    switch (type) {
      case "bar":
        return <Bar data={chartData} options={chartOptions} />
      case "line":
        return <Line data={chartData} options={chartOptions} />
      case "pie":
        return <Pie data={chartData} options={chartOptions} />
      case "scatter":
        return <Scatter data={scatterData} options={chartOptions} />
      case "3d-bar":
      case "3d-scatter":
        return <ThreeJSChart type={type} data={chartData} />
      default:
        return <Bar data={chartData} options={chartOptions} />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Chart</CardTitle>
        <CardDescription>
          {type.charAt(0).toUpperCase() + type.slice(1)} chart showing {xAxis} vs {yAxis}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-96">{renderChart()}</div>
      </CardContent>
    </Card>
  )
}
