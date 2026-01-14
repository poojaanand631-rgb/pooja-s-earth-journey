import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import CaseStudiesSection from "@/components/portfolio/CaseStudiesSection";
import OnTheSideSection from "@/components/portfolio/OnTheSideSection";
import BlogSection from "@/components/portfolio/BlogSection";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <CaseStudiesSection />
      <OnTheSideSection />
      <BlogSection />
      <Footer />
    </main>
  );
};

export default Index;
