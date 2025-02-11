import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function SocialProof() {
  const testimonials = [
    {
      name: "John Doe",
      company: "Agency X",
      content: "Corvex has revolutionized how we manage our clients. It's a game-changer!",
    },
    {
      name: "Jane Smith",
      company: "SmallBiz Inc.",
      content: "Our team's productivity skyrocketed after implementing Corvex. Highly recommended!",
    },
  ]

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Trusted by 10,000+ Agencies & Business Owners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </CardHeader>
            <CardContent>{testimonial.content}</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 flex justify-center space-x-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative w-20 h-20">
            <Image
              src={`/placeholder.svg?height=80&width=80&text=Logo${i}`}
              alt={`Client logo ${i}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

