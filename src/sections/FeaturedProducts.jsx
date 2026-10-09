import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import { products } from '../data/content'

const featured = ['ISH1118', 'T31339-WL', '91355', 'S777', 'ITS62339', 'RP70171PR', '22901-I', 'T853339', 'IAO36005', 'ITS61339']

const arrow =
  'h-11 w-11 grid place-items-center rounded-full bg-white text-secondary ring-1 ring-line shadow-sm hover:bg-primary hover:text-white hover:ring-primary transition-colors cursor-pointer'

export default function FeaturedProducts() {
  const list = featured.map((c) => products.find((p) => p.code === c))
  const swiperRef = useRef(null)

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
          <div className="[&>div]:mb-0">
            <SectionTitle
              center={false}
              tag="Featured products"
              title="Bestselling fittings"
              text="Add products to your quote list and get the best project price."
            />
          </div>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous products" className={arrow} onClick={() => swiperRef.current?.slidePrev()}>
              <ChevronLeft size={20} />
            </button>
            <button type="button" aria-label="Next products" className={arrow} onClick={() => swiperRef.current?.slideNext()}>
              <ChevronRight size={20} />
            </button>
            <Link to="/products" className="ml-2">
              <Button size="large" className="!font-bold !text-secondary">
                View all <ArrowRight size={17} />
              </Button>
            </Link>
          </div>
        </div>

        <Swiper
          className="slider-pad"
          modules={[Autoplay, Pagination]}
          onSwiper={(s) => (swiperRef.current = s)}
          spaceBetween={16}
          slidesPerView={1.15}
          speed={600}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            560: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {list.map((p, i) => (
            <SwiperSlide key={p.code} className="!h-auto">
              <ProductCard p={p} index={i} instant />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
