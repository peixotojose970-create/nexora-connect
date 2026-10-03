import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/config/legal";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | NEXORA" },
      {
        name: "description",
        content:
          "Política de Privacidade da NEXORA. Diretrizes de governança, segurança da informação e tratamento de dados pessoais segundo a LGPD.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { company, privacy } = LEGAL_CONFIG;

  return (
    <LegalLayout
      title="Política de Privacidade"
      badge="Proteção de Dados & LGPD"
      lastUpdated={privacy.lastUpdated}
      icon="privacy"
    >
      {/* 1. Quem somos */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          1. Quem somos
        </h2>
        <p>
          A <strong className="text-zinc-950 font-semibold">{company.brandName}</strong> é uma
          iniciativa especializada na criação e no desenvolvimento de soluções digitais corporativas,
          incluindo websites de alta performance, landing pages e peças de comunicação visual para
          empresas.
        </p>
        <p>
          No escopo das atividades realizadas por meio deste website institucional, a {company.brandName}{" "}
          atua predominantemente como controladora dos dados pessoais fornecidos voluntariamente por
          visitantes e interessados para fins de contato e atendimento inicial.
        </p>

        {/* Informações institucionais formais - exibição condicional caso preenchidas */}
        {(company.corporateName || company.cnpj || company.address) && (
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-sm space-y-1">
            {company.corporateName && (
              <div>
                <span className="font-semibold text-zinc-950">Razão Social:</span> {company.corporateName}
              </div>
            )}
            {company.cnpj && (
              <div>
                <span className="font-semibold text-zinc-950">CNPJ:</span> {company.cnpj}
              </div>
            )}
            {company.address && (
              <div>
                <span className="font-semibold text-zinc-950">Endereço:</span> {company.address}
              </div>
            )}
          </div>
        )}
      </section>

      {/* 2. Quais dados podem ser tratados */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          2. Quais dados podem ser tratados
        </h2>
        <p>
          Tratamos apenas os dados estritamente pertinentes e necessários para viabilizar o
          atendimento às manifestações espontâneas de clientes e interessados:
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <h3 className="font-bold text-zinc-950 text-sm mb-1">
              Dados Cadastrais e de Identificação
            </h3>
            <p className="text-sm text-zinc-600">
              Nome completo, nome da empresa ou negócio representado e cargo/área de atuação,
              quando informados pelo usuário.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <h3 className="font-bold text-zinc-950 text-sm mb-1">
              Dados de Comunicação Direta
            </h3>
            <p className="text-sm text-zinc-600">
              Endereço de e-mail e número de telefone celular / WhatsApp.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <h3 className="font-bold text-zinc-950 text-sm mb-1">
              Conteúdo da Mensagem
            </h3>
            <p className="text-sm text-zinc-600">
              Informações, descrições de projeto, dúvidas e detalhes inseridos espontaneamente pelo
              titular na solicitação de orçamento ou proposta.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <h3 className="font-bold text-zinc-950 text-sm mb-1">
              Dados Técnicos Básicos de Navegação
            </h3>
            <p className="text-sm text-zinc-600">
              Registros estritamente técnicos de conexão (como endereço IP, data e hora de acesso,
              conforme exigência legal do art. 15 da Lei nº 12.965/2014) gerados pelos servidores de
              hospedagem para assegurar estabilidade e integridade da infraestrutura.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Como os dados são coletados */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          3. Como os dados são coletados
        </h2>
        <p>Os dados tratados neste site são obtidos por meio de:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Envio direto pelo titular:</strong> quando você envia uma mensagem por e-mail ou
            inicia uma conversa via WhatsApp utilizando os canais disponibilizados na seção de
            contato;
          </li>
          <li>
            <strong>Registros de infraestrutura técnica:</strong> gerados de modo automatizado pelo
            servidor para manter a segurança do tráfego web e prevenir ataques cibernéticos.
          </li>
        </ul>
        <p className="text-sm text-zinc-500 italic">
          Não realizamos compra de bancos de dados nem coleta oculta de informações pessoais sensíveis.
        </p>
      </section>

      {/* 4. Para quais finalidades utilizamos os dados */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          4. Para quais finalidades utilizamos os dados
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Responder a dúvidas, consultas e manifestações enviadas aos nossos canais;
          </li>
          <li>
            Elaborar, apresentar e negociar orçamentos e propostas técnicas solicitadas pelo cliente;
          </li>
          <li>
            Formalizar contratos de prestação de serviços quando a proposta for aceita;
          </li>
          <li>
            Garantir a segurança operacional do website e prevenir tentativas de fraude ou ataques
            à infraestrutura técnica;
          </li>
          <li>
            Cumprir obrigações legais, regulatórias ou ordens judiciais emitidas por autoridades
            competentes.
          </li>
        </ul>
      </section>

      {/* 5. Bases legais aplicáveis */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          5. Bases legais aplicáveis
        </h2>
        <p>
          Todo tratamento de dados pessoais conduzido pela {company.brandName} fundamenta-se nas
          hipóteses autorizativas do artigo 7º da Lei Geral de Proteção de Dados (Lei nº 13.709/2018):
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <div className="text-xs font-mono font-bold text-[#2563EB] uppercase mb-1">
              Art. 7º, V, LGPD
            </div>
            <p className="text-sm text-zinc-800 font-semibold mb-1">
              Execução de Contrato ou Procedimentos Preliminares
            </p>
            <p className="text-sm text-zinc-600">
              Aplicada ao atendimento inicial de solicitações de propostas comerciais e orçamentos
              realizados a pedido expresso do próprio titular interessado.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <div className="text-xs font-mono font-bold text-[#2563EB] uppercase mb-1">
              Art. 7º, IX, LGPD
            </div>
            <p className="text-sm text-zinc-800 font-semibold mb-1">
              Legítimo Interesse do Controlador
            </p>
            <p className="text-sm text-zinc-600">
              Aplicada para garantir suporte ao atendimento e assegurar a defesa de direitos e
              respostas adequadas no âmbito da atividade corporativa, respeitadas as legítimas
              expectativas e liberdades fundamentais do titular.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <div className="text-xs font-mono font-bold text-[#2563EB] uppercase mb-1">
              Art. 7º, II, LGPD
            </div>
            <p className="text-sm text-zinc-800 font-semibold mb-1">
              Cumprimento de Obrigação Legal ou Regulatória
            </p>
            <p className="text-sm text-zinc-600">
              Aplicada para armazenamento de registros de acesso a aplicações de internet em estrita
              observância ao Marco Civil da Internet (Lei nº 12.965/2014) e legislações correlatas.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Compartilhamento de dados */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          6. Compartilhamento de dados
        </h2>
        <p>
          A {company.brandName} <strong className="text-zinc-950 font-semibold">não vende, não aluga e não comercializa</strong> dados
          pessoais com terceiros sob qualquer pretexto.
        </p>
        <p>
          O compartilhamento restringe-se estritamente aos operadores técnicos indispensáveis para a
          manutenção operacional dos nossos canais digitais (como servidores de hospedagem e
          provedores de e-mail institucional) ou diante de requisição formal fundamentada de
          autoridades administrativas, policiais ou judiciais competentes.
        </p>
      </section>

      {/* 7. Serviços e fornecedores utilizados */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          7. Serviços e fornecedores utilizados
        </h2>
        <p>
          Para hospedar e operacionalizar este website, contratamos serviços de infraestrutura de rede
          e provedores especializados em computação em nuvem que adotam elevados padrões de segurança
          física e lógica.
        </p>
        <p>
          Ressaltamos que não integramos ferramentas de rastreamento comportamental invasivo, pixels
          publicitários de terceiros ou serviços de medição individualizada que desrespeitem o princípio
          da necessidade da LGPD.
        </p>
      </section>

      {/* 8. Transferências internacionais, quando aplicável */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          8. Transferências internacionais
        </h2>
        {privacy.internationalTransferEnabled && privacy.internationalTransferDescription ? (
          <p>{privacy.internationalTransferDescription}</p>
        ) : (
          <p>
            Como regra operacional primordial, buscamos manter os dados em ambientes seguros. Na
            eventualidade de servidores de infraestrutura em nuvem estarem localizados fora do território
            nacional, exigimos de nossos fornecedores cláusulas contratuais de conformidade, garantias
            técnicas equivalentes e adequação aos padrões exigidos pelo art. 33 da LGPD.
          </p>
        )}
      </section>

      {/* 9. Armazenamento e retenção */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          9. Armazenamento e retenção
        </h2>
        <p>{privacy.retentionPolicyDescription}</p>
        <p>
          Registros de conexão ao website são mantidos sob sigilo pelo prazo obrigatório de 6 (seis)
          meses, em cumprimento ao artigo 15 da Lei Federal nº 12.965/2014 (Marco Civil da Internet),
          sendo descartados de forma segura após o decurso de tal prazo, ressalvada eventual ordem
          judicial específica de preservação.
        </p>
      </section>

      {/* 10. Segurança da informação */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          10. Segurança da informação
        </h2>
        <p>
          Adotamos medidas técnicas, administrativas e organizacionais aptas a proteger os dados
          pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição,
          perda, alteração ou comunicação indevida:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Criptografia de ponta a ponta nas conexões web através do protocolo HTTPS/TLS;</li>
          <li>Controles rígidos de privilégios de acesso aos sistemas de comunicação;</li>
          <li>Monitoramento contra abusos, injeções maliciosas e requisições anômalas de rede.</li>
        </ul>
      </section>

      {/* 11. Direitos dos titulares */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          11. Direitos dos titulares
        </h2>
        <p>
          Nos termos do artigo 18 da LGPD, o titular de dados pessoais tem o direito de solicitar à{" "}
          {company.brandName}, a qualquer momento e mediante requisição clara:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirmação da existência de tratamento de seus dados pessoais;</li>
          <li>Acesso aos dados pessoais tratados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em
            desconformidade com o disposto na LGPD;
          </li>
          <li>
            Eliminação dos dados pessoais tratados com o consentimento do titular, ressalvadas as
            hipóteses de conservação legalmente admitidas (ex.: cumprimento de obrigação legal ou
            exercício regular de direitos em processo);
          </li>
          <li>Informação sobre as entidades públicas e privadas com as quais realizou compartilhamento;</li>
          <li>
            Revogação do consentimento, quando o tratamento se basear exclusivamente nesta modalidade.
          </li>
        </ul>
        <p className="text-sm text-zinc-500">
          Nota de clareza: a eliminação não poderá ser efetuada quando a manutenção for autorizada ou
          exigida por lei, como registros do Marco Civil da Internet ou comprovações fiscais e
          tributárias de serviços prestados.
        </p>
      </section>

      {/* 12. Cookies e tecnologias semelhantes */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          12. Cookies e tecnologias semelhantes
        </h2>
        <p>
          Este website utiliza apenas cookies e recursos de armazenamento local estritamente necessários
          para o funcionamento técnico das páginas, integridade de navegação e segurança da sessão.
        </p>
        <p>
          Para obter detalhes completos sobre os arquivos e configurações empregadas, consulte a nossa{" "}
          <a href="/cookies" className="text-[#2563EB] hover:underline font-semibold">
            Política de Cookies
          </a>
          .
        </p>
      </section>

      {/* 13. Atendimento às solicitações dos titulares */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          13. Atendimento às solicitações dos titulares
        </h2>
        <p>
          Para exercer quaisquer dos seus direitos de titular, basta enviar uma mensagem formal ao nosso
          canal de privacidade indicado abaixo, com a especificação da sua solicitação e dados que
          permitam confirmar sua identidade.
        </p>
        <p>
          As requisições serão analisadas e respondidas dentro de prazos razoáveis, em estrita
          consonância com os prazos regulamentares estabelecidos pela Autoridade Nacional de Proteção de
          Dados (ANPD).
        </p>
      </section>

      {/* 14. Alterações desta Política */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          14. Alterações desta Política
        </h2>
        <p>
          Buscando o constante aprimoramento de nossos procedimentos de segurança e conformidade
          jurídica, esta Política de Privacidade poderá ser revisada e atualizada a qualquer tempo. A
          data da versão vigente constará no cabeçalho desta página.
        </p>
      </section>

      {/* 15. Canal de privacidade / Encarregado */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
          15. Canal de Privacidade e Comunicação com o Titular
        </h2>
        <p>
          Para dúvidas, requisições de titulares ou esclarecimentos sobre as práticas de governança de
          dados da {company.brandName}, utilize o canal dedicado de comunicação:
        </p>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 space-y-2">
          {privacy.hasDesignatedDpo && privacy.dpoName ? (
            <div>
              <span className="font-semibold text-zinc-950">Encarregado pelo Tratamento de Dados (DPO):</span>{" "}
              {privacy.dpoName}
            </div>
          ) : (
            <p className="text-sm text-zinc-600">
              A {company.brandName} disponibiliza um canal direto e centralizado de comunicação para
              atendimento das requisições e dúvidas dos titulares de dados pessoais e contato com a ANPD.
            </p>
          )}

          <div className="text-sm">
            <span className="font-semibold text-zinc-950">E-mail para Privacidade: </span>
            <a
              href={`mailto:${privacy.privacyContactEmail}`}
              className="text-[#2563EB] hover:underline font-mono"
            >
              {privacy.privacyContactEmail}
            </a>
          </div>

          {privacy.privacyContactName && (
            <div className="text-sm">
              <span className="font-semibold text-zinc-950">Responsável pelo Atendimento: </span>
              {privacy.privacyContactName}
            </div>
          )}
        </div>
      </section>
    </LegalLayout>
  );
}
