"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const columns = [
  // Alterna C-B-C-B-C-B-C
  [
    { src: "IMG_9251.JPG",     w: 4032, h: 2688 }, // color  — cielo violeta
    { src: "IMG_0300.JPG",     w: 3024, h: 4032 }, // B&W   — cueva
    { src: "IMG_2462.JPG",     w: 4032, h: 2880 }, // color  — árboles otoño
    { src: "IMG_2647.JPG",     w: 3765, h: 3012 }, // B&W   — pueblo nevado
    { src: "IMG_3026.JPG",     w: 4032, h: 2688 }, // color  — hora dorada
    { src: "IMG_7557.JPG",     w: 2932, h: 2199 }, // B&W   — pájaro
    { src: "IMG_3474.JPG",     w: 4006, h: 2003 }, // color  — lámpara roja
  ],
  // Alterna C-B-C-B-C-C
  [
    { src: "IMG_1598.JPG",     w: 2688, h: 4032 }, // color  — hibisco
    { src: "IMG_8788.JPG",     w: 3814, h: 5085 }, // B&W   — Louvre
    { src: "IMG_0592.JPG",     w: 2268, h: 2835 }, // color  — bote en el mar
    { src: "IMG_2454_jpg.JPG", w: 3836, h: 2158 }, // B&W   — techos
    { src: "IMG_2667.JPG",     w: 4032, h: 3024 }, // color  — montañas rojas
    { src: "IMG_4782.JPG",     w: 4032, h: 3024 }, // color  — calle nocturna
  ],
  // Alterna C-B-C-C-B-C-C
  [
    { src: "IMG_4343_jpg.JPG", w: 2878, h: 4029 }, // color  — iglesia
    { src: "IMG_7478.JPG",     w: 4032, h: 3024 }, // B&W   — Niemeyer
    { src: "IMG_3029_jpg.JPG", w: 2143, h: 2679 }, // color  — neón verde
    { src: "IMG_4264.JPG",     w: 4032, h: 1714 }, // color  — skyline noche
    { src: "IMG_7326.JPG",     w: 3024, h: 2268 }, // B&W   — mano estatua
    { src: "IMG_8649.JPG",     w: 6013, h: 4009 }, // color  — ramas nocturnas
    { src: "IMG_8870.JPG",     w: 4032, h: 2077 }, // color  — lago oscuro
  ],
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
      style={{
        width: "100%",
        aspectRatio: `${w} / ${h}`,
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <Image
        src={`/photos/${src}`}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
        priority={priority}
        onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section style={{ padding: "0 clamp(2rem, 5vw, 6rem) 6rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
        {columns.map((col, ci) => (
          <div key={ci} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {col.map((photo, pi) => (
              <GalleryItem
                key={photo.src}
                {...photo}
                priority={pi === 0}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
