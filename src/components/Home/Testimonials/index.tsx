"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: React.ReactNode;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adam",
    role: "Travel Agency Owner",
    company: "Inspired Event And Tours",
    message: (
      <>
        Frontail helped us launch a clean booking platform before peak season.
        The interface is simple, fast, and our customers love using it.
      </>
    ),
    image: "/partners/travellogo.png",
  },
  {
    id: 2,
    name: "Kiragame Store",
    role: "Owner",
    company: "Kiragame Store",
    message: (
      <>
        Our gaming top-up platform has been stable during major releases.
        Frontail built it with the speed and reliability we needed.
      </>
    ),
    image: "/partners/kirastorelogo.png",
  },
  {
    id: 3,
    name: "Getotopup",
    role: "Owner",
    company: "Getotopup",
    message: (
      <>
        They understood the business, not just the website. The system runs
        smoothly, and their support is quick whenever we need help.
      </>
    ),
    image: "/partners/getologo.png",
  },
  {
    id: 4,
    name: "UI4Ward",
    role: "UI/UX Designer",
    company: "Fitness Club",
    message: (
      <>
        Frontail took our rough flows and turned them into a polished, usable
        product experience. Their attention to detail made the interface better.
      </>
    ),
    image: "/avatar.png",
  },
  {
    id: 5,
    name: "HT Liana",
    role: "Owner",
    company: "Zoland Store",
    message: (
      <>
        Frontail improved our checkout flow and made the store feel much more
        professional. The final product is fast, polished, and easy to manage.
      </>
    ),
    image: "/partners/zolandlogo.png",
  },
  {
    id: 6,
    name: "CDR912 Team",
    role: "Product Team",
    company: "CDR912",
    message: (
      <>
        Frontail helped us build a structured platform with agent workflows and
        a smooth user experience. The system feels fast and reliable.
      </>
    ),
    image: "/avatar.png",
  },
  {
    id: 7,
    name: "Master Topik Team",
    role: "Education Platform",
    company: "Master Topik",
    message: (
      <>
        The app experience became cleaner and easier for learners. Frontail
        understood our course, quiz, and vocabulary flows well.
      </>
    ),
    image: "/avatar.png",
  },
  {
    id: 8,
    name: "Vriya PMS Team",
    role: "SaaS Product",
    company: "Vriya PMS",
    message: (
      <>
        Frontail delivered a clear SaaS experience across accounting, apartment
        management, and HR workflows without making the product feel complex.
      </>
    ),
    image: "/avatar.png",
  },
];

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`relative pt-9 transition-transform duration-300 hover:rotate-0 ${
        rotations[index % rotations.length]
      }`}
    >
      <div className="absolute left-1/2 top-0 z-10 h-16 w-16 -translate-x-1/2 overflow-hidden rounded-full border-4 border-[#f7f3eb] bg-white shadow-sm">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex min-h-[260px] flex-col justify-between rounded-md border border-gray-200 bg-white px-5 pb-6 pt-16 shadow-sm">
        <p className="text-sm leading-relaxed text-gray-700">
          {testimonial.message}
        </p>

        <div className="mt-8">
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
          <p className="mt-1 text-xs font-semibold text-primary">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
      setCurrentSlide(0);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const slides = useMemo(() => {
    const result: Testimonial[][] = [];

    for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
      result.push(testimonials.slice(i, i + itemsPerSlide));
    }

    return result;
  }, [itemsPerSlide]);

  return (
    <section className="relative w-full px-4 py-12 overflow-hidden">
      <div className="max-w-screen-lg mx-auto">
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
              Testimonials
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
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="max-w-screen-lg mx-auto overflow-hidden px-2 pb-3">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {slides[currentSlide]?.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
              aria-label={`Show testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
