import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

import { getBlogPost } from '../src/sanity/blog.ts';

async function test() {
  const post = await getBlogPost('mvp-development-cost');
  console.log('Post fetched:', post.title);
  console.log('Post body blocks:', post.body.map(b => ({ type: b.type, keys: Object.keys(b) })));
  console.log('Table block details:', JSON.stringify(post.body.filter(b => b.type === 'table'), null, 2));
}

test().catch(console.error);
