import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

interface RelatedServicesProps {
  caseStudy: CaseStudy;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({ caseStudy }) => {
  if (!caseStudy.relatedServices || caseStudy.relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="py-14 md:py-20 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Frontail Capabilities
          </p>
          <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
            Related Product Engineering Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudy.relatedServices.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/80 bg-gradient-to-b from-white/85 via-white/65 to-white/45 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <span>Explore Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
