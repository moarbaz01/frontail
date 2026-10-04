import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

import { getBlogPosts, getBlogSlugs } from '../src/sanity/blog.ts';

async function verify() {
  const posts = await getBlogPosts();
  const slugs = await getBlogSlugs();

  console.log(`Total Live Posts: ${posts.length}`);
  console.log(`Total Live Slugs: ${slugs.length}\n`);

  posts.forEach((p, idx) => {
    console.log(`${idx + 1}. [${p.category}] ${p.title}`);
    console.log(`   URL: /blog/${p.slug}`);
    console.log(`   Author: ${p.author} | Thumbnail: ${p.thumbnail ? '✅ ' + p.thumbnail.url.slice(0, 50) + '...' : '❌ None'}`);
  });
}

verify().catch(console.error);
