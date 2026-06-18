import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/sanity/blog";

const isRecentlyAdded = (publishedAt: string) => {
  const publishedTime = new Date(publishedAt).getTime();

  if (Number.isNaN(publishedTime)) {
    return false;
  }

  const age = Date.now() - publishedTime;
  return age >= 0 && age <= 3 * 24 * 60 * 60 * 1000;
};

const BlogSection = async () => {
  const posts = (await getBlogPosts()).slice(0, 3);

  if (!posts.length) return null;

  return (
    <section className="px-4 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 text-center">
          <h2 className="font-anton text-4xl font-extrabold tracking-normal text-gray-900 md:text-5xl">
            Latest <span className="text-primary">Guides</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 md:text-lg">
            Practical startup guides for MVPs, AI tools, and product launches.
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
                <h3 className="mt-3 text-lg font-bold leading-tight text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Read Guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
