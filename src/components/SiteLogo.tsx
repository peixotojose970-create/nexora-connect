interface SiteLogoProps {
  className?: string;
  size?: number;
}

export function SiteLogo({ className = "", size = 32 }: SiteLogoProps) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-[#1e2c26] text-[#d9e5df] shadow-sm dark:bg-[#d9e5df] dark:text-[#1e2c26] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" width={size * 0.6} height={size * 0.6} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 7.5 16 25l10.5-17.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 7.5 16 16.5l5.5-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".72" />
      </svg>
    </span>
  );
}
