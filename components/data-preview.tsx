"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data - in real app, this would come from Excel parsing
const sampleData = [
  { id: 1, month: "January", sales: 12500, profit: 2500, region: "North" },
  { id: 2, month: "February", sales: 15200, profit: 3100, region: "North" },
  { id: 3, month: "March", sales: 18700, profit: 4200, region: "South" },
  { id: 4, month: "April", sales: 16800, profit: 3800, region: "East" },
  { id: 5, month: "May", sales: 21300, profit: 5100, region: "West" },
]

export function DataPreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Preview</CardTitle>
        <CardDescription>Preview of your Excel data. Showing first 5 rows of 150 total rows.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Profit</TableHead>
                <TableHead>Region</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>${row.sales.toLocaleString()}</TableCell>
                  <TableCell>${row.profit.toLocaleString()}</TableCell>
                  <TableCell>{row.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
