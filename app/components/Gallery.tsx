"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "IMG_9251.JPG",     w: 4032, h: 2688 },
  { src: "IMG_1598.JPG",     w: 2688, h: 4032 },
  { src: "IMG_2667.JPG",     w: 4032, h: 3024 },
  { src: "IMG_2647.JPG",     w: 3765, h: 3012 },
  { src: "IMG_3026.JPG",     w: 4032, h: 2688 },
  { src: "IMG_7557.JPG",     w: 2932, h: 2199 },
  { src: "IMG_3474.JPG",     w: 4006, h: 2003 },
  { src: "IMG_0300.JPG",     w: 3024, h: 4032 },
  { src: "IMG_8788.JPG",     w: 3814, h: 5085 },
  { src: "IMG_0592.JPG",     w: 2268, h: 2835 },
  { src: "IMG_2454_jpg.JPG", w: 3836, h: 2158 },
  { src: "IMG_2462.JPG",     w: 4032, h: 2880 },
  { src: "IMG_4782.JPG",     w: 4032, h: 3024 },
  { src: "IMG_4343_jpg.JPG", w: 2878, h: 4029 },
  { src: "IMG_7478.JPG",     w: 4032, h: 3024 },
  { src: "IMG_3029_jpg.JPG", w: 2143, h: 2679 },
  { src: "IMG_4264.JPG",     w: 4032, h: 1714 },
  { src: "IMG_7326.JPG",     w: 3024, h: 2268 },
  { src: "IMG_8649.JPG",     w: 6013, h: 4009 },
];

type Photo = { src: string; w: number; h: number };

type PhotoWithIndex = Photo & { index: number };

function GalleryItem({ src, w, h, priority }: { src: string; w: number; h: number; priority: boolean }) {
  return (
    <motion.div
      className="masonry-item"
      style={{ aspectRatio: `${w} / ${h}` }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
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
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 600px)");
    const updateColumns = () => setColumnCount(query.matches ? 2 : 3);
    updateColumns();
    query.addEventListener("change", updateColumns);
    return () => query.removeEventListener("change", updateColumns);
  }, []);

  const columns: PhotoWithIndex[][] = Array.from({ length: columnCount }, () => []);
  photos.forEach((photo, index) => {
    columns[index % columnCount].push({ ...photo, index });
  });

  return (
    <motion.section
      ref={ref}
      className="gallery-section"
      style={{ position: "relative" }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, rgba(12, 11, 9, 0.62) 0%, rgba(12, 11, 9, 0.18) 35%, rgba(12, 11, 9, 0.04) 65%, rgba(12, 11, 9, 0) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div className="gallery-grid">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="gallery-column">
            {column.map(({ src, w, h, index }) => (
              <GalleryItem key={src} src={src} w={w} h={h} priority={index < 3} />
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
