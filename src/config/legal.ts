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
    brandName: "VELTRION",
    corporateName: undefined,
    cnpj: undefined,
    address: undefined,
    commercialEmail: "contato@veltrion.digital",
    commercialPhone: undefined,
    websiteUrl: "https://veltrion.digital",
  },
  privacy: {
    lastUpdated: "Outubro de 2026",
    hasDesignatedDpo: false,
    dpoName: undefined,
    dpoEmail: undefined,
    privacyContactEmail: "privacidade@veltrion.digital",
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
        name: "veltrion_theme_preference",
        category: "necessario",
        purpose: "Armazenar a preferência de aparência clara ou escura escolhida durante a navegação.",
        provider: "VELTRION (Próprio)",
        duration: "Persistente no navegador",
        legalBasis: "Legítimo Interesse / Execução de Funcionalidade Técnica Estritamente Necessária",
      },
    ],
  },
};
