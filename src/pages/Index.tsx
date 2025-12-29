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
import { ScrollAnimated } from "@/components/ScrollAnimated";
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
        <ScrollAnimated animationType="fadeIn">
          <HeroSlider />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.1}>
          <Features />
        </ScrollAnimated>
        
        {/* Parallax 1 */}
        <ParallaxSection image={parallax1} height={400} speed={0.1}>
          <ScrollAnimated animationType="zoomIn" delay={0.2}>
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Experience the Magic</h2>
              <p className="text-lg">Beautiful moments captured forever</p>
            </div>
          </ScrollAnimated>
        </ParallaxSection>
        
        <ScrollAnimated animationType="slideInUp" delay={0.15}>
          <BlogCarousel />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.2}>
          <Testimonials />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.25}>
          <Skills />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.3}>
          <Portfolio />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.35}>
          <Stats />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.4}>
          <Team />
        </ScrollAnimated>
        
        {/* Parallax 2 */}
        <ParallaxSection image={parallax2} height={380} speed={0.12}>
          <ScrollAnimated animationType="zoomIn" delay={0.45}>
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-lg">Creative minds bringing your vision to life</p>
            </div>
          </ScrollAnimated>
        </ParallaxSection>
        
        <ScrollAnimated animationType="slideInUp" delay={0.5}>
          <Products />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.55}>
          <LatestTweets />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.6}>
          <Clients />
        </ScrollAnimated>
        
        <ScrollAnimated animationType="slideInUp" delay={0.65}>
          <SimpleCleanSolutions />
        </ScrollAnimated>
        
        {/* Separator with icon */}
        <div className="mkd-section-title-holder"></div>
        <div className="mkd-separator-with-icon-holder clearfix mkd-default-icon" style={{ marginTop: '7px', marginBottom: '18px' }}>
          <span className="mkd-separat-left"></span>
          <div className="mkd-default-icon-holder"></div>
          <span className="mkd-separator-right"></span>
        </div>
        
        {/* Parallax 1 (replaced Parallax 3) */}
        <ParallaxSection image={parallax1} height={350} speed={0.08}>
          <ScrollAnimated animationType="zoomIn" delay={0.7}>
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Let's Create Together</h2>
              <p className="text-lg">Your dream, our expertise</p>
            </div>
          </ScrollAnimated>
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
