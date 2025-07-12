export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

export default function AnalyzePageWrapper() {
  return (
    <Suspense fallback={<div>Loading analysis...</div>}>
      <AnalyzePage />
    </Suspense>
  );
}

function AnalyzePage() {
  const searchParams = useSearchParams();
  const file = searchParams.get("file");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analyze Excel File</h1>
        <p className="text-muted-foreground">
          Here's the analysis for your uploaded Excel file.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>File: {file ?? "No file selected"}</CardTitle>
          <CardDescription>
            Displaying charts and insights from your Excel file.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Replace this with your real analysis component */}
          {file ? (
            <div>✅ File selected: {file}</div>
          ) : (
            <div>⚠️ Please upload a file to analyze.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
