import React from "react";
import type { CaseStudy } from "@/data/caseStudies";
import { Check } from "lucide-react";

interface FeatureBreakdownProps {
  caseStudy: CaseStudy;
}

export const FeatureBreakdown: React.FC<FeatureBreakdownProps> = ({ caseStudy }) => {
  return (
    <section className="py-14 md:py-20 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Features & Capabilities
          </p>
          <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
            Key Product Features Built
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudy.keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-300 bg-white/90 backdrop-blur-xs shadow-xs hover:border-primary/40 transition-colors flex flex-col justify-between"
            >
              <div>
                {feature.tag && (
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
                    {feature.tag}
                  </span>
                )}
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>Production Implemented</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBreakdown;
