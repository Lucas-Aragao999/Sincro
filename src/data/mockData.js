// Dados fictícios usados para preencher as telas do protótipo (sem backend real).

export const currentStudent = {
  name: "Lucas Albuquerque",
  initials: "LA",
  course: "Engenharia de Software",
  period: "6° Semestre",
  campus: "Campus Central",
  registration: "20030488",
  stats: {
    completedActivities: 148,
    completedActivitiesTrend: "+12% este mês",
    average: 8.9,
    averageTrend: "Top 5% da turma",
    attendance: 94,
  },
  achievements: [
    { id: 1, label: "Mestre do Código", detail: "Nota 10 em 5 Algoritmos", icon: "🏅", unlocked: true },
    { id: 2, label: "Assídua", detail: "100% presença mês", icon: "🎯", unlocked: true },
    { id: 3, label: "Comunicador", detail: "Top fórum de dúvidas", icon: "💬", unlocked: true },
    { id: 4, label: "Bloqueada", detail: "Em progresso", icon: "🔒", unlocked: false },
  ],
  recentActivity: [
    { id: 1, title: "Projeto de Banco de Dados", detail: "Enviado com sucesso", time: "Há 2 horas", icon: "✅" },
    { id: 2, title: "Material de Leitura Lida", detail: "Engenharia de Requisitos · Cap. 3", time: "Ontem", icon: "📘" },
  ],
};

export const currentTeacher = {
  name: "Prof. Silva",
  initials: "PS",
};

