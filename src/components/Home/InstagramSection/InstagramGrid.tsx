"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BeholdPost } from "./index";

const INSTAGRAM_USERNAME = "frontailtechnology";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.42, ease: "easeOut" },
  }),
};

function PostCard({ post, index }: { post: BeholdPost; index: number }) {
  // Use Behold's stable CDN URLs
  const imgSrc =
    post.sizes?.medium?.mediaUrl ??
    post.sizes?.small?.mediaUrl ??
    post.thumbnailUrl ??
    post.mediaUrl;

  const width = post.sizes?.medium?.width || 500;
  const height = post.sizes?.medium?.height || 500;

  return (
    <motion.a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group relative mb-3 block overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 break-inside-avoid"
      aria-label="View on Instagram"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden bg-gray-100">
        <Image
          src={imgSrc}
          alt={post.caption?.slice(0, 80) ?? "Instagram post"}
          width={width}
          height={height}
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />

        {/* Video badge */}
        {post.mediaType === "VIDEO" && (
          <div className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-sm bg-black/60">
            <Play className="h-3 w-3 fill-white text-white" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ExternalLink className="h-6 w-6 text-white" />
          <p className="text-[11px] font-bold uppercase tracking-wider text-white">View Post</p>
        </div>
      </div>

      {/* Caption + stats */}
      <div className="p-3">
        {post.caption && (
          <p className="line-clamp-2 text-[11px] leading-relaxed text-gray-500">
            {post.caption}
          </p>
        )}

        <div className="mt-2.5 flex items-center gap-4 border-t border-gray-100 pt-2.5">
          {post.likeCount != null && (
            <span className="flex items-center gap-1 text-[11px] text-gray-400">
              <Heart className="h-3 w-3 text-primary" />
              {post.likeCount.toLocaleString()}
            </span>
          )}
          {post.commentsCount != null && (
            <span className="flex items-center gap-1 text-[11px] text-gray-400">
              <MessageCircle className="h-3 w-3 text-gray-400" />
              {post.commentsCount.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

interface InstagramGridProps {
  posts: BeholdPost[];
  feedConfigured: boolean;
  isLoading?: boolean;
}

export default function InstagramGrid({ posts, feedConfigured, isLoading }: InstagramGridProps) {
  return (
    <section className="relative w-full overflow-hidden px-4 py-16 md:py-24">
      {/* Orange ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-dot-black/[0.04]" />

      <div className="relative z-10 mx-auto max-w-screen-xl">

        {/* ── Header — centered ── */}
        <div className="mb-12 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-4 py-1.5"
          >
            <div className="flex h-5 w-5 items-center justify-center bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]">
              <Instagram className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              @{INSTAGRAM_USERNAME}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-anton text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl"
          >
            Follow us on{" "}
            <span className="text-primary">Instagram</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base"
          >
            Behind-the-scenes, product builds, and startup insights straight from the Frontail studio.
          </motion.p>
        </div>

        {/* ── Posts grid or placeholder ── */}
        {isLoading ? (
          <div className="flex min-h-[280px] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : feedConfigured && posts.length > 0 ? (
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-3">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex min-h-[280px] flex-col items-center justify-center gap-4 border border-dashed border-primary/30 bg-primary/5 p-10 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center bg-primary/10">
              <Instagram className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="font-bold text-gray-800">No posts loaded yet</p>
              <p className="mt-1 text-sm text-gray-500">
                {feedConfigured
                  ? "Behold returned no posts. Check your feed settings."
                  : "Set NEXT_PUBLIC_BEHOLD_FEED_ID in your .env file."}
              </p>
            </div>
          </motion.div>
        )}

        {/* ── CTA button ── */}
        <motion.div
          variants={fadeUp}
          custom={7}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d inline-flex items-center gap-2.5 bg-primary px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
          >
            <Instagram className="h-4 w-4" />
            Follow @{INSTAGRAM_USERNAME}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
