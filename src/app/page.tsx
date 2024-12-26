import Footer from "./footer";
import HeroSection from "./hero";
import Projects from "./projects";
import TechStack from "./techstack";

export default function Home() {
  return (
    <>
    <div className="justify-center quicksand pt-14 mx-[30%]">
      
      <HeroSection />
      <TechStack  />
      <Projects />
      <Footer />

    </div></>
  )
}
