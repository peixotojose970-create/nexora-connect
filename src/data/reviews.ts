export interface ReviewData {
  id: string;
  nome: string;
  cargo: string;
  empresa?: string;
  comentario: string;
  nota: number; // 4 a 5
  avatarUrl?: string;
  isExemplo?: boolean;
}

/**
 * Coleção de depoimentos da NEXORA.
 *
 * REGRA RIGOROSA:
 * Não inventar clientes reais ou empresas reais.
 * Enquanto não houver depoimentos de clientes reais homologados,
 * os itens ilustrativos são claramente sinalizados com a tag
 * "EXEMPLO DE DEPOIMENTO".
 *
 * Cada depoimento aceita:
 * - nome
 * - empresa
 * - cargo
 * - texto / comentário
 * - nota (entre 4 e 5 estrelas)
 * - imagem / avatar
 *
 * Fácil de estender e substituir por avaliações reais.
 */
export const REVIEWS_DATA: ReviewData[] = [
  {
    id: "exemplo-1",
    nome: "Mariana Albuquerque",
    cargo: "Diretora de Operações",
    empresa: "Clínica Integrada",
    comentario:
      "A reformulação da nossa presença digital elevou o padrão de percepção da clínica. A navegação mobile e a clareza visual superaram todas as expectativas.",
    nota: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
    isExemplo: true,
  },
  {
    id: "exemplo-2",
    nome: "Rafael Fontes",
    cargo: "Fundador",
    empresa: "Consultoria B2B",
    comentario:
      "Precisávamos de um posicionamento institucional que transmitisse autoridade imediata. O trabalho de design e usabilidade nos colocou em outro patamar.",
    nota: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    isExemplo: true,
  },
  {
    id: "exemplo-3",
    nome: "Lucas Menezes",
    cargo: "Gestor Comercial",
    empresa: "Boutique Gastronômica",
    comentario:
      "O cardápio digital e as páginas no celular facilitaram a escolha dos clientes e deixaram a identidade da marca muito mais consistente e elegante.",
    nota: 4.8,
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    isExemplo: true,
  },
  {
    id: "exemplo-4",
    nome: "Helena Castro",
    cargo: "Coordenadora de Marketing",
    empresa: "Estúdio de Arquitetura",
    comentario:
      "A clareza visual e o foco no que importa transformaram nosso portfólio digital. O processo de criação foi rápido, organizado e sem ruídos.",
    nota: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
    isExemplo: true,
  },
];
