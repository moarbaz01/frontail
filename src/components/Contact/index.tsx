"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

const contactMethods = [
  {
    label: "WhatsApp",
    value: "+91 8741035190",
    href: "https://wa.me/918741035190?text=Hi%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss.%20Are%20you%20available%3F",
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
    href: "mailto:frontailtechnology@gmail.com?subject=Project%20Inquiry&body=Hi%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss.%20Here%27s%20a%20brief%20overview%3A%0A%0A",
    icon: Mail,
  },
  {
    label: "Telegram",
    value: "@arbazmr123",
    href: "https://t.me/arbazmr123",
    icon: Send,
  },
  {
    label: "Address",
    value: "Working remotely worldwide",
    href: "",
    icon: MapPin,
  },
];

const Contact = () => {
  return (
    <section className="px-4 pt-28 pb-16 bg-grid-black/5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="space-y-8"
          >
            {/* <div>
              <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                Let&apos;s build
                <br />
                something amazing.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Book a free consultation and we&apos;ll get back to you soon.
              </p>
            </div> */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
              }}
              className="flex justify-start pt-4"
            >
              <Image
                src="/mockup/chat.svg"
                alt="Chat Mockup"
                width={450}
                unoptimized
                height={700}
                className="w-full h-auto max-w-[600px]"
                priority
              />
            </motion.div>
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
              {contactMethods.map(({ label, value, href, icon: Icon }) => {
                const content = (
                  <>
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
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-md transition-colors hover:text-primary"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="group flex items-center gap-4 rounded-md"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
