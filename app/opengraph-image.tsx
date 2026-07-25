import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Martin Zutelman — Fotografía, Diseño Gráfico y Desarrollo Web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0c0b09",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,196,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,196,160,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Right accent glow */}
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "50%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,196,160,0.08) 0%, transparent 70%)",
            transform: "translateY(-50%)",
            display: "flex",
          }}
        />

        {/* Top label */}
        <div
          style={{
            fontSize: "13px",
            color: "#4e4840",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          martinzutelman.com
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "96px",
            fontWeight: 300,
            color: "#f0ede8",
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            marginBottom: "32px",
            display: "flex",
          }}
        >
          Martin Zutelman
        </div>

        {/* Accent divider */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "#D4C4A0",
            marginBottom: "28px",
            display: "flex",
          }}
        />

        {/* Disciplines */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
        >
          {["Diseño gráfico", "Fotografía", "Desarrollo web"].map((d, i) => (
            <div key={d} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              <span style={{ fontSize: "18px", color: "#9e9488", fontWeight: 300, letterSpacing: "-0.01em" }}>
                {d}
              </span>
              {i < 2 && (
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#4e4840", display: "flex" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
