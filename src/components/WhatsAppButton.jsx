import { company } from '../data/content'
import { Icon3d } from './IconTile'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Grandeur Bath, I need a quotation.')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 h-14 w-14 grid place-items-center rounded-full bg-white shadow-xl shadow-[#25D366]/40 ring-2 ring-[#25D366]/40 hover:scale-110 transition-transform"
    >
      <Icon3d name="whatsapp" size={40} />
    </a>
  )
}
