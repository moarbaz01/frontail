"use client";
import { cn } from "@/utils/cn";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";

type ScrollProgressProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    className?: string;
  };

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-[999] h-1 origin-left bg-gradient-to-r from-blue-500 via-primary to-blue-500 ",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
