"use client";
import Link from "next/link";
import SpotlightCard from "../ui/SpotLightCard";
import { Brush, Code, Code2, ShoppingBag, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants } from "@/varients";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
  index: number;
}
// ServiceCard component for rendering individual service cards
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  actionText,
  actionLink,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 * index }}
      viewport={{ once: true }}
    >
      <SpotlightCard
        className="flex flex-col gap-2 p-4 md:p-6 backdrop-blur-lg  rounded-lg border border-primary/10  h-[240px] "
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="text-xl text-primary bg-white/10 border p-2 rounded-full backdrop-blur-md border-primary/10 w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link
          href={actionLink}
          className="text-white bg-primary px-4 py-2 w-fit rounded-full hover:bg-primary-dark transition-colors"
        >
          {actionText}
        </Link>
      </SpotlightCard>
    </motion.div>
  );
};


// Define services array with web development niches
const services = [
  {
    id: 1,
    icon: <ShoppingBag className="text-5xl text-primary " />,
    title: "E-commerce Development",
    description:
      "Creating robust and scalable e-commerce platforms tailored for your business.",
    actionText: "Learn More",
    actionLink: "/services/e-commerce", // Adjust this to your routes
  },
  {
    id: 2,
    icon: <Code className="text-5xl text-primary " />,
    title: "Custom Web Development",
    description:
      "Building custom web applications to meet your specific business requirements.",
    actionText: "Explore Custom Development",
    actionLink: "/services/custom-website", // Adjust this to your routes
  },
  {
    id: 3,
    icon: <Brush className="text-5xl text-primary " />,
    title: "Portfolio Websites",
    description:
      "Designing stunning portfolio websites to showcase your work and attract clients.",
    actionText: "View Portfolio Services",
    actionLink: "/services/portfolio", // Adjust this to your routes
  },
  {
    id: 4,
    icon: <Code2 className="text-5xl text-primary " />,
    title: "Landing Page Development",
    description:
      "Creating high-converting landing pages that drive traffic and engagement.",
    actionText: "See Landing Pages",
    actionLink: "/services/landing-page", // Adjust this to your routes
  },
];

const Services = () => {
  return (
    <section className="px-4 py-12 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block relative mb-2"
          >
            <Sparkles
              className="text-white absolute -top-6 -left-6"
              size={24}
            />
            <span className="text-sm uppercase tracking-widest text-white font-mono">
              Our Services
            </span>
            <Sparkles
              className="text-white absolute -top-6 -right-6"
              size={24}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary to-blue-500 tracking-tight"
          >
            Web Development Services
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto mb-6"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light"
          >
            We offer a wide range of web development services to help you
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map(
            (
              { id, icon, title, description, actionText, actionLink },
              index
            ) => (
              <ServiceCard
                key={id}
                icon={icon}
                title={title}
                description={description}
                actionText={actionText}
                actionLink={actionLink}
                index={index}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
