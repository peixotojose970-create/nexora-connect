import { QuickBenefitsSection } from "@/components/QuickBenefitsSection";
import { VisualShowcaseSection } from "@/components/VisualShowcaseSection";
import { TransformationSection } from "@/components/TransformationSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { SiteFooter } from "@/components/SiteFooter";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXORA | Soluções Digitais para Empresas" },
      {
        name: "description",
        content:
          "Criamos sites, landing pages, cardápios digitais e conteúdos visuais para empresas que querem melhorar sua presença digital.",
      },
      { property: "og:title", content: "NEXORA | Soluções Digitais para Empresas" },
      {
        property: "og:description",
        content:
          "Seu negócio pode ser percebido de uma forma muito melhor. Criamos sites, landing pages, cardápios digitais e conteúdos visuais.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NexoraLandingPage,
});

const WHATSAPP_LINK =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20NEXORA%20sobre%20solu%C3%A7%C3%B5es%20digitais%20para%20minha%20empresa.";

// Imagens principais dedicadas com enquadramento profissional e qualidade preservada
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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-[#2563EB] selection:text-white antialiased relative">
      {/* Elementos gráficos abstratos discretos no fundo */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <svg
          className="absolute -top-24 right-0 w-[600px] h-[600px] text-zinc-100/60"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
        </svg>
        <svg
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] text-zinc-100/50"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M50 250 Q 250 50 450 250 T 850 250" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* ==================================================
          1. HEADER
          ================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-zinc-100 py-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)]"
            : "bg-white border-b border-zinc-100/80 py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <a
            href="#inicio"
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
            <span className="font-extrabold text-xl tracking-tight text-zinc-950 flex items-center gap-1">
              NEXORA
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
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
            <a href="#feedbacks" className="hover:text-zinc-950 transition-colors">
              Feedbacks
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-[#2563EB] transition-colors"
            >
              Falar com a NEXORA
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-lg"
              aria-label="Menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-100 bg-white px-6 py-5 space-y-4">
            <nav className="flex flex-col space-y-3 text-base font-medium text-zinc-800">
              <a href="#inicio" onClick={closeMenu} className="py-1">
                Início
              </a>
              <a href="#servicos" onClick={closeMenu} className="py-1">
                Serviços
              </a>
              <a href="#sobre" onClick={closeMenu} className="py-1">
                Sobre
              </a>
              <a href="#como-funciona" onClick={closeMenu} className="py-1">
                Como funciona
              </a>
              <a href="#feedbacks" onClick={closeMenu} className="py-1">
                Feedbacks
              </a>
            </nav>
            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-[#2563EB] transition-colors"
              >
                Falar com a NEXORA
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ==================================================
          2. HERO
          ================================================== */}
      <section
        id="inicio"
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4 block">
                SOLUÇÕES DIGITAIS PARA EMPRESAS
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-zinc-950 tracking-tight leading-[1.12] mb-6">
                Seu negócio pode ser percebido de uma forma muito melhor.
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Criamos sites, landing pages, cardápios digitais e conteúdos visuais para empresas.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-zinc-200 text-zinc-950 text-sm font-semibold hover:border-zinc-400 hover:bg-zinc-50 transition-colors"
                >
                  Conhecer serviços
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors shadow-sm"
                >
                  Falar com a NEXORA
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-zinc-200/80 bg-zinc-100">
                <img
                  src={heroImage}
                  alt="Apresentação visual de soluções digitais modernas da NEXORA"
                  className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover object-center"
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
      <section id="servicos" className="py-24 sm:py-32 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
              Soluções digitais para empresas.
            </h2>
            <p className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed">
              Criamos soluções para melhorar a presença, a comunicação e a apresentação da sua empresa.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* Bloco 1: Criação de Sites e Landing Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 overflow-hidden bg-white hover:border-zinc-300 transition-colors flex flex-col">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-100">
                  <img
                    src={siteImage}
                    alt="Criação de Sites profissionais pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                      01 &bull; Presença Corporativa
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-3">
                      Criação de Sites
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                      Estruturas modernas, rápidas e planejadas para transmitir autoridade e credibilidade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 overflow-hidden bg-white hover:border-zinc-300 transition-colors flex flex-col">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-100">
                  <img
                    src={landingPageImage}
                    alt="Landing Pages focadas em conversão pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                      02 &bull; Conversão e Vendas
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-3">
                      Landing Pages
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                      Páginas objetivas e focadas na apresentação clara de ofertas e captação de clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco 2: Cardápios Digitais, Imagens e Conteúdo, Materiais de Divulgação */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 overflow-hidden bg-white hover:border-zinc-300 transition-colors flex flex-col">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100">
                  <img
                    src={menuImage}
                    alt="Cardápios Digitais no smartphone pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                    03 &bull; Praticidade
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-2">
                    Cardápios Digitais
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Experiências dinâmicas e fluidas no celular para estabelecimentos gastronômicos.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 overflow-hidden bg-white hover:border-zinc-300 transition-colors flex flex-col">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100">
                  <img
                    src={visualContentImage}
                    alt="Imagens e Conteúdo Visual pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                    04 &bull; Direção de Arte
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-2">
                    Imagens e Conteúdo Visual
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Fotografia e direcionamento estético profissional para elevar o padrão da sua marca.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl sm:rounded-3xl border border-zinc-200/80 overflow-hidden bg-white hover:border-zinc-300 transition-colors flex flex-col">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100">
                  <img
                    src={marketingMaterialImage}
                    alt="Materiais de Divulgação pela NEXORA"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <span className="text-xs font-mono font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
                    05 &bull; Divulgação Comercial
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-2">
                    Materiais de Divulgação
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Peças visuais estratégicas e apresentações com comunicação direta e refinada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque visual da NEXORA integrado com pouquíssimo texto */}
      <VisualShowcaseSection />

      {/* ==================================================
          5. SOBRE A NEXORA
          ================================================== */}
      <section id="sobre" className="py-24 sm:py-32 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-6">
                Sobre a NEXORA
              </h2>
              <p className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed">
                A NEXORA ajuda empresas a melhorar sua presença digital através de tecnologia,
                estratégia, inteligência artificial e criatividade.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-zinc-200/80 bg-zinc-100">
                <img
                  src={aboutImage}
                  alt="Equipe e ambiente de trabalho da NEXORA"
                  className="w-full h-[360px] sm:h-[460px] object-cover object-center"
                  loading="lazy"
                />
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
      <section id="como-funciona" className="py-24 sm:py-32 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Como funciona.
            </h2>
          </div>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-zinc-200 -z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative z-10">
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-base font-bold text-zinc-950 mb-6">
                  01
                </div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-2">
                  Conversa
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Você nos explica o que precisa.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-base font-bold text-zinc-950 mb-6">
                  02
                </div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-2">
                  Estratégia
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Entendemos o objetivo e definimos a melhor solução.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-base font-bold text-zinc-950 mb-6">
                  03
                </div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-2">
                  Criação
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Desenvolvemos o projeto e ajustamos todos os detalhes.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 text-white shadow-sm flex items-center justify-center font-mono text-base font-bold mb-6">
                  04
                </div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-2">
                  Entrega
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Você recebe uma solução pronta para utilizar.
                </p>
              </div>
            </div>
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
