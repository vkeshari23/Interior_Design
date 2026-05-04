import AboutService from "./components/aboutService";
import InteriorSection from "./components/belowslider";
import Footer from "./components/footer";
import Projects from "./components/project";
import ServicesSection from "./components/serviceSection";
import HeroSlider from "./components/slider";
import Testimonials from "./components/testiminal";

export default function Page() {

  return (
    <>
    
    <HeroSlider/>
    <InteriorSection/>
    <ServicesSection />
    <AboutService/>
    <Projects/>
    <Testimonials/>
    
    <Footer/>
    </>
  ) 
}