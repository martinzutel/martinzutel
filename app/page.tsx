"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MeshAnimation from "./components/MeshAnimation";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import WebDesign from "./components/WebDesign";
type Tab = "fotografía" | "diseño web" | "sobre mí";

function InstagramIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3"/>
      <line x1="7" y1="11" x2="7" y2="17"/>
      <circle cx="7" cy="8" r="1.1" fill="currentColor" stroke="none"/>
      <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17"/>
      <line x1="11" y1="11" x2="11" y2="17"/>
    </svg>
  );
}

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="about-section"
    >
      <p className="about-bio-text">
        Me estoy abriendo camino en el{" "}
        <span style={{ color: "var(--accent)" }}>diseño gráfico</span>, la{" "}
        <span style={{ color: "var(--accent)" }}>fotografía</span> y el{" "}
        <span style={{ color: "var(--accent)" }}>desarrollo web</span>. No
        desde la teoría — desde el hacer. Cada proyecto es una oportunidad de
        afinar el ojo, de aprender a ver antes de ejecutar.
      </p>

      <div className="about-grid">
        <div className="about-col">
          <span className="about-label">Formación</span>
          <p className="about-value">Especialización en Tecnología, Comunicación e Información</p>
          <p className="about-subvalue">ORT Belgrano</p>
          <p className="about-value" style={{ marginTop: "1rem" }}>CBC — Imagen y Sonido</p>
          <p className="about-subvalue">Universidad de Buenos Aires</p>
        </div>

        <div className="about-col">
          <span className="about-label">Disciplinas</span>
          {["Diseño gráfico", "Fotografía", "Desarrollo web"].map((d) => (
            <p key={d} className="about-value">{d}</p>
          ))}
        </div>

        <div className="about-col">
          <span className="about-label">Contacto</span>
          <a href="https://www.instagram.com/martinzutel/" target="_blank" rel="noopener noreferrer" className="about-link">Instagram</a>
          <a href="https://www.linkedin.com/in/martin-zutel-914b67219/?locale=en" target="_blank" rel="noopener noreferrer" className="about-link">LinkedIn</a>
        </div>
      </div>
    </motion.section>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/martinzutel/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.linkedin.com/in/martin-zutel-914b67219/?locale=en", label: "LinkedIn", Icon: LinkedInIcon },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("diseño web");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      const isVisible = rect.top >= -50 && rect.top <= window.innerHeight;
      if (!isVisible) {
        window.scrollTo({ top: contentRef.current.offsetTop - 16, behavior: "smooth" });
      }
    }
  }, [activeTab]);

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
            Me obsesiona el{" "}
            <span style={{ color: "var(--accent)" }}>criterio visual</span>{" "}
            aplicado al{" "}
            <span style={{ color: "var(--accent)" }}>diseño</span> y la{" "}
            <span style={{ color: "var(--accent)" }}>web</span>.{" "}
            Que todo funcione tan bien como se ve — este sitio incluido.
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
                  color: "rgba(240, 237, 232, 0.62)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.22s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240, 237, 232, 0.62)")}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

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

      <div ref={contentRef} className="content-outer">
        <NavBar active={activeTab} onSelect={setActiveTab} />
        {activeTab !== "sobre mí" && (
          <div style={{ padding: "0.4rem clamp(2rem, 5vw, 6rem)", textAlign: "center" }}>
            <p style={{ fontSize: "0.6875rem", color: "var(--text-tertiary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Una muestra de mi trabajo
            </p>
          </div>
        )}
        <div className="content-wrapper" style={{ marginTop: 0 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {activeTab === "fotografía" ? (
                <Gallery />
              ) : activeTab === "diseño web" ? (
                <WebDesign />
              ) : (
                <AboutSection />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
