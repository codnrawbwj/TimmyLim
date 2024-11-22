import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