export const classes = [
  {
    id: "matematica-avancada",
    name: "Matemática Avançada",
    teacher: "Prof. Alan Turing",
    icon: "📐",
    color: "#e8e4fc",
    students: 27,
    progress: 60,
    activities: [
      {
        id: "trabalho-geometria",
        title: "Trabalho de Geometria",
        status: "pending",
        statusLabel: "Vence em 3 dias",
        description:
          "Complete os exercícios de 1 a 15 na página 42. Foque no cálculo da área de polígonos complexos.",
        type: "Trabalho",
        weight: "10%",
        statusText: "Em Progresso",
        deadline: "13 Ago, 2026",
        deadlineTime: "23:59",
        daysRemaining: 3,
        progress: 20,
        instructions:
          "Resolva os exercícios de 1 a 15 da página 42 do livro-texto. Para cada polígono complexo, mostre o passo a passo do cálculo de área, incluindo a decomposição em figuras simples quando necessário.",
        deliverables: [
          { id: 1, title: "Cálculos Detalhados", description: "Passo a passo de cada exercício, sem pular etapas." },
          { id: 2, title: "Figuras Auxiliares", description: "Desenhos ou diagramas usados para decompor os polígonos." },
          { id: 3, title: "Respostas Finais", description: "Área de cada polígono com a unidade de medida correta." },
        ],
        materials: [
          { id: 1, name: "Guia_de_Formulas.pdf", size: "1.2 MB", type: "pdf", color: "#FFEAEA", iconColor: "#E05C5C" },
          { id: 2, name: "Lista_de_Exercicios_42.pdf", size: "0.8 MB", type: "pdf", color: "#FFEAEA", iconColor: "#E05C5C" },
        ],
      },
      {
        id: "exercicios-algebra",
        title: "Exercícios de Álgebra",
        status: "completed",
        statusLabel: "Concluído",
        score: "9.5",
        description:
          "Resolução de equações quadráticas usando a fórmula padrão e fatoração.",
        type: "Exercício",
        weight: "8%",
        statusText: "Concluído",
        deadline: "28 Jul, 2026",
        deadlineTime: "23:59",
        daysRemaining: 0,
        progress: 100,
        instructions:
          "Resolva as 12 equações quadráticas da lista usando dois métodos diferentes: fórmula de Bhaskara e fatoração. Compare os resultados obtidos por cada abordagem.",
        deliverables: [
          { id: 1, title: "Resolução por Bhaskara", description: "Aplicação da fórmula em todas as equações." },
          { id: 2, title: "Resolução por Fatoração", description: "Fatoração das equações que permitem esse método." },
        ],
        materials: [
          { id: 1, name: "Lista_de_Equacoes.pdf", size: "0.6 MB", type: "pdf", color: "#FFEAEA", iconColor: "#E05C5C" },
        ],
      },
      {
        id: "redacao-literatura",
        title: "Redação de Literatura",
        status: "overdue",
        statusLabel: "Atrasado",
        description:
          "Trabalho interdisciplinar: escreva uma redação sobre o impacto histórico das descobertas matemáticas.",
        type: "Redação",
        weight: "12%",
        statusText: "Atrasado",
        deadline: "05 Ago, 2026",
        deadlineTime: "23:59",
        daysRemaining: -5,
        progress: 10,
        instructions:
          "Escreva uma redação dissertativa de 800 a 1200 palavras sobre como uma descoberta matemática (à sua escolha) impactou o desenvolvimento científico ou social de sua época.",
        deliverables: [
          { id: 1, title: "Introdução e Tese", description: "Apresente o tema e o argumento central da redação." },
          { id: 2, title: "Desenvolvimento", description: "Pelo menos dois parágrafos com evidências históricas." },
          { id: 3, title: "Conclusão", description: "Retome a tese e aponte a relevância atual do tema." },
        ],
        materials: [
          { id: 1, name: "Roteiro_da_Redacao.docx", size: "0.4 MB", type: "doc", color: "#EAF0FF", iconColor: "#4B7BF5" },
        ],
      },
    ],
  },
  {
    id: "biologia-molecular",
    name: "Biologia Molecular",
    teacher: "Profa. Rosalind Franklin",
    icon: "🔬",
    color: "#e0f5ee",
    students: 21,
    progress: 42,
    activities: [
      {
        id: "relatorio-celulas",
        title: "Relatório de Células-Tronco",
        status: "pending",
        statusLabel: "Vence em 5 dias",
        description: "Descreva o processo de diferenciação celular observado no laboratório.",
        type: "Relatório",
        weight: "15%",
        statusText: "Em Progresso",
        deadline: "15 Ago, 2026",
        deadlineTime: "23:59",
        daysRemaining: 5,
        progress: 30,
        instructions:
          "Com base no experimento de cultivo celular realizado em laboratório, descreva o processo de diferenciação observado, indicando os estímulos aplicados e os resultados obtidos em cada etapa.",
        deliverables: [
          { id: 1, title: "Registro do Experimento", description: "Descrição das condições de cultivo e estímulos aplicados." },
          { id: 2, title: "Análise dos Resultados", description: "Discussão sobre a diferenciação celular observada." },
        ],
        materials: [
          { id: 1, name: "Protocolo_de_Laboratorio.pdf", size: "2.1 MB", type: "pdf", color: "#FFEAEA", iconColor: "#E05C5C" },
        ],
      },
    ],
  },
  {
    id: "historia-mundial",
    name: "História Mundial",
    teacher: "Profa. Mary Beard",
    icon: "📖",
    color: "#f0ece3",
    students: 35,
    progress: 100,
    activities: [
      {
        id: "linha-do-tempo",
        title: "Linha do Tempo: Império Romano",
        status: "completed",
        statusLabel: "Concluído",
        score: "10.0",
        description: "Montagem de linha do tempo com os principais eventos do Império Romano.",
        type: "Trabalho",
        weight: "10%",
        statusText: "Concluído",
        deadline: "20 Jul, 2026",
        deadlineTime: "23:59",
        daysRemaining: 0,
        progress: 100,
        instructions:
          "Monte uma linha do tempo ilustrada com os 10 eventos mais relevantes do Império Romano, da fundação à queda, indicando data, contexto e importância histórica de cada um.",
        deliverables: [
          { id: 1, title: "Seleção de Eventos", description: "10 eventos com datas e breve justificativa da escolha." },
          { id: 2, title: "Linha do Tempo Ilustrada", description: "Representação visual em ordem cronológica." },
        ],
        materials: [
          { id: 1, name: "Modelo_Linha_do_Tempo.docx", size: "0.5 MB", type: "doc", color: "#EAF0FF", iconColor: "#4B7BF5" },
        ],
      },
    ],
  },
];

