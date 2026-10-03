import { Sparkles, Smartphone, Sliders } from "lucide-react";

export interface QuickBenefitsSectionProps {
  id?: string;
  className?: string;
}

export function QuickBenefitsSection({
  id = "beneficios-rapidos",
  className = "",
}: QuickBenefitsSectionProps) {
  const benefits = [
    {
      icon: Sparkles,
      title: "Design profissional",
      description: "Estética refinada e comunicação visual clara que transmite autoridade imediata.",
    },
    {
      icon: Smartphone,
      title: "Experiência mobile",
      description: "Navegação fluida e rápida adaptada para celulares em todos os formatos.",
    },
    {
      icon: Sliders,
      title: "Soluções sob medida",
      description: "Projetos desenhados exatamente para os objetivos específicos do seu negócio.",
    },
  ];

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 bg-white border-t border-zinc-100 ${className}`}
      aria-label="Benefícios objetivos"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`flex items-start gap-4 ${
                  index !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center shrink-0 text-[#2563EB]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
