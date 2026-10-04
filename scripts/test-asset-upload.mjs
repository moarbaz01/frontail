import fs from "node:fs";
import { createClient } from "next-sanity";

if (fs.existsSync(".env")) {
  const envFile = fs.readFileSync(".env", "utf8");
  for (const line of envFile.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [k, ...v] = trimmed.split("=");
    process.env[k] = v.join("=").replace(/^["']|["']$/g, "");
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
});

async function test() {
  console.log("Sanity client initialized with token:", Boolean(process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN));
}

test().catch(console.error);
