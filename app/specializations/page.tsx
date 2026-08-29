import Navbar from "../components/Navbar";
import Specializations from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export const metadata = {
  title: "Specializations — Nick Jain",
  description:
    "Nick Jain recruits across DOT/Transportation, MEP Engineering, Healthcare, AI & IoT, Security Engineering, Software & Web, and Sales & Marketing.",
  keywords: [
    "DOT recruiter",
    "MEP recruiter",
    "healthcare recruiter",
    "AI IoT recruiter",
    "security cleared recruiter",
    "software recruiter",
    "sales recruiter",
  ],
  alternates: { canonical: "/specializations" },
};

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
