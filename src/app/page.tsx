import ComparisonSection from "@/components/Home/ComparisonSection";
import ContactSection from "@/components/Home/ContactSection";
import FAQSection from "@/components/Home/FaqsSection";
import HeroPage from "@/components/Home/HeroPage";
import ProjectShowcase from "@/components/Home/ProjectShowcase";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import ProcessTimeline from "@/components/ui/ProcessTimeline";

export default function Home() {
  return (
    <>
      <HeroPage />
      <ProjectShowcase />
      {/* <Partners /> */}
      {/* <Achievement /> */}
      <Services />
      <ProcessTimeline />
      {/* <ProjectsSection /> */}
      <ComparisonSection />
      <Testimonials />
      <ContactSection />
      <FAQSection />
    </>
  );
}
