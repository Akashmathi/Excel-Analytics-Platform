import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, FileSpreadsheet, TrendingUp, Users } from "lucide-react"

const stats = [
  {
    title: "Total Files",
    value: "24",
    description: "+2 from last month",
    icon: FileSpreadsheet,
  },
  {
    title: "Charts Generated",
    value: "156",
    description: "+12 from last week",
    icon: BarChart3,
  },
  {
    title: "Data Points",
    value: "12.5K",
    description: "+8.2% from last month",
    icon: TrendingUp,
  },
  {
    title: "Active Users",
    value: "48",
    description: "+4 new this week",
    icon: Users,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
