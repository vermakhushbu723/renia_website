import { Link } from 'react-router-dom'
import { LinkedinFilled, FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons'
import Logo from './Logo'
import { Icon3d } from './IconTile'
import { categories, company, photo } from '../data/content'

const links = [
  ['Products', '/products'],
  ['Hotels and Projects', '/hospitality'],
  ['About us', '/about'],
  ['Contact', '/contact'],
]

const socials = [
  { Icon: InstagramFilled, label: 'Instagram' },
  { Icon: FacebookFilled, label: 'Facebook' },
  { Icon: LinkedinFilled, label: 'LinkedIn' },
  { Icon: YoutubeFilled, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white/70 overflow-hidden">
      <img src={photo('photo-1600566752355-35792bedcfea', 1600)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[.07]" />
      <div className="container-x relative py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            Luxury showers, faucets, tub spouts, basins and kitchen fittings for homes, hotels and projects, from {company.legal}.
          </p>
          <div className="mt-5 flex gap-2.5">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="h-9 w-9 grid place-items-center rounded-lg bg-white/10 text-white hover:bg-primary transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="!text-white text-[15px] font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm list-none p-0 m-0">
            {links.map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="hover:text-primary transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="!text-white text-[15px] font-semibold mb-4">Collections</h4>
          <ul className="space-y-2.5 text-sm list-none p-0 m-0">
            {categories.slice(0, 6).map((c) => (
              <li key={c.key}>
                <Link to={`/products?cat=${c.key}`} className="hover:text-primary transition-colors">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="!text-white text-[15px] font-semibold mb-4">Visit or call us</h4>
          <ul className="space-y-3 text-sm list-none p-0 m-0">
            <li className="flex gap-2.5"><Icon3d name="location" size={20} className="mt-0.5" /> {company.address}</li>
            <li><a href={`tel:${company.phoneRaw}`} className="flex gap-2.5 hover:text-primary"><Icon3d name="phone" size={20} /> {company.phone}</a></li>
            <li><a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="flex gap-2.5 hover:text-primary"><Icon3d name="whatsapp" size={20} /> WhatsApp us</a></li>
            <li><a href={`mailto:${company.email}`} className="flex gap-2.5 hover:text-primary"><Icon3d name="email" size={20} /> {company.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[13px]">
          <p>&copy; {new Date().getFullYear()} {company.legal}. All Rights Reserved</p>
          <p>GSTIN: {company.gstin}</p>
        </div>
      </div>
    </footer>
  )
}
