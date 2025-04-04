import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
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
      <ContactMe />
      <Footer />
    </>
  );
}
