import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getBlogPosts } from "@/sanity/blog";

export const revalidate = 60;

const isRecentlyAdded = (publishedAt: string) => {
  const publishedTime = new Date(publishedAt).getTime();

  if (Number.isNaN(publishedTime)) {
    return false;
  }

  const age = Date.now() - publishedTime;
  return age >= 0 && age <= 3 * 24 * 60 * 60 * 1000;
};

export const metadata: Metadata = {
  title: "Startup Product Development Blog",
  description:
    "Practical guides on MVP cost, AI automation, SaaS development, mobile apps, Web3 products, and custom tools for startups.",
  alternates: {
    canonical: "https://frontail.com/blog",
  },
  openGraph: {
    title: "Startup Product Development Blog",
    description:
      "Long-tail guides for founders building MVPs, AI tools, SaaS products, and custom software.",
    url: "https://frontail.com/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://frontail.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://frontail.com/blog",
          },
        ],
      },
      {
        "@type": "Blog",
        name: "Frontail Technology Blog",
        url: "https://frontail.com/blog",
        description: metadata.description,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `https://frontail.com/blog/${post.slug}`,
          image: post.thumbnail?.url
            ? post.thumbnail.url.startsWith("http")
              ? post.thumbnail.url
              : `https://frontail.com${post.thumbnail.url}`
            : undefined,
          keywords: post.keywords.join(", "),
          datePublished: post.publishedAt,
          author: {
            "@type": "Organization",
            name: post.author,
          },
        })),
      },
    ],
  };

  return (
    <section className="min-h-screen px-4 pb-16 pt-28">
      <JsonLd data={blogSchema} />
      <div className="mx-auto max-w-screen-lg">
        <div className="mb-12 text-center">
          <h1 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 sm:text-4xl md:text-5xl">
            Startup Growth <span className="text-primary">Guides</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            Practical long-tail content for founders planning MVPs, AI
            automation, SaaS products, and custom software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              {post.thumbnail && (
                <div className="relative aspect-[16/9] border-b border-gray-200 bg-primary/5">
                  <Image
                    src={post.thumbnail.url}
                    alt={post.thumbnail.alt}
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {post.category}
                  </p>
                  {isRecentlyAdded(post.publishedAt) && (
                    <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest text-primary">
                      New
                    </span>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-bold leading-tight text-gray-900">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                  <span>{post.readTime}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Read Guide
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
