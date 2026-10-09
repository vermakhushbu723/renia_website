import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import IconTile from '../components/IconTile'
import Stats from '../sections/Stats'
import WhyUs from '../sections/WhyUs'
import Testimonials from '../sections/Testimonials'
import CtaBanner from '../sections/CtaBanner'
import { photo, company } from '../data/content'
import Tilt from '../components/Tilt'

const values = [
  { icon: 'diamond-ring', color: 'orange', title: 'Quality first', text: 'We only supply products we would fit in our own homes.' },
  { icon: 'handshake', color: 'blue', title: 'Honest pricing', text: 'Clear quotations with no hidden charges or surprises.' },
  { icon: 'security-checked', color: 'green', title: 'Genuine and warranted', text: 'Every product is genuine with manufacturer warranty.' },
  { icon: 'headset', color: 'purple', title: 'Always reachable', text: 'Real people on phone and WhatsApp, before and after sale.' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Bringing hotel-grade luxury to every bathroom"
        text={`Grandeur Bath is the luxury bath fittings brand of ${company.legal}, based in Sahibabad, Ghaziabad.`}
        img="photo-1564540583246-934409427776"
      />

      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img src={photo('photo-1576698483491-8c43f0862543', 600)} alt="Marble basin with faucet" className="h-56 md:h-80 w-full object-cover rounded-2xl" loading="lazy" />
            <img src={photo('photo-1620626011761-996317b8d101', 600)} alt="Bright bathroom with bathtub" className="h-56 md:h-80 w-full object-cover rounded-2xl mt-8" loading="lazy" />
          </div>
          <div>
            <SectionTitle
              center={false}
              tag="Our story"
              title="From pipes and tubes to luxury bathrooms"
              text={`${company.legal} has worked with plumbing and bath products for years. Grandeur Bath brings that experience to homeowners, architects and hotels who want premium showers, faucets and fittings with dependable service.`}
            />
            <div className="grid sm:grid-cols-2 gap-3 -mt-2">
              <div className="flex items-start gap-3 rounded-xl bg-light ring-1 ring-line p-4">
                <IconTile icon="rocket" color="orange" size="sm" />
                <div>
                  <p className="font-heading font-semibold text-heading">Our mission</p>
                  <p className="text-[13px]">Make luxury bathrooms simple to plan, buy and install.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-light ring-1 ring-line p-4">
                <IconTile icon="eye" color="navy" size="sm" />
                <div>
                  <p className="font-heading font-semibold text-heading">Our vision</p>
                  <p className="text-[13px]">Be the most trusted bath fittings partner in North India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section bg-soft">
        <div className="container-x">
          <SectionTitle tag="Our values" title="What we stand for" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <Tilt key={v.title} delay={i * 80} className="rounded-2xl bg-white ring-1 ring-line p-5">
                <IconTile icon={v.icon} color={v.color} />
                <h3 className="mt-4 text-[17px] font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{v.text}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
