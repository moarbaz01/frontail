import {
  Bitcoin,
  Book,
  Code,
  Globe,
  Palette,
  Rocket,
  Smartphone,
} from "lucide-react";

export const projectsData = [
  {
    title: "Kiragame Store",
    description:
      "A gaming top-up Web Application, where you can purchase diamonds and coins of your favourite online games in discount",
    image: "/kirastore.png",
    techs: ["Next JS", "Motion", "MongoDB", "Auth"],
    link: "https://kiragamestore.com", // Replace with the actual project link
  },
  {
    title: "WinWin Topup",
    description:
      "A gaming top-up Web Application, where you can purchase diamonds and coins of your favourite online games in discount",
    image: "/winwintopup.png",
    techs: ["Next JS", "Motion", "MongoDB", "Auth"],
    link: "https://winwintopup.com", // Replace with the actual project link
  },
  // {
  //   title: "Getotopup",
  //   description:
  //     "A gaming top-up Web Application, where you can purchase diamonds and coins of your favourite online games in discount",
  //   image: "/getotopup.png",
  //   techs: ["Next JS", "Motion", "MongoDB", "Auth"],
  //   link: "https://getotopup.com", // Replace with the actual project link
  // },
  {
    title: "Oh Shakes : Cafe",
    description:
      "Oh shakes is a cafe website where customers can explore the features of Oh Shakes",
    image: "/oh-shakes.png",
    techs: ["Next JS", "Motion"],
    link: "https://oh-shakes.vercel.app",
  },
  {
    title: "Digir Innovations",
    description:
      "Digir Innovations is a digital marketing agency that provides business solutions",
    image: "/digir.png",
    techs: ["Next JS", "Motion"],
    link: "https://digiraj.vercel.app/", // Replace with the actual project link
  },
  {
    title: "Zoland Store",
    description:
      "A gaming top-up Web Application, where you can purchase diamonds and coins of your favourite online games in discount",
    image: "/zoland_store_project.png",
    techs: ["Next JS", "Motion", "MongoDB", "Auth"],
    link: "https://zoland.in", // Replace with the actual project link
  },
  {
    title: "Inspired Events And Tours",
    description: "A travel agency web application ",
    image: "/inspired_events_and_tours_project.png",
    techs: ["Next JS"],
    link: "https://inspired-events-and-tours.vercel.app", // Replace with the actual project link
  },
  // {
  //   title: "Fitness Club",
  //   description: "A social networking website for an collage student.",
  //   image: "/fitness_club_project.png",
  //   techs: ["HTML", "CSS", "JS", "MongoDB", "Node JS"],
  //   link: "", // Replace with the actual project link
  // },
  // {
  //   title: "Stylevow - Ecommerce Platform",
  //   description: "A robust featured ecommerce platform",
  //   image: "/stylevow_project.png",
  //   techs: ["React JS", "Node JS", "MongoDB", "Express"],
  //   link: "https://stylevow-client.vercel.app/",
  // },
  // {
  //   title: "Likeflames",
  //   description: "A social media platform with chat and video call features",
  //   image: "/likeflames_project.png",
  //   techs: [
  //     "React JS",
  //     "Node JS",
  //     "MongoDB",
  //     "Express",
  //     "WebRTC",
  //     "WebSockets",
  //   ],
  //   link: "https://likeflames.vercel.app/",
  // },
];

export const services = [
  {
    id: 1,
    title: "MVP Development",
    description:
      "Build a fast, production-ready MVP to validate your startup idea with real users.",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Web & SaaS Development",
    description:
      "Scalable web and SaaS applications with authentication, dashboards, and APIs.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps for Android & iOS designed for startups and MVP launches.",
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "UI/UX for Startups",
    description:
      "Startup-focused UI/UX that improves usability, engagement, and conversions.",
    icon: <Palette className="w-8 h-8" />,
  },
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
    technologies: [
      "Figma",
      "Framer",
      "Webflow",
      "Adobe XD",
    ],
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
];

