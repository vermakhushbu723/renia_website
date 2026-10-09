import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { segments, photo } from '../data/content'
import Tilt from '../components/Tilt'
import { Icon3d } from '../components/IconTile'

export default function Segments() {
  return (
    <section className="relative overflow-hidden bg-secondary section">
      <img src={photo('photo-1542314831-068cd1dbfeeb', 1920)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/85 to-secondary" />
      <div className="container-x relative">
        <SectionTitle
          light
          tag="Who we serve"
          title="Supplying hotels, builders and luxury homes"
          text="Room-wise quotations, project pricing and phased delivery, built around how big projects actually run."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {segments.map(({ icon, title, img, text }, i) => (
            <Tilt key={title} delay={i * 90} className="group rounded-2xl bg-white overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={photo(img, 700)}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 -bottom-7 h-14 w-14 grid place-items-center rounded-2xl bg-white ring-4 ring-white shadow-lg">
                  <Icon3d name={icon} size={36} />
                </span>
              </div>
              <div className="p-5 pt-9">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed">{text}</p>
              </div>
            </Tilt>
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link to="/hospitality">
            <Button type="primary" size="large">
              Hotel and project supply <ArrowRight size={17} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
