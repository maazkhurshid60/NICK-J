import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import Marquee         from "./components/Marquee";
import About           from "./components/About";
import Experience      from "./components/Experience";
import Metro           from "./components/Metro";
import Specializations from "./components/Projects";
import Education       from "./components/Education";
import Skills          from "./components/Skills";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Metro />
        <Specializations />
        <Education />
        <Marquee text="HEALTHCARE . ENGINEERING . AI & IOT . SAP . SECURITY . SALES . WEB DEV . AGRICULTURE ." />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
