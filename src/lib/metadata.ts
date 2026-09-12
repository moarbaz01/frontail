import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataOptions {
  /** Page-level title (without brand suffix — the template adds it). */
  title: string;
  description: string;
  /** Relative path, e.g. "/services/mvp-development" */
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

/**
 * Returns a consistent Next.js Metadata object.
 *
 * The root layout template ("%s | Frontail Technologies") appends the brand
 * automatically, so `title` here should be the descriptive part only.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
