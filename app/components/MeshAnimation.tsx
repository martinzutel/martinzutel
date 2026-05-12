"use client";
import { useEffect, useRef } from "react";

const COLS = 20;
const ROWS = 26;
const AMPLITUDE = 12;

function getPoint(col: number, row: number, t: number, w: number, h: number) {
  const baseX = (col / COLS) * w;
  const baseY = (row / ROWS) * h;
  const x = baseX + AMPLITUDE * Math.sin(t * 0.6 + col * 0.45 + row * 0.28);
  const y = baseY + AMPLITUDE * Math.cos(t * 0.45 + row * 0.38 + col * 0.22);
  return { x, y };
}

export default function MeshAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let t = 0;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setup();
    window.addEventListener("resize", setup);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i <= COLS; i++) {
        for (let j = 0; j <= ROWS; j++) {
          const p = getPoint(i, j, t, w, h);

          if (i < COLS) {
            const pr = getPoint(i + 1, j, t, w, h);
            const alpha = 0.22 + 0.12 * Math.sin(t * 0.8 + i * 0.35);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pr.x, pr.y);
            ctx.strokeStyle = `rgba(212, 196, 160, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          if (j < ROWS) {
            const pb = getPoint(i, j + 1, t, w, h);
            const alpha = 0.22 + 0.12 * Math.cos(t * 0.7 + j * 0.32);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.strokeStyle = `rgba(212, 196, 160, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          const pulse = 0.5 + 0.35 * Math.sin(t * 1.1 + i * 0.55 + j * 0.42);

          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 196, 160, ${pulse})`;
          ctx.fill();
        }
      }

      t += 0.007;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
}
