import React from "react";

export function BackgroundGraphics() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Círculo incompleto superior direito com rotação ultralenta */}
      <svg
        className="absolute -top-32 right-[-10%] w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] text-zinc-200/50 dark:text-blue-900/15 animate-[spin_120s_linear_infinite]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="300"
          cy="300"
          r="260"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="400 120"
        />
        <circle
          cx="300"
          cy="300"
          r="180"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="4 8"
        />
        {/* Pequeno detalhe geométrico em azul NEXORA discreto */}
        <circle cx="560" cy="300" r="3" fill="#2563EB" opacity="0.35" />
      </svg>

      {/* Linhas finas e forma sutil no centro-esquerdo */}
      <svg
        className="absolute top-[35%] -left-24 w-[480px] h-[480px] text-zinc-200/40 dark:text-zinc-700/15"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 240 Q 240 60 460 240"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="180 40"
        />
        <circle cx="240" cy="240" r="160" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <circle cx="240" cy="80" r="2.5" fill="#2563EB" opacity="0.3" />
      </svg>

      {/* Grid de micropontos muito translúcidos no canto inferior direito */}
      <svg
        className="absolute bottom-10 right-10 w-48 h-48 text-zinc-300/30 dark:text-zinc-700/20"
        fill="currentColor"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="1" />
        <circle cx="30" cy="10" r="1" />
        <circle cx="50" cy="10" r="1" />
        <circle cx="70" cy="10" r="1" />
        <circle cx="90" cy="10" r="1" />

        <circle cx="10" cy="30" r="1" />
        <circle cx="30" cy="30" r="1" />
        <circle cx="50" cy="30" r="1" />
        <circle cx="70" cy="30" r="1" />
        <circle cx="90" cy="30" r="1" />

        <circle cx="10" cy="50" r="1" />
        <circle cx="30" cy="50" r="1" />
        <circle cx="50" cy="50" r="1" />
        <circle cx="70" cy="50" r="1" />
        <circle cx="90" cy="50" r="1" />

        <circle cx="10" cy="70" r="1" />
        <circle cx="30" cy="70" r="1" />
        <circle cx="50" cy="70" r="1" />
        <circle cx="70" cy="70" r="1" />
        <circle cx="90" cy="70" r="1" />
      </svg>
    </div>
  );
}
