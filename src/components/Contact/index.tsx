"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
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
    value: "Jaipur, Rajasthan, India",
    href: "https://maps.google.com/?q=Jaipur,Rajasthan,India",
    icon: MapPin,
  },
];

const steps = [
  "Share your idea",
  "Get a free estimate",
  "Start the build",
];

const Contact = () => {
  return (
    <section className="px-4 pt-28 pb-16 bg-grid-black/5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="font-anton text-4xl md:text-5xl font-extrabold text-gray-900 tracking-normal"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Have an idea or project in mind? Send it over.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                Let&apos;s build
                <br />
                something amazing.
              </h2>
              <p className="text-lg text-gray-600">
                Book a free consultation and we&apos;ll get back to you soon.
              </p>
            </div>

            <div className="space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white font-bold text-gray-900 shadow-sm">
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="bg-white border border-gray-300 rounded-md p-6 md:p-8 shadow-sm"
          >
            <h3 className="font-anton text-3xl font-extrabold text-gray-900 mb-6">
              Get In Touch
            </h3>
            <div className="border-t border-dashed border-gray-300 pt-6 space-y-6">
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

export default Contact;
