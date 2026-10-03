import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { ContactSection } from "@/components/ContactSection";

describe("ReviewsSection", () => {
  it("shows authentic institutional notice when no reviews are passed", () => {
    render(<ReviewsSection id="test-reviews" />);
    expect(screen.getByText("O que nossos clientes dizem.")).toBeInTheDocument();
    expect(
      screen.getByText("Primeiros projetos e feedbacks em construção ativa.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Não utilizamos depoimentos fictícios nem notas inventadas/i)
    ).toBeInTheDocument();
  });

  it("renders genuine reviews cards when real reviews are provided", () => {
    const realReviews = [
      {
        id: "1",
        clientName: "Carlos Eduardo",
        company: "Vanguard Tech",
        comment: "Excelente reestruturação da nossa presença digital.",
        rating: 5,
        role: "Diretor Executivo",
      },
    ];

    render(<ReviewsSection id="test-reviews-real" reviews={realReviews} />);
    // Since desktop grid and mobile carousel render cards, getAllByText matches both
    const clientNames = screen.getAllByText("Carlos Eduardo");
    expect(clientNames.length).toBeGreaterThanOrEqual(1);

    const companyNames = screen.getAllByText("Vanguard Tech");
    expect(companyNames.length).toBeGreaterThanOrEqual(1);

    const comments = screen.getAllByText("“Excelente reestruturação da nossa presença digital.”");
    expect(comments.length).toBeGreaterThanOrEqual(1);
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

describe("ContactSection", () => {
  it("renders WhatsApp, Instagram, Email and quick talk block", () => {
    render(<ContactSection id="test-contact" />);
    expect(screen.getByRole("heading", { level: 2, name: "Contato" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "WhatsApp" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Instagram" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "E-mail" })).toBeInTheDocument();
    expect(screen.getByText("Prefere falar diretamente?")).toBeInTheDocument();
    expect(screen.getByText("Chamar no WhatsApp")).toBeInTheDocument();
  });
});
