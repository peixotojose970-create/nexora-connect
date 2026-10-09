import React, { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, FileText, Cookie } from "lucide-react";
import { SiteLogo } from "./SiteLogo";
import { ThemeSelector } from "./ThemeSelector";

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
    <div className="min-h-screen bg-white text-zinc-950 antialiased selection:bg-[#a8c6b8] selection:text-[#1e2c26] transition-colors duration-300 dark:bg-[#121817] dark:text-zinc-100">
      {/* Topbar Institucional Minimalista */}
      <header className="border-b border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md sticky top-0 z-40 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao início</span>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeSelector />
            <div className="flex items-center gap-2">
              <SiteLogo size={28} />
              <span className="font-bold text-sm tracking-[0.16em] text-zinc-950 dark:text-white">
                VELTRION
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        {/* Navegação entre páginas institucionais */}
        <nav
          aria-label="Navegação de Documentos Legais"
          className="flex flex-wrap gap-2 mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-4 text-xs font-medium"
        >
          <Link
            to="/termos"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            activeProps={{ className: "bg-blue-50 dark:bg-blue-950/50 border-[#2563EB] text-[#2563EB] font-semibold" }}
          >
            Termos de Uso
          </Link>
          <Link
            to="/privacidade"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            activeProps={{ className: "bg-blue-50 dark:bg-blue-950/50 border-[#2563EB] text-[#2563EB] font-semibold" }}
          >
            Política de Privacidade
          </Link>
          <Link
            to="/cookies"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            activeProps={{ className: "bg-blue-50 dark:bg-blue-950/50 border-[#2563EB] text-[#2563EB] font-semibold" }}
          >
            Política de Cookies
          </Link>
        </nav>

        {/* Badge e Título */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b9ccbf] bg-[#edf3ef] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#435e50] dark:border-[#456154] dark:bg-[#1f3028] dark:text-[#c4d6cb]">
          <IconComponent className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono mb-10">
          Última atualização: {lastUpdated}
        </p>

        {/* Corpo do Documento */}
        <div className="space-y-8 text-base leading-relaxed text-zinc-700 dark:text-zinc-300 [&_a]:text-[#435e50] [&_a]:dark:text-[#c4d6cb] [&_h2]:dark:text-white [&_h3]:dark:text-white [&_strong]:dark:text-white">
          {children}
        </div>

        {/* Rodapé da página institucional */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-zinc-900 text-white text-sm font-medium hover:bg-[#2563EB] transition-colors border border-transparent dark:border-zinc-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar ao site principal</span>
          </Link>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
            &copy; {new Date().getFullYear()} VELTRION. Todos os direitos reservados.
          </span>
        </div>
      </main>
    </div>
  );
}
