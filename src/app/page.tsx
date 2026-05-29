import type { Metadata } from "next";
import ComparisonSection from "@/components/Home/ComparisonSection";
import ContactSection from "@/components/Home/ContactSection";
import FAQSection from "@/components/Home/FaqsSection";
import HeroPage from "@/components/Home/HeroPage";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import ProcessTimeline from "@/components/Home/ProcessTimeline";
import ProjectsSection from "@/components/Home/RecentWork";

export const metadata: Metadata = {
  title: "MVP, SaaS, AI & Mobile App Development Agency",
  description:
    "Frontail Technology helps founders launch MVPs, SaaS platforms, AI tools, mobile apps, Web3 products, and custom business software.",
  alternates: {
    canonical: "https://frontail.com",
  },
  openGraph: {
    title: "MVP, SaaS, AI & Mobile App Development Agency",
    description:
      "Launch production-ready digital products with Frontail Technology.",
    url: "https://frontail.com",
  },
};

export default function Home() {
  return (
    <main className="md:space-y-16 lg:space-y-20">
      <HeroPage />
      {/* <ProjectShowcase /> */}
      {/* <Partners /> */}
      <Services />
      <ProcessTimeline />
      <ProjectsSection />
      {/* <BigText /> */}
      <ComparisonSection />
      <Testimonials />
      <ContactSection />
      <FAQSection />
    </main>
  );
}
