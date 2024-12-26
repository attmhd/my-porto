import Footer from "./footer";
import HeroSection from "./hero";
import Projects from "./projects";
import TechStack from "./techstack";

export default function Home() {
  return (
    <>
      <div className="quicksand pt-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
