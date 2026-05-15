"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const jobs = [
  {
    company:   "Metro Associates",
    role:      "Recruiter",
    type:      "Full-time",
    period:    "Jan 2022 – Present",
    duration:  "4 yrs 5 mos",
    current:   true,
    bullets: [
      "Recruited & placed professionals across Healthcare, hard/soft/middleware Engineering (Energy/Power/Motor Controls, Lab/Field/Scientific, Electronic Test & Measurement), Research Scientists, and Security Engineering.",
      "Fostered strong team culture through empathy, trust-building, and collaborative engagement.",
    ],
    skills: ["RPO", "Global Talent Acquisition", "Healthcare", "Engineering"],
  },
  {
    company:   "SNV Elite Solutions (OPC) Pvt. Ltd.",
    role:      "Recruitment Specialist",
    type:      "Full-time",
    period:    "Jun 2017 – 2022",
    duration:  "4 yrs 8 mos",
    current:   false,
    bullets: [
      "Recruited full-time positions for U.S. clients using targeted, industry-specific sourcing techniques.",
      "Utilized job boards, web searches, referrals, social media, and Boolean search to identify top-tier candidates.",
      "Screened and qualified candidates for alignment with job requirements before advancing to Hiring Manager reviews.",
      "Executed bulk email outreach campaigns to engage passive candidates about new opportunities.",
      "Conducted in-depth candidate discussions focused on skills assessment, role alignment, and motivations.",
      "Consistently achieved daily targets contributing to successful monthly recruitment closures.",
    ],
    skills: ["Recruiting", "Boolean Search", "Candidate Screening"],
  },
];

export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-24 lg:py-32" style={{ background: "var(--color-dark)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
            style={{ color: "var(--color-yellow)" }}
          >
            <span className="w-6 h-0.5 bg-current" /> Work History
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontFamily: "var(--font-heading)" }}
          >
            Where I&apos;ve
            <br />
            <span style={{ color: "var(--color-yellow)" }}>Worked.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="md:pl-20 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{
                    borderColor: job.current ? "var(--color-yellow)" : "rgba(255,255,255,0.2)",
                    background:  job.current ? "var(--color-yellow)" : "var(--color-dark)",
                  }}
                />

                <div
                  className="rounded-3xl p-7 lg:p-8 border border-white/8 transition-all duration-300 hover:border-white/15"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="text-xl font-black text-white"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {job.role}
                        </h3>
                        {job.current && (
                          <span
                            className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                            style={{ background: "rgba(245,197,24,0.15)", color: "var(--color-yellow)" }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold mb-2" style={{ color: "var(--color-yellow)" }}>
                        {job.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        <span className="flex items-center gap-1"><Briefcase size={11} />{job.type}</span>
                        <span className="flex items-center gap-1"><Calendar size={11} />{job.period} · {job.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {job.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.15 + bi * 0.04 }}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-yellow)" }} />
                        {b}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full text-xs font-medium border border-white/10"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
