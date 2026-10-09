import { Rate, Avatar } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import SectionTitle from '../components/SectionTitle'
import { Icon3d } from '../components/IconTile'
import { testimonials, photo } from '../data/content'

export default function Testimonials() {
  return (
    <section className="relative section overflow-hidden bg-soft">
      <img src={photo('photo-1620626011761-996317b8d101', 1920)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[.06]" />
      <div className="container-x relative">
        <SectionTitle
          tag="Client stories"
          title="Loved by homeowners, hotels and architects"
          text="What our clients say after their bathrooms are finished."
        />
        <Swiper
          className="slider-pad"
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop
          speed={700}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{ 680: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="!h-auto">
              <div className="h-full rounded-2xl bg-white ring-1 ring-line p-5 flex flex-col shadow-[0_14px_30px_-22px_rgba(9,44,76,.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-22px_rgba(9,44,76,.45)] hover:ring-primary-200">
                <div className="flex items-center justify-between">
                  <Rate disabled defaultValue={5} className="!text-sm !text-primary" />
                  <Icon3d name="quote" size={36} />
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-heading/80 flex-1 min-h-[110px]">{t.text}</p>
                <div className="mt-4 pt-4 border-t border-line flex items-center gap-3">
                  <Avatar src={photo(t.img, 96)} size={46} className="!ring-2 !ring-primary-200" />
                  <div>
                    <p className="font-heading font-bold text-heading text-sm">{t.name}</p>
                    <p className="text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
