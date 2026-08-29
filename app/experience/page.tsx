import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Metro from "../components/Metro";
import Footer from "../components/Footer";

export const metadata = {
  title: "Experience — Nick Jain",
  description: "8+ years of recruiting experience — Nick Jain's background placing talent at Metro Associates across Engineering, Healthcare, AI/IoT, and Sales.",
  alternates: { canonical: "/experience" },
};

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
