"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { faqSections } from "@/data";

const FAQSection = () => {
  const [openKey, setOpenKey] = useState("Projects-0");
  const router = useRouter();

  const toggleFAQ = (key: string) => {
    setOpenKey(openKey === key ? "" : key);
  };

  return (
    <section id="faqs" className="w-full overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-normal"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers before we start building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 max-w-screen-lg mx-auto">
          <div className="rounded-md border border-gray-300 bg-white p-6 h-fit">
            <h3 className="font-anton text-3xl font-bold text-gray-900 mb-4">
              Still curious?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Send us your idea and we&apos;ll point you in the right direction.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="btn-3d inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-5">
            {faqSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.08 }}
                viewport={{ once: true }}
                className="rounded-md border border-gray-300 bg-white p-4"
              >
                <h3 className="mb-3 px-2 text-sm font-bold uppercase tracking-widest text-primary">
                  {section.title}
                </h3>
                <div className="divide-y divide-gray-200">
                  {section.faqs.map((faq, faqIndex) => {
                    const key = `${section.title}-${faqIndex}`;
                    const isOpen = openKey === key;

                    return (
                      <div key={key}>
                        <button
                          onClick={() => toggleFAQ(key)}
                          className="flex w-full items-center justify-between gap-4 px-2 py-4 text-left"
                        >
                          <span className="text-sm font-semibold text-gray-900">
                            {faq.question}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border ${
                              isOpen
                                ? "border-primary/30 bg-primary/10 text-primary"
                                : "border-gray-300 text-gray-600"
                            }`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <p className="px-2 pb-4 text-sm leading-relaxed text-gray-600">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
