import { Button } from 'antd'
import { Icon3d } from '../components/IconTile'
import { photo, company } from '../data/content'
import { useQuote } from '../components/quoteContext'

export default function CtaBanner() {
  const { openQuote } = useQuote()
  return (
    <section className="bg-white py-10 lg:py-12">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-10 md:px-12 md:py-12">
          <img
            src={photo('photo-1603825491103-bd638b1873b0', 1600)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="!text-white text-2xl md:text-[34px] leading-tight font-bold max-w-xl">
                Planning a new bathroom or a hotel project?
              </h2>
              <p className="mt-2 text-white/75 max-w-xl">
                Share your requirement and get a room-wise quotation with the best project price within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button type="primary" size="large" icon={<Icon3d name="document" size={20} />} onClick={openQuote}>
                Get a Quotation
              </Button>
              <a href={`tel:${company.phoneRaw}`}>
                <Button size="large" ghost className="!font-bold" icon={<Icon3d name="phone" size={20} />}>
                  Call us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
