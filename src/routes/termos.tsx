import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | NEXORA" },
      {
        name: "description",
        content:
          "Termos de Uso da NEXORA. Condições gerais para navegação e contratação de serviços digitais corporativos.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
          <FileText className="w-4 h-4" />
          <span>Área Institucional &amp; Legal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
          Termos de Uso
        </h1>
        <p className="text-sm text-zinc-500 font-mono mb-10">
          Última atualização: Outubro de 2026
        </p>

        {/* Quadro para posterior inserção de dados societários */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 mb-10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
            Identificação Institucional (Editável)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-700">
            <div>
              <span className="font-medium text-zinc-950">Razão Social:</span> [Inserir Razão Social da Empresa]
            </div>
            <div>
              <span className="font-medium text-zinc-950">CNPJ:</span> [Inserir CNPJ]
            </div>
            <div>
              <span className="font-medium text-zinc-950">Endereço:</span> [Inserir Endereço Comercial / Sede]
            </div>
            <div>
              <span className="font-medium text-zinc-950">E-mail oficial:</span> contato@nexora.digital
            </div>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-700 text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar este website e solicitar orçamentos ou serviços fornecidos pela NEXORA, o usuário concorda expressamente com os presentes Termos de Uso e com as políticas complementares aqui descritas. Caso discorde de qualquer disposição, deve interromper o uso do site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              2. Serviços Oferecidos
            </h2>
            <p>
              A NEXORA atua no desenvolvimento e criação de soluções digitais corporativas, incluindo criação de websites institucionais, landing pages de alta conversão, cardápios digitais, fotografia comercial e peças de identidade visual. A contratação detalhada é regulada por proposta comercial e contrato específico firmado entre as partes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todos os elementos deste site — marcas, logotipos, layouts, estruturas de código, textos e imagens proprietárias — pertencem exclusivamente à NEXORA ou a terceiros que legitimamente autorizaram seu uso. É estritamente proibida a reprodução não autorizada sem prévio consentimento por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              4. Limitação de Responsabilidade
            </h2>
            <p>
              Empregamos nossos melhores esforços para manter a precisão das informações e a estabilidade da plataforma. Não nos responsabilizamos por indisponibilidades temporárias de serviços de terceiros, provedores de hospedagem ou instabilidades na rede mundial de computadores.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              5. Foro e Legislação Aplicável
            </h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca da sede da NEXORA para dirimir quaisquer controvérsias oriundas deste instrumento.
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
