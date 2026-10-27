import { useRoutes } from 'react-router-dom'
import { CustomCursor } from './components/CustomCursor'
import { ScrollToTop } from './components/ScrollToTop'
import { SmoothScroll } from './components/SmoothScroll'
import { routes } from './routes'

export function App() {
  const element = useRoutes(routes)

  return (
    <SmoothScroll>
      <ScrollToTop />
      <CustomCursor />
      {element}
    </SmoothScroll>
  )
}
