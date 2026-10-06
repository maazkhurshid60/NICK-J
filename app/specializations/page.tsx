import Navbar from "../components/Navbar";
import Specializations from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { CandidateTrust } from "../components/CandidateTrust";

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

        {/* The one page besides the homepage that search traffic lands on: its
            keywords are discipline searches, so a candidate can arrive here
            without ever passing the hero. Set in the component's own container
            rather than inside Specializations, which the homepage also renders
            and where it would be a duplicate. */}
        <section className="max-w-6xl mx-auto px-6 pb-6">
          <CandidateTrust size="section" />
        </section>

        <Education />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
