import ComparisonSection from "@/components/Home/ComparisonSection";
import ContactSection from "@/components/Home/ContactSection";
import FAQSection from "@/components/Home/FaqsSection";
import HeroPage from "@/components/Home/HeroPage";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import ProcessTimeline from "@/components/Home/ProcessTimeline";
import ProjectsSection from "@/components/Home/RecentWork";

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
