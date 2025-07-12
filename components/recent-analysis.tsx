import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

const recentFiles = [
  {
    id: 1,
    name: "Sales_Data_Q4.xlsx",
    date: "2024-01-15",
    charts: 3,
    status: "completed",
  },
  {
    id: 2,
    name: "Employee_Performance.xlsx",
    date: "2024-01-14",
    charts: 2,
    status: "completed",
  },
  {
    id: 3,
    name: "Marketing_Budget.xlsx",
    date: "2024-01-13",
    charts: 5,
    status: "processing",
  },
  {
    id: 4,
    name: "Inventory_Report.xlsx",
    date: "2024-01-12",
    charts: 1,
    status: "completed",
  },
]

export function RecentAnalysis() {
  return (
    <div className="space-y-4">
      {recentFiles.map((file) => (
        <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{file.name}</p>
            <p className="text-sm text-muted-foreground">
              {file.date} • {file.charts} charts generated
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={file.status === "completed" ? "default" : "secondary"}>{file.status}</Badge>
            {file.status === "completed" && (
              <div className="flex gap-1">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
