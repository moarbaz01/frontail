import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Engineering Case Studies & Portfolio",
  description:
    "Explore in-depth technical case studies by Frontail Technologies: Market Analytics, Industrial Operations Apps, FinTech Mandates, Gmail API SaaS, and Enterprise Infrastructure ERP.",
  keywords:
    "Frontail case studies, software engineering portfolio, SaaS case studies, React Native app development, FinTech software development, market analytics platform",
  alternates: {
    canonical: "https://frontail.com/case-studies",
  },
  openGraph: {
    title: "Engineering Case Studies & Portfolio | Frontail Technologies",
    description:
      "Explore in-depth technical case studies by Frontail Technologies: Market Analytics, Industrial Operations Apps, FinTech Mandates, Gmail API SaaS, and Enterprise Infrastructure ERP.",
    url: "https://frontail.com/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  const caseStudiesSchema = {
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
            name: "Case Studies",
            item: "https://frontail.com/case-studies",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Engineering Case Studies & Portfolio",
        url: "https://frontail.com/case-studies",
        description:
          "Explore in-depth technical case studies by Frontail Technologies: Market Analytics, Industrial Operations Apps, FinTech Mandates, Gmail API SaaS, and Enterprise Infrastructure ERP.",
        publisher: {
          "@type": "Organization",
          name: "Frontail Technologies",
          url: "https://frontail.com",
          logo: {
            "@type": "ImageObject",
            url: "https://frontail.com/favicon.png",
          },
        },
      },
    ],
  };

  return (
    <main className="min-h-screen pt-28 pb-16 bg-[#f7f3eb]">
      <JsonLd data={caseStudiesSchema} />

      {/* Header Section */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-white/80 text-primary border border-primary/20 mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Engineering Case Studies</span>
          </div>
          <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-normal mb-6">
            Engineering <span className="text-primary">In Action</span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 leading-relaxed">
            Detailed breakdowns of how we architect, design, and build production digital products for startups and fast-moving companies.
          </p>
        </div>
      </section>

      {/* Case Studies Editorial Grid */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 mb-16">
        <div className="space-y-8 md:space-y-10">
          {caseStudiesData.map((caseStudy, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={caseStudy.slug}
                className="group relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-b from-white/85 via-white/65 to-white/45 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:bg-white p-5 md:p-8"
              >
                <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent z-10" />
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Visual Preview Side */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-lg bg-gradient-to-br from-[#f7f3eb]/60 via-white to-[#f7f3eb]/40 border border-gray-200 p-4 md:p-6 flex items-center justify-center overflow-hidden ${
                      isEven ? "lg:order-2" : "lg:order-1 lg:col-start-1"
                    }`}
                  >
                    <div
                      className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                      style={{ backgroundColor: caseStudy.themeColor }}
                    />
                    <Image
                      src={caseStudy.heroImage}
                      alt={`${caseStudy.title} project showcase`}
                      fill
                      unoptimized
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-xl"
                      sizes="(min-width: 1024px) 560px, 100vw"
                    />
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isEven ? "lg:order-1" : "lg:order-2 lg:col-start-7"
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20">
                          {caseStudy.category}
                        </span>
                        <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded border border-gray-200">
                          {caseStudy.industry}
                        </span>
                      </div>

                      <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal mb-3 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h2>

                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                        {caseStudy.subtitle}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {caseStudy.techStack
                          .flatMap((ts) => ts.items)
                          .slice(0, 5)
                          .map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-gray-50 border border-gray-200 text-gray-800"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className="btn-3d inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-xs hover:bg-primary/90 transition-colors"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {caseStudy.externalUrl && (
                        <a
                          href={caseStudy.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-700 hover:border-primary/50 hover:text-primary transition-colors px-4 py-3 rounded-md border border-gray-300 bg-white"
                        >
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
