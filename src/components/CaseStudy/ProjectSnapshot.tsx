import React from "react";
import type { CaseStudy } from "@/data/caseStudies";
import { Building2, Layers, MonitorSmartphone, Clock, Wrench } from "lucide-react";

interface ProjectSnapshotProps {
  caseStudy: CaseStudy;
}

export const ProjectSnapshot: React.FC<ProjectSnapshotProps> = ({ caseStudy }) => {
  const snapshotItems = [
    {
      label: "Industry",
      value: caseStudy.industry,
      icon: <Layers className="w-4 h-4 text-primary" />,
      show: Boolean(caseStudy.industry),
    },
    {
      label: "Client",
      value: caseStudy.client,
      icon: <Building2 className="w-4 h-4 text-primary" />,
      show: Boolean(caseStudy.client),
    },
    {
      label: "Platforms",
      value: caseStudy.platforms.join(" • "),
      icon: <MonitorSmartphone className="w-4 h-4 text-primary" />,
      show: caseStudy.platforms && caseStudy.platforms.length > 0,
    },
    {
      label: "Timeline",
      value: caseStudy.timeline,
      icon: <Clock className="w-4 h-4 text-primary" />,
      show: Boolean(caseStudy.timeline),
    },
    {
      label: "Core Stack",
      value: caseStudy.techStack.flatMap((ts) => ts.items).slice(0, 4).join(", "),
      icon: <Wrench className="w-4 h-4 text-primary" />,
      show: caseStudy.techStack && caseStudy.techStack.length > 0,
    },
  ].filter((item) => item.show);

  return (
    <section className="py-8 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {snapshotItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-white/80 bg-gradient-to-b from-white/85 via-white/65 to-white/45 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md flex flex-col justify-between"
            >
              <span className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSnapshot;
