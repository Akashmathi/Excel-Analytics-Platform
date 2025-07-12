import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download, Trash2 } from "lucide-react"

const analysisHistory = [
  {
    id: 1,
    fileName: "Sales_Data_Q4.xlsx",
    uploadDate: "2024-01-15",
    chartTypes: ["Bar Chart", "Line Chart", "Pie Chart"],
    status: "completed",
    insights: 5,
  },
  {
    id: 2,
    fileName: "Employee_Performance.xlsx",
    uploadDate: "2024-01-14",
    chartTypes: ["Scatter Plot", "Bar Chart"],
    status: "completed",
    insights: 3,
  },
  {
    id: 3,
    fileName: "Marketing_Budget.xlsx",
    uploadDate: "2024-01-13",
    chartTypes: ["3D Bar Chart", "Line Chart", "Pie Chart", "Scatter Plot", "Bar Chart"],
    status: "completed",
    insights: 7,
  },
  {
    id: 4,
    fileName: "Inventory_Report.xlsx",
    uploadDate: "2024-01-12",
    chartTypes: ["Bar Chart"],
    status: "processing",
    insights: 0,
  },
  {
    id: 5,
    fileName: "Customer_Data.xlsx",
    uploadDate: "2024-01-11",
    chartTypes: ["3D Scatter Plot", "Heat Map"],
    status: "completed",
    insights: 4,
  },
]

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analysis History</h1>
        <p className="text-muted-foreground">View and manage your past Excel file analyses and generated charts.</p>
      </div>

      <div className="grid gap-4">
        {analysisHistory.map((analysis) => (
          <Card key={analysis.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{analysis.fileName}</h3>
                    <Badge variant={analysis.status === "completed" ? "default" : "secondary"}>{analysis.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Uploaded on {analysis.uploadDate}</p>
                  <div className="flex flex-wrap gap-1">
                    {analysis.chartTypes.map((type, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                  {analysis.insights > 0 && (
                    <p className="text-sm text-blue-600">{analysis.insights} AI insights generated</p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {analysis.status === "completed" && (
                    <>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </>
                  )}
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
