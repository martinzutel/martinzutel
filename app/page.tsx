"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MeshAnimation from "./components/MeshAnimation";
import Gallery from "./components/Gallery";
import BirdScroll from "./components/BirdScroll";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50"
        style={{ background: "var(--text-tertiary)" }}
      />

      <main>
        {/* Hero */}
        <section
          style={{
            minHeight: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {/* Contenido izquierdo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "clamp(2rem, 5vw, 6rem)",
              paddingRight: "3rem",
              paddingTop: "6rem",
              paddingBottom: "6rem",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-light tracking-tight leading-none mb-8"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 7rem)",
                color: "var(--text-primary)",
                letterSpacing: "-0.045em",
              }}
            >
              Martin
              <br />
              <span style={{ color: "var(--text-secondary)" }}>Zutelman</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="text-base font-light leading-relaxed"
              style={{ color: "var(--text-secondary)", maxWidth: "38ch" }}
            >
              Me estoy adentrando en el mundo del{" "}
              <span style={{ color: "var(--accent)" }}>diseño gráfico</span>,
              la <span style={{ color: "var(--accent)" }}>fotografía</span> y
              la{" "}
              <span style={{ color: "var(--accent)" }}>edición de video</span>.
              Son los campos en los que quiero desarrollarme — áreas donde el{" "}
              <span style={{ color: "var(--accent)" }}>criterio visual</span>{" "}
              y la{" "}
              <span style={{ color: "var(--accent)" }}>atención al detalle</span>{" "}
              marcan la diferencia.
            </motion.p>

            <BirdScroll />
          </div>

          {/* Animación derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <MeshAnimation />
          </motion.div>
        </section>

        <Gallery />
      </main>
    </>
  );
}
