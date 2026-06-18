import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe2,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { NoiseTexture } from "@/components/ui/noise-texture";
import WebsiteEnquiryForm from "@/components/SmallBusinessWebsite/WebsiteEnquiryForm";

const pageUrl = "https://frontail.com/small-business-website-global";
const whatsappText =
  "Hi Frontail, I want a website package for my small business.";
const whatsappUrl = `https://wa.me/918741035190?text=${encodeURIComponent(
  whatsappText,
)}`;

export const metadata: Metadata = {
  title: "Website Packages for Small Businesses Worldwide",
  description:
    "Affordable website packages for small businesses worldwide starting at $399. Get a mobile-ready website with hosting setup, contact forms, WhatsApp, and local SEO structure.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "small business website package",
    "affordable website design for small business",
    "website development for local business",
    "small business website agency",
    "website package with hosting",
    "website for local service business",
  ],
  openGraph: {
    title: "Website Packages for Small Businesses Worldwide",
    description:
      "Launch a clean, mobile-ready business website starting at $399.",
    url: pageUrl,
    type: "website",
  },
};

const packages = [
  {
    name: "Starter Website",
    price: "$399",
    note: "Best for local service providers, consultants, shops, and solo businesses.",
    timeline: "5-7 days",
    featured: true,
    features: [
      "Up to 5 essential pages",
      "Mobile-responsive design",
      "Contact form and WhatsApp link",
      "Google Maps or service area section",
      "Basic SEO structure",
      "Hosting setup support",
    ],
  },
  {
    name: "Growth Website",
    price: "$699",
    note: "For businesses that need more content, proof, and lead capture.",
    timeline: "7-12 days",
    featured: false,
    features: [
      "Up to 8 pages or sections",
      "Service pages and testimonials",
      "Lead form connected to email",
      "Analytics setup",
      "Speed and image optimization",
      "Launch checklist included",
    ],
  },
  {
    name: "Custom Website",
    price: "Contact us",
    note: "For booking flows, ecommerce, memberships, or advanced integrations.",
    timeline: "Planned with you",
    featured: false,
    features: [
      "Custom pages and workflows",
      "Booking or enquiry systems",
      "Payment or ecommerce options",
      "Multi-location setup",
      "Advanced SEO structure",
      "Maintenance plan available",
    ],
  },
];

const businessTypes = [
  "Consultants",
  "Clinics",
  "Restaurants",
  "Salons",
  "Coaches",
  "Real estate",
  "Agencies",
  "Local services",
];

const benefits = [
  {
    title: "Made for mobile-first buyers",
    description:
      "Your website is structured for visitors who want to understand, trust, and contact your business quickly.",
    icon: Smartphone,
  },
  {
    title: "Easy contact options",
    description:
      "Add contact forms, WhatsApp, email links, call buttons, or booking links based on how your customers prefer to reach you.",
    icon: MessageCircle,
  },
  {
    title: "Local SEO foundation",
    description:
      "We structure pages around services, locations, FAQs, and clear metadata so search engines understand your business.",
    icon: Search,
  },
  {
    title: "Trust-focused pages",
    description:
      "Show your services, reviews, work samples, location, hours, and proof in a clean layout that feels credible.",
    icon: MapPin,
  },
];

const processSteps = [
  {
    title: "Share your business basics",
    text: "Send your logo, services, photos, contact details, and any existing website link.",
  },
  {
    title: "Review the first version",
    text: "We create a clean website direction around your offer, audience, and lead flow.",
  },
  {
    title: "Launch and improve",
    text: "Your website goes live with contact paths, SEO basics, and launch support.",
  },
];

const faqs = [
  {
    question: "What is included in the $399 package?",
    answer:
      "The Starter Website includes up to 5 essential pages, responsive design, basic SEO setup, contact options, and hosting setup support.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. Frontail works remotely with small businesses, founders, and local service providers worldwide.",
  },
  {
    question: "Can you use my existing domain and hosting?",
    answer:
      "Yes. We can work with your current domain or hosting provider, or guide you through a simple setup if you are starting fresh.",
  },
  {
    question: "Can you write the website copy?",
    answer:
      "Yes. You can share rough business details and we can turn them into clear website copy for your pages.",
  },
  {
    question: "Can you add booking, payment, or ecommerce features?",
    answer:
      "Yes. Those are handled under the Custom Website package because requirements vary by business.",
  },
];

