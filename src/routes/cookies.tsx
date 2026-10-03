import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Cookie } from "lucide-react";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | NEXORA" },
      {
        name: "description",
        content:
          "Política de Cookies da NEXORA. Entenda como utilizamos cookies essenciais e de performance para garantir uma experiência de navegação de alta qualidade.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-[#2563EB] selection:text-white antialiased">
      {/* Header simplificado institucional */}
      <header className="border-b border-zinc-100 bg-white/95 backdrop-blur-md sticky top-0 z-40">
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

      {/* Conteúdo Institucional Editável */}
      <main className="max-w-4xl mx-auto px-6 py-14 sm:py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-6">
          <Cookie className="w-4 h-4" />
          <span>Área Institucional &amp; Legal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
          Política de Cookies
        </h1>
        <p className="text-sm text-zinc-500 font-mono mb-10">
          Última atualização: Outubro de 2026
        </p>

        {/* Quadro para posterior inserção de dados societários */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 mb-10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
            Gestão e Contato Institucional (Editável)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-700">
            <div>
              <span className="font-medium text-zinc-950">Entidade Responsável:</span> NEXORA Soluções Digitais
            </div>
            <div>
              <span className="font-medium text-zinc-950">E-mail para Privacidade:</span> privacidade@nexora.digital
            </div>
            <div className="sm:col-span-2">
              <span className="font-medium text-zinc-950">Finalidade:</span> Esclarecer o uso transparente de arquivos temporários e armazenamento local de navegação.
            </div>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-700 text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              1. O que são Cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no navegador do usuário quando ele acessa um website. Eles permitem registrar preferências básicas, lembrar sessões e analisar de maneira agregada o funcionamento do sistema para aprimorar velocidade e estabilidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              2. Categorias de Cookies Utilizados
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-zinc-200">
                <h3 className="font-bold text-zinc-950 text-base mb-1">
                  a) Cookies Estritamente Necessários
                </h3>
                <p className="text-sm text-zinc-600">
                  Fundamentais para que o site funcione corretamente (roteamento, segurança e renderização). Não podem ser desativados sem comprometer a navegação.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200">
                <h3 className="font-bold text-zinc-950 text-base mb-1">
                  b) Cookies de Desempenho e Métricas Anônimas
                </h3>
                <p className="text-sm text-zinc-600">
                  Coletam dados estatísticos agregados sem identificar pessoalmente o visitante, permitindo identificar gargalos técnicos e medir o tempo de carregamento de páginas.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              3. Como Gerenciar ou Desabilitar Cookies
            </h2>
            <p>
              O visitante pode configurar seu navegador para bloquear ou alertar sobre a gravação de cookies. Note que o bloqueio de determinadas categorias essenciais pode afetar recursos visuais ou funcionalidades dinâmicas da página.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              4. Atualizações desta Política
            </h2>
            <p>
              A NEXORA reserva-se o direito de atualizar este documento periodicamente para refletir alterações regulatórias ou aprimoramentos técnicos de segurança na infraestrutura do site.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-zinc-200 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-[#2563EB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar ao site principal</span>
          </Link>
          <span className="text-xs text-zinc-400">
            &copy; 2026 NEXORA
          </span>
        </div>
      </main>
    </div>
  );
}
