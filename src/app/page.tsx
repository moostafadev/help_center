import AiSection from "@/components/AiSection";
import CategoriesSection from "@/components/CategoriesSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <AiSection />
    </main>
  );
}
