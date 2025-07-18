import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: "Blog | Corvex",
    template: "%s | Corvex Blog"
  },
  description: "Latest insights on business management, client communication, and growth strategies for one-person businesses.",
  openGraph: {
    title: "Corvex Blog - Business Management Insights",
    description: "Latest insights on business management, client communication, and growth strategies.",
    type: "website",
    url: "https://corvex.com/blog",
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