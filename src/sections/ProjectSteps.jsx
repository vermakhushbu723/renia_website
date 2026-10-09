import SectionTitle from '../components/SectionTitle'
import IconTile from '../components/IconTile'
import { projectSteps } from '../data/content'
import Tilt from '../components/Tilt'

export default function ProjectSteps() {
  return (
    <section className="section bg-pattern">
      <div className="container-x">
        <SectionTitle
          tag="How we work"
          title="From drawing to installation in five steps"
          text="A simple, transparent process for homes and large hotel projects alike."
        />
        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] border-t-2 border-dashed border-primary-200" aria-hidden />
          {projectSteps.map((s, i) => (
            <Tilt flat key={s.title} delay={i * 90} className="relative text-center px-2 last:col-span-2 md:last:col-span-1">
              <div className="relative inline-block">
                <IconTile icon={s.icon} color={s.color} size="lg" className="ring-4 ring-white" />
                <span className="absolute -top-2 -right-2 h-6 w-6 grid place-items-center rounded-full bg-secondary text-white text-xs font-bold ring-2 ring-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold">{s.title}</h3>
              <p className="mt-1 text-sm">{s.text}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}
