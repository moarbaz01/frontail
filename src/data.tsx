import {
  BrainCircuit,
  Bitcoin,
  Globe,
  Rocket,
  Smartphone,
  Wrench,
} from "lucide-react";

export const projectsData = [
  {
    title: "CDR912",
    description: "A comprehensive sports betting platform featuring a multi-level agent and master system.",
    image: "/projects/cdr.svg",
    techs: ["Next.js", "Elysia.js", "Bun"],
    link: "https://cdr912.com",
    client: "CDR912",
    industry: "Sports Betting / Gaming",
    deliverables: "Web Platform, Agent System, Backend Architecture",
    themeColor: "#2563eb", // Blue
  },
  {
    title: "Vriya PMS",
    description: "A robust 3-in-1 platform integrating accountant workflows, apartment management, and HRM systems.",
    image: "/projects/vriya-pms.svg",
    techs: ["Next.js", "Elysia.js", "Bun"],
    link: "https://vriya.online",
    client: "Vriya PMS",
    industry: "PropTech / HR / FinTech",
    deliverables: "SaaS Platform, Multi-tenant System",
    themeColor: "#1d4ed8", // Royal blue
  },
  {
    title: "Master Topik",
    description: "An advanced e-learning platform for the Korea TOPIK exam, enabling users to attend quizzes, watch courses, and learn vocabulary.",
    image: "/projects/mastertopik.svg",
    techs: ["Next.js", "React", "Node.js"],
    link: "https://apps.apple.com/kh/app/master-topik/id6753724785",
    client: "Master Topik",
    industry: "EdTech / E-Learning",
    deliverables: "Learning Management System, Quiz Engine",
    themeColor: "#ea580c", // Orange
  },
  {
    title: "WinWin Topup",
    description: "A high-performance top-up website where gamers can securely recharge their favorite online games.",
    image: "/projects/winwintopup.svg",
    techs: ["Next.js", "MongoDB", "Auth"],
    link: "https://winwintopup.com",
    client: "WinWin Topup",
    industry: "Gaming / E-Commerce",
    deliverables: "E-Commerce Storefront, Payment Gateway",
    themeColor: "#ea580c", // Orange
  },
];

export const faqSections = [
  {
    title: "Projects",
    faqs: [
      {
        question: "What kind of products do you build?",
        answer:
          "We build MVPs, SaaS platforms, web apps, landing pages, ecommerce experiences, and mobile-ready products for startups and growing businesses.",
      },
      {
        question: "Can you help if I only have an idea?",
        answer:
          "Yes. We can help define the first version, prioritize features, and turn the idea into a clear build plan.",
      },
      {
        question: "Do you work with existing products?",
        answer:
          "Yes. We can improve UI, rebuild old flows, add new features, fix performance issues, or help with a full redesign.",
      },
    ],
  },
  {
    title: "Timeline & Cost",
    faqs: [
      {
        question: "How long does an MVP take?",
        answer:
          "Most MVPs take 2 to 6 weeks depending on scope, integrations, and design complexity.",
      },
      {
        question: "How do you estimate pricing?",
        answer:
          "We estimate based on features, screens, integrations, and launch requirements. After a short discussion, we share a clear scope and quote.",
      },
      {
        question: "Can we start small?",
        answer:
          "Yes. We prefer starting with the most useful version first, then improving it after launch based on real feedback.",
      },
    ],
  },
  {
    title: "Process",
    faqs: [
      {
        question: "What happens after I contact you?",
        answer:
          "We review your idea, ask a few key questions, suggest the best direction, and share the next steps.",
      },
      {
        question: "Will I get updates during development?",
        answer:
          "Yes. We share regular progress updates so you always know what is done, what is next, and where feedback is needed.",
      },
      {
        question: "Do you handle design and development?",
        answer:
          "Yes. We can handle both product design and development, from wireframes to launch.",
      },
    ],
  },
  {
    title: "Support",
    faqs: [
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. We can help with fixes, improvements, updates, monitoring, and new feature development after launch.",
      },
      {
        question: "Can you manage hosting and deployment?",
        answer:
          "Yes. We can deploy your product, configure hosting, and guide you on the best setup for your project.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Yes. We work remotely with clients across different countries and time zones.",
      },
    ],
  },
];

