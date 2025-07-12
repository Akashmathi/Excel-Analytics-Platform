import { Button } from "@/components/ui/button"
import { Upload, BarChart3, History, FileSpreadsheet } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Upload Excel File",
    description: "Upload a new Excel file for analysis",
    icon: Upload,
    href: "/dashboard/upload",
    variant: "default" as const,
  },
  {
    title: "View Charts",
    description: "Browse your generated charts",
    icon: BarChart3,
    href: "/dashboard/charts",
    variant: "outline" as const,
  },
  {
    title: "Analysis History",
    description: "View your past analyses",
    icon: History,
    href: "/dashboard/history",
    variant: "outline" as const,
  },
  {
    title: "My Files",
    description: "Manage your uploaded files",
    icon: FileSpreadsheet,
    href: "/dashboard/files",
    variant: "outline" as const,
  },
]

export function QuickActions() {
  return (
    <div className="space-y-3">
      {actions.map((action) => (
        <Link key={action.title} href={action.href}>
          <Button variant={action.variant} className="w-full justify-start h-auto p-4">
            <div className="flex items-center gap-3">
              <action.icon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-sm text-muted-foreground">{action.description}</div>
              </div>
            </div>
          </Button>
        </Link>
      ))}
    </div>
  )
}
