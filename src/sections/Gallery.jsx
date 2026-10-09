import { Image } from 'antd'
import { Icon3d } from '../components/IconTile'
import SectionTitle from '../components/SectionTitle'
import { gallery, photo } from '../data/content'
import Tilt from '../components/Tilt'

export default function Gallery() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionTitle
          tag="Our work"
          title="Recent bathrooms we have fitted"
          text="A look at homes, hotels and resorts finished with Grandeur Bath fittings."
        />
        <Image.PreviewGroup>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((g, i) => (
              <Tilt
                key={g.img}
                delay={(i % 3) * 70}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? 'lg:row-span-2' : ''}`}
              >
                <Image
                  src={photo(g.img, 900)}
                  alt={g.title}
                  rootClassName="!block h-full"
                  className={`!w-full object-cover ${i === 0 ? '!h-48 lg:!h-full' : '!h-48'}`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/90 to-transparent p-4">
                  <p className="font-heading font-semibold text-white text-sm md:text-base">{g.title}</p>
                  <p className="flex items-center gap-1 text-xs text-white/75">
                    <Icon3d name="location" size={14} /> {g.place}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </Image.PreviewGroup>
      </div>
    </section>
  )
}
