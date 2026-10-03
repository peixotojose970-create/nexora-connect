export interface LegalConfig {
  company: {
    brandName: string;
    corporateName?: string;
    cnpj?: string;
    address?: string;
    commercialEmail: string;
    commercialPhone?: string;
    websiteUrl: string;
  };
  privacy: {
    lastUpdated: string;
    hasDesignatedDpo: boolean;
    dpoName?: string;
    dpoEmail?: string;
    privacyContactEmail: string;
    privacyContactName?: string;
    retentionPolicyDescription: string;
    internationalTransferEnabled: boolean;
    internationalTransferDescription?: string;
  };
  terms: {
    lastUpdated: string;
    applicableLawCountry: string;
    courtJurisdiction?: string;
  };
  cookies: {
    lastUpdated: string;
    hasNonEssentialCookies: boolean;
    cookieCatalog: Array<{
      name: string;
      category: "necessario" | "analitico" | "terceiros" | "funcional";
      purpose: string;
      provider: string;
      duration: string;
      legalBasis: string;
    }>;
  };
}

export const LEGAL_CONFIG: LegalConfig = {
  company: {
    brandName: "NEXORA",
    corporateName: undefined,
    cnpj: undefined,
    address: undefined,
    commercialEmail: "contato@nexora.digital",
    commercialPhone: undefined,
    websiteUrl: "https://nexora.digital",
  },
  privacy: {
    lastUpdated: "Outubro de 2026",
    hasDesignatedDpo: false,
    dpoName: undefined,
    dpoEmail: undefined,
    privacyContactEmail: "privacidade@nexora.digital",
    privacyContactName: undefined,
    retentionPolicyDescription:
      "Os dados pessoais coletados via formulários de contato são mantidos exclusivamente pelo período estritamente necessário para atender às solicitações do titular, prestar esclarecimentos, formalizar orçamentos e cumprir obrigações legais ou regulatórias aplicáveis.",
    internationalTransferEnabled: false,
    internationalTransferDescription: undefined,
  },
  terms: {
    lastUpdated: "Outubro de 2026",
    applicableLawCountry: "República Federativa do Brasil",
    courtJurisdiction: undefined,
  },
  cookies: {
    lastUpdated: "Outubro de 2026",
    hasNonEssentialCookies: false,
    cookieCatalog: [
      {
        name: "sidebar_state (quando aplicável ao painel)",
        category: "necessario",
        purpose: "Armazenar a preferência de visualização recolhida ou expandida da barra lateral durante a navegação.",
        provider: "NEXORA (Próprio)",
        duration: "Sessão / 7 dias",
        legalBasis: "Legítimo Interesse / Execução de Funcionalidade Técnica Estritamente Necessária",
      },
    ],
  },
};
