"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, AlertTriangle, Info } from "lucide-react"

const insights = [
  {
    type: "trend",
    icon: TrendingUp,
    title: "Sales Growth Trend",
    description: "Sales show a consistent upward trend with 23% growth over the analyzed period.",
    confidence: "High",
  },
  {
    type: "alert",
    icon: AlertTriangle,
    title: "Profit Margin Alert",
    description: "Profit margins in the North region are below average. Consider cost optimization.",
    confidence: "Medium",
  },
  {
    type: "insight",
    icon: Info,
    title: "Seasonal Pattern",
    description: "Data suggests strong seasonal patterns with peaks in March and May.",
    confidence: "High",
  },
]

export function AIInsights() {
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)

  const generateInsights = async () => {
    setLoading(true)
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    setGenerated(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-yellow-500" />
          AI Insights
        </CardTitle>
        <CardDescription>Get intelligent insights and recommendations from your data.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!generated ? (
          <div className="text-center py-8">
            <Sparkles className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">Generate AI-powered insights from your Excel data</p>
            <Button onClick={generateInsights} disabled={loading}>
              {loading ? "Analyzing..." : "Generate Insights"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-2">
                <div className="flex items-start gap-3">
                  <insight.icon className="h-5 w-5 mt-0.5 text-blue-600" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{insight.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {insight.confidence}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <Button variant="outline" className="w-full bg-transparent" onClick={generateInsights}>
              <Sparkles className="mr-2 h-4 w-4" />
              Regenerate Insights
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
