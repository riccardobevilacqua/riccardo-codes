import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <>
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
      <div className="content is-medium">
        <p>{excerpt}</p>
      </div>
    </>
  )
}
