import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SmokeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function SmokeText({ text, className, delay = 0 }: SmokeTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const characters = text.split("");

  return (
    <h1
      ref={containerRef}
      className={cn(
        "relative flex flex-wrap leading-[1.05] text-white",
        className
      )}
      aria-label={text}
    >
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={cn(
            "relative inline-block whitespace-pre transition-all duration-700 ease-out",
            isVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-lg translate-y-4",
            "motion-reduce:opacity-100 motion-reduce:blur-0 motion-reduce:translate-y-0"
          )}
          style={{
            transitionDelay: isVisible ? `${delay + index * 80}ms` : "0ms",
          }}
        >
          {char}
          {isVisible && (
             <span 
              className="absolute left-0 bottom-0 -z-10 h-full w-full pointer-events-none motion-reduce:hidden"
              style={{
                animation: `smoke-reveal 2s forwards`,
                animationDelay: `${delay + index * 80}ms`,
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                filter: 'blur(12px)',
                opacity: 0,
              }}
             />
          )}
        </span>
      ))}
      
      {isVisible && (
        <div className="absolute -left-10 -bottom-10 pointer-events-none -z-10 motion-reduce:hidden">
          <div className="smoke-cloud smoke-cloud-1" style={{ animationDelay: `${delay}ms` }} />
          <div className="smoke-cloud smoke-cloud-2" style={{ animationDelay: `${delay + 300}ms` }} />
          <div className="smoke-cloud smoke-cloud-3" style={{ animationDelay: `${delay + 600}ms` }} />
        </div>
      )}

      <style>{`
        @keyframes smoke-reveal {
          0% { opacity: 0; transform: scale(0.5) translateY(10px); }
          30% { opacity: 0.8; transform: scale(1.2) translateY(-5px); }
          100% { opacity: 0; transform: scale(1.5) translateY(-20px); }
        }
        .smoke-cloud {
          position: absolute; bottom: 0; left: 0;
          width: 200px; height: 150px;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(247,148,29,0.05) 40%, transparent 70%);
          filter: blur(40px); border-radius: 50%; opacity: 0;
          animation: global-smoke 3s ease-out forwards;
        }
        .smoke-cloud-2 { width: 250px; height: 200px; filter: blur(50px); }
        .smoke-cloud-3 { width: 180px; height: 130px; filter: blur(35px); }
        @keyframes global-smoke {
          0% { opacity: 0; transform: translate(-20px, 20px) scale(0.8); }
          40% { opacity: 0.4; transform: translate(40px, -20px) scale(1.2); }
          100% { opacity: 0; transform: translate(100px, -60px) scale(1.5); }
        }
      `}</style>
    </h1>
  );
}
