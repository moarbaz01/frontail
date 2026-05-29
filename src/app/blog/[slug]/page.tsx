import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PostBody from "@/components/Blog/PostBody";
import { getBlogPost, getBlogSlugs } from "@/sanity/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: `https://frontail.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `https://frontail.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.thumbnail
        ? [
            {
              url: post.thumbnail.url,
              alt: post.thumbnail.alt,
            },
          ]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const postUrl = `https://frontail.com/blog/${post.slug}`;
  const articleSchema = {
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.thumbnail?.url
          ? post.thumbnail.url.startsWith("http")
            ? post.thumbnail.url
            : `https://frontail.com${post.thumbnail.url}`
          : undefined,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          "@type": "Organization",
          name: post.author,
          url: "https://frontail.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Frontail Technology",
          logo: {
            "@type": "ImageObject",
            url: "https://frontail.com/logo.png",
          },
        },
        mainEntityOfPage: postUrl,
        keywords: post.keywords.join(", "),
      },
    ],
  };

  return (
    <article className="min-h-screen px-4 pb-16 pt-28">
      <JsonLd data={articleSchema} />
      <div className="mx-auto max-w-screen-lg">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="rounded-md border border-gray-300 bg-white p-6 shadow-sm md:p-10">
          <header className="border-b border-gray-200 pb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              {post.category}
            </p>
            <h1 className="font-anton mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            {post.keywords.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-semibold text-gray-500"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </header>

          {post.thumbnail && (
            <figure className="pt-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-gray-200 bg-primary/5">
                <Image
                  src={post.thumbnail.url}
                  alt={post.thumbnail.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="object-cover"
                />
              </div>
              {post.thumbnail.caption && (
                <figcaption className="mt-2 text-center text-xs text-gray-500">
                  {post.thumbnail.caption}
                </figcaption>
              )}
            </figure>
          )}

          <div className="pt-8">
            <PostBody body={post.body} />
          </div>
        </div>
      </div>
    </article>
  );
}
