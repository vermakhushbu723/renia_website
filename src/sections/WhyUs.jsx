import SectionTitle from '../components/SectionTitle'
import IconTile from '../components/IconTile'
import { whyUs, photo } from '../data/content'
import Tilt from '../components/Tilt'

export default function WhyUs() {
  return (
    <section className="section bg-cool">
      <div className="container-x grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative">
          <img
            src={photo('photo-1600488999585-e4364713b90a', 900)}
            alt="Bathroom vanity with twin basins"
            loading="lazy"
            className="w-full h-[280px] md:h-[340px] lg:h-[420px] object-cover rounded-2xl shadow-[0_30px_60px_-30px_rgba(9,44,76,.5)]"
          />
          <div className="absolute -bottom-4 left-4 right-4 md:left-6 md:right-auto md:w-60 rounded-2xl bg-primary p-5 text-white shadow-xl">
            <p className="font-heading font-bold text-4xl">15+</p>
            <p className="text-sm font-semibold">years of supplying premium bath fittings</p>
          </div>
        </div>
        <div className="lg:col-span-7 pt-6 lg:pt-0">
          <SectionTitle
            center={false}
            tag="Why Grandeur Bath"
            title="A supplier you can trust for every project"
            text="Homeowners, hotels and architects choose us for genuine products, honest pricing and support that continues after delivery."
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {whyUs.map((w, i) => (
              <Tilt key={w.title} delay={(i % 2) * 80} className="flex gap-3.5 rounded-xl bg-white ring-1 ring-line p-4">
                <IconTile icon={w.icon} color={w.color} size="sm" />
                <div>
                  <h4 className="text-[15px] font-bold">{w.title}</h4>
                  <p className="text-[13px] leading-snug mt-0.5">{w.text}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
