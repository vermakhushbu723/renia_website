import { Button } from 'antd'
import { Link } from 'react-router-dom'
import IconTile from '../components/IconTile'

export default function NotFound() {
  return (
    <section className="section bg-light">
      <div className="container-x text-center py-10">
        <IconTile icon="bathtub" size="lg" />
        <h1 className="mt-4 text-5xl font-bold text-secondary">404</h1>
        <p className="mt-2 text-lg">The page you are looking for does not exist.</p>
        <Link to="/">
          <Button type="primary" size="large" className="!mt-6">Back to home</Button>
        </Link>
      </div>
    </section>
  )
}
