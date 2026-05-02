import AboutService from "./components/aboutService";
import InteriorSection from "./components/belowslider";
import FloatingBallMenu from "./components/Navbar";
import ServicesSection from "./components/serviceSection";
import HeroSlider from "./components/slider";
import WorkSection from "./components/workSection";

export default function Page() {

  return (
    <>
    <FloatingBallMenu/>
    <HeroSlider/>
    <InteriorSection/>
    <ServicesSection />
    <AboutService/>
    <WorkSection/>
    </>
  ) 
}