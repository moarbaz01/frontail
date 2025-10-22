"use client";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { Mail, Phone, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SpotlightCard from "../ui/SpotLightCard";
import { IoLogoWhatsapp } from "react-icons/io";

interface ContactCartProps {
  icon: React.ReactNode;
  title: string;
  contactInfo: string;
  actionText: string;
  actionLink: string;
}

const contactMethods = [
  {
    id: 1,
    icon: <Mail className=" text-primary " />,
    title: "Email",
    contactInfo: "support@frontail.com",
    actionText: "Send Email",
    actionLink: "mailto:support@frontail.com",
  },
  {
    id: 2,
    icon: <Phone className=" text-primary" />,
    title: "Phone",
    contactInfo: "+918696136907",
    actionText: "Call Us",
    actionLink: "tel:+918696136907",
  },
  {
    id: 2,
    icon: <IoLogoWhatsapp className=" text-primary" />,
    title: "Whatsapp",
    contactInfo: "+918696136907",
    actionText: "Chat",
    actionLink: "https://wa.me/918696136907",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const Contact = () => {
  return (
    <section className="px-4 py-12 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 tracking-tight"
          >
            {/* Contact */}
            Let&apos;
            <span className="text-primary">s Talk</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto mb-6"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
          >
            We&apos;
            <span className="text-primary">d love</span> to hear from you!
            Whether you have a question, a project idea, or just want to say
            hello, feel free to reach out. We&apos;
            <span className="text-primary">re here</span> to assist you.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map(
            ({ id, icon, title, contactInfo, actionText, actionLink }) => (
              <ContactCard
                key={id}
                icon={icon}
                title={title}
                contactInfo={contactInfo}
                actionText={actionText}
                actionLink={actionLink}
              />
            )
          )}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

// Contact Card Component
const ContactCard: React.FC<ContactCartProps> = ({
  icon,
  title,
  contactInfo,
  actionText,
  actionLink,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.6 }}
    viewport={{ once: true }}
  >
    <SpotlightCard className="flex flex-col items-center p-6 bg-white backdrop-blur-sm border border-gray-300 rounded-lg">
      <div className="text-xl text-primary bg-primary/10 border p-2 rounded-full mb-2 border-primary/20 w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{contactInfo}</p>
      <a
        href={actionLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
      >
        {actionText}
      </a>
    </SpotlightCard>
  </motion.div>
);

export default Contact;
