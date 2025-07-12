import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, Download, Trash2, BarChart3 } from "lucide-react"

const files = [
  {
    id: 1,
    name: "Sales_Data_Q4.xlsx",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    rows: 1250,
    columns: 8,
    status: "processed",
  },
  {
    id: 2,
    name: "Employee_Performance.xlsx",
    size: "1.8 MB",
    uploadDate: "2024-01-14",
    rows: 890,
    columns: 12,
    status: "processed",
  },
  {
    id: 3,
    name: "Marketing_Budget.xlsx",
    size: "3.2 MB",
    uploadDate: "2024-01-13",
    rows: 2100,
    columns: 15,
    status: "processed",
  },
  {
    id: 4,
    name: "Inventory_Report.xlsx",
    size: "1.2 MB",
    uploadDate: "2024-01-12",
    rows: 450,
    columns: 6,
    status: "processing",
  },
]

export default function FilesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Files</h1>
          <p className="text-muted-foreground">Manage your uploaded Excel files and their processing status.</p>
        </div>
        <Button>
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Upload New File
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {files.map((file) => (
          <Card key={file.id}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <FileSpreadsheet className="h-8 w-8 text-green-600" />
                <Badge variant={file.status === "processed" ? "default" : "secondary"}>{file.status}</Badge>
              </div>
              <CardTitle className="text-lg">{file.name}</CardTitle>
              <CardDescription>Uploaded on {file.uploadDate}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Size</p>
                  <p className="font-medium">{file.size}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Rows</p>
                  <p className="font-medium">{file.rows.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Columns</p>
                  <p className="font-medium">{file.columns}</p>
                </div>
              </div>

              <div className="flex gap-2">
                {file.status === "processed" && (
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    Analyze
                  </Button>
                )}
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
