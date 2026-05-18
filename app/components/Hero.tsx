"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "#ffffff" }}
    >
      {/* Faint grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Big outlined watermark text */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center select-none pointer-events-none overflow-hidden"
        style={{
          fontSize: "clamp(6rem, 18vw, 18rem)",
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          lineHeight: 0.85,
          WebkitTextStroke: "1.5px #e5e5e5",
          color: "transparent",
          letterSpacing: "-0.04em",
        }}
      >
        RECRUIT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--color-yellow)" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-gray)" }}
              >
                Recruitment Specialist · Connecticut, USA
              </span>
            </motion.div>

            {/* Name lines — staggered clip reveal */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-black leading-none tracking-tighter"
                style={{
                  fontSize: "clamp(4.5rem, 13vw, 11rem)",
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-dark)",
                }}
              >
                NICK
              </motion.h1>
            </div>

            {/* J. with yellow box highlight */}
            <div className="overflow-hidden mb-6">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-end gap-4"
              >
                <h1
                  className="font-black leading-none tracking-tighter"
                  style={{
                    fontSize: "clamp(4.5rem, 13vw, 11rem)",
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-dark)",
                  }}
                >
                  JAIN
                </h1>
                {/* Yellow dot — the period */}
                <div
                  className="rounded-full shrink-0 mb-6 lg:mb-10"
                  style={{
                    width: "clamp(1.5rem, 4vw, 4rem)",
                    height: "clamp(1.5rem, 4vw, 4rem)",
                    background: "var(--color-yellow)",
                  }}
                />
              </motion.div>
            </div>

            {/* Role tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span
                className="px-5 py-2 rounded-full text-sm font-bold border-2"
                style={{
                  borderColor: "var(--color-dark)",
                  color: "var(--color-dark)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Recruitment Specialist
              </span>
              <span className="text-sm font-medium" style={{ color: "var(--color-gray)" }}>
                @ Metro Associates · Connecticut, USA
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base leading-relaxed max-w-lg mb-8"
              style={{ color: "var(--color-gray)" }}
            >
              8+ years placing top-tier professionals in Engineering for U.S.
              clients. Currently recruiting at Metro Associates, sourcing niche
              talent from engineers to global marketing managers using advanced
              Boolean search strategies.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "var(--color-dark)",
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                }}
              >
                View Experience
                <ArrowUpRight size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/lavish-mahadev007/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border-2 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 group"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-dark)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex gap-8 mt-12 pt-8 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              {[
                { value: "8+", label: "Years Recruiting" },
                { value: "4,676", label: "LinkedIn Followers" },
                { value: "2", label: "Major Firms" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div
                    className="text-3xl font-black leading-none mb-1"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs" style={{ color: "var(--color-gray)" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Yellow square behind photo */}
              <div
                className="absolute top-6 right-6 rounded-3xl"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "var(--color-yellow)",
                  zIndex: 0,
                }}
              />

              {/* Photo */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "clamp(260px, 28vw, 380px)",
                  height: "clamp(320px, 36vw, 480px)",
                  zIndex: 1,
                  boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
                }}
              >
                <Image
                  src="/Nick.jfif"
                  alt="Nick Jain. — Recruitment Specialist"
                  fill
                  className="object-cover object-top"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating Metro badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -bottom-5 -left-6 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 z-10"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid #f0f0f0" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
                  style={{ background: "var(--color-yellow)", color: "var(--color-dark)" }}
                >
                  MA
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: "var(--color-dark)", fontFamily: "var(--font-heading)" }}>
                    Metro Associates
                  </div>
                  <div className="text-xs" style={{ color: "var(--color-gray)" }}>
                    Recruiter · Jan 2022 – Present
                  </div>
                </div>
              </motion.div>

              {/* "Open to work" pill — top right corner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute -top-4 left-4 rounded-full px-3 py-1.5 flex items-center gap-1.5 z-10"
                style={{ background: "var(--color-dark)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Connecticut, USA</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
