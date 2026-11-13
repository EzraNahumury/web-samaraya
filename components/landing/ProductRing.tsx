"use client";

import { type PointerEvent as ReactPointerEvent, useEffect, useRef } from "react";

export type Cover = { src: string; nama: string; tag?: string };

/**
 * Rak produk 3D (coverflow/ring) — cover = produk Samaraya. Auto-rotate + drag + hover-pause.
 * Murni komponen sendiri (tanpa dependensi/aset eksternal).
 */
export function ProductRing({ items }: { items: Cover[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rotRef = useRef(0);
  const velRef = useRef(0);
  const hoverRef = useRef(false);
  const dragRef = useRef(false);
  const lastXRef = useRef(0);

  useEffect(() => {
    const n = items.length;
    if (!n) return;
    let raf = 0;
    let prev = performance.now();
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = 360 / n;
    const render = (t: number) => {
      const dt = Math.min((t - prev) / 1000, 0.05);
      prev = t;
      if (!dragRef.current && !hoverRef.current && !reduce) rotRef.current += dt * 12;
      rotRef.current += velRef.current * dt;
      velRef.current *= 0.9;
      const root = rootRef.current;
      const w = root ? root.clientWidth : 700;
      const radius = Math.min(430, Math.max(230, w * 0.34));
      for (let i = 0; i < n; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;
        const theta = i * step - rotRef.current;
        const front = (Math.cos((theta * Math.PI) / 180) + 1) / 2; // 1 depan, 0 belakang
        const scale = 0.7 + front * 0.36;
        card.style.transform = `translate(-50%, -50%) rotateY(${theta}deg) translateZ(${radius}px) scale(${scale})`;
        card.style.zIndex = String(Math.round(front * 1000));
        card.style.opacity = (0.22 + front * 0.78).toFixed(3);
        card.style.filter = front < 0.5 ? `blur(${((0.5 - front) * 5).toFixed(1)}px)` : "none";
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [items.length]);

  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragRef.current = true;
    lastXRef.current = e.clientX;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    rotRef.current -= dx * 0.35;
    velRef.current = -dx * 4;
  };
  const onUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div
      ref={rootRef}
      className="relative h-full w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
      style={{ perspective: "1500px", pointerEvents: "auto" }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onMouseEnter={() => {
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
      }}
    >
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {items.map((it, i) => (
          <div
            key={`${it.src}-${i}`}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="absolute top-1/2 left-1/2 h-[clamp(190px,21vw,290px)] w-[clamp(140px,15vw,210px)] overflow-hidden rounded-[14px] border border-white/15 bg-[#161618] shadow-[0_24px_60px_-16px_rgba(0,0,0,.85)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* biome-ignore lint/performance/noImgElement: cover 3D butuh <img> langsung */}
            <img
              src={it.src}
              alt={it.nama}
              draggable={false}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-8">
              <p className="truncate text-[13px] font-medium text-white">{it.nama}</p>
              {it.tag && <p className="text-[11px] text-white/65">{it.tag}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
