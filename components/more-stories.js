import Container from '@components/container'
import PostPreview from '@components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <Container>
      <div className="columns">
        {posts.map((post) => (
          <div className="column" key={post.slug}>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
