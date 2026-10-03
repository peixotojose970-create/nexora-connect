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

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percentage = (clamped / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
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
      className={`py-24 sm:py-32 bg-white relative overflow-hidden ${className}`}
      aria-label="Antes e depois da presença digital"
    >
      {/* Elemento de fundo geométrico discreto */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg
          className="absolute -top-12 right-0 w-[500px] h-[500px] text-zinc-100/70"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M50 200 C 120 120, 280 280, 350 200" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Antes e depois.
          </h2>
          <p className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed">
            Uma presença digital bem construída muda a percepção sobre uma empresa.
          </p>
        </div>

        {/* Comparador Visual Grande com Slider */}
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
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-zinc-200/80 cursor-ew-resize select-none bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            {/* Camada DEPOIS (Fundo Total) */}
            <img
              src={afterImage}
              alt="Visualização Depois - presença digital moderna"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* Camada ANTES (Cortada pelo Slider) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImage}
                alt="Visualização Antes - presença digital desatualizada"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : "100%",
                  height: "100%",
                }}
                loading="lazy"
              />
            </div>

            {/* Linha Divisória do Slider */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Botão de Controle Central */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-zinc-900 shadow-xl border border-zinc-200 flex items-center justify-center transition-transform hover:scale-110">
                <ArrowLeftRight className="w-4 h-4 text-zinc-800" />
              </div>
            </div>

            {/* Rótulos Discretos ANTES | DEPOIS */}
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

            {/* Instrução sutil na base */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none bg-zinc-950/60 backdrop-blur-sm text-white/90 px-3.5 py-1 rounded-full text-xs font-medium">
              Arraste para comparar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
