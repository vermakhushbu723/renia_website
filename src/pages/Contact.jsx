import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import IconTile from '../components/IconTile'
import LeadForm from '../components/LeadForm'
import Faq from '../sections/Faq'
import { company, photo } from '../data/content'
import Tilt from '../components/Tilt'

const channels = [
  { icon: 'phone', color: 'orange', title: 'Call us', lines: [company.phone, 'Mon to Sat, 10 am - 7 pm'], href: `tel:${company.phoneRaw}` },
  { icon: 'whatsapp', color: 'green', title: 'WhatsApp', lines: [company.phone, 'Send photos and drawings'], href: `https://wa.me/${company.whatsapp}` },
  { icon: 'email', color: 'blue', title: 'Email', lines: [company.email, 'Reply within 24 hours'], href: `mailto:${company.email}` },
  { icon: 'location', color: 'purple', title: 'Visit us', lines: ['Prakash Industrial Estate', 'Sahibabad, Ghaziabad'], href: 'https://maps.google.com/?q=Prakash+Industrial+Estate+Sahibabad+Ghaziabad' },
]

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let us plan your dream bathroom"
        text="Ask for a quotation, visit us or talk to our team about your home or hotel project."
        img="photo-1604709177225-055f99402ea3"
      />

      <section className="section bg-pattern">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((c, i) => (
              <Tilt
                as="a"
                key={c.title}
                delay={i * 80}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white ring-1 ring-line p-4"
              >
                <IconTile icon={c.icon} color={c.color} size="lg" />
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-heading">{c.title}</p>
                  <p className="text-sm text-secondary font-semibold truncate">{c.lines[0]}</p>
                  <p className="text-xs">{c.lines[1]}</p>
                </div>
              </Tilt>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-2xl bg-white ring-1 ring-line p-5 md:p-7 shadow-[0_20px_40px_-28px_rgba(9,44,76,.35)]">
              <SectionTitle center={false} tag="Request a quotation" title="Tell us what you need" />
              <div className="-mt-3">
                <LeadForm submitText="Send requirement" withMessage />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden h-48">
                <img src={photo('photo-1600488999585-e4364713b90a', 800)} alt="Bathroom vanity display" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <p className="font-heading font-semibold text-white">{company.legal}</p>
                  <p className="text-xs text-white/80">{company.address}</p>
                </div>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden ring-1 ring-line min-h-[280px]">
                <iframe
                  title="Grandeur Bath office location"
                  src="https://maps.google.com/maps?q=Prakash%20Industrial%20Estate%20Sahibabad%20Ghaziabad&z=15&output=embed"
                  className="h-full w-full min-h-[280px] border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  )
}
