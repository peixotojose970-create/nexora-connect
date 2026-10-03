import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Globe,
  Layers,
  LayoutTemplate,
  Menu,
  MessageCircle,
  Palette,
  PhoneCall,
  Sparkles,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXORA | Soluções Digitais para Empresas" },
      {
        name: "description",
        content:
          "Criação de sites de alta conversão, landing pages, cardápios digitais, conteúdo visual e materiais de divulgação que elevam a percepção do seu negócio.",
      },
      { property: "og:title", content: "NEXORA | Soluções Digitais para Empresas" },
      {
        property: "og:description",
        content:
          "Seu negócio pode ser percebido de uma forma muito melhor. Criamos sites, landing pages, cardápios digitais e conteúdos visuais profissionais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NexoraLandingPage,
});

const WHATSAPP_LINK =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20NEXORA%20sobre%20solu%C3%A7%C3%B5es%20digitais%20para%20minha%20empresa.";

const SERVICES_LIST = [
  {
    tag: "01",
    name: "Sites Institucionais",
    desc: "Estruturas modernas, rápidas e orientadas à credibilidade e conversão corporativa.",
    badge: "Alta Performance",
    icon: Globe,
  },
  {
    tag: "02",
    name: "Landing Pages",
    desc: "Páginas focadas em campanhas, lançamentos e geração contínua de leads qualificados.",
    badge: "Foco em Vendas",
    icon: LayoutTemplate,
  },
  {
    tag: "03",
    name: "Cardápios Digitais",
    desc: "Experiências fluidas para restaurantes e bares, com navegação ágil e visual apetitoso.",
    badge: "Mobile First",
    icon: UtensilsCrossed,
  },
  {
    tag: "04",
    name: "Conteúdo Visual",
    desc: "Direção de arte editorial, fotografias de produtos e artes com padrão premium.",
    badge: "Design Editorial",
    icon: Palette,
  },
  {
    tag: "05",
    name: "Materiais de Divulgação",
    desc: "Apresentações comerciais, catálogos, mídias sociais e peças gráficas estratégicas.",
    badge: "Identidade Forte",
    icon: Layers,
  },
];

function NexoraLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-[#2563EB] selection:text-white antialiased">
      {/* ==================================================
          HEADER
          ================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100 py-3.5"
            : "bg-white border-b border-zinc-100/60 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo NEXORA à esquerda */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
            aria-label="NEXORA Início"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <img
                src="/nexora-logo.png"
                alt="Símbolo NEXORA"
                className="w-full h-full object-contain"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-zinc-950 flex items-center gap-1.5">
                NEXORA
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium -mt-1 hidden sm:block">
                Digital Studio
              </span>
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-zinc-600">
            <a
              href="#inicio"
              className="text-zinc-950 transition-colors hover:text-[#2563EB]"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="hover:text-zinc-950 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#como-funciona"
              className="hover:text-zinc-950 transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#sobre-nos"
              className="hover:text-zinc-950 transition-colors"
            >
              Sobre nós
            </a>
            <a
              href="#resultados"
              className="hover:text-zinc-950 transition-colors"
            >
              Resultados
            </a>
            <a
              href="#contato"
              className="hover:text-zinc-950 transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Botão de Contato Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-[#2563EB] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar com a NEXORA</span>
            </a>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
              aria-label="WhatsApp da NEXORA"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Overlay */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[460px] opacity-100 border-b border-zinc-100 bg-white" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 text-base font-medium text-zinc-800">
              <a
                href="#inicio"
                onClick={closeMenu}
                className="py-1.5 border-b border-zinc-50 hover:text-[#2563EB] transition-colors"
              >
                Início
              </a>
              <a
                href="#servicos"
                onClick={closeMenu}
                className="py-1.5 border-b border-zinc-50 hover:text-[#2563EB] transition-colors"
              >
                Serviços
              </a>
              <a
                href="#como-funciona"
                onClick={closeMenu}
                className="py-1.5 border-b border-zinc-50 hover:text-[#2563EB] transition-colors"
              >
                Como funciona
              </a>
              <a
                href="#sobre-nos"
                onClick={closeMenu}
                className="py-1.5 border-b border-zinc-50 hover:text-[#2563EB] transition-colors"
              >
                Sobre nós
              </a>
              <a
                href="#resultados"
                onClick={closeMenu}
                className="py-1.5 border-b border-zinc-50 hover:text-[#2563EB] transition-colors"
              >
                Resultados
              </a>
              <a
                href="#contato"
                onClick={closeMenu}
                className="py-1.5 hover:text-[#2563EB] transition-colors"
              >
                Contato
              </a>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-zinc-950 text-white font-medium text-sm hover:bg-[#2563EB] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Falar com a NEXORA</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section
        id="inicio"
        className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 lg:pb-32 overflow-hidden"
      >
        {/* Fundo suave com grid de respiração profissional */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/70 via-indigo-50/20 to-transparent rounded-full blur-3xl opacity-80" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-zinc-50/80 rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Coluna de Texto Hero (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Pequeno Texto de Categoria */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                  Soluções Digitais para Empresas
                </span>
              </div>

              {/* Título Principal */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12] mb-6">
                Seu negócio pode ser percebido de uma forma{" "}
                <span className="relative whitespace-nowrap text-[#2563EB]">
                  muito melhor
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#2563EB]/25"
                    viewBox="0 0 250 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8.5C65.5 2.5 184.5 2 248 8.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>

              {/* Parágrafo de Apoio */}
              <p className="text-base sm:text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
                Criamos sites, landing pages, cardápios digitais e conteúdos visuais para empresas
                que querem melhorar sua presença digital com rigor visual, velocidade e foco em resultados.
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-zinc-950 hover:bg-[#2563EB] text-white font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Falar com a NEXORA</span>
                  <ArrowRight className="w-4 h-4 ml-1 opacity-80" />
                </a>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-800 font-medium text-base transition-all duration-200"
                >
                  <span>Conhecer soluções</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              {/* Prova de Confiança e Credibilidade Editorial */}
              <div className="mt-10 sm:mt-12 pt-8 border-t border-zinc-100 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Design sob medida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Otimizado para celular</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Atendimento direto</span>
                </div>
              </div>
            </div>

            {/* Coluna de Composição Visual Real (5 cols) */}
            <div className="lg:col-span-5 relative">
              {/* Composição com perspectiva, sombra real e layout editorial */}
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Elemento de fundo com leve gradiente e sombra suave */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-blue-100/50 to-zinc-100/70 rounded-3xl -rotate-1 transform -z-10 blur-[1px]" />

                {/* Card Principal: Laptop / Interface de Website Corporativo */}
                <div className="bg-white rounded-2xl p-3 sm:p-4 border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative z-10 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                  {/* Barra de Topo do Browser Simulado */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 mb-3 bg-zinc-50/70 rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1 bg-white px-3 py-0.5 rounded border border-zinc-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      nexora.com.br
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Imagem Real de Projeto Web / Interface */}
                  <div className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-[16/10]">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                      alt="Interface moderna de projeto digital da NEXORA"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent flex items-end p-5">
                      <div className="text-white">
                        <span className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold block mb-1">
                          Case de Estudo
                        </span>
                        <p className="text-sm font-semibold">
                          Plataforma institucional de alta conversão
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Flutuante 1: Smartphone com Cardápio / Interface Mobile */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 w-44 sm:w-52 bg-white rounded-2xl p-2.5 border border-zinc-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.12)] z-20 hidden sm:block transform hover:-translate-y-1 transition-transform duration-200">
                  <div className="relative overflow-hidden rounded-xl bg-zinc-950 aspect-[9/16]">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                      alt="Cardápio digital mobile da NEXORA"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-zinc-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-medium">
                      Mobile UI
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent text-white">
                      <div className="text-[10px] text-zinc-300">Cardápio Digital</div>
                      <div className="text-xs font-bold leading-tight">Experiência ágil</div>
                    </div>
                  </div>
                </div>

                {/* Badge Flutuante 2: Selo de Qualidade NEXORA */}
                <div className="absolute -top-5 -right-3 sm:-right-6 bg-white rounded-2xl px-4 py-3 border border-zinc-200/90 shadow-[0_12px_30px_rgba(0,0,0,0.08)] z-20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-950">Padrão Editorial</div>
                    <div className="text-[11px] text-zinc-500">Design contemporâneo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FAIXA DE DESTAQUES (Assinatura Visual NEXORA)
          ================================================== */}
      <section className="border-y border-zinc-100 bg-zinc-50/70 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Subtítulo discreto da faixa */}
          <div className="text-center mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Especialidades Digitais NEXORA
            </span>
          </div>

          {/* Lista de destaques com apresentação elegante */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 items-center">
            {[
              { title: "Sites", desc: "Institucionais & Portais" },
              { title: "Landing Pages", desc: "Campanhas de Alta Conversão" },
              { title: "Cardápios Digitais", desc: "Interativos para Gastronomia" },
              { title: "Conteúdo Visual", desc: "Fotografia & Direção de Arte" },
              { title: "Materiais de Divulgação", desc: "Mídias & Peças Gráficas" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group p-4 rounded-xl bg-white border border-zinc-200/70 hover:border-[#2563EB]/40 hover:shadow-sm transition-all duration-200 text-center flex flex-col items-center justify-center min-h-[96px]"
              >
                <div className="text-xs font-mono text-[#2563EB] mb-1 font-semibold">
                  0{index + 1}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#2563EB] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug line-clamp-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SEÇÃO DE SERVIÇOS DETALHADA
          ================================================== */}
      <section id="servicos" className="py-24 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Cabeçalho da Seção */}
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              O Que Entregamos
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
              Serviços pensados para destacar sua marca no mercado.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal">
              Cada projeto combina estratégia comercial, tipografia refinada e execução técnica de ponta.
            </p>
          </div>

          {/* Grid de Serviços com Composição Editorial */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.name}
                  className="group relative bg-white p-8 rounded-2xl border border-zinc-200/80 hover:border-[#2563EB] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-zinc-400 font-semibold">
                        {service.tag}
                      </span>
                    </div>

                    <span className="inline-block text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider mb-2">
                      {service.badge}
                    </span>

                    <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-[#2563EB] transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 group-hover:text-[#2563EB] transition-colors pt-4 border-t border-zinc-100"
                  >
                    <span>Solicitar proposta deste serviço</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}

            {/* Card de Chamada para Ação no Grid */}
            <div className="bg-zinc-950 text-white p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#2563EB]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-[#2563EB] flex items-center justify-center mb-6">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block mb-2">
                  Atendimento Consultivo
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Precisa de um pacote sob medida?
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Analisamos as necessidades reais da sua empresa e indicamos o melhor caminho visual e digital.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-medium text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          COMO FUNCIONA
          ================================================== */}
      <section id="como-funciona" className="py-28 sm:py-36 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header da Seção */}
          <div className="max-w-3xl mb-20 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-900 text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Como Funciona
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-6">
              Do problema à solução.
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed">
              Entendemos o que sua empresa precisa, definimos a melhor direção e transformamos a ideia em uma solução digital.
            </p>
          </div>

          {/* Quatro Etapas conectadas por linha visual elegante */}
          {/* Versão Desktop: layout horizontal com linha contínua e nós diferenciados */}
          <div className="hidden lg:block relative">
            {/* Linha visual elegante conectando as quatro etapas */}
            <div
              className="absolute top-[36px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-zinc-200 via-blue-200 to-zinc-200 -z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {/* Etapa 01 - CONVERSA */}
              <div className="group flex flex-col pt-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-2xl font-black text-zinc-950 group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-all duration-300">
                    01
                  </div>
                  <div className="h-px flex-1 bg-zinc-100 group-hover:bg-blue-100 transition-colors" />
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-100 hover:border-zinc-200 transition-all duration-300 min-h-[175px] flex flex-col justify-start">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold mb-1.5">
                    Etapa 01
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 mb-2">
                    CONVERSA
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    &ldquo;Você nos explica o que precisa.&rdquo;
                  </p>
                </div>
              </div>

              {/* Etapa 02 - ESTRATÉGIA */}
              <div className="group flex flex-col pt-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-2xl font-black text-zinc-950 group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-all duration-300">
                    02
                  </div>
                  <div className="h-px flex-1 bg-zinc-100 group-hover:bg-blue-100 transition-colors" />
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-100 hover:border-zinc-200 transition-all duration-300 min-h-[175px] flex flex-col justify-start">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold mb-1.5">
                    Etapa 02
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 mb-2">
                    ESTRATÉGIA
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    &ldquo;Entendemos o objetivo e definimos a melhor solução.&rdquo;
                  </p>
                </div>
              </div>

              {/* Etapa 03 - CRIAÇÃO */}
              <div className="group flex flex-col pt-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-2xl font-black text-zinc-950 group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-all duration-300">
                    03
                  </div>
                  <div className="h-px flex-1 bg-zinc-100 group-hover:bg-blue-100 transition-colors" />
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-100 hover:border-zinc-200 transition-all duration-300 min-h-[175px] flex flex-col justify-start">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold mb-1.5">
                    Etapa 03
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 mb-2">
                    CRIAÇÃO
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    &ldquo;Desenvolvemos o projeto e ajustamos todos os detalhes.&rdquo;
                  </p>
                </div>
              </div>

              {/* Etapa 04 - ENTREGA (Destaque final elegante) */}
              <div className="group flex flex-col pt-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-[#2563EB] text-white shadow-md flex items-center justify-center font-mono text-2xl font-black transition-all duration-300 group-hover:scale-105">
                    04
                  </div>
                  <div className="h-px flex-1 bg-transparent" />
                </div>
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 hover:border-blue-200 transition-all duration-300 min-h-[175px] flex flex-col justify-start">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold mb-1.5">
                    Etapa 04 &bull; Conclusão
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 mb-2">
                    ENTREGA
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    &ldquo;Você recebe uma solução pronta para utilizar.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Versão Mobile/Tablet: layout vertical com uma linha lateral discreta conectando as 4 etapas */}
          <div className="lg:hidden relative pl-8 sm:pl-10">
            {/* Linha vertical lateral discreta */}
            <div
              className="absolute left-4 sm:left-5 top-5 bottom-8 w-[2px] bg-gradient-to-b from-[#2563EB] via-zinc-200 to-zinc-300"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-10">
              {/* Mobile 01 - CONVERSA */}
              <div className="relative flex flex-col items-start">
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center shadow-sm">
                  <span className="text-xs font-mono font-bold text-zinc-950">01</span>
                </div>
                <div className="w-full bg-zinc-50/70 p-6 rounded-2xl border border-zinc-200/80">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold block mb-1">
                    Etapa 01
                  </span>
                  <h3 className="text-base font-extrabold tracking-tight text-zinc-950 mb-2">
                    CONVERSA
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    &ldquo;Você nos explica o que precisa.&rdquo;
                  </p>
                </div>
              </div>

              {/* Mobile 02 - ESTRATÉGIA */}
              <div className="relative flex flex-col items-start">
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-zinc-400 flex items-center justify-center shadow-sm">
                  <span className="text-xs font-mono font-bold text-zinc-950">02</span>
                </div>
                <div className="w-full bg-zinc-50/70 p-6 rounded-2xl border border-zinc-200/80">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold block mb-1">
                    Etapa 02
                  </span>
                  <h3 className="text-base font-extrabold tracking-tight text-zinc-950 mb-2">
                    ESTRATÉGIA
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    &ldquo;Entendemos o objetivo e definimos a melhor solução.&rdquo;
                  </p>
                </div>
              </div>

              {/* Mobile 03 - CRIAÇÃO */}
              <div className="relative flex flex-col items-start">
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-zinc-400 flex items-center justify-center shadow-sm">
                  <span className="text-xs font-mono font-bold text-zinc-950">03</span>
                </div>
                <div className="w-full bg-zinc-50/70 p-6 rounded-2xl border border-zinc-200/80">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold block mb-1">
                    Etapa 03
                  </span>
                  <h3 className="text-base font-extrabold tracking-tight text-zinc-950 mb-2">
                    CRIAÇÃO
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    &ldquo;Desenvolvemos o projeto e ajustamos todos os detalhes.&rdquo;
                  </p>
                </div>
              </div>

              {/* Mobile 04 - ENTREGA */}
              <div className="relative flex flex-col items-start">
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full bg-[#2563EB] border-2 border-[#2563EB] text-white flex items-center justify-center shadow-sm">
                  <span className="text-xs font-mono font-bold text-white">04</span>
                </div>
                <div className="w-full bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold block mb-1">
                    Etapa 04 &bull; Conclusão
                  </span>
                  <h3 className="text-base font-extrabold tracking-tight text-zinc-950 mb-2">
                    ENTREGA
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    &ldquo;Você recebe uma solução pronta para utilizar.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SOBRE A NEXORA
          ================================================== */}
      <section id="sobre-nos" className="py-28 sm:py-36 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna Institucional / Conteúdo */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-900 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Sobre a NEXORA
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12] mb-8">
                Digital, mas feito para pessoas.
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mb-10 max-w-xl">
                <p>
                  A NEXORA nasceu para ajudar empresas a se apresentarem melhor no mundo digital.
                </p>
                <p>
                  Unimos tecnologia, inteligência artificial, estratégia e criatividade para transformar necessidades reais em soluções simples, profissionais e funcionais.
                </p>
                <p className="text-zinc-800 font-medium">
                  Nosso foco é entender o negócio antes de criar a solução.
                </p>
              </div>

              {/* Frase de Destaque Forte */}
              <div className="w-full max-w-xl p-8 rounded-2xl bg-zinc-50 border-l-4 border-l-[#2563EB] border-y border-r border-zinc-200/80 shadow-sm">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold block mb-2">
                  Diretriz Central
                </span>
                <blockquote className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug whitespace-pre-line">
                  &ldquo;Entender primeiro.&#10;Criar melhor.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Coluna Grande Imagem Institucional ao Lado */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Elemento de fundo geométrico sutil */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-zinc-100 rounded-3xl -rotate-1 transform -z-10" />

                {/* Card com a grande imagem corporativa */}
                <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-200/80 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85"
                    alt="Ambiente de trabalho digital, design de interfaces e criação tecnológica da NEXORA"
                    className="w-full h-[480px] sm:h-[580px] object-cover object-center"
                    loading="lazy"
                  />

                  {/* Overlay gradiente premium com detalhe editorial */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent flex flex-col justify-end p-8 sm:p-10 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium w-fit mb-3 text-blue-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Design &amp; Tecnologia
                    </div>
                    <p className="text-xl sm:text-2xl font-bold tracking-tight text-white max-w-md leading-snug">
                      Soluções digitais desenhadas com precisão para elevar seu negócio.
                    </p>
                    <p className="text-xs text-zinc-300 mt-2 font-mono">
                      Ambiente corporativo de criação digital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          RESULTADOS & COMPROMISSO
          ================================================== */}
      <section id="resultados" className="py-24 bg-zinc-50/70 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Foco no Negócio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
              O que muda quando sua empresa tem a presença correta.
            </h2>
            <p className="text-base text-zinc-600">
              Qualidade visual não é detalhe cosmético: é o fator decisivo para a percepção de valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Percepção Imediata de Confiança",
                desc: "Clientes em potencial julgam a solidez do seu serviço nos primeiros segundos de navegação.",
                highlight: "+ Credibilidade",
              },
              {
                title: "Conversão Direta sem Fricção",
                desc: "Botões de WhatsApp claros, navegação intuitiva e estrutura que conduz à tomada de decisão.",
                highlight: "+ Contatos",
              },
              {
                title: "Destaque Visual Frente aos Concorrentes",
                desc: "Saia do padrão amador de mercado com estética editorial e acabamento impecável.",
                highlight: "+ Valor Percebido",
              },
            ].map((res) => (
              <div
                key={res.title}
                className="bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-4">
                    {res.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-950 mb-3">
                    {res.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {res.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          CTA FINAL & CONTATO
          ================================================== */}
      <section id="contato" className="py-24 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-zinc-950 rounded-3xl p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Decoração sutil de fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#2563EB]/30 via-indigo-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponível para novos projetos
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                Pronto para transformar a imagem digital do seu negócio?
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
                Fale agora com a equipe da <strong>NEXORA</strong> pelo WhatsApp. Entendemos sua demanda e
                enviamos uma proposta personalizada para seu projeto.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300" />
                  <span>Falar com a NEXORA</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="text-xs text-zinc-400 flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Resposta rápida no horário comercial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FOOTER
          ================================================== */}
      <footer className="border-t border-zinc-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo e Descrição */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 p-1 flex items-center justify-center">
              <img
                src="/nexora-logo.png"
                alt="NEXORA"
                className="w-full h-full object-contain"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-zinc-950">
                NEXORA
              </span>
              <span className="text-[10px] text-zinc-400 font-medium">
                Soluções Digitais para Empresas
              </span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
            <a href="#inicio" className="hover:text-zinc-900 transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-zinc-900 transition-colors">
              Serviços
            </a>
            <a href="#como-funciona" className="hover:text-zinc-900 transition-colors">
              Como funciona
            </a>
            <a href="#sobre-nos" className="hover:text-zinc-900 transition-colors">
              Sobre nós
            </a>
            <a href="#resultados" className="hover:text-zinc-900 transition-colors">
              Resultados
            </a>
            <a href="#contato" className="hover:text-zinc-900 transition-colors">
              Contato
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-zinc-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} NEXORA. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
