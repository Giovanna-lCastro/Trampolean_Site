// Catálogo de cursos corporativos (B2B). Cada item corresponde a uma trilha
// global da plataforma de treinamentos, licenciada por empresa cliente.

/** URL da plataforma de treinamentos (definida no build; vazio = "Em breve"). */
export const PLATAFORMA_URL = process.env.NEXT_PUBLIC_PLATAFORMA_URL ?? "";

export type CursoFormato = "Vídeo" | "Quiz" | "Aula ao vivo" | "Análise de vídeo por IA" | "Certificado";

export type Curso = {
  id: string;
  titulo: string;
  categoria: string;
  nivel: "Iniciante" | "Intermediário" | "Avançado";
  cargaHoraria: string;
  publico: string;
  resumo: string;
  resultados: string[];
  formatos: CursoFormato[];
  gradiente: string;
};

export const CURSOS: Curso[] = [
  {
    id: "ia-liderancas",
    titulo: "IA para Lideranças",
    categoria: "Liderança",
    nivel: "Intermediário",
    cargaHoraria: "8h",
    publico: "Gestores, diretores e C-level",
    resumo: "Como decidir, priorizar e conduzir a adoção de IA na sua área sem depender de modismo.",
    resultados: ["Mapa de oportunidades da área", "Critérios de priorização e risco", "Plano de adoção de 90 dias"],
    formatos: ["Vídeo", "Quiz", "Aula ao vivo", "Certificado"],
    gradiente: "from-tramp-magenta to-tramp-accent",
  },
  {
    id: "ia-aplicada",
    titulo: "IA Aplicada ao Trabalho",
    categoria: "Produtividade",
    nivel: "Iniciante",
    cargaHoraria: "6h",
    publico: "Equipes de todas as áreas",
    resumo: "Uso seguro e produtivo de assistentes de IA nas tarefas reais do dia a dia.",
    resultados: ["Rotinas reescritas com IA", "Checklist de uso seguro", "Biblioteca de prompts da equipe"],
    formatos: ["Vídeo", "Quiz", "Certificado"],
    gradiente: "from-[#1668E3] to-tramp-magenta",
  },
  {
    id: "engenharia-prompts",
    titulo: "Engenharia de Prompts na Prática",
    categoria: "Produtividade",
    nivel: "Intermediário",
    cargaHoraria: "5h",
    publico: "Analistas, especialistas e times de operação",
    resumo: "Estruturar instruções, contexto e exemplos para respostas consistentes e auditáveis.",
    resultados: ["Padrões de prompt reutilizáveis", "Avaliação de qualidade das respostas", "Fluxos com várias etapas"],
    formatos: ["Vídeo", "Quiz", "Certificado"],
    gradiente: "from-[#0B2C6B] to-[#1668E3]",
  },
  {
    id: "ia-educacao",
    titulo: "IA na Educação e Formação Docente",
    categoria: "Educação",
    nivel: "Iniciante",
    cargaHoraria: "10h",
    publico: "Professores, coordenadores e instituições de ensino",
    resumo: "Planejamento, avaliação e produção de material didático com IA, com olhar pedagógico.",
    resultados: ["Planos de aula com IA", "Rubricas de avaliação", "Política de uso em sala"],
    formatos: ["Vídeo", "Quiz", "Aula ao vivo", "Certificado"],
    gradiente: "from-[#0FA968] to-[#1668E3]",
  },
  {
    id: "governanca-etica",
    titulo: "Governança, Ética e Uso Responsável de IA",
    categoria: "Governança",
    nivel: "Avançado",
    cargaHoraria: "6h",
    publico: "Jurídico, compliance, TI e lideranças",
    resumo: "Políticas, LGPD, riscos e responsabilidades para usar IA com segurança na organização.",
    resultados: ["Rascunho de política de IA", "Matriz de riscos", "Fluxo de aprovação de casos de uso"],
    formatos: ["Vídeo", "Quiz", "Aula ao vivo", "Certificado"],
    gradiente: "from-tramp-dark to-tramp-magenta",
  },
  {
    id: "comunicacao-executiva",
    titulo: "Comunicação Executiva com Feedback de IA",
    categoria: "Liderança",
    nivel: "Intermediário",
    cargaHoraria: "8h",
    publico: "Lideranças e profissionais que apresentam resultados",
    resumo: "O participante grava apresentações e recebe análise de postura, voz e conteúdo por IA.",
    resultados: ["Diagnóstico pré e pós-treino", "Relatório individual por dimensão", "Evolução medida em vídeo"],
    formatos: ["Vídeo", "Análise de vídeo por IA", "Quiz", "Certificado"],
    gradiente: "from-tramp-accent to-[#F5A524]",
  },
];

export const CATEGORIAS = Array.from(new Set(CURSOS.map((c) => c.categoria)));
