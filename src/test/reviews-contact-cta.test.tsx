import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { QuickBenefitsSection } from "@/components/QuickBenefitsSection";
import { VisualShowcaseSection } from "@/components/VisualShowcaseSection";

describe("ReviewsSection", () => {
  it("renders reviews carousel with title and example indicator when using sample data", () => {
    render(<ReviewsSection id="test-reviews" />);
    expect(screen.getByText("O que nossos clientes dizem.")).toBeInTheDocument();
    expect(screen.getByText("EXEMPLO DE DEPOIMENTO")).toBeInTheDocument();
  });

  it("can be disabled when enabled=false", () => {
    const { container } = render(<ReviewsSection id="test-reviews-disabled" enabled={false} />);
    expect(container.firstChild).toBeNull();
  });
});

describe("QuickBenefitsSection", () => {
  it("renders the 3 objective benefits", () => {
    render(<QuickBenefitsSection />);
    expect(screen.getByText("Design profissional")).toBeInTheDocument();
    expect(screen.getByText("Experiência mobile")).toBeInTheDocument();
    expect(screen.getByText("Soluções sob medida")).toBeInTheDocument();
  });
});

describe("VisualShowcaseSection", () => {
  it("renders visual headline and mockup indicators", () => {
    render(<VisualShowcaseSection />);
    expect(
      screen.getByText("Do primeiro clique à percepção da sua marca.")
    ).toBeInTheDocument();
    expect(screen.getByText("Website")).toBeInTheDocument();
    expect(screen.getByText("Smartphone")).toBeInTheDocument();
    expect(screen.getByText("Conteúdo visual")).toBeInTheDocument();
  });
});

describe("FinalCtaSection", () => {
  it("renders final CTA title, subtitle and WhatsApp button", () => {
    render(<FinalCtaSection id="test-cta" />);
    expect(
      screen.getByText("Vamos melhorar a presença digital da sua empresa?")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Conte o que sua empresa precisa e vamos conversar sobre a solução mais adequada."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Falar com a NEXORA")).toBeInTheDocument();
  });
});
