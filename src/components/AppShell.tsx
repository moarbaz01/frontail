"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SecondFooter from "@/components/ui/SecondFooter";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <main>
        <ScrollProgress />
        <Navbar />
        {children}
        <SecondFooter />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
};

export default AppShell;
