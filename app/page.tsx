"use client";

import { motion } from "framer-motion";
import MeshAnimation from "./components/MeshAnimation";
import Gallery from "./components/Gallery";
import BirdScroll from "./components/BirdScroll";

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
            className="font-light leading-none mb-8"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 7rem)",
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
            className="hero-paragraph text-base font-light leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
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
