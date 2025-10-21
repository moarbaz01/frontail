"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/Contact/ContactForm";

const ContactSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ready to start your project? Contact us today!
          </motion.p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;