"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight, Phone } from "lucide-react";

const Crosshair = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute ${className} opacity-10`} width="28" height="28" viewBox="0 0 28 28">
    <circle cx="14" cy="14" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
    <line x1="14" y1="0"  x2="14" y2="8"  stroke="currentColor" strokeWidth="1" />
    <line x1="14" y1="20" x2="14" y2="28" stroke="currentColor" strokeWidth="1" />
    <line x1="0"  y1="14" x2="8"  y2="14" stroke="currentColor" strokeWidth="1" />
    <line x1="20" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-dark)" }}
    >
      <Crosshair className="top-10 left-10 text-white" />
      <Crosshair className="top-10 right-10 text-white" />
      <Crosshair className="bottom-10 left-10 text-white" />
      <Crosshair className="bottom-10 right-10 text-white" />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full pointer-events-none blur-3xl"
        style={{ background: "var(--color-yellow)", opacity: 0.08 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center justify-center gap-2"
          style={{ color: "var(--color-yellow)" }}
        >
          <span className="w-6 h-0.5 bg-current" /> Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black text-white mb-6"
          style={{ fontSize: "clamp(2.8rem, 9vw, 8rem)", fontFamily: "var(--font-heading)", lineHeight: 1 }}
        >
          LET&apos;S FIND
          <br />
          <span style={{ color: "var(--color-yellow)" }}>TOP TALENT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base leading-relaxed max-w-xl mx-auto mb-10"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Whether you&apos;re a hiring manager looking for niche engineering or
          healthcare talent, or a professional ready for your next opportunity —
          let&apos;s connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="tel:+12392555921"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Phone size={15} />
            +1 (239) 255-5921
          </a>
          <a
            href="mailto:nick@metroassoc.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--color-yellow)",
              color: "var(--color-dark)",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 4px 24px rgba(245,197,24,0.3)",
            }}
          >
            <Mail size={15} />
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/lavish-mahadev007/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <LinkedInIcon />
            LinkedIn Profile
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/8"
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            <Phone size={14} />
            +1 (239) 255-5921
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            <Mail size={14} />
            nick@metroassoc.com
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            <MapPin size={14} />
            Connecticut, USA
          </div>
        </motion.div>

      </div>
    </section>
  );
}
