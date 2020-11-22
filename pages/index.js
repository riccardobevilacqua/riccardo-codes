import Head from 'next/head'
import MoreStories from '../components/more-stories'
import MainStory from '../components/main-story'
import Layout from '../components/layout'
import Footer from '../components/footer'
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
        <Footer />
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
