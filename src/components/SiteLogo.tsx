import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface SiteLogoProps {
  className?: string;
  size?: number;
}

export function SiteLogo({ className = "", size = 32 }: SiteLogoProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`relative rounded-lg p-1 flex items-center justify-center shrink-0 transition-colors ${
        theme === "dark"
          ? "bg-zinc-900 border border-zinc-700/60 shadow-xs"
          : "bg-zinc-950 shadow-xs"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={theme === "dark" ? "/nexora-logo-dark.png" : "/nexora-logo-light.png"}
        alt="Símbolo oficial NEXORA"
        className="w-full h-full object-contain select-none"
        width={size}
        height={size}
        loading="eager"
      />
    </div>
  );
}
