import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/config/legal";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | NEXORA" },
      {
        name: "description",
        content:
          "Política de Cookies da NEXORA. Conheça as tecnologias e os arquivos estritamente necessários empregados para a operação técnica segura de nosso website.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const { company, cookies } = LEGAL_CONFIG;

  return (
    <LegalLayout
      title="Política de Cookies"
      badge="Transparência & Tecnologias"
      lastUpdated={cookies.lastUpdated}
      icon="cookies"
    >
      {/* 1. O que são cookies */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          1. O que são Cookies?
        </h2>
        <p>
          Cookies são pequenos arquivos de texto salvos temporariamente no seu navegador de internet
          quando você visita uma aplicação web. Eles permitem que a página reconheça o seu dispositivo,
          preserve preferências essenciais durante a sessão e garanta estabilidade visual e de rota.
        </p>
      </section>

      {/* 2. Para que podem ser utilizados */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          2. Para que podem ser utilizados
        </h2>
        <p>
          Em aplicações digitais, cookies e recursos de armazenamento local podem ter diferentes papéis,
          tais como:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Operação Técnica e Segurança:</strong> fundamentais para carregar páginas, manter
            estados essenciais de navegação e prevenir ataques;
          </li>
          <li>
            <strong>Preferências do Usuário:</strong> memorizar opções de layout (ex.: menus recolhidos
            ou tema visual);
          </li>
          <li>
            <strong>Métricas e Desempenho:</strong> medir tempos de resposta agregados e detecção de
            erros operacionais;
          </li>
          <li>
            <strong>Publicidade Direcionada:</strong> veiculação de anúncios personalizados (modalidade{" "}
            <strong>não utilizada</strong> pela {company.brandName}).
          </li>
        </ul>
      </section>

      {/* 3. Cookies necessários */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          3. Cookies Estritamente Necessários
        </h2>
        <p>
          Estes arquivos são indispensáveis para o funcionamento da plataforma. Sem eles, as rotas do
          aplicativo, animações de componentes e renderização segura não operam de modo correto. Não
          podem ser desligados nos sistemas do site e independem de prévio consentimento, com base na
          necessidade técnica e legítimo interesse (art. 7º, IX da LGPD).
        </p>
      </section>

      {/* 4. Cookies analíticos */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          4. Cookies Analíticos
        </h2>
        <p>
          No momento, a {company.brandName}{" "}
          <strong className="text-zinc-950 font-semibold">não utiliza cookies analíticos de rastreamento de perfil</strong>{" "}
          (como Google Analytics, Hotjar ou correlatos). Caso ferramentas de análise técnica e métricas
          sejam futuramente integradas, o catálogo desta política será atualizado e os mecanismos de
          consentimento prévio serão ativados.
        </p>
      </section>

      {/* 5. Cookies de terceiros */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          5. Cookies de Terceiros
        </h2>
        <p>
          Não incorporamos pixels de rastreamento social (como Meta Pixel ou LinkedIn Insight Tag) nem
          redes externas de publicidade comportamental nas páginas do website. Os links direcionados
          para WhatsApp ou redes sociais externos apenas transferem o usuário ao aplicativo ou site do
          respectivo provedor caso o usuário opte por clicar.
        </p>
      </section>

      {/* 6. Catálogo de cookies */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          6. Catálogo de Cookies e Tecnologias de Sessão
        </h2>
        <p>
          Abaixo está o registro técnico e transparente dos arquivos e estados identificados nesta
          aplicação:
        </p>

        <div className="overflow-x-auto rounded-xl border border-zinc-200">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead className="bg-zinc-50 border-b border-zinc-200 font-semibold text-zinc-950">
              <tr>
                <th className="p-3">Nome / Identificador</th>
                <th className="p-3">Categoria</th>
                <th className="p-3">Provedor</th>
                <th className="p-3">Duração</th>
                <th className="p-3">Finalidade</th>
                <th className="p-3">Base Legal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 text-zinc-700">
              {cookies.cookieCatalog.map((item, index) => (
                <tr key={index} className="hover:bg-zinc-50/50">
                  <td className="p-3 font-mono font-medium text-zinc-950">{item.name}</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-3">{item.provider}</td>
                  <td className="p-3 whitespace-nowrap">{item.duration}</td>
                  <td className="p-3">{item.purpose}</td>
                  <td className="p-3 text-xs text-zinc-500">{item.legalBasis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Gerenciamento e alteração de preferências */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          7. Gerenciamento de Preferências no Navegador
        </h2>
        <p>
          Você pode, a qualquer momento, desabilitar, bloquear ou excluir cookies diretamente pelas
          configurações do seu navegador de internet. Consulte o procedimento no seu navegador:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-600">
          <li>Google Chrome (Configurações &gt; Privacidade e Segurança &gt; Cookies)</li>
          <li>Mozilla Firefox (Opções &gt; Privacidade e Segurança)</li>
          <li>Apple Safari (Preferências &gt; Privacidade)</li>
          <li>Microsoft Edge (Configurações &gt; Cookies e permissões de site)</li>
        </ul>
        <p className="text-sm text-zinc-500">
          Importante: A desativação completa de cookies estritamente necessários pode prejudicar a
          estabilidade visual ou impedir o carregamento adequado de recursos da página.
        </p>
      </section>

      {/* 8. Como entrar em contato */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          8. Como entrar em contato
        </h2>
        <p>
          Para obter esclarecimentos adicionais sobre a nossa Política de Cookies ou sobre o tratamento
          de dados na navegação, contate o nosso canal oficial de privacidade:
        </p>
        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 inline-block text-sm">
          <span className="font-semibold text-zinc-950">E-mail para Privacidade: </span>
          <a
            href={`mailto:${company.commercialEmail}`}
            className="text-[#2563EB] hover:underline font-mono"
          >
            {company.commercialEmail}
          </a>
        </div>
      </section>
    </LegalLayout>
  );
}
