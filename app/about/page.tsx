import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata = { title: "About — Nick Jain" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
