export interface VisualShowcaseSectionProps {
  id?: string;
  className?: string;
}

const SHOWCASE_MOCKUP_IMAGE =
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85";

export function VisualShowcaseSection({
  id = "destaque-visual",
  className = "",
}: VisualShowcaseSectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 bg-white border-t border-zinc-100 ${className}`}
      aria-label="Destaque visual da NEXORA"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Chamada visual com pouquíssimo texto */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 block">
            VISÃO INTEGRADA
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15]">
            Do primeiro clique à percepção da sua marca.
          </h2>
        </div>

        {/* Imagem grande / Mockup de website, smartphone e conteúdo visual */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-zinc-200/80 bg-zinc-100">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
            <img
              src={SHOWCASE_MOCKUP_IMAGE}
              alt="Website, smartphone e conteúdo visual desenvolvidos pela NEXORA"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Overlay sutil para elegância */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Badges sutis nos cantos reforçando website / smartphone / conteúdo visual */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center gap-2 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-medium border border-zinc-200/60 shadow-xs">
                Website
              </span>
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-medium border border-zinc-200/60 shadow-xs">
                Smartphone
              </span>
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-medium border border-zinc-200/60 shadow-xs">
                Conteúdo visual
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
