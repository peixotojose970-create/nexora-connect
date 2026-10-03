import React, { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, FileText, Cookie } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  badge: string;
  lastUpdated: string;
  icon?: "terms" | "privacy" | "cookies";
  children: ReactNode;
}

export function LegalLayout({
  title,
  badge,
  lastUpdated,
  icon = "terms",
  children,
}: LegalLayoutProps) {
  const IconComponent =
    icon === "privacy" ? Shield : icon === "cookies" ? Cookie : FileText;

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-[#2563EB] selection:text-white antialiased">
      {/* Topbar Institucional Minimalista */}
      <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao início</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-zinc-950 flex items-center justify-center p-1">
              <img
                src="/nexora-logo.png"
                alt="NEXORA"
                className="w-full h-full object-contain"
                width={28}
                height={28}
              />
            </div>
            <span className="font-extrabold text-sm tracking-tight text-zinc-950">
              NEXORA
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        {/* Navegação entre páginas institucionais */}
        <nav
          aria-label="Navegação de Documentos Legais"
          className="flex flex-wrap gap-2 mb-8 border-b border-zinc-100 pb-4 text-xs font-medium"
        >
          <Link
            to="/termos"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            activeProps={{ className: "bg-blue-50 border-[#2563EB] text-[#2563EB] font-semibold" }}
          >
            Termos de Uso
          </Link>
          <Link
            to="/privacidade"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            activeProps={{ className: "bg-blue-50 border-[#2563EB] text-[#2563EB] font-semibold" }}
          >
            Política de Privacidade
          </Link>
          <Link
            to="/cookies"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            activeProps={{ className: "bg-blue-50 border-[#2563EB] text-[#2563EB] font-semibold" }}
          >
            Política de Cookies
          </Link>
        </nav>

        {/* Badge e Título */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
          <IconComponent className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 font-mono mb-10">
          Última atualização: {lastUpdated}
        </p>

        {/* Corpo do Documento */}
        <div className="space-y-8 text-zinc-700 text-base leading-relaxed">
          {children}
        </div>

        {/* Rodapé da página institucional */}
        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-[#2563EB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar ao site principal</span>
          </Link>
          <span className="text-xs text-zinc-400 font-normal">
            &copy; 2026 NEXORA. Todos os direitos reservados.
          </span>
        </div>
      </main>
    </div>
  );
}
