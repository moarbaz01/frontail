"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotLightCard";
import { services } from "@/data";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  showInfo?: boolean;
}

const ContactForm = ({ showInfo = true }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: FormData) => {
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset(); // Clear the form after successful submission
        setSuccessMessage(
          "Thank you for contacting us! We'll get back to you soon."
        );
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "There was an error submitting your form. Please try again."
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.9 }}
      viewport={{ once: true }}
    >
      <div className={`grid grid-cols-1 gap-8 ${showInfo ? "lg:grid-cols-3" : ""}`}>
        {/* Contact Form */}
        <div className={showInfo ? "lg:col-span-2" : ""}>
          <SpotlightCard className="backdrop-blur-lg p-8 border-gray-300 border bg-white rounded-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form and we&apos;ll reply soon.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className={`w-full px-4 py-2 rounded bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className={`w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[+]?[0-9\s\-()]+$/,
                        message: "Invalid phone number format",
                      },
                    })}
                    placeholder="Phone/Whatsapp/Telegram"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="service">
                  Service Required
                </label>
                <select
                  className={`w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.service ? "border-red-500" : ""
                  }`}
                  id="service"
                  {...register("service", {
                    required: "Please select a service",
                  })}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className={`w-full resize-none px-4 py-2 bg-gray-50 border border-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  placeholder="Your Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`btn-3d text-white bg-primary px-6 py-3 rounded-md hover:bg-primary-dark ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {successMessage && (
              <p className="mt-4 text-primary text-center">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
            )}
          </SpotlightCard>
        </div>

        {/* Contact Information */}
        {showInfo && (
        <div className="lg:col-span-1">
          <SpotlightCard className="backdrop-blur-lg p-8 border-gray-300 border bg-white rounded-md h-fit">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 8824097435</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">contact@frontail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    Working remotely worldwide
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
