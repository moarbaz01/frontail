import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  Code2,
  Gauge,
  KeyRound,
  LayoutDashboard,
  Lightbulb,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Target,
  TestTube2,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MVP Development Service | Launch Your MVP in 15-45 Days",
  description:
    "Launch a focused MVP with Frontail Technology. Product strategy, UI/UX design, web app development, mobile app development, dashboards, integrations, testing, and deployment.",
  alternates: {
    canonical: "https://frontail.com/mvp-development",
  },
  openGraph: {
    title: "MVP Development Service | Frontail Technology",
    description:
      "Build a focused, scalable MVP with product strategy, clean UI, development, testing, and launch support.",
    url: "https://frontail.com/mvp-development",
  },
};

const heroStats = [
  { icon: Users, title: "Founder-led", text: "delivery" },
  { icon: ShieldCheck, title: "No outsourced", text: "thinking" },
  { icon: Boxes, title: "Scalable", text: "architecture" },
  { icon: MonitorSmartphone, title: "Web + Mobile", text: "ready" },
];

const whyMvp = [
  {
    icon: Target,
    title: "Validate faster",
    text: "Test your idea in the real world without spending months or overspending.",
  },
  {
    icon: Gauge,
    title: "Reduce risk & waste",
    text: "Build only what matters and avoid features that do not drive value.",
  },
  {
    icon: Rocket,
    title: "Launch with clarity",
    text: "Get early feedback, measure traction, and refine your product direction.",
  },
  {
    icon: Lightbulb,
    title: "Build the right core",
    text: "Ship a focused product with features your users actually need.",
  },
];

const deliverables = [
  {
    icon: Target,
    title: "Product Strategy",
    text: "We define scope, user flows, and MVP roadmap aligned to your business goals.",
  },
  {
    icon: Sparkles,
    title: "UX / UI Design",
    text: "Clean, modern, and conversion-focused designs your users will understand.",
  },
  {
    icon: Boxes,
    title: "Scalable Architecture",
    text: "Future-ready structure that supports growth and new features.",
  },
  {
    icon: Code2,
    title: "Web App Development",
    text: "High-performance web apps built with modern technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Cross-platform mobile MVPs for iOS and Android using React Native or Flutter.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    text: "Useful admin panels to manage users, data, content, and operations.",
  },
  {
    icon: KeyRound,
    title: "Authentication & Roles",
    text: "Secure login, user roles, and permission-based access control.",
  },
  {
    icon: Settings,
    title: "Payments / Integrations",
    text: "Stripe, Razorpay, third-party APIs, and essential business integrations.",
  },
  {
    icon: TestTube2,
    title: "Testing & Deployment",
    text: "QA testing, performance checks, and smooth deployment to production.",
  },
];

const builtFor = [
  {
    icon: Rocket,
    title: "Startup founders",
    text: "Validate ideas, impress investors, and launch with confidence.",
  },
  {
    icon: Store,
    title: "Local businesses",
    text: "Go digital, serve customers better, and grow revenue.",
  },
  {
    icon: BarChart3,
    title: "SaaS ideas",
    text: "Launch your SaaS product and start acquiring early users.",
  },
  {
    icon: Settings,
    title: "Internal tools",
    text: "Streamline operations with custom tools for your team.",
  },
];

const process = [
  [
    "Discovery & scope",
    "We understand your idea, users, goals, and define the MVP scope.",
  ],
  [
    "Feature prioritization",
    "We map must-have features and build a lean roadmap.",
  ],
  ["UI / UX design", "We design intuitive screens and flows users understand."],
  [
    "Development sprint",
    "Agile development with weekly updates and fast iterations.",
  ],
  [
    "Launch & iteration",
    "We deploy your MVP and help you improve based on feedback.",
  ],
];

const walkaway = [
  "Clickable UI design",
  "Production-ready MVP",
  "Admin panel",
  "Basic analytics",
  "Source code ownership",
  "Deployment support",
  "Roadmap for phase 2",
];

const proof = [
  ["15-45 days", "Fast MVP delivery without compromise"],
  ["100% in-house", "No freelancers. No outsourcing."],
  ["0 outsourced thinking", "Founder-led team with product mindset"],
  ["Clean & scalable architecture", "Built for growth from day one"],
  ["Direct founder communication", "Clear, honest, and transparent"],
  ["Long-term build mindset", "We care about your success after launch"],
];

