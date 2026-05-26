"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { IoLogoWhatsapp } from "react-icons/io";

const contactMethods = [
  {
    label: "WhatsApp",
    value: "+91 8696136907",
    href: "https://wa.me/918696136907",
    icon: IoLogoWhatsapp,
  },
  {
    label: "Phone",
    value: "+91 8824097435",
    href: "tel:+918824097435",
    icon: Phone,
  },
  {
    label: "Email",
    value: "frontailtechnology@gmail.com",
    href: "mailto:frontailtechnology@gmail.com",
    icon: Mail,
  },
  {
    label: "Address",
    value: "Working remotely worldwide",
    href: "",
    icon: MapPin,
  },
];

const steps = [
  "Share your idea",
  "Get a free assessment",
  "Start with a clear plan",
];

const ContactSection = () => {
  const router = useRouter();

  return (
    <section className="py-14 px-4 bg-grid-black/5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative mb-2"
          >
            <Sparkles
              className="text-gray-600 absolute -top-6 -left-6"
              size={24}
            />
            <span className="text-sm uppercase tracking-widest text-gray-800 font-mono">
              Contact Us
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
            className="font-anton text-4xl md:text-5xl font-extrabold text-gray-900 tracking-normal"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Ready to build? Let&apos;s talk and plan your next launch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Let&apos;s build
              <br />
              something amazing.
            </h3>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
              Book a free consultation and tell us what you want to create.
            </p>

            <button
              onClick={() => router.push("/contact")}
              className="btn-3d bg-primary text-white px-7 py-4 rounded-md font-bold uppercase tracking-widest text-sm"
            >
              Book Free Consultation
            </button>

            <div className="mt-10 space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white font-bold text-gray-900 shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base md:text-lg text-gray-800">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="bg-white border border-gray-300 rounded-md p-6 md:p-10 shadow-sm"
          >
            <h3 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
              Get In Touch
            </h3>
            <div className="border-t border-dashed border-gray-300 pt-8 space-y-7">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center gap-4 rounded-md transition-colors hover:text-primary"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-50 text-gray-700 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-bold text-gray-900">
                      {label}
                    </span>
                    <span className="block text-gray-600 break-all">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
