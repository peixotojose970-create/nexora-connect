import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/config/legal";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | NEXORA" },
      {
        name: "description",
        content:
          "Termos de Uso da NEXORA. Regras, condições gerais e diretrizes para navegação no website institucional e solicitação de serviços.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const { company, terms } = LEGAL_CONFIG;

  return (
    <LegalLayout
      title="Termos de Uso"
      badge="Área Institucional & Legal"
      lastUpdated={terms.lastUpdated}
      icon="terms"
    >
      {/* 1. Disposições Gerais */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          1. Disposições Gerais
        </h2>
        <p>
          Estes Termos de Uso estabelecem as condições gerais para navegação e utilização do website
          institucional da <strong className="text-zinc-950 font-semibold">{company.brandName}</strong>{" "}
          (acessível via {company.websiteUrl}), bem como para a solicitação inicial de contatos,
          orçamentos e propostas comerciais por meio de nossos canais de comunicação.
        </p>
        <p>
          Este documento foi elaborado em conformidade com o ordenamento jurídico brasileiro,
          com destaque para a Lei nº 12.965/2014 (Marco Civil da Internet) e a Lei nº 13.709/2018
          (Lei Geral de Proteção de Dados Pessoais – LGPD).
        </p>
      </section>

      {/* 2. Aceitação dos Termos */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          2. Aceitação dos Termos
        </h2>
        <p>
          Ao acessar, navegar ou submeter informações por meio deste website, o usuário declara ter
          lido, compreendido e concordado integralmente com as condições estipuladas nestes Termos de
          Uso e com a nossa Política de Privacidade.
        </p>
        <p>
          Caso o usuário não concorde com qualquer disposição aqui estabelecida, deve interromper
          imediatamente a navegação e a utilização dos canais digitais do site.
        </p>
      </section>

      {/* 3. Uso do Site */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          3. Uso do Site
        </h2>
        <p>
          O usuário compromete-se a utilizar o website de forma responsável, ética e em consonância
          com a legislação vigente, abstendo-se de:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Praticar quaisquer atos que possam danificar, sobrecarregar, inutilizar ou deteriorar a
            infraestrutura e a disponibilidade técnica do website;
          </li>
          <li>
            Tentar obter acesso não autorizado a sistemas, redes, servidores ou dados relacionados à{" "}
            {company.brandName};
          </li>
          <li>
            Inserir, transmitir ou propagar vírus, códigos maliciosos ou quaisquer programas
            suscetíveis de causar danos ou vulnerabilidades técnicas;
          </li>
          <li>
            Fornecer informações intencionalmente falsas, inexatas ou fraudulentas nos formulários e
            canais de contato.
          </li>
        </ul>
      </section>

      {/* 4. Serviços da NEXORA */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          4. Serviços da NEXORA
        </h2>
        <p>
          A {company.brandName} atua na prestação de serviços de desenvolvimento e consultoria em
          soluções digitais corporativas, incluindo desenvolvimento de websites institucionais,
          landing pages, cardápios e catálogos digitais, design de interfaces e direção de conteúdo
          visual corporativo.
        </p>
        <p>
          As informações presentes neste website possuem finalidade institucional e informativa. A{" "}
          {company.brandName} não faz promessas exageradas nem garante aumento automático de vendas,
          conversões específicas ou resultados comerciais pré-determinados, uma vez que tais fatores
          dependem da estratégia, modelo de negócio, oferta de mercado e atuação individual de cada
          cliente.
        </p>
      </section>

      {/* 5. Orçamentos, Propostas e Contratações */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          5. Orçamentos, Propostas e Contratações
        </h2>
        <p>
          A apresentação de serviços ou estudos conceituais no website não constitui oferta vinculante
          automática. As condições comerciais específicas de cada projeto — incluindo escopo
          detalhado, cronograma de execução, entregáveis, investimento, garantias e obrigações
          mútuas — serão formalizadas exclusivamente em proposta comercial e contrato individual de
          prestação de serviços firmado entre as partes.
        </p>
      </section>

      {/* 6. Propriedade Intelectual */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          6. Propriedade Intelectual
        </h2>
        <p>
          Todos os conteúdos exibidos neste website — incluindo, de forma não exaustiva, a marca{" "}
          {company.brandName}, sinais distintivos, arquitetura de design, código-fonte, ilustrações,
          fotografias autorais e redações institucionais — são de titularidade da {company.brandName} ou
          são utilizados sob licença ou autorização regular de seus respectivos titulares.
        </p>
        <p>
          É terminantemente proibida a reprodução, cópia, distribuição, modificação, engenharia
          reversa ou exploração econômica total ou parcial de qualquer elemento do site sem prévia e
          expressa autorização formal por escrito.
        </p>
      </section>

      {/* 7. Conteúdo de Terceiros */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          7. Conteúdo de Terceiros
        </h2>
        <p>
          Eventuais menções a marcas, softwares, bibliotecas de código ou plataformas de terceiros
          têm fins meramente indicativos ou operacionais e pertencem aos seus respectivos titulares,
          não implicando relação de dependência jurídica, endosso oficial ou exclusividade societária.
        </p>
      </section>

      {/* 8. Disponibilidade do Site */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          8. Disponibilidade do Site
        </h2>
        <p>
          A {company.brandName} adota medidas técnicas contínuas para manter o website operacional,
          estável e seguro. Entretanto, não é possível garantir disponibilidade ininterrupta, livre
          de oscilações de conectividade, manutenções programadas ou emergências técnicas atribuíveis
          a provedores de hospedagem, nós de rede ou infraestruturas globais de internet.
        </p>
      </section>

      {/* 9. Limitação de Responsabilidade */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          9. Limitação de Responsabilidade
        </h2>
        <p>
          Na máxima extensão permitida pela legislação aplicável, a {company.brandName} não será
          responsável por danos indiretos, lucros cessantes, perdas de oportunidade negocial ou falhas
          decorrentes de:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Instabilidade ou indisponibilidade técnica transitória da rede de internet;</li>
          <li>Ações ilícitas de terceiros que escapem aos padrões razoáveis de segurança digital;</li>
          <li>
            Mau uso ou incompatibilidade do equipamento, sistema operacional ou navegador utilizado
            pelo usuário;
          </li>
          <li>
            Decisões comerciais tomadas com base em interpretações preliminares de conteúdos
            informativos do site antes da celebração de contrato formal.
          </li>
        </ul>
      </section>

      {/* 10. Links e Serviços Externos */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          10. Links e Serviços Externos
        </h2>
        <p>
          O website pode conter links para aplicativos e plataformas externas (como WhatsApp e
          Instagram) com o propósito exclusivo de facilitar o atendimento direto. A {company.brandName}{" "}
          não controla nem se responsabiliza pelas políticas de privacidade, termos de uso, condutas
          ou disponibilidade dessas plataformas terceiras. Recomendamos a leitura dos respectivos
          termos ao acessá-las.
        </p>
      </section>

      {/* 11. Alterações dos Termos */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          11. Alterações dos Termos
        </h2>
        <p>
          A {company.brandName} reserva-se o direito de atualizar, revisar ou modificar estes Termos de
          Uso periodicamente para refletir evoluções institucionais, novos serviços ou alterações na
          legislação aplicável. As modificações passarão a vigorar na data indicada no cabeçalho
          deste documento.
        </p>
      </section>

      {/* 12. Lei Aplicável */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          12. Lei Aplicável
        </h2>
        <p>
          Estes Termos de Uso são regidos e interpretados integralmente de acordo com a legislação da{" "}
          <strong className="text-zinc-950 font-semibold">{terms.applicableLawCountry}</strong>.
        </p>
      </section>

      {/* 13. Foro */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          13. Foro
        </h2>
        <p>
          Para dirimir controvérsias decorrentes da interpretação ou aplicação destes Termos, as
          partes elegem o foro do domicílio do usuário, quando aplicável norma imperativa de proteção
          ao consumidor, ou o foro competente da sede da {company.brandName} para relações puramente
          corporativas e civis em que permitida a eleição pelas partes.
        </p>
        {terms.courtJurisdiction && (
          <p className="text-sm font-medium text-zinc-800">
            Foro eleito: {terms.courtJurisdiction}
          </p>
        )}
      </section>

      {/* 14. Contato */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          14. Contato
        </h2>
        <p>
          Em caso de dúvidas, solicitações ou esclarecimentos relativos a estes Termos de Uso, entre em
          contato com a equipe da {company.brandName} através do e-mail oficial:
        </p>
        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 inline-block text-sm">
          <span className="font-semibold text-zinc-950">Canal de Atendimento: </span>
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
