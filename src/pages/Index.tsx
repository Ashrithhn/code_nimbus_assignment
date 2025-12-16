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
import { FloatingActionPanel } from "@/components/FloatingActionPanel";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SimpleCleanSolutions } from "@/components/SimpleCleanSolutions";
import { ParallaxSection } from "@/components/ParallaxSection";
import { LatestTweets } from "@/components/LatestTweets";
import parallax1 from "@/assets/h1-parallax-1.jpg";
import parallax2 from "@/assets/h1-parallax-2.jpg";
import parallax3 from "@/assets/h1-parallax-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingActionPanel />
      <ScrollToTop />
      <main>
        <HeroSlider />
        <Features />
        
        {/* Parallax 1 */}
        <ParallaxSection image={parallax1} height={450} speed={0.25} />
        
        <BlogCarousel />
        <Testimonials />
        <Skills />
        <Portfolio />
        <Stats />
        <Team />
        
        {/* Parallax 2 */}
        <ParallaxSection image={parallax2} height={420} speed={0.3} />
        
        <Products />
        <LatestTweets />
        <Clients />
        <SimpleCleanSolutions />
        
        {/* Parallax 3 */}
        <ParallaxSection image={parallax3} height={380} speed={0.2} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
