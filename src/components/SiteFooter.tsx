import React from "react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 bg-white py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Bloco Logo e Frase */}
        <div className="space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
            aria-label="NEXORA Início"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-950 p-1.5 flex items-center justify-center">
              <img
                src="/nexora-logo.png"
                alt="Símbolo NEXORA"
                className="w-full h-full object-contain"
                width={32}
                height={32}
              />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-zinc-950 flex items-center gap-1">
              NEXORA
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            </span>
          </Link>
          <p className="text-sm text-zinc-600 font-normal">
            Inteligência que faz empresas crescerem.
          </p>
        </div>

        {/* Links de Navegação e Legais */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-600">
          <a href="#inicio" className="hover:text-zinc-950 transition-colors">
            Início
          </a>
          <a href="#servicos" className="hover:text-zinc-950 transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-zinc-950 transition-colors">
            Sobre
          </a>
          <a href="#como-funciona" className="hover:text-zinc-950 transition-colors">
            Como funciona
          </a>
          <span className="hidden sm:inline-block text-zinc-300">|</span>
          <Link to="/privacidade" className="hover:text-zinc-950 transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/termos" className="hover:text-zinc-950 transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
