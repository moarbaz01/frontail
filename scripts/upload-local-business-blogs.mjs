import fs from "node:fs";
import path from "node:path";
import { createClient } from "next-sanity";

const root = process.cwd();
const envPath = path.join(root, ".env");

if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, "utf8");

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

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-29";
const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_WRITE_TOKEN ||
  process.env.SANITY_API_READ_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or a Sanity token in .env"
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const jsonPath = path.join(root, "local_business_blogs.json");
const posts = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const schemaTypeByBlockType = {
  paragraph: "paragraph",
  heading: "heading",
  list: "list",
  image: "imageBlock",
  table: "table",
};

const withKey = (block, index) => ({
  _key: `${block.type || "block"}-${index}`,
  ...block,
  _type: schemaTypeByBlockType[block.type] || block.type || "paragraph",
});

const normalizeReadTime = (readTime) => {
  if (typeof readTime === "number") {
    return `${readTime} min read`;
  }

  return readTime || "8 min read";
};

const compactSpaces = (value = "") => value.replace(/\s+/g, " ").trim();

const limitText = (value, maxLength) => {
  const text = compactSpaces(value);

  if (text.length <= maxLength) {
    return text;
  }

  const sliced = text.slice(0, maxLength - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  const trimmed = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced;

  return `${trimmed.trim()}...`;
};

const normalizeBody = (body = []) =>
  body
    .filter((block) => {
      if (block.type !== "image") {
        return true;
      }

      return block.url && block.url !== "GENERATE_IMAGE";
    })
    .map((block, index) => {
      if (block.type === "table") {
        return withKey(
          {
            type: "table",
            caption: block.caption,
            headers: block.headers || [],
            rows: (block.rows || []).map((row, rowIndex) => ({
              _key: `row-${index}-${rowIndex}`,
              _type: "row",
              cells: Array.isArray(row) ? row : row.cells || [],
            })),
          },
          index
        );
      }

      if (block.type === "image") {
        return withKey(
          {
            type: "image",
            url: block.url,
            alt: block.alt || "",
            caption: block.caption,
          },
          index
        );
      }

      return withKey(block, index);
    });

const normalizePost = (post) => {
  const doc = {
    _id: `blogPost.${post.slug}`,
    _type: "blogPost",
    title: post.title,
    slug: {
      _type: "slug",
      current: post.slug,
    },
    excerpt: limitText(post.excerpt, 180),
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author || "Frontail Technology",
    category: "Local Businesses",
    keywords: post.keywords || [],
    readTime: normalizeReadTime(post.readTime),
    seoTitle: post.seoTitle,
    seoDescription: limitText(post.seoDescription, 160),
    body: normalizeBody(post.body),
  };

  if (post.thumbnail?.url && post.thumbnail.url !== "GENERATE_IMAGE") {
    doc.thumbnail = {
      url: post.thumbnail.url,
      alt: post.thumbnail.alt || post.title,
      caption: post.thumbnail.caption,
    };
  }

  return doc;
};

const docs = posts.map(normalizePost);

for (const doc of docs) {
  await client.createOrReplace(doc);
  await client.createOrReplace({
    ...doc,
    _id: `drafts.${doc._id}`,
  });
  console.log(`Uploaded published + draft: ${doc.title}`);
}

console.log(`Done. Uploaded ${docs.length} local business blog posts.`);
