"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import GradientButton from "../GradientButton";
import Image from "next/image";

// Navigation items
const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

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
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Track scroll position for scroll-based animations
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down past 50px, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (headerRef.current && !headerRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, {
      passive: true,
    });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        ref={headerRef}
        className="fixed md:top-4 md:px-0 px-2 top-2 left-0 w-full z-50"
        initial={{ opacity: 0, y: -24 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -96,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        transition={{
          duration: 0.22,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="flex items-center  px-3 md:px-4 max-w-screen-xl mx-auto rounded-md justify-between bg-white/95 backdrop-blur-md border border-gray-200 shadow-sm"
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
            className="cursor-pointer flex gap-2 items-center"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Image
              src={"/logo.svg"}
              height={200}
              width={1000}
              className="w-auto h-14 md:h-16"
              alt="Frontail Technology"
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
              className="md:hidden cursor-pointer relative z-20 flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-gray-800" />
              ) : (
                <Menu size={20} className="text-gray-800" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full right-2 mt-2 w-[220px] overflow-hidden rounded-md border border-gray-300 bg-white/95 shadow-xl shadow-black/10 backdrop-blur-md md:hidden z-40"
            >
              <div className="p-2">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        router.push(item.path);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                        pathname === item.path
                          ? "bg-primary/10 text-primary"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <span>{item.label}</span>
                      {pathname === item.path && (
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      )}
                    </motion.button>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <button
                    onClick={() => {
                      router.push("/contact");
                      setMobileMenuOpen(false);
                    }}
                    className="btn-3d flex w-full items-center justify-center gap-2 bg-primary text-white px-3 py-2.5 rounded-md text-sm font-bold"
                  >
                    Let&apos;s Start
                    <ArrowRight className="h-4 w-4" />
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
