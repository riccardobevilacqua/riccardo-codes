---
title: 'How to create a blog with Next.js 10'
excerpt: 'Vercel recently released Next.js 10, a stunning combination of power and simplicity. Here''s a step-by-step guide to create your blog with this amazing tool.'
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

The popular rival [Gatsby](https://www.gatsbyjs.com/) provides a lot of features and a wide range of plugins, but the overhead and the compulsory use of GraphQL might be considered overengineering by some users.

Gatsby still represents a valid tool, as usual it's a matter of trade off and personal taste.

### One small step

Vercel provides several [examples](https://github.com/vercel/next.js/tree/canary/examples/) to be used as templates for your projects.

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
  style="max-height: 600px;"
/>
<figcaption>Next.js blog starter, local preview</figcaption>
</figure>

### One giant leap

Opening the project on your favorite editor (e.g. Visual Studio Code) you'd see this folder structure:

<figure class="image" aria-label="Next.js blog starter, folder structure">
<img
  src="/assets/blog/how-to-create-a-blog-with-nextjs-10/nextjs-blog-starter-folder.jpg"
  alt="Next.js blog starter, folder structure"
  style="max-height: 400px;"
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
  style="max-height: 600px;"
/>
<figcaption>Next.js blog starter, sample post preview</figcaption>
</figure>

### Second star to the right

Next.js has a file-system based routing, which detects subfolders and files in the special directory called `pages` creating routes accordingly.

Let's take a look at `pages`:

<figure class="image" aria-label="Next.js blog starter, pages folder">
<img
  src="/assets/blog/how-to-create-a-blog-with-nextjs-10/nextjs-blog-starter-pages.jpg"
  alt="Next.js blog starter, pages folder"
  style="max-height: 200px;"
/>
<figcaption>Next.js blog starter, pages folder</figcaption>
</figure>

It comprises the following files:

- `index.js` is the homepage of the site
- `_app.js` allows to introduce customization, such as styles, to be applied application wide
- `_document.js` allows to restructure the document as in the whole HTML document encapsulating your application
- `[slug].js` represents any given post, its name contains `[]` because it's leveraging dynamic routing

When you create a post as Markdown file in `_post` folder, the file name determines implicitly the slug of your post.
If your file is called `hello-world.md`, then its slug will be `hello-world`.

Next.js takes the relative path `pages/blog/[slug].js` and generates the route `/blog/:slug`, which in this case would be `/blog/hello-world`.

For further information please refer to [this documentation](https://nextjs.org/docs/routing/introduction).

### And straight on till morning

Feel free to explore the `components` folder and make changes to meet your needs.
Since they're mere React components they will probably look familiar.

### Conclusion

Next.js is quite opinionated and might feel odd at first maybe, but its gracious learning curve and the elegant minimalistic API design make it a phenomenal tool to add to your belt.

Setting aside personal tastes, Next.js is certainly worth your time.

> The mystery of life isn't a problem to solve, but a reality to experience.  
― Frank Herbert, Dune

