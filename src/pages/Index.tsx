import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import CaseStudiesSection from "@/components/portfolio/CaseStudiesSection";
import OnTheSideSection from "@/components/portfolio/OnTheSideSection";
import BlogSection from "@/components/portfolio/BlogSection";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import { useScrollBackground } from "@/hooks/useScrollBackground";
import { useNavVisibility } from "@/hooks/useNavVisibility";

const Index = () => {
  useScrollBackground();
  const isNavVisible = useNavVisibility();

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <div
        className="transition-all duration-300 ease-out"
        style={{
          paddingLeft: isNavVisible ? "120px" : "0",
        }}
      >
        <AboutSection />
        <CaseStudiesSection />
        <OnTheSideSection />
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
