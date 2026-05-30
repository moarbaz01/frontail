import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "next-sanity";
import { getCliClient } from "sanity/cli";

type SourceBlock = {
  type?: string;
  text?: string;
  items?: string[];
  caption?: string;
  headers?: string[];
  rows?: Array<string[] | { cells?: string[] }>;
};

type SourcePost = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  readTime?: string | number;
  seoTitle?: string;
  seoDescription?: string;
  body?: SourceBlock[];
};

const env = Object.fromEntries(
  readFileSync(join(process.cwd(), ".env"), "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .map((line) => {
      const [key, ...value] = line.split("=");
      return [key, value.join("=")];
    }),
);

const apiVersion =
  env.NEXT_PUBLIC_SANITY_API_VERSION?.replace(/^v/, "") || "2026-05-29";
const writeToken = env.SANITY_API_WRITE_TOKEN || env.SANITY_WRITE_TOKEN;
const client = writeToken
  ? createClient({
      projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion,
      token: writeToken,
      useCdn: false,
    })
  : getCliClient({ apiVersion });

const keyFrom = (value: string, index: number) =>
  `${value.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 8) || "block"}${index}`;

const cleanText = (value: unknown) => {
  if (typeof value !== "string") return "";

  return value
    .replace(/â€”/g, "—")
    .replace(/â€“/g, "–")
    .replace(/â€˜/g, "‘")
    .replace(/â€™/g, "’")
    .replace(/â€œ/g, "“")
    .replace(/â€�/g, "”")
    .replace(/Â¢/g, "¢")
    .replace(/Â£/g, "£")
    .replace(/Â/g, "")
    .trim();
};

const toReadTime = (value: SourcePost["readTime"]) => {
  if (typeof value === "number") return `${value} min read`;
  const text = cleanText(value);
  return text ? (/\bread\b/i.test(text) ? text : `${text} min read`) : "8 min read";
};

const toBodyBlock = (block: SourceBlock, index: number) => {
  const type = block.type || "paragraph";

  if (type === "heading") {
    return {
      _key: keyFrom("heading", index),
      _type: "heading",
      type: "heading",
      text: cleanText(block.text),
    };
  }

  if (type === "list") {
    return {
      _key: keyFrom("list", index),
      _type: "list",
      type: "list",
      items: (block.items || []).map(cleanText).filter(Boolean),
    };
  }

  if (type === "table") {
    return {
      _key: keyFrom("table", index),
      _type: "table",
      type: "table",
      caption: cleanText(block.caption),
      headers: (block.headers || []).map(cleanText).filter(Boolean),
      rows: (block.rows || [])
        .map((row, rowIndex) => ({
          _key: keyFrom("row", rowIndex),
          _type: "row",
          cells: (Array.isArray(row) ? row : row.cells || [])
            .map(cleanText)
            .filter(Boolean),
        }))
        .filter((row) => row.cells.length > 0),
    };
  }

  if (type === "image") return null;

  return {
    _key: keyFrom("paragraph", index),
    _type: "paragraph",
    type: "paragraph",
    text: cleanText(block.text),
  };
};

const posts = JSON.parse(
  readFileSync(join(process.cwd(), "mvp_blog_posts.json"), "utf8"),
) as SourcePost[];

const docs = posts.map((post) => ({
  _id: `blogPost.${post.slug}`,
  _type: "blogPost",
  title: cleanText(post.title),
  slug: {
    _type: "slug",
    current: post.slug,
  },
  excerpt: cleanText(post.excerpt),
  publishedAt: post.publishedAt,
  updatedAt: post.updatedAt || post.publishedAt,
  author:
    cleanText(post.author).toLowerCase() === "your name"
      ? "Frontail Technology"
      : cleanText(post.author) || "Frontail Technology",
  category: cleanText(post.category) || "Startup Guides",
  keywords: post.keywords?.map(cleanText).filter(Boolean) || ["mvp development"],
  readTime: toReadTime(post.readTime),
  seoTitle: cleanText(post.seoTitle) || cleanText(post.title).slice(0, 70),
  seoDescription:
    cleanText(post.seoDescription) || cleanText(post.excerpt).slice(0, 160),
  body: (post.body || [])
    .map(toBodyBlock)
    .filter((block): block is NonNullable<typeof block> => Boolean(block))
    .filter((block) => {
      if (block.type === "list") return (block.items || []).length > 0;
      if (block.type === "table") {
        return (block.headers || []).length > 0 && (block.rows || []).length > 0;
      }
      return Boolean(block.text);
    }),
}));

async function uploadPosts() {
  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`Uploaded: ${doc.title} (${doc.slug.current})`);
  }

  console.log(`Done. Uploaded ${docs.length} blog posts without image fields.`);
}

uploadPosts().catch((error) => {
  console.error(error);
  process.exit(1);
});
