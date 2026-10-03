import React, { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { REVIEWS_DATA, type ReviewData } from "@/data/reviews";

export interface ReviewsSectionProps {
  id?: string;
  className?: string;
  reviews?: ReviewData[];
  /**
   * Permite desativar a seção caso não haja feedbacks cadastrados
   * ou enquanto aguarda depoimentos reais.
   */
  enabled?: boolean;
}

export function ReviewsSection({
  id = "feedbacks",
  className = "",
  reviews = REVIEWS_DATA,
  enabled = true,
}: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  if (!enabled || !reviews || reviews.length === 0) {
    return null;
  }

  const total = reviews.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Carrossel AUTOMÁTICO com avanço lento (6s) e pausa ao passar o mouse
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, total, currentIndex]);

  // Suporte a toque / swipe no celular
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Deslizar para esquerda -> próximo
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Deslizar para direita -> anterior
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = reviews[currentIndex];
  const ratingStars = Math.min(5, Math.max(1, Math.round(current.nota || 5)));
  const initials = current.nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section
      id={id}
      className={`py-24 sm:py-32 bg-zinc-50/60 border-t border-zinc-100 relative overflow-hidden ${className}`}
      aria-label="Feedbacks e prova social"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 block">
              PROVA SOCIAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              O que nossos clientes dizem.
            </h2>
          </div>

          {/* Controles manuais discretos */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 hover:border-zinc-300 flex items-center justify-center text-zinc-800 transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 hover:border-zinc-300 flex items-center justify-center text-zinc-800 transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card do Carrossel com animações suaves de fade, slide e small scale */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden rounded-3xl bg-white border border-zinc-200/80 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            {/* Indicador de Exemplo claramente marcado para veracidade absoluta */}
            {current.isExemplo && (
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-[11px] font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                EXEMPLO DE DEPOIMENTO
              </div>
            )}

            <div
              key={current.id}
              className="transition-all duration-500 ease-out transform animate-in fade-in slide-in-from-right-4 zoom-in-95 flex flex-col justify-between min-h-[260px] sm:min-h-[220px]"
            >
              <div>
                {/* Estrelas com animação suave e ícone discreto */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="flex items-center gap-1.5 text-amber-400"
                    aria-label={`Avaliação: ${current.nota} de 5 estrelas`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 transition-all duration-300 ${
                          i < ratingStars
                            ? "fill-amber-400 text-amber-400 scale-100"
                            : "fill-zinc-100 text-zinc-200 scale-95"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs font-mono font-semibold text-zinc-500">
                      {current.nota.toFixed(1)}
                    </span>
                  </div>
                  <MessageSquareQuote className="w-7 h-7 text-zinc-200" aria-hidden="true" />
                </div>

                {/* Comentário */}
                <p className="text-lg sm:text-2xl text-zinc-800 font-normal leading-relaxed mb-8">
                  &ldquo;{current.comentario}&rdquo;
                </p>
              </div>

              {/* Informações da Pessoa / Negócio */}
              <div className="pt-6 border-t border-zinc-100 flex items-center gap-4">
                {current.avatarUrl ? (
                  <img
                    src={current.avatarUrl}
                    alt={current.nome}
                    className="w-13 h-13 rounded-full object-cover border border-zinc-200 shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-13 h-13 rounded-full bg-blue-50 text-[#2563EB] font-bold text-sm flex items-center justify-center border border-blue-100 shrink-0">
                    {initials || "NX"}
                  </div>
                )}

                <div className="min-w-0">
                  <div className="font-bold text-base sm:text-lg text-zinc-950 truncate">
                    {current.nome}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-500 truncate">
                    {current.cargo}
                    {current.empresa && (
                      <>
                        <span className="mx-1.5 text-zinc-300">&bull;</span>
                        <span className="font-medium text-zinc-700">{current.empresa}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores de slides (dots) para navegação direta */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((rev, idx) => (
              <button
                key={rev.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#2563EB]"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
