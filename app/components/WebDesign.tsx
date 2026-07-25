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
      {/*
        Desktop in normal flow → sets the container height naturally.
        Phone is absolute, bottom-right corner, z-index 2.
        paddingBottom gives the phone room to hang below the desktop bottom.
      */}
      <div style={{ position: "relative", paddingBottom: "7%" }}>

        {/* Desktop browser frame — normal flow, full width */}
        <div>
          {/* Chrome bar */}
          <div
            style={{
              background: "#17150f",
              border: "1px solid var(--border)",
              borderBottom: "none",
              borderRadius: "8px 8px 0 0",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2e2a24", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2e2a24", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2e2a24", display: "inline-block" }} />
          </div>
          {/* Screen */}
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "0 0 6px 6px",
              overflow: "hidden",
              aspectRatio: "16 / 9",
              background: "var(--surface)",
              position: "relative",
            }}
          >
            {desktopErr ? (
              <ScreenPlaceholder />
            ) : (
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

        {/* Phone — Dynamic Island style, bottom-right, overlaps desktop */}
        <div
          className="phone-overlay"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "21%",
            zIndex: 2,
            background: "#19170f",
            border: "1.5px solid rgba(255,255,255,0.1)",
            padding: "5px",
            boxShadow: "0 22px 60px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="phone-overlay-screen"
            style={{
              overflow: "hidden",
              aspectRatio: "9 / 19.5",
              background: "var(--surface)",
              position: "relative",
            }}
          >
            {mobileErr ? (
              <ScreenPlaceholder />
            ) : (
              <Image
                src={imgMobile}
                alt="ZYH mobile"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                onError={() => setMobileErr(true)}
              />
            )}
            {/* Dynamic Island pill */}
            <div
              style={{
                position: "absolute",
                top: "3.5%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "29%",
                height: "4.2%",
                background: "#0c0b09",
                borderRadius: "9999px",
                zIndex: 3,
              }}
            />
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
    <section style={{ padding: "0 clamp(2rem, 5vw, 6rem) 8rem" }}>
      {projects.map((p, i) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
          style={{
            paddingTop: "0",
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
