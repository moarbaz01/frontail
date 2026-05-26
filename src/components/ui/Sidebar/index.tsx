"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import MagneticButton from "../MagicButton";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "Our Work", path: "/work" },
  { label: "Contact", path: "/contact" },
  { label: "Services", path: "/services" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          {/* <motion.div
            className="fixed top-0 left-0 w-full flex items-center justify-center  z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          /> */}

          {/* Sidebar */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full sm:w-80 z-50 bg-white overflow-y-auto border-l border-gray-300"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Menu Content */}
            <div className="h-full flex flex-col px-6 sm:px-8">
              {/* Close Button */}
              <div className="flex justify-end pt-4 pb-4">
                <MagneticButton
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 hover:bg-rose-500/20 transition-colors"
                >
                  <X size={24} />
                </MagneticButton>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Menu
                </h2>
                <div className="h-1 w-12 bg-primary rounded-full" />
              </motion.div>

              <ul className="space-y-6">
                {navItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={() => handleNavigation(item.path)}
                    className="relative cursor-pointer"
                  >
                    <div
                      className={`flex items-center text-xl sm:text-2xl font-medium transition-colors hover:text-primary ${
                        pathname === item.path ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {item.label}
                      {pathname === item.path && (
                        <ArrowRight size={20} className="ml-3 text-primary" />
                      )}
                    </div>
                    <div className="h-[1px] bg-gray-200 mt-2" />
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="btn-3d bg-primary text-white font-medium py-3 px-6 sm:px-8 rounded-md flex items-center gap-2 hover:bg-primary/80 w-full sm:w-auto justify-center"
                >
                  Let&apos;s Talk
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
