"use client";

import { useEffect, useRef, useState } from "react";
import type { Media as MediaT } from "@/lib/catalog";
import { Media } from "./Media";

/**
 * Galeri produk 3D berputar (adaptasi konsep "orb gallery" untuk aset kita).
 * Pure CSS 3D + requestAnimationFrame — tanpa dependency. Auto-rotate,
 * drag untuk memutar dengan inersia, dan berhenti berotasi otomatis saat
 * pengguna memilih prefers-reduced-motion.
 */
export function ProductOrb({ images }: { images: MediaT[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const rot = useRef(0);
  const vel = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const [radius, setRadius] = useState(270);

  const n = images.length;
  const step = 360 / n;

  useEffect(() => {
    const setR = () =>
      setRadius(
        window.innerWidth < 640 ? 168 : window.innerWidth < 1024 ? 220 : 270,
      );
    setR();
    window.addEventListener("resize", setR);

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const base = reduced ? 0 : 0.14;

    let raf = 0;
    const tick = () => {
      if (!dragging.current) {
        rot.current += base + vel.current;
        vel.current *= 0.93;
        if (Math.abs(vel.current) < 0.001) vel.current = 0;
      }
      if (stageRef.current) {
        stageRef.current.style.transform = `translateZ(-${radius}px) rotateX(-8deg) rotateY(${rot.current}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setR);
    };
  }, [radius]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    rot.current += dx * 0.25;
    vel.current = dx * 0.25;
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="relative mx-auto h-[300px] w-full max-w-3xl cursor-grab touch-pan-y select-none overflow-hidden [perspective:1100px] active:cursor-grabbing sm:h-[360px]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      role="group"
      aria-label="Galeri produk — geser untuk memutar"
    >
      <div
        ref={stageRef}
        className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
        style={{ transform: `translateZ(-${radius}px)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute -left-16 -top-20 h-40 w-32 [backface-visibility:hidden] sm:-left-[4.5rem] sm:-top-24 sm:h-48 sm:w-36"
            style={{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-line bg-cream shadow-xl shadow-black/25">
              <Media
                src={img.src}
                alt={img.alt}
                fit="contain"
                position={img.pos}
                sizes="150px"
                zoom={false}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fade tepi ke latar navy */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28" />
    </div>
  );
}
