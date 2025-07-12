import { ChartGenerator } from "@/components/chart-generator"
import { DataPreview } from "@/components/data-preview"
import { AIInsights } from "@/components/ai-insights"

export default function AnalyzePage({
  searchParams,
}: {
  searchParams: { file?: string }
}) {
  const fileName = searchParams.file || "Unknown File"

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analyze Data</h1>
        <p className="text-muted-foreground">Analyzing: {decodeURIComponent(fileName)}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <DataPreview />
          <ChartGenerator />
        </div>
        <div>
          <AIInsights />
        </div>
      </div>
    </div>
  )
}
