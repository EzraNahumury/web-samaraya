"use client";

import { useState } from "react";
import type { Faq } from "@/lib/catalog";

/** Daftar FAQ dengan accordion (CSS grid-rows, hormati reduced-motion). */
export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 py-5 text-left"
            >
              <span className="font-display text-lg font-medium text-ink md:text-xl">
                {f.q}
              </span>
              <span
                aria-hidden
                className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 ${
                  isOpen ? "rotate-45 border-green bg-green text-white" : ""
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div className="accordion-panel" data-open={isOpen}>
              <div>
                <p className="max-w-2xl pb-6 text-[0.98rem] leading-7 text-ink-soft">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
