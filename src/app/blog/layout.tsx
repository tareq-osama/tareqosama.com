import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: "Blog | Tareq",
    template: "%s | Tareq Blog"
  },
  description: "Latest insights on web design, development, branding, marketing strategies, and innovative solutions from Tareq Osama.",
  openGraph: {
    title: "Tareq Osama Blog - Design & Development Insights",
    description: "Latest insights on web design, development, branding, marketing strategies, and innovative solutions.",
    type: "website",
    url: "https://tareqosama.com/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="">
        {children}
      </div>
    </div>
  )
}