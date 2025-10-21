"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Sparkles } from "lucide-react";

const ComparisonSection = () => {
  const comparisonPoints = [
    {
      feature: "Design Process",
      us: "Collaborative design with client involvement at every stage",
      others: "Template-based designs with minimal customization",
    },
    {
      feature: "Development Timeline",
      us: "Transparent milestones with regular updates",
      others: "Vague timelines with limited progress visibility",
    },
    {
      feature: "Technology Stack",
      us: "Modern, future-proof technologies tailored to your needs",
      others: "One-size-fits-all approach with outdated tech",
    },
    {
      feature: "Post-Launch Support",
      us: "Dedicated support team with 24/7 availability",
      others: "Limited support with additional costs",
    },
  ];

  return (
    <section className="py-12 text-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative mb-2"
          >
            <Sparkles
              className="text-gray-600 absolute -top-6 -left-6"
              size={24}
            />
            <span className="text-sm uppercase tracking-widest text-gray-800 font-mono">
              Why Choose Us
            </span>
            <Sparkles
              className="text-gray-600 absolute -top-6 -right-6"
              size={24}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-800"
          >
            Frontail vs. Other Agencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We don&apos;t just build websites—we craft digital experiences that
            transform businesses.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontail Side */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-primary/10 rounded-xl">
                  <CheckCircle className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Frontail
                  </h3>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {comparisonPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle
                      className="text-green-500 mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {point.feature}
                      </h4>
                      <p className="text-gray-600">{point.us}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Agencies Side */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8 border border-gray-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-gray-200 rounded-xl">
                  <XCircle className="text-gray-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Other Agencies
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {comparisonPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <XCircle
                      className="text-red-500 mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {point.feature}
                      </h4>
                      <p className="text-gray-600">{point.others}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;