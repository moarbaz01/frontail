import BigText from "@/components/Home/BigText";
import ComparisonSection from "@/components/Home/ComparisonSection";
import ContactSection from "@/components/Home/ContactSection";
import FAQSection from "@/components/Home/FaqsSection";
import HeroPage from "@/components/Home/HeroPage";
import ProjectShowcase from "@/components/Home/ProjectShowcase";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import ProcessTimeline from "@/components/Home/ProcessTimeline";
import AchievementsSection from "@/components/Home/Achievement";

export default function Home() {
  return (
    <>
      <HeroPage />
      <ProjectShowcase />
      {/* <Partners /> */}
      <Services />
      <ProcessTimeline />
      {/* <ProjectsSection /> */}
      {/* <BigText /> */}
      <ComparisonSection />
      <Testimonials />
      <ContactSection />
      <FAQSection />
    </>
  );
}
