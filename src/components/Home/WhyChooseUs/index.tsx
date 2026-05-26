"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ChartLine, HeartHandshake, Palette, User } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotLightCard";
import FeatureComponent from "@/components/ui/FeatureComponent";

const features = [
  {
    icon: Palette,
    title: "Tailored Designs",
    desc: "Creative designs that capture your brand's essence and engage your audience.",
  },
  {
    icon: User,
    title: "Experienced Team",
    desc: "Experienced designers and developers passionate about digital innovation.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    desc: "Dedicated client support focused on understanding and meeting your needs.",
  },
  {
    icon: ChartLine,
    title: "Results-Driven Strategies",
    desc: "Results-driven strategies to elevate your online presence and help you grow.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" md:flex items-center relative justify-center py-8 px-4">
      {/* <div className="h-[400px] -left-[100px] -bottom-[100px] absolute w-[400px] bg-primary blur-3xl opacity-10"></div> */}
      {/* <div className="h-[400px] right-0 top-[100px] absolute w-[400px] bg-primary blur-3xl opacity-10"></div> */}

      <div className="max-w-screen-2xl mx-auto">
        {/* Header with Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 * 0.1 }}
          viewport={{ once: true }}
          className="md:text-4xl text-2xl leading-tight text-center font-extrabold"
        >
          Why Choose Us <span className="text-5xl text-primary">?</span>
        </motion.h1>

        {/* Description with Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 0.1 }}
          viewport={{ once: true }}
          className="text-xl mt-4 leading-relaxed text-gray-600 md:w-1/2 text-center md:mx-auto"
        >
          Empowering startups and local businesses to thrive online
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 * 0.1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 mb-6">Ready to launch your startup or grow your business?</p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://cal.com/frontail/30min', '_blank', 'width=800,height=600')}
            className="btn-3d px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/80 font-medium"
          >
            Start Your Project
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center mt-8 gap-8"
        >
          {/* Text and Icons Section */}
          <div className="flex md:flex-1  flex-col gap-8">
            <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-6 ">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 5) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureComponent
                    icon={<item.icon className="text-primary/50" />}
                    text={item.desc}
                    index={index}
                    title={item.title}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