const samples = [
  {
    image: "/landing/mvp/sample-saas-dashboard.png",
    title: "SaaS Dashboard",
  },
  {
    image: "/landing/mvp/sample-booking-app.png",
    title: "Service Booking App",
  },
  {
    image: "/landing/mvp/sample-admin-system.png",
    title: "Admin Management System",
  },
];

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs take 15-45 days depending on scope, features, integrations, and design complexity.",
  },
  {
    question: "How much does MVP development cost?",
    answer:
      "Pricing depends on features and complexity. Share your idea and we will suggest the leanest launch scope.",
  },
  {
    question: "Will I own the source code and product?",
    answer:
      "Yes. You own the source code and product assets after the agreed project handover.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can support improvements, fixes, deployment, and phase-two development after launch.",
  },
  {
    question: "Can you build both web and mobile MVPs?",
    answer:
      "Yes. We build web apps, admin dashboards, mobile apps, APIs, and integrations based on your MVP needs.",
  },
];

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="mx-auto mb-8 max-w-2xl text-center">
    <h2 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
        {subtitle}
      </p>
    )}
  </div>
);

export default function MvpDevelopmentPage() {
  return (
    <main className="bg-[#f7f3eb] text-gray-900">
      <section className="relative overflow-hidden px-4 pb-14 pt-28 md:pb-16 md:pt-36">
        <div className="absolute inset-0 bg-dot-black/[0.045]" />
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#f7f3eb]" />

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-primary">
            Founder-led MVP development for startups and businesses.
          </p>

          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="inline-flex rounded-md border border-primary/20 bg-white px-3 py-1 text-xs font-bold uppercase text-primary shadow-sm">
                MVP Development
              </span>
              <h1 className="mt-5 font-anton text-5xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-6xl">
                Launch Your MVP in <span className="text-primary">15-45</span>{" "}
                Days
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
                We help startups and businesses turn ideas into scalable digital
                products with clean architecture, focused features, and fast
                founder-led execution.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-3d inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
                >
                  Start Your MVP <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 hover:text-primary"
                >
                  See Our Process <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {heroStats.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 p-4 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-bold text-gray-900">
                      {title}
                    </p>
                    <p className="text-xs text-gray-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute right-6 top-8 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
              <Image
                src="/landing/mvp/hero-dashboard.png"
                alt="MVP dashboard illustration"
                width={1400}
                height={980}
                priority
                quality={100}
                sizes="(min-width: 1280px) 760px, (min-width: 1024px) 62vw, 100vw"
                className="relative z-10 w-full scale-[1.06] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle title="Why MVP first?" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyMvp.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 p-5 shadow-sm"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-base font-bold text-gray-900">
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
          <SectionTitle title="What you get" />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle title="Built for" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {builtFor.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 p-5 shadow-sm"
              >
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-base font-bold text-gray-900">
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

      <section id="process" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle title="How we build your MVP" />
          <div className="grid gap-4 md:grid-cols-5">
            {process.map(([title, text], index) => (
              <div
                key={title}
                className="relative rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 p-5 text-center shadow-sm"
              >
                <span className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-sm font-bold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-screen-xl items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex justify-center">
            <Image
              src="/landing/mvp/walkaway-box.png"
              alt="MVP delivery box illustration"
              width={430}
              height={360}
              sizes="(min-width: 1024px) 360px, 100vw"
              className="w-full max-w-sm object-contain"
            />
          </div>
          <div>
            <SectionTitle title="What you walk away with" />
            <div className="grid gap-3 rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 p-6 shadow-sm sm:grid-cols-2">
              {walkaway.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-bold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle title="Why founders choose Frontail" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {proof.map(([title, text]) => (
              <div
                key={title}
                className="rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 p-4 text-center shadow-sm"
              >
                <Zap className="mx-auto h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-bold text-gray-900">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle title="Sample product directions" />
          <div className="grid gap-5 md:grid-cols-3">
            {samples.map((sample) => (
              <div
                key={sample.title}
                className="overflow-hidden rounded-md border border-[#eadfd0] bg-[#fffaf4]/90 text-center shadow-sm"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#fffdf8]">
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    fill
                    quality={100}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="scale-[1.08] object-cover"
                  />
                </div>
                <h3 className="px-4 py-4 text-lg font-bold text-gray-900">
                  {sample.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
