import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import FormulaPreview from "../components/landing/FormulaPreview";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FormulaPreview />
      </main>

      <Footer />
    </div>
  );
}
