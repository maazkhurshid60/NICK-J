"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const skills30 = [
  "RPO", "Global Talent Acquisition", "Boolean Search", "Headhunting",
  "Candidate Screening", "Candidate Evaluation", "ATS Management",
  "Bulk Email Outreach", "Recruitment Process Outsourcing", "Talent Sourcing",
  "Interviewing", "Human Resources (HR)", "Teamwork", "Customer Experience",
  "Analytical Skills", "Recruiting", "Communication", "Confidentiality",
  "Data Management", "Target Achievement", "Stakeholder Coordination",
];

export default function Education() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Education */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2"
              style={{ color: "var(--color-gray)" }}
            >
              <span className="w-6 h-0.5 bg-current" /> Education
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-3xl p-8 border overflow-hidden group transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}
            >
              {/* Yellow accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: "var(--color-yellow)" }}
              />

              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-dark)" }}
                >
                  <GraduationCap size={24} color="#fff" strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    className="text-xl font-black mb-1"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
                  >
                    Delhi University
                  </div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    Bachelor&apos;s Degree
                  </div>
                  <div className="text-sm mb-3" style={{ color: "var(--color-gray)" }}>
                    Human Resources Management and Services
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-gray)" }}
                  >
                    <BookOpen size={11} />
                    2014 – 2017
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div
                className="mt-6 pt-6 border-t grid grid-cols-2 gap-4"
                style={{ borderColor: "var(--color-border)" }}
              >
                {[
                  { icon: Award, label: "Focus",    value: "Human Resources" },
                  { icon: BookOpen, label: "Degree", value: "BA, HRM & Services" },
                  { icon: GraduationCap, label: "Institution", value: "Delhi University" },
                  { icon: Award, label: "Graduated", value: "2017" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label}>
                    <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--color-gray)" }}>{label}</div>
                    <div className="text-sm font-semibold" style={{ color: "var(--color-dark)" }}>{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — All 30 Skills */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
              style={{ color: "var(--color-gray)" }}
            >
              <span className="w-6 h-0.5 bg-current" /> Skills
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-black mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
            >
              Full Skill Set
            </motion.h3>

            <div className="flex flex-wrap gap-2">
              {skills30.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-dark)", background: "#fff" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background     = "var(--color-dark)";
                    (e.currentTarget as HTMLElement).style.color          = "#fff";
                    (e.currentTarget as HTMLElement).style.borderColor    = "var(--color-dark)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background     = "#fff";
                    (e.currentTarget as HTMLElement).style.color          = "var(--color-dark)";
                    (e.currentTarget as HTMLElement).style.borderColor    = "var(--color-border)";
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* LinkedIn followers note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center gap-3 p-4 rounded-2xl border"
              style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--color-dark)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: "var(--color-dark)", fontFamily: "var(--font-heading)" }}>
                  4,676 LinkedIn Followers
                </div>
                <div className="text-xs" style={{ color: "var(--color-gray)" }}>
                  Active network of professionals across the U.S. recruiting space
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
