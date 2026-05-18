"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const expertise = [
  { label: "DOT Recruiting", pct: 90 },
  { label: "MEP Placement", pct: 88 },
  { label: "Engineering Talent Acquisition", pct: 92 },
  { label: "ATS Management", pct: 88 },
  { label: "Boolean & Advanced Sourcing", pct: 86 },
  { label: "Global Talent Acquisition", pct: 85 },
];

function Bar({ label, pct, index }: { label: string; pct: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium" style={{ color: "var(--color-dark)" }}>{label}</span>
        <span className="font-bold" style={{ color: "var(--color-yellow)" }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "rgba(0,0,0,0.08)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "var(--color-dark)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
              style={{ color: "var(--color-gray)" }}
            >
              <span className="w-6 h-0.5 bg-current" /> About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black leading-tight mb-6"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontFamily: "var(--font-heading)",
                color: "var(--color-dark)",
              }}
            >
              Connecting talent with{" "}
              <span className="relative inline-block">
                opportunity
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 -z-10 opacity-40"
                  style={{ background: "var(--color-yellow)" }}
                />
              </span>
              .
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-gray)" }}
            >
              I&apos;m a Recruitment Specialist with 8+ years of experience placing
              top-tier professionals in Engineering working for U.S. clients.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-gray)" }}
            >
              Currently recruiting at Metro Associates, I specialize in sourcing
              niche talent from engineers to global marketing managers — using
              advanced Boolean search strategies.
            </motion.p>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-4 p-5 rounded-2xl mb-8 border"
              style={{ background: "var(--color-white)", borderColor: "var(--color-border)" }}
            >
              {[
                { label: "Name", value: "Nick Jain." },
                { label: "Role", value: "Recruitment Specialist" },
                { label: "Company", value: "Metro Associates" },
                { label: "Location", value: "Connecticut, USA" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--color-gray)" }}>{label}</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--color-dark)" }}>{value}</div>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--color-dark)",
                color: "var(--color-white)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Get In Touch <ArrowUpRight size={14} />
            </motion.a>
          </div>

          {/* Right — expertise bars */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2"
              style={{ color: "var(--color-gray)" }}
            >
              <span className="w-6 h-0.5 bg-current" /> Core Expertise
            </motion.p>

            <div className="space-y-5 mb-10">
              {expertise.map((s, i) => <Bar key={s.label} {...s} index={i} />)}
            </div>

            {/* Top skills pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {[
                "Teamwork", "Human Resources", "Customer Experience",
                "Analytical Skills", "Recruiting", "RPO",
                "Global Talent Acquisition", "Boolean Search",
                "ATS Management", "Candidate Sourcing", "Headhunting", "Interviewing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-dark)",
                    background: "var(--color-white)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
