import { useRef, useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { photo } from '../data/content'
import { Icon3d } from '../components/IconTile'
import { useQuote } from '../components/quoteContext'

const slides = [
  {
    bg: 'photo-1507652313519-d4e9174996dd',
    tag: 'Luxury Bath and Kitchen Fittings',
    title: 'Bathrooms that feel like a',
    highlight: 'five-star hotel',
    text: 'Premium showers, faucets, tub spouts, wash basins, cisterns and kitchen faucets for luxury homes, hotels and resorts.',
    side: 'photo-1576698483491-8c43f0862543',
    card: { img: 'photo-1584622650111-993a426fbf0a', label: 'Bestseller', name: 'Delta 10 inch H2Okinetic Shower' },
  },
  {
    bg: 'photo-1603825491103-bd638b1873b0',
    tag: 'Hotel and Project Supply',
    title: 'Room-wise fittings for',
    highlight: 'hotels and resorts',
    text: 'One supplier for every guest room, suite and spa, with project pricing and phased delivery to your site.',
    side: 'photo-1631049307264-da0ec9d70304',
    card: { img: 'photo-1600566752355-35792bedcfea', label: 'Project supply', name: 'Hotel bathroom packages' },
  },
  {
    bg: 'photo-1556912173-3bb406ef7e77',
    tag: 'Kitchen Collection',
    title: 'Kitchen faucets that',
    highlight: 'work as hard as you',
    text: 'Pull-down kitchen faucets and premium sinks with smooth spray control and a finish that lasts for years.',
    side: 'photo-1600566752229-250ed79470f8',
    card: { img: 'photo-1556911220-bff31c812dba', label: 'Premium', name: 'Delta Ixa Jive Pull Down Kitchen Faucet' },
  },
]

const points = [
  { icon: 'guarantee', text: '100% genuine with warranty' },
  { icon: 'spa', text: 'Trusted by hotels and architects' },
  { icon: 'delivery', text: 'Pan-India delivery' },
]

export default function Hero() {
  const { openQuote } = useQuote()
  const swiperRef = useRef(null)
  const [active, setActive] = useState(0)

  return (
    <section className="hero-slider relative bg-secondary">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        rewind
        speed={900}
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActive(s.realIndex)}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.bg}>
            <div className="relative overflow-hidden">
              <img
                src={photo(s.bg, 1920)}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover ${i === active ? 'hero-bg-on' : ''}`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/10" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-secondary/60 to-transparent" />

              <div
                key={i === active ? 'on' : 'off'}
                className={`container-x relative grid lg:grid-cols-12 gap-8 items-center pt-8 pb-16 md:pt-10 md:pb-20 lg:min-h-[540px] ${i === active ? 'hero-on' : 'opacity-0'}`}
              >
                <div className="lg:col-span-7">
                  <span className="hero-anim [--d:0ms] inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/25 px-3.5 py-1.5 text-[13px] font-bold text-white backdrop-blur">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    {s.tag}
                  </span>

                  <h1 className="hero-anim [--d:120ms] mt-4 !text-white text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.1] font-extrabold drop-shadow-[0_4px_20px_rgba(0,0,0,.25)]">
                    {s.title} <span className="text-primary">{s.highlight}</span>
                  </h1>
                  <p className="hero-anim [--d:240ms] mt-4 text-base md:text-lg leading-relaxed text-white/80 max-w-xl">{s.text}</p>

                  <div className="hero-anim [--d:360ms] mt-6 flex flex-wrap gap-3">
                    <Link to="/products">
                      <Button type="primary" size="large">
                        Explore Collection <ArrowRight size={18} />
                      </Button>
                    </Link>
                    <Button size="large" ghost className="!font-bold !border-white/70" icon={<Icon3d name="document" size={20} />} onClick={openQuote}>
                      Get a Quotation
                    </Button>
                  </div>

                  <ul className="hero-anim [--d:480ms] mt-6 flex flex-wrap gap-x-5 gap-y-2.5 list-none p-0">
                    {points.map((p) => (
                      <li key={p.text} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                        <span className="h-9 w-9 grid place-items-center rounded-lg bg-white/95 shadow">
                          <Icon3d name={p.icon} size={24} />
                        </span>
                        {p.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 hidden lg:block">
                  <div className="float3d relative ml-auto w-[88%]">
                    <img
                      src={photo(s.side, 700)}
                      alt=""
                      className="h-[380px] w-full object-cover rounded-3xl ring-4 ring-white/20 shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)]"
                    />
                    <div className="absolute -left-10 bottom-8 w-56 rounded-2xl bg-white p-3 shadow-2xl [transform:translateZ(60px)]">
                      <img src={photo(s.card.img, 400)} alt="" className="h-28 w-full rounded-xl object-cover" />
                      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-primary-dark">{s.card.label}</p>
                      <p className="text-sm font-bold text-heading leading-snug">{s.card.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10">
        <div className="container-x flex justify-end gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="pointer-events-auto h-10 w-10 grid place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur hover:bg-primary transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="pointer-events-auto h-10 w-10 grid place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur hover:bg-primary transition-colors cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
