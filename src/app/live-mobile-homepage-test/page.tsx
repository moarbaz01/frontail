import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Sparkles,
  ThumbsUp,
  Zap,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import LiveHomepageTester from "@/components/LiveHomepageTester";

const pageUrl = "https://frontail.com/live-mobile-homepage-test";

export const metadata: Metadata = {
  title: "Live Mobile Homepage Test | Preview Your Site on Mobile — Frontail",
  description:
    "Test your website homepage on a mobile screen — live and free. Add your logo, nav links, banner, and brand color to instantly preview a mobile-ready homepage.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Live Mobile Homepage Test | Frontail Technology",
    description:
      "See how your business looks as a mobile homepage. Add your logo, nav links, banner image, and theme color and preview it live in a phone frame.",
    url: pageUrl,
  },
};

const benefits = [
  {
    icon: Smartphone,
    title: "Real phone-sized preview",
    text: "See your homepage the way most of your customers actually will — on a phone.",
  },
  {
    icon: Zap,
    title: "Updates as you type",
    text: "No signup, no waiting — change anything and watch the preview update instantly.",
  },
  {
    icon: ThumbsUp,
    title: "Judge it at a glance",
    text: "Spot cramped nav links, weak headlines, or a banner that doesn't fit before you build.",
  },
];

const faqs = [
  {
    question: "Why test on mobile specifically?",
    answer:
      "Most visitors reach small business and startup sites from a phone first, so what works on desktop doesn't always work on mobile.",
  },
  {
    question: "Is this a real mobile site or just a mockup?",
    answer:
      "It's a live visual mockup inside a phone frame — a fast way to judge your brand's mobile presence before a full build.",
  },
  {
    question: "Do I need to sign up to use it?",
    answer:
      "No. You can build and view your preview immediately. We only ask for your details if you want us to actually build it.",
  },
  {
    question: "Can I also see the desktop version?",
    answer:
      "Yes — use the Desktop / Mobile toggle inside the tool, or try our dedicated live website homepage test.",
  },
];

export default function LiveMobileHomepageTestPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f7f3eb] text-gray-900">
      <JsonLd data={schema} />

      <section className="relative overflow-hidden px-4 pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-dot-black/[0.045] [mask-image:radial-gradient(ellipse_at_center,black_0%,black_45%,transparent_78%)]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              Free live preview tool
            </div>
            <h1 className="mt-6 font-anton text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-6xl">
              Test Your Mobile Homepage — Live
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-xl">
              Add your logo, nav links, banner, and brand color and instantly
              see your business as a mobile homepage — right inside a phone
              frame.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-16">
        <div className="mx-auto max-w-screen-xl">
          <LiveHomepageTester defaultDevice="mobile" />
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 text-center">
            <h2 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
              Why test on mobile first?
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 p-5 shadow-sm"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-base font-bold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Questions
            </p>
            <h2 className="mt-3 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-md border border-gray-300 bg-white p-5 shadow-sm"
              >
                <h3 className="font-extrabold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-md border border-primary/20 bg-primary/10 p-6 text-center text-gray-900 shadow-sm md:p-10">
          <h2 className="font-anton text-3xl font-extrabold tracking-normal md:text-4xl">
            Ready for the real thing?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-700 md:text-base">
            We can turn this preview into a fast, mobile-first website built
            around your brand.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/start-project"
              className="btn-3d inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white"
            >
              Start My Website <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/live-website-homepage-test"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:text-primary"
            >
              Try the Desktop Test <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
