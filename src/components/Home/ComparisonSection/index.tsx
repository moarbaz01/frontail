"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const ComparisonSection = () => {
  const comparisonPoints = [
    {
      feature: "Product Approach",
      us: "We help shape features, flows, and priorities around your business goal.",
      others:
        "They mostly build what is requested without deeply questioning the product direction.",
    },
    {
      feature: "Build Roadmap",
      us: "You know what is being built, why it matters, and what stage your project is in.",
      others:
        "Progress often depends on vague milestones and unclear communication.",
    },
    {
      feature: "Technology Foundation",
      us: "Clean structure, reliable backend, and scalable architecture built for future growth.",
      others:
        "Projects may look good at launch but become hard to update, scale, or maintain later.",
    },
    {
      feature: "Post-Launch Improvement",
      us: "We help fix issues, improve flows, and refine the product based on real feedback.",
      others:
        "Support usually slows down after delivery or becomes an extra cost.",
    },
  ];

  return (
    <section className="overflow-hidden py-12 text-gray-800 md:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-normal"
          >
            Frontail vs. <span className="text-primary">Other Agencies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We build like product partners, not order-takers.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontail Side */}
            <motion.div
              className="bg-white rounded-md p-8 border border-gray-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-primary/10 rounded-md">
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
                      className="text-primary mr-3 mt-1 flex-shrink-0"
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
              className="bg-gray-50 rounded-md p-8 border border-gray-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-gray-200 rounded-md">
                  <XCircle className="text-gray-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Typical Agencies
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
