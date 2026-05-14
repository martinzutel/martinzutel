"use client";

import { motion } from "framer-motion";

type Tab = "fotografía" | "sobre mí";

const TABS: Tab[] = ["fotografía", "sobre mí"];

export default function NavBar({
  active,
  onSelect,
}: {
  active: Tab;
  onSelect: (t: Tab) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2.5rem 0 2rem",
        position: "sticky",
        top: "1.25rem",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          background: "rgba(12, 11, 9, 0.52)",
          backdropFilter: "blur(32px) saturate(200%)",
          WebkitBackdropFilter: "blur(32px) saturate(200%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "9999px",
          padding: "4px",
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onSelect(tab)}
            style={{
              position: "relative",
              padding: "7px 24px",
              borderRadius: "9999px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color:
                active === tab
                  ? "var(--text-primary)"
                  : "var(--text-secondary)",
              fontSize: "0.8125rem",
              fontFamily: "inherit",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              transition: "color 0.22s ease",
              zIndex: 1,
            }}
          >
            {active === tab && (
              <motion.div
                layoutId="nav-pill"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255,255,255,0.11)",
                  boxShadow:
                    "0 2px 10px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.13)",
                }}
                transition={{ duration: 0.3, ease: [0.34, 1.2, 0.64, 1] }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{tab}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
