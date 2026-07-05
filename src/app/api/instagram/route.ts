import { NextResponse } from "next/server";
import { BeholdPost } from "@/components/Home/InstagramSection";

const FEED_ID = process.env.BEHOLD_FEED_ID ?? "";

export async function GET() {
  if (!FEED_ID) {
    return NextResponse.json({ posts: [] }, { status: 400 });
  }

  try {
    const res = await fetch(`https://feeds.behold.so/${FEED_ID}`, {
      next: { revalidate: 7200 }, // Cache for 1 hour
    });

    if (!res.ok) {
      return NextResponse.json({ posts: [] }, { status: res.status });
    }

    const data = await res.json();

    // Return only the first 6 posts
    const posts: BeholdPost[] = data.posts?.slice(0, 6) ?? [];

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
