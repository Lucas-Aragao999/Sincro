import { useEffect, useRef, useState } from "react";

// Ambientes em que a animação não deve acontecer: o conteúdo já nasce visível.
function shouldSkipAnimation() {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return true;
  if (typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Revela um elemento quando ele entra na viewport (uma vez só).
// Base das animações de entrada da landing — sem biblioteca externa.
export function useReveal(skip = false) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(shouldSkipAnimation);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible || skip) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, skip]);

  return [ref, visible];
}
