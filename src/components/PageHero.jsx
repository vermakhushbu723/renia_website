import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import Tilt from './Tilt'
import { photo } from '../data/content'

export default function PageHero({ title, text, crumb, img }) {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <img src={photo(img, 1920)} alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/65 to-secondary/5" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-secondary/50 to-transparent" />
      <Tilt flat className="container-x relative py-14 md:py-20 lg:py-24">
        <Breadcrumb
          className="[&_a]:!text-white/80 [&_.ant-breadcrumb-separator]:!text-white/60 [&_li:last-child]:!text-primary [&_li]:!font-semibold"
          items={[{ title: <Link to="/">Home</Link> }, { title: crumb }]}
        />
        <h1 className="mt-3 !text-white text-[32px] md:text-[46px] font-extrabold leading-[1.12] max-w-2xl drop-shadow-[0_4px_20px_rgba(0,0,0,.3)]">
          {title}
        </h1>
        {text && <p className="mt-3 text-white/85 text-base md:text-lg max-w-xl leading-relaxed">{text}</p>}
        <span className="mt-5 block h-1 w-16 rounded-full bg-primary" />
      </Tilt>
    </section>
  )
}
