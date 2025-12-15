import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { Features } from "@/components/Features";
import { BlogCarousel } from "@/components/BlogCarousel";
import { Testimonials } from "@/components/Testimonials";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Products } from "@/components/Products";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <Features />
        <BlogCarousel />
        <Testimonials />
        <Skills />
        <Portfolio />
        <Stats />
        <Team />
        <Products />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
