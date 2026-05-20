import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Metro from "../components/Metro";
import Footer from "../components/Footer";

export const metadata = { title: "Experience — Nick Jain" };

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Experience />
        <Metro />
      </main>
      <Footer />
    </>
  );
}
