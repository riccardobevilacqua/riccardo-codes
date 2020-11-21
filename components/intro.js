import { BLOG_TITLE, BLOG_INTRO } from '../lib/constants'

export default function Intro() {
  return (
    <section>
      <h1>
        {BLOG_TITLE}
      </h1>
      <h4>
        {BLOG_INTRO}
      </h4>
    </section>
  )
}
