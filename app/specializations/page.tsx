import Navbar from "../components/Navbar";
import Specializations from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export const metadata = { title: "Specializations — Nick Jain" };

export default function SpecializationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Specializations />
        <Education />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
