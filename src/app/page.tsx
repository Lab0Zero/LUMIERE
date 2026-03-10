import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Journal from "@/components/sections/Journal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Clients />
      <Testimonials />
      <Journal />
      <Contact />
    </>
  );
}
