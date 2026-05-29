"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers,
  Rocket,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceProps {
  service: {
    id: number;
    title: string;
    slug: string;
    image: string;
    overview: string;
    whatWeOffer: string[];
    process: string[];
    whyChooseUs: string[];
    technologies: string[];
    cta: {
      title: string;
      subtitle: string;
      buttonText: string;
    };
  };
}

const splitStep = (step: string) => {
  const parts = step.split("â€“");
  return {
    title: parts[0]?.trim() || step,
    description: parts[1]?.trim() || step,
  };
};

const ServiceDetailsView: React.FC<ServiceProps> = ({ service }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 pb-14 pt-28">
        <div className="absolute inset-0 -z-[1] bg-grid-black/[0.04]" />
        <div className="mx-auto max-w-screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-md border border-gray-300 bg-white p-6 text-center shadow-sm md:p-10"
          >
            <h1 className="font-anton mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl tracking-normal">
              {service.title} that <span className="text-primary">scales</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              {service.overview}
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="btn-3d mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-bold text-white"
            >
              Start Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-md border border-gray-300 bg-white p-6 shadow-sm"
          >
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
              <Layers className="h-6 w-6 text-primary" />
              What We Offer
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {service.whatWeOffer.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 p-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Zap className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Built with a practical, launch-focused approach.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-md border border-gray-300 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-gray-900">
                <Rocket className="h-6 w-6 text-primary" />
                Why Choose Us
              </h2>
              <ul className="space-y-3">
                {service.whyChooseUs.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-md border border-gray-300 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-gray-900">
                <Code2 className="h-6 w-6 text-primary" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-screen-lg">
          <div className="mb-8 text-center">
            <h2 className="font-anton text-4xl font-extrabold text-gray-900 md:text-5xl tracking-normal">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="mt-3 text-gray-600">
              A clear path from idea to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {service.process.map((step, index) => {
              const parsedStep = splitStep(step);

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-md border border-gray-300 bg-white p-5 shadow-sm"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {parsedStep.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {parsedStep.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-md border border-gray-300 bg-white bg-dot-black/[0.06] p-8 text-center shadow-sm md:p-10"
          >
            <h2 className="font-anton text-4xl font-extrabold text-gray-900 md:text-5xl tracking-normal">
              {service.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {service.cta.subtitle}
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="btn-3d mt-7 rounded-md bg-primary px-7 py-3 text-sm font-bold text-white"
            >
              {service.cta.buttonText}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsView;
