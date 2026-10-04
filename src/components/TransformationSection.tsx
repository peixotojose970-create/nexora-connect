import React, { useCallback, useRef, useState } from "react";
import { ArrowLeftRight } from "lucide-react";

export interface TransformationSectionProps {
  id?: string;
  className?: string;
  beforeImage?: string;
  afterImage?: string;
}

const DEFAULT_BEFORE_IMAGE =
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80";
const DEFAULT_AFTER_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85";

export function TransformationSection({
  id = "antes-depois",
  className = "",
  beforeImage = DEFAULT_BEFORE_IMAGE,
  afterImage = DEFAULT_AFTER_IMAGE,
}: TransformationSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percentage = (clamped / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignora caso não suporte
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Ignora
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 lg:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden border-t border-zinc-100 dark:border-zinc-800/80 transition-colors duration-300 ${className}`}
      aria-label="Antes e depois da presença digital"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 block">
            TRANSFORMAÇÃO VISUAL
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight mb-3">
            Antes e depois.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
            Uma presença digital bem construída muda a percepção sobre uma empresa.
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            tabIndex={0}
            role="slider"
            aria-label="Comparador visual antes e depois"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={handleKeyDown}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-zinc-200/80 dark:border-zinc-800 cursor-ew-resize select-none bg-zinc-100 dark:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] touch-none"
          >
            {/* Camada DEPOIS */}
            <img
              src={afterImage}
              alt="Visualização Depois - presença digital moderna"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              loading="lazy"
            />

            {/* Camada ANTES */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none select-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImage}
                alt="Visualização Antes - presença digital desatualizada"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none select-none"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : "100%",
                  height: "100%",
                }}
                loading="lazy"
              />
            </div>

            {/* Divisor central */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 touch-none">
                <ArrowLeftRight className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
              </div>
            </div>

            {/* Rótulos ANTES e DEPOIS */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none z-10">
              <span className="inline-block px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                ANTES
              </span>
            </div>
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 pointer-events-none z-10">
              <span className="inline-block px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#2563EB]/95 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                DEPOIS
              </span>
            </div>

            {/* Dica de interação */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 pointer-events-none bg-zinc-950/75 backdrop-blur-xs text-white/90 px-3 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-medium whitespace-nowrap">
              Arraste para comparar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