export const services = [
  {
    id: 1,
    title: "MVP Development",
    slug: "mvp-development",
    description:
      "Build a fast, production-ready MVP to validate your startup idea with real users.",
    icon: <Rocket className="w-8 h-8" />,
    image: "/services/mvp.jpeg",
  },
  {
    id: 2,
    title: "Web & SaaS Development",
    slug: "web-saas-development",
    description:
      "Scalable web and SaaS applications with authentication, dashboards, and APIs.",
    icon: <Globe className="w-8 h-8" />,
    image: "/services/web.jpeg",
  },
  {
    id: 3,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Cross-platform mobile apps for Android & iOS designed for startups and MVP launches.",
    icon: <Smartphone className="w-8 h-8" />,
    image: "/services/app.jpeg",
  },
  {
    id: 5,
    title: "Web3 Development",
    slug: "web3-development",
    description:
      "Wallet-ready dApps, smart contract integrations, and blockchain products built for real users.",
    icon: <Bitcoin className="w-8 h-8" />,
    image: "/services/web.jpeg",
  },
  {
    id: 6,
    title: "AI Development",
    slug: "ai-development",
    description:
      "AI-powered apps, automations, and intelligent workflows using modern LLM and data tools.",
    icon: <BrainCircuit className="w-8 h-8" />,
    image: "/services/mvp.jpeg",
  },
  {
    id: 7,
    title: "Custom Tools Development",
    slug: "custom-tools-development",
    description:
      "Internal dashboards, admin systems, and workflow tools tailored to how your team works.",
    icon: <Wrench className="w-8 h-8" />,
    image: "/services/web.jpeg",
  },
  // {
  //   id: 4,
  //   title: "UI/UX for Startups",
  //   description:
  //     "Startup-focused UI/UX that improves usability, engagement, and conversions.",
  //   icon: <Palette className="w-8 h-8" />,
  // },
];

