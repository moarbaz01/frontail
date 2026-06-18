"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  HelpCircle,
  Layers,
  Rocket,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { detailedServices } from "@/detailedServices";

interface ServiceProps {
  service: (typeof detailedServices)[number];
}

type TitleDescription = string | { title: string; description?: string };

const getTitle = (item: TitleDescription) =>
  typeof item === "string" ? item : item.title;

const getDescription = (item: TitleDescription) =>
  typeof item === "string" ? "" : item.description || "";

const getTechName = (tech: string | { name: string }) =>
  typeof tech === "string" ? tech : tech.name;

const getCtaTitle = (service: ServiceProps["service"]) => service.cta.headline;

const getCtaSubtitle = (service: ServiceProps["service"]) =>
  service.cta.subtext;

const getCtaButton = (service: ServiceProps["service"]) =>
  service.cta.primaryButton;

const splitStep = (step: string) => {
  const parts = step.split(/—|–|Ã¢â‚¬â€œ/);
  return {
    title: parts[0]?.trim() || step,
    description: parts[1]?.trim() || step,
  };
};

const ServiceDetailsView: React.FC<ServiceProps> = ({ service }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 pb-12 pt-28">
        <div className="absolute inset-0 -z-[1] bg-grid-black/[0.04]" />
        <div className="mx-auto max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-md border border-gray-300 bg-white p-6 text-center shadow-sm md:p-10"
          >
            {"tagline" in service && (
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
                {service.tagline}
              </p>
            )}
            <h1 className="mx-auto max-w-4xl font-anton text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-5xl">
              {service.headline}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
              {service.subheadline}
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

      {"painPoints" in service && (
        <section className="px-4 py-10">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-3">
            {service.painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-md border border-gray-300 bg-white p-5 shadow-sm"
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Zap className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
                  key={getTitle(item)}
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
                    <h3 className="font-semibold text-gray-900">
                      {getTitle(item)}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {getDescription(item) ||
                        "Built with a practical, launch-focused approach."}
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
                  <li
                    key={getTitle(reason)}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      <strong className="text-gray-900">
                        {getTitle(reason)}
                      </strong>
                      {getDescription(reason) && (
                        <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                          {getDescription(reason)}
                        </span>
                      )}
                    </span>
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
                    key={getTechName(tech)}
                    className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
                  >
                    {getTechName(tech)}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 text-center">
            <h2 className="font-anton text-4xl font-extrabold tracking-normal text-gray-900 md:text-5xl">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="mt-3 text-gray-600">
              A clear path from idea to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {service.process.map((step, index) => {
              const parsedStep =
                typeof step === "string"
                  ? splitStep(step)
                  : { title: step.title, description: step.description };

              return (
                <motion.div
                  key={parsedStep.title}
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

      {"outcomes" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-md border border-gray-300 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                What You Get
              </h2>
              <ul className="space-y-3">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-gray-300 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Best For
              </h2>
              <ul className="space-y-3">
                {service.idealFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {"comparisonTable" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-gray-50 text-gray-900">
                  <tr>
                    {service.comparisonTable.headers.map((header) => (
                      <th key={header} className="px-5 py-4 font-bold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {service.comparisonTable.rows.map((row) => (
                    <tr key={row.join("-")} className="text-gray-700">
                      {row.map((cell, index) => (
                        <td
                          key={`${cell}-${index}`}
                          className={
                            index === 0
                              ? "px-5 py-4 font-semibold text-gray-900"
                              : "px-5 py-4"
                          }
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {"faqs" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
              <HelpCircle className="h-6 w-6 text-primary" />
              Questions
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-md border border-gray-300 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-bold text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-12">
        <div className="mx-auto max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-md border border-gray-300 bg-white bg-dot-black/[0.06] p-8 text-center shadow-sm md:p-10"
          >
            <h2 className="font-anton text-4xl font-extrabold tracking-normal text-gray-900 md:text-5xl">
              {getCtaTitle(service)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {getCtaSubtitle(service)}
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="btn-3d mt-7 rounded-md bg-primary px-7 py-3 text-sm font-bold text-white"
            >
              {getCtaButton(service)}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsView;
