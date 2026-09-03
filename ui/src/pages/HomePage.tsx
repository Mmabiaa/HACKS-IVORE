import {
  HeroSection,
  FieldSupportSection,
  ServicesSection,
  PrinciplesSection,
  EquipmentSection,
  CaseStudySection,
  SafetySection,
} from "@/sections/home";
import { CtaBand } from "@/sections/shared";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FieldSupportSection />
      <ServicesSection />
      <PrinciplesSection />
      <EquipmentSection />
      <CaseStudySection />
      <SafetySection />
      <CtaBand />
    </>
  );
}
