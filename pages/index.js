import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import MainStory from '../components/main-story'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { BLOG_TITLE } from '../lib/constants'

export default function Index({ allPosts }) {
  const latestPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_TITLE}</title>
        </Head>
        <Container>
          {latestPost && (
            <MainStory
              title={latestPost.title}
              coverImage={latestPost.coverImage}
              date={latestPost.date}
              slug={latestPost.slug}
              excerpt={latestPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
