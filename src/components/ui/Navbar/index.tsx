"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import GradientButton from "../GradientButton";
import Image from "next/image";

// Navigation items
const navItems = [
  { label: "Home", path: "/" },
  // { label: "Our Work", path: "/work" },
  { label: "Contact", path: "/contact" },
  { label: "Services", path: "/services" },
];

// Animation variants
const navbarVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    rotate: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  // Track scroll position for scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed md:top-4 md:px-0 px-2  top-2 left-0 w-full  z-50"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        // style={{
        //   backdropFilter: `blur(${Math.min(scrollY / 100, 10)}px)`,
        // }}
      >
        <motion.div
          className="flex items-center py-2 px-4 max-w-screen-lg mx-auto rounded-md justify-between bg-white shadow-sm "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <motion.div
            onClick={() => router.push("/")}
            className="cursor-pointer"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Image
              src={"/logo.png"}
              height={200}
              unoptimized
              width={1000}
              className="w-full h-10"
              alt="Frontail Logo"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul className="md:flex items-center gap-6 pl-16 hidden">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  onClick={() => router.push(item.path)}
                  className="cursor-pointer relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div className="px-2 py-1 rounded-md flex items-center gap-1 relative z-10">
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.div>

                  {/* Animated background for active states */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-md z-0"
                        layoutId="activeNavBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Underline effect on hover/active */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full origin-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{
                      scaleX: 1,
                      height: "4px",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                  />
                </motion.li>
              );
            })}
          </motion.ul>

          <div className="flex items-center gap-4">
            {/* CTA Button (Desktop only) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 1.1,
              }}
              className="md:flex hidden  items-center gap-4 w-fit  "
            >
              <GradientButton
                onClick={() => router.push("/contact")}
                className="flex items-center h-[34px] text-xs justify-center gap-1.5 relative group px-3 py-2 md:text-xs"
              >
                Let&apos;s Start
                <ArrowRight className="h-4 w-4 group-hover:ml-1 transition-all" />
              </GradientButton>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden cursor-pointer relative z-20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={32} className="text-gray-800" />
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-4 right-4 mt-2 bg-white  border border-gray-300 md:hidden z-40"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      router.push(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-2 border-t border-gray-200">
                  <button
                    onClick={() => {
                      router.push("/contact");
                      setMobileMenuOpen(false);
                    }}
                    className="btn-3d w-full bg-primary text-white px-4 py-3 rounded-md font-medium"
                  >
                    Let&apos;s Start
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
