import React, { useEffect, useRef, useState } from "react";
import { Star, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface ReviewItem {
  id: string;
  clientName: string;
  company: string;
  comment: string;
  rating: number; // 1 to 5
  avatarUrl?: string;
  role?: string;
}

export interface ReviewsSectionProps {
  id?: string;
  /**
   * Coleção de depoimentos reais.
   * Se vazia (padrão), exibe apresentação institucional discreta
   * indicando que os primeiros projetos e feedbacks reais estão sendo construídos.
   */
  reviews?: ReviewItem[];
}

export function ReviewsSection({ id = "avaliacoes", reviews = [] }: ReviewsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const hasReviews = reviews && reviews.length > 0;

  return (
    <section
      id={id}
      ref={sectionRef}
      className="py-24 sm:py-32 bg-zinc-50/60 border-t border-zinc-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Cabeçalho da Seção */}
        <div
          className={`max-w-3xl mb-16 sm:mb-20 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-zinc-900 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Transparência &amp; Confiança
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12] mb-6">
            O que nossos clientes dizem.
          </h2>
          <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed">
            Avaliações e percepções de quem confiou na metodologia da NEXORA para transformar sua presença digital.
          </p>
        </div>

        {/* Conteúdo com base na disponibilidade de depoimentos REAIS */}
        {hasReviews ? (
          <>
            {/* Desktop Grid */}
            <div
              className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 delay-150 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {reviews.map((rev) => (
                <ReviewCard key={rev.id} review={rev} />
              ))}
            </div>

            {/* Mobile Carousel */}
            <div
              className={`md:hidden transition-all duration-700 delay-150 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent className="-ml-3">
                  {reviews.map((rev) => (
                    <CarouselItem key={rev.id} className="pl-3 basis-[90%] sm:basis-[80%]">
                      <ReviewCard review={rev} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Indicadores de slide e controles touch */}
              {count > 1 && (
                <div className="flex items-center justify-between mt-6 px-1">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: count }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentSlide === index ? "w-6 bg-[#2563EB]" : "w-1.5 bg-zinc-300"
                        }`}
                        aria-label={`Ir para depoimento ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => api?.scrollPrev()}
                      className="w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-50 active:scale-95"
                      aria-label="Depoimento anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => api?.scrollNext()}
                      className="w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-50 active:scale-95"
                      aria-label="Próximo depoimento"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Apresentação institucional discreta: compromisso com avaliações 100% autênticas */
          <div
            className={`transition-all duration-700 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-3xl bg-white border border-zinc-200/80 p-8 sm:p-12 lg:p-14 shadow-xs relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    Política de Transparência e Veracidade
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                    Primeiros projetos e feedbacks em construção ativa.
                  </h3>

                  <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                    Na NEXORA, temos o compromisso absoluto de publicar exclusivamente avaliações reais e auditáveis. Não utilizamos depoimentos fictícios nem notas inventadas.
                  </p>

                  <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                    Os primeiros cases e relatos de clientes serão integrados nesta área assim que os ciclos de entrega forem homologados.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                  <div className="w-full max-w-xs p-6 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-4">
                    <div className="flex items-center gap-1.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono font-medium">
                        Padrão de Qualidade
                      </div>
                      <div className="text-lg font-bold text-zinc-900 mt-0.5">
                        Foco na Experiência Real
                      </div>
                    </div>
                    <div className="pt-3 border-t border-zinc-200/60 flex items-center gap-2 text-xs text-zinc-500">
                      <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Estrutura pronta para depoimentos certificados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function ReviewCard({ review }: { review: ReviewItem }) {
  const initials = review.clientName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const ratingStars = Math.min(5, Math.max(1, Math.round(review.rating || 5)));

  return (
    <div className="h-full bg-white rounded-2xl p-7 border border-zinc-200/80 shadow-xs flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-5">
          {/* Estrelas visuais */}
          <div
            className="flex items-center gap-1 text-amber-400"
            aria-label={`Avaliação: ${ratingStars} de 5 estrelas`}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < ratingStars
                    ? "fill-amber-400 text-amber-400"
                    : "fill-zinc-100 text-zinc-200"
                }`}
              />
            ))}
          </div>
          <MessageSquareQuote className="w-5 h-5 text-zinc-300" aria-hidden="true" />
        </div>

        {/* Comentário */}
        <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      {/* Identificação do Cliente */}
      <div className="pt-5 border-t border-zinc-100 flex items-center gap-3.5">
        {review.avatarUrl ? (
          <img
            src={review.avatarUrl}
            alt={review.clientName}
            className="w-11 h-11 rounded-full object-cover border border-zinc-200"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-blue-50 text-[#2563EB] font-bold text-sm flex items-center justify-center border border-blue-100">
            {initials || "NX"}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="font-bold text-sm sm:text-base text-zinc-950 truncate">
            {review.clientName}
          </div>
          <div className="text-xs text-zinc-500 truncate">
            {review.role ? `${review.role} · ` : ""}
            <span className="font-medium text-zinc-700">{review.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
