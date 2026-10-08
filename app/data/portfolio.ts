export const portfolioData = {
  person: {
    name: "Sushant Kapil",
    title: "Full-Stack Developer & AI Enthusiast",
    description:
      "Sushant Kapil is a Full-Stack Developer & AI Enthusiast focused on building practical software products across frontend development, backend APIs, databases, and AI-powered applications.",
  },

links: {
  email: "sk0261901@gmail.com",
  github: "https://github.com/sk2678",
  linkedin:
    "https://linkedin.com/in/sushant-kapil-195b5428b",
},

  skills: {
    languages: [
      "JavaScript",
      "Python",
      "C++",
    ],

    frontend: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
    ],

    backend: [
      "FastAPI",
      "Node.js",
      "REST APIs",
    ],

    databases: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],

    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],

    other: [
      "REST API Design",
      "Full-Stack Architecture",
      "Debugging",
      "Responsive UI",
      "API Integration",
      "AI / LLM Integration",
    ],
  },

  projects: [
    {
      title: "Heallio AI Health Dashboard",
      category: "AI / FULL-STACK",

      description:
        "A full-stack health dashboard built with a React frontend, FastAPI backend, REST APIs, and MongoDB.",

      overview:
        "Heallio is a full-stack health dashboard project that brings together a React frontend, FastAPI backend, REST APIs, and MongoDB.",

      problem:
        "The project focuses on creating a centralized digital interface for managing and working with health-related information.",

      solution:
        "Heallio combines a modern React frontend with a FastAPI backend, REST APIs, and MongoDB to create a connected full-stack application.",

      features: [
        "React-based frontend",
        "FastAPI backend",
        "REST API integration",
        "MongoDB database",
        "Health dashboard interface",
      ],

      technologies: [
        "React.js",
        "FastAPI",
        "REST APIs",
        "MongoDB",
      ],

      github:
        "https://github.com/sk2678/Heallio-AI-Health-Dashboard",

      live:
        "https://sushant-heallio-3.onrender.com/docs",

      featured: true,
    },

    {
      title: "PixCrypt Image Security",
      category: "FULL-STACK / SECURITY",

      description:
        "An image security project focused on protecting and processing images through a web-based application.",

      overview:
        "PixCrypt Image Security is a full-stack project built around image security and processing.",

      problem:
        "The project focuses on providing a web-based approach for handling image security rather than relying on a simple local workflow.",

      solution:
        "PixCrypt provides a web application through which image-security functionality can be accessed.",

      features: [
        "Image security workflow",
        "Web-based interface",
        "Backend API integration",
        "Live deployment",
      ],

      technologies: [
        "React.js",
        "Python",
        "FastAPI",
        "REST APIs",
      ],

      github:
        "https://github.com/sk2678/PixCrypt-Image-Security",

      live:
        "https://sushant-pixcrypt.onrender.com",

      featured: false,
    },

    {
      title: "DevForge-AI",
      category: "AI / FULL-STACK",

      description:
        "An AI-focused full-stack project exploring automated software development workflows and project generation.",

      overview:
        "DevForge-AI is an ambitious full-stack AI project currently under development.",

      problem:
        "The project explores how AI can assist with software development workflows and reduce repetitive project-building tasks.",

      solution:
        "DevForge-AI explores an automated workflow where AI can assist with generating and organizing software project components.",

      features: [
        "AI-assisted project generation",
        "Full-stack architecture",
        "Automated development workflow",
        "Project documentation generation",
      ],

      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "AI",
      ],

      github: "#",
      live: "#",

      featured: false,
    },

    {
      title: "Voice AI Insurance Claim Agent",
      category: "AI / MULTI-AGENT",

      description:
        "A voice-enabled multi-agent system designed to assist with insurance claim initiation by converting incident descriptions into structured claim information.",

      overview:
        "The project explores a Voice AI-based multi-agent approach for initiating insurance claims using voice or text input.",

      problem:
        "Traditional insurance claim initiation can involve repetitive form filling and manually entering similar information across different policies.",

      solution:
        "The system takes a user's incident description, extracts relevant claim information, maps it to the appropriate form, and identifies missing or uncertain information that may require clarification.",

      features: [
        "Voice or text incident input",
        "Structured claim information extraction",
        "Multi-agent workflow",
        "Policy/form mapping",
        "Missing-field identification",
        "Clarification of uncertain information",
      ],

      technologies: [
        "AI Agents",
        "Gemini",
        "Python",
        "APIs",
      ],

      github: "#",
      live: "#",

      featured: false,
    },
  ],

  experience: [
    {
      company: "Digiflute",
      role: "Frontend Developer Intern",
      type: "Internship · Frontend",
      focus: "React & UI Development",

      work: [
        "Reusable React components",
        "Frontend state management",
        "API integration",
        "Application workflows",
        "User interface development",
      ],

      technologies: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "REST APIs",
      ],
    },
  ],

  education: {
    institution:
      "Jaypee Institute of Information Technology",

    degree: "B.Tech",

    branch:
      "Electronics & Communication Engineering",

    status: "Final Year",
  },

  career: {
    interestedIn: [
      "Full-Stack Development",
      "Backend / Python Development",
      "AI-powered applications",
      "Software Engineering",
      "Freelance projects",
    ],
  },
} as const;