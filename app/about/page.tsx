import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata = {
  title: "About — Nick Jain",
  description:
    "Nick Jain is a Recruitment Specialist at Metro Associates with 8+ years placing top-tier professionals in Engineering, Healthcare, AI/IoT, and Sales for U.S. clients.",
  alternates: { canonical: "/about" },
};

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
