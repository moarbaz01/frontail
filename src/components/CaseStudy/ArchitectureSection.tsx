import React from "react";
import type { CaseStudy } from "@/data/caseStudies";
import { Cpu, TerminalSquare } from "lucide-react";

interface ArchitectureSectionProps {
  caseStudy: CaseStudy;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ caseStudy }) => {
  return (
    <section className="py-14 md:py-20 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-white/80 text-gray-800 border border-gray-300 mb-3 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span>Engineering & System Design</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal mb-3">
            {caseStudy.engineeringArchitecture.heading}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl">
            {caseStudy.engineeringArchitecture.description}
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-4 mb-12">
          {caseStudy.engineeringArchitecture.layers.map((layer, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xs rounded-xl border border-gray-300 p-6 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="lg:max-w-md">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Layer {index + 1}
                </span>
                <h3 className="font-bold text-gray-900 text-lg md:text-xl mt-0.5">
                  {layer.layerName}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {layer.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-md">
                {layer.components.map((comp, compIdx) => (
                  <span
                    key={compIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#f7f3eb] border border-gray-300 text-xs font-mono font-medium text-gray-800"
                  >
                    <TerminalSquare className="w-3 h-3 text-primary" />
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Challenges & Solutions */}
        {caseStudy.technicalChallenges && caseStudy.technicalChallenges.length > 0 && (
          <div>
            <h3 className="font-anton text-2xl font-bold text-gray-900 mb-6">
              Key Engineering Challenges & Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.technicalChallenges.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Challenge
                    </span>
                    <h4 className="font-bold text-gray-900 text-base mb-3">
                      {item.challenge}
                    </h4>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      Engineered Solution
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArchitectureSection;
