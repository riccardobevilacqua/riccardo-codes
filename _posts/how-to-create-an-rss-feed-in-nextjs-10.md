---
title: 'How to create an RSS feed in Next.js 10'
excerpt: 'In Next.js generating an RSS feed doesn''t come out-of-the-box. This guide will walk you through the short but not so straightforward process to create an RSS feed for your Next.js 10 blog.'
coverImage: '/assets/blog/how-to-create-an-rss-feed-in-nextjs-10/cover.jpg'
date: '2020-11-27'
ogImage:
  url: '/assets/blog/how-to-create-an-rss-feed-in-nextjs-10/cover.jpg'
---

### What is an RSS feed?

[RSS](https://en.wikipedia.org/wiki/RSS) (RDF Site Summary or Really Simple Syndication) is an XML file used for providing users with frequently updated content in a standardized, computer-readable data format.

### Why do you need an RSS feed?

Millions of users every day enjoy reading from several websites through a *feed reader*, such as [Feedly](feedly.com/). You need to provide an RSS feed for your blog not to give up a potentially large share of audience.

Furthermore you can use your RSS feed to cross-post to other websites, such as the popular [dev.to](https://dev.to/).

### The Kessel Run in less than twelve parsecs

Create a file `rss.js` in `lib` folder, or another directory of your preference other than `pages`, which as you probably know is a special directory reserved to routable content.

The new file would look like this:

```javascript
import { BLOG_URL, BLOG_TITLE, BLOG_SUBTITLE} from '@lib/constants'
import markdownToHtml from '@lib/markdownToHtml'

export async function generateRssItem(post) {
  const content = await markdownToHtml(post.content || '')

  return `
    <item>
      <guid>${BLOG_URL}/posts/${post.slug}</guid>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>${BLOG_URL}/posts/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>
  `
}

export async function generateRss(posts) {
  const itemsList = await Promise.all(posts.map(generateRssItem))

  return `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>${BLOG_TITLE}</title>
        <link>${BLOG_URL}</link>
        <description>${BLOG_SUBTITLE}</description>
        <language>en</language>
        <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
        <atom:link href="${BLOG_URL}" rel="self" type="application/rss+xml"/>
        ${itemsList.join('')}
      </channel>
    </rss>
  `
}
```

The mechanism is the following:

1. `generateRss`:
    - accepts the full list of posts of your blog as input
    - prepares the structure of the RSS feed
    - injects a data structure for each post (see below)
    - returns the RSS feed as string
1. `generateRssItem`:
    - accepts a single post as input
    - prepares the structure of an RSS feed item
    - returns the RSS feed item as string

### This is the Way

In `/pages/index.js` there's a method `getStaticProps` which is called by [Next.js](https://nextjs.org/) at build time (see [here](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)).

The idea is generating the RSS feed as an XML file precisely at build time.

To do so, first import `generateRss`, then modify `getStaticProps` as follows:

```javascript
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content',
  ])
  const rss = await generateRss(allPosts)

  fs.writeFileSync('./public/rss.xml', rss)

  return {
    props: { allPosts },
  }
}
```

A few tweaks have been introduced:

- adding `content` to the array of fields passed to `getAllPosts`
- generating the RSS using `const rss = await generateRss(allPosts)`
- writing the result in an XML file, which **must** be placed in the `public` folder to be reachable by users and applications

A final touch would be updating your `.gitignore` to exclude `rss.xml`, which doesn't really need to be versioned.

### Who controls the spice controls the universe

You can now add a link to `/rss.xml` on your homepage to provide your users with a link they can add to their favorite feed reader.

Moreover on [dev.to](https://dev.to/), in *Settings > Extensions*, you specify your RSS feed URL for [cross-posting](https://dictionary.cambridge.org/dictionary/english/cross-posting).

<figure class="image" aria-label="Cross-posting from your blog to dev.to">
<img
  src="/assets/blog/how-to-create-an-rss-feed-in-nextjs-10/devto-cross-posting-via-rss-feed.jpeg"
  alt="Cross-posting from your blog to dev.to"
  style="max-height: 300px;"
/>
<figcaption>Cross-posting from your blog to dev.to</figcaption>
</figure>

This way every time you publish on your blog a draft will be automatically created on your dev.to dashboard. You might need to re-add the cover image, but your post will be there from top to bottom.

### Conclusion

Next.js is still young and is missing some capabilities, such as RSS feed generation. However its design comprises only a handful of moving parts, hence adjusting the project to your needs is quite doable.

I'm fairly sure more features will come in time from Vercel and from Next.js community. Until then don't be afraid to tinker with it.

> Your assumptions are your windows on the world.  
> Scrub them off every once in a while, or the light won't come in.  
― Isaac Asimov
