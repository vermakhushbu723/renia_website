import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import IconTile from '../components/IconTile'
import { categories, photo } from '../data/content'
import Tilt from '../components/Tilt'

export default function Categories() {
  return (
    <section className="section bg-pattern">
      <div className="container-x">
        <SectionTitle
          tag="Our collections"
          title="Everything for a luxury bathroom and kitchen"
          text="From the shower head to the angle valve, choose every fitting from one trusted supplier."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((c, i) => (
            <Tilt
              as={Link}
              delay={(i % 4) * 70}
              key={c.key}
              to={`/products?cat=${c.key}`}
              className="group rounded-2xl bg-white ring-1 ring-line overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={photo(c.img, 600)}
                  alt={c.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute right-3 top-3 h-8 w-8 grid place-items-center rounded-full bg-white/90 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={17} />
                </span>
              </div>
              <div className="relative px-4 pb-4 pt-8">
                <IconTile icon={c.icon} color={c.color} size="md" className="absolute -top-6 left-4 ring-4 ring-white" />
                <h3 className="text-sm lg:text-base font-bold leading-snug">{c.label}</h3>
                <p className="mt-1 text-[13px] leading-snug hidden lg:block">{c.text}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}
