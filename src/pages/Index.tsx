
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
