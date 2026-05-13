"use client";

import { motion } from "framer-motion";
import MeshAnimation from "./components/MeshAnimation";
import Gallery from "./components/Gallery";
import BirdScroll from "./components/BirdScroll";

function InstagramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3"/>
      <line x1="7" y1="11" x2="7" y2="17"/>
      <circle cx="7" cy="8" r="1.1" fill="currentColor" stroke="none"/>
      <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17"/>
      <line x1="11" y1="11" x2="11" y2="17"/>
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/martinzutel/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.linkedin.com/in/martin-zutel-914b67219/?locale=en", label: "LinkedIn", Icon: LinkedInIcon },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-light leading-none"
            style={{
              fontSize: "clamp(3.4rem, 7vw, 9rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.045em",
            }}
          >
            Martin
            <br />
            Zutelman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="hero-paragraph text-lg font-light leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Me obsesiona la{" "}
            <span style={{ color: "var(--accent)" }}>forma</span>, el{" "}
            <span style={{ color: "var(--accent)" }}>detalle</span> y el{" "}
            <span style={{ color: "var(--accent)" }}>ritmo visual</span>.{" "}
            Diseño gráfico, fotografía, video y web — este sitio incluido.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            style={{ display: "flex", gap: "1.1rem" }}
          >
            {socialLinks.map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.22s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          <div style={{ display: "flex", gap: "2rem" }}>
            <BirdScroll />
            <div className="bird-second">
              <BirdScroll />
            </div>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <MeshAnimation />
        </motion.div>
      </section>

      <Gallery />
    </main>
  );
}
