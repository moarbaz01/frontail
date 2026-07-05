import { getBlogPosts } from "./src/sanity/blog";

async function main() {
  const posts = await getBlogPosts();
  console.log("Total posts:", posts.length);
  console.log("First post title:", posts[0]?.title);
}

main().catch(console.error);
