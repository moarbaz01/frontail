# Sanity Blog Setup

The Sanity Studio dashboard is embedded at:

```txt
/studio
```

Set these environment variables when your Sanity project is ready:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-29
STUDIO_USERNAME=frontail
STUDIO_PASSWORD=choose_a_strong_password
STUDIO_HOST=studio.frontail.com
```

After adding the env values, open the `STUDIO_HOST` subdomain, sign in with
Sanity, and create `Blog Post` documents.

`/studio` is protected with Basic Auth before the Sanity login screen. In local
development it opens without `STUDIO_PASSWORD`; in production it requires the
password.

If `STUDIO_HOST` is set, that host rewrites to `/studio`, so you can point a
subdomain like `studio.frontail.com` at the same deployment. Keep the main site
on your root domain and add the subdomain in your hosting provider.

Direct `/studio` access on the main domain is blocked and returns the not-found
page. Studio should only be opened through the configured subdomain.

Create a `blogPost` document type in Sanity with these fields:

- `title` string
- `slug` slug
- `excerpt` text
- `thumbnail` image with fields:
  - `alt` string
  - `caption` string
- `publishedAt` datetime
- `updatedAt` datetime
- `author` string
- `category` string
- `keywords` array of strings
- `readTime` string
- `seoTitle` string
- `seoDescription` text
- `body` array using simple objects:
  - `{ type: "paragraph", text: "..." }`
  - `{ type: "heading", text: "..." }`
  - `{ type: "list", items: ["..."] }`
  - `{ type: "image", image: Sanity image, alt: "...", caption: "..." }`

Keywords are pulled directly from Sanity and used for page metadata, article
schema, and visible topic tags on the blog card/article page.

Until the Sanity project ID is configured, the site uses the starter fallback
posts in `src/sanity/blog.ts`.
