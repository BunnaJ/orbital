import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title:
    "Orbital Resources Limited — Engineering Excellence for Africa's Energy Future",
  description:
    "ORL delivers world-class consultancy, engineering, and marine services to the oil and gas industry across Nigeria and the West African sub-region.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <IndustriesSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
