"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const toolCategories = [
  {
    name: "ATS Platforms",
    items: ["Internal ATS", "ATS Management", "Applicant Tracking", "Candidate Database"],
  },
  {
    name: "Sourcing Tools",
    items: ["Boolean Search", "Job Boards", "Social Media Sourcing", "Referral Networks", "Web Search"],
  },
  {
    name: "Recruitment Skills",
    items: ["Boolean Search", "RPO", "Global Talent Acquisition", "Headhunting", "Candidate Screening"],
  },
  {
    name: "Industries",
    items: ["DOT", "MEP", "Healthcare", "Engineering", "Software/Web", "Sales & Marketing", "Agriculture"],
  },
  {
    name: "Soft Skills",
    items: ["Human Resources", "Teamwork", "Analytical Skills", "Customer Experience", "Empathy", "Collaboration"],
  },
];

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32" style={{ background: "var(--color-dark)" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
            style={{ color: "var(--color-yellow)" }}
          >
            <span className="w-6 h-0.5 bg-current" /> Tools & Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-heading)" }}
          >
            What I work{" "}
            <span
              className="px-4 py-1 rounded-xl"
              style={{ background: "var(--color-yellow)", color: "var(--color-dark)" }}
            >
              with.
            </span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {toolCategories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: ci * 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-8 items-start border-b pb-8 last:border-b-0 last:pb-0"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="sm:col-span-1">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {cat.name}
                </span>
              </div>
              <div className="sm:col-span-4 flex flex-wrap gap-2.5">
                {cat.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: ci * 0.1 + ii * 0.05 }}
                    className="px-4 py-2 rounded-xl text-sm font-semibold border cursor-default transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--color-yellow)";
                      (e.currentTarget as HTMLElement).style.color      = "var(--color-dark)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--color-yellow)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background  = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.color       = "rgba(255,255,255,0.7)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
