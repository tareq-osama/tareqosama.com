import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function Pricing() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Try Corvex for Free</h2>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>14-Day Free Trial</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Full access to all features</li>
            <li>No credit card required</li>
            <li>Cancel anytime</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Start Your Free Trial</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

