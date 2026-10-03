import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Route as TermsRoute } from "@/routes/termos";
import { Route as PrivacyRoute } from "@/routes/privacidade";
import { Route as CookiesRoute } from "@/routes/cookies";
import { LEGAL_CONFIG } from "@/config/legal";

vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual<any>("@tanstack/react-router");
  return {
    ...actual,
    Link: ({ children, to, href, ...props }: any) => (
      <a href={to || href || "#"} {...props}>
        {children}
      </a>
    ),
  };
});

describe("Legal Area & Institutional Structure", () => {
  it("does not render forbidden bracket placeholders in legal pages", () => {
    const TermsComponent = TermsRoute.options.component!;
    const PrivacyComponent = PrivacyRoute.options.component!;
    const CookiesComponent = CookiesRoute.options.component!;

    const { container: termsContainer } = render(<TermsComponent />);
    expect(termsContainer.textContent).not.toMatch(/\[inserir/i);
    expect(termsContainer.textContent).not.toMatch(/\[nome do/i);
    expect(termsContainer.textContent).not.toMatch(/\[inserir cnpj\]/i);

    const { container: privacyContainer } = render(<PrivacyComponent />);
    expect(privacyContainer.textContent).not.toMatch(/\[inserir/i);
    expect(privacyContainer.textContent).not.toMatch(/\[nome do/i);
    expect(privacyContainer.textContent).not.toMatch(/\[inserir cnpj\]/i);

    const { container: cookiesContainer } = render(<CookiesComponent />);
    expect(cookiesContainer.textContent).not.toMatch(/\[inserir/i);
    expect(cookiesContainer.textContent).not.toMatch(/\[nome do/i);
  });

  it("renders Terms of Use with structured 14 sections", () => {
    const TermsComponent = TermsRoute.options.component!;
    render(<TermsComponent />);

    expect(screen.getByRole("heading", { level: 1, name: "Termos de Uso" })).toBeInTheDocument();
    expect(screen.getByText(/1\. Disposições Gerais/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. Aceitação dos Termos/i)).toBeInTheDocument();
    expect(screen.getByText(/3\. Uso do Site/i)).toBeInTheDocument();
    expect(screen.getByText(/4\. Serviços da NEXORA/i)).toBeInTheDocument();
    expect(screen.getByText(/5\. Orçamentos, Propostas e Contratações/i)).toBeInTheDocument();
    expect(screen.getByText(/6\. Propriedade Intelectual/i)).toBeInTheDocument();
    expect(screen.getByText(/7\. Conteúdo de Terceiros/i)).toBeInTheDocument();
    expect(screen.getByText(/8\. Disponibilidade do Site/i)).toBeInTheDocument();
    expect(screen.getByText(/9\. Limitação de Responsabilidade/i)).toBeInTheDocument();
    expect(screen.getByText(/10\. Links e Serviços Externos/i)).toBeInTheDocument();
    expect(screen.getByText(/11\. Alterações dos Termos/i)).toBeInTheDocument();
    expect(screen.getByText(/12\. Lei Aplicável/i)).toBeInTheDocument();
    expect(screen.getByText(/13\. Foro/i)).toBeInTheDocument();
    expect(screen.getByText(/14\. Contato/i)).toBeInTheDocument();
  });

  it("renders Privacy Policy with required 15 sections and configurable privacy channel", () => {
    const PrivacyComponent = PrivacyRoute.options.component!;
    render(<PrivacyComponent />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Política de Privacidade" })
    ).toBeInTheDocument();
    expect(screen.getByText(/1\. Quem somos/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. Quais dados podem ser tratados/i)).toBeInTheDocument();
    expect(screen.getByText(/3\. Como os dados são coletados/i)).toBeInTheDocument();
    expect(screen.getByText(/4\. Para quais finalidades utilizamos os dados/i)).toBeInTheDocument();
    expect(screen.getByText(/5\. Bases legais aplicáveis/i)).toBeInTheDocument();
    expect(screen.getByText(/6\. Compartilhamento de dados/i)).toBeInTheDocument();
    expect(screen.getByText(/7\. Serviços e fornecedores utilizados/i)).toBeInTheDocument();
    expect(screen.getByText(/8\. Transferências internacionais/i)).toBeInTheDocument();
    expect(screen.getByText(/9\. Armazenamento e retenção/i)).toBeInTheDocument();
    expect(screen.getByText(/10\. Segurança da informação/i)).toBeInTheDocument();
    expect(screen.getByText(/11\. Direitos dos titulares/i)).toBeInTheDocument();
    expect(screen.getByText(/12\. Cookies e tecnologias semelhantes/i)).toBeInTheDocument();
    expect(screen.getByText(/13\. Atendimento às solicitações dos titulares/i)).toBeInTheDocument();
    expect(screen.getByText(/14\. Alterações desta Política/i)).toBeInTheDocument();
    expect(screen.getByText(/15\. Canal de Privacidade e Comunicação com o Titular/i)).toBeInTheDocument();

    expect(screen.getByText(LEGAL_CONFIG.privacy.privacyContactEmail)).toBeInTheDocument();
  });

  it("renders Cookies Policy with catalog table and browser management guidance", () => {
    const CookiesComponent = CookiesRoute.options.component!;
    render(<CookiesComponent />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Política de Cookies" })
    ).toBeInTheDocument();
    expect(screen.getByText(/1\. O que são Cookies\?/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. Para que podem ser utilizados/i)).toBeInTheDocument();
    expect(screen.getByText(/3\. Cookies Estritamente Necessários/i)).toBeInTheDocument();
    expect(screen.getByText(/4\. Cookies Analíticos/i)).toBeInTheDocument();
    expect(screen.getByText(/5\. Cookies de Terceiros/i)).toBeInTheDocument();
    expect(screen.getByText(/6\. Catálogo de Cookies e Tecnologias de Sessão/i)).toBeInTheDocument();
    expect(screen.getByText(/7\. Gerenciamento de Preferências no Navegador/i)).toBeInTheDocument();
    expect(screen.getByText(/8\. Como entrar em contato/i)).toBeInTheDocument();
  });
});
