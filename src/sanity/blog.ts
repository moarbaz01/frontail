export type BlogBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "image";
      url: string;
      alt: string;
      caption?: string;
    };

export type BlogImage = {
  url: string;
  alt: string;
  caption?: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  thumbnail?: BlogImage;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  keywords: string[];
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  body: BlogBlock[];
};

const fallbackPosts: BlogPost[] = [
  {
    title: "How Much Does MVP Development Cost in 2026?",
    slug: "how-much-does-mvp-development-cost",
    excerpt:
      "A practical founder-friendly breakdown of MVP development cost, timelines, feature scope, and how to avoid overspending before product validation.",
    publishedAt: "2026-05-29",
    author: "Frontail Technology",
    category: "MVP Development",
    keywords: [
      "MVP development cost",
      "startup MVP cost",
      "MVP development pricing",
      "how much does an MVP cost",
    ],
    readTime: "6 min read",
    seoTitle: "How Much Does MVP Development Cost? | Frontail Technology",
    seoDescription:
      "Learn how much MVP development costs, what affects pricing, and how founders can launch a useful first version without wasting budget.",
    thumbnail: {
      url: "/seo/mvp-cost.svg",
      alt: "MVP development cost planning dashboard",
    },
    body: [
      {
        type: "paragraph",
        text: "MVP development cost depends on the product type, number of screens, backend complexity, integrations, user roles, and how polished the first version needs to be. A useful MVP is not the cheapest version of an idea. It is the smallest version that can prove whether users actually want the product.",
      },
      {
        type: "heading",
        text: "Typical MVP Cost Ranges",
      },
      {
        type: "image",
        url: "/seo/mvp-cost.svg",
        alt: "MVP cost ranges and product planning illustration",
        caption: "MVP cost depends most on scope, integrations, and launch requirements.",
      },
      {
        type: "list",
        items: [
          "Simple landing page or prototype: lower cost, useful for early validation.",
          "Web app MVP with login, dashboard, and core workflows: mid-range cost.",
          "SaaS MVP with subscriptions, admin panel, roles, and integrations: higher cost.",
          "Mobile app MVP with backend and store launch support: depends heavily on features and platforms.",
        ],
      },
      {
        type: "heading",
        text: "What Affects MVP Pricing?",
      },
      {
        type: "paragraph",
        text: "The biggest pricing factors are feature count, design depth, custom backend logic, third-party integrations, payments, notifications, analytics, and post-launch support. If the idea needs AI, real-time features, or complex permissions, the build usually takes longer.",
      },
      {
        type: "heading",
        text: "How to Reduce MVP Cost Without Hurting Quality",
      },
      {
        type: "list",
        items: [
          "Start with one primary user journey.",
          "Avoid building every admin feature in version one.",
          "Use proven tools for auth, payments, hosting, and analytics.",
          "Launch with measurable goals instead of a huge feature list.",
          "Keep design clean and usable rather than over-customized.",
        ],
      },
      {
        type: "paragraph",
        text: "At Frontail Technology, we help founders define the leanest useful scope first, then build a scalable foundation so the product can grow after validation.",
      },
    ],
  },
  {
    title: "AI Automation Tools for Startups: What to Build First",
    slug: "ai-automation-tools-for-startups",
    excerpt:
      "A clear guide to practical AI automation ideas for startups, from support assistants to internal workflow tools and document processing.",
    publishedAt: "2026-05-29",
    author: "Frontail Technology",
    category: "AI Development",
    keywords: [
      "AI automation tools for startups",
      "AI tools for startups",
      "AI workflow automation",
      "startup automation software",
    ],
    readTime: "7 min read",
    seoTitle: "AI Automation Tools for Startups | Frontail Technology",
    seoDescription:
      "Explore practical AI automation tools startups can build first, including support assistants, document workflows, lead qualification, and internal tools.",
    thumbnail: {
      url: "/seo/ai-automation.svg",
      alt: "AI automation workflow for startups",
    },
    body: [
      {
        type: "paragraph",
        text: "AI automation is most useful when it removes repetitive work from a real business process. The best first AI tool is rarely a flashy chatbot. It is usually a focused workflow that saves time, improves response speed, or helps a small team handle more work without hiring too early.",
      },
      {
        type: "heading",
        text: "Good AI Automation Ideas for Startups",
      },
      {
        type: "image",
        url: "/seo/ai-automation.svg",
        alt: "AI automation tools connected to startup workflows",
        caption: "The best AI tools start with a frequent, measurable workflow.",
      },
      {
        type: "list",
        items: [
          "Customer support assistants trained on your product information.",
          "Lead qualification tools that summarize inquiries and score intent.",
          "Document processing tools for invoices, contracts, forms, or reports.",
          "Internal knowledge assistants for team SOPs and project data.",
          "AI dashboards that summarize customer activity and business signals.",
        ],
      },
      {
        type: "heading",
        text: "What to Build First",
      },
      {
        type: "paragraph",
        text: "Start with the workflow that happens often, takes time, and has a clear success metric. For example, reducing support response time, cutting manual data entry, or helping sales respond faster. This makes the AI feature easier to measure and improve.",
      },
      {
        type: "heading",
        text: "What Makes AI Automation Reliable?",
      },
      {
        type: "list",
        items: [
          "Clear input and output rules.",
          "Human review for sensitive actions.",
          "Good data structure before adding AI.",
          "Logging and feedback loops.",
          "A clean interface around the AI workflow.",
        ],
      },
      {
        type: "paragraph",
        text: "Frontail Technology builds AI features around real workflows, so the final product feels useful, controlled, and easy for teams to adopt.",
      },
    ],
  },
];

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-29";
const normalizedApiVersion = apiVersion.startsWith("v")
  ? apiVersion
  : `v${apiVersion}`;

const blogFields = `{
  title,
  "slug": slug.current,
  excerpt,
  "thumbnail": select(
    defined(thumbnail.asset) => {
      "url": thumbnail.asset->url,
      "alt": coalesce(thumbnail.alt, title),
      "caption": thumbnail.caption
    },
    defined(thumbnail.url) => thumbnail,
    null
  ),
  publishedAt,
  updatedAt,
  author,
  category,
  keywords,
  readTime,
  seoTitle,
  seoDescription,
  "body": body[]{
    type,
    text,
    items,
    "url": select(
      defined(image.asset) => image.asset->url,
      defined(url) => url,
      null
    ),
    "alt": coalesce(alt, image.alt, ""),
    caption
  }
}`;

async function sanityQuery<T>(query: string): Promise<T | null> {
  if (!projectId) return null;

  const url = new URL(
    `https://${projectId}.api.sanity.io/${normalizedApiVersion}/data/query/${dataset}`,
  );
  url.searchParams.set("query", query);

  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { result?: T };
  return data.result ?? null;
}

export async function getBlogPosts() {
  const posts = await sanityQuery<BlogPost[]>(
    `*[_type == "blogPost"] | order(publishedAt desc) ${blogFields}`,
  );

  return posts?.length ? posts : fallbackPosts;
}

export async function getBlogPost(slug: string) {
  const safeSlug = slug.replace(/"/g, '\\"');
  const post = await sanityQuery<BlogPost>(
    `*[_type == "blogPost" && slug.current == "${safeSlug}"][0] ${blogFields}`,
  );

  return post || fallbackPosts.find((item) => item.slug === slug) || null;
}

export async function getBlogSlugs() {
  const slugs = await sanityQuery<string[]>(
    `*[_type == "blogPost" && defined(slug.current)].slug.current`,
  );

  return slugs?.length ? slugs : fallbackPosts.map((post) => post.slug);
}
