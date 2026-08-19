import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  slideUp = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
  slideUp?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: visible ? 'translateY(0)' : slideUp ? 'translateY(30px)' : 'translateY(10px)',
        opacity: visible ? 1 : 0,
        transition: 'all 0.7s ease-out',
        transitionProperty: 'opacity, transform'
      }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
