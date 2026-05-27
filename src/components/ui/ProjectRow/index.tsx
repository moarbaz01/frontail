import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techs: string[];
  link: string;
  client?: string;
  industry?: string;
  deliverables?: string;
  themeColor?: string;
}

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const titleParts = project.title.split(" ");
  const accentWord = titleParts[0];
  const restTitle = titleParts.slice(1).join(" ");
  const imageOnRight = index % 2 === 0;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-md border border-gray-300 bg-white p-5 shadow-sm md:p-7"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
        {/* Image Side */}
        <div
          className={`relative order-1 flex min-h-[220px] items-end justify-center overflow-hidden lg:min-h-[280px] ${
            imageOnRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div
            className="absolute bottom-0 right-4 h-44 w-44 rounded-full opacity-15 blur-3xl transition-opacity duration-300 group-hover:opacity-30"
            style={{ backgroundColor: project.themeColor || "#fe7d02" }}
          />
          <div className="relative h-[220px] w-full max-w-md transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] md:h-[320px] lg:h-[430px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-contain object-bottom drop-shadow-2xl transition-[filter] duration-300 group-hover:drop-shadow-[0_22px_28px_rgba(0,0,0,0.22)]"
            />
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`order-2 space-y-5 lg:space-y-6 ${
            imageOnRight ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              Featured Project
            </p>
            <h3 className="font-anton text-3xl font-extrabold uppercase leading-tight tracking-normal text-gray-900 md:text-4xl">
              <span style={{ color: project.themeColor || "#fe7d02" }}>
                {accentWord}
              </span>
              {restTitle && <> {restTitle}</>}
            </h3>
            <div
              className="mt-3 h-1 w-16 rounded-full"
              style={{ backgroundColor: project.themeColor || "#fe7d02" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.industry && (
              <div>
                <p className="text-xs text-gray-400 mb-1">Industry:</p>
                <p className="text-sm font-medium leading-relaxed text-gray-800">
                  {project.industry}
                </p>
              </div>
            )}
          </div>

          {project.deliverables && (
            <div>
              <p className="text-xs text-gray-400 mb-1">Deliverables:</p>
              <p className="text-sm font-medium leading-relaxed text-gray-800">
                {project.deliverables}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="hidden max-w-xl text-sm leading-relaxed text-gray-600 sm:block">
            {project.description}
          </p>

          <a
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectRow;
