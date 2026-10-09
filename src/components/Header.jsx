import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Drawer, Badge } from 'antd'
import { Menu } from 'lucide-react'
import { Icon3d } from './IconTile'
import Logo from './Logo'
import { navLinks, company } from '../data/content'
import { useQuote } from './quoteContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count, openQuote } = useQuote()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = ({ isActive }) =>
    `relative px-3.5 py-2 rounded-lg text-[15px] font-bold transition-colors after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-[2.5px] after:rounded-full after:bg-primary after:origin-left after:transition-transform after:duration-300 ${
      isActive ? 'text-primary-dark after:scale-x-100' : 'text-dark hover:text-primary-dark after:scale-x-0 hover:after:scale-x-100'
    }`

  return (
    <>
      <div className="hidden md:block bg-secondary text-white/80 text-[13px]">
        <div className="container-x flex items-center justify-center lg:justify-between h-8">
          <p className="hidden lg:flex items-center gap-1.5">
            <Icon3d name="location" size={16} /> Sahibabad, Ghaziabad &middot; Supplying luxury bath fittings across India
          </p>
          <div className="flex items-center gap-5">
            <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-1.5 hover:text-primary">
              <Icon3d name="phone" size={16} /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-primary">
              <Icon3d name="email" size={16} /> {company.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'bg-white/90 shadow-[0_10px_30px_-14px_rgba(9,44,76,.35)]' : 'bg-white border-b border-line'
        }`}
      >
        <div className="container-x flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkCls}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Badge count={count} color="#092C4C" offset={[-4, 4]}>
              <Button onClick={openQuote} className="!font-bold !text-secondary !border-line hover:!border-primary" icon={<Icon3d name="document" size={20} />}>
                <span className="hidden sm:inline">Quote List</span>
              </Button>
            </Badge>
            <a href={`tel:${company.phoneRaw}`} className="hidden lg:block">
              <Button type="primary" icon={<Icon3d name="phone" size={18} />}>
                Call Now
              </Button>
            </a>
            <Button
              className="lg:!hidden"
              type="text"
              aria-label="Open menu"
              icon={<Menu size={24} className="text-secondary" />}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </header>

      <Drawer open={open} onClose={() => setOpen(false)} placement="right" title={<Logo />} size={300}>
        <nav className="flex flex-col" aria-label="Mobile">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 border-b border-line text-base font-semibold ${isActive ? 'text-primary-dark' : 'text-secondary'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a href={`tel:${company.phoneRaw}`}>
          <Button type="primary" size="large" block className="!mt-6" icon={<Icon3d name="phone" size={20} />}>
            Call {company.phone}
          </Button>
        </a>
      </Drawer>
    </>
  )
}
