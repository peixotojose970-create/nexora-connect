import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, Settings, Check, X } from "lucide-react";
import { LEGAL_CONFIG } from "@/config/legal";

const CONSENT_STORAGE_KEY = "nexora_cookie_consent_v1";

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export function CookieConsentBanner() {
  const { cookies } = LEGAL_CONFIG;
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    // Apenas exibir se o site estiver configurado com cookies não necessários
    if (!cookies.hasNonEssentialCookies) {
      return;
    }

    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!stored) {
        setIsOpen(true);
      }
    } catch {
      // LocalStorage desativado ou restrito no navegador
    }
  }, [cookies.hasNonEssentialCookies]);

  if (!cookies.hasNonEssentialCookies || !isOpen) {
    return null;
  }

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const preferences: ConsentPreferences = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // Falha silenciosa se armazenamento restrito
    }
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    saveConsent(false, false);
  };

  const handleSavePreferences = () => {
    saveConsent(analyticsAllowed, marketingAllowed);
  };

  return (
    <div
      role="region"
      aria-label="Consentimento de Cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-2xl animate-in fade-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 pr-4">
              <div className="flex items-center gap-2 text-zinc-950 font-bold text-sm">
                <Cookie className="w-4 h-4 text-[#2563EB]" />
                <span>Preferências de Cookies e Privacidade</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Utilizamos cookies para assegurar o funcionamento da plataforma e, com o seu
                consentimento, para fins estatísticos e de melhoria contínua. Consulte a nossa{" "}
                <Link
                  to="/cookies"
                  className="text-[#2563EB] hover:underline font-semibold"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="px-3.5 py-2 rounded-xl border border-zinc-300 hover:border-zinc-400 bg-white text-zinc-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Configurar cookies</span>
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-3.5 py-2 rounded-xl border border-zinc-300 hover:border-zinc-400 bg-white text-zinc-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Recusar</span>
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Aceitar</span>
              </button>
            </div>
          </div>
        ) : (
          /* Painel de Preferências Detalhadas */
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#2563EB]" />
                <h3 className="text-sm font-bold text-zinc-950">
                  Gerenciamento de Preferências de Cookies
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-xs text-zinc-500 hover:text-zinc-950"
              >
                Fechar
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-950">Necessários</span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-semibold">
                    Sempre Ativos
                  </span>
                </div>
                <p className="text-zinc-600 text-[11px]">
                  Imprescindíveis para segurança, roteamento e estabilidade do site.
                </p>
              </div>

              <div className="p-3 rounded-lg border border-zinc-200 bg-white space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="pref-analytics" className="font-semibold text-zinc-950 cursor-pointer">
                    Analíticos
                  </label>
                  <input
                    id="pref-analytics"
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="rounded border-zinc-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4 cursor-pointer"
                  />
                </div>
                <p className="text-zinc-600 text-[11px]">
                  Permitem analisar métricas agregadas de performance e tráfego.
                </p>
              </div>

              <div className="p-3 rounded-lg border border-zinc-200 bg-white space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="pref-marketing" className="font-semibold text-zinc-950 cursor-pointer">
                    Marketing
                  </label>
                  <input
                    id="pref-marketing"
                    type="checkbox"
                    checked={marketingAllowed}
                    onChange={(e) => setMarketingAllowed(e.target.checked)}
                    className="rounded border-zinc-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4 cursor-pointer"
                  />
                </div>
                <p className="text-zinc-600 text-[11px]">
                  Direcionamento personalizado de campanhas externas de marketing.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-3 py-1.5 rounded-lg border border-zinc-300 text-zinc-700 text-xs font-semibold hover:bg-zinc-50 transition-colors"
              >
                Recusar Não Necessários
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-3.5 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
              >
                Salvar Minhas Preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
