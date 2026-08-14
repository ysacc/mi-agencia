import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Retardo en ms para escalonar elementos de una misma fila. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Aparición suave al hacer scroll.
 * No usa librerías extra y el CSS respeta `prefers-reduced-motion: reduce`
 * (en ese caso el contenido se muestra directamente, sin transición).
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) => {
  const ref = useRef<HTMLElement | null>(null);
  // Si el navegador no soporta IntersectionObserver, el contenido se muestra
  // desde el primer render (nunca se queda invisible).
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`cmp-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
