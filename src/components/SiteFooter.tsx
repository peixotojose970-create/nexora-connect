import React from "react";
import { Link } from "@tanstack/react-router";
import { SiteLogo } from "./SiteLogo";
import { ThemeSelector } from "./ThemeSelector";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-14 sm:py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Bloco Logo e Frase */}
        <div className="space-y-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
            aria-label="NEXORA Início"
          >
            <SiteLogo size={32} />
            <span className="font-extrabold text-lg tracking-tight text-zinc-950 dark:text-white flex items-center gap-1">
              NEXORA
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            </span>
          </Link>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-normal">
            Inteligência que faz empresas crescerem.
          </p>
        </div>

        {/* Links de Navegação, Seletor de Tema e Legais */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <ThemeSelector />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#inicio" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#como-funciona" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Como funciona
            </a>
            <span className="hidden sm:inline-block text-zinc-300 dark:text-zinc-700">|</span>
            <Link to="/termos" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/cookies" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
