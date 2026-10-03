import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TransformationSection } from "../components/TransformationSection";

describe("TransformationSection (Antes e Depois)", () => {
  it("renders main title and contextual text correctly", () => {
    render(<TransformationSection />);

    expect(screen.getByText("Antes e depois.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Uma presença digital bem construída muda a percepção sobre uma empresa."
      )
    ).toBeInTheDocument();
  });

  it("renders ANTES and DEPOIS labels without fake numbers or sales results", () => {
    const { container } = render(<TransformationSection />);

    expect(screen.getByText("ANTES")).toBeInTheDocument();
    expect(screen.getByText("DEPOIS")).toBeInTheDocument();

    const content = container.textContent || "";
    expect(content).not.toMatch(/aumento de vendas/i);
    expect(content).not.toMatch(/\d{2,3}% de vendas/i);
    expect(content).not.toMatch(/site desorganizado/i);
  });

  it("accepts custom beforeImage and afterImage props", () => {
    render(
      <TransformationSection
        beforeImage="/custom-before.png"
        afterImage="/custom-after.png"
      />
    );

    const beforeImg = screen.getByAltText(/Visualização Antes/i);
    const afterImg = screen.getByAltText(/Visualização Depois/i);

    expect(beforeImg.getAttribute("src")).toBe("/custom-before.png");
    expect(afterImg.getAttribute("src")).toBe("/custom-after.png");
  });
});
