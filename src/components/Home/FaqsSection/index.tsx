"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes your agency different from others?",
      answer:
        "We combine strategic thinking with technical excellence and creative innovation. Unlike traditional agencies that focus on either design or development, we offer a holistic approach with dedicated experts in both fields working collaboratively.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A standard website redesign typically takes 3 days to 4 weeks, while more complex platforms might require 4-8 weeks. During our initial consultation, we'll provide a detailed timeline specific to your project needs.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide end-to-end digital solutions including UI/UX design, web development, mobile app development, e-commerce solutions, digital strategy, brand identity design, and ongoing maintenance and support.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally. These include technical support, content updates, security monitoring, performance optimization, and strategic consultations.",
    },
    {
      question: "Do you work with clients internationally?",
      answer:
        "Absolutely! We have clients across 4+ countries and have built our processes to accommodate different time zones and cultural considerations. Our team is experienced in international collaboration.",
    },
    {
      question: "How do you ensure website security?",
      answer:
        "Security is built into every aspect of our development process. We implement industry best practices including secure coding standards, regular security audits, SSL implementation, data encryption, and protection against common vulnerabilities.",
    },
  ];

  return (
    <section id="faqs" className="w-full py-12 overflow-hidden">
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
              FAQs
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
            className="text-3xl md:text-6xl font-bold mb-4 text-gray-800"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
          >
            Everything you need to know about working with our agency.
            Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-300 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-6 text-left"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <h3 className="text-lg text-gray-800 pr-8 font-medium">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ml-2 ${
                      openIndex === index ? "text-primary" : "text-gray-600"
                    }`}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={() => router.push("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors border border-gray-300"
            >
              Still have questions? Contact us
              <ArrowRight className="ml-2" size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;