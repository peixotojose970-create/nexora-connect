import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLogo } from "./SiteLogo";
import { ThemeSelector } from "./ThemeSelector";

const contact = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20conversar%20com%20a%20VELTRION%20sobre%20um%20projeto%20digital.";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-14 dark:border-white/10 dark:bg-[#121817] sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Link to="/" className="flex items-center gap-3" aria-label="VELTRION — Início">
              <SiteLogo size={34} />
              <span className="text-[17px] font-bold tracking-[0.16em]">VELTRION</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">Estratégia, design e tecnologia para empresas que querem avançar com direção.</p>
          </div>
          <a href={contact} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#294238] dark:text-[#c4d6cb]">Iniciar uma conversa <ArrowUpRight className="size-4" /></a>
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-3"><a href="#solucoes" className="hover:text-[#547565]">Soluções</a><a href="#projetos" className="hover:text-[#547565]">Projetos</a><a href="#processo" className="hover:text-[#547565]">Como funciona</a><Link to="/termos" className="hover:text-[#547565]">Termos de Uso</Link><Link to="/privacidade" className="hover:text-[#547565]">Privacidade</Link><Link to="/cookies" className="hover:text-[#547565]">Cookies</Link></div>
          <div className="flex items-center gap-5"><ThemeSelector /><span>© {new Date().getFullYear()} VELTRION</span></div>
        </div>
      </div>
    </footer>
  );
}