export default function SmallBusinessWebsiteGlobalPage() {
  const schema = {
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
            name: "Website Packages for Small Businesses Worldwide",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website Packages for Small Businesses Worldwide",
        description:
          "Affordable, mobile-ready website development packages for small businesses outside India.",
        provider: {
          "@type": "Organization",
          name: "Frontail Technology",
          url: "https://frontail.com",
        },
        areaServed: "Worldwide",
        offers: {
          "@type": "OfferCatalog",
          name: "Small Business Website Packages",
          itemListElement: packages.map((item, index) => ({
            "@type": "Offer",
            position: index + 1,
            name: item.name,
            price:
              item.price === "Contact us"
                ? undefined
                : item.price.replace("$", ""),
            priceCurrency: item.price === "Contact us" ? undefined : "USD",
            description: item.note,
            url: pageUrl,
          })),
        },
      },
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
        <NoiseTexture
          className="opacity-[0.08] mix-blend-multiply"
          frequency={0.55}
          noiseOpacity={0.35}
        />

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">
              <Globe2 className="h-4 w-4 text-primary" />
              Website packages for global small businesses
            </div>

            <h1 className="mt-6 font-anton text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-6xl">
              Website Packages for Small Businesses Worldwide
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-xl">
              Starting at <span className="font-bold text-primary">$399</span>.
              Get a clean, fast website that helps customers understand your
              services, trust your business, and contact you quickly.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#website-enquiry"
                className="btn-3d inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white"
              >
                Start Your Website
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:border-primary/50 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-md border border-gray-300 bg-white/85 shadow-sm backdrop-blur">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_0.85fr]">
              <div className="p-5 md:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  Ready for local customers
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {businessTypes.map((type) => (
                    <div
                      key={type}
                      className="rounded-md border border-gray-200 bg-[#f7f3eb] px-3 py-3 text-center text-sm font-semibold text-gray-800"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-200 bg-primary/10 p-5 text-gray-900 md:border-l md:border-t-0 md:p-8">
                <p className="text-sm font-semibold text-primary">
                  Starter package
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-anton text-5xl tracking-normal">
                    $399
                  </span>
                  <span className="pb-2 text-sm text-gray-600">
                    starting price
                  </span>
                </div>
                <div className="mt-5 grid gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Up to 5 essential pages
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Launch in 5-7 days
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    Contact and enquiry setup
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Packages
            </p>
            <h2 className="mt-3 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
              Practical pricing for small business websites
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Choose a package based on your pages, lead capture needs, and how
              much your customers need to see before they contact you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`rounded-md border bg-white p-6 shadow-sm ${
                  item.featured
                    ? "border-primary shadow-primary/10"
                    : "border-gray-300"
                }`}
              >
                {item.featured && (
                  <span className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-extrabold text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.note}
                </p>
                <div className="mt-5">
                  <span className="font-anton text-4xl tracking-normal text-gray-900">
                    {item.price}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-gray-500">
                    Timeline: {item.timeline}
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-md border border-gray-300 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-[#f7f3eb] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="website-enquiry"
        className="scroll-mt-28 px-4 py-12 md:py-16"
      >
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="relative h-fit overflow-hidden rounded-md border border-primary/20 bg-primary/10 p-6 text-gray-900 shadow-sm md:p-7">
            <NoiseTexture
              className="opacity-[0.1] mix-blend-multiply"
              frequency={0.7}
              noiseOpacity={0.35}
            />
            <div className="absolute inset-0 bg-dot-black/[0.04]" />
            <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-primary/20 blur-[80px]" />
            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Quick enquiry
              </p>
              <h2 className="mt-3 font-anton text-3xl font-extrabold tracking-normal md:text-4xl">
                No long discovery form
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Small business owners need a clear website path, not a heavy
                startup questionnaire. Share the basics and we will suggest the
                right package.
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Works remotely worldwide
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Contact and lead flow included
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Best package recommendation
                </div>
              </div>
            </div>
          </aside>
          <WebsiteEnquiryForm
            packageOptions={[
              "Starter Website - $399",
              "Growth Website - $699",
              "Custom Website",
              "Not sure yet",
            ]}
            defaultPackage="Starter Website - $399"
            title="Tell us about your business"
            description="Share the basics and we will recommend the right website package for your business."
            whatsappText={whatsappText}
          />
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl rounded-md border border-gray-300 bg-white p-6 shadow-sm md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Process
              </p>
              <h2 className="mt-3 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                A simple path from brief to launch
              </h2>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-primary text-sm font-extrabold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
              FAQs for small business owners
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-md border border-gray-300 bg-white p-5 shadow-sm"
              >
                <h3 className="font-extrabold text-gray-900">{faq.question}</h3>
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
          <NoiseTexture
            className="opacity-[0.1] mix-blend-multiply"
            frequency={0.7}
            noiseOpacity={0.35}
          />
          <div className="absolute inset-0 bg-dot-black/[0.04]" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-anton text-3xl font-extrabold tracking-normal md:text-5xl">
              Ready to launch your business website?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
              Start with a practical website package built for trust, contact,
              local discovery, and fast launch.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#website-enquiry"
                className="btn-3d inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white"
              >
                Start Your Website
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:border-primary/50 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Frontail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
