"use client";
import { motion } from "framer-motion";

const SecondFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.1 }}
      className="text-center mt-12 py-12 bg-white rounded-2xl mb-4 mx-4 md:container md:mx-auto border border-gray-300"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl font-bold mb-4 text-gray-800"
        >
          Ready to Grow Online?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-lg text-gray-600 mb-8"
        >
          Launch your startup with a professional website that converts
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open(
              "https://wa.me/918696136907",
              "_blank",
              "width=800,height=600"
            )
          }
          className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/80 transition-colors"
        >
          Start Your Project
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SecondFooter;
