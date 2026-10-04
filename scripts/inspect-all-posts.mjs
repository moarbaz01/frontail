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

async function inspect() {
  const allDocs = await client.fetch(`*[_type == "blogPost"]{
    _id,
    title,
    "slug": slug.current,
    category,
    author,
    publishedAt,
    "hasThumbnail": defined(thumbnail.asset._ref)
  } | order(publishedAt desc)`);

  const published = allDocs.filter(d => !d._id.startsWith('drafts.'));
  const drafts = allDocs.filter(d => d._id.startsWith('drafts.'));

  console.log('=== PUBLISHED POSTS (' + published.length + ') ===');
  published.forEach(p => console.log(`[${p.publishedAt}] [${p.category}] ${p.slug} (Thumbnail: ${p.hasThumbnail}, Author: ${p.author})`));

  console.log('\n=== DRAFT POSTS (' + drafts.length + ') ===');
  drafts.forEach(d => console.log(`[${d.publishedAt}] [${d.category}] ${d._id} -> ${d.slug} (Thumbnail: ${d.hasThumbnail})`));
}

inspect().catch(console.error);
