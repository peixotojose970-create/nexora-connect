import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TransformationSection } from "../components/TransformationSection";

describe("TransformationSection (Antes e Depois)", () => {
  it("renders main title and contextual text correctly", () => {
    render(<TransformationSection />);

    expect(
      screen.getByText(/Quando a presença digital muda, a percepção também muda/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Uma empresa pode ter um ótimo produto e ainda assim transmitir uma imagem desorganizada/i
      )
    ).toBeInTheDocument();
  });

  it("renders all 6 points of ANTES and all 6 points of DEPOIS", () => {
    render(<TransformationSection />);

    // ANTES
    expect(screen.getByText(/site desorganizado/i)).toBeInTheDocument();
    expect(screen.getByText(/identidade visual inconsistente/i)).toBeInTheDocument();
    expect(screen.getByText(/comunicação confusa/i)).toBeInTheDocument();
    expect(screen.getByText(/imagens ruins/i)).toBeInTheDocument();
    expect(screen.getByText(/informações difíceis de encontrar/i)).toBeInTheDocument();
    expect(screen.getByText(/experiência ruim no celular/i)).toBeInTheDocument();

    // DEPOIS
    expect(screen.getByText(/identidade visual organizada/i)).toBeInTheDocument();
    expect(screen.getByText(/site profissional/i)).toBeInTheDocument();
    expect(screen.getByText(/comunicação clara/i)).toBeInTheDocument();
    expect(screen.getByText(/imagens melhores/i)).toBeInTheDocument();
    expect(screen.getByText(/informações bem organizadas/i)).toBeInTheDocument();
    expect(screen.getByText(/experiência mobile melhor/i)).toBeInTheDocument();
  });

  it("renders the 4 visual benefits without inventing fake numbers or sales promises", () => {
    const { container } = render(<TransformationSection />);

    expect(screen.getByText(/“Mais clareza”/i)).toBeInTheDocument();
    expect(screen.getByText(/“Mais organização”/i)).toBeInTheDocument();
    expect(screen.getByText(/“Melhor experiência”/i)).toBeInTheDocument();
    expect(screen.getByText(/“Mais profissionalismo”/i)).toBeInTheDocument();

    // Strictly ensure no fake metrics / sales increases are present
    const content = container.textContent || "";
    expect(content).not.toMatch(/aumento de vendas/i);
    expect(content).not.toMatch(/\d{2,3}% de vendas/i);
  });

  it("accepts custom beforeImage and afterImage props", () => {
    render(
      <TransformationSection
        beforeImage="/custom-before.png"
        afterImage="/custom-after.png"
      />
    );

    const beforeImgs = screen.getAllByAltText(/Visualização Antes/i);
    const afterImgs = screen.getAllByAltText(/Visualização Depois/i);

    expect(beforeImgs.some((img) => img.getAttribute("src") === "/custom-before.png")).toBe(true);
    expect(afterImgs.some((img) => img.getAttribute("src") === "/custom-after.png")).toBe(true);
  });
});
