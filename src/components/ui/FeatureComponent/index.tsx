import { ReactNode } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotLightCard";
const FeatureComponent = ({
  icon: Icon,
  index,
  text,
  title,
}: {
  icon: ReactNode;
  index: number;
  text: string;
  title: string;
}) => {
  return (
    <div className="backdrop-blur-lg flex items-center justify-center">
      <SpotlightCard
        className="flex flex-col p-4 md:p-6 rounded-md border border-primary/10 md:h-[250px]   "
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="text-xl text-primary bg-white/10 border md:p-4 p-2 rounded-full backdrop-blur-md border-primary/10 w-fit">
          {Icon}
        </div>
        <p className="md:text-lg text-sm font-semibold leading-relaxed mt-4">
          {title}
        </p>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-2">
          {text}
        </p>
      </SpotlightCard>
    </div>
  );
};

export default FeatureComponent;
