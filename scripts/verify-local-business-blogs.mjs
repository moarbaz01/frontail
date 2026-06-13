import fs from "node:fs";
import { createClient } from "next-sanity";

if (fs.existsSync(".env")) {
  const envFile = fs.readFileSync(".env", "utf8");

  for (const line of envFile.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split("=");
    const value = valueParts.join("=").replace(/^["']|["']$/g, "");

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-29",
  token:
    process.env.SANITY_API_WRITE_TOKEN ||
    process.env.SANITY_WRITE_TOKEN ||
    process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
  perspective: "raw",
});

const posts = await client.fetch(`*[
  _type == "blogPost" &&
  slug.current in [
    "how-coaching-centers-can-build-online-presence",
    "how-local-business-can-get-more-enquiries",
    "google-my-business-optimization-local-business-2026",
    "local-business-website-that-generates-leads",
    "social-media-strategy-local-service-business"
  ]
] | order(_id asc) {
  _id,
  title,
  category,
  "excerptLength": length(excerpt),
  "seoDescriptionLength": length(seoDescription),
  "firstBlockType": body[0]._type,
  "firstBlockLegacyType": body[0].type
}`);

console.log(JSON.stringify(posts, null, 2));
