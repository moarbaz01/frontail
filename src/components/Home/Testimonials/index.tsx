"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adam",
    role: "Travel Agency Owner",
    company: "Inspired Event And Tours",
    message:
      "Frontail saved our business when no other agency could deliver on time. Their team worked miracles to launch our booking platform before peak season - the clean interface and reliable payments have our customers raving!",
    image: "/travellogo.png",
  },
  {
    id: 2,
    name: "Kiragamestore",
    role: "Owner",
    company: "Kiragame Store",
    message:
      "Hands down the best development team we've worked with. Frontail built our gaming top-up platform so well that we've had ZERO downtime during major game releases - something our competitors still struggle with!",
    image: "/kirastorelogo.png",
  },
  {
    id: 3,
    name: "Getotopup",
    role: "Owner",
    company: "Getotopup",
    message:
      "Frontail doesn't just build websites - they build business solutions. Our top-up system works flawlessly 24/7, and their support team responds faster than any other agency we've tried. Worth every penny!",
    image: "/getologo.png",
  },
  {
    id: 4,
    name: "Unknown",
    role: "UI/UX Designer",
    company: "Fitness Club",
    message:
      "I've worked with many agencies, but Frontail's attention to detail is unmatched. They took our rough sketches and turned them into a stunning, intuitive interface that our members love using daily.",
    image: "/avatar.png",
  },
  {
    id: 5,
    name: "HT Liana",
    role: "Owner",
    company: "Zoland Store",
    message:
      "Frontail transformed our gaming store into a conversion machine. Their checkout process is so smooth we've seen a 30% increase in completed purchases. Simply the best in the business!",
    image: "/zolandlogo.png",
  },
];

const groupTestimonials = (
  testimonials: Testimonial[],
  itemsPerSlide: number = 1 // Default to 1 item per slide
) => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    result.push(testimonials.slice(i, i + itemsPerSlide));
  }
  return result;
};

// Animation variants
const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};


const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    backgroundColor: "#18dc60",
    color: "#374151",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.9 },
};


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const groupedTestimonials = groupTestimonials(testimonials, itemsPerSlide);
  const totalSlides = groupedTestimonials.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    if (index === currentSlide) return;

    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // show 1 testimonial per slide on small screens
      } else {
        setItemsPerSlide(3); // show 3 on larger screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    resetAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, currentSlide]);

  return (
    <div className="relative w-full xl:container mx-auto px-4 py-12 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 * 0.1 }}
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
          transition={{ delay: 1 * 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold mb-4 text-gray-800 tracking-tight"
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ delay: 2 * 0.1 }}
          viewport={{ once: true }}
          className="h-1 bg-primary mx-auto mb-6"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 * 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
        >
          Discover what our clients have to say about their experiences with our
          products.{" "}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 4 * 0.1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden"
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.2,
            }}
            className="flex flex-col md:flex-row gap-6 md:px-20"
          >
            {groupedTestimonials[currentSlide]?.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}

        <motion.button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 p-3 rounded-full border border-gray-300 z-10 text-gray-800 hover:bg-primary"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 p-3 rounded-full border border-gray-300 z-10 text-gray-800 hover:bg-primary"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </motion.button>
      </motion.div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {groupedTestimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-primary" : "bg-gray-300"
            }`}
            initial={{ width: currentSlide === index ? 32 : 12 }}
            animate={{
              width: currentSlide === index ? 32 : 12,
              backgroundColor: currentSlide === index ? "#18dc60" : "#D1D5DB",
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: currentSlide === index ? "#18dc60" : "#9CA3AF",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <div className="flex-1 bg-white rounded-xl overflow-hidden border border-gray-300">
      <div className="p-8">
        <motion.div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.021A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-lg text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <p className="text-xs font-semibold text-primary">
              {testimonial.company}
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-8 h-8 text-gray-400 transform -translate-x-3 -translate-y-2"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative text-gray-600 mt-2 leading-relaxed">
            {testimonial.message}
          </p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <svg
                key={star}
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span
            className="text-xs text-gray-500 italic"
          >
            Verified Client
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
