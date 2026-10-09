import { Drawer, InputNumber, Button, Empty } from 'antd'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import IconTile from './IconTile'
import LeadForm from './LeadForm'
import { useQuote } from './quoteContext'
import { products, photo, inr } from '../data/content'

export default function QuoteDrawer({ open, onClose }) {
  const { items, setQty, remove, clear } = useQuote()
  const rows = items.map((i) => ({ ...i, p: products.find((p) => p.code === i.code) })).filter((r) => r.p)
  const total = rows.reduce((s, r) => s + r.p.mrp * r.qty, 0)

  return (
    <Drawer
      open={open}
      onClose={onClose}
      size={460}
      title={
        <span className="flex items-center gap-3">
          <IconTile icon="document" size="sm" />
          <span className="font-heading">Your quote list</span>
        </span>
      }
    >
      {rows.length === 0 ? (
        <Empty description="No products added yet">
          <Link to="/products" onClick={onClose}>
            <Button type="primary">Browse products</Button>
          </Link>
        </Empty>
      ) : (
        <>
          <ul className="list-none p-0 m-0 divide-y divide-line">
            {rows.map(({ code, qty, p }) => (
              <li key={code} className="flex gap-3 py-3">
                <img src={photo(p.img, 160)} alt={p.name} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-heading leading-snug line-clamp-2">{p.name}</p>
                  <p className="text-xs mt-0.5">Code {code} &middot; MRP ₹{inr(p.mrp)}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <InputNumber size="small" min={1} max={999} value={qty} onChange={(v) => setQty(code, v || 1)} />
                    <Button size="small" type="text" danger icon={<Trash2 size={15} />} onClick={() => remove(code)} aria-label="Remove" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-between rounded-xl bg-primary-50 px-4 py-3">
            <span className="text-sm font-semibold text-secondary">Estimated MRP total</span>
            <span className="font-heading font-bold text-heading">₹{inr(total)}</span>
          </div>
          <p className="mt-2 text-xs">Final prices with project discounts are shared in your quotation.</p>
          <Button type="link" size="small" className="!px-0" onClick={clear}>Clear list</Button>

          <div className="mt-4 border-t border-line pt-4">
            <h4 className="text-base font-semibold mb-3">Send quotation request</h4>
            <LeadForm
              submitText="Request quotation"
              onDone={() => {
                clear()
                onClose()
              }}
            />
          </div>
        </>
      )}
    </Drawer>
  )
}
