import { Collapse, Button } from 'antd'
import { Plus } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { Icon3d } from '../components/IconTile'
import { faqs, photo, company } from '../data/content'

export default function Faq() {
  return (
    <section className="section bg-cool">
      <div className="container-x grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <SectionTitle
            center={false}
            tag="FAQ"
            title="Questions we hear often"
            text="Cannot find your answer? Call or WhatsApp our team."
          />
          <div className="relative rounded-2xl overflow-hidden">
            <img src={photo('photo-1595514535415-dae8580c416c', 800)} alt="Designer wash basins" className="h-60 w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 grid place-items-center rounded-xl bg-white shadow">
                  <Icon3d name="headset" size={30} />
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">Talk to a product expert</p>
                  <p className="text-white/75 text-xs">{company.phone}</p>
                </div>
              </div>
              <a href={`tel:${company.phoneRaw}`}><Button type="primary">Call</Button></a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Collapse
            accordion
            defaultActiveKey={['0']}
            expandIconPlacement="end"
            expandIcon={({ isActive }) => (
              <Plus size={18} className={`text-primary-dark transition-transform ${isActive ? 'rotate-45' : ''}`} />
            )}
            className="!bg-transparent !border-0 [&_.ant-collapse-item]:!mb-3 [&_.ant-collapse-item]:!rounded-xl [&_.ant-collapse-item]:!border [&_.ant-collapse-item]:!border-line [&_.ant-collapse-item]:!bg-white [&_.ant-collapse-item]:overflow-hidden [&_.ant-collapse-content]:!border-0"
            items={faqs.map((f, i) => ({
              key: String(i),
              label: <span className="font-heading font-semibold text-heading text-[15px]">{f.q}</span>,
              children: <p className="text-[15px] leading-relaxed -mt-2">{f.a}</p>,
            }))}
          />
        </div>
      </div>
    </section>
  )
}
