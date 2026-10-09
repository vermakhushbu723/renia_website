import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { Icon3d } from '../components/IconTile'
import { spaces, photo } from '../data/content'

// Shown twice so the 3D coverflow loop always has enough slides
const slides = [...spaces, ...spaces]

export default function Spaces() {
  return (
    <section className="section bg-soft overflow-hidden">
      <div className="container-x">
        <SectionTitle
          tag="Shop by space"
          title="Complete packages for every room"
          text="Just like our quotations, we plan fittings room by room so nothing is missed on site."
        />
      </div>
      <Swiper
        className="coverflow slider-pad"
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        speed={700}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        coverflowEffect={{ rotate: 28, stretch: 0, depth: 140, modifier: 1, slideShadows: true }}
        pagination={{ clickable: true }}
      >
        {slides.map(({ title, icon, img, text }, i) => (
          <SwiperSlide key={`${title}-${i}`} className="!h-auto">
            <Link to="/products" className="group relative block h-80 md:h-[360px] rounded-2xl overflow-hidden shadow-[0_24px_44px_-24px_rgba(9,44,76,.6)]">
              <img
                src={photo(img, 700)}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="h-12 w-12 grid place-items-center rounded-xl bg-white shadow-lg">
                  <Icon3d name={icon} size={32} />
                </span>
                <h3 className="mt-3 !text-white text-xl font-bold">{title}</h3>
                <p className="mt-1 text-sm text-white/80">{text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                  View products <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
