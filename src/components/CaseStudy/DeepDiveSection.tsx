import React from "react";
import type { CaseStudy } from "@/data/caseStudies";
import { Sparkles } from "lucide-react";

interface DeepDiveSectionProps {
  caseStudy: CaseStudy;
}

export const DeepDiveSection: React.FC<DeepDiveSectionProps> = ({ caseStudy }) => {
  if (!caseStudy.deepDiveSections || caseStudy.deepDiveSections.length === 0) {
    return null;
  }

  return (
    <section className="py-14 md:py-20 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white/80 text-primary border border-primary/20 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product & Engineering Deep Dive</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
            Core Modules & Technical Execution
          </h2>
        </div>

        <div className="space-y-8 md:space-y-10">
          {caseStudy.deepDiveSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-xs rounded-xl border border-gray-300 p-6 md:p-8 shadow-xs"
            >
              <h3 className="font-anton text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-6 max-w-4xl">
                {section.description}
              </p>

              {section.subsections && section.subsections.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 border-t border-gray-200/80">
                  {section.subsections.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className="p-4 rounded-lg bg-[#f7f3eb]/60 border border-gray-200"
                    >
                      <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1.5">
                        {sub.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;
