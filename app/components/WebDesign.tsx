"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ZYH — Landing de desarrollo inmobiliario",
    client: "AFRa Arquitectos",
    tagline: "De un folleto PDF a un sitio en producción.",
    short:
      "Landing responsive para un fideicomiso al costo de AFRa Arquitectos (Buenos Aires), con extracción y verificación rigurosa de contenido real, identidad visual editorial propia, y pipeline de procesamiento de imágenes/video en Python. Deploy continuo vía GitHub + Vercel.",
    extended: [
      "El brief: AFRa Arquitectos tenía un folleto en PDF para su desarrollo ZYH (Zarraga y Heredia, Chacarita/Villa Ortúzar) y necesitaba una landing web real — no una réplica del PDF, sino un sitio con identidad propia que comunicara el proyecto de forma clara tanto en desktop como en mobile.",
      "El proceso: Extraje y verifiqué cada dato del PDF original —medidas, especificaciones técnicas, plan de pago— contra el material fuente, sin dar nada por sentado. El diseño pasó por varias iteraciones hasta llegar a un lenguaje editorial/arquitectónico propio (tipografía Fraunces + Space Grotesk/Space Mono, paleta concreto/madera, motivos de \"hoja de obra\"), ajustado en tiempo real con feedback iterativo. Construí un pipeline en Python (Pillow, OpenCV) para conversión HEIC/HEVC, realce de fotos, generación de tarjetas de Open Graph a medida y el favicon de marca. Cada breakpoint mobile se ajustó para que las imágenes se vean completas, nunca recortadas, verificando proporciones a mano contra los archivos reales.",
      "El resultado: Un sitio estático liviano (sin frameworks), con integración continua GitHub → Vercel, contraste verificado contra WCAG, y un flujo de trabajo iterativo que fue de \"acá está el PDF\" a un sitio en producción ajustándose pedido por pedido.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Python", "Pillow", "OpenCV", "Git/GitHub", "Vercel"],
    live: "https://zyh-zarraga-y-heredia.vercel.app",
    repo: "https://github.com/martinzutel/zyh-heredia-y-zarraga",
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

function LinkArrow({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
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
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
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

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {p.extended.map((para, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

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

          {/* Right: preview */}
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none" }}
            className="web-preview-link"
          >
            <div
              className="web-preview"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "16 / 10",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                transition: "border-color 0.25s ease",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(212, 196, 160, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--border)";
              }}
            >
              {/* Decorative architectural grid */}
              <svg
                viewBox="0 0 480 300"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0.06,
                }}
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Grid lines */}
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <line
                    key={`v${n}`}
                    x1={n * 96}
                    y1="0"
                    x2={n * 96}
                    y2="300"
                    stroke="var(--accent)"
                    strokeWidth="0.5"
                  />
                ))}
                {[0, 1, 2, 3, 4].map((n) => (
                  <line
                    key={`h${n}`}
                    x1="0"
                    y1={n * 75}
                    x2="480"
                    y2={n * 75}
                    stroke="var(--accent)"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Floor plan-ish rectangle */}
                <rect
                  x="80"
                  y="60"
                  width="320"
                  height="180"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="112"
                  y="90"
                  width="100"
                  height="120"
                  stroke="var(--accent)"
                  strokeWidth="0.6"
                  fill="none"
                />
                <rect
                  x="268"
                  y="90"
                  width="100"
                  height="120"
                  stroke="var(--accent)"
                  strokeWidth="0.6"
                  fill="none"
                />
              </svg>

              <div style={{ position: "relative", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "0.625rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Zarraga y Heredia · Chacarita
                </p>
                <p
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.04em",
                    color: "var(--text-primary)",
                    lineHeight: 1,
                  }}
                >
                  ZYH
                </p>
              </div>

              <span
                style={{
                  position: "relative",
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
        </motion.article>
      ))}
    </section>
  );
}
