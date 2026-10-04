import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { ThemeSelector } from "@/components/ThemeSelector";
import { Route as IndexRoute } from "@/routes/index";

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

describe("Theme and Content Refinements", () => {
  it("defaults to LIGHT theme and switches between LIGHT and DARK saving preference", () => {
    function TestConsumer() {
      const { theme } = useTheme();
      return (
        <div>
          <span data-testid="current-theme">{theme}</span>
          <ThemeSelector />
        </div>
      );
    }

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    const themeDisplay = screen.getByTestId("current-theme");
    expect(themeDisplay.textContent).toBe("light");

    const darkButton = screen.getByRole("button", { name: /dark/i });
    fireEvent.click(darkButton);

    expect(themeDisplay.textContent).toBe("dark");
    expect(localStorage.getItem("nexora_theme_preference")).toBe("dark");

    const lightButton = screen.getByRole("button", { name: /light/i });
    fireEvent.click(lightButton);

    expect(themeDisplay.textContent).toBe("light");
    expect(localStorage.getItem("nexora_theme_preference")).toBe("light");
  });

  it("renders Sobre a NEXORA with exact required texts and pillars", () => {
    const IndexComponent = IndexRoute.options.component!;
    const { container } = render(
      <ThemeProvider>
        <IndexComponent />
      </ThemeProvider>
    );

    const sobreSection = container.querySelector("#sobre");
    expect(sobreSection).toBeInTheDocument();

    const withinSobre = within(sobreSection as HTMLElement);

    // Title
    expect(withinSobre.getByRole("heading", { level: 2, name: "Sobre a NEXORA" })).toBeInTheDocument();

    // Main text
    expect(
      withinSobre.getByText(
        "A NEXORA ajuda empresas a melhorar sua presença digital através de tecnologia, estratégia, inteligência artificial e criatividade."
      )
    ).toBeInTheDocument();

    // Additional paragraphs
    expect(
      withinSobre.getByText(
        "Transformamos necessidades de negócio em experiências digitais mais claras, profissionais e funcionais."
      )
    ).toBeInTheDocument();

    expect(
      withinSobre.getByText(
        "Nosso trabalho passa por entender o que a empresa precisa, definir a melhor direção e criar uma solução que represente melhor sua marca."
      )
    ).toBeInTheDocument();

    // Pillars
    expect(withinSobre.getByRole("heading", { level: 3, name: "ESTRATÉGIA" })).toBeInTheDocument();
    expect(withinSobre.getByText("Entendemos o objetivo antes de começar.")).toBeInTheDocument();

    expect(withinSobre.getByRole("heading", { level: 3, name: "TECNOLOGIA" })).toBeInTheDocument();
    expect(
      withinSobre.getByText(
        "Usamos ferramentas modernas e inteligência artificial para acelerar e melhorar a criação."
      )
    ).toBeInTheDocument();

    expect(withinSobre.getByRole("heading", { level: 3, name: "DESIGN" })).toBeInTheDocument();
    expect(withinSobre.getByText("Cuidamos da apresentação, da experiência e dos detalhes.")).toBeInTheDocument();
  });

  it("renders Como funciona with exact 4 steps and bottom disclaimer", () => {
    const IndexComponent = IndexRoute.options.component!;
    const { container } = render(
      <ThemeProvider>
        <IndexComponent />
      </ThemeProvider>
    );

    const comoFuncionaSection = container.querySelector("#como-funciona");
    expect(comoFuncionaSection).toBeInTheDocument();

    const withinComo = within(comoFuncionaSection as HTMLElement);

    expect(withinComo.getByRole("heading", { level: 2, name: "Como funciona." })).toBeInTheDocument();
    expect(
      withinComo.getByText("Um processo simples para transformar uma necessidade em uma solução.")
    ).toBeInTheDocument();

    expect(withinComo.getByRole("heading", { level: 3, name: "CONVERSA" })).toBeInTheDocument();
    expect(
      withinComo.getByText("Você nos explica o que precisa, qual é o objetivo e o que espera melhorar.")
    ).toBeInTheDocument();

    expect(withinComo.getByRole("heading", { level: 3, name: "ESTRATÉGIA" })).toBeInTheDocument();
    expect(
      withinComo.getByText("Analisamos a necessidade e definimos a melhor direção para o projeto.")
    ).toBeInTheDocument();

    expect(withinComo.getByRole("heading", { level: 3, name: "CRIAÇÃO" })).toBeInTheDocument();
    expect(
      withinComo.getByText(
        "Desenvolvemos a solução, apresentamos o trabalho e ajustamos os detalhes necessários."
      )
    ).toBeInTheDocument();

    expect(withinComo.getByRole("heading", { level: 3, name: "ENTREGA" })).toBeInTheDocument();
    expect(
      withinComo.getByText("Finalizamos o projeto e entregamos tudo pronto para utilização.")
    ).toBeInTheDocument();

    expect(
      withinComo.getByText(
        "Cada projeto pode seguir um caminho diferente de acordo com a necessidade da empresa."
      )
    ).toBeInTheDocument();
  });

  it("renders Services with exact refined descriptions", () => {
    const IndexComponent = IndexRoute.options.component!;
    render(
      <ThemeProvider>
        <IndexComponent />
      </ThemeProvider>
    );

    expect(
      screen.getByText("Sites profissionais para apresentar sua empresa, seus serviços e sua marca.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Páginas criadas para apresentar uma oferta, serviço, campanha ou produto de forma clara."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("Cardápios digitais organizados, modernos e fáceis de acessar pelo celular.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Imagens, artes e conteúdos para fortalecer a apresentação da sua marca.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Peças digitais para divulgar produtos, serviços, promoções e campanhas.")
    ).toBeInTheDocument();
  });
});
