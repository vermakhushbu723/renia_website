// Realistic 3D image icon (Icons8 3D Fluency) on a soft tinted tile, colors from the admin theme palette
const icon3d = (name) => `https://img.icons8.com/3d-fluency/94/${name}.png`

const tints = {
  orange: 'from-[#FFF4E8] to-[#FFE3CB] ring-[#FFD6B0]',
  navy: 'from-[#EEF3F8] to-[#D9E3EE] ring-[#C9D6E4]',
  green: 'from-[#EEFAF3] to-[#D3F2E1] ring-[#BDEBD2]',
  blue: 'from-[#EEF4FF] to-[#D6E4FF] ring-[#C2D6FF]',
  purple: 'from-[#F3EFFF] to-[#E1D8FF] ring-[#D2C6FF]',
  teal: 'from-[#EAFBF8] to-[#CCF3EC] ring-[#B5EBE1]',
  pink: 'from-[#FFF0F7] to-[#FFD9EB] ring-[#FFC7E1]',
  red: 'from-[#FFF1EA] to-[#FFDCCB] ring-[#FFCBB2]',
  white: 'from-white to-[#F5F7FA] ring-white/60',
}

const sizes = {
  xs: { box: 'h-8 w-8 rounded-lg', img: 22 },
  sm: { box: 'h-11 w-11 rounded-xl', img: 28 },
  md: { box: 'h-14 w-14 rounded-2xl', img: 36 },
  lg: { box: 'h-16 w-16 rounded-2xl', img: 42 },
}

// Bare 3D image icon for inline use (buttons, lists, contact rows)
export function Icon3d({ name, size = 20, className = '' }) {
  return <img src={icon3d(name)} alt="" width={size} height={size} loading="lazy" className={`inline-block shrink-0 ${className}`} />
}

export default function IconTile({ icon, color = 'orange', size = 'md', className = '' }) {
  const s = sizes[size]
  return (
    <span
      className={`icon3d inline-grid shrink-0 place-items-center bg-gradient-to-br ring-1 shadow-[0_8px_18px_-10px_rgba(9,44,76,.35)] ${tints[color]} ${s.box} ${className}`}
    >
      <img src={icon3d(icon)} alt="" width={s.img} height={s.img} loading="lazy" className="drop-shadow-[0_4px_6px_rgba(9,44,76,.25)]" />
    </span>
  )
}
