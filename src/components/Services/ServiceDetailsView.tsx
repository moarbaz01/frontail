"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  HelpCircle,
  Layers,
  Rocket,
  Zap,
} from "lucide-react";
import Link from "next/link";
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
  const extService = service as any;

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-4 pb-12 pt-28">
        <div className="absolute inset-0 -z-[1] bg-grid-black/[0.04]" />
        <div className="mx-auto max-w-screen-xl">
          {extService.heroVisual ? (
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left Column: Text & CTAs */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                {"tagline" in service && (
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
                    {service.tagline}
                  </p>
                )}
                <h1 className="font-anton text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-5xl lg:text-6xl">
                  {service.headline}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                  {service.subheadline}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-3d inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-bold text-white"
                  >
                    Start Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {extService.heroVisual.tags && (
                    <div className="flex gap-2">
                      {extService.heroVisual.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hero trust badges (MVP-specific) */}
                {"heroBadges" in service && (
                  <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {extService.heroBadges.map(
                      (badge: { label: string; sublabel: string }) => (
                        <div key={badge.label}>
                          <p className="text-sm font-bold text-gray-900">
                            {badge.label}
                          </p>
                          <p className="text-xs text-gray-500">
                            {badge.sublabel}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </motion.div>

              {/* Right Column: Visual Composition */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative mx-auto w-full max-w-lg lg:max-w-none"
              >
                <div className="relative aspect-[4/3] w-full rounded-xl border border-gray-200 bg-gray-50 p-2 shadow-xl md:p-4">
                  <div className="relative h-full w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                    {extService.heroVisual.desktopImage ? (
                      <img
                        src={extService.heroVisual.desktopImage}
                        alt={`${service.title} desktop view`}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                        <Layers className="h-12 w-12" />
                      </div>
                    )}
                  </div>

                  {/* Mobile App Overlay */}
                  {extService.heroVisual.mobileImage && (
                    <div className="absolute -bottom-6 -right-6 h-[60%] w-[28%] min-w-[120px] rounded-[24px] border-[6px] border-gray-900 bg-gray-900 shadow-2xl">
                      <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-white">
                        <img
                          src={extService.heroVisual.mobileImage}
                          alt={`${service.title} mobile view`}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ) : (
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
              <Link
                href="/contact"
                className="btn-3d mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-bold text-white"
              >
                Start Project
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Hero trust badges (fallback for centered layout) */}
              {"heroBadges" in service && (
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {extService.heroBadges.map(
                    (badge: { label: string; sublabel: string }) => (
                      <div
                        key={badge.label}
                        className="rounded-md border border-gray-200 bg-gray-50 p-4"
                      >
                        <p className="text-sm font-bold text-gray-900">
                          {badge.label}
                        </p>
                        <p className="text-xs text-gray-500">
                          {badge.sublabel}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── WHAT WE BUILD (MVP types) ── */}
      {"mvpTypes" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-8 text-center">
              <h2 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                What We <span className="text-primary">Build</span>
              </h2>
              <p className="mt-3 text-gray-600">
                MVPs across every product category startups need.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {extService.mvpTypes.map(
                (
                  type: { title: string; description: string },
                  index: number
                ) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-md border border-gray-300 bg-white p-5 shadow-sm"
                  >
                    <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Rocket className="h-4 w-4" />
                    </span>
                    <h3 className="font-bold text-gray-900">{type.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {type.description}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── PAIN POINTS ── */}
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

      {/* ── WHAT WE OFFER + WHY CHOOSE US + TECH STACK ── */}
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

            {/* Tech stack — flat list (used when technologyGroups not available) */}
            {"technologies" in service &&
              !("technologyGroups" in service) && (
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
              )}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
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

      {/* ── FEATURE PRIORITIZATION (educational) ── */}
      {"featurePrioritization" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-8 text-center">
              <h2 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                How We <span className="text-primary">Prioritize</span> Features
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
                {extService.featurePrioritization.intro}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {extService.featurePrioritization.categories.map(
                (
                  cat: {
                    label: string;
                    description: string;
                    examples: string[];
                  },
                  index: number
                ) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-md border border-gray-300 bg-white p-6 shadow-sm"
                  >
                    <span
                      className={`mb-4 inline-block rounded-md px-3 py-1 text-xs font-bold uppercase tracking-widest ${
                        index === 0
                          ? "bg-primary/10 text-primary"
                          : index === 1
                            ? "bg-blue-50 text-blue-600"
                            : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {cat.label}
                    </span>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {cat.description}
                    </p>
                    <ul className="space-y-2">
                      {cat.examples.map((ex) => (
                        <li
                          key={ex}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── TECHNOLOGY (grouped) ── */}
      {"technologyGroups" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-8 text-center">
              <h2 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                Our <span className="text-primary">Technology</span>
              </h2>
              <p className="mt-3 text-gray-600">
                The tools we use to build production-ready products.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {extService.technologyGroups.map(
                (group: { group: string; items: string[] }) => (
                  <div
                    key={group.group}
                    className="rounded-md border border-gray-300 bg-white p-4 shadow-sm"
                  >
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                      {group.group}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm font-medium text-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURED PROJECT ── */}
      {"featuredProject" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-8 text-center">
              <h2 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                Work We&apos;ve{" "}
                <span className="text-primary">Shipped</span>
              </h2>
              <p className="mt-3 text-gray-600">
                Real products built and launched for real clients.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-md border border-gray-300 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                    {extService.featuredProject.industry}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {extService.featuredProject.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {extService.featuredProject.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {extService.featuredProject.technologies.map((t: string) => (
                      <span
                        key={t}
                        className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {extService.featuredProject.link && (
                    <a
                      href={extService.featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                    >
                      Visit product
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div>
                  <p className="mb-3 text-sm font-bold text-gray-900">
                    What we built:
                  </p>
                  <ul className="space-y-3">
                    {extService.featuredProject.whatWeBuilt.map((item: string) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="mt-4 text-center">
              <Link
                href="/projects"
                className="text-sm font-medium text-primary hover:underline"
              >
                See more products we&apos;ve built →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── OUTCOMES + IDEAL FOR ── */}
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

      {/* ── TIMELINE ── */}
      {"timeline" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <div className="rounded-md border border-gray-300 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                How long does it take to build an MVP?
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {extService.timeline.intro}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {extService.timeline.factors.map((factor: string) => (
                  <div
                    key={factor}
                    className="flex items-start gap-2 rounded-md border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700"
                  >
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {factor}
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-md border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-gray-700">
                {extService.timeline.note}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── COST FACTORS ── */}
      {"costFactors" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <div className="rounded-md border border-gray-300 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                What affects MVP development cost?
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {extService.costFactors.intro}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {extService.costFactors.factors.map((factor: string) => (
                  <div
                    key={factor}
                    className="flex items-start gap-2 rounded-md border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {factor}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-3d inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white"
                >
                  Get an MVP Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── COMPARISON TABLE ── */}
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

      {/* ── INDUSTRIES SERVED ── */}
      {"industriesServed" in service && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-6 text-center">
              <h2 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                Industries We&apos;ve Worked In
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Practical product experience across different sectors.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {extService.industriesServed.map((industry: string) => (
                <span
                  key={industry}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQS ── */}
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

      {/* ── RELATED SERVICES ── */}
      {"relatedServiceSlugs" in service && service.relatedServiceSlugs && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-8 text-center">
              <h2 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
                Related <span className="text-primary">Services</span>
              </h2>
              <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
                Explore complementary engineering capabilities to scale your product ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {service.relatedServiceSlugs
                .map((slug: string) =>
                  detailedServices.find((s) => s.slug === slug)
                )
                .filter(Boolean)
                .map((relatedService) => {
                  if (!relatedService) return null;
                  return (
                    <motion.div
                      key={relatedService.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group rounded-md border border-gray-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 flex flex-col justify-between"
                    >
                      <div>
                        {"tagline" in relatedService && (
                          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                            {relatedService.tagline}
                          </p>
                        )}
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {relatedService.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6">
                          {(relatedService as any).subheadline ||
                            (relatedService as any).metaDescription ||
                            ""}
                        </p>
                      </div>
                      <div>
                        <Link
                          href={`/services/${relatedService.slug}`}
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
                        >
                          Explore {relatedService.title}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
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
            <Link
              href="/contact"
              className="btn-3d mt-7 inline-block rounded-md bg-primary px-7 py-3 text-sm font-bold text-white"
            >
              {getCtaButton(service)}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsView;
