import React from "react";
import { MessageCircle, Mail, Instagram, ArrowRight, ExternalLink, Sparkles, Phone } from "lucide-react";

export interface ContactInfoConfig {
  whatsappDisplay?: string;
  whatsappLink?: string;
  instagramHandle?: string;
  instagramLink?: string;
  emailDisplay?: string;
  emailLink?: string;
}

export interface ContactSectionProps {
  id?: string;
  config?: ContactInfoConfig;
}

const DEFAULT_CONFIG: Required<ContactInfoConfig> = {
  whatsappDisplay: "+55 (11) 99999-9999",
  whatsappLink:
    "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20NEXORA%20sobre%20solu%C3%A7%C3%B5es%20digitais.",
  instagramHandle: "@nexora.digital",
  instagramLink: "https://instagram.com",
  emailDisplay: "contato@nexora.digital",
  emailLink: "mailto:contato@nexora.digital",
};

export function ContactSection({ id = "contato", config = {} }: ContactSectionProps) {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };

  return (
    <section id={id} className="py-24 sm:py-32 bg-zinc-50 border-t border-zinc-200/70 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Cabeçalho da Seção de Contato */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Canais de Comunicação
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-3">
            Contato
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Canais diretos para tirar dúvidas, solicitar um orçamento ou agendar um diagnóstico digital.
          </p>
        </div>

        {/* Grid de Canais de Contato Diretos e Claros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card WhatsApp */}
          <a
            href={mergedConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-7 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-mono font-semibold text-zinc-400 block mb-1">
                Atendimento Imediato
              </span>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">WhatsApp</h3>
              <p className="text-sm text-zinc-600 font-mono mb-4">
                {mergedConfig.whatsappDisplay}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:translate-x-1 transition-transform">
              <span>Iniciar conversa</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Card Instagram */}
          <a
            href={mergedConfig.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-7 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-pink-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-mono font-semibold text-zinc-400 block mb-1">
                Redes Sociais
              </span>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Instagram</h3>
              <p className="text-sm text-zinc-600 font-mono mb-4">
                {mergedConfig.instagramHandle}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-pink-600 group-hover:translate-x-1 transition-all">
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* Card E-mail */}
          <a
            href={mergedConfig.emailLink}
            className="group p-7 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-blue-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-mono font-semibold text-zinc-400 block mb-1">
                Comunicação Formal
              </span>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">E-mail</h3>
              <p className="text-sm text-zinc-600 font-mono mb-4">
                {mergedConfig.emailDisplay}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:translate-x-1 transition-transform">
              <span>Enviar e-mail</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Bloco: Prefere falar diretamente? */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-zinc-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              <span>Contato Ágil</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              Prefere falar diretamente?
            </p>
            <p className="text-sm text-zinc-600">
              Inicie um atendimento sem intermediários e tire dúvidas em tempo real.
            </p>
          </div>

          <div>
            <a
              href={mergedConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
