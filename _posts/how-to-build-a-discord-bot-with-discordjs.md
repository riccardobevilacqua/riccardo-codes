---
title: "How to build a Discord bot with Discord.js"
excerpt: "Discord has come far and it's much more than a voice chat for gamers nowadays. Learn to leverage its full potential by building a bot with Discord.js and give your online community the best user experience."
coverImage: "/assets/blog/how-to-build-a-discord-bot-with-discordjs/cover.jpg"
date: "2021-01-31T01:00:00.000Z"
ogImage:
  url: "/assets/blog/how-to-build-a-discord-bot-with-discordjs/cover.jpg"
---

### What is Discord?

[Discord](https://discord.com/) is:

> A VoIP, instant messaging and digital distribution platform designed for creating communities. Users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called "servers." Servers are a collection of persistent chat rooms and voice chat channels.

Source: [Wikipedia](<https://en.wikipedia.org/wiki/Discord_(software)>).

### Why should you learn Discord bots?

Discord was born for gamers who need an efficient and reliable way to communicate, through voice and chat alike.
In recent years its popularity grew outside of gaming community and these proving covid times accelerated Discord adoption in any kind of community.

Discord bots are applications which can perform automated tasks on your server, such as welcoming new members, moderating content, even playing music.

Official Discord APIs are accessible in multiple programming languages, including JavaScript, allowing you to create any sort of bot to give your online community a compelling user experience. Moreover, the possibility to integrate third party APIs opens a universe limited only by your imagination.

### You have only begun to discover your power

Create a file `rss.js` in `lib` folder, or another directory of your preference other than `pages`, which as you probably know is a special directory reserved to routable content.

The new file would look like this (source [here](https://gist.github.com/riccardobevilacqua/d3820b80718517448d8ad6c8151fc9ac)):

<figure class="image" aria-label="rss.js">
<img
  src="/assets/blog/how-to-create-an-rss-feed-in-nextjs-10/rss-js.jpg"
  alt="rss.js"
  style="max-height: 600px;"
/>
<figcaption>rss.js</figcaption>
</figure>

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

### I will help you, I have spoken

_"What's going on in here?"_ you might be wondering.

Let's break it down, starting from the imports:

```javascript
import { BLOG_URL, BLOG_TITLE, BLOG_SUBTITLE } from "@lib/constants";
import markdownToHtml from "@lib/markdownToHtml";
```

I decided to stash some general information about the blog in `/lib/constants.js`, it's really up to you where you prefer to store these information.

The method `markdownToHtml` is a helper provided by [Next.js blog starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter), which allows you to convert content from markdown to HTML as you have surely guessed.

Side note: `@lib` resolves to `/lib` from anywhere, regardless the depth of the folder structure, thanks to `jsconfig.json` in the root folder (see [here](https://code.visualstudio.com/docs/languages/jsconfig#_using-webpack-aliases)).

Since `markdownToHTML` is asynchronous, `generateRssItem` needs to be asynchronous as well in order to `await` for its result:

```javascript
export async function generateRssItem(post) {
  const content = await markdownToHtml(post.content || "");

  // more code here
}
```

An RSS feed item, which represents a post on your blog, is structured as follows:

- `guid` is a unique identifier for the post, you can generate it the way you see fit
- `title` is the title of the post, of course
- `description` is the excerpt of the post
- `link` is the absolute URL of the post, including protocol and base URL of your blog
- `pubDate` is the date published
- `content:encoded` is the full content of your post, which applies the encapsulation [CDATA](https://en.wikipedia.org/wiki/CDATA) to assure your HTML to be correctly parsed

You can find a thorough list of properties [here](https://www.rssboard.org/rss-profile).

To assemble the whole RSS feed, all posts need to be scanned and converted to RSS items. The trick is using `await Promise.all(posts.map(generateRssItem))` in `generateRss` to make this happen:

```javascript
export async function generateRss(posts) {
  const itemsList = await Promise.all(posts.map(generateRssItem));

  // more code here
}
```

Now that you have all RSS items, you can add some general information to the RSS feed:

- `rss` is the root element of the XML document
- `channel` is an XML element containing the whole blog data, comprising general information and all posts
- `title` is the title of the blog
- `description` is the description of the blog
- `lastBuildDate` is the date of the most recent post
- `atom:link` element needs your absolute blog URL in its `href` property

Finally you can inject the RSS items generated in the previous step.

### This is the Way

In `/pages/index.js` there's a method `getStaticProps`, which is called by [Next.js](https://nextjs.org/) at build time (see [here](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)).

The idea is generating your RSS feed as an XML file precisely at build time.

To do so, first import `generateRss` and `fs`, then modify `getStaticProps` as follows:

```javascript
export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content",
  ]);
  const rss = await generateRss(allPosts);

  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: { allPosts },
  };
}
```

A few tweaks have been introduced:

- adding `content` to the array of fields passed to `getAllPosts`, used by `generateRssItem` to inject the full content of a post
- generating your RSS using `const rss = await generateRss(allPosts)`
- writing the result in an XML file, which **must** be placed in the `public` folder to be reachable by users and applications

A final touch would be updating your `.gitignore` to exclude `rss.xml`, which doesn't really need to be versioned.

An example of the final result is the [RSS feed I generated for this very blog](https://riccardo.codes/rss.xml).

### Who controls the spice controls the universe

You can now add a link to `/rss.xml` on your homepage to provide your users with a link they can add to their favorite feed reader.

<a id="cross-posting-from-blog-to-devto"></a>

Moreover on [dev.to](https://dev.to/), in _Settings > Extensions_, you can specify your RSS feed URL for [cross-posting](https://dictionary.cambridge.org/dictionary/english/cross-posting).

<figure class="image" aria-label="Cross-posting from your blog to dev.to">
<img
  src="/assets/blog/how-to-create-an-rss-feed-in-nextjs-10/devto-cross-posting-via-rss-feed.jpeg"
  alt="Cross-posting from your blog to dev.to"
  style="max-height: 300px;"
/>
<figcaption>Cross-posting from your blog to dev.to</figcaption>
</figure>

This way every time you publish on your blog `main` branch, a draft will be automatically created on your dev.to dashboard. You might need to re-add the cover image, but your post will be there from top to bottom.

### Conclusion

Next.js is still young and is missing some capabilities, such as RSS feed generation. However its design comprises only a handful of moving parts, which makes adjusting the project to meet your needs quite doable.

I'm fairly sure more features will come in time from Vercel and from Next.js community. Until then, don't be afraid to tinker with it.

> Somewhere, something incredible is waiting to be known.  
> ― Carl Sagan
