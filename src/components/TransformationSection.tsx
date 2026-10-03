import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowLeftRight,
  CheckCircle2,
  Columns2,
  Layers,
  Maximize2,
  Sliders,
  Sparkles,
} from "lucide-react";

/**
 * Estrutura extensível para cases futuros da NEXORA:
 * Permite trocar a demonstração conceitual por um case de cliente real
 * com campos padronizados: cliente, problema, solução, resultado e imagens antes/depois.
 */
export interface TransformationCaseData {
  id: string;
  isRealCase: boolean; // false = demonstração de metodologia / true = case verificado
  client?: string;
  problem?: string;
  solution?: string;
  result?: string;
  businessName: string;
  businessSegment: string;
  before: {
    label: string;
    image: string;
    points: string[];
  };
  after: {
    label: string;
    image: string;
    points: string[];
  };
}

export interface TransformationSectionProps {
  id?: string;
  className?: string;
  beforeImage?: string;
  afterImage?: string;
  currentCase?: TransformationCaseData;
}

// Case padrão configurado conforme diretrizes solicitadas
const DEFAULT_DEMO_CASE: TransformationCaseData = {
  id: "demo-transformation",
  isRealCase: false,
  businessName: "Studio Forma Arquitetura",
  businessSegment: "Escritório de Arquitetura & Interiores",
  problem:
    "Empresa com projetos de altíssimo padrão, porém com presença digital desatualizada, gerando perda imediata de percepção de valor.",
  solution:
    "Reestruturação visual completa, fotografia alinhada ao posicionamento premium, arquitetura de informação limpa e navegação mobile impecável.",
  result:
    "Percepção corporativa de alto padrão restabelecida com comunicação clara e experiência profissional.",
  before: {
    label: "ANTES",
    image: "", // suporte para override de beforeImage
    points: [
      "site desorganizado",
      "identidade visual inconsistente",
      "comunicação confusa",
      "imagens ruins",
      "informações difíceis de encontrar",
      "experiência ruim no celular",
    ],
  },
  after: {
    label: "DEPOIS",
    image: "", // suporte para override de afterImage
    points: [
      "identidade visual organizada",
      "site profissional",
      "comunicação clara",
      "imagens melhores",
      "informações bem organizadas",
      "experiência mobile melhor",
    ],
  },
};

const VISUAL_BENEFITS = [
  {
    title: "Mais clareza",
    description: "Comunicação objetiva onde o visitante entende o valor do seu negócio em segundos.",
  },
  {
    title: "Mais organização",
    description: "Estrutura visual lógica com hierarquia de informações precisa e fluida.",
  },
  {
    title: "Melhor experiência",
    description: "Navegação ágil, agradável e perfeitamente adaptada para telas de celulares e desktops.",
  },
  {
    title: "Mais profissionalismo",
    description: "Acabamento de alto padrão que transmite solidez, cuidado e credibilidade imediata.",
  },
];

type ViewMode = "slider" | "side-by-side" | "split";

