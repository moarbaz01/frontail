"use client";

import { useEffect, useState } from "react";
import InstagramGrid from "./InstagramGrid";

export interface BeholdPostSize {
  width: number;
  height: number;
  mediaUrl: string;
}

export interface BeholdPost {
  id: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  caption?: string;
  prunedCaption?: string;
  likeCount?: number;
  commentsCount?: number;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
  sizes?: {
    small: BeholdPostSize;
    medium: BeholdPostSize;
    large: BeholdPostSize;
    full: BeholdPostSize;
  };
}

export default function InstagramSection() {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/instagram");
        if (res.ok) {
          const data = await res.json();
          setPosts(data.posts || []);
        }
      } catch (error) {
        console.error("Failed to load Instagram posts", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return <InstagramGrid posts={posts} isLoading={isLoading} feedConfigured={true} />;
}
