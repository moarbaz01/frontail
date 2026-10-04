export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client?: string;
  timeline?: string;
  industry: string;
  category: string;
  platforms: string[];
  themeColor: string;
  heroImage: string;
  externalUrl?: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];

  overview: string;
  theChallenge: {
    heading: string;
    description: string;
    bulletPoints: string[];
  };
  whatWeBuilt: {
    heading: string;
    description: string;
    keyHighlights: {
      title: string;
      description: string;
    }[];
  };

  deepDiveSections?: {
    title: string;
    description: string;
    subsections?: {
      title: string;
      description: string;
    }[];
  }[];

  keyFeatures: {
    title: string;
    description: string;
    tag?: string;
  }[];

  engineeringArchitecture: {
    heading: string;
    description: string;
    layers: {
      layerName: string;
      components: string[];
      details: string;
    }[];
  };

  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];

  techStack: {
    category: string;
    items: string[];
  }[];

  deliverables: {
    title: string;
    description: string;
  }[];

  relatedServices: {
    name: string;
    slug: string;
    description: string;
  }[];

  relatedSlugs: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "stock-harvesting",
    title: "Stock Harvesting",
    subtitle: "High-Performance Market Analytics, Interactive Candlestick Engine & Sector Backtesting Platform",
    client: "Stock Harvesting",
    industry: "FinTech / Market Analytics",
    category: "SaaS & Market Data Platform",
    platforms: ["Web Application", "Tablet & Desktop Dashboard"],
    themeColor: "#EAB308",
    heroImage: "/projects/stockharvesting.png",
    externalUrl: "https://stockharvesting.in",
    seoTitle: "Stock Harvesting Case Study — Market Analytics Platform | Frontail Technologies",
    seoDescription: "How Frontail engineered Stock Harvesting: an interactive candlestick charting engine, sector-level harvest backtesting, time-series data pipelines, and real-time market watchlists.",
    keywords: [
      "Stock Harvesting case study",
      "stock market analytics platform",
      "candlestick charting engine",
      "stock backtesting software",
      "FinTech SaaS development",
      "TradingView charts integration",
    ],

    overview:
      "Stock Harvesting is a high-performance market analytics and quantitative research platform designed for active traders and financial analysts. Frontail engineered a web application pairing interactive candlestick charting with a sector-level historical analytics engine and reliable time-series data pipelines.",

    theChallenge: {
      heading: "Rendering Dense Financial Time-Series & Multi-Sector Historical Data Without Latency",
      description:
        "Financial data interfaces often suffer from UI degradation when rendering dense historical candlestick records, real-time indicator overlays, and simultaneous sector aggregates on standard viewports.",
      bulletPoints: [
        "Rendering dense time-series histories smoothly on desktop and tablet devices without frame drops or browser latency.",
        "Visualizing historical sector performance distributions across 18+ market sectors over multi-year date horizons.",
        "Providing responsive keyboard navigation (Ctrl+K search) and fast timeframe switching across equity watchlists.",
        "Delivering computed performance metrics cleanly on responsive client-side dashboards.",
      ],
    },

    whatWeBuilt: {
      heading: "A Unified Market Dashboard with Interactive Charting & Historical Analytics",
      description:
        "Frontail architected and developed the full-stack Stock Harvesting platform, delivering a responsive analytics dashboard, canvas-based charting, and structured data pipelines for financial time-series data.",
      keyHighlights: [
        {
          title: "Interactive Candlestick Engine",
          description:
            "Implemented smooth, responsive candlestick charts with dynamic timeframe controls (1D, 1W, 1M), volume histogram overlays, and real-time cursor crosshairs.",
        },
        {
          title: "Sector-Level Historical Analytics",
          description:
            "Engineered a visual stacked performance visualizer allowing traders to analyze historical signal distributions across 18+ industry sectors over custom date ranges.",
        },
        {
          title: "Market Watchlists & Fast Instrument Search",
          description:
            "Constructed quick-access watchlists paired with global keyboard shortcuts (Ctrl+K) for instant stock discovery and chart reloading.",
        },
        {
          title: "Quantitative Performance HUD",
          description:
            "Integrated real-time metric cards computing hit ratio, return percentages, drawdown limits, trade counts, and signal status.",
        },
      ],
    },

    deepDiveSections: [
      {
        title: "Trading & Charting Experience",
        description:
          "The charting interface was built to provide active traders with responsive desktop and tablet visualization.",
        subsections: [
          {
            title: "Multi-Timeframe Candlestick Rendering",
            description:
              "Traders can switch between daily (1D), weekly (1W), monthly (1M), and custom period views with synchronized volume sub-charts.",
          },
          {
            title: "Signal Indicators & Performance Statistics",
            description:
              "Analyzed instruments display execution stats including hit ratio, return metrics, drawdown tracking, and holding periods.",
          },
        ],
      },
      {
        title: "Historical Sector Analytics",
        description:
          "The Harvest Backtest module provides macro and micro insight into how signals perform across sector cycles.",
        subsections: [
          {
            title: "18-Sector Stacked Performance Visualizer",
            description:
              "Historical results are organized into categorized industry sectors displaying aggregate signal distributions across market regimes.",
          },
          {
            title: "Custom Time-Range Filters",
            description:
              "Users can query and review historical performance across 1 Year, 3 Years, or All Available Data with instant client-side updates.",
          },
        ],
      },
      {
        title: "Market Data Engineering",
        description:
          "To ensure responsive chart rendering, historical price data is structured in an optimized time-series format and synchronized through reliable pipelines.",
        subsections: [
          {
            title: "Time-Series Data Normalization",
            description:
              "Price data streams are cleaned, indexed by timestamp, and served through cached REST endpoints to minimize network payloads and prevent client-side chart stutter.",
          },
        ],
      },
    ],

    keyFeatures: [
      {
        title: "Interactive Candlestick Charting",
        description: "Low-latency OHLCV charts with volume overlays, crosshairs, and multi-timeframe controls (1D, 1W, 1M).",
        tag: "Visualization",
      },
      {
        title: "Harvest Backtest Dashboard",
        description: "Visual stacked bar charts analyzing signal outcomes grouped across 18 industry sectors.",
        tag: "Analytics",
      },
      {
        title: "BSE / NSE Watchlists",
        description: "Curated market watchlists with live price changes and percentage performance pills.",
        tag: "Watchlists",
      },
      {
        title: "Instant Keyboard Search (Ctrl+K)",
        description: "Global modal search allowing rapid instrument lookup across thousands of listed equities.",
        tag: "Navigation",
      },
      {
        title: "Quantitative Metric HUD",
        description: "Computed stats displaying Hit Ratio, Total Return %, Max Drawdown %, and trade distributions.",
        tag: "Quant HUD",
      },
      {
        title: "Responsive Multi-Pane UI",
        description: "Tailored analytical layout optimizing screen real estate across wide displays and iPad tablets.",
        tag: "UI / UX",
      },
    ],

    engineeringArchitecture: {
      heading: "Layered Financial Architecture for Time-Series Ingestion & Canvas Charting",
      description:
        "The application separates client-side charting from time-series storage and data ingestion pipelines to maintain 60 FPS interactions during market analysis.",
      layers: [
        {
          layerName: "Market Data Sources",
          components: ["Data Providers", "Market Feeds"],
          details:
            "Connects to reliable financial market data sources for equity price feeds.",
        },
        {
          layerName: "Data Processing Layer",
          components: ["Node.js REST Services", "Data Normalization"],
          details:
            "Handles data cleaning, normalization, and structured payload delivery.",
        },
        {
          layerName: "Time-Series Storage Layer",
          components: ["PostgreSQL", "TimescaleDB Time-Series Indices"],
          details:
            "Stores timestamp-indexed price candles and historical datasets for rapid retrieval.",
        },
        {
          layerName: "Client Presentation Layer",
          components: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Canvas Rendering"],
          details:
            "Manages responsive dashboard state, chart rendering, keyboard navigation, and client-side metric display.",
        },
      ],
    },

    technicalChallenges: [
      {
        challenge: "Rendering Dense Historical Datasets Without Browser Lag",
        solution:
          "Adopted canvas-based chart rendering with viewport data slicing to deliver smooth 60 FPS performance.",
      },
      {
        challenge: "Multi-Sector Historical Analytics",
        solution:
          "Structured historical data on the backend to deliver organized sector aggregates directly to client visualizers.",
      },
      {
        challenge: "Market-Data Synchronization",
        solution:
          "Built a non-intrusive background synchronization pipeline that updates data while preserving active user chart state.",
      },
    ],

    techStack: [
      {
        category: "Frontend & UI",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Charting & Visualization",
        items: ["TradingView Lightweight Charts", "Canvas Rendering", "Lucide Icons"],
      },
      {
        category: "Backend & Data",
        items: ["Node.js", "REST APIs", "Time-Series Normalization"],
      },
      {
        category: "Database & Storage",
        items: ["PostgreSQL", "TimescaleDB Time-Series Indexing"],
      },
    ],

    deliverables: [
      {
        title: "Interactive Web & Tablet Dashboard",
        description: "Full-featured responsive trading interface optimized for analytical workflows and chart inspections.",
      },
      {
        title: "Sector-Level Harvest Backtesting Module",
        description: "Multi-year historical backtesting visualizer with 18-sector categorization and time filtering.",
      },
      {
        title: "Dynamic Candlestick & Volume Engine",
        description: "High-performance charting component with timeframe toggles, volume bars, and quantitative trade metrics.",
      },
      {
        title: "Watchlists & Instrument Search System",
        description: "Keyboard-driven stock search and index watchlist management.",
      },
    ],

    relatedServices: [
      {
        name: "Web & SaaS Development",
        slug: "web-saas-development",
        description: "Build scalable multi-tenant SaaS platforms and analytics dashboards with Next.js and TypeScript.",
      },
      {
        name: "Custom Software Development",
        slug: "custom-software-development",
        description: "Engineer custom internal tools, data processing pipelines, and high-performance financial systems.",
      },
      {
        name: "MVP Development",
        slug: "mvp-development",
        description: "Launch production-ready startup MVPs with clean architecture in 4 to 8 weeks.",
      },
    ],

    relatedSlugs: ["voxlogix", "udharipay", "inbox-pull"],
  },

  {
    slug: "voxlogix",
    title: "VoxLogix",
    subtitle: "Industrial Operations & Voice-Assisted Mobile Field Logging Platform",
    client: "VoxLogix",
    industry: "Industrial Operations / Field Logging",
    category: "Mobile App & Industrial SaaS",
    platforms: ["Mobile App (iOS & Android)", "React Native / Expo"],
    themeColor: "#F5C400",
    heroImage: "/projects/voxlogix.png",
    externalUrl: "https://voxlogix.in",
    seoTitle: "VoxLogix Case Study — Industrial Operations Mobile Platform | Frontail Technologies",
    seoDescription: "How Frontail built VoxLogix: turning industrial operational logging into a structured mobile workflow with voice audio capture, out-of-limit alerts, and offline tolerance.",
    keywords: [
      "VoxLogix case study",
      "industrial operations mobile app",
      "voice field logging app",
      "React Native industrial software",
      "equipment maintenance logs",
      "operational logging app",
    ],

    overview:
      "VoxLogix is a mobile-first industrial operational logging platform that replaces paper logbooks and disconnected clipboards with structured digital workflows. Technicians and supervisors capture equipment conditions, meter counters, measurement points, Kaizen ideas, and safety observations using voice and structured inputs in demanding plant environments.",

    theChallenge: {
      heading: "Turning Unstructured Plant Notes into Standardized, Traceable Operational Records",
      description:
        "Industrial maintenance and plant floor operations require rapid logging under noisy, active conditions. Typing lengthy descriptions on mobile keyboards often leads to sparse records or skipped entries.",
      bulletPoints: [
        "Eliminating manual paper logbooks and illegible handwritten maintenance notes across rotating shifts.",
        "Enabling fast hands-free voice note capture (`.m4a` audio) with automated speech-to-text transcript generation.",
        "Enforcing structured validation for equipment condition logs, meter counters, and measurement points.",
        "Triggering immediate visual field alerts whenever manual counter readings or measurement points deviate outside safe operating limits.",
        "Ensuring seamless operation in plant zones with intermittent or no network connectivity.",
      ],
    },

    whatWeBuilt: {
      heading: "A Voice-Assisted Mobile App with Dedicated Industrial Log Types & Field Feed",
      description:
        "Frontail engineered the VoxLogix mobile application using React Native and Expo, establishing a modular logging system designed specifically for industrial plant workers and maintenance supervisors.",
      keyHighlights: [
        {
          title: "Modular 'Choose Log Type' System",
          description:
            "Engineered dedicated logging flows for Equipment Logs, Kaizen improvements, Measurement Points, Meter Counters, and Safety Logs.",
        },
        {
          title: "Integrated Audio Recording & Voice Transcripts",
          description:
            "Implemented direct `.m4a` voice recording with embedded audio playback and speech-to-text conversion to capture rich operational context quickly.",
        },
        {
          title: "Deviation & Out-of-Limit Alerts",
          description:
            "Built automated threshold evaluation where counter readings with high deviations (e.g. MC-002 Power Consumption) or out-of-limit measurements (e.g. MP-002 Discharge Pressure) immediately post high-priority alert cards to the Field Feed.",
        },
        {
          title: "Real-Time Field Feed & Sync Status",
          description:
            "Designed a chronological activity stream with module filters (All, Equipment, Kaizen, Measurement) and offline queue status indicators (`• OK Sync`).",
        },
      ],
    },

    keyFeatures: [
      {
        title: "Equipment Logging Workflow",
        description: "Captures equipment issues, operating conditions, maintenance actions, downtime duration, and follow-up tasks.",
        tag: "Equipment",
      },
      {
        title: "Voice Audio Recording & Playback",
        description: "One-tap voice recording (`.m4a`) allowing hands-free field note capture with speech-to-text translation.",
        tag: "Voice Engine",
      },
      {
        title: "Meter Counter & Measurement Points",
        description: "Manual counter and sensor entry forms with automated deviation checking against baseline thresholds.",
        tag: "Inspection",
      },
      {
        title: "Safety & Kaizen Improvement Logs",
        description: "Structured workflows for incident context, PPE needs, and Kaizen improvement suggestions with action ownership.",
        tag: "Safety & Kaizen",
      },
      {
        title: "Operational Field Feed",
        description: "Live feed of recent plant logs tagged with severity badges (High Deviation, Out of Limit, Medium, Active).",
        tag: "Feed",
      },
      {
        title: "Offline-Tolerant Sync Status",
        description: "Local data caching that tracks today's logs, pending uploads, and network synchronization health.",
        tag: "Offline Sync",
      },
    ],

    engineeringArchitecture: {
      heading: "Client-Side Audio Pipeline & State Management with React Native",
      description:
        "The mobile architecture emphasizes low-latency audio capture, robust local caching, and reliable background synchronization.",
      layers: [
        {
          layerName: "Mobile Interface & Audio Pipeline",
          components: ["React Native", "Expo Audio API", "Lucide React Native", "Custom Voice HUD"],
          details:
            "Handles microphone permissions, `.m4a` audio encoding, waveform feedback, and bottom-bar voice navigation.",
        },
        {
          layerName: "State & Cache Layer",
          components: ["Zustand Store", "React Query", "AsyncStorage"],
          details:
            "Manages local offline log queues, form state across multi-step logging sheets, and feed pagination.",
        },
        {
          layerName: "Backend & Processing API",
          components: ["Node.js REST Services", "Speech-to-Text Pipeline", "PostgreSQL"],
          details:
            "Receives audio binaries and structured payloads, performs transcription processing, and stores plant activity records.",
        },
      ],
    },

    technicalChallenges: [
      {
        challenge: "Reliable Voice Recording in Industrial Environments",
        solution:
          "Configured optimized `.m4a` audio compression to ensure lightweight upload payloads while preserving speech fidelity for accurate transcription.",
      },
      {
        challenge: "Immediate Visual Feedback for Parameter Deviations",
        solution:
          "Implemented client-side threshold evaluation that instantly tags submitted measurement records with color-coded severity pills before syncing to the centralized feed.",
      },
    ],

    techStack: [
      {
        category: "Mobile Framework",
        items: ["React Native", "Expo", "TypeScript"],
      },
      {
        category: "State & Data Fetching",
        items: ["Zustand", "React Query", "AsyncStorage"],
      },
      {
        category: "Audio & Media",
        items: ["Expo Audio (.m4a)", "Speech-to-Text Integration"],
      },
      {
        category: "Backend & API",
        items: ["Node.js", "REST APIs", "PostgreSQL"],
      },
    ],

    deliverables: [
      {
        title: "Cross-Platform Mobile Application",
        description: "Production-ready iOS and Android mobile app built with React Native and Expo.",
      },
      {
        title: "5 Industrial Log Modules",
        description: "Tailored data entry workflows for Equipment, Kaizen, Measurement Points, Meter Counters, and Safety Logs.",
      },
      {
        title: "Integrated Voice Engine",
        description: "Voice recording, audio playback, and transcription pipeline for hands-free documentation.",
      },
      {
        title: "Real-Time Field Feed & Alert System",
        description: "Filterable activity stream highlighting out-of-limit deviations and equipment condition changes.",
      },
    ],

    relatedServices: [
      {
        name: "Mobile App Development",
        slug: "mobile-app-development",
        description: "Build robust, cross-platform iOS and Android applications with React Native and Expo.",
      },
      {
        name: "Custom Software Development",
        slug: "custom-software-development",
        description: "Engineer custom operational platforms, field workflow tools, and enterprise management systems.",
      },
      {
        name: "AI Development",
        slug: "ai-development",
        description: "Integrate speech-to-text, LLM automation, and intelligent data pipelines into existing workflows.",
      },
    ],

    relatedSlugs: ["hn-enterprises", "udharipay", "stock-harvesting"],
  },

  {
    slug: "udharipay",
    title: "UdhariPay",
    subtitle: "FinTech Digital Collections, Merchant Onboarding & UPI Autopay Mandate Platform",
    client: "UdhariPay",
    industry: "FinTech / Merchant Collections",
    category: "FinTech Mobile & SaaS Platform",
    platforms: ["Mobile App (React Native)", "Web Admin & Merchant Portal"],
    themeColor: "#7C3AED",
    heroImage: "/projects/udharipay.png",
    externalUrl: "https://udharipay.com",
    seoTitle: "UdhariPay Case Study — FinTech Collections Platform | Frontail Technologies",
    seoDescription: "How Frontail developed UdhariPay: a structured digital collections platform featuring merchant KYC onboarding, UPI Autopay recurring mandates, and EMI tracking.",
    keywords: [
      "UdhariPay case study",
      "FinTech collections app",
      "UPI Autopay mandate software",
      "merchant credit management app",
      "React Native FinTech development",
      "recurring payments platform",
    ],

    overview:
      "UdhariPay is a digital collections and merchant credit management platform that streamlines informal business credit. By replacing manual payment follow-ups with automated UPI Autopay mandates, digital KYC verification, and scheduled collection plans, UdhariPay gives businesses structured transparency over outstanding credit lines.",

    theChallenge: {
      heading: "Eliminating Manual Ledger Follow-ups with Automated Recurring Payment Mandates",
      description:
        "B2B and merchant credit collection in traditional commercial markets frequently relies on paper ledgers ('udhari khata') and ad-hoc cash or UPI transfers, resulting in high delinquency rates and manual reconciliation overhead.",
      bulletPoints: [
        "Replacing unverified paper credit agreements with structured digital merchant onboarding and document verification (PAN, GST, Gumasta).",
        "Configuring flexible installment structures including daily, weekly, and monthly EMI repayment schedules.",
        "Integrating UPI Autopay recurring debit mandate authorization directly through customer UPI apps.",
        "Providing real-time visibility into collection totals, upcoming EMI dues, and individual customer payment histories.",
        "Designing clear separation of concerns between on-ground collection agents and merchant view-only administrators.",
      ],
    },

    whatWeBuilt: {
      heading: "A Dual-Role Mobile & Web Platform for Digital Collections & Mandate Approvals",
      description:
        "Frontail developed the UdhariPay mobile application and administrative backend, delivering a reliable payment infrastructure centered on automated collections and verifiable merchant profiles.",
      keyHighlights: [
        {
          title: "Merchant Dashboard & Collection Metrics",
          description:
            "Implemented an executive mobile overview displaying total collected revenue (e.g. ₹84,034 across 53 payments), upcoming EMI schedules, and quick actions for onboarding and payment scans.",
        },
        {
          title: "UPI Autopay Recurring Mandate Flow",
          description:
            "Constructed a seamless mandate approval modal specifying repayment amount, monthly frequency, start date, and maximum mandate caps (e.g. ₹50,000) redirecting to UPI applications for secure customer authorization.",
        },
        {
          title: "Merchant KYC & Verification Pipeline",
          description:
            "Designed onboarding forms capturing commercial documentation including PAN, GST, and Gumasta licenses with verification status tags (`Customer Verified`).",
        },
        {
          title: "Real-Time Collection Feed",
          description:
            "Built itemized payment transaction feeds displaying customer names, EMI sequence numbers (EMI #1, EMI #2), timestamps, and settlement statuses (`Success`, `Pending`).",
        },
      ],
    },

    keyFeatures: [
      {
        title: "Digital Collections Dashboard",
        description: "High-level summary tracking total collected revenue, payment counts, and active mandate statuses.",
        tag: "Dashboard",
      },
      {
        title: "UPI Autopay Mandate Integration",
        description: "Automated recurring debit mandate authorization with customizable frequencies and maximum amount caps.",
        tag: "Mandates",
      },
      {
        title: "Merchant & Borrower Onboarding",
        description: "Structured digital onboarding workflows with document verification for PAN, GST, and Gumasta records.",
        tag: "KYC",
      },
      {
        title: "Multi-Interval Collection Plans",
        description: "Customizable installment schedules supporting daily, weekly, or monthly repayment cycles.",
        tag: "EMI Engine",
      },
      {
        title: "Real-Time Transaction Status",
        description: "Instant transaction feeds with visual success indicators and pending payment alerts.",
        tag: "Transactions",
      },
      {
        title: "Role-Based Access Control",
        description: "Separated permissions for field collection agents and merchant business owners.",
        tag: "Security",
      },
    ],

    engineeringArchitecture: {
      heading: "Secure Mobile Mandate Architecture & Transaction Ledger",
      description:
        "The architecture is designed for transaction integrity, deterministic mandate scheduling, and secure communication with payment handlers.",
      layers: [
        {
          layerName: "Mobile Client Layer",
          components: ["React Native", "TypeScript", "Tailwind CSS / NativeWind"],
          details:
            "Delivers the merchant collection dashboard, mandate creation sheets, and deep-link handlers for UPI payment redirection.",
        },
        {
          layerName: "Payment & Mandate Orchestration",
          components: ["UPI Autopay Handler", "Mandate State Machine", "Webhook Listener"],
          details:
            "Manages mandate registration, recurring execution triggers, and asynchronous webhook reconciliation for payment events.",
        },
        {
          layerName: "Ledger & Data Storage Layer",
          components: ["Node.js API", "PostgreSQL Ledger Tables"],
          details:
            "Maintains append-only collection records, customer KYC documents, and installment schedule projections.",
        },
      ],
    },

    technicalChallenges: [
      {
        challenge: "Handling Multi-Step UPI Mandate Authorization",
        solution:
          "Built a resilient state machine managing mandate pending, authorization redirect, webhook callback confirmation, and failure retry flows.",
      },
      {
        challenge: "Flexible EMI Calculation Across Diverse Payment Intervals",
        solution:
          "Engineered a dynamic installment calculator generating projected repayment tables for daily, weekly, and monthly payment schedules.",
      },
    ],

    techStack: [
      {
        category: "Mobile Application",
        items: ["React Native", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Web & Admin",
        items: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Payments & Mandates",
        items: ["UPI Autopay Integration", "Webhook Receivers"],
      },
      {
        category: "Backend & Database",
        items: ["Node.js", "PostgreSQL", "REST APIs"],
      },
    ],

    deliverables: [
      {
        title: "Cross-Platform Merchant Mobile App",
        description: "React Native mobile application for merchant collections and customer management.",
      },
      {
        title: "UPI Autopay Mandate Approval Flow",
        description: "Integrated recurring debit mandate creation and customer authorization workflow.",
      },
      {
        title: "Document & KYC Verification Module",
        description: "Digital onboarding engine for PAN, GST, and Gumasta documentation.",
      },
      {
        title: "Real-Time Collections Ledger",
        description: "Live transaction tracking with EMI milestone logs and settlement status feeds.",
      },
    ],

    relatedServices: [
      {
        name: "Mobile App Development",
        slug: "mobile-app-development",
        description: "Build robust, cross-platform iOS and Android applications with React Native and Expo.",
      },
      {
        name: "Web & SaaS Development",
        slug: "web-saas-development",
        description: "Build scalable multi-tenant SaaS platforms and financial dashboards with Next.js and TypeScript.",
      },
      {
        name: "Custom Software Development",
        slug: "custom-software-development",
        description: "Engineer custom internal tools, payment workflows, and business software.",
      },
    ],

    relatedSlugs: ["voxlogix", "stock-harvesting", "inbox-pull"],
  },

  {
    slug: "inbox-pull",
    title: "Inbox Pull",
    subtitle: "Gmail API SaaS Platform for Mailbox Ingestion, Campaign Sequencing & Funnel Analytics",
    client: "Inbox Pull",
    industry: "Email Marketing / SaaS",
    category: "SaaS & Marketing Automation",
    platforms: ["Web Application (Next.js & Bun)"],
    themeColor: "#2563EB",
    heroImage: "/projects/inboxpull.png",
    seoTitle: "Inbox Pull Case Study — Gmail API SaaS Platform | Frontail Technologies",
    seoDescription: "How Frontail engineered Inbox Pull: a modern SaaS platform integrating Google Gmail API for mailbox data ingestion, template design, outreach sequences, and funnel analytics.",
    keywords: [
      "Inbox Pull case study",
      "Gmail API SaaS platform",
      "email marketing automation software",
      "Elysia.js Bun backend",
      "Next.js SaaS development",
      "outreach campaign software",
    ],

    overview:
      "Inbox Pull is an email marketing and outreach automation SaaS that connects directly to Google Workspace via the Gmail API. The platform provides growth teams with high-speed mailbox ingestion, dynamic variable template authoring, multi-stage campaign sequence management, and conversion funnel analytics.",

    theChallenge: {
      heading: "Managing High-Throughput Gmail Ingestion with Clean Campaign Workflows",
      description:
        "Building email marketing software requires balancing third-party API rate limits, secure OAuth token management, and low-latency analytics aggregation across thousands of sent and received messages.",
      bulletPoints: [
        "Integrating Google Gmail API OAuth 2.0 with secure token refresh and granular scope management.",
        "Ingesting inbox activity data without exceeding Google API rate limits or triggering quota throttling.",
        "Building a dynamic email template editor supporting live merge variables (e.g. `{{company}}`, `{{first_name}}`) and rich text styling.",
        "Aggregating real-time campaign performance metrics including open rates, click rates, reply rates, bounce rates, and spam rates.",
        "Constructing a high-speed backend using modern TypeScript runtimes (Elysia.js & Bun) for rapid webhook and API execution.",
      ],
    },

    whatWeBuilt: {
      heading: "A High-Speed Marketing SaaS Dashboard with Gmail API Ingestion & Funnel Analytics",
      description:
        "Frontail designed and implemented the full Inbox Pull application, uniting a modern Next.js user interface with an ultra-fast Bun and Elysia.js API layer.",
      keyHighlights: [
        {
          title: "Gmail API OAuth Integration",
          description:
            "Implemented secure OAuth 2.0 authorization allowing users to connect Google Workspace mailboxes with automated token rotation and inbox synchronization.",
        },
        {
          title: "Multi-Status Campaign Manager",
          description:
            "Engineered campaign lifecycle controls categorizing outreach series into Active, Drafts, and Archived states with individual status pills (`Active`, `Paused`, `Draft`).",
        },
        {
          title: "Dynamic Template Builder",
          description:
            "Developed an email editor with variable injection (`{{company}}`, `{{first_name}}`), rich text formatting, preview mode, and direct template library management.",
        },
        {
          title: "Conversion Funnel & Time-Series Analytics",
          description:
            "Built real-time metric cards (Emails sent: 8,432, Open rate: 62.8%, Click rate: 24.6%, Reply rate: 11.3%) paired with time-series activity charts and recipient conversion funnels.",
        },
      ],
    },

    keyFeatures: [
      {
        title: "Gmail API Mailbox Ingestion",
        description: "Direct connection to Google Workspace mailboxes for synchronized activity monitoring and event capture.",
        tag: "Gmail API",
      },
      {
        title: "Campaign Sequence Management",
        description: "Multi-stage outreach campaigns with live status controls, target recipient lists, and warmup tracking.",
        tag: "Campaigns",
      },
      {
        title: "Dynamic Variable Template Editor",
        description: "Rich text template designer supporting customizable merge variables and instant preview capabilities.",
        tag: "Templates",
      },
      {
        title: "Funnel Performance Analytics",
        description: "Comprehensive KPIs tracking Open, Click, Reply, Bounce, and Spam rates with comparative benchmarks.",
        tag: "Analytics",
      },
      {
        title: "Time-Series Activity Visualization",
        description: "Synchronized line graphs charting Sent, Opens, and Replies over 30-day rolling windows.",
        tag: "Charts",
      },
      {
        title: "Inbox Warmup & Activity Logs",
        description: "Dedicated monitoring for mailbox warmup health, sender configurations, and deliverability events.",
        tag: "Warmup",
      },
    ],

    engineeringArchitecture: {
      heading: "High-Performance Bun & Elysia.js Backend with Next.js Frontend",
      description:
        "The system leverages Bun's native execution speed and Elysia.js for low-overhead HTTP routing alongside Next.js for dashboard rendering.",
      layers: [
        {
          layerName: "Frontend Application Layer",
          components: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          details:
            "Renders the campaign dashboard, template authoring suite, and interactive analytics visualization panels.",
        },
        {
          layerName: "High-Speed API Service",
          components: ["Elysia.js", "Bun Runtime"],
          details:
            "Handles Google OAuth callbacks, incoming webhook events, and fast JSON payload delivery with minimal overhead.",
        },
        {
          layerName: "Google Integration Layer",
          components: ["Google Gmail API v1", "OAuth 2.0 Client"],
          details:
            "Manages mailbox connections, thread history ingestion, and secure sender credential storage.",
        },
      ],
    },

    technicalChallenges: [
      {
        challenge: "Managing Gmail API Rate Limits During Bulk Ingestion",
        solution:
          "Implemented batch request handling and intelligent backoff algorithms to synchronize mailbox records without exceeding API quotas.",
      },
      {
        challenge: "Real-Time Funnel Calculation Across Large Recipient Lists",
        solution:
          "Aggregated email event counts asynchronously to serve pre-calculated analytics metrics instantly to the dashboard.",
      },
    ],

    techStack: [
      {
        category: "Frontend UI",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & Runtime",
        items: ["Elysia.js", "Bun Runtime", "REST APIs"],
      },
      {
        category: "Third-Party Integrations",
        items: ["Google Gmail API", "OAuth 2.0"],
      },
      {
        category: "Visualization & State",
        items: ["Time-Series Charting", "Lucide React"],
      },
    ],

    deliverables: [
      {
        title: "SaaS Outreach Dashboard",
        description: "Full-featured web application for managing email campaigns, templates, and sender accounts.",
      },
      {
        title: "Gmail API Integration Pipeline",
        description: "OAuth 2.0 authentication and mailbox ingestion engine connecting to Google Workspace.",
      },
      {
        title: "Dynamic Email Template Builder",
        description: "Rich text editing component with variable insertion and template library persistence.",
      },
      {
        title: "Funnel & Time-Series Analytics Suite",
        description: "Real-time engagement tracking with visual conversion funnels and rolling activity charts.",
      },
    ],

    relatedServices: [
      {
        name: "Web & SaaS Development",
        slug: "web-saas-development",
        description: "Build scalable multi-tenant SaaS platforms and marketing tools with Next.js and TypeScript.",
      },
      {
        name: "Custom Software Development",
        slug: "custom-software-development",
        description: "Engineer custom API integrations, third-party data pipelines, and internal tools.",
      },
      {
        name: "MVP Development",
        slug: "mvp-development",
        description: "Launch production-ready startup MVPs with clean architecture in 4 to 8 weeks.",
      },
    ],

    relatedSlugs: ["stock-harvesting", "udharipay", "voxlogix"],
  },

  {
    slug: "hn-enterprises",
    title: "HN Enterprises",
    subtitle: "An operations platform connecting field teams, project workflows, and centralized ERP management.",
    client: "HN Enterprises",
    industry: "CGD / Infrastructure Operations",
    category: "Field Operations & Enterprise ERP",
    platforms: ["Web ERP Dashboard", "Mobile App (React Native / Expo)"],
    themeColor: "#FF6500",
    heroImage: "/projects/hn-enterprises.png",
    seoTitle: "HN Enterprises Case Study — Field Operations & ERP Platform | Frontail Technologies",
    seoDescription: "See how Frontail built HN Enterprises, a connected web and mobile operations platform for field workflows, project visibility and centralized management.",
    keywords: [
      "HN Enterprises case study",
      "field operations platform",
      "infrastructure ERP software",
      "city gas distribution operations",
      "React Native field mobile app",
      "project management software",
    ],

    overview:
      "HN Enterprises is a connected field-operations and project-management platform built to bridge on-ground teams with centralized operational management. The product combines mobile workflows for field staff with a comprehensive web ERP for administrative oversight.",

    theChallenge: {
      heading: "Connecting Dispersed Field Activity with Centralized Management Oversight",
      description:
        "Field operations generate scattered updates across attendance, work progress, customers, complaints, planning, and expenses. Operational teams need one structured system that connects field activity with centralized management.",
      bulletPoints: [
        "Eliminating fragmented reporting between on-site supervisors and office administrators.",
        "Capturing reliable attendance check-ins and structured daily progress reports (DPR).",
        "Providing real-time operational visibility across active projects, resources, and billing.",
      ],
    },

    whatWeBuilt: {
      heading: "A Connected Web and Mobile Operations Platform for Field Teams and Leadership",
      description:
        "A connected web and mobile operations platform where field teams can record operational activity while management gets centralized visibility across projects, staff, and workflows.",
      keyHighlights: [
        {
          title: "Field Operations Mobile Application",
          description:
            "Cross-platform mobile tool enabling location-aware attendance, DPR filings, expense logging, and task status updates directly from active sites.",
        },
        {
          title: "Centralized Web ERP Dashboard",
          description:
            "Administrative management suite providing high-level visibility across projects, customers, staff rosters, and operational progress.",
        },
        {
          title: "Synchronized Operational Workflows",
          description:
            "Structured data pipelines connecting daily field milestones directly to administrative dashboards without manual handoffs.",
        },
      ],
    },

    keyFeatures: [
      {
        title: "Location-Aware Attendance",
        description: "Fast mobile check-in enabling field staff to verify daily presence on site.",
        tag: "Attendance",
      },
      {
        title: "DPR & Planning",
        description: "Structured progress reporting connecting daily field milestones to project timelines.",
        tag: "DPR",
      },
      {
        title: "Customer Management",
        description: "Centralized records tracking customer accounts, site installations, and history.",
        tag: "Customers",
      },
      {
        title: "Expense Tracking",
        description: "Mobile submission of on-ground expenses paired with centralized tracking.",
        tag: "Expenses",
      },
      {
        title: "Complaint Management",
        description: "Incident and maintenance issue logging with site zone attribution and status tracking.",
        tag: "Complaints",
      },
      {
        title: "Work Progress Tracking",
        description: "Real-time milestone counters monitoring project completion from survey to execution.",
        tag: "Progress",
      },
    ],

    engineeringArchitecture: {
      heading: "Cross-Platform Mobile Application & High-Performance Web Operations Stack",
      description:
        "The platform pairs a Next.js administrative dashboard with a React Native / Expo mobile client backed by a structured PostgreSQL relational data model.",
      layers: [
        {
          layerName: "Mobile Field App",
          components: ["React Native", "Expo", "TypeScript", "FlashList"],
          details:
            "Provides field staff with responsive workflows for attendance, DPR submissions, and site updates.",
        },
        {
          layerName: "Application & Data Layer",
          components: ["Node.js API", "REST Endpoints", "Auth Services"],
          details:
            "Handles real-time data ingestion, role-based authorization, and workflow status synchronization.",
        },
        {
          layerName: "Relational Database",
          components: ["PostgreSQL", "Relational Schema"],
          details:
            "Stores structured milestone records, employee attendance logs, customer records, and activity histories.",
        },
        {
          layerName: "Web Operations ERP",
          components: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          details:
            "Renders executive KPI dashboards, project matrices, customer tables, and workforce rosters.",
        },
      ],
    },

    technicalChallenges: [
      {
        challenge: "Field Usability & Workflow Speed",
        solution:
          "Mobile flows were structured around frequent operational tasks such as attendance, customers, DPR, expenses, and progress updates.",
      },
      {
        challenge: "Responsive Multi-Device Layouts",
        solution:
          "The mobile experience was hardened for responsive layouts and operational use across different device sizes.",
      },
      {
        challenge: "Operational Communication",
        solution:
          "Notification-oriented workflows were integrated into the mobile operational experience where supported.",
      },
    ],

    techStack: [
      {
        category: "Web ERP Dashboard",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Field Mobile App",
        items: ["React Native", "Expo", "Expo Router", "FlashList"],
      },
      {
        category: "Backend & API",
        items: ["Node.js", "REST APIs", "Auth Services"],
      },
      {
        category: "Database & Storage",
        items: ["PostgreSQL", "Relational Schema"],
      },
    ],

    deliverables: [
      {
        title: "Field Operations Mobile App",
        description: "Cross-platform mobile application enabling reliable field check-ins, daily reporting, and task tracking.",
      },
      {
        title: "Centralized Web ERP",
        description: "Centralized operational hub delivering unified oversight across projects, customers, and workforce.",
      },
      {
        title: "Operational Tracking Workflows",
        description: "Structured data pipelines linking daily site milestones directly to project milestones.",
      },
      {
        title: "Management Visibility",
        description: "Real-time operational visibility replacing fragmented updates with single-source clarity.",
      },
    ],

    relatedServices: [
      {
        name: "Mobile App Development",
        slug: "mobile-app-development",
        description: "Build robust, cross-platform iOS and Android applications with React Native and Expo.",
      },
      {
        name: "Web & SaaS Development",
        slug: "web-saas-development",
        description: "Build scalable web dashboards and ERP systems with Next.js and TypeScript.",
      },
      {
        name: "Custom Software Development",
        slug: "custom-software-development",
        description: "Engineer custom internal tools, field workflow platforms, and enterprise management systems.",
      },
    ],

    relatedSlugs: ["stock-harvesting", "voxlogix", "udharipay"],
  },

  {
    slug: "cdr912",
    title: "CDR912",
    subtitle: "A multi-level sports and gaming management platform built around distinct Master, Agent and Customer experiences.",
    client: "CDR912",
    industry: "Sports / Gaming",
    category: "Gaming Platform & Role System",
    platforms: ["Web Platform", "Role-Based Dashboards"],
    themeColor: "#2563eb",
    heroImage: "/projects/cdr.svg",
    seoTitle: "CDR912 Case Study — Multi-Level Gaming Platform | Frontail Technologies",
    seoDescription: "See how Frontail engineered CDR912, a high-performance sports and gaming management platform built with Next.js, Elysia.js, and Bun for multi-level Master, Agent, and Customer roles.",
    keywords: [
      "CDR912 case study",
      "sports gaming platform",
      "multi-level agent system",
      "Elysia.js Bun backend",
      "Next.js gaming dashboard",
      "role-based gaming architecture",
    ],

    overview:
      "CDR912 is a sports and gaming operations platform engineered around a multi-level operational hierarchy connecting Master administrators, regional Agents, and end Customers. Frontail architected separate role-aware web experiences powered by a high-throughput backend using Bun and Elysia.js.",

    theChallenge: {
      heading: "Structuring Multi-Level Operational Access and High-Throughput Request Routing",
      description:
        "The product needed to support multiple operational levels while giving each user type a clear, role-appropriate interface and controlled access to relevant platform functions without performance degradation.",
      bulletPoints: [
        "Isolating master-level platform oversight from intermediate agent workflows and customer experiences.",
        "Delivering low-latency dashboard interfaces across distinct operational tiers with real-time state updates.",
        "Handling high-volume concurrent user requests with an optimized, lightweight backend API architecture.",
      ],
    },

    whatWeBuilt: {
      heading: "A Multi-Tier Web Platform with Specialized Role Dashboards and Bun API Layer",
      description:
        "Frontail engineered a unified multi-role web platform pairing Next.js frontends with a high-performance Elysia.js and Bun backend, establishing clear boundaries between management, distribution, and player workflows.",
      keyHighlights: [
        {
          title: "Multi-Level Operational Hierarchy",
          description:
            "Structured distinct interfaces for Master administrators, regional Agents, and Customers with appropriate visibility at every tier.",
        },
        {
          title: "Role-Aware Dashboard Suite",
          description:
            "Tailored operational dashboards providing administrative controls for Masters, operational tools for Agents, and clean interfaces for Customers.",
        },
        {
          title: "High-Speed Bun & Elysia.js Backend",
          description:
            "High-throughput API layer delivering rapid response times and resilient request routing under active user traffic.",
        },
      ],
    },

    keyFeatures: [
      {
        title: "Multi-Level User Hierarchy",
        description: "Logical tiered architecture connecting Master, Agent, and Customer accounts.",
        tag: "Hierarchy",
      },
      {
        title: "Separate Role Experiences",
        description: "Dedicated interfaces tailored specifically to administrative, agent, and user workflows.",
        tag: "UI / UX",
      },
      {
        title: "Role-Aware Management",
        description: "Centralized oversight tools providing macro platform visibility for master operators.",
        tag: "Management",
      },
      {
        title: "Real-Time Platform Data",
        description: "Responsive state updates reflecting dynamic platform activities across tiers.",
        tag: "Data Sync",
      },
      {
        title: "Responsive Web Experience",
        description: "Fast, mobile-ready web interfaces optimized for smooth interactions across devices.",
        tag: "Responsive",
      },
      {
        title: "Centralized Backend",
        description: "Unified API service built on Elysia.js and Bun handling platform requests efficiently.",
        tag: "Backend",
      },
    ],

    engineeringArchitecture: {
      heading: "Tiered Client Architecture with High-Speed Bun & Elysia API Routing",
      description:
        "The system separates user presentation into role-based Next.js applications communicating with an Elysia.js backend running on the Bun runtime.",
      layers: [
        {
          layerName: "Role-Based Client Layer",
          components: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          details:
            "Renders dedicated Master, Agent, and Customer web applications with tailored navigation and views.",
        },
        {
          layerName: "Application API Layer",
          components: ["Elysia.js", "Bun Runtime"],
          details:
            "Handles high-throughput request routing, role-based authorization, and session verification.",
        },
        {
          layerName: "Data & Platform Layer",
          components: ["Relational Database", "Platform Services"],
          details:
            "Maintains structured account hierarchies, activity records, and centralized platform states.",
        },
      ],
    },

    technicalChallenges: [
      {
        challenge: "Role Separation & Data Isolation",
        solution:
          "Enforced strict architectural separation ensuring each user tier only accesses role-appropriate platform views and data.",
      },
      {
        challenge: "Consistent Data Across Multiple User Levels",
        solution:
          "Structured efficient API synchronization to reflect platform updates consistently across master, agent, and customer tiers.",
      },
      {
        challenge: "Scalable Backend Request Handling",
        solution:
          "Leveraged Bun runtime and Elysia.js for low-overhead HTTP execution and responsive concurrency management.",
      },
    ],

    techStack: [
      {
        category: "Frontend Web Platform",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & Runtime",
        items: ["Elysia.js", "Bun Runtime", "REST APIs"],
      },
      {
        category: "Architecture & Security",
        items: ["Role-Based Access", "Reverse Proxy Layer", "Session Management"],
      },
      {
        category: "Data & Storage",
        items: ["PostgreSQL", "Relational Schema"],
      },
    ],

    deliverables: [
      {
        title: "Multi-Level Web Platform",
        description: "Unified web architecture supporting Master, Agent, and Customer interfaces.",
      },
      {
        title: "Role-Based Dashboards",
        description: "Specialized control panels designed for operational management and distribution.",
      },
      {
        title: "Backend / API Platform",
        description: "High-throughput API layer powered by Bun and Elysia.js for fast execution.",
      },
      {
        title: "Responsive Product Experience",
        description: "Mobile-friendly web layouts maintaining visual clarity and speed across devices.",
      },
    ],

    relatedServices: [
      {
        name: "Web & SaaS Development",
        slug: "web-saas-development",
        description: "Build scalable web applications and high-performance SaaS platforms with Next.js.",
      },
      {
        name: "Custom Software Development",
        slug: "custom-software-development",
        description: "Engineer custom multi-role platforms, backend architectures, and API services.",
      },
      {
        name: "MVP Development",
        slug: "mvp-development",
        description: "Launch production-ready products with clean scalable architectures in 4 to 8 weeks.",
      },
    ],

    relatedSlugs: ["vriya-pms", "stock-harvesting", "hn-enterprises"],
  },

  {
    slug: "delyka-store",
    title: "Delyka Store",
    subtitle: "A responsive digital gaming storefront designed for fast product discovery, top-up purchases and streamlined checkout.",
    client: "Delyka Store",
    industry: "Gaming / Digital Commerce",
    category: "Digital Storefront & Top-Up Commerce",
    platforms: ["Web Storefront", "Mobile-Optimized Commerce"],
    themeColor: "#9333ea",
    heroImage: "/projects/delykastore.png",
    seoTitle: "Delyka Store Case Study — Digital Gaming Commerce Platform | Frontail Technologies",
    seoDescription: "Explore how Frontail engineered Delyka Store, a responsive digital gaming storefront and top-up platform built with Next.js, MongoDB, and secure payment workflows.",
    keywords: [
      "Delyka Store case study",
      "digital gaming commerce",
      "game top-up platform",
      "Next.js eCommerce storefront",
      "digital product checkout",
      "gaming voucher store",
    ],

    overview:
      "Delyka Store is a digital commerce platform designed for gamers to discover, select, and purchase online gaming top-ups and digital credits. Frontail built a high-speed web storefront emphasizing quick SKU selection, friction-free checkout, and reliable payment gateway integration.",

    theChallenge: {
      heading: "Creating a Fast, Frictionless Purchase Journey for Digital Gaming Credits",
      description:
        "Digital top-up purchases require a fast, clear journey from selecting a product to completing a transaction. The product needed to organize digital products cleanly while supporting secure account and payment workflows.",
      bulletPoints: [
        "Designing an intuitive product catalog that makes browsing titles and selecting denominations instantaneous.",
        "Streamlining digital purchase flows to minimize checkout drop-offs across mobile and desktop devices.",
        "Integrating secure payment workflows with automated order confirmation and status tracking.",
      ],
    },

    whatWeBuilt: {
      heading: "A High-Performance Digital Storefront with Instant SKU Selection and Secure Checkout",
      description:
        "Frontail developed a modern, mobile-first digital storefront featuring a catalog of gaming products, quick-select top-up denominations, custom user accounts, and integrated payment processing.",
      keyHighlights: [
        {
          title: "Digital Product Catalog",
          description:
            "Organized game titles and digital services with clean card grids and responsive category browsing.",
        },
        {
          title: "Streamlined Top-Up Flows",
          description:
            "Constructed fast product configuration views allowing customers to choose denominations and input account details seamlessly.",
        },
        {
          title: "Secure Payment & Order Tracking",
          description:
            "Integrated payment gateway workflows paired with instant transaction status and customer order history.",
        },
      ],
    },

    keyFeatures: [
      {
        title: "Digital Product Catalog",
        description: "Structured catalog showcasing popular gaming titles and digital top-up services.",
        tag: "Catalog",
      },
      {
        title: "Fast Product Selection",
        description: "Instant denomination selection with dynamic pricing and clear package breakdowns.",
        tag: "SKU Selection",
      },
      {
        title: "Secure User Accounts",
        description: "Custom authentication allowing users to manage saved details and review past orders.",
        tag: "Accounts",
      },
      {
        title: "Payment Integration",
        description: "Reliable gateway connections facilitating secure online transaction processing.",
        tag: "Payments",
      },
      {
        title: "Responsive Checkout",
        description: "Mobile-optimized checkout steps designed for rapid completion on any screen.",
        tag: "Checkout",
      },
      {
        title: "Order Tracking",
        description: "Real-time order confirmation and transaction receipts accessible directly in-app.",
        tag: "Orders",
      },
    ],

    engineeringArchitecture: {
      heading: "Modern Commerce Architecture with Next.js, MongoDB & Payment Pipelines",
      description:
        "The application pairs a server-rendered Next.js frontend with MongoDB document storage and secure payment gateway webhooks.",
      layers: [
        {
          layerName: "Storefront UI Layer",
          components: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          details:
            "Delivers responsive product discovery, denomination selection cards, and mobile-first checkout screens.",
        },
        {
          layerName: "Application & Auth Layer",
          components: ["Custom Auth", "Node.js REST Services"],
          details:
            "Manages customer sessions, shopping cart state, and order creation endpoints.",
        },
        {
          layerName: "Commerce Data & Payments",
          components: ["MongoDB Database", "Payment Gateway Integrations"],
          details:
            "Stores catalog metadata, customer profiles, and transaction records with payment confirmation webhooks.",
        },
      ],
    },

    technicalChallenges: [
      {
        challenge: "Fast Product Discovery on Mobile",
        solution:
          "Engineered lightweight, responsive catalog components ensuring instant page transitions and low payload sizes.",
      },
      {
        challenge: "Frictionless Checkout Journey",
        solution:
          "Reduced purchase steps to a focused, single-screen configuration and payment trigger.",
      },
      {
        challenge: "Payment Status Synchronization",
        solution:
          "Implemented reliable webhook listeners and real-time order status updates for instantaneous customer feedback.",
      },
    ],

    techStack: [
      {
        category: "Frontend Storefront",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Database & Storage",
        items: ["MongoDB", "Mongoose ODM"],
      },
      {
        category: "Auth & Security",
        items: ["Custom Authentication", "Session Management", "Secure Storage"],
      },
      {
        category: "Payments & Integrations",
        items: ["Payment Gateway APIs", "Webhook Pipelines"],
      },
    ],

    deliverables: [
      {
        title: "Responsive Gaming Storefront",
        description: "Mobile-first digital commerce interface for game top-ups and vouchers.",
      },
      {
        title: "Digital Purchase Flow",
        description: "Streamlined denomination selection and fast checkout experience.",
      },
      {
        title: "Account & Auth Experience",
        description: "Secure customer authentication and order history dashboard.",
      },
      {
        title: "Integrated Payment Workflow",
        description: "Automated payment verification and instant transaction receipt delivery.",
      },
    ],

    relatedServices: [
      {
        name: "Web & SaaS Development",
        slug: "web-saas-development",
        description: "Build custom digital commerce platforms, SaaS stores, and transactional web apps.",
      },
      {
        name: "Custom Software Development",
        slug: "custom-software-development",
        description: "Engineer custom payment workflows, catalog management systems, and APIs.",
      },
      {
        name: "MVP Development",
        slug: "mvp-development",
        description: "Launch functional commerce MVPs and digital product storefronts in weeks.",
      },
    ],

    relatedSlugs: ["udharipay", "vriya-pms", "inbox-pull"],
  },

  {
    slug: "vriya-pms",
    title: "Vriya PMS",
    subtitle: "A multi-tenant business platform bringing property operations, HR management and accounting into one connected SaaS product.",
    client: "Vriya PMS",
    industry: "PropTech / HR / Finance Operations",
    category: "Multi-Tenant Business SaaS",
    platforms: ["Multi-Tenant Web SaaS", "Responsive Dashboard"],
    themeColor: "#1d4ed8",
    heroImage: "/projects/vriya-pms.svg",
    seoTitle: "Vriya PMS Case Study — Multi-Tenant Business SaaS | Frontail Technologies",
    seoDescription: "Discover how Frontail architected Vriya PMS, a multi-tenant 3-in-1 SaaS platform uniting property management, HRM, and accounting with Next.js, Elysia.js, and Bun.",
    keywords: [
      "Vriya PMS case study",
      "multi-tenant SaaS platform",
      "property management software",
      "HRM SaaS development",
      "accounting software platform",
      "Bun Elysia Next.js SaaS",
    ],

    overview:
      "Vriya PMS is a multi-tenant 3-in-1 business management platform uniting Property Operations, Human Resources (HRM), and Accounting inside one unified SaaS architecture. Frontail engineered a tenant-isolated workspace system powered by Next.js and a high-performance Elysia.js/Bun backend.",

    theChallenge: {
      heading: "Unifying Multi-Domain Operations Within a Secure Multi-Tenant Architecture",
      description:
        "The product needed to unify multiple operational domains inside one platform while keeping organizations, users, financial activity, and property workflows logically separated.",
      bulletPoints: [
        "Eliminating fragmented tools by connecting apartment management, staff administration, and financial ledgers.",
        "Enforcing strict data isolation between multiple client organizations using a shared application codebase.",
        "Managing complex recurring billing lifecycles with dynamic statuses (Pending, Partial, Paid, Overdue).",
      ],
    },

    whatWeBuilt: {
      heading: "A Connected 3-in-1 SaaS Suite for Property, Workforce, and Accounting Oversight",
      description:
        "Frontail architected a unified multi-tenant SaaS application that gives property managers, accountants, and HR leads dedicated workspace modules backed by centralized data models.",
      keyHighlights: [
        {
          title: "Property & Room Management",
          description:
            "Complete operational control over rooms, tenant reservations, monthly billing cycles, and utility fee tracking.",
        },
        {
          title: "HR & Workforce Administration",
          description:
            "Staff directories, attendance logging, role permissions, and employee operational records.",
        },
        {
          title: "Integrated Accounting & Invoicing",
          description:
            "Automated billing cycles, payment tracking, due monitoring, and invoice status transitions.",
        },
      ],
    },

    keyFeatures: [
      {
        title: "Multi-Tenant Workspace Model",
        description: "Isolated organizational environments ensuring complete operational and financial privacy.",
        tag: "Multi-Tenant",
      },
      {
        title: "Property & Room Management",
        description: "Visual room inventory, reservation timelines, and occupancy tracking across units.",
        tag: "Property",
      },
      {
        title: "Recurring Billing Cycles",
        description: "Automated monthly rent generation and customizable billing intervals.",
        tag: "Billing",
      },
      {
        title: "Utility & Payment Tracking",
        description: "Multi-category utility tracking, partial payment receipts, and balance logging.",
        tag: "Finance",
      },
      {
        title: "HR Management",
        description: "Centralized employee profiles, attendance logs, and staff role assignments.",
        tag: "HRM",
      },
      {
        title: "Integrated Accounting",
        description: "Real-time receivables tracking with clear Pending, Partial, Paid, and Overdue states.",
        tag: "Accounting",
      },
    ],

    engineeringArchitecture: {
      heading: "Multi-Tenant SaaS Architecture with Logical Workspace Isolation",
      description:
        "Multiple organizations access a unified application layer where request context enforces strict workspace-level data separation across relational models.",
      layers: [
        {
          layerName: "Organization Workspaces",
          components: ["Tenant A", "Tenant B", "Tenant C"],
          details:
            "Independent organizational environments with custom branding, user roles, and operational configurations.",
        },
        {
          layerName: "Shared Application Platform",
          components: ["Next.js Frontend", "Elysia.js Backend", "Bun Runtime"],
          details:
            "High-throughput unified application stack managing routing, module rendering, and API requests.",
        },
        {
          layerName: "Tenant-Aware Data Layer",
          components: ["PostgreSQL", "Relational Schema", "Tenant Isolation"],
          details:
            "Structured relational storage isolating tenant properties, HR records, and financial ledgers.",
        },
      ],
    },

    technicalChallenges: [
      {
        challenge: "Multi-Tenant Product Structure",
        solution:
          "Designed a tenant-aware request pipeline ensuring seamless multi-organization usage with total data isolation.",
      },
      {
        challenge: "Cross-Module Data Consistency",
        solution:
          "Structured relational schemas linking property leases directly to accounting invoices and staff assignments.",
      },
      {
        challenge: "Billing State Management",
        solution:
          "Engineered resilient payment status transitions supporting partial payments, pending dues, and overdue flags.",
      },
    ],

    techStack: [
      {
        category: "Frontend Web SaaS",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & Runtime",
        items: ["Elysia.js", "Bun Runtime", "REST APIs"],
      },
      {
        category: "Database & Tenancy",
        items: ["PostgreSQL", "Relational Schema", "Tenant Isolation"],
      },
      {
        category: "UI & Modules",
        items: ["Lucide React", "Data Tables", "Billing Matrices"],
      },
    ],

    deliverables: [
      {
        title: "Multi-Tenant SaaS Platform",
        description: "Scalable 3-in-1 web application with logical organization workspace isolation.",
      },
      {
        title: "Property Management Module",
        description: "Unit inventory, reservation workflows, and occupancy monitoring dashboard.",
      },
      {
        title: "HRM Module",
        description: "Staff directory, attendance tracking, and internal role permission management.",
      },
      {
        title: "Accounting & Billing Module",
        description: "Recurring invoice engine, payment recording, and balance due tracking.",
      },
    ],

    relatedServices: [
      {
        name: "Web & SaaS Development",
        slug: "web-saas-development",
        description: "Build scalable multi-tenant SaaS products and enterprise dashboards with Next.js.",
      },
      {
        name: "Custom Software Development",
        slug: "custom-software-development",
        description: "Engineer custom internal tools, financial workflows, and multi-module systems.",
      },
      {
        name: "MVP Development",
        slug: "mvp-development",
        description: "Launch production-ready SaaS MVPs with clean architecture in 4 to 8 weeks.",
      },
    ],

    relatedSlugs: ["hn-enterprises", "udharipay", "stock-harvesting"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudiesData.map((cs) => cs.slug);
}
