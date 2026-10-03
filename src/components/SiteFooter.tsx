import React from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Instagram, Mail, ArrowUpRight, Sparkles } from "lucide-react";

interface SiteFooterProps {
  whatsappLink?: string;
  instagramLink?: string;
  emailLink?: string;
}

const DEFAULT_WHATSAPP =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20NEXORA%20sobre%20solu%C3%A7%C3%B5es%20digitais%20para%20minha%20empresa.";

export function SiteFooter({
  whatsappLink = DEFAULT_WHATSAPP,
  instagramLink = "https://instagram.com",
  emailLink = "mailto:contato@nexora.digital",
}: SiteFooterProps) {
  return (
    <footer className="border-t border-zinc-200/80 bg-white relative overflow-hidden">
      {/* Elemento de fundo geométrico sutil */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-100">
          {/* Coluna Marca e Frase */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
              aria-label="NEXORA Início"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-950 p-1.5 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/nexora-logo.png"
                  alt="Símbolo NEXORA"
                  className="w-full h-full object-contain"
                  width={36}
                  height={36}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-zinc-950 flex items-center gap-1.5">
                  NEXORA
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium -mt-0.5">
                  Soluções Digitais
                </span>
              </div>
            </Link>

            <p className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight leading-snug max-w-sm">
              &ldquo;Inteligência que faz empresas crescerem.&rdquo;
            </p>

            <p className="text-sm text-zinc-600 max-w-md leading-relaxed">
              Criamos sites, landing pages, cardápios digitais e conteúdos visuais para marcas que priorizam excelência de posicionamento.
            </p>
          </div>

          {/* Coluna Navegação */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Navegação
            </div>
            <nav className="grid grid-cols-2 gap-2 text-sm text-zinc-600">
              <a href="#inicio" className="hover:text-[#2563EB] transition-colors py-1">
                Início
              </a>
              <a href="#servicos" className="hover:text-[#2563EB] transition-colors py-1">
                Serviços
              </a>
              <a href="#como-funciona" className="hover:text-[#2563EB] transition-colors py-1">
                Como funciona
              </a>
              <a href="#sobre-nos" className="hover:text-[#2563EB] transition-colors py-1">
                Sobre nós
              </a>
              <a href="#transformacao" className="hover:text-[#2563EB] transition-colors py-1">
                Resultados
              </a>
              <a href="#contato" className="hover:text-[#2563EB] transition-colors py-1">
                Contato
              </a>
            </nav>
          </div>

          {/* Coluna Contato Direto */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Contato
            </div>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-zinc-700 hover:text-[#2563EB] transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-zinc-700 hover:text-[#2563EB] transition-colors group"
              >
                <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={emailLink}
                className="inline-flex items-center gap-2.5 text-zinc-700 hover:text-[#2563EB] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#2563EB] group-hover:scale-110 transition-transform" />
                <span className="font-medium">E-mail</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 NEXORA. Todos os direitos reservados.</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" title="Sistema online" />
          </div>

          {/* Links Legais */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/privacidade"
              className="hover:text-zinc-950 transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos"
              className="hover:text-zinc-950 transition-colors underline-offset-4 hover:underline"
            >
              Termos de Uso
            </Link>
            <Link
              to="/cookies"
              className="hover:text-zinc-950 transition-colors underline-offset-4 hover:underline"
            >
              Política de Cookies
            </Link>
          </div>

          {/* Pequeno elemento visual de fechamento */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100/80 border border-zinc-200/60 text-[11px] text-zinc-600 font-medium">
            <Sparkles className="w-3 h-3 text-[#2563EB]" />
            <span>Padrão NEXORA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
