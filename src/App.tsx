import { useRoutes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { routes } from './routes'

export function App() {
  const element = useRoutes(routes)

  return (
    <>
      <ScrollToTop />
      {element}
    </>
  )
}
