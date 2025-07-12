"use client"
export const dynamic = "force-dynamic"

import { useSearchParams } from "next/navigation"

export default function AnalyzePage() {
  const searchParams = useSearchParams()
  const file = searchParams.get("file")

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Analyzing File</h1>
      {file ? (
        <p className="text-muted-foreground">Selected file: <strong>{file}</strong></p>
      ) : (
        <p className="text-red-500">No file specified in the URL.</p>
      )}
    </div>
  )
}
