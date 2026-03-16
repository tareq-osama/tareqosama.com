/**
 * Corvex CMS Client
 *
 * Central API layer for all CMS content.
 * Every fetch goes through `corvexFetch` so auth headers
 * and error handling live in one place.
 *
 * Collection slugs (must match what you create in Corvex):
 *   blog-posts | courses | podcast-episodes | portfolio
 */

const BASE_URL = process.env.CORVEX_API_BASE_URL ?? 'https://cms.usecorvex.com/api/cms'
const API_KEY  = process.env.CORVEX_API_KEY

if (!API_KEY) {
  throw new Error('CORVEX_API_KEY is not set. Add it to .env.local')
}

// ─── Shared types ────────────────────────────────────────────────────────────

export type CorvexListResponse<T> = {
  data: T[]
  meta?: {
    total: number
    page:  number
    limit: number
  }
}

export type CorvexItemResponse<T> = {
  data: T
}

// ─── Content types ───────────────────────────────────────────────────────────

export type BlogPost = {
  id:          string
  slug:        string
  title:       string
  excerpt?:    string
  content?:    { fields?: { Body?: string } }
  coverImage?: string
  author?:     string
  publishedAt?: string
  category?:   string
  readTime?:   string
  tags?:       string[]
  status:      'published' | 'draft'
}

export type Course = {
  id:          string
  slug:        string
  title:       string
  description?: string
  thumbnail?:  string
  price?:      number
  currency?:   string
  level?:      'beginner' | 'intermediate' | 'advanced'
  duration?:   string
  instructor?: string
  status:      'published' | 'draft'
}

export type PodcastEpisode = {
  id:           string
  slug:         string
  title:        string
  description?: string
  audioUrl?:    string
  coverImage?:  string
  duration?:    string
  episode?:     number
  season?:      number
  guestName?:   string
  publishedAt?: string
  status:       'published' | 'draft'
}

export type PortfolioItem = {
  id:           string
  slug:         string
  title:        string
  summary?:     string
  coverImage?:  string
  tags?:        string[]
  liveUrl?:     string
  caseStudy?:   { fields?: { Body?: string } }
  client?:      string
  publishedAt?: string
  status:       'published' | 'draft'
}

// ─── Core fetch helper ────────────────────────────────────────────────────────

async function corvexFetch<T>(
  path: string,
  revalidate = 60,
): Promise<T> {
  const url = `${BASE_URL}${path}`

  const res = await fetch(url, {
    headers: { 'x-api-key': API_KEY as string },
    next:    { revalidate },
  })

  if (!res.ok) {
    throw new Error(`Corvex CMS error: ${res.status} ${res.statusText} — ${url}`)
  }

  return res.json() as Promise<T>
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export async function getBlogPosts(revalidate = 60) {
  const json = await corvexFetch<CorvexListResponse<BlogPost>>(
    '/collections/blog-posts/items?status=published',
    revalidate,
  )
  return json.data
}

export async function getBlogPost(slug: string, revalidate = 60) {
  const json = await corvexFetch<CorvexItemResponse<BlogPost>>(
    `/collections/blog-posts/${slug}`,
    revalidate,
  )
  return json.data
}

// ─── Courses ──────────────────────────────────────────────────────────────────

export async function getCourses(revalidate = 60) {
  const json = await corvexFetch<CorvexListResponse<Course>>(
    '/collections/courses/items?status=published',
    revalidate,
  )
  return json.data
}

export async function getCourse(slug: string, revalidate = 60) {
  const json = await corvexFetch<CorvexItemResponse<Course>>(
    `/collections/courses/${slug}`,
    revalidate,
  )
  return json.data
}

// ─── Podcast ──────────────────────────────────────────────────────────────────

export async function getPodcastEpisodes(revalidate = 60) {
  const json = await corvexFetch<CorvexListResponse<PodcastEpisode>>(
    '/collections/podcast-episodes/items?status=published',
    revalidate,
  )
  return json.data
}

export async function getPodcastEpisode(slug: string, revalidate = 60) {
  const json = await corvexFetch<CorvexItemResponse<PodcastEpisode>>(
    `/collections/podcast-episodes/${slug}`,
    revalidate,
  )
  return json.data
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

export async function getPortfolioItems(revalidate = 60) {
  const json = await corvexFetch<CorvexListResponse<PortfolioItem>>(
    '/collections/portfolio/items?status=published',
    revalidate,
  )
  return json.data
}

export async function getPortfolioItem(slug: string, revalidate = 60) {
  const json = await corvexFetch<CorvexItemResponse<PortfolioItem>>(
    `/collections/portfolio/${slug}`,
    revalidate,
  )
  return json.data
}
