import {
  Bitcoin,
  Book,
  Code,
  Globe,
  Palette,
  ShoppingCart,
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
    title: "Web Development",
    description:
      "Custom websites built with modern technologies for optimal performance.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly designs that convert visitors into customers.",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    description:
      "Complete online stores with secure payment processing and inventory management.",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs and requirements.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "SaaS Development",
    description:
      "Development of Software as a Service applications for scalable business solutions.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    id: 6,
    title: "Mobile App Development",
    description:
      "Creating mobile applications for iOS and Android platforms to enhance user engagement.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 7,
    title: "E-learning Applications",
    description:
      "Developing interactive e-learning platforms to facilitate online education and training.",
    icon: <Book className="w-8 h-8" />,
  },
  {
    id: 8,
    title: "Web3 Applications",
    description:
      "Building decentralized applications (dApps) leveraging blockchain technology for enhanced security and transparency.",
    icon: <Bitcoin className="w-8 h-8" />,
  },
  {
    id: 9,
    title: "AI Solutions",
    description:
      "Intelligent automation and machine learning solutions to transform your business operations and decision-making.",
    icon: <Code className="w-8 h-8" />,
  },
];

export const detailedServices = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    image: "/images/services/web-development.jpg",
    overview:
      "We build fast, secure, and scalable websites that empower your online presence. From corporate websites to dynamic web apps, our development team ensures every line of code drives performance and results.",
    whatWeOffer: [
      "Custom website development (React, Next.js, MERN Stack)",
      "API integration and backend development",
      "CMS-based websites (Headless CMS or WordPress alternatives)",
      "SEO optimization and speed enhancement",
      "Maintenance and support",
    ],
    process: [
      "Research & Strategy – Understanding your business goals",
      "Design & Prototyping – Crafting UI/UX wireframes",
      "Development – Writing clean, scalable code",
      "Testing & Deployment – Ensuring security and performance",
      "Support – Ongoing maintenance for smooth operation",
    ],
    whyChooseUs: [
      "Modern stack and best coding practices",
      "Optimized for speed, SEO, and conversions",
      "Tailored to your brand and goals",
    ],
    technologies: [
      "React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS", "Express.js"
    ],
    metaTitle: "Web Development Services | Frontail Technology",
    metaDescription:
      "Build fast, secure, and scalable websites with Frontail Technology. Our expert developers deliver high-performance, SEO-optimized web solutions for businesses of all sizes.",
    keywords: [
      "web development",
      "MERN stack websites",
      "Next.js development",
      "custom web app",
      "frontend backend development",
    ],
    cta: {
      title: "Ready to build your dream website?",
      subtitle:
        "Let’s create a fast, secure, and modern web experience for your business.",
      buttonText: "Get a Free Quote",
    },
  },
  {
    id: 2,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    image: "/images/services/ui-ux-design.jpg",
    overview:
      "We create interfaces that not only look stunning but also feel natural and intuitive. Our design philosophy blends creativity with usability to deliver experiences that delight users and boost engagement.",
    whatWeOffer: [
      "User interface & experience design",
      "Interactive wireframes & prototypes",
      "Brand identity and design systems",
      "Mobile-first and responsive design",
      "Usability testing and refinement",
    ],
    process: [
      "Research & Discovery – Understanding your audience",
      "Wireframing – Structuring the flow and hierarchy",
      "Design – Crafting modern, beautiful interfaces",
      "Testing – Validating with real users",
      "Handoff – Delivering ready-to-code assets",
    ],
    whyChooseUs: [
      "Human-centered design approach",
      "Aesthetically appealing and functional UI",
      "Strong focus on conversion-driven layouts",
    ],
    technologies: [
      "Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Framer", "Webflow", "Photoshop"
    ],
    metaTitle: "UI/UX Design Services | Frontail Technology",
    metaDescription:
      "Frontail Technology offers professional UI/UX design services that create visually appealing, user-friendly interfaces built to enhance engagement and boost conversions.",
    keywords: [
      "ui design",
      "ux design",
      "interface design",
      "user experience",
      "website redesign",
      "product design",
    ],
    cta: {
      title: "Want designs that convert?",
      subtitle:
        "Let’s craft user-centered designs that engage and delight your customers.",
      buttonText: "Start Your Project",
    },
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    image: "/images/services/ecommerce.jpg",
    overview:
      "Transform your business into a thriving online store. We build e-commerce platforms that provide seamless shopping experiences, secure transactions, and complete control over products and customers.",
    whatWeOffer: [
      "Custom e-commerce website development",
      "Payment gateway integration (Stripe, PayPal, Razorpay, etc.)",
      "Product, inventory & order management",
      "Admin dashboards and analytics",
      "SEO & conversion rate optimization",
    ],
    process: [
      "Store Planning – Defining your business goals",
      "Design & Branding – Creating visually appealing layouts",
      "Development – Building responsive and secure stores",
      "Integration – Connecting payments and shipping APIs",
      "Launch & Optimization – Ensuring conversions and growth",
    ],
    whyChooseUs: [
      "Custom-built e-commerce tailored to your brand",
      "High performance and scalability",
      "Secure payments and smooth user experience",
    ],
    technologies: [
      "Next.js", "Stripe", "PayPal", "Razorpay", "MongoDB", "Redis", "AWS", "Shopify API"
    ],
    metaTitle: "E-Commerce Development Solutions | Frontail Technology",
    metaDescription:
      "Launch your online store with Frontail Technology. We provide complete e-commerce solutions including payment gateways, inventory systems, and performance optimization.",
    keywords: [
      "ecommerce development",
      "online store design",
      "shopify alternatives",
      "stripe integration",
      "product management system",
    ],
    cta: {
      title: "Launch your online store today!",
      subtitle:
        "Empower your business with a secure, high-converting e-commerce platform.",
      buttonText: "Request a Demo",
    },
  },
  {
    id: 4,
    title: "Software Development",
    slug: "software-development",
    image: "/images/services/software-development.jpg",
    overview:
      "We develop custom software solutions that automate workflows, improve efficiency, and help your business scale. From web applications to enterprise-grade systems, we turn complex challenges into seamless software.",
    whatWeOffer: [
      "Custom enterprise software solutions",
      "System architecture and backend development",
      "Third-party API integration",
      "Automation tools and data management systems",
      "Maintenance and upgrades",
    ],
    process: [
      "Requirement Analysis – Understanding business challenges",
      "Planning – Defining architecture and tech stack",
      "Development – Building reliable and scalable solutions",
      "Testing – Ensuring performance and stability",
      "Deployment – Seamless launch and integration",
    ],
    whyChooseUs: [
      "Tailored software for specific business needs",
      "Experienced developers in modern tech stacks",
      "Scalable and secure codebase",
    ],
    technologies: [
      "Python", "Java", "Node.js", "React", "PostgreSQL", "Docker", "AWS", "Microservices"
    ],
    metaTitle: "Custom Software Development Services | Frontail Technology",
    metaDescription:
      "Frontail Technology offers scalable, secure, and fully customized software development services designed to streamline operations and improve business performance.",
    keywords: [
      "software development",
      "custom software",
      "enterprise application",
      "api integration",
      "automation tools",
    ],
    cta: {
      title: "Automate your business with custom software",
      subtitle:
        "Boost productivity with tailored software built for your unique needs.",
      buttonText: "Let’s Build It",
    },
  },
  {
    id: 5,
    title: "SaaS Development",
    slug: "saas-development",
    image: "/images/services/saas-development.jpg",
    overview:
      "We design and develop powerful SaaS (Software as a Service) products that help businesses deliver value to customers through subscription-based platforms.",
    whatWeOffer: [
      "SaaS architecture and multi-tenancy setup",
      "Custom dashboard and analytics systems",
      "Secure authentication and billing integration",
      "Cloud deployment and scalability solutions",
      "Continuous updates and monitoring",
    ],
    process: [
      "Discovery – Understanding your SaaS product vision",
      "Design – Building intuitive user flows",
      "Development – Implementing scalable architecture",
      "Testing – Security, performance, and usability checks",
      "Launch – Deploying and optimizing in the cloud",
    ],
    whyChooseUs: [
      "Experience in cloud-native SaaS solutions",
      "Focus on scalability and performance",
      "Comprehensive end-to-end development support",
    ],
    technologies: [
      "React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Stripe"
    ],
    metaTitle: "SaaS Development Services | Frontail Technology",
    metaDescription:
      "Frontail Technology specializes in building scalable and secure SaaS applications that empower businesses to deliver high-quality subscription-based solutions.",
    keywords: [
      "saas development",
      "cloud application",
      "multi tenant app",
      "subscription platform",
      "software as a service",
    ],
    cta: {
      title: "Build your SaaS product with experts",
      subtitle:
        "From architecture to launch — we handle your SaaS development end-to-end.",
      buttonText: "Book a Consultation",
    },
  },
  {
    id: 6,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    image: "/images/services/mobile-app.jpg",
    overview:
      "We create high-performance mobile applications for iOS and Android platforms that engage users and strengthen brand presence. Our apps combine elegant design with powerful functionality.",
    whatWeOffer: [
      "Cross-platform mobile app development (React Native, Flutter)",
      "Native iOS and Android development",
      "App UI/UX design and prototyping",
      "Integration with APIs and third-party services",
      "Maintenance, updates, and support",
    ],
    process: [
      "Concept & Planning – Identifying core app features",
      "Design – Crafting smooth and intuitive interfaces",
      "Development – Building robust cross-platform apps",
      "Testing – Ensuring performance across all devices",
      "Launch – Publishing to App Store and Play Store",
    ],
    whyChooseUs: [
      "Expertise in both iOS and Android platforms",
      "Seamless performance and user experience",
      "End-to-end app lifecycle management",
    ],
    technologies: [
      "React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify", "Redux", "TypeScript"
    ],
    metaTitle: "Mobile App Development Services | Frontail Technology",
    metaDescription:
      "Frontail Technology develops cross-platform and native mobile applications for iOS and Android with exceptional performance, design, and scalability.",
    keywords: [
      "mobile app development",
      "react native app",
      "flutter app",
      "ios development",
      "android app",
    ],
    cta: {
      title: "Got an app idea?",
      subtitle:
        "Let’s turn your vision into a stunning, high-performing mobile application.",
      buttonText: "Get Started",
    },
  },
  {
    id: 7,
    title: "E-learning Applications",
    slug: "e-learning-applications",
    image: "/images/services/e-learning.jpg",
    overview:
      "We develop interactive e-learning platforms that facilitate online education and training. Our solutions combine engaging content delivery with powerful learning management features.",
    whatWeOffer: [
      "Learning Management System (LMS) development",
      "Interactive course creation and content management",
      "Student progress tracking and analytics",
      "Video streaming and multimedia integration",
      "Assessment and certification systems",
    ],
    process: [
      "Analysis – Understanding learning objectives and audience",
      "Design – Creating engaging user interfaces and learning flows",
      "Development – Building scalable e-learning platforms",
      "Content Integration – Implementing multimedia and interactive elements",
      "Launch – Deploying and optimizing for performance",
    ],
    whyChooseUs: [
      "Expertise in educational technology",
      "Interactive and engaging learning experiences",
      "Scalable solutions for institutions and businesses",
    ],
    technologies: [
      "React", "Node.js", "MongoDB", "WebRTC", "Socket.io", "AWS", "Video.js", "Moodle API"
    ],
    metaTitle: "E-learning Application Development | Frontail Technology",
    metaDescription:
      "Frontail Technology creates interactive e-learning platforms and LMS solutions that enhance online education and training experiences for students and professionals.",
    keywords: [
      "e-learning development",
      "LMS development",
      "online education platform",
      "learning management system",
      "educational technology",
    ],
    cta: {
      title: "Transform education with technology",
      subtitle: "Build engaging e-learning platforms that inspire and educate.",
      buttonText: "Start Learning Platform",
    },
  },
  {
    id: 8,
    title: "Web3 Applications",
    slug: "web3-applications",
    image: "/images/services/web3.jpg",
    overview:
      "We build decentralized applications (dApps) leveraging blockchain technology for enhanced security and transparency. Our Web3 solutions empower businesses to embrace the future of decentralized internet.",
    whatWeOffer: [
      "Smart contract development and deployment",
      "DeFi (Decentralized Finance) applications",
      "NFT marketplace and minting platforms",
      "Cryptocurrency wallet integration",
      "Blockchain consulting and strategy",
    ],
    process: [
      "Strategy – Understanding blockchain requirements and use cases",
      "Architecture – Designing decentralized system architecture",
      "Development – Building smart contracts and dApp interfaces",
      "Testing – Security audits and blockchain testing",
      "Deployment – Launching on blockchain networks",
    ],
    whyChooseUs: [
      "Deep expertise in blockchain technologies",
      "Security-first approach to smart contract development",
      "Experience with multiple blockchain platforms",
    ],
    technologies: [
      "Solidity", "Web3.js", "Ethereum", "Polygon", "React", "Node.js", "IPFS", "MetaMask"
    ],
    metaTitle: "Web3 & Blockchain Development Services | Frontail Technology",
    metaDescription:
      "Frontail Technology develops secure Web3 applications, smart contracts, and blockchain solutions that leverage decentralized technology for enhanced transparency and security.",
    keywords: [
      "web3 development",
      "blockchain development",
      "smart contracts",
      "dapp development",
      "defi applications",
      "nft marketplace",
    ],
    cta: {
      title: "Enter the Web3 revolution",
      subtitle:
        "Build decentralized applications that shape the future of internet.",
      buttonText: "Explore Web3",
    },
  },
  {
    id: 9,
    title: "AI Solutions",
    slug: "ai-solutions",
    image: "/images/services/ai-solutions.jpg",
    overview:
      "We develop intelligent AI solutions that automate processes, enhance decision-making, and unlock new possibilities for your business through machine learning and artificial intelligence.",
    whatWeOffer: [
      "Custom AI model development and training",
      "Machine learning algorithm implementation",
      "Natural language processing (NLP) solutions",
      "Computer vision and image recognition",
      "AI-powered automation and chatbots",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Hugging Face",
      "Scikit-learn",
      "FastAPI",
      "Docker",
    ],

    process: [
      "Discovery – Understanding your AI requirements and data",
      "Research – Analyzing feasibility and selecting algorithms",
      "Development – Building and training AI models",
      "Testing – Validating accuracy and performance",
      "Deployment – Integrating AI into your systems",
    ],
    whyChooseUs: [
      "Expertise in cutting-edge AI technologies",
      "Custom solutions tailored to your business needs",
      "Proven track record in AI implementation",
    ],

    metaTitle: "AI Solutions & Machine Learning Services | Frontail Technology",
    metaDescription:
      "Frontail Technology delivers custom AI solutions and machine learning services that automate processes, enhance decision-making, and drive business innovation.",
    keywords: [
      "ai solutions",
      "machine learning",
      "artificial intelligence",
      "nlp development",
      "computer vision",
      "ai automation",
    ],
    cta: {
      title: "Ready to harness the power of AI?",
      subtitle:
        "Transform your business with intelligent automation and data-driven insights.",
      buttonText: "Explore AI Solutions",
    },
  },
];
