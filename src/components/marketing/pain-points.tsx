import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { XCircle, CheckCircle } from "lucide-react"

export default function PainPoints() {
  const painPoints = [
    "Endless back-and-forth emails",
    "Missed deadlines due to scattered project updates",
    "Confusion over invoices & payments",
  ]

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">The Problems We Solve</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {painPoints.map((point, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <XCircle className="mr-2 text-destructive" />
                Pain Point
              </CardTitle>
            </CardHeader>
            <CardContent>{point}</CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="mr-2 text-primary" />
            The Solution
          </CardTitle>
        </CardHeader>
        <CardContent>Corvex eliminates client chaos by giving you one centralized hub.</CardContent>
      </Card>
    </section>
  )
}

