"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ caseStudy }) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pb-16 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Title & Badge */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white/90 text-primary border border-primary/20 shadow-2xs">
              {caseStudy.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-white/70 text-gray-700 border border-gray-300 shadow-2xs">
              {caseStudy.industry}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-normal mb-6"
          >
            {caseStudy.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-8"
          >
            {caseStudy.subtitle}
          </motion.p>

          {caseStudy.externalUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-8"
            >
              <a
                href={caseStudy.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-primary transition-colors bg-white/90 px-4 py-2.5 rounded-md border border-gray-300 shadow-2xs"
              >
                <span>Visit Live Product</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          )}
        </div>

        {/* Hero Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mt-4 overflow-hidden rounded-xl border border-gray-300 bg-white/90 backdrop-blur-xs p-4 md:p-8 shadow-md"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: caseStudy.themeColor }}
          />
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-w-5xl mx-auto flex items-center justify-center">
            <Image
              src={caseStudy.heroImage}
              alt={`${caseStudy.title} product interface and technical architecture showcase`}
              fill
              priority
              unoptimized
              className="object-contain drop-shadow-2xl"
              sizes="(min-width: 1280px) 1152px, 100vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
