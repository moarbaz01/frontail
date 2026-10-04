import React from "react";
import type { CaseStudy } from "@/data/caseStudies";

interface TechStackListProps {
  caseStudy: CaseStudy;
}

export const TechStackList: React.FC<TechStackListProps> = ({ caseStudy }) => {
  return (
    <section className="py-14 md:py-20 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Technology Breakdown
          </p>
          <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
            Technology Stack & Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudy.techStack.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-300 bg-white/90 backdrop-blur-xs shadow-xs"
            >
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((tech, techIdx) => (
                  <li
                    key={techIdx}
                    className="flex items-center gap-2 text-sm font-medium text-gray-800 bg-[#f7f3eb] px-3 py-2 rounded-md border border-gray-200 shadow-2xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackList;
