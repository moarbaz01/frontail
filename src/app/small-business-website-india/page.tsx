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

const pageUrl = "https://frontail.com/small-business-website-india";
const whatsappUrl =
  "https://wa.me/918741035190?text=Hi%20Frontail%2C%20I%20want%20a%20website%20package%20for%20my%20small%20business.";

export const metadata: Metadata = {
  title: "Website Packages for Indian Small Businesses",
  description:
    "Affordable website packages for Indian small businesses starting at ₹14,999 with 1-year hosting included. Mobile-ready websites for shops, clinics, salons, restaurants, and local service providers.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "small business website India",
    "website packages India",
    "local business website development India",
    "website for shop India",
    "website for clinic India",
    "affordable website development India",
    "business website with hosting India",
  ],
  openGraph: {
    title: "Website Packages for Indian Small Businesses",
    description:
      "Launch a clean, mobile-ready business website starting at ₹14,999 with 1-year hosting included.",
    url: pageUrl,
    type: "website",
  },
};

const packages = [
  {
    name: "Starter Website",
    price: "₹14,999",
    note: "Best for shops, salons, clinics, and local service providers.",
    timeline: "5-7 days",
    featured: true,
    features: [
      "Up to 5 essential pages",
      "Mobile-responsive design",
      "WhatsApp click-to-chat button",
      "Google Maps and contact section",
      "Basic SEO setup for your city",
      "Gallery, offers, and testimonials",
      "1-year hosting included",
    ],
  },
  {
    name: "Business Growth",
    price: "₹24,999",
    note: "For businesses that need stronger lead capture and more sections.",
    timeline: "7-12 days",
    featured: false,
    features: [
      "Up to 10 pages or service sections",
      "Gallery, offers, and testimonials",
      "Lead form connected to email",
      "Google Analytics setup",
      "Speed and image optimization",
      "1-year hosting included",
    ],
  },
  {
    name: "Custom Website",
    price: "Contact us",
    note: "For booking flows, ecommerce, CRM, dashboards, or custom features.",
    timeline: "Planned with you",
    featured: false,
    features: [
      "Custom pages and flows",
      "Booking or enquiry workflows",
      "Payment or ecommerce options",
      "Multi-location business setup",
      "Advanced SEO structure",
      "Maintenance plan available",
    ],
  },
];

const businessTypes = [
  "Retail shops",
  "Clinics",
  "Restaurants",
  "Salons",
  "Coaching centers",
  "Real estate",
  "Gyms",
  "Local services",
];

const benefits = [
  {
    title: "Built for mobile visitors",
    description:
      "Most Indian customers check businesses on phones first, so your site is designed for quick scanning and fast contact.",
    icon: Smartphone,
  },
  {
    title: "WhatsApp-first enquiries",
    description:
      "Visitors can contact you directly on WhatsApp without filling a long form.",
    icon: MessageCircle,
  },
  {
    title: "Local search ready",
    description:
      "Pages are structured around your city, services, contact details, and Google-friendly content.",
    icon: Search,
  },
  {
    title: "Location and trust details",
    description:
      "Add Google Maps, working hours, testimonials, offers, and simple proof that customers look for.",
    icon: MapPin,
  },
];

const processSteps = [
  {
    title: "Share your business details",
    text: "Send your logo, services, photos, phone number, and location details.",
  },
  {
    title: "We design the first version",
    text: "You review a clean website layout made around your business and customers.",
  },
  {
    title: "We launch and hand over",
    text: "Your website goes live with hosting, basic SEO, and contact flows ready.",
  },
];

const faqs = [
  {
    question: "Is hosting included in the ₹14,999 package?",
    answer:
      "Yes, the Starter Website package includes 1-year hosting. Domain charges are separate if you do not already have a domain.",
  },
  {
    question: "Can you add WhatsApp and Google Maps?",
    answer:
      "Yes. WhatsApp click-to-chat and Google Maps are included because they are important for Indian local businesses.",
  },
  {
    question: "Which businesses is this package best for?",
    answer:
      "It works well for shops, clinics, salons, coaching centers, restaurants, gyms, consultants, real estate agents, and local service providers.",
  },
  {
    question: "Can you write the website content for us?",
    answer:
      "Yes. We can help rewrite your service details into clear website copy. You only need to share the basic business information.",
  },
  {
    question: "Can the website support Hindi or regional language content?",
    answer:
      "Yes. We can add Hindi or regional language content if you provide the final text or approve the translated copy.",
  },
];

export default function SmallBusinessWebsiteIndiaPage() {
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
            name: "Website Packages for Indian Small Businesses",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website Packages for Indian Small Businesses",
        description:
          "Affordable, mobile-ready website development packages for Indian small businesses with 1-year hosting included.",
        provider: {
          "@type": "Organization",
          name: "Frontail Technology",
          url: "https://frontail.com",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
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
                : item.price.replace("₹", ""),
            priceCurrency: item.price === "Contact us" ? undefined : "INR",
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

        <div className="relative z-10 mx-auto max-w-screen-lg">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">
              <Globe2 className="h-4 w-4 text-primary" />
              India-specific local business websites
            </div>

            <h1 className="mt-6 font-anton text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-6xl">
              Website Packages for Indian Small Businesses
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-xl">
              Starting at{" "}
              <span className="font-bold text-primary">₹14,999</span> with
              1-year hosting included. Get a clean, fast website that helps
              customers find you, trust you, and contact you quickly.
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
                  Ready for Indian customers
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
                    ₹14,999
                  </span>
                  <span className="pb-2 text-sm text-gray-600">one-time</span>
                </div>
                <div className="mt-5 grid gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    1-year hosting included
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Launch in 5-7 days
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    WhatsApp enquiries setup
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-lg">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Packages
            </p>
            <h2 className="mt-3 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
              Simple pricing for real local businesses
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Pick a package based on how much your customers need to see before
              they call, visit, book, or send an enquiry.
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

      <section
        id="website-enquiry"
        className="scroll-mt-28 px-4 py-12 md:py-16"
      >
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1.18fr]">
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
                Better than MVP form
              </p>
              <h2 className="mt-3 font-anton text-3xl font-extrabold tracking-normal md:text-4xl">
                A short enquiry for website packages
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Local business owners should not have to answer product strategy
                questions. Share the basics and we will suggest the right
                package.
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Phone and WhatsApp-first
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  No long project brief needed
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  We reply with the best package fit
                </div>
              </div>
            </div>
          </aside>
          <WebsiteEnquiryForm />
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-lg">
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

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-lg rounded-md border border-gray-300 bg-white p-6 shadow-sm md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Process
              </p>
              <h2 className="mt-3 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                From idea to live website without confusion
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
        <div className="mx-auto max-w-screen-lg">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Questions
            </p>
            <h2 className="mt-3 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
              FAQs for Indian business owners
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
        <div className="relative mx-auto max-w-screen-lg overflow-hidden rounded-md border border-primary/20 bg-primary/10 p-6 text-center text-gray-900 shadow-sm md:p-10">
          <NoiseTexture
            className="opacity-[0.1] mix-blend-multiply"
            frequency={0.7}
            noiseOpacity={0.35}
          />
          <div className="absolute inset-0 bg-dot-black/[0.04]" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-anton text-3xl font-extrabold tracking-normal md:text-5xl">
              Ready to take your local business online?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
              Start with a practical website package built for Indian customers,
              phone enquiries, WhatsApp, and local discovery.
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
