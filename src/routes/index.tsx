import { QuickBenefitsSection } from "@/components/QuickBenefitsSection";
import { VisualShowcaseSection } from "@/components/VisualShowcaseSection";
import { TransformationSection } from "@/components/TransformationSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteLogo } from "@/components/SiteLogo";
import { ThemeSelector } from "@/components/ThemeSelector";
import { BackgroundGraphics } from "@/components/BackgroundGraphics";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Compass, Cpu, Palette } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXORA | Soluções Digitais para Empresas" },
      {
        name: "description",
        content:
          "A NEXORA ajuda empresas a melhorar sua presença digital através de tecnologia, estratégia, inteligência artificial e criatividade.",
      },
      { property: "og:title", content: "NEXORA | Soluções Digitais para Empresas" },
      {
        property: "og:description",
        content:
          "Transformamos necessidades de negócio em experiências digitais mais claras, profissionais e funcionais.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NexoraLandingPage,
});

const WHATSAPP_LINK =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20NEXORA%20sobre%20solu%C3%A7%C3%B5es%20digitais%20para%20minha%20empresa.";

const heroImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85";
const siteImage =
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85";
const landingPageImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85";
const menuImage =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85";
const visualContentImage =
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=85";
const marketingMaterialImage =
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85";
const aboutImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85";
const beforeImage =
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80";
const afterImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85";

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-100 font-sans selection:bg-[#2563EB] selection:text-white antialiased relative transition-colors duration-300">
      {/* Elementos gráficos abstratos discretos no fundo */}
      <BackgroundGraphics />

      {/* ==================================================
          1. HEADER
          ================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800/80 py-3.5 sm:py-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
            : "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xs border-b border-zinc-100/80 dark:border-zinc-800/60 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded py-1 min-h-[44px]"
            aria-label="NEXORA Início"
          >
            <SiteLogo size={32} />
            <span className="font-extrabold text-xl tracking-tight text-zinc-950 dark:text-white flex items-center gap-1">
              NEXORA
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#inicio" className="hover:text-zinc-950 dark:hover:text-white transition-colors py-2">
              Início
            </a>
            <a href="#servicos" className="hover:text-zinc-950 dark:hover:text-white transition-colors py-2">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-zinc-950 dark:hover:text-white transition-colors py-2">
              Sobre
            </a>
            <a href="#como-funciona" className="hover:text-zinc-950 dark:hover:text-white transition-colors py-2">
              Como funciona
            </a>
            <a href="#feedbacks" className="hover:text-zinc-950 dark:hover:text-white transition-colors py-2">
              Feedbacks
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeSelector />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-sm font-semibold hover:bg-[#2563EB] dark:hover:bg-[#2563EB] dark:hover:text-white transition-all shadow-xs min-h-[44px]"
            >
              Falar com a NEXORA
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-x-0 top-[57px] sm:top-[65px] bottom-0 bg-white/98 dark:bg-zinc-950/98 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-40 overflow-y-auto px-5 py-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-3 duration-200"
            role="dialog"
            aria-label="Menu de navegação mobile"
          >
            <nav className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800 text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              <a
                href="#inicio"
                onClick={closeMenu}
                className="py-3.5 hover:text-[#2563EB] transition-colors flex items-center justify-between min-h-[48px]"
              >
                <span>Início</span>
              </a>
              <a
                href="#servicos"
                onClick={closeMenu}
                className="py-3.5 hover:text-[#2563EB] transition-colors flex items-center justify-between min-h-[48px]"
              >
                <span>Serviços</span>
              </a>
              <a
                href="#sobre"
                onClick={closeMenu}
                className="py-3.5 hover:text-[#2563EB] transition-colors flex items-center justify-between min-h-[48px]"
              >
                <span>Sobre</span>
              </a>
              <a
                href="#como-funciona"
                onClick={closeMenu}
                className="py-3.5 hover:text-[#2563EB] transition-colors flex items-center justify-between min-h-[48px]"
              >
                <span>Como funciona</span>
              </a>
              <a
                href="#feedbacks"
                onClick={closeMenu}
                className="py-3.5 hover:text-[#2563EB] transition-colors flex items-center justify-between min-h-[48px]"
              >
                <span>Feedbacks</span>
              </a>
            </nav>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-base font-semibold hover:bg-[#2563EB] dark:hover:bg-[#2563EB] dark:hover:text-white active:scale-[0.99] transition-all shadow-sm min-h-[48px]"
              >
                Falar com a NEXORA
              </a>
              <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 font-normal pt-1">
                Atendimento direto para empresas
              </p>
            </div>
          </div>
        )}
      </header>

      {/* ==================================================
          2. HERO
          ================================================== */}
      <section
        id="inicio"
        className="relative pt-28 sm:pt-36 lg:pt-44 pb-14 sm:pb-24 lg:pb-28 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 sm:mb-4 block">
                SOLUÇÕES DIGITAIS PARA EMPRESAS
              </span>

              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-zinc-950 dark:text-white tracking-tight leading-[1.18] sm:leading-[1.12] mb-4 sm:mb-6 text-balance">
                Seu negócio pode ser percebido de uma forma muito melhor.
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed mb-6 sm:mb-10 max-w-xl">
                Criamos sites, landing pages, cardápios digitais e conteúdos visuais para empresas.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-950 dark:text-zinc-100 text-sm font-semibold hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors min-h-[48px]"
                >
                  Conhecer serviços
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-sm font-semibold hover:bg-[#2563EB] dark:hover:bg-[#2563EB] dark:hover:text-white transition-all shadow-sm min-h-[48px]"
                >
                  Falar com a NEXORA
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.06)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[500px]">
                <img
                  src={heroImage}
                  alt="Apresentação visual de soluções digitais modernas da NEXORA"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. BENEFÍCIOS RÁPIDOS
          ================================================== */}
      <QuickBenefitsSection id="beneficios" />

      {/* ==================================================
          4. SOLUÇÕES / SERVIÇOS
          ================================================== */}
      <section id="servicos" className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800/80 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Serviços.
            </h2>
            <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
              Criamos soluções para melhorar a presença, a comunicação e a apresentação da sua empresa.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* Bloco 1: Criação de Sites e Landing Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900/90 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col shadow-xs">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={siteImage}
                    alt="Criação de Sites profissionais pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                      01 &bull; Presença Digital
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white tracking-tight mb-3">
                      Criação de Sites
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Sites profissionais para apresentar sua empresa, seus serviços e sua marca.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900/90 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col shadow-xs">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={landingPageImage}
                    alt="Landing Pages pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                      02 &bull; Apresentação Direta
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white tracking-tight mb-3">
                      Landing Pages
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Páginas criadas para apresentar uma oferta, serviço, campanha ou produto de forma clara.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco 2: Cardápios Digitais, Imagens e Conteúdo Visual, Materiais de Divulgação */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900/90 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col shadow-xs">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={menuImage}
                    alt="Cardápios Digitais no celular pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                    03 &bull; Praticidade
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2">
                    Cardápios Digitais
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Cardápios digitais organizados, modernos e fáceis de acessar pelo celular.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900/90 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col shadow-xs">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={visualContentImage}
                    alt="Imagens e Conteúdo Visual pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                    04 &bull; Identidade
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2">
                    Imagens e Conteúdo Visual
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Imagens, artes e conteúdos para fortalecer a apresentação da sua marca.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900/90 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col shadow-xs">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={marketingMaterialImage}
                    alt="Materiais de Divulgação pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                    05 &bull; Divulgação
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2">
                    Materiais de Divulgação
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Peças digitais para divulgar produtos, serviços, promoções e campanhas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque visual integrado */}
      <VisualShowcaseSection />

      {/* ==================================================
          5. SOBRE A NEXORA
          ================================================== */}
      <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800/80 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                CONHEÇA A NEXORA
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
                Sobre a NEXORA
              </h2>
              <p className="text-base sm:text-xl text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">
                A NEXORA ajuda empresas a melhorar sua presença digital através de tecnologia,
                estratégia, inteligência artificial e criatividade.
              </p>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                Transformamos necessidades de negócio em experiências digitais mais claras, profissionais e funcionais.
              </p>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                Nosso trabalho passa por entender o que a empresa precisa, definir a melhor direção e criar uma solução que represente melhor sua marca.
              </p>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                Acreditamos que cada negócio tem uma história e desafios próprios. Por isso, unimos escuta próxima e visão estratégica para construir soluções sob medida — sem fórmulas prontas.
              </p>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                Da primeira conversa à entrega, buscamos simplificar processos, fortalecer marcas e criar experiências digitais que gerem valor real para clientes e equipes.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={aboutImage}
                  alt="Ambiente de trabalho da NEXORA"
                  className="w-full h-[280px] sm:h-[380px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Três Pilares da NEXORA: ESTRATÉGIA, TECNOLOGIA, DESIGN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-zinc-100 dark:border-zinc-800/80">
            <div className="p-7 sm:p-8 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100/80 dark:border-blue-800/40 flex items-center justify-center text-[#2563EB] mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2 uppercase">
                  ESTRATÉGIA
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Entendemos o objetivo antes de começar.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100/80 dark:border-blue-800/40 flex items-center justify-center text-[#2563EB] mb-5">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2 uppercase">
                  TECNOLOGIA
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Usamos ferramentas modernas e inteligência artificial para acelerar e melhorar a criação.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100/80 dark:border-blue-800/40 flex items-center justify-center text-[#2563EB] mb-5">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2 uppercase">
                  DESIGN
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Cuidamos da apresentação, da experiência e dos detalhes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. ANTES E DEPOIS
          ================================================== */}
      <TransformationSection
        id="antes-depois"
        beforeImage={beforeImage}
        afterImage={afterImage}
      />

      {/* ==================================================
          7. COMO FUNCIONA
          ================================================== */}
      <section id="como-funciona" className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800/80 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight mb-3">
              Como funciona.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Um processo simples para transformar uma necessidade em uma solução.
            </p>
          </div>

          <div className="relative mb-12">
            {/* Linha discreta horizontal no Desktop */}
            <div
              className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-zinc-200 dark:bg-zinc-800 -z-0"
              aria-hidden="true"
            />

            {/* Linha discreta vertical no Mobile conectando 01 -> 02 -> 03 -> 04 */}
            <div
              className="block lg:hidden absolute top-6 bottom-6 left-6 w-px bg-zinc-200 dark:bg-zinc-800 -z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-10 relative z-10">
              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center justify-center font-mono text-sm sm:text-base font-bold text-zinc-950 dark:text-white lg:mb-6 shrink-0 z-10">
                  01
                </div>
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white tracking-tight mb-1 sm:mb-2 uppercase">
                    CONVERSA
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Você nos explica o que precisa, qual é o objetivo e o que espera melhorar.
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center justify-center font-mono text-sm sm:text-base font-bold text-zinc-950 dark:text-white lg:mb-6 shrink-0 z-10">
                  02
                </div>
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white tracking-tight mb-1 sm:mb-2 uppercase">
                    ESTRATÉGIA
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Analisamos a necessidade e definimos a melhor direção para o projeto.
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center justify-center font-mono text-sm sm:text-base font-bold text-zinc-950 dark:text-white lg:mb-6 shrink-0 z-10">
                  03
                </div>
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white tracking-tight mb-1 sm:mb-2 uppercase">
                    CRIAÇÃO
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Desenvolvemos a solução, apresentamos o trabalho e ajustamos os detalhes necessários.
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-xs flex items-center justify-center font-mono text-sm sm:text-base font-bold lg:mb-6 shrink-0 z-10">
                  04
                </div>
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white tracking-tight mb-1 sm:mb-2 uppercase">
                    ENTREGA
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Finalizamos o projeto e entregamos tudo pronto para utilização.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-normal">
              Cada projeto pode seguir um caminho diferente de acordo com a necessidade da empresa.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          8. FEEDBACKS / PROVA SOCIAL
          ================================================== */}
      <ReviewsSection id="feedbacks" />

      {/* ==================================================
          9. CTA FINAL
          ================================================== */}
      <FinalCtaSection id="cta-final" whatsappLink={WHATSAPP_LINK} />

      {/* ==================================================
          10. FOOTER
          ================================================== */}
      <SiteFooter />
    </div>
  );
}
