import { MetadataRoute } from "next";
import { detailedServices } from "@/detailedServices";
import { getBlogPosts } from "@/sanity/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://frontail.com";

  // Core Static Indexable Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/start-project`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Canonical Service Pages
  const servicePages: MetadataRoute.Sitemap = detailedServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic Blog Posts with safe fallback
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getBlogPosts();
    const seenSlugs = new Set<string>();

    blogPages = posts
      .filter((post) => {
        if (!post.slug || seenSlugs.has(post.slug)) return false;
        seenSlugs.add(post.slug);
        return true;
      })
      .map((post) => {
        const postDate = post.updatedAt || post.publishedAt;
        const validDate = postDate && !isNaN(new Date(postDate).getTime())
          ? new Date(postDate)
          : new Date();

        return {
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: validDate,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        };
      });
  } catch (error) {
    console.error("[Sitemap] Failed to fetch dynamic blog posts:", error);
  }

  return [...staticPages, ...servicePages, ...blogPages];
}
