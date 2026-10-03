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

  // Pointer events (desktop mouse + touch em celulares)
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

  // Suporte a teclado para acessibilidade
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
      className={`py-24 sm:py-32 bg-white relative overflow-hidden border-t border-zinc-100 ${className}`}
      aria-label="Antes e depois da presença digital"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Cabeçalho enxuto: comparação entendida visualmente sem textos longos */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 block">
            TRANSFORMAÇÃO VISUAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-3">
            Antes e depois.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Uma presença digital bem construída muda a percepção sobre uma empresa.
          </p>
        </div>

        {/* Comparador Visual com Slider central por toque no mobile e mouse no desktop */}
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
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-zinc-200/80 cursor-ew-resize select-none bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] touch-none"
          >
            {/* Camada DEPOIS (imagem grande) */}
            <img
              src={afterImage}
              alt="Visualização Depois - presença digital moderna"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              loading="lazy"
            />

            {/* Camada ANTES (imagem grande cortada pelo slider) */}
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

            {/* Divisor / Slider central */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-zinc-900 shadow-xl border border-zinc-200 flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                <ArrowLeftRight className="w-4 h-4 text-zinc-800" />
              </div>
            </div>

            {/* Rótulos discretos ANTES e DEPOIS */}
            <div className="absolute top-4 left-4 pointer-events-none z-10">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-sm text-white text-xs font-semibold tracking-wider uppercase">
                ANTES
              </span>
            </div>
            <div className="absolute top-4 right-4 pointer-events-none z-10">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#2563EB]/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wider uppercase">
                DEPOIS
              </span>
            </div>

            {/* Dica discreta de interação */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none bg-zinc-950/70 backdrop-blur-sm text-white/90 px-3.5 py-1 rounded-full text-xs font-medium">
              Arraste para comparar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
