import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { mainNav } from '../data/nav'
import { site } from '../data/site'
import { Button } from './Button'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" className="font-heading text-2xl font-bold text-dark">
          {site.name}
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
                  `flex items-center gap-1 py-2 text-[15px] font-semibold transition-colors ${
                    isActive ? 'text-primary' : 'text-dark-2 hover:text-primary'
                  }`
                }
              >
                {item.label}
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
          <Button to="/contact-us">Bize Ulaşın</Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-line px-6 py-4 lg:hidden">
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
            <Button to="/contact-us" className="w-full">
              Bize Ulaşın
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
