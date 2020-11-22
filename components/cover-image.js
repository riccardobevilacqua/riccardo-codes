import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, src, slug, width = 2000, height = 1000 }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
    />
  )

  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
          image
        )}
    </>
  )
}
