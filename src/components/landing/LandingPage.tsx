import Header from "./Header";
import FloatingDock from "./FloatingDock";
import Hero from "./Hero";
import MissionStats from "./MissionStats";
import HowItWorks from "./HowItWorks";
import FeaturesScroll from "./FeaturesScroll";
import Comparison from "./Comparison";
import BenefitsCloud from "./BenefitsCloud";
import CaseStudies from "./CaseStudies";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-[#1A91FF] selection:text-white">
      <Header />
      <main>
        <Hero />
        <MissionStats />
        <HowItWorks />
        <FeaturesScroll />
        <Comparison />
        <BenefitsCloud />
        <CaseStudies />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
}
