import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ObjectivesSection } from "@/components/sections/objectives";
import { TimelineSection } from "@/components/sections/timeline";
import { SurveySection } from "@/components/sections/survey";
import { FieldVisitSection } from "@/components/sections/field-visit";
import { SoilHealthSection } from "@/components/sections/soil-health";
import { ProblemsSection } from "@/components/sections/problems";
import { ResearchSection } from "@/components/sections/research";
import { AwarenessSection } from "@/components/sections/awareness";
import { RecommendationsSection } from "@/components/sections/recommendations";
import { GallerySection } from "@/components/sections/gallery";
import { StatisticsSection } from "@/components/sections/statistics";
import { ConclusionSection } from "@/components/sections/conclusion";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <TimelineSection />
      <SurveySection />
      <FieldVisitSection />
      <SoilHealthSection />
      <ProblemsSection />
      <ResearchSection />
      <AwarenessSection />
      <RecommendationsSection />
      <GallerySection />
      <StatisticsSection />
      <ConclusionSection />
    </>
  );
}
