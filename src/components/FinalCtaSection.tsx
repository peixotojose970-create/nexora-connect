import React from "react";
import { MessageCircle, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export interface FinalCtaSectionProps {
  id?: string;
  whatsappLink?: string;
}

const DEFAULT_WHATSAPP =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20NEXORA%20sobre%20solu%C3%A7%C3%B5es%20digitais%20para%20minha%20empresa.";

export function FinalCtaSection({
  id = "cta-final",
  whatsappLink = DEFAULT_WHATSAPP,
}: FinalCtaSectionProps) {
  return (
    <section id={id} className="py-28 sm:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl bg-zinc-950 p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl border border-zinc-800/80">
          {/* Composição visual elegante de apoio em camadas de profundidade */}
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#2563EB]/25 via-indigo-600/15 to-transparent rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-gradient-to-tr from-blue-900/20 via-zinc-800/20 to-transparent rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Malha sutil de grid corporativo em SVG */}
          <svg
            className="absolute inset-0 w-full h-full stroke-white/[0.04] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="cta-grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 40V.5H40" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#cta-grid-pattern)" />
          </svg>

          {/* Conteúdo com espaçamento generoso e composição visual de apoio ao lado */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Bloco de Mensagem Principal */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-8 backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Atendimento &amp; Diagnóstico</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                Vamos melhorar a presença digital da sua empresa?
              </h2>

              <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal mb-10 max-w-xl">
                Conte o que sua empresa precisa e vamos conversar sobre a solução mais adequada.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] group"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300" />
                  <span>Falar com a NEXORA</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="text-xs text-zinc-400 flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atendimento rápido via WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Composição visual elegante de apoio */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative p-7 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    NEXORA &bull; Digital Core
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                    <div className="text-[11px] font-mono uppercase text-blue-400 font-bold mb-1">
                      01 &bull; Diagnóstico
                    </div>
                    <p className="text-xs text-zinc-300">
                      Mapeamento de gargalos de comunicação, interface e percepção de marca.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                    <div className="text-[11px] font-mono uppercase text-blue-400 font-bold mb-1">
                      02 &bull; Estratégia Visual
                    </div>
                    <p className="text-xs text-zinc-300">
                      Construção de presença moderna, rápida e de alta credibilidade corporativa.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-zinc-900/60 border border-blue-500/20 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-400">
                        Disponibilidade
                      </div>
                      <div className="text-xs font-semibold text-white">
                        Consultoria Direta
                      </div>
                    </div>
                    <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
