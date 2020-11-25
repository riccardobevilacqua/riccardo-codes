import { BLOG_URL, BLOG_TITLE, BLOG_SUBTITLE} from '@lib/constants'

export function generateRssItem(post) {
  return `
    <item>
      <guid>${BLOG_URL}/posts/${post.slug}</guid>
      <title>${post.title}</title>
      <link>${BLOG_URL}/posts/${post.slug}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
  `
}

export function generateRss(posts) {
  return `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${BLOG_TITLE}</title>
        <link>${BLOG_URL}</link>
        <description>${BLOG_SUBTITLE}</description>
        <language>en</language>
        <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
        <atom:link href="${BLOG_URL}" rel="self" type="application/rss+xml"/>
        ${posts.map(generateRssItem).join('')}
      </channel>
    </rss>
  `
}
