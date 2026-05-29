import type { Metadata } from "next";
import ServicesPageView from "@/components/Services/ServicesPageView";

export const metadata: Metadata = {
  title: "MVP, SaaS, AI, Web3 & Mobile App Development Services",
  description:
    "Explore Frontail Technology services: MVP development, SaaS development, mobile app development, Web3 development, AI development, and custom tools.",
  alternates: {
    canonical: "https://frontail.com/services",
  },
  openGraph: {
    title: "MVP, SaaS, AI, Web3 & Mobile App Development Services",
    description:
      "Startup-ready product development services for founders and businesses.",
    url: "https://frontail.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageView />;
}
