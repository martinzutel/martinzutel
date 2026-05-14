"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const photos = [
  // Grupo 1 — alterna C·B·C·B·C·B·C
  { src: "IMG_9251.JPG",     w: 4032, h: 2688 },
  { src: "IMG_0300.JPG",     w: 3024, h: 4032 },
  { src: "IMG_2462.JPG",     w: 4032, h: 2880 },
  { src: "IMG_2647.JPG",     w: 3765, h: 3012 },
  { src: "IMG_3026.JPG",     w: 4032, h: 2688 },
  { src: "IMG_7557.JPG",     w: 2932, h: 2199 },
  { src: "IMG_3474.JPG",     w: 4006, h: 2003 },
  // Grupo 2 — alterna C·B·C·B·C·C
  { src: "IMG_1598.JPG",     w: 2688, h: 4032 },
  { src: "IMG_8788.JPG",     w: 3814, h: 5085 },
  { src: "IMG_0592.JPG",     w: 2268, h: 2835 },
  { src: "IMG_2454_jpg.JPG", w: 3836, h: 2158 },
  { src: "IMG_2667.JPG",     w: 4032, h: 3024 },
  { src: "IMG_4782.JPG",     w: 4032, h: 3024 },
  // Grupo 3 — alterna C·B·C·C·B·C·C
  { src: "IMG_4343_jpg.JPG", w: 2878, h: 4029 },
  { src: "IMG_7478.JPG",     w: 4032, h: 3024 },
  { src: "IMG_3029_jpg.JPG", w: 2143, h: 2679 },
  { src: "IMG_4264.JPG",     w: 4032, h: 1714 },
  { src: "IMG_7326.JPG",     w: 3024, h: 2268 },
  { src: "IMG_8649.JPG",     w: 6013, h: 4009 },
  { src: "IMG_8870.JPG",     w: 4032, h: 2077 },
];

function GalleryItem({ src, w, h, priority }: { src: string; w: number; h: number; priority: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="masonry-item"
      style={{
        aspectRatio: `${w} / ${h}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <Image
        src={`/photos/${src}`}
        alt=""
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
        priority={priority}
        onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
      />
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <motion.section
      ref={ref}
      className="gallery-section"
      style={{ position: "relative" }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 0 } : {}}
        transition={{ duration: 1.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div className="masonry-grid">
        {photos.map((photo, i) => (
          <GalleryItem key={photo.src} {...photo} priority={i < 3} />
        ))}
      </div>
    </motion.section>
  );
}
