import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://corvex.com'
  
  const routes = [
    '',
    '/pricing',
    '/features',
    '/case-studies',
    '/blog',
    '/help',
    '/templates',
    '/docs',
    '/about',
    '/contact',
    '/login',
    '/signup',
    '/terms',
    '/privacy',
    '/security',
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route === '/blog' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : route === '/pricing' || route === '/features' ? 0.9 : 0.8,
  }))

  // Add blog posts (you would fetch these from your CMS/database)
  const blogPosts = [
    {
      url: `${baseUrl}/blog/how-to-streamline-client-communication`,
      lastModified: new Date('2024-07-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/automate-invoicing-small-business`,
      lastModified: new Date('2024-07-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Add more blog posts as needed
  ]

  // Add case studies
  const caseStudies = [
    {
      url: `${baseUrl}/case-studies/velocity-digital`,
      lastModified: new Date('2024-07-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/digital-spark`,
      lastModified: new Date('2024-06-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  return [...staticPages, ...blogPosts, ...caseStudies]
}