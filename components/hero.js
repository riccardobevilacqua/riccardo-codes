import Link from 'next/link'

import { BLOG_TITLE, BLOG_SUBTITLE } from '../lib/constants'

export default function Hero() {
  return (
    <section className="hero is-dark is-bold">
      <Link href="/">
        <a>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{BLOG_TITLE}</h1>
              <h2 className="subtitle">{BLOG_SUBTITLE}</h2>
            </div>
          </div>
        </a>
      </Link>
    </section>
  )
}
