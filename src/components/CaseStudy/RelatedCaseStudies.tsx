import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

interface RelatedCaseStudiesProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export const RelatedCaseStudies: React.FC<RelatedCaseStudiesProps> = ({
  currentSlug,
  relatedSlugs,
}) => {
  const related = caseStudiesData
    .filter((cs) => cs.slug !== currentSlug && relatedSlugs.includes(cs.slug))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-14 md:py-20 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Portfolio
            </p>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              More Engineering Case Studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 inline-flex items-center gap-1.5"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/80 bg-gradient-to-b from-white/85 via-white/65 to-white/45 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
              <div className="relative aspect-[16/10] bg-[#f7f3eb]/70 p-4 flex items-center justify-center border-b border-gray-200/70">
                <Image
                  src={cs.heroImage}
                  alt={cs.title}
                  fill
                  unoptimized
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 768px) 360px, 100vw"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {cs.category}
                  </span>
                  <h3 className="font-anton text-xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {cs.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCaseStudies;
