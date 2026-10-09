import { Icon3d } from '../components/IconTile'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Segments from '../sections/Segments'
import ProjectSteps from '../sections/ProjectSteps'
import Gallery from '../sections/Gallery'
import Testimonials from '../sections/Testimonials'
import CtaBanner from '../sections/CtaBanner'
import { photo } from '../data/content'

const benefits = [
  'Room-wise quotations: master, guest and kitchen',
  'Special project and bulk pricing',
  'Same finish across every room and floor',
  'Phased delivery matched to your site schedule',
  'Rough-in and concealed parts planned upfront',
  'Spares and warranty support after handover',
]

export default function Hospitality() {
  return (
    <>
      <PageHero
        crumb="Hotels and Projects"
        title="Luxury fittings for hotels, resorts and large projects"
        text="One supplier for every guest room, suite, spa and public washroom, with pricing and delivery planned for your project."
        img="photo-1582719478250-c89cae4dc85b"
      />

      <section className="section bg-pattern">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img src={photo('photo-1631049307264-da0ec9d70304', 600)} alt="Hotel guest room" className="h-56 md:h-72 w-full object-cover rounded-2xl" loading="lazy" />
            <img src={photo('photo-1600566752355-35792bedcfea', 600)} alt="Hotel bathroom" className="h-56 md:h-72 w-full object-cover rounded-2xl mt-8" loading="lazy" />
            <img src={photo('photo-1551882547-ff40c63fe5fa', 900)} alt="Resort" className="col-span-2 h-44 w-full object-cover rounded-2xl" loading="lazy" />
          </div>
          <div>
            <SectionTitle
              center={false}
              tag="Hospitality supply"
              title="Built for the way hotel projects run"
              text="Hotel bathrooms need fittings that look premium on day one and survive thousands of guests. We help you choose the right products and deliver them room by room."
            />
            <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 -mt-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 rounded-xl bg-light ring-1 ring-line p-3 text-sm font-semibold text-secondary">
                  <Icon3d name="ok" size={20} className="mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Segments />
      <ProjectSteps />
      <Gallery />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
