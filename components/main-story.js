import Link from 'next/link'
import Container from '../components/container'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'

export default function MainStory({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <Container>
      <div className="mb-4">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <h3 className="title">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <h4 className="subtitle">
        <DateFormatter dateString={date} />
      </h4>
      <p>{excerpt}</p>
    </Container>
  )
}
