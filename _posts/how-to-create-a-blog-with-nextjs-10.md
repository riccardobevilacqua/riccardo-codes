---
title: 'How to create a blog with Next.js 10'
excerpt: 'Vercel recently released Next.js 10, a stunning combination of power and simplicity. I''d like to share how I created this very blog with this amazing tool and show you how you can create your own.'
coverImage: '/assets/blog/how-to-create-a-blog-with-nextjs-10/cover.jpg'
date: '2020-11-23'
ogImage:
  url: '/assets/blog/how-to-create-a-blog-with-nextjs-10/cover.jpg'
---

### What is Next.js?

[Next.js](https://nextjs.org/) is a Static Site Generator (SSG) based on [React](https://reactjs.org/).

According to the official website:

>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

### Why choosing Next.js over Gatsby?

[Vercel](https://vercel.com/) recently released [Next.js 10](https://nextjs.org/blog/next-10), a stunning combination of power and simplicity.

The popular rival [Gatsby](https://www.gatsbyjs.com/) provides a lot of features and a wide range of plugins, but the overhead and the compulsory use of GraphQL might be considered overengineering for some users.

Gatsby still represents a valid tool, as usual it's a matter of trade off and personal taste.

### One small step

Vercel provides nice [examples](https://github.com/vercel/next.js/tree/canary/examples/) to be used as templates for your projects.

A good starting point is certainly [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter), which can be seen in action [here](https://next-blog-starter.now.sh/).

It can be installed by executing:

```
npx create-next-app --example blog-starter blog-starter-app
# or
yarn create-next-app --example blog-starter blog-starter-app
```

if you prefer TypeScript:

```
npx create-next-app --example blog-starter-typescript blog-starter-app
# or
yarn create-next-app --example blog-starter-typescript blog-starter-app
```

Just replace `blog-starter-app` with the name of your project.

You can take a look at a local preview as follows:

1. `cd <your-project-folder>`
1. `npm run dev`

Browsing http://localhost:3000 you'd see the result.

It looks pretty nice already, doesn't it?

<figure class="image" aria-label="Next.js blog starter, local preview">
<img
  src="/assets/blog/how-to-create-a-blog-with-nextjs-10/nextjs-blog-starter-preview.jpeg"
  alt="Next.js blog starter, local preview"
  style="max-height: 1000px;"
/>
<figcaption>Next.js blog starter, local preview</figcaption>
</figure>

### One giant leap

Opening the project on your favorite editor (e.g. Visual Studio Code) you'd see this folder structure:

<figure class="image" aria-label="Next.js blog starter, folder structure">
<img
  src="/assets/blog/how-to-create-a-blog-with-nextjs-10/nextjs-blog-starter-folder.jpg"
  alt="Next.js blog starter, folder structure"
  style="max-height: 600px;"
/>
<figcaption>Next.js blog starter, folder structure</figcaption>
</figure>

The most important folders are:

- `_posts`, your posts in `*.md` files (`*.mdx` are supported as well)
- `components`, React components for the UI
- `pages`, a special folder where the magic happens, files and folders here give your project **structure** as well as **routing** (more details below)
- `public`, where assets are stashed

A post on your blog would be a Markdown file with metadata used by Next.js to build a static page accordingly.
Information such as cover image or excerpt published on the homepage would appear here.

For example, this post...

<figure class="image" aria-label="Next.js blog starter, sample post file">
<img
  src="/assets/blog/how-to-create-a-blog-with-nextjs-10/nextjs-blog-starter-sample-post-file.jpeg"
  alt="Next.js blog starter, sample post file"
  style="max-height: 600px;"
/>
<figcaption>Next.js blog starter, sample post file</figcaption>
</figure>

...would be rendered like this:

<figure class="image" aria-label="Next.js blog starter, sample post preview">
<img
  src="/assets/blog/how-to-create-a-blog-with-nextjs-10/nextjs-blog-starter-sample-post-preview.jpeg"
  alt="Next.js blog starter, sample post preview"
  style="max-height: 1000px;"
/>
<figcaption>Next.js blog starter, sample post preview</figcaption>
</figure>






