"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const pathname = usePathname();
  const locomotiveScrollRef = useRef<any>(null);

  useEffect(() => {
    let locomotiveScroll: any;

    const init = async () => {
      try {
        const LocomotiveScrollModule = await import("locomotive-scroll");
        const LocomotiveScroll = LocomotiveScrollModule.default;
        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            smoothWheel: true,
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          },
        });
        locomotiveScrollRef.current = locomotiveScroll;
      } catch (err) {
        console.error("LocomotiveScroll error:", err);
      }
    };

    init();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;