"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "ZYH — Landing de desarrollo inmobiliario",
    client: "AFRa Arquitectos",
    tagline: "Del folleto al sitio.",
    body: "AFRa Arquitectos tenía un PDF y necesitaba un sitio. Lo construí con identidad propia — tipografía, paleta y composición diseñadas desde cero. Cada detalle ajustado con feedback real, en producción desde el primer día.",
    stack: ["HTML", "CSS", "JavaScript", "Python", "Vercel"],
    live: "https://zyh-zarraga-y-heredia.vercel.app",
    repo: "https://github.com/martinzutel/zyh-heredia-y-zarraga",
    imgDesktop: "/projects/zyh/desktop.jpg",
    imgMobile: "/projects/zyh/mobile.jpg",
  },
];

function StackChip({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: "3px 10px",
        borderRadius: "9999px",
        border: "1px solid var(--border)",
        fontSize: "0.75rem",
        color: "var(--text-tertiary)",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function LinkArrow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: "0.8125rem",
        color: "var(--text-secondary)",
        letterSpacing: "-0.01em",
        textDecoration: "none",
        borderBottom: "1px solid var(--border)",
        paddingBottom: "1px",
        transition: "color 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-secondary)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {children}
    </a>
  );
}

function ScreenPlaceholder() {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg viewBox="0 0 120 80" style={{ width: "60%", opacity: 0.12 }}>
        <rect x="10" y="8" width="100" height="64" stroke="var(--accent)" strokeWidth="1" fill="none" rx="2" />
        <line x1="10" y1="20" x2="110" y2="20" stroke="var(--accent)" strokeWidth="0.5" />
        <rect x="18" y="28" width="36" height="36" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
        <rect x="62" y="28" width="36" height="8" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
        <rect x="62" y="42" width="36" height="4" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
        <rect x="62" y="52" width="24" height="4" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
      </svg>
    </div>
  );
}

function DeviceMockup({
  live,
  imgDesktop,
  imgMobile,
}: {
  live: string;
  imgDesktop: string;
  imgMobile: string;
}) {
  const [desktopErr, setDesktopErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);

  return (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", textDecoration: "none" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "0",
        }}
      >
        {/* Architectural grid background */}
        <svg
          viewBox="0 0 480 300"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.04,
            pointerEvents: "none",
          }}
          preserveAspectRatio="xMidYMid slice"
        >
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <line key={`v${n}`} x1={n * 96} y1="0" x2={n * 96} y2="300" stroke="var(--accent)" strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3, 4].map((n) => (
            <line key={`h${n}`} x1="0" y1={n * 75} x2="480" y2={n * 75} stroke="var(--accent)" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Desktop frame */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "78%",
            zIndex: 1,
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              background: "#1a1814",
              border: "1px solid var(--border)",
              borderBottom: "none",
              borderRadius: "8px 8px 0 0",
              padding: "7px 10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3a3530", display: "inline-block" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3a3530", display: "inline-block" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3a3530", display: "inline-block" }} />
          </div>
          {/* Screen */}
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "0 0 4px 4px",
              overflow: "hidden",
              aspectRatio: "16 / 9",
              background: "var(--surface)",
              position: "relative",
            }}
          >
            {desktopErr ? <ScreenPlaceholder /> : (
              <Image
                src={imgDesktop}
                alt="ZYH desktop"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                onError={() => setDesktopErr(true)}
              />
            )}
          </div>
        </div>

        {/* Phone frame */}
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "22%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              background: "#1a1814",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "10px 6px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {/* Notch */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 28, height: 5, background: "#2a2824", borderRadius: "9999px" }} />
            </div>
            {/* Screen */}
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                aspectRatio: "9 / 18",
                background: "var(--surface)",
                position: "relative",
              }}
            >
              {mobileErr ? <ScreenPlaceholder /> : (
                <Image
                  src={imgMobile}
                  alt="ZYH mobile"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  onError={() => setMobileErr(true)}
                />
              )}
            </div>
            {/* Home indicator */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 20, height: 3, background: "#2a2824", borderRadius: "9999px" }} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.75rem" }}>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--text-tertiary)",
            letterSpacing: "0.04em",
            border: "1px solid var(--border)",
            borderRadius: "9999px",
            padding: "5px 14px",
          }}
        >
          Ver sitio en vivo ↗
        </span>
      </div>
    </a>
  );
}

export default function WebDesign() {
  return (
    <section style={{ padding: "3rem clamp(2rem, 5vw, 6rem) 8rem" }}>
      {projects.map((p, i) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="web-project-card"
        >
          {/* Left: info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <p
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                {p.client}
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.035em",
                  color: "var(--text-primary)",
                  lineHeight: 1.15,
                  marginBottom: "0.6rem",
                }}
              >
                {p.title}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--accent)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.tagline}
              </p>
            </div>

            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                fontWeight: 300,
                lineHeight: 1.75,
                letterSpacing: "-0.01em",
              }}
            >
              {p.body}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {p.stack.map((s) => (
                <StackChip key={s} label={s} />
              ))}
            </div>

            <div style={{ display: "flex", gap: "1.25rem" }}>
              <LinkArrow href={p.live}>Ver sitio en vivo ↗</LinkArrow>
              <LinkArrow href={p.repo}>GitHub ↗</LinkArrow>
            </div>
          </div>

          {/* Right: device mockup */}
          <DeviceMockup live={p.live} imgDesktop={p.imgDesktop} imgMobile={p.imgMobile} />
        </motion.article>
      ))}
    </section>
  );
}
