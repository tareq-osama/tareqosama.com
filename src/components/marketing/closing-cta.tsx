import { Button } from "@/components/ui/button"

export default function ClosingCTA() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Join the Future of Agency Client Management</h2>
      <p className="mb-8 text-muted-foreground">
        Experience the power of Corvex today and transform your client relationships.
      </p>
      <Button size="lg">Sign Up Now – No Credit Card Required</Button>
      <p className="mt-4 text-sm text-muted-foreground">Cancel anytime, no hidden fees.</p>
    </section>
  )
}

