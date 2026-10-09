import Hero from '../sections/Hero'
import Categories from '../sections/Categories'
import FeaturedProducts from '../sections/FeaturedProducts'
import Stats from '../sections/Stats'
import Spaces from '../sections/Spaces'
import WhyUs from '../sections/WhyUs'
import Segments from '../sections/Segments'
import Gallery from '../sections/Gallery'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'
import CtaBanner from '../sections/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Spaces />
      <FeaturedProducts />
      <Stats />
      <WhyUs />
      <Segments />
      <Gallery />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  )
}
