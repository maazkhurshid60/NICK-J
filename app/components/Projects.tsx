"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HeartPulse, Zap, Brain, ShieldCheck,
  Code2, BarChart3, Megaphone, Leaf,
} from "lucide-react";

const specializations = [
  {
    number: "01",
    Icon: HeartPulse,
    title: "Healthcare",
    description: "Placing clinical, medical device, and healthcare IT professionals into leading health systems and life sciences companies nationwide.",
    tags: ["Clinical", "Medical Devices", "Life Sciences", "Health IT"],
  },
  {
    number: "02",
    Icon: Zap,
    title: "Engineering",
    description: "Hard/soft/middleware engineering — Energy, Power, Motor Controls, Lab/Field/Scientific instruments, and Electronic Test & Measurement.",
    tags: ["Energy/Power", "Motor Controls", "Electronics", "Lab/Scientific"],
  },
  {
    number: "03",
    Icon: Brain,
    title: "AI & IoT",
    description: "Sourcing senior AI engineers, IoT developers, and data scientists for cutting-edge technology companies and smart infrastructure projects.",
    tags: ["AI Engineers", "IoT Developers", "Data Science", "Smart Ag"],
  },
  {
    number: "04",
    Icon: ShieldCheck,
    title: "Security Engineering",
    description: "Recruiting security-cleared professionals and cyber/physical security engineers for defense and government-adjacent programs.",
    tags: ["Security Cleared", "Cybersecurity", "Defense", "SAP"],
  },
  {
    number: "05",
    Icon: Code2,
    title: "Software & Web",
    description: "Full-stack developers, DevOps engineers, and cloud architects placed with innovative software companies and enterprise IT departments.",
    tags: ["Full-Stack", "DevOps", "Cloud", "Web Dev"],
  },
  {
    number: "06",
    Icon: Megaphone,
    title: "Sales & Marketing",
    description: "Sales Engineers, Marketing Professionals, MarCom Managers, Brand Managers, and Global Marketing Managers placed at Fortune-level firms.",
    tags: ["Sales Engineers", "Brand Managers", "MarCom", "Global Marketing"],
  },
  {
    number: "07",
    Icon: BarChart3,
    title: "Product & Project Mgmt",
    description: "Placing product managers, project managers, and business analysts with expertise in power conversion and complex manufacturing programs.",
    tags: ["Product Managers", "Project Managers", "Business Analysis"],
  },
  {
    number: "08",
    Icon: Leaf,
    title: "Smart Agriculture",
    description: "Niche recruiting for AgTech companies seeking IoT-enabled precision agriculture talent, from field engineers to software developers.",
    tags: ["AgTech", "Precision Ag", "IoT", "Field Engineers"],
  },
];

export default function Specializations() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specializations" ref={ref} className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
              style={{ color: "var(--color-gray)" }}
            >
              <span className="w-6 h-0.5 bg-current" /> What I Recruit
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
            >
              Industry
              <br />
              <span
                className="px-3 rounded-lg"
                style={{ background: "var(--color-yellow)" }}
              >
                Specializations.
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm max-w-xs"
            style={{ color: "var(--color-gray)" }}
          >
            8+ verticals covered. Niche talent sourced across the U.S. — remotely.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specializations.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-yellow-300 overflow-hidden cursor-default"
              style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}
            >
              {/* Number watermark */}
              <div
                className="absolute -top-3 -right-1 text-7xl font-black opacity-5 select-none"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
              >
                {s.number}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "var(--color-yellow)", color: "var(--color-dark)" }}
                >
                  <s.Icon size={20} strokeWidth={1.75} />
                </div>

                <h3
                  className="text-base font-black mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
                >
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--color-gray)" }}>
                  {s.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-medium border"
                      style={{ borderColor: "var(--color-border)", color: "var(--color-gray)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-5 right-5 h-0.5 rounded-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: "var(--color-yellow)" }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
