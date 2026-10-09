import Tilt from './Tilt'

export default function SectionTitle({ tag, title, text, center = true, light = false }) {
  return (
    <Tilt flat className={`mb-7 ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-xl'}`}>
      {tag && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3 text-[11px] font-bold tracking-[.16em] uppercase ring-1 ${
            light ? 'bg-white/10 text-primary ring-white/20' : 'bg-primary-50 text-primary-dark ring-primary-100'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {tag}
        </span>
      )}
      <h2 className={`text-[26px] md:text-[36px] leading-[1.2] font-bold ${light ? '!text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-3 text-[15px] md:text-base leading-relaxed ${light ? 'text-white/75' : ''}`}>{text}</p>}
    </Tilt>
  )
}
