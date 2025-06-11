import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import DreamTrackerSection from "@/components/DreamTrackerSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <StatsSection />
      <DreamTrackerSection />
      <CTASection />
    </div>
  );
};

export default Index;
