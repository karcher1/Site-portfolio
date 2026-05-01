export type Asset = {
  manifestPath: string;
  src: string;
  alt: string;
  fallbackSrc?: string;
  decorative?: boolean;
  fallbackLabel?: string;
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
  summary: string;
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

export type CaseStudyLabels = {
  quest: string;
  challenge: string;
  role: string;
  result: string;
  artifacts: string;
  tools: string;
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
    highlights: string[];
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
    description?: string;
    icon: Asset;
    paragraphs: string[];
  };
  skills: {
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
    icon: Asset;
    items: Skill[];
  };
  tools: {
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
    icon: Asset;
    items: Tool[];
  };
  caseStudies: {
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
    icon: Asset;
    labels: CaseStudyLabels;
    items: CaseStudy[];
  };
  achievements: {
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
    icon: Asset;
    badges: Asset[];
    items: string[];
  };
  contact: {
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
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

type AssetOptions = {
  fallbackManifestPath?: string;
  decorative?: boolean;
  fallbackLabel?: string;
};

const publicSrc = (manifestPath: string) => manifestPath.replace(/^public/, "");

const asset = (manifestPath: string, alt: string, options: AssetOptions = {}): Asset => ({
  manifestPath,
  src: publicSrc(manifestPath),
  alt: options.decorative ? "" : alt,
  fallbackSrc: options.fallbackManifestPath ? publicSrc(options.fallbackManifestPath) : undefined,
  decorative: options.decorative,
  fallbackLabel: options.fallbackLabel,
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
    { label: "Навыки", href: "#skills" },
    { label: "Инструменты", href: "#tools" },
    { label: "Кейсы", href: "#quests" },
    { label: "Контакт", href: "#contact" },
  ],
  hero: {
    label: "PLAYER PROFILE",
    title: "[Твоё имя]",
    subtitle: "Business Analyst",
    statement:
      "Помогаю бизнесу и командам разработки быстро прояснять цели, фиксировать требования, описывать процессы и превращать идеи в delivery-ready backlog.",
    highlights: [
      "Discovery и требования",
      "AS-IS / TO-BE процессы",
      "User stories для delivery",
    ],
    fields: [
      { label: "Класс", value: "Business Analyst" },
      { label: "Специализация", value: "Requirements, Processes & Product Analysis" },
      {
        label: "Текущий квест",
        value: "Прояснить сложную бизнес-задачу и подготовить понятный scope для команды",
      },
      {
        label: "Главный навык",
        value: "Системное мышление, фасилитация и перевод бизнес-языка в требования",
      },
    ],
    ctas: {
      primary: { label: "Посмотреть кейсы", href: "#quests" },
      secondary: { label: "Обсудить задачу", href: "#contact" },
    },
  },
  about: {
    id: "about",
    eyebrow: "CHARACTER BACKSTORY",
    title: "Как я превращаю неопределенность в план работы",
    description:
      "Подход к анализу: от первых вопросов и карты процесса до согласованных требований и критериев готовности.",
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
    title: "Навыки, которые помогают доводить задачи до разработки",
    description:
      "Компетенции, важные для discovery, согласования требований, описания процессов и поддержки delivery-команды.",
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
    title: "Инструменты для анализа, документации и синхронизации команды",
    description:
      "Не просто список сервисов, а набор инструментов для прозрачной работы с требованиями, процессами и данными.",
    icon: asset("public/assets/icons/icon-inventory.png", "Иконка инвентаря"),
    items: [
      { name: "Jira", usage: "backlog, user stories, acceptance criteria, delivery tracking" },
      { name: "Confluence", usage: "требования, decision logs, база знаний проекта" },
      { name: "Miro", usage: "воркшопы, discovery boards, карты процессов" },
      { name: "Figma", usage: "проверка прототипов, UI flows, уточнение требований" },
      { name: "SQL", usage: "проверка данных, валидация гипотез, exploratory analysis" },
      { name: "Power BI", usage: "логика отчетности, dashboard requirements, метрики" },
      { name: "Postman", usage: "API checks, сценарии интеграций, проверка контрактов" },
      { name: "Draw.io / Lucidchart", usage: "BPMN, process diagrams, system flows" },
    ],
  },
  caseStudies: {
    id: "quests",
    eyebrow: "COMPLETED QUESTS",
    title: "Кейсы: как анализ превращается в результат",
    description:
      "Анонимизированные примеры задач, где ценность BA — в структуре, согласовании и понятных артефактах для команды.",
    icon: asset("public/assets/icons/icon-quests.png", "Иконка квестов"),
    labels: {
      quest: "Quest Log",
      challenge: "Задача",
      role: "Моя роль",
      result: "Результат",
      artifacts: "Артефакты",
      tools: "Инструменты",
    },
    items: [
      {
        title: "Quest 01 — Автоматизация отчетности",
        summary: "Собрал требования к dashboard и описал процесс, чтобы снизить зависимость от ручной отчетности.",
        challenge:
          "Регулярные отчеты собирались вручную из нескольких источников, из-за чего процесс был медленным и непрозрачным.",
        role:
          "Провел интервью, описал AS-IS / TO-BE процесс, собрал требования к отчетности и согласовал структуру dashboard.",
        artifacts: [
          "AS-IS / TO-BE process map",
          "Functional requirements",
          "User stories",
          "Acceptance criteria",
          "Dashboard specification",
        ],
        result:
          "Команда получила спецификацию для реализации, а отчетность стала понятнее и менее зависимой от ручной работы.",
        tools: ["Miro", "Confluence", "Jira", "SQL", "Power BI"],
        status: "Завершено",
        image: asset(
          "public/assets/cases/case-reporting.webp",
          "Иллюстрация квеста по автоматизации отчетности",
          {
            fallbackManifestPath: "public/assets/cases/case-reporting.png",
            fallbackLabel: "Reporting",
          },
        ),
      },
      {
        title: "Quest 02 — Улучшение CRM-процесса",
        summary: "Структурировал workflow и требования, чтобы команды одинаково понимали этапы работы с клиентом.",
        challenge:
          "Sales и operations по-разному трактовали этапы клиента, что приводило к потере контекста и ручным обходным действиям.",
        role:
          "Собрал требования у групп пользователей, описал текущий процесс, выявил узкие места и подготовил требования к CRM workflow.",
        artifacts: [
          "Stakeholder interview notes",
          "BPMN / process diagram",
          "Requirements document",
          "User stories",
          "Role-based scenarios",
        ],
        result:
          "Команды получили единое понимание процесса, а требования к CRM стали готовыми для дальнейшей разработки.",
        tools: ["Miro", "Jira", "Confluence", "Draw.io"],
        status: "Завершено",
        image: asset(
          "public/assets/cases/case-crm.webp",
          "Иллюстрация квеста по улучшению CRM-процесса",
          {
            fallbackManifestPath: "public/assets/cases/case-crm.png",
            fallbackLabel: "CRM",
          },
        ),
      },
      {
        title: "Quest 03 — Клиентский портал",
        summary: "Помог определить MVP scope и сценарии портала для прозрачного отслеживания заявок.",
        challenge:
          "Пользователям не хватало понятного способа отслеживать статусы заявок и взаимодействовать с сервисной командой.",
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
          "Команда получила согласованный scope и набор требований для запуска первой версии клиентского портала.",
        tools: ["Figma", "Miro", "Jira", "Confluence"],
        status: "Завершено",
        image: asset(
          "public/assets/cases/case-portal.webp",
          "Иллюстрация квеста по клиентскому порталу",
          {
            fallbackManifestPath: "public/assets/cases/case-portal.png",
            fallbackLabel: "Portal",
          },
        ),
      },
    ],
  },
  achievements: {
    id: "achievements",
    eyebrow: "UNLOCKED ACHIEVEMENTS",
    title: "Достижения, которые показывают delivery-value",
    description:
      "Фокус не на декоративных артефактах, а на ясности, согласовании и снижении неопределенности для команды.",
    icon: asset("public/assets/icons/icon-achievements.png", "Иконка достижений"),
    badges: [
      asset("public/assets/badges/badge-requirements.png", "Бейдж требований", {
        fallbackLabel: "01",
      }),
      asset("public/assets/badges/badge-stakeholders.png", "Бейдж стейкхолдеров", {
        fallbackLabel: "02",
      }),
      asset("public/assets/badges/badge-process.png", "Бейдж процессов", {
        fallbackLabel: "03",
      }),
      asset("public/assets/badges/badge-data.png", "Бейдж данных", {
        fallbackLabel: "04",
      }),
      asset("public/assets/badges/badge-delivery.png", "Бейдж delivery", {
        fallbackLabel: "05",
      }),
    ],
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
    title: "Есть задача для анализа? Давайте обсудим",
    description:
      "Контактный блок для рекрутера, hiring manager или команды, которой нужен BA для discovery, требований или процессов.",
    icon: asset("public/assets/icons/icon-contact.png", "Иконка контакта"),
    text:
      "Если вам нужен человек, который быстро разберется в бизнес-цели, структурирует требования, синхронизирует стейкхолдеров и поможет команде двигаться к правильному решению — давайте обсудим задачу.",
    items: [
      { label: "Email", value: "[email@example.com]", href: "mailto:email@example.com" },
      { label: "LinkedIn", value: "[linkedin-url]", href: "#contact" },
      { label: "Telegram", value: "[telegram-url]", href: "#contact" },
    ],
    cvLabel: "[cv-file-or-link]",
  },
  assets: {
    avatar: asset("public/assets/avatar/ba-avatar.png", "Портрет Business Analyst в RPG-стиле"),
    heroBackground: asset("public/assets/backgrounds/hero-map.webp", "", {
      decorative: true,
    }),
    pixelTexture: asset("public/assets/patterns/pixel-texture.webp", "", {
      decorative: true,
    }),
    favicon: asset("public/assets/brand/favicon.png", "Favicon"),
    ogImage: asset("public/assets/brand/og-image.webp", "Open Graph preview", {
      fallbackLabel: "OG",
    }),
  },
};
