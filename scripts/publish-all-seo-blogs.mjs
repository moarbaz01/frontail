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

async function publishAll() {
  console.log('Fetching all draft blog posts to publish live...');
  const drafts = await client.fetch(`*[_type == "blogPost" && _id in path("drafts.**")]`);
  console.log(`Found ${drafts.length} drafts.`);

  const now = new Date().toISOString();

  for (const draft of drafts) {
    const publishedId = draft._id.replace('drafts.', '');
    console.log(`Publishing live: ${publishedId} (${draft.title})`);

    const docToPublish = {
      ...draft,
      _id: publishedId,
      publishedAt: draft.publishedAt > now ? now : draft.publishedAt,
    };

    // Create or replace published doc
    await client.createOrReplace(docToPublish);
    console.log(`  ✅ Published live: ${publishedId}`);
  }

  console.log('\nAll draft posts have been published live!');
}

publishAll().catch(console.error);