export function TransformationSection({
  id = "transformacao",
  className = "",
  beforeImage,
  afterImage,
  currentCase = DEFAULT_DEMO_CASE,
}: TransformationSectionProps) {
  // Controle do slider arrastável
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<ViewMode>("slider");
  const [splitTab, setSplitTab] = useState<"before" | "after">("after");

  // Animação ao entrar na tela
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showDivider, setShowDivider] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      setShowDivider(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          const timer = setTimeout(() => setShowDivider(true), 500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.15 }
    );

    const target = sectionRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // Lógica de cálculo da posição do slider (0 a 100%)
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percentage = (clamped / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  // Handlers para mouse e pointer
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
        // Ignora caso já liberado
      }
    }
  };

  // Suporte para teclas de seta no slider (acessibilidade)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  const activeBeforeImage = beforeImage || currentCase.before.image;
  const activeAfterImage = afterImage || currentCase.after.image;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-28 sm:py-36 bg-zinc-50/70 border-t border-zinc-100 relative overflow-hidden ${className}`}
      aria-label="Transformação visual Antes e Depois"
    >
      {/* Decoração sutil de luz */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-100/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ==================================================
            TÍTULO & INTRODUÇÃO
            Animação: Título aparece primeiro
            ================================================== */}
        <div
          className={`max-w-3xl mx-auto text-center mb-14 sm:mb-18 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-xs font-semibold text-zinc-800 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Transformação Visual</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            <span className="text-zinc-500 font-normal">Antes & Depois</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] mb-6">
            &ldquo;Quando a presença digital muda, a percepção também muda.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Uma empresa pode ter um ótimo produto e ainda assim transmitir uma imagem
            desorganizada. A <strong>NEXORA</strong> trabalha para transformar essa
            apresentação.
          </p>

          {/* Contexto do case / demonstração conceitual preparada para cases reais */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100/90 border border-zinc-200/60 font-medium">
              <span>Exemplo demonstrativo:</span>
              <strong className="text-zinc-800">{currentCase.businessName}</strong>
              <span className="text-zinc-400">({currentCase.businessSegment})</span>
            </span>
            {currentCase.isRealCase && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium text-[11px]">
                <CheckCircle2 className="w-3 h-3" />
                Case Verificado
              </span>
            )}
          </div>
        </div>

        {/* ==================================================
            CONTROLES DE VISUALIZAÇÃO
            Slider Arrastável | Lado a Lado | Divisão Visual
            ================================================== */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              Visualização:
            </span>
            <div className="inline-flex p-1 bg-white border border-zinc-200 rounded-xl shadow-xs text-xs font-medium">
              <button
                type="button"
                onClick={() => setViewMode("slider")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "slider"
                    ? "bg-zinc-950 text-white shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
                title="Slider arrastável interativo"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Slider Arrastável</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("side-by-side")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "side-by-side"
                    ? "bg-zinc-950 text-white shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
                title="Comparação lado a lado"
              >
                <Columns2 className="w-3.5 h-3.5" />
                <span>Lado a Lado</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("split")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "split"
                    ? "bg-zinc-950 text-white shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
                title="Divisão e alternância rápida"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Divisão Visual</span>
              </button>
            </div>
          </div>

          {/* Dica de interação do slider */}
          {viewMode === "slider" && (
            <div className="text-xs text-zinc-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span>Arraste o divisor ou toque na imagem para comparar</span>
            </div>
          )}
        </div>

        {/* ==================================================
            COMPONENTE VISUAL GRANDE DE COMPARAÇÃO
            O mesmo negócio aparece nos dois lados
            ================================================== */}
        {viewMode === "slider" && (
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
            }`}
          >
            {/* Moldura de tela estilo browser corporativo premium */}
            <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-2xl overflow-hidden">
              {/* Barra superior de janela de navegador */}
              <div className="bg-zinc-900 px-5 py-3.5 flex items-center justify-between border-b border-zinc-800 text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline-block">
                    {currentCase.businessName.toLowerCase().replace(/\s+/g, "")}.com.br
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-medium">
                    {Math.round(sliderPos)}% Revelado
                  </span>
                  <div className="hidden sm:flex items-center gap-1.5 text-zinc-400">
                    <span className="text-rose-400 font-medium">Antes</span>
                    <span>vs</span>
                    <span className="text-blue-400 font-medium">Depois</span>
                  </div>
                </div>
              </div>

              {/* Área do visualizador interativo com slider */}
              <div
                ref={containerRef}
                tabIndex={0}
                role="slider"
                aria-label="Controle de antes e depois"
                aria-valuenow={Math.round(sliderPos)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={handleKeyDown}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="relative h-[480px] sm:h-[580px] lg:h-[640px] select-none touch-none cursor-ew-resize overflow-hidden bg-zinc-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2563EB]/40"
              >
                {/* CAMADA DO DEPOIS (Fundo total, revelada à direita) */}
                <div className="absolute inset-0 w-full h-full">
                  <VisualStateMockup
                    mode="after"
                    businessName={currentCase.businessName}
                    imageUrl={activeAfterImage}
                  />
                  {/* Badge DEPOIS */}
                  <div className="absolute top-6 right-6 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-950/90 text-white border border-blue-500/40 text-xs font-bold shadow-lg tracking-wider uppercase backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      DEPOIS &bull; NEXORA
                    </span>
                  </div>
                </div>

                {/* CAMADA DO ANTES (Clipada de acordo com o sliderPos) */}
                <div
                  className="absolute inset-0 h-full overflow-hidden"
                  style={{
                    width: `${sliderPos}%`,
                    transition: isDragging ? "none" : "width 180ms ease-out",
                  }}
                >
                  <div
                    className="absolute inset-0 h-full"
                    style={{
                      width: containerRef.current
                        ? `${containerRef.current.clientWidth}px`
                        : "100%",
                      minWidth: "100%",
                    }}
                  >
                    <VisualStateMockup
                      mode="before"
                      businessName={currentCase.businessName}
                      imageUrl={activeBeforeImage}
                    />
                  </div>

                  {/* Badge ANTES */}
                  <div className="absolute top-6 left-6 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-950/90 text-zinc-300 border border-zinc-700 text-xs font-bold shadow-lg tracking-wider uppercase backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      ANTES
                    </span>
                  </div>
                </div>

                {/* DIVISOR ARRASTÁVEL COM TRANSIÇÃO SUAVE
                    Animação: divisor aparece por último */}
                <div
                  className={`absolute top-0 bottom-0 z-30 pointer-events-none transition-opacity duration-700 ${
                    showDivider ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: `${sliderPos}%`,
                    transform: "translateX(-50%)",
                    transition: isDragging ? "none" : "left 180ms ease-out, opacity 700ms ease-out",
                  }}
                >
                  {/* Linha vertical com brilho */}
                  <div className="w-[3px] h-full bg-white shadow-[0_0_12px_rgba(37,99,235,0.7)] mx-auto relative">
                    {/* Alça central de arrasto */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 -left-[22px] w-12 h-12 rounded-full bg-white text-zinc-950 border-2 border-[#2563EB] shadow-2xl flex items-center justify-center transition-transform duration-150 ${
                        isDragging ? "scale-110 ring-4 ring-[#2563EB]/30" : "hover:scale-105"
                      }`}
                    >
                      <ArrowLeftRight className="w-4 h-4 text-zinc-900" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra inferior de status e navegação do slider */}
              <div className="bg-zinc-900/95 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 text-xs text-zinc-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <strong className="text-zinc-200">Antes:</strong> Imagem desorganizada
                  </span>
                  <span className="text-zinc-600 hidden sm:inline">&bull;</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <strong className="text-zinc-200">Depois:</strong> Presença digital premium
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  Compatível com toque mobile e teclado (setas &larr; &rarr;)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODO LADO A LADO */}
        {viewMode === "side-by-side" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card ANTES */}
            <div className="bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden flex flex-col">
              <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between border-b border-zinc-800 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="font-bold text-sm tracking-wider uppercase">ANTES</span>
                </div>
                <span className="text-xs text-zinc-400">Versão Desorganizada</span>
              </div>
              <div className="h-[380px] sm:h-[460px] relative overflow-hidden bg-zinc-950">
                <VisualStateMockup
                  mode="before"
                  businessName={currentCase.businessName}
                  imageUrl={activeBeforeImage}
                />
              </div>
            </div>

            {/* Card DEPOIS */}
            <div className="bg-white rounded-3xl border-2 border-[#2563EB]/40 shadow-xl overflow-hidden flex flex-col">
              <div className="bg-zinc-950 px-6 py-4 flex items-center justify-between border-b border-zinc-800 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                  <span className="font-bold text-sm tracking-wider uppercase">DEPOIS &bull; NEXORA</span>
                </div>
                <span className="text-xs text-blue-400 font-semibold">Transformação Concluída</span>
              </div>
              <div className="h-[380px] sm:h-[460px] relative overflow-hidden bg-zinc-950">
                <VisualStateMockup
                  mode="after"
                  businessName={currentCase.businessName}
                  imageUrl={activeAfterImage}
                />
              </div>
            </div>
          </div>
        )}

        {/* MODO DIVISÃO VISUAL / TABS */}
        {viewMode === "split" && (
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-2xl overflow-hidden">
            <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSplitTab("before")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                    splitTab === "before"
                      ? "bg-rose-500 text-white shadow-md"
                      : "bg-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  Ver Antes
                </button>
                <button
                  type="button"
                  onClick={() => setSplitTab("after")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                    splitTab === "after"
                      ? "bg-[#2563EB] text-white shadow-md"
                      : "bg-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  Ver Depois (NEXORA)
                </button>
              </div>
              <span className="text-xs text-zinc-400 hidden sm:inline">
                Alternância com transição suave
              </span>
            </div>

            <div className="h-[440px] sm:h-[540px] relative overflow-hidden bg-zinc-950 transition-opacity duration-300">
              {splitTab === "before" ? (
                <VisualStateMockup
                  mode="before"
                  businessName={currentCase.businessName}
                  imageUrl={activeBeforeImage}
                />
              ) : (
                <VisualStateMockup
                  mode="after"
                  businessName={currentCase.businessName}
                  imageUrl={activeAfterImage}
                />
              )}
            </div>
          </div>
        )}

        {/* ==================================================
            COMPARATIVO DETALHADO DOS 6 PONTOS
            Animação: Antes entra à esquerda, Depois entra à direita
            ================================================== */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BLOCO ANTES */}
          <div
            className={`bg-white rounded-2xl p-7 sm:p-9 border border-rose-100 shadow-sm transition-all duration-700 delay-300 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center justify-between pb-5 border-b border-zinc-100 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                  Antes da Transformação
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700">
                Padrão Amador
              </span>
            </div>

            <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
              Principais pontos identificados que prejudicavam a percepção do mesmo negócio:
            </p>

            <ul className="space-y-3.5">
              {currentCase.before.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-zinc-700 font-medium bg-rose-50/40 p-3 rounded-xl border border-rose-100/60"
                >
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="capitalize">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOCO DEPOIS */}
          <div
            className={`bg-white rounded-2xl p-7 sm:p-9 border border-blue-100 shadow-sm transition-all duration-700 delay-400 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center justify-between pb-5 border-b border-zinc-100 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                  Depois da NEXORA
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#2563EB]">
                Padrão Profissional
              </span>
            </div>

            <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
              Solução digital implementada com foco em excelência e confiança imediata:
            </p>

            <ul className="space-y-3.5">
              {currentCase.after.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-zinc-900 font-medium bg-blue-50/40 p-3 rounded-xl border border-blue-100/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="capitalize">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ==================================================
            RESULTADOS: ÁREA DE BENEFÍCIOS VISUAIS
            Mais clareza, Mais organização, Melhor experiência, Mais profissionalismo
            (Sem porcentagens falsas, sem números inventados, sem falar em aumento de vendas)
            ================================================== */}
        <div className="mt-16 sm:mt-24 pt-14 border-t border-zinc-200/80">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#2563EB] font-bold">
              Impacto Visual
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mt-2">
              Resultados da Transformação Digital
            </h3>
            <p className="text-sm text-zinc-600 mt-2">
              Benefícios perceptíveis que elevam a autoridade da sua marca desde o primeiro clique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VISUAL_BENEFITS.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] font-bold text-sm mb-4">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-950 mb-2">
                    &ldquo;{benefit.title}&rdquo;
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Nota ética de conformidade e integridade */}
          <div className="mt-8 text-center">
            <p className="text-[11px] text-zinc-400">
              Demonstração visual do método NEXORA. Casos com métricas reais são compartilhados exclusivamente mediante autorização formal do cliente parceiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Componente visual do Mockup do Website (Antes e Depois do mesmo negócio)
 * Suporta imagem externa caso fornecida (props beforeImage / afterImage),
 * ou renderiza um mockup ultra realista e rico em detalhes do mesmo negócio (Studio Forma Arquitetura).
 */
interface VisualStateMockupProps {
  mode: "before" | "after";
  businessName: string;
  imageUrl?: string;
}

function VisualStateMockup({ mode, businessName, imageUrl }: VisualStateMockupProps) {
  if (imageUrl) {
    return (
      <div className="w-full h-full relative">
        <img
          src={imageUrl}
          alt={`Visualização ${mode === "before" ? "Antes" : "Depois"} do site`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Renderização de alta fidelidade visual do mesmo negócio nos dois estados:
  if (mode === "before") {
    return (
      <div className="w-full h-full bg-[#e8e4dc] text-zinc-800 p-4 sm:p-8 font-sans overflow-hidden flex flex-col justify-between relative select-none">
        {/* Banner desorganizado e cores conflitantes */}
        <div className="bg-[#b32b2b] text-white px-3 py-1.5 text-center text-xs font-bold tracking-wide">
          *** ATENÇÃO: SITE EM CONSTRUÇÃO - LIGUE JÁ PARA ORÇAMENTOS ***
        </div>

        {/* Header desalinhado com logotipo genérico e menu confuso */}
        <div className="mt-3 bg-[#d9d2c5] p-3 border-2 border-dashed border-zinc-400 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-700 text-white font-serif flex items-center justify-center text-sm font-bold">
              SF
            </div>
            <div>
              <div className="text-sm font-bold text-[#8b1e1e] font-serif uppercase">
                {businessName}
              </div>
              <div className="text-[9px] text-zinc-500">
                Construções e Reformas em Geral
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] underline text-blue-900 font-serif">
            <span>[Home]</span>
            <span>[Quem Somos]</span>
            <span>[Nossos Serviços]</span>
            <span>[Galeria 2012]</span>
            <span>[Contato/Email]</span>
          </div>
        </div>

        {/* Conteúdo caótico e desorganizado */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 flex-1">
          <div className="sm:col-span-2 bg-[#f4efe6] p-4 border border-zinc-300 flex flex-col justify-between">
            <div>
              <span className="text-[10px] bg-yellow-300 text-black px-1 font-mono">
                BEM-VINDO AO NOSSO WEBSITE
              </span>
              <h4 className="text-base sm:text-lg font-bold text-zinc-900 font-serif mt-2">
                Qualidade e Tradição na sua Obra
              </h4>
              <p className="text-xs text-zinc-600 mt-2 line-clamp-3">
                Trabalhamos com projetos residenciais e comerciais há muitos anos no mercado. Entre em contato preenchendo o formulário abaixo ou aguarde nosso atendente responder pelo fax.
              </p>
            </div>

            {/* Imagens ruins / esticadas */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="h-20 bg-zinc-400/80 border border-zinc-500 flex items-center justify-center text-[10px] text-zinc-100 p-1 text-center">
                [foto_obra_baixa_resolucao.jpg]
              </div>
              <div className="h-20 bg-zinc-400/80 border border-zinc-500 flex items-center justify-center text-[10px] text-zinc-100 p-1 text-center">
                [planta_desalinhada_sem_escala.png]
              </div>
            </div>
          </div>

          {/* Barra lateral confusa */}
          <div className="bg-[#dfd8cc] p-3 border border-zinc-300 flex flex-col gap-2 text-xs">
            <div className="bg-[#8b1e1e] text-white p-1 text-center font-bold text-[11px]">
              HORÁRIO DE ATENDIMENTO
            </div>
            <div className="text-[10px] text-zinc-700">
              Segunda a Sexta das 08h30 às 17h15. Não atendemos aos finais de semana.
            </div>
            <div className="mt-auto p-2 bg-yellow-100 border border-yellow-400 text-[9px] text-zinc-700">
              &#9888; Não otimizado para celulares. Recomendado 1024x768.
            </div>
          </div>
        </div>

        {/* Rodapé desorganizado */}
        <div className="bg-zinc-800 text-zinc-400 p-2 text-center text-[9px] font-mono">
          Copyright 2014 - Todos os direitos reservados - Tel: (11) 3333-0000 / Ramal 4
        </div>
      </div>
    );
  }

  // DEPOIS: Design moderno, minimalista, corporativo de alto nível do MESMO negócio
  return (
    <div className="w-full h-full bg-zinc-950 text-white p-6 sm:p-10 font-sans overflow-hidden flex flex-col justify-between relative select-none">
      {/* Imagem de fundo editorial de arquitetura com overlay sofisticado */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40 pointer-events-none" />

      {/* Header moderno da nova versão */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center font-bold text-white text-sm shadow-md">
            SF
          </div>
          <div>
            <div className="text-sm font-extrabold tracking-tight text-white uppercase">
              {businessName}
            </div>
            <div className="text-[10px] text-zinc-400 tracking-wider">
              Arquitetura Contemporânea & Interiores
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-xs text-zinc-300 font-medium">
          <span className="text-white hover:text-[#2563EB] transition-colors">Projetos</span>
          <span className="hover:text-white transition-colors">Metodologia</span>
          <span className="hover:text-white transition-colors">Sobre</span>
          <span className="hover:text-white transition-colors">Publicações</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md">
            <span>Iniciar Projeto</span>
          </span>
        </div>
      </div>

      {/* Hero central do site redesenhado */}
      <div className="relative z-10 my-auto py-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-medium text-zinc-300 mb-4 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          Arquitetura que Transforma Espaços
        </div>

        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Espaços de alta relevância com estética atemporal e rigor técnico.
        </h3>

        <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed max-w-xl">
          Desenvolvemos residências e sedes corporativas com precisão geométrica, conforto ambiental e gestão executiva completa.
        </p>

        {/* Galeria de miniaturas de projetos limpa */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="h-16 sm:h-20 rounded-xl overflow-hidden bg-zinc-800/80 border border-white/10 relative group">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop"
              alt="Projeto Casa Jardim"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-1.5">
              <span className="text-[9px] font-semibold text-white">Casa Jardim</span>
            </div>
          </div>

          <div className="h-16 sm:h-20 rounded-xl overflow-hidden bg-zinc-800/80 border border-white/10 relative group">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop"
              alt="Edifício Horizon"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-1.5">
              <span className="text-[9px] font-semibold text-white">Edifício Horizon</span>
            </div>
          </div>

          <div className="h-16 sm:h-20 rounded-xl overflow-hidden bg-zinc-800/80 border border-white/10 relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&auto=format&fit=crop"
              alt="Villa Branca"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-1.5">
              <span className="text-[9px] font-semibold text-white">Villa Branca</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé moderno e limpo */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-zinc-400">
        <div className="flex items-center gap-4">
          <span>São Paulo &bull; Curitiba &bull; Lisboa</span>
          <span className="text-zinc-600 hidden sm:inline">&bull;</span>
          <span className="text-zinc-300 hidden sm:inline">Projetos Executivos Certificados</span>
        </div>
        <div className="flex items-center gap-2 text-white font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Atendimento Direto</span>
        </div>
      </div>
    </div>
  );
}
