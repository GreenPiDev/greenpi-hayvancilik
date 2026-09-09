import type { RouteObject } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { HomeTwo } from './pages/HomeTwo'
import { HomeThree } from './pages/HomeThree'
import { HomeFour } from './pages/HomeFour'
import { HomeFive } from './pages/HomeFive'
import { HomeLandingPage } from './pages/HomeLandingPage'
import { AboutPage } from './pages/AboutPage'
import { TeamPage } from './pages/TeamPage'
import { TeamDetailPage } from './pages/TeamDetailPage'
import { ServiceListPage } from './pages/ServiceListPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { PortfolioListPage } from './pages/PortfolioListPage'
import { PortfolioDetailPage } from './pages/PortfolioDetailPage'
import { BlogListPage } from './pages/BlogListPage'
import { BlogSidebarPage } from './pages/BlogSidebarPage'
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
      { path: '/home-2', element: <HomeTwo /> },
      { path: '/home-3', element: <HomeThree /> },
      { path: '/home-4', element: <HomeFour /> },
      { path: '/home-5', element: <HomeFive /> },
      { path: '/home-landing-page', element: <HomeLandingPage /> },

      { path: '/about-us', element: <AboutPage /> },

      { path: '/team', element: <TeamPage /> },
      { path: '/team/:slug', element: <TeamDetailPage /> },

      { path: '/service', element: <ServiceListPage /> },
      { path: '/service/classic-style', element: <ServiceListPage columns={3} style="classic" breadcrumb="Hizmetler (Klasik)" /> },
      { path: '/service/modern-style', element: <ServiceListPage columns={2} style="modern" breadcrumb="Hizmetler (Modern)" /> },
      { path: '/service/classic-pro', element: <ServiceListPage columns={3} style="pro" breadcrumb="Hizmetler (Klasik Pro)" /> },
      { path: '/service/:slug', element: <ServiceDetailPage /> },

      { path: '/portfolio', element: <PortfolioListPage columns={3} /> },
      { path: '/portfolio-grid-2', element: <PortfolioListPage columns={2} /> },
      { path: '/portfolio-grid-3', element: <PortfolioListPage columns={3} /> },
      { path: '/portfolio-grid-4', element: <PortfolioListPage columns={4} /> },
      { path: '/portfolio/:slug', element: <PortfolioDetailPage /> },

      { path: '/blog', element: <BlogListPage columns={3} layout="grid" /> },
      { path: '/blog-2-columns', element: <BlogListPage columns={2} layout="grid" /> },
      { path: '/blog-3-columns', element: <BlogListPage columns={3} layout="grid" /> },
      { path: '/blog-4-columns', element: <BlogListPage columns={4} layout="grid" /> },
      { path: '/blog-grid-overlay', element: <BlogListPage layout="overlay" /> },
      { path: '/blog-list', element: <BlogListPage layout="list" /> },
      { path: '/2-columns-sidebar', element: <BlogSidebarPage /> },
      { path: '/blog/:slug', element: <BlogDetailPage /> },

      { path: '/testimonials', element: <TestimonialsPage /> },
      { path: '/faq', element: <FAQPage /> },
      { path: '/contact-us', element: <ContactPage /> },
      { path: '/privacy-policy', element: <PrivacyPolicyPage /> },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
