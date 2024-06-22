import AiSection from "@/components/AiSection";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestSection from "@/components/LatestSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <AiSection />
      <LatestSection />
      <Footer />
    </main>
  );
}
