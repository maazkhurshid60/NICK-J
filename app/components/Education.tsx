"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const dotRoles = [
  "Transportation Engineers",
  "Bridge & Structural Designers",
  "Roadway & Traffic Engineers",
  "CEI Inspectors & Resident Engineers",
  "Construction Managers",
  "Project Controls Specialists",
  "Environmental Coordinators",
  "Civil & Infrastructure Engineers",
  "Water & Hydrology Engineers",
  "Executive-Level Program Leaders",
];

const mepRoles = [
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

function RoleList({
  roles,
  inView,
  delay = 0,
}: {
  roles: string[];
  inView: boolean;
  delay?: number;
}) {
  return (
    <ul className="space-y-0">
      {roles.map((role, i) => (
        <motion.li
          key={role}
          initial={{ opacity: 0, x: -14 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35, delay: delay + i * 0.05 }}
          className="flex items-center gap-3 py-2.5 border-b last:border-0 group"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <CheckCircle
            size={13}
            className="shrink-0 transition-colors duration-200"
            style={{ color: "var(--color-yellow)" }}
          />
          <span
            className="text-sm transition-colors duration-200 group-hover:text-white"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {role}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default function Education() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "var(--color-dark)" }}>
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
            <span className="w-6 h-0.5 bg-current" /> Recruiting Specializations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-heading)" }}
          >
            DOT Recruiting &{" "}
            <span style={{ color: "var(--color-yellow)" }}>MEP Types.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm max-w-xl"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Nick places specialists across two deep verticals — DOT / transportation
            infrastructure and MEP engineering — vetted for technical competency and
            project-delivery experience.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* DOT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-3xl p-7 lg:p-8 border border-white/8"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
                style={{ background: "var(--color-yellow)", color: "var(--color-dark)", fontFamily: "var(--font-heading)" }}
              >
                DOT
              </div>
              <div>
                <div
                  className="text-base font-black text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  DOT & Transportation Recruiting
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  FHWA · AASHTO · QA/QC · Capital Projects
                </div>
              </div>
            </div>
            <RoleList roles={dotRoles} inView={inView} delay={0.3} />
          </motion.div>

          {/* MEP */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="rounded-3xl p-7 lg:p-8 border border-white/8"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
                style={{ background: "var(--color-yellow)", color: "var(--color-dark)", fontFamily: "var(--font-heading)" }}
              >
                MEP
              </div>
              <div>
                <div
                  className="text-base font-black text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  MEP Engineering Recruiting
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Mechanical · Electrical · Plumbing · Fire Protection
                </div>
              </div>
            </div>
            <RoleList roles={mepRoles} inView={inView} delay={0.4} />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
