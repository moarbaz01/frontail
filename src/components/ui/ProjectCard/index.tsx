import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "../SpotLightCard";
import { motion } from "framer-motion";
const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    image: string;
    techs: string[];
    link: string;
    index?: number;
  };
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <SpotlightCard
        spotlightColor="rgba(0, 229, 255, 0.2)"
        className=" backdrop-blur-sm bg-white transition group rounded-lg border border-gray-300"
      >
        <motion.div className=" md:h-[300px] h-[250px]  w-full cursor-pointer relative overflow-hidden rounded-t">
          <Image
            src={project.image}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
            alt={project.title}
            fill
            className=" group-hover:scale-105 h-full w-auto transition duration-200"
          />
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </motion.div>
        <div className="px-4 py-6">
          <div className="flex items-center flex-wrap gap-2 mb-4">
            {project.techs.map((tech, index) => (
              <span key={index} className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 w-full">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            {project.link !== "" && (
              <a
                href={project.link}
                target="_blank"
                className={`
                text-white
                font-semibold
                rounded-full
                p-4
                w-fit
                border
                bg-primary
                hover:bg-primary/80
                transition
                border-primary
                cursor-pointer
                      `}
              >
                <LinkIcon />
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default ProjectCard;
