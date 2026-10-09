import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input, Select, Empty } from 'antd'
import { Search } from 'lucide-react'
import { Icon3d } from '../components/IconTile'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import CtaBanner from '../sections/CtaBanner'
import { products, categories } from '../data/content'

const sorts = [
  { value: 'popular', label: 'Popular' },
  { value: 'low', label: 'MRP: Low to high' },
  { value: 'high', label: 'MRP: High to low' },
]

export default function Products() {
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') || 'all'
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('popular')

  const setCat = (key) => setParams(key === 'all' ? {} : { cat: key })

  const list = useMemo(() => {
    const term = q.trim().toLowerCase()
    const filtered = products.filter(
      (p) =>
        (cat === 'all' || p.cat === cat) &&
        (!term || p.name.toLowerCase().includes(term) || p.code.toLowerCase().includes(term)),
    )
    if (sort === 'low') return [...filtered].sort((a, b) => a.mrp - b.mrp)
    if (sort === 'high') return [...filtered].sort((a, b) => b.mrp - a.mrp)
    return filtered
  }, [cat, q, sort])

  const chips = [{ key: 'all', label: 'All products', icon: 'layers' }, ...categories]
  const countFor = (key) => (key === 'all' ? products.length : products.filter((p) => p.cat === key).length)

  return (
    <>
      <PageHero
        crumb="Products"
        title="Luxury bath and kitchen fittings"
        text="Browse showers, faucets, tub spouts, valves and kitchen faucets. Add items to your quote list for the best price."
        img="photo-1584622650111-993a426fbf0a"
      />

      <section className="section bg-cool">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
          <aside className="min-w-0 lg:sticky lg:top-24 self-start rounded-2xl bg-white ring-1 ring-line p-3">
            <p className="px-2 pt-1 pb-2 text-xs font-bold uppercase tracking-wider text-secondary">Categories</p>
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {chips.map(({ key, label, icon }) => {
                const active = cat === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCat(key)}
                    className={`flex shrink-0 items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm font-semibold transition-colors cursor-pointer ${
                      active ? 'bg-primary text-white' : 'text-secondary hover:bg-primary-50'
                    }`}
                  >
                    <span className={`h-8 w-8 shrink-0 grid place-items-center rounded-lg ${active ? 'bg-white' : 'bg-primary-50'}`}>
                      <Icon3d name={icon} size={22} />
                    </span>
                    <span className="flex-1 whitespace-nowrap lg:whitespace-normal">{label}</span>
                    {countFor(key) > 0 && <span className={`text-xs ${active ? 'text-white/85' : 'text-body'}`}>{countFor(key)}</span>}
                  </button>
                )
              })}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input
                size="large"
                allowClear
                prefix={<Search size={18} className="text-body" />}
                placeholder="Search by product name or item code"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <Select size="large" value={sort} onChange={setSort} options={sorts} className="sm:!w-52" />
            </div>
            <p className="mb-3 text-sm">
              Showing <b className="text-secondary">{list.length}</b> products
            </p>
            {list.length ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {list.map((p, i) => (
                  <ProductCard key={p.code} p={p} index={i} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-white ring-1 ring-line py-14">
                <Empty description="No products found here yet. Call us, we will source it for you." />
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
