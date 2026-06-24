import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  GraduationCap,
  Layers,
  Rocket,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Frontail Technology | MVP & Software Development Agency",
  description:
    "Meet Frontail Technology and founder Mohammed Arbaz (ABR), a full-stack developer building MVPs, ed-tech, B2B, B2C, and multi-tenant platforms.",
  alternates: {
    canonical: "https://frontail.com/about",
  },
  openGraph: {
    title: "About Frontail Technology",
    description:
      "A practical software development agency led by Mohammed Arbaz (ABR), focused on MVPs, SaaS platforms, web apps, and custom business tools.",
    url: "https://frontail.com/about",
    siteName: "Frontail Technology",
    images: [
      {
        url: "https://frontail.com/founder.jpeg",
        width: 1200,
        height: 1200,
        alt: "Mohammed Arbaz, founder of Frontail Technology",
      },
    ],
  },
};

const experience = [
  {
    title: "Ed-tech Products",
    description:
      "Learning platforms, student flows, content systems, and admin tools built for daily use.",
    icon: GraduationCap,
  },
  {
    title: "B2B & B2C Platforms",
    description:
      "Customer apps, internal dashboards, lead flows, and business operation systems.",
    icon: Building2,
  },
  {
    title: "Multi-tenant Systems",
    description:
      "Role-based platforms, organization workspaces, subscriptions, and scalable structure.",
    icon: Layers,
  },
  {
    title: "MVP Launches",
    description:
      "Focused first versions that help founders validate faster without bloated scope.",
    icon: Rocket,
  },
];

const principles = [
  {
    title: "Start with clarity",
    description:
      "We define the first useful version before writing code, so the build stays focused.",
  },
  {
    title: "Design around users",
    description:
      "Screens and dashboards are shaped around the people who will use them every day.",
  },
  {
    title: "Ship with care",
    description:
      "The goal is clean delivery, smooth handoff, and support after the product is live.",
  },
];

const stats = [
  "Full-stack execution",
  "Founder-led projects",
  "Real business systems",
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Frontail Technology",
  url: "https://frontail.com/about",
  description:
    "Frontail Technology is a software development agency building MVPs, SaaS platforms, web apps, mobile-ready products, and custom business tools.",
  mainEntity: {
    "@type": "Person",
    name: "Mohammed Arbaz",
    alternateName: "ABR",
    jobTitle: "Founder & Full-Stack Developer",
    image: "https://frontail.com/founder.jpeg",
    worksFor: {
      "@type": "Organization",
      name: "Frontail Technology",
      url: "https://frontail.com",
    },
    knowsAbout: [
      "Full-stack development",
      "MVP development",
      "Ed-tech platforms",
      "B2B platforms",
      "B2C platforms",
      "Multi-tenant SaaS platforms",
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "About",
      item: "https://frontail.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-[#f7f3eb] text-gray-900">
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="relative overflow-hidden px-4 pb-10 pt-28 md:pb-14 md:pt-32">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute -right-24 top-48 h-72 w-72 rounded-full bg-white/80 blur-[80px]" />
        <div className="absolute inset-0 bg-dot-black/[0.045]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#f7f3eb]" />

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-md border border-gray-300 bg-white/85 px-3 py-1 text-sm font-semibold text-primary shadow-sm">
              About Frontail Technology
            </span>
            <h1 className="mt-5 font-anton text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-5xl">
              A founder-led studio for MVPs and useful business software.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              We help founders and growing teams turn rough ideas into clean web
              apps, SaaS products, dashboards, and launch-ready MVPs.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-3d inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 transition-colors hover:border-primary/50 hover:text-primary"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-md border border-gray-300 bg-white p-3 shadow-sm md:p-4">
            <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative overflow-hidden rounded-md bg-[#fff7ef]">
                <Image
                  src="/founder.jpeg"
                  alt="Mohammed Arbaz, founder of Frontail Technology"
                  width={720}
                  height={860}
                  priority
                  sizes="(min-width: 1024px) 390px, 100vw"
                  className="h-full min-h-[340px] w-full object-cover object-top"
                />
                <div className="absolute left-3 top-3 rounded-md border border-white/70 bg-white/90 px-3 py-2 text-xs font-bold text-gray-900 shadow-sm backdrop-blur">
                  Founder-led delivery
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md bg-[#f7f3eb] p-5 md:p-7">
                <div>
                  <span className="inline-flex rounded-md border border-primary/20 bg-white px-3 py-1 text-xs font-bold uppercase text-primary">
                    Meet the founder
                  </span>
                  <h2 className="mt-4 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                    Mohammed Arbaz <span className="text-primary">(ABR)</span>
                  </h2>
                  <p className="mt-3 text-base font-semibold text-gray-900">
                    Full-stack developer building products that survive real
                    users, real workflows, and real business pressure.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                    Arbaz has worked on real-world projects across ed-tech, B2B,
                    B2C, and multi-tenant platforms. That mix of product
                    thinking and engineering helps Frontail keep builds simple,
                    practical, and ready to launch.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item}
                      className="rounded-md border border-gray-300 bg-white p-3 text-sm font-bold text-gray-800 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="btn-3d inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 hover:text-primary"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-12">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-primary">
                Real project experience
              </p>
              <h2 className="mt-2 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                The kind of systems we understand.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-600 md:text-right">
              Frontail is shaped around practical product work, not generic
              agency promises.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-md border border-gray-300 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-[#fff7ef] text-primary transition-colors group-hover:border-primary/30">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-tight text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-md border border-gray-300 bg-white p-5 shadow-sm md:p-7">
            <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 bg-[#fff7ef] text-primary">
                  <Boxes className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                  Clear process. Less noise.
                </h2>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  The work stays calm because every build has a clear purpose,
                  practical scope, and a path after launch.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {principles.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-md border border-gray-200 bg-[#f7f3eb] p-4"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase text-primary">
                        0{index + 1}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
