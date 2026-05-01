export type Asset = {
  manifestPath: string;
  src: string;
  alt: string;
};

export type ProfileField = {
  label: string;
  value: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  value: number;
};

export type Tool = {
  name: string;
  usage: string;
};

export type CaseStudy = {
  title: string;
  challenge: string;
  role: string;
  artifacts: string[];
  result: string;
  tools: string[];
  status: string;
  image: Asset;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type PortfolioContent = {
  profile: {
    name: string;
    role: string;
    level: string;
    location: string;
    specialization: string;
  };
  nav: NavItem[];
  hero: {
    label: string;
    title: string;
    subtitle: string;
    statement: string;
    fields: ProfileField[];
    ctas: {
      primary: NavItem;
      secondary: NavItem;
    };
  };
  about: {
    id: string;
    eyebrow: string;
    title: string;
    icon: Asset;
    paragraphs: string[];
  };
  skills: {
    id: string;
    eyebrow: string;
    title: string;
    icon: Asset;
    items: Skill[];
  };
  tools: {
    id: string;
    eyebrow: string;
    title: string;
    icon: Asset;
    items: Tool[];
  };
  caseStudies: {
    id: string;
    eyebrow: string;
    title: string;
    icon: Asset;
    items: CaseStudy[];
  };
  achievements: {
    id: string;
    eyebrow: string;
    title: string;
    icon: Asset;
    items: string[];
  };
  contact: {
    id: string;
    eyebrow: string;
    title: string;
    icon: Asset;
    text: string;
    items: ContactItem[];
    cvLabel: string;
  };
  assets: {
    avatar: Asset;
    heroBackground: Asset;
    pixelTexture: Asset;
    favicon: Asset;
    ogImage: Asset;
  };
};

const asset = (manifestPath: string, alt: string): Asset => ({
  manifestPath,
  src: manifestPath.replace(/^public/, ""),
  alt,
});

export const portfolioContent: PortfolioContent = {
  profile: {
    name: "[Твоё имя]",
    role: "Business Analyst",
    level: "[Junior / Middle / Senior]",
    location: "[Город / Remote]",
    specialization: "требования, процессы, продуктовая аналитика, системное мышление",
  },
  nav: [
    { label: "Профиль", href: "#profile" },
    { label: "Статы", href: "#skills" },
    { label: "Инвентарь", href: "#tools" },
    { label: "Квесты", href: "#quests" },
    { label: "Контакт", href: "#contact" },
  ],
  hero: {
    label: "PLAYER PROFILE",
    title: "[Твоё имя]",
    subtitle: "Business Analyst",
    statement:
      "Превращаю бизнес-хаос в понятные требования, процессы и решения для команды разработки.",
    fields: [
      { label: "Class", value: "Business Analyst" },
      { label: "Specialization", value: "Requirements & Process Analysis" },
      {
        label: "Current Quest",
        value: "Разобраться в сложной задаче и превратить её в delivery-ready решение",
      },
      { label: "Main Skill", value: "Системное мышление + коммуникация со стейкхолдерами" },
    ],
    ctas: {
      primary: { label: "Посмотреть квесты", href: "#quests" },
      secondary: { label: "Начать новый квест", href: "#contact" },
    },
  },
  about: {
    id: "about",
    eyebrow: "CHARACTER BACKSTORY",
    title: "Как я прохожу туман неопределённости",
    icon: asset("public/assets/icons/icon-profile.png", "Иконка профиля"),
    paragraphs: [
      "Каждый проект начинается с тумана: неясные цели, разрозненные требования, разные ожидания стейкхолдеров и скрытые ограничения.",
      "Моя роль — разобраться в этом тумане, описать систему, задать правильные вопросы и превратить бизнес-потребности в понятные требования, user stories, процессы и решения, с которыми команда может работать.",
      "Я соединяю бизнес и разработку: помогаю договориться о целях, приоритетах, ограничениях и критериях готовности, чтобы команда строила не просто «что-то», а нужное решение.",
    ],
  },
  skills: {
    id: "skills",
    eyebrow: "CORE STATS",
    title: "Ключевые навыки",
    icon: asset("public/assets/icons/icon-stats.png", "Иконка навыков"),
    items: [
      { name: "Requirements Analysis", value: 90 },
      { name: "Stakeholder Management", value: 85 },
      { name: "Process Modeling / BPMN", value: 85 },
      { name: "User Stories & Acceptance Criteria", value: 88 },
      { name: "Backlog Management", value: 82 },
      { name: "SQL / Data Analysis", value: 70 },
      { name: "Product Discovery", value: 80 },
      { name: "Communication & Facilitation", value: 88 },
    ],
  },
  tools: {
    id: "tools",
    eyebrow: "INVENTORY",
    title: "Рабочий набор инструментов",
    icon: asset("public/assets/icons/icon-inventory.png", "Иконка инвентаря"),
    items: [
      { name: "Jira", usage: "backlog, user stories, delivery tracking" },
      { name: "Confluence", usage: "documentation, knowledge base, decision logs" },
      { name: "Miro", usage: "workshops, process maps, discovery boards" },
      { name: "Figma", usage: "prototype review, UI flows, requirements clarification" },
      { name: "SQL", usage: "data checks, validation, exploratory analysis" },
      { name: "Power BI", usage: "reporting logic, dashboards, data visibility" },
      { name: "Postman", usage: "API checks and integration analysis" },
      { name: "Draw.io / Lucidchart", usage: "process diagrams and system flows" },
    ],
  },
  caseStudies: {
    id: "quests",
    eyebrow: "COMPLETED QUESTS",
    title: "Проекты и кейсы",
    icon: asset("public/assets/icons/icon-quests.png", "Иконка квестов"),
    items: [
      {
        title: "Quest 01 — Автоматизация отчетности",
        challenge:
          "Менеджеры тратили много времени на регулярные отчеты, а данные собирались вручную из нескольких источников.",
        role:
          "Провел интервью со стейкхолдерами, описал AS-IS процесс, подготовил TO-BE сценарий, собрал требования к отчетности и согласовал структуру dashboard.",
        artifacts: [
          "AS-IS / TO-BE process map",
          "Functional requirements",
          "User stories",
          "Acceptance criteria",
          "Dashboard specification",
        ],
        result:
          "Команда получила понятную спецификацию для реализации, а процесс отчетности стал прозрачнее и менее зависимым от ручной работы.",
        tools: ["Miro", "Confluence", "Jira", "SQL", "Power BI"],
        status: "Completed",
        image: asset(
          "public/assets/cases/case-reporting.webp",
          "Иллюстрация квеста по автоматизации отчетности",
        ),
      },
      {
        title: "Quest 02 — Улучшение CRM-процесса",
        challenge:
          "Команда продаж и операционная команда по-разному понимали этапы работы с клиентом, из-за чего появлялись потери контекста и лишние ручные действия.",
        role:
          "Собрал требования у нескольких групп пользователей, описал текущий процесс, выявил узкие места и подготовил требования для обновления CRM workflow.",
        artifacts: [
          "Stakeholder interview notes",
          "BPMN / process diagram",
          "Requirements document",
          "User stories",
          "Role-based scenarios",
        ],
        result:
          "Процесс стал понятнее для команд, а требования к CRM были структурированы для дальнейшей разработки.",
        tools: ["Miro", "Jira", "Confluence", "Draw.io"],
        status: "Completed",
        image: asset(
          "public/assets/cases/case-crm.webp",
          "Иллюстрация квеста по улучшению CRM-процесса",
        ),
      },
      {
        title: "Quest 03 — Клиентский портал",
        challenge:
          "Пользователям нужен был более понятный способ отслеживать статусы заявок и взаимодействовать с сервисной командой.",
        role:
          "Провел discovery, описал пользовательские сценарии, согласовал MVP scope и подготовил user stories с acceptance criteria.",
        artifacts: [
          "User journey map",
          "MVP scope",
          "User stories",
          "Acceptance criteria",
          "UI flow notes",
        ],
        result:
          "Команда получила согласованный scope и набор требований для запуска первой версии портала.",
        tools: ["Figma", "Miro", "Jira", "Confluence"],
        status: "Completed",
        image: asset(
          "public/assets/cases/case-portal.webp",
          "Иллюстрация квеста по клиентскому порталу",
        ),
      },
    ],
  },
  achievements: {
    id: "achievements",
    eyebrow: "UNLOCKED ACHIEVEMENTS",
    title: "Профессиональные достижения",
    icon: asset("public/assets/icons/icon-achievements.png", "Иконка достижений"),
    items: [
      "Разложил неопределенные бизнес-запросы на понятные требования",
      "Согласовал ожидания бизнеса и разработки",
      "Описал AS-IS / TO-BE процессы для кросс-функциональных команд",
      "Подготовил user stories и acceptance criteria для разработки",
      "Помог командам принимать решения на основе данных и структуры",
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "START A QUEST",
    title: "Готовы начать новый квест?",
    icon: asset("public/assets/icons/icon-contact.png", "Иконка контакта"),
    text:
      "Если вам нужен человек, который может понять бизнес-цель, структурировать требования, согласовать стейкхолдеров и помочь команде построить правильное решение — давайте обсудим задачу.",
    items: [
      { label: "Email", value: "[email@example.com]", href: "mailto:email@example.com" },
      { label: "LinkedIn", value: "[linkedin-url]", href: "#contact" },
      { label: "Telegram", value: "[telegram-url]", href: "#contact" },
    ],
    cvLabel: "[cv-file-or-link]",
  },
  assets: {
    avatar: asset("public/assets/avatar/ba-avatar.png", "Портрет Business Analyst в RPG-стиле"),
    heroBackground: asset("public/assets/backgrounds/hero-map.webp", ""),
    pixelTexture: asset("public/assets/patterns/pixel-texture.webp", ""),
    favicon: asset("public/assets/brand/favicon.png", "Favicon"),
    ogImage: asset("public/assets/brand/og-image.webp", "Open Graph preview"),
  },
};
