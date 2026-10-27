import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { mainNav } from '../data/nav'
import { site } from '../data/site'
import { Button } from './Button'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [atTop, setAtTop] = useState(true)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setAtTop(y < 10)
      setHidden(y > lastY.current && y > 100)
      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = atTop && !mobileOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white shadow-sm'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="flex w-full items-center justify-between gap-6 px-6 py-2 lg:px-10">
        <Link to="/" className="group flex items-center">
          <img
            src={transparent ? '/header-soldaki-logo.png' : '/header-soldaki-logo-2.png'}
            alt={site.name}
            className="h-20 w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="group relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={item.path ?? '#'}
                className={({ isActive }) =>
                  `group/nav flex items-center gap-1 py-2 text-[15px] font-semibold transition-colors duration-300 ${
                    isActive
                      ? 'text-primary'
                      : transparent
                        ? 'text-white/90'
                        : 'text-forest'
                  }`
                }
              >
                <span className="relative inline-block">
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/nav:scale-x-100 ${
                      transparent ? 'bg-white' : 'bg-forest'
                    }`}
                  />
                </span>
                {item.children && <span className="text-xs">▾</span>}
              </NavLink>

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-[220px] rounded-xl border border-line bg-white py-2 shadow-lg">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path ?? '#'}
                      className={({ isActive }) =>
                        `block px-5 py-2 text-sm transition-colors ${
                          isActive ? 'text-primary' : 'text-body hover:text-primary'
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact-us" pill className="!text-forest">
            Bize Ulaşın
          </Button>
        </div>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
            transparent ? 'border-white/40 text-white' : 'border-line text-dark'
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-line bg-white px-6 py-4 lg:hidden">
          {mainNav.map((item) => (
            <div key={item.label} className="border-b border-line py-2 last:border-none">
              <NavLink
                to={item.path ?? '#'}
                className="block py-2 text-sm font-medium text-dark"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
              {item.children && (
                <div className="ml-4 flex flex-col gap-1 pb-2">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path ?? '#'}
                      className="py-1 text-sm text-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4">
            <Button to="/contact-us" className="w-full !text-forest">
              Bize Ulaşın
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
