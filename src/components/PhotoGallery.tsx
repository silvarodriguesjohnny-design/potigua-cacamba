import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface Photo {
  url: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const titles = [
  "Caçamba Potigua",
  "Caçamba para obras",
  "Caçamba para reformas",
  "Caçamba Potigua Caçamba",
  "Caçamba Potigua",
  "Caçamba para obras",
  "Caçamba para reformas",
  "Caçamba Potigua Caçamba",
];

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Autoplay logic
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, isPaused, nextSlide, shouldReduceMotion]);

  const handleInteraction = () => {
    setIsPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Resume after 8 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handleInteraction();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      handleInteraction();
      nextSlide();
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">
              Conheça nossas caçambas
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
            <p className="mt-4 text-muted-foreground text-lg">
              Confira algumas das caçambas da Potigua Caçamba.
            </p>
          </div>
        </Reveal>

        <div 
          className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center perspective-[1200px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Galeria de fotos das caçambas"
        >
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            <AnimatePresence initial={false}>
              {photos.map((photo, index) => {
                // Calculate distance from active index for Coverflow effect
                let offset = index - activeIndex;
                
                // Handle circular offset
                if (offset > photos.length / 2) offset -= photos.length;
                if (offset < -photos.length / 2) offset += photos.length;

                const isActive = index === activeIndex;
                const absOffset = Math.abs(offset);
                
                // Only show a few slides for performance and visual clarity
                if (absOffset > 2 && !shouldReduceMotion) return null;
                // If reduced motion, only show active slide
                if (shouldReduceMotion && !isActive) return null;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-[280px] sm:w-[400px] lg:w-[500px] aspect-[4/3] cursor-pointer rounded-xl overflow-hidden shadow-2xl border border-border"
                    initial={false}
                    animate={{
                      x: shouldReduceMotion ? 0 : offset * (typeof window !== "undefined" && window.innerWidth < 640 ? 150 : 250),
                      scale: shouldReduceMotion ? 1 : 1 - absOffset * 0.15,
                      rotateY: shouldReduceMotion ? 0 : offset * -35,
                      z: shouldReduceMotion ? 0 : -absOffset * 250,
                      opacity: shouldReduceMotion ? (isActive ? 1 : 0) : 1 - absOffset * 0.3,
                      zIndex: 10 - absOffset,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    onClick={() => {
                      handleInteraction();
                      setActiveIndex(index);
                    }}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <p className="text-white font-display text-lg sm:text-xl uppercase">
                        {titles[index % titles.length]}
                      </p>
                      <div className="h-0.5 w-10 bg-primary mt-1" />
                    </div>

                    {!isActive && (
                      <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-8 pointer-events-none z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleInteraction();
                prevSlide();
              }}
              className="p-3 rounded-full bg-white/90 shadow-lg border border-border text-ink hover:bg-primary hover:text-white transition-all pointer-events-auto"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-nw w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleInteraction();
                nextSlide();
              }}
              className="p-3 rounded-full bg-white/90 shadow-lg border border-border text-ink hover:bg-primary hover:text-white transition-all pointer-events-auto"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleInteraction();
                  setActiveIndex(index);
                }}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1200 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}} />
    </section>
  );
}
