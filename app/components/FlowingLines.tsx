"use client";
import { useEffect, useRef } from "react";

export default function FlowingLines({ seed = 0 }: { seed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let w = 0, h = 0;

    const lines = [
      { xFrac: 0.15, phase: seed * 1.4,        speed: 0.20, amp: 11, alpha: 0.17 },
      { xFrac: 0.42, phase: seed * 1.4 + 1.0,  speed: 0.14, amp: 15, alpha: 0.12 },
      { xFrac: 0.70, phase: seed * 1.4 + 2.2,  speed: 0.18, amp: 9,  alpha: 0.14 },
      { xFrac: 0.91, phase: seed * 1.4 + 0.6,  speed: 0.25, amp: 6,  alpha: 0.09 },
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * window.devicePixelRatio);
      canvas.height = Math.round(h * window.devicePixelRatio);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const { xFrac, phase, speed, amp, alpha } of lines) {
        const x = xFrac * w;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(240, 237, 232, ${alpha})`;
        ctx.lineWidth = 0.75;
        for (let y = 0; y <= h; y += 2) {
          const xOff = Math.sin(y * 0.017 + t * speed + phase) * amp;
          y === 0 ? ctx.moveTo(x + xOff, y) : ctx.lineTo(x + xOff, y);
        }
        ctx.stroke();
      }
      t += 0.015;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [seed]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
