"use client";

import { useEffect } from "react";

export default function ViewObserver() {
  useEffect(() => {
    const observed = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
          } else {
            // keep removal so animations replay when re-entering viewport
            el.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeAll = () => {
      document.querySelectorAll(".fade-on-view").forEach((el) => {
        if (!observed.has(el)) {
          observer.observe(el);
          observed.add(el);
        }
      });
    };

    observeAll();

    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
