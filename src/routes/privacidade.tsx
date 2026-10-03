import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | NEXORA" },
      {
        name: "description",
        content:
          "Política de Privacidade da NEXORA. Diretrizes de proteção de dados, privacidade e conformidade com a LGPD.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          <ShieldCheck className="w-4 h-4" />
          <span>Área Institucional &amp; Legal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
          Política de Privacidade
        </h1>
        <p className="text-sm text-zinc-500 font-mono mb-10">
          Última atualização: Outubro de 2026
        </p>

        {/* Quadro para posterior inserção de dados societários */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 mb-10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
            Informações do Controlador (Editável)
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
            <div className="sm:col-span-2">
              <span className="font-medium text-zinc-950">Encarregado pelo Tratamento de Dados (DPO):</span> [Nome / E-mail do responsável DPO]
            </div>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-700 text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              1. Objetivo e Escopo
            </h2>
            <p>
              A NEXORA tem como compromisso zelar pela privacidade e segurança dos dados pessoais de todos os visitantes, clientes e parceiros que interagem com nossos canais digitais, em estrita conformidade com a legislação aplicável, inclusive a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              2. Dados Coletados e Finalidade
            </h2>
            <p>
              Coletamos apenas as informações estritamente necessárias para a prestação dos serviços contratados ou para atendimento inicial:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Comunicação e Atendimento:</strong> Nome, e-mail, número de WhatsApp e segmento de atuação, exclusivamente para responder consultas e elaborar orçamentos solicitados ativamente pelo usuário.
              </li>
              <li>
                <strong>Navegação Técnica:</strong> Dados técnicos anônimos ou agregados para garantir performance, segurança e compatibilidade de dispositivos.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              3. Compartilhamento de Dados
            </h2>
            <p>
              A NEXORA não comercializa nem transfere dados pessoais a terceiros para fins de marketing. O compartilhamento ocorre apenas quando indispensável para a execução das ferramentas de tecnologia contratadas (ex.: hospedagem de servidores e envio de e-mails transacionais) ou por exigência de autoridades competentes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              4. Seus Direitos (LGPD)
            </h2>
            <p>
              O titular dos dados tem o direito de solicitar confirmação de tratamento, acesso aos dados, correção de dados incompletos ou inexatos, eliminação e revogação de consentimento a qualquer momento por meio do e-mail oficial informado nesta página.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              5. Segurança da Informação
            </h2>
            <p>
              Empregamos protocolos e medidas técnicas compatíveis com os padrões internacionais para proteger as informações contra acessos não autorizados, perda acidental, destruição ou qualquer forma de tratamento ilícito.
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
