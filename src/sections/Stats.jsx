import { stats, photo } from '../data/content'
import Tilt from '../components/Tilt'
import { Icon3d } from '../components/IconTile'

const statIcons = ['clock', 'city-buildings', 'spa', 'layers']

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <img src={photo('photo-1566073771259-6a8506099945', 1920)} alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-secondary/88" />
      <div className="container-x relative py-10 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((s, i) => {
          return (
            <Tilt key={s.label} delay={i * 80} className="flex items-center gap-4 rounded-xl bg-white/5 ring-1 ring-white/15 p-4 backdrop-blur-sm">
              <span className="h-12 w-12 md:h-14 md:w-14 shrink-0 grid place-items-center rounded-xl bg-white shadow-lg">
                <Icon3d name={statIcons[i]} size={34} />
              </span>
              <div>
                <p className="font-heading font-bold text-2xl md:text-3xl text-white">{s.value}</p>
                <p className="text-[13px] text-white/75">{s.label}</p>
              </div>
            </Tilt>
          )
        })}
      </div>
    </section>
  )
}
