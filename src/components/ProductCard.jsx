import { Button, Tag } from 'antd'
import { Plus } from 'lucide-react'
import Tilt from './Tilt'
import { photo, inr, categories } from '../data/content'
import { useQuote } from './quoteContext'

export default function ProductCard({ p, index = 0, instant = false }) {
  const { add } = useQuote()
  const cat = categories.find((c) => c.key === p.cat)

  return (
    <Tilt instant={instant} delay={(index % 4) * 70} className="group flex h-full flex-col rounded-2xl bg-white ring-1 ring-line overflow-hidden">
      <div className="relative aspect-[16/11] overflow-hidden bg-light">
        <img
          src={photo(p.img, 600)}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {p.tag && (
          <Tag color={p.tag === 'New' ? 'blue' : p.tag === 'Premium' ? 'purple' : 'orange'} className="!absolute left-3 top-3 !m-0 !font-bold">
            {p.tag}
          </Tag>
        )}
        <span className="absolute right-3 top-3 rounded-md bg-white/95 px-2 py-0.5 text-[11px] font-bold text-secondary">{p.finish}</span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary-dark">{cat?.label}</p>
        <h3 className="mt-1 text-[15px] font-bold leading-snug line-clamp-2 min-h-[40px]">{p.name}</h3>
        <p className="mt-1 text-xs font-semibold">Item code: {p.code}</p>
        <div className="mt-auto pt-3 flex items-center justify-between gap-2 border-t border-dashed border-line mt-3">
          <div>
            <p className="text-[11px] font-semibold">MRP</p>
            <p className="font-heading font-bold text-lg text-heading leading-none">₹{inr(p.mrp)}</p>
          </div>
          <Button type="primary" icon={<Plus size={16} />} onClick={() => add(p.code)}>
            Add to quote
          </Button>
        </div>
      </div>
    </Tilt>
  )
}
