export interface SocialLinks {
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
}

export interface TeamMember {
  slug: string
  name: string
  role: string
  bio: string
  photo: string
  socials: SocialLinks
}

export interface Service {
  slug: string
  title: string
  summary: string
  body: string[]
  icon: string
  image: string
}

export interface PortfolioItem {
  slug: string
  title: string
  category: string
  image: string
  gallery: string[]
  client: string
  date: string
  description: string[]
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  body: string[]
  coverImage: string
  author: string
  date: string
  tags: string[]
}
