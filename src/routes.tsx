import type { RouteObject } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { TeamPage } from './pages/TeamPage'
import { TeamDetailPage } from './pages/TeamDetailPage'
import { ServiceListPage } from './pages/ServiceListPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { PortfolioListPage } from './pages/PortfolioListPage'
import { PortfolioDetailPage } from './pages/PortfolioDetailPage'
import { BlogListPage } from './pages/BlogListPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { FAQPage } from './pages/FAQPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { NotFoundPage } from './pages/NotFoundPage'

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },

      { path: '/about-us', element: <AboutPage /> },

      { path: '/team', element: <TeamPage /> },
      { path: '/team/:slug', element: <TeamDetailPage /> },

      { path: '/service', element: <ServiceListPage /> },
      { path: '/service/classic-style', element: <ServiceListPage breadcrumb="Faaliyet Alanlarımız" /> },
      { path: '/service/:slug', element: <ServiceDetailPage /> },

      { path: '/portfolio', element: <PortfolioListPage /> },
      { path: '/portfolio-grid-4', element: <PortfolioListPage /> },
      { path: '/portfolio/:slug', element: <PortfolioDetailPage /> },

      { path: '/blog', element: <BlogListPage /> },
      { path: '/blog-grid-overlay', element: <BlogListPage /> },
      { path: '/blog/:slug', element: <BlogDetailPage /> },

      { path: '/testimonials', element: <TestimonialsPage /> },
      { path: '/faq', element: <FAQPage /> },
      { path: '/contact-us', element: <ContactPage /> },
      { path: '/privacy-policy', element: <PrivacyPolicyPage /> },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
