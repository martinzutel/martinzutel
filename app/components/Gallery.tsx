"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  { id: "10",  w: 1200, h: 800  },
  { id: "20",  w: 800,  h: 1100 },
  { id: "30",  w: 900,  h: 900  },
  { id: "40",  w: 1200, h: 750  },
  { id: "50",  w: 800,  h: 1200 },
  { id: "60",  w: 1100, h: 820  },
  { id: "70",  w: 900,  h: 1300 },
  { id: "80",  w: 1200, h: 680  },
  { id: "90",  w: 800,  h: 1050 },
  { id: "100", w: 1000, h: 700  },
  { id: "110", w: 850,  h: 1200 },
  { id: "120", w: 1200, h: 900  },
  { id: "130", w: 800,  h: 800  },
  { id: "140", w: 1100, h: 750  },
  { id: "150", w: 900,  h: 1100 },
];

function GalleryItem({ photo, priority }: { photo: typeof photos[0]; priority: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        aspectRatio: `${photo.w} / ${photo.h}`,
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        cursor: "pointer",
      }}
    >
      <Image
        src={`https://picsum.photos/id/${photo.id}/${photo.w}/${photo.h}`}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
        priority={priority}
        onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
      />
    </div>
  );
}

export default function Gallery() {
  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  return (
    <section style={{ padding: "6rem clamp(2rem, 5vw, 6rem)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "6px",
        }}
      >
        {[col1, col2, col3].map((col, ci) => (
          <div key={ci} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {col.map((photo, pi) => (
              <GalleryItem
                key={photo.id}
                photo={photo}
                priority={ci === 0 && pi === 0}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
