"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Users, Clock, CheckCircle } from "lucide-react";

const metroStats = [
  { value: "1,598+", label: "Professionals Placed" },
  { value: "45+",    label: "Years of Experience" },
  { value: "8+",     label: "U.S. Office Locations" },
  { value: "100%",   label: "DOT & AEC Focused" },
];

const roles = [
  // DOT
  "Transportation Engineers",
  "Bridge & Structural Designers",
  "Roadway & Traffic Engineers",
  "CEI Inspectors",
  "Resident Engineers",
  "Construction Managers",
  "Project Controls Specialists",
  "Environmental Coordinators",
  "Civil & Infrastructure Engineers",
  "Water & Hydrology Engineers",
  "Executive-Level Program Leaders",
  // MEP
  "Mechanical Engineers (HVAC / Plumbing)",
  "Electrical Engineers (Power & Lighting)",
  "Fire Protection Engineers",
  "Low Voltage & Systems Engineers",
  "Commissioning Engineers",
  "MEP Project Managers",
  "BIM / MEP Modelers & Coordinators",
  "Plumbing Design Engineers",
  "Energy & Sustainability Engineers",
  "MEP Construction Administrators",
];

const offices = [
  "Orlando, FL", "Boston, MA", "Washington, D.C.",
  "Atlanta, GA", "Dallas, TX", "Los Angeles, CA",
  "New York City, NY", "Hartford, CT",
];

function RoleCard({ role, index, inView }: { role: string; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-center gap-3 py-2.5 border-b border-white/8 group last:border-0"
    >
      <CheckCircle
        size={14}
        className="shrink-0 transition-colors duration-200 group-hover:text-yellow-400"
        style={{ color: "rgba(245,197,24,0.5)" }}
      />
      <span
        className="text-sm transition-colors duration-200 group-hover:text-white"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {role}
      </span>
    </motion.div>
  );
}

export default function Metro() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="overflow-hidden" style={{ background: "#0d2357" }}>

      {/* ── Top tagline bar ── */}
      <div
        className="py-3 text-center text-xs font-bold uppercase tracking-[0.25em]"
        style={{ background: "#091a3d", color: "rgba(255,255,255,0.4)" }}
      >
        Greatness Relies on your Collaborators
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              {/* Metro logo mark */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black border border-white/20"
                style={{ background: "rgba(255,255,255,0.08)", color: "#fff", fontFamily: "var(--font-heading)" }}
              >
                MA
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-yellow)" }}>
                  Metro Associates
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Your Prominent Placement Company
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-black leading-tight text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontFamily: "var(--font-heading)" }}
            >
              Specialized Engineering
              <br />
              Recruiting Firm{" "}
              <span style={{ color: "var(--color-yellow)" }}>45+ Years</span>
              <br />
              of Results.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Metro Associates is the engineering recruiting firm that transforms
              your hiring process — with results you can count on. For 45+ years,
              we&apos;ve helped DOT agencies, infrastructure companies, and AEC
              consultancies hire qualified engineers nationwide.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-sm leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Every candidate we represent understands the operational, regulatory,
              and performance demands of publicly funded capital projects — vetted
              for DOT specs, FHWA standards, AASHTO guidelines, and QA/QC protocols.
            </motion.p>

            {/* Nick's role at Metro */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 mb-8"
              style={{ background: "rgba(245,197,24,0.08)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "var(--color-yellow)", color: "#0b1f4a" }}
              >
                <Users size={14} />
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                  Nick J. — Recruiter at Metro Associates
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Placing Healthcare, Engineering, AI/IoT, SAP, Security &amp; Sales
                  professionals for U.S. clients · Jan 2022 – Present
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://metroassoc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--color-yellow)",
                  color: "#0b1f4a",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Visit Metro Associates
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://careers.topechelon.com/portals/3a7f6fd3-7cf7-447c-a20f-2354eb2031df"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border border-white/20 text-white transition-all duration-200 hover:border-yellow-400 hover:text-yellow-400"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                View Open Jobs
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Right — stats + offices */}
          <div className="flex flex-col gap-6">
            {/* Stats 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {metroStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="rounded-2xl p-5 border border-white/10"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="text-3xl lg:text-4xl font-black text-white mb-1"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-yellow)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Offices */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="rounded-2xl p-5 border border-white/10"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={13} style={{ color: "var(--color-yellow)" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-yellow)" }}>
                  Nationwide Offices
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {offices.map((o) => (
                  <div key={o} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-yellow)" }} />
                    {o}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Roles divider ── */}
        <div
          className="border-t mb-10"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-yellow)" }}
            >
              DOT Recruiting &amp; MEP Types
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Placing professionals across DOT / transportation infrastructure
              and MEP engineering — vetted for technical competency and
              project-delivery experience.
            </motion.p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {roles.map((role, i) => (
              <RoleCard key={role} role={role} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 rounded-3xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-white/10"
          style={{ background: "rgba(245,197,24,0.07)" }}
        >
          <div>
            <div
              className="text-base font-black text-white mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tired of endless searches for the right engineering talent?
            </div>
            <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Let Metro Associates — and Nick — take the burden of recruitment off your plate.
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Clock size={13} style={{ color: "var(--color-yellow)" }} />
            <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>
              Entry-level to C-suite · All disciplines
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
