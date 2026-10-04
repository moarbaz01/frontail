import React from "react";
import type { CaseStudy } from "@/data/caseStudies";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface ChallengeSolutionProps {
  caseStudy: CaseStudy;
}

export const ChallengeSolution: React.FC<ChallengeSolutionProps> = ({ caseStudy }) => {
  return (
    <section className="py-14 md:py-20 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* The Challenge */}
          <div className="relative overflow-hidden rounded-xl border border-red-200/80 bg-gradient-to-b from-white/90 via-white/75 to-red-50/30 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md md:p-8">
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>The Challenge</span>
            </div>
            <h2 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-4">
              {caseStudy.theChallenge.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              {caseStudy.theChallenge.description}
            </p>
            <ul className="space-y-3">
              {caseStudy.theChallenge.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Built */}
          <div className="relative overflow-hidden rounded-xl border border-emerald-200/80 bg-gradient-to-b from-white/90 via-white/75 to-emerald-50/30 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md md:p-8">
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>What We Built</span>
            </div>
            <h2 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-4">
              {caseStudy.whatWeBuilt.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              {caseStudy.whatWeBuilt.description}
            </p>
            <div className="space-y-4">
              {caseStudy.whatWeBuilt.keyHighlights.map((highlight, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/70 border border-emerald-100 backdrop-blur-xs shadow-2xs">
                  <h3 className="font-bold text-gray-900 text-base mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolution;
