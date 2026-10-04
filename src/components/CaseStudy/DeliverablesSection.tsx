import React from "react";
import type { CaseStudy } from "@/data/caseStudies";
import { PackageCheck } from "lucide-react";

interface DeliverablesSectionProps {
  caseStudy: CaseStudy;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ caseStudy }) => {
  return (
    <section className="py-14 md:py-20 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-white/80 text-primary border border-primary/20 mb-3 shadow-2xs">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>Product Outcome</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
            Delivered Capabilities & Final Product
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudy.deliverables.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-white/80 bg-gradient-to-b from-white/85 via-white/65 to-white/45 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md flex items-start gap-4 transition-all duration-300 hover:border-primary/40 hover:bg-white"
            >
              <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">{index + 1}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
