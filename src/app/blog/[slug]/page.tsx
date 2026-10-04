import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PostBody from "@/components/Blog/PostBody";
import { getBlogPost, getBlogPosts, getBlogSlugs } from "@/sanity/blog";

export const revalidate = 60;

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
  const relatedPosts = (await getBlogPosts())
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords?.join(", ") || "",
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

  const relatedPosts = (await getBlogPosts())
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

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
          name: "Frontail Technologies",
          logo: {
            "@type": "ImageObject",
            url: "https://frontail.com/favicon.png",
          },
        },
        mainEntityOfPage: postUrl,
        keywords: post.keywords?.join(", ") || "",
      },
    ],
  };

  return (
    <article className="min-h-screen px-4 pb-16 pt-28">
      <JsonLd data={articleSchema} />
      <div className="mx-auto max-w-screen-xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="relative overflow-hidden rounded-xl border border-white/80 bg-gradient-to-b from-white/90 via-white/75 to-white/60 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md md:p-10">
          <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <header className="border-b border-gray-200/80 pb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              {post.category}
            </p>
            <h1 className="font-anton mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-normal text-gray-900 sm:text-4xl md:text-5xl">
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
          </header>

          {post.thumbnail && (
            <figure className="pt-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-gray-200/80 bg-primary/5">
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
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-md border border-gray-200/80 bg-white/70 px-2.5 py-1.5 text-xs font-semibold text-gray-600 backdrop-blur-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="font-anton text-2xl font-extrabold tracking-normal text-gray-900 md:text-3xl">
                Related Posts
              </h2>
              <Link href="/blog" className="text-sm font-bold text-primary hover:text-primary/80">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/80 bg-gradient-to-b from-white/85 via-white/65 to-white/45 p-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
                  {related.thumbnail && (
                    <div className="relative aspect-[16/9] border-b border-gray-200/70 bg-primary/5">
                      <Image
                        src={related.thumbnail.url}
                        alt={related.thumbnail.alt}
                        fill
                        sizes="(min-width: 640px) 480px, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                        {related.category}
                      </p>
                      <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-gray-900 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600">
                        {related.excerpt}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                      Read
                      <ArrowLeft className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