export const activityDetail = {
  id: "distributed-systems",
  course: "CS401: Redes Avançadas",
  title: "Análise de Sistemas Distribuídos",
  description:
    "Analise a arquitetura de um sistema distribuído real, com foco em tolerância a falhas e escalabilidade.",
  type: "Trabalho",
  weight: "15%",
  status: "Em Progresso",
  deadline: "15 Nov, 2024",
  deadlineTime: "23:59",
  daysRemaining: 4,
  progress: 45,
  instructor: {
    name: "Profa. Jane Doe",
    email: "jane.doe@sincro.edu.br",
    initials: "JD",
  },
  instructions:
    "Para este trabalho, você deve escolher um sistema distribuído conhecido (ex.: Apache Kafka, Cassandra, DynamoDB) e apresentar uma análise completa da sua arquitetura. O relatório deve ter aproximadamente 2.500 palavras.",
  deliverables: [
    { id: 1, title: "Diagrama de Arquitetura", description: "Uma visão geral dos componentes do sistema." },
    { id: 2, title: "Mecanismos de Tolerância a Falhas", description: "Como o sistema lida com falhas de nós?" },
    { id: 3, title: "Modelo de Consistência", description: "Discuta o trade-off entre consistência eventual e forte." },
    { id: 4, title: "Limites de Escalabilidade", description: "Identifique possíveis gargalos sob alta carga." },
  ],
  materials: [
    { id: 1, name: "Diretrizes_do_Projeto.pdf", size: "2.4 MB", type: "pdf", color: "#FFEAEA", iconColor: "#E05C5C" },
    { id: 2, name: "Estudo_de_Caso_Amazon.docx", size: "1.1 MB", type: "doc", color: "#EAF0FF", iconColor: "#4B7BF5" },
  ],
};

export const agendaEvents = [
  { date: 4, title: "Prova de Matemática", color: "#00a86b", bg: "#e0f5ee" },
  { date: 6, title: "Trabalho de História", color: "#e05c5c", bg: "#ffeaea" },
  { date: 10, title: "Projeto de Ciências", color: "#f5a623", bg: "#fff8e8" },
  { date: 11, title: "Revisão de Literatura", color: "#4b7bf5", bg: "#eaf0ff" },
  { date: 11, title: "Relatório de Física", color: "#e05c5c", bg: "#ffeaea" },
];

export const upcomingDeadlines = [
  {
    id: 1,
    tag: "Hoje",
    tagColor: "#e05c5c",
    title: "Relatório de Lab. de Física",
    time: "23:59",
    progress: 100,
    barColor: "#e05c5c",
  },
  {
    id: 2,
    tag: "Amanhã",
    tagColor: "#f5a623",
    title: "Projeto de Ciências - Fase 1",
    time: "14:00",
    progress: 55,
    barColor: "#f5a623",
  },
  {
    id: 3,
    tag: "Em 3 dias",
    tagColor: "#00a86b",
    title: "Revisão de Literatura",
    time: "18:00",
    progress: 20,
    barColor: "#00a86b",
  },
];

export const teacherClasses = [
  {
    id: "matematica-avancada-301",
    name: "Matemática Avançada 301",
    grade: "Ensino Médio · 3° Ano",
    students: 32,
    status: "Em andamento",
    statusColor: "#4b7bf5",
    statusBg: "#eaf0ff",
    footer: "Próx: 10:00",
    icon: "📘",
  },
  {
    id: "laboratorio-biologia",
    name: "Laboratório de Biologia",
    grade: "Ensino Médio · 2° Ano",
    students: 26,
    status: "Concluído hoje",
    statusColor: "#00a86b",
    statusBg: "#e0f5ee",
    footer: "Amanhã, 08:00",
    icon: "🧪",
  },
  {
    id: "historia-moderna",
    name: "História Moderna",
    grade: "Ensino Fundamental · 9° Ano",
    students: 40,
    status: "Preparação",
    statusColor: "#f5a623",
    statusBg: "#fff8e8",
    footer: "Hoje, 14:00",
    icon: "📜",
  },
];

export const engagementWeeks = [
  { label: "Sem 1", value: 55 },
  { label: "Sem 2", value: 68 },
  { label: "Sem 3", value: 62 },
  { label: "Atual", value: 84 },
];
