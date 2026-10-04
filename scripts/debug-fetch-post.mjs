import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rc8m5a34',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

const blogFields = `{
  title,
  "slug": slug.current,
  excerpt,
  "thumbnail": select(
    defined(thumbnail.asset) => {
      "url": thumbnail.asset->url,
      "alt": coalesce(thumbnail.alt, title),
      "caption": thumbnail.caption
    },
    defined(thumbnail.url) => thumbnail,
    null
  ),
  publishedAt,
  updatedAt,
  author,
  category,
  keywords,
  readTime,
  seoTitle,
  seoDescription,
  "body": body[]{
    type,
    text,
    items,
    caption,
    headers,
    "rows": rows[].cells,
    "url": select(
      defined(image.asset) => image.asset->url,
      defined(url) => url,
      null
    ),
    "alt": coalesce(alt, image.alt, ""),
  }
}`;

async function test() {
  const post = await client.fetch(`*[_type == "blogPost" && slug.current == "mvp-development-cost" && !(_id in path("drafts.**"))][0] ${blogFields}`);
  console.log('Result for mvp-development-cost:');
  console.log(JSON.stringify(post, null, 2));
}

test().catch(console.error);