export const detailedServices = [
  {
    id: 1,
    title: "MVP Development",
    slug: "mvp-development",
    image: "/images/services/mvp-development.jpg",
    overview:
      "We help founders turn ideas into real, usable MVPs fast. Our MVPs are built to validate your concept, attract early users, and impress investors — without wasting time or money.",
    whatWeOffer: [
      "Rapid MVP development for startups",
      "Core feature implementation (no over-engineering)",
      "Authentication, dashboards & APIs",
      "Scalable architecture for future growth",
      "Deployment & launch support",
    ],
    process: [
      "Idea Validation – Understanding the problem & solution",
      "Feature Prioritization – MVP scope definition",
      "UI/UX Planning – Simple and usable flows",
      "Development – Fast, clean, scalable build",
      "Launch – Live MVP with real users",
    ],
    whyChooseUs: [
      "Startup-first mindset",
      "Fast delivery without sacrificing quality",
      "Built for validation, not just code",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    metaTitle: "MVP Development for Startups | Frontail Technology",
    metaDescription:
      "Build and launch your startup MVP fast with Frontail Technology. Validate ideas, attract users, and scale with confidence.",
    keywords: [
      "mvp development",
      "startup mvp",
      "prototype development",
      "early stage startup",
    ],
    cta: {
      title: "Have an idea?",
      subtitle: "Let’s turn it into a real MVP and test it with users.",
      buttonText: "Build My MVP",
    },
  },

  {
    id: 2,
    title: "Web & SaaS Development",
    slug: "web-saas-development",
    image: "/images/services/saas-development.jpg",
    overview:
      "We build scalable web and SaaS products that grow with your startup — from first users to thousands. Clean architecture, strong security, and future-ready code.",
    whatWeOffer: [
      "SaaS application development",
      "Multi-tenant architecture",
      "User roles, dashboards & admin panels",
      "Subscription & billing integration",
      "Performance & security optimization",
    ],
    process: [
      "Product Planning – Understanding SaaS goals",
      "Architecture Design – Scalable foundation",
      "Development – Feature-by-feature execution",
      "Testing – Stability, security & performance",
      "Launch & Scale – Production-ready SaaS",
    ],
    whyChooseUs: [
      "Experience building real SaaS products",
      "Scalable, cloud-ready architecture",
      "Clean code & long-term maintainability",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "Stripe",
    ],
    metaTitle: "SaaS & Web App Development | Frontail Technology",
    metaDescription:
      "We build scalable SaaS and web applications for startups — secure, fast, and ready to scale.",
    keywords: [
      "saas development",
      "web application development",
      "subscription platform",
      "startup saas",
    ],
    cta: {
      title: "Building a SaaS product?",
      subtitle: "Let’s create a scalable web platform together.",
      buttonText: "Start SaaS Project",
    },
  },

  {
    id: 3,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    image: "/images/services/mobile-app.jpg",
    overview:
      "We build startup-ready mobile apps that are fast, scalable, and user-friendly. Perfect for MVP launches, consumer apps, and SaaS companions.",
    whatWeOffer: [
      "Cross-platform app development (Android & iOS)",
      "Startup-focused MVP mobile apps",
      "API & backend integration",
      "App Store & Play Store deployment",
      "Post-launch support & updates",
    ],
    process: [
      "App Planning – Defining core mobile features",
      "UI/UX Design – Smooth mobile experience",
      "Development – Cross-platform build",
      "Testing – Device & performance testing",
      "Launch – Store publishing & rollout",
    ],
    whyChooseUs: [
      "Faster time-to-market",
      "Single codebase, lower cost",
      "Optimized for startup growth",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Firebase",
      "Redux",
      "TypeScript",
      "Node.js",
    ],
    metaTitle: "Mobile App Development for Startups | Frontail Technology",
    metaDescription:
      "Launch your startup mobile app faster with cross-platform Android and iOS development.",
    keywords: [
      "mobile app development",
      "startup mobile app",
      "react native app",
      "flutter app",
    ],
    cta: {
      title: "Got a mobile app idea?",
      subtitle: "Let’s build and launch it fast.",
      buttonText: "Build My App",
    },
  },

  {
    id: 4,
    title: "UI/UX for Startups",
    slug: "ui-ux-for-startups",
    image: "/images/services/ui-ux-design.jpg",
    overview:
      "We design clean, conversion-focused UI/UX for startups. Every screen is crafted to reduce friction, improve adoption, and retain users.",
    whatWeOffer: [
      "Product UI/UX design",
      "Wireframes & clickable prototypes",
      "Design systems for scalability",
      "Mobile & web UI design",
      "Founder-friendly design handoff",
    ],
    process: [
      "User Research – Understanding user behavior",
      "Wireframing – Structuring the product flow",
      "UI Design – Clean, modern visuals",
      "Validation – Usability feedback",
      "Handoff – Dev-ready design files",
    ],
    whyChooseUs: [
      "Startup & product-focused design",
      "Conversion-driven layouts",
      "Simple, clean, and scalable UI",
    ],
    technologies: ["Figma", "Framer", "Webflow", "Adobe XD"],
    metaTitle: "Startup UI/UX Design Services | Frontail Technology",
    metaDescription:
      "UI/UX design services for startups focused on usability, growth, and conversions.",
    keywords: [
      "startup ui ux",
      "product design",
      "saas ui design",
      "mvp ui ux",
    ],
    cta: {
      title: "Want better user adoption?",
      subtitle: "Let’s design experiences users love.",
      buttonText: "Design My Product",
    },
  },
  {
    id: 5,
    title: "Web3 Development",
    slug: "web3-development",
    image: "/images/services/web3-development.jpg",
    overview:
      "We build practical Web3 products with clean user flows, secure wallet interactions, and blockchain integrations that feel simple for everyday users.",
    whatWeOffer: [
      "dApp frontend development",
      "Wallet connection and user flows",
      "Smart contract integration",
      "NFT, token, and marketplace features",
      "Web3 dashboards and admin panels",
    ],
    process: [
      "Use Case Planning â€“ Defining the blockchain need",
      "Architecture â€“ Choosing wallet and contract flows",
      "Interface Design â€“ Making Web3 simple for users",
      "Development â€“ Building secure integrations",
      "Launch â€“ Testing and production rollout",
    ],
    whyChooseUs: [
      "User-friendly Web3 experiences",
      "Secure integration mindset",
      "Frontend, backend, and wallet flow expertise",
    ],
    technologies: [
      "Next.js",
      "React",
      "Ethers.js",
      "Wagmi",
      "Solidity",
      "Node.js",
      "TypeScript",
    ],
    metaTitle: "Web3 Development Services | Frontail Technology",
    metaDescription:
      "Build wallet-ready Web3 apps, dApps, and blockchain product interfaces with Frontail Technology.",
    keywords: [
      "web3 development",
      "dapp development",
      "blockchain app",
      "wallet integration",
    ],
    cta: {
      title: "Building a Web3 product?",
      subtitle: "Letâ€™s make it secure, clean, and easy to use.",
      buttonText: "Start Web3 Project",
    },
  },

  {
    id: 6,
    title: "AI Development",
    slug: "ai-development",
    image: "/images/services/ai-development.jpg",
    overview:
      "We build AI-powered products and automations that help teams move faster, reduce manual work, and create smarter customer experiences.",
    whatWeOffer: [
      "AI chatbots and assistants",
      "LLM-powered app features",
      "Workflow automation",
      "Document and data processing tools",
      "AI integration into existing products",
    ],
    process: [
      "Problem Mapping â€“ Finding useful AI opportunities",
      "Flow Design â€“ Planning prompts, data, and actions",
      "Prototype â€“ Testing the AI workflow quickly",
      "Development â€“ Building reliable app features",
      "Iteration â€“ Improving quality with feedback",
    ],
    whyChooseUs: [
      "Practical AI, not gimmicks",
      "Product-focused implementation",
      "Clean UI around complex AI workflows",
    ],
    technologies: [
      "OpenAI",
      "LangChain",
      "Next.js",
      "Node.js",
      "Vector Databases",
      "PostgreSQL",
      "TypeScript",
    ],
    metaTitle: "AI Development Services | Frontail Technology",
    metaDescription:
      "AI app development, chatbot development, and workflow automation for startups and businesses.",
    keywords: [
      "ai development",
      "ai app development",
      "chatbot development",
      "workflow automation",
    ],
    cta: {
      title: "Want to add AI?",
      subtitle: "Letâ€™s build useful AI features around your real workflow.",
      buttonText: "Build AI Feature",
    },
  },

  {
    id: 7,
    title: "Custom Tools Development",
    slug: "custom-tools-development",
    image: "/images/services/custom-tools.jpg",
    overview:
      "We create custom internal tools that replace messy spreadsheets, manual tracking, and disconnected workflows with clean systems built for your team.",
    whatWeOffer: [
      "Admin dashboards and panels",
      "CRM and operations tools",
      "Inventory and workflow systems",
      "Reporting and analytics dashboards",
      "Role-based access and team management",
    ],
    process: [
      "Workflow Audit â€“ Understanding how your team works",
      "Scope Planning â€“ Prioritizing the highest-impact tools",
      "UX Design â€“ Creating fast internal workflows",
      "Development â€“ Building secure, reliable tools",
      "Training â€“ Helping your team use it smoothly",
    ],
    whyChooseUs: [
      "Built around your actual process",
      "Fast dashboards and clean data flows",
      "Easy-to-use tools for non-technical teams",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
    ],
    metaTitle: "Custom Tools Development | Frontail Technology",
    metaDescription:
      "Custom admin panels, dashboards, internal tools, and workflow systems for growing teams.",
    keywords: [
      "custom tools development",
      "internal tools",
      "admin dashboard",
      "workflow software",
    ],
    cta: {
      title: "Need a custom tool?",
      subtitle: "Letâ€™s turn your daily workflow into a simple system.",
      buttonText: "Build Custom Tool",
    },
  },
];
