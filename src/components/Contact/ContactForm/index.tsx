"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotLightCard";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
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
      <SpotlightCard className=" backdrop-blur-lg p-8 border-gray-300 border bg-white rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">Contact Form</h2>
        <p className="text-gray-600 text-center mb-4">
          Please fill out the form below and we will get back to you as soon as
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
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

          <div className="mb-4">
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
            className={`text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-colors ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {successMessage && (
          <p className="mt-4 text-green-600 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
        )}
      </SpotlightCard>
    </motion.div>
  );
};

export default ContactForm;
