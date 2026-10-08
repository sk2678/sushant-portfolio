import { NextResponse } from "next/server";
import { portfolioData } from "../../data/portfolio";

type Project = (typeof portfolioData.projects)[number];

type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

/* =========================================
   HELPERS
========================================= */

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s.+#&/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasAny(text: string, terms: string[]) {
  return terms.some((term) =>
    text.includes(normalize(term))
  );
}

/* =========================================
   PROJECT ALIASES
========================================= */

const projectAliases: Record<string, string[]> = {
  "Heallio AI Health Dashboard": [
    "heallio",
    "health dashboard",
    "heallio ai",
  ],

  "PixCrypt Image Security": [
    "pixcrypt",
    "image security",
  ],

  "DevForge-AI": [
    "devforge",
    "devforge ai",
  ],

  "Voice AI Insurance Claim Agent": [
    "insurance",
    "insurance claim",
    "voice ai insurance",
    "claim agent",
  ],
};

/* =========================================
   FIND PROJECT
========================================= */

function findProject(question: string): Project | null {
  const normalizedQuestion = normalize(question);

  for (const project of portfolioData.projects) {
    const aliases =
      projectAliases[project.title] || [];

    const matchesTitle =
      normalizedQuestion.includes(
        normalize(project.title)
      );

    const matchesAlias = aliases.some((alias) =>
      normalizedQuestion.includes(
        normalize(alias)
      )
    );

    if (matchesTitle || matchesAlias) {
      return project;
    }
  }

  return null;
}

/* =========================================
   PROJECT LIST
========================================= */

function formatProjectList(
  projects: Project[]
) {
  if (projects.length === 0) {
    return "";
  }

  if (projects.length === 1) {
    return projects[0].title;
  }

  if (projects.length === 2) {
    return `${projects[0].title} and ${projects[1].title}`;
  }

  const names = projects.map(
    (project) => project.title
  );

  return `${names
    .slice(0, -1)
    .join(", ")}, and ${
    names[names.length - 1]
  }`;
}

/* =========================================
   SKILLS
========================================= */

function getAllSkills() {
  return [
    ...portfolioData.skills.languages,
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.databases,
    ...portfolioData.skills.tools,
    ...portfolioData.skills.other,
  ];
}

function findSkill(question: string) {
  const skills = getAllSkills();

  return skills.find((skill) => {
    const normalizedSkill =
      normalize(skill);

    return (
      question.includes(normalizedSkill) ||
      (normalizedSkill === "react.js" &&
        question.includes("react")) ||
      (normalizedSkill === "next.js" &&
        question.includes("nextjs")) ||
      (normalizedSkill === "node.js" &&
        question.includes("node")) ||
      (normalizedSkill === "postgresql" &&
        question.includes("postgres"))
    );
  });
}

function answerSkillQuestion(question: string) {
  const skill = findSkill(question);

  if (!skill) {
    return null;
  }

  const normalizedSkill =
    normalize(skill);

  const projectMatches =
    portfolioData.projects.filter(
      (project) =>
        project.technologies.some(
          (technology) =>
            normalize(technology) ===
            normalizedSkill
        )
    );

  const skillCategories: Record<
    string,
    string
  > = {
    javascript: "programming language",
    python: "programming language",
    "c++": "programming language",

    "react.js": "frontend technology",
    "next.js": "frontend technology",
    html5: "frontend technology",
    css3: "frontend technology",

    fastapi: "backend technology",
    "node.js": "backend technology",
    "rest apis": "backend/API technology",

    mongodb: "database technology",
    mysql: "database technology",
    postgresql: "database technology",

    git: "development tool",
    github: "development tool",
    "vs code": "development tool",
    postman: "development tool",
  };

  const category =
    skillCategories[normalizedSkill];

  let answer = `Yes. Sushant's portfolio lists ${skill} as a ${
    category || "technical skill"
  }.`;

  if (projectMatches.length > 0) {
    answer += ` It is used in ${formatProjectList(
      projectMatches
    )}.`;
  }

  return answer;
}

/* =========================================
   PROJECT TECHNOLOGY
========================================= */

function answerProjectTechnologyQuestion(
  question: string
) {
  const technologyMap = [
    "React.js",
    "Next.js",
    "FastAPI",
    "Node.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "REST APIs",
    "Python",
    "TypeScript",
    "Prisma",
    "Gemini",
    "AI Agents",
  ];

  const technology =
    technologyMap.find((item) => {
      const normalized =
        normalize(item);

      return (
        question.includes(normalized) ||
        (normalized === "react.js" &&
          question.includes("react")) ||
        (normalized === "next.js" &&
          question.includes("nextjs")) ||
        (normalized === "node.js" &&
          question.includes("node")) ||
        (normalized === "postgresql" &&
          question.includes("postgres"))
      );
    });

  if (!technology) {
    return null;
  }

  const matches =
    portfolioData.projects.filter(
      (project) =>
        project.technologies.some(
          (tech) =>
            normalize(tech) ===
            normalize(technology)
        )
    );

  if (matches.length === 0) {
    return `The current portfolio data does not list ${technology} for a specific project.`;
  }

  return `The projects using ${technology} are ${formatProjectList(
    matches
  )}.`;
}

/* =========================================
   PROJECT QUESTIONS
========================================= */

function answerProjectQuestion(
  question: string
) {
  const project = findProject(question);

  if (!project) {
    return null;
  }

  const normalizedQuestion =
    normalize(question);

  /* Problem */

  if (
    hasAny(normalizedQuestion, [
      "problem",
      "what problem",
      "why was it built",
      "why build",
      "problem does it solve",
      "problem does this solve",
    ])
  ) {
    return `${project.title} addresses this problem: ${project.problem}`;
  }

  /* Solution */

  if (
    hasAny(normalizedQuestion, [
      "solution",
      "how does it solve",
      "how does this solve",
      "how was it solved",
      "approach",
    ])
  ) {
    return `${project.title} provides this solution: ${project.solution}`;
  }

  /* Features */

  if (
    hasAny(normalizedQuestion, [
      "features",
      "main features",
      "key features",
      "what can it do",
      "what does it do",
    ])
  ) {
    return `${project.title} includes: ${project.features.join(
      ", "
    )}.`;
  }

  /* Technologies */

  if (
    hasAny(normalizedQuestion, [
      "technology",
      "technologies",
      "tech stack",
      "stack",
      "built with",
      "what does it use",
    ])
  ) {
    return `${project.title} uses ${project.technologies.join(
      ", "
    )}.`;
  }

  /* Future scope */

  if (
    hasAny(normalizedQuestion, [
      "future",
      "future scope",
      "future plans",
      "next step",
      "next steps",
      "improvements",
      "what could be improved",
    ])
  ) {
    if (
      project.title ===
      "Voice AI Insurance Claim Agent"
    ) {
      return "For the Voice AI Insurance Claim Agent, a future direction is moving toward a more practical voice pipeline using Whisper for speech recognition and Groq for efficient AI inference. These are future plans rather than the technologies currently used in the demonstration.";
    }

    return `The current portfolio data does not define a specific future scope for ${project.title}.`;
  }

  /* Live */

  if (
    hasAny(normalizedQuestion, [
      "live",
      "demo",
      "deployed",
      "deployment",
    ])
  ) {
    if (project.live !== "#") {
      return `Yes. ${project.title} has a live/demo link available through the portfolio.`;
    }

    return `${project.title} does not currently have a public live/demo link listed in the portfolio.`;
  }

  /* GitHub */

  if (
    hasAny(normalizedQuestion, [
      "github",
      "source code",
      "repository",
      "repo",
    ])
  ) {
    if (project.github !== "#") {
      return `The source code for ${project.title} is available on Sushant's GitHub.`;
    }

    return `A public GitHub repository for ${project.title} is not currently listed in the portfolio.`;
  }

  /* General project answer */

  return `${project.title}: ${project.description} ${project.overview} Technologies include ${project.technologies.join(
    ", "
  )}.`;
}

/* =========================================
   AI PROJECTS
========================================= */

function answerAIProjects() {
  const aiProjects =
    portfolioData.projects.filter(
      (project) =>
        project.category
          .toLowerCase()
          .includes("ai") ||
        project.technologies.some(
          (technology) =>
            ["AI", "AI Agents", "Gemini"].includes(
              technology
            )
        )
    );

  if (aiProjects.length === 0) {
    return "The current portfolio data does not list any AI-focused projects.";
  }

  return `Sushant's AI-focused projects include ${formatProjectList(
    aiProjects
  )}.`;
}

/* =========================================
   CATEGORY QUESTIONS
========================================= */

function answerProjectCategoryQuestion(
  question: string
) {
  if (
    hasAny(question, [
      "ai projects",
      "ai project",
      "projects using ai",
    ])
  ) {
    return answerAIProjects();
  }

  if (
    hasAny(question, [
      "full stack projects",
      "full-stack projects",
      "fullstack projects",
    ])
  ) {
    const projects =
      portfolioData.projects.filter(
        (project) =>
          project.category
            .toLowerCase()
            .includes("full-stack")
      );

    return `The full-stack projects listed in the portfolio are ${formatProjectList(
      projects
    )}.`;
  }

  return null;
}

/* =========================================
   EXPERIENCE
========================================= */

function answerExperienceQuestion(
  question: string
) {
  if (
    !hasAny(question, [
      "experience",
      "internship",
      "intern",
      "worked",
      "work experience",
      "company",
      "companies",
      "digiflute",
    ])
  ) {
    return null;
  }

  const experience =
    portfolioData.experience[0];

  return `Sushant has internship experience at ${experience.company}, where he worked as a ${experience.role}. His focus was ${experience.focus}, including ${experience.work.join(
    ", "
  )}.`;
}

/* =========================================
   EDUCATION
========================================= */

function answerEducationQuestion(
  question: string
) {
  if (
    !hasAny(question, [
      "education",
      "college",
      "university",
      "degree",
      "jiit",
      "btech",
      "b.tech",
      "branch",
    ])
  ) {
    return null;
  }

  const education =
    portfolioData.education;

  return `Sushant is pursuing a ${education.degree} at ${education.institution}. His branch is ${education.branch}, and his current status is ${education.status}.`;
}

/* =========================================
   CAREER
========================================= */

function answerCareerQuestion(
  question: string
) {
  if (
    !hasAny(question, [
      "career",
      "career goal",
      "looking for",
      "looking to",
      "job",
      "jobs",
      "role",
      "roles",
      "opportunity",
      "opportunities",
      "freelance",
      "full time",
      "full-time",
    ])
  ) {
    return null;
  }

  return `Sushant is interested in ${portfolioData.career.interestedIn.join(
    ", "
  )}.`;
}

/* =========================================
   PROFILE SUMMARY
========================================= */

function answerProfileSummary(
  question: string
) {
  if (
    hasAny(question, [
      "short summary",
      "brief summary",
      "summarize sushant",
      "summary of sushant",
      "give me a summary",
      "profile summary",
    ])
  ) {
    return `${portfolioData.person.name} is a ${portfolioData.person.title}. ${portfolioData.person.description}`;
  }

  return null;
}

/* =========================================
   RECENT PROJECT CONTEXT
========================================= */

function getRecentProject(
  conversation: ConversationMessage[]
) {
  const recentMessages =
    conversation.slice(-6).reverse();

  for (const message of recentMessages) {
    const project = findProject(
      message.content
    );

    if (project) {
      return project;
    }
  }

  return null;
}

/* =========================================
   FOLLOW-UP QUESTIONS
========================================= */

function answerFollowUpQuestion(
  question: string,
  conversation: ConversationMessage[]
) {
  if (conversation.length === 0) {
    return null;
  }

  const normalizedQuestion =
    normalize(question);

  const isFollowUp =
    normalizedQuestion === "it" ||
    normalizedQuestion === "this" ||
    normalizedQuestion === "that" ||
    normalizedQuestion === "this project" ||
    normalizedQuestion === "that project" ||
    normalizedQuestion.includes(
      "what technology does it use"
    ) ||
    normalizedQuestion.includes(
      "what technologies does it use"
    ) ||
    normalizedQuestion.includes(
      "what problem does it solve"
    ) ||
    normalizedQuestion.includes(
      "what features does it have"
    ) ||
    normalizedQuestion.includes(
      "tell me more about it"
    ) ||
    normalizedQuestion.includes(
      "what is its solution"
    ) ||
    normalizedQuestion.includes(
      "what is the future scope"
    );

  if (!isFollowUp) {
    return null;
  }

  const project =
    getRecentProject(conversation);

  if (!project) {
    return null;
  }

  return answerProjectQuestion(
    `${project.title} ${question}`
  );
}

/* =========================================
   YES / NO SKILL QUESTIONS
========================================= */

function answerYesNoSkillQuestion(
  question: string
) {
  const skill = findSkill(question);

  if (!skill) {
    return null;
  }

  if (
    hasAny(question, [
      "does sushant know",
      "does he know",
      "does sushant use",
      "has sushant worked with",
      "has he worked with",
      "can sushant use",
      "is sushant familiar with",
    ])
  ) {
    return answerSkillQuestion(question);
  }

  return null;
}

/* =========================================
   MAIN QUESTION HANDLER
========================================= */

function answerQuestion(
  rawQuestion: string,
  conversation: ConversationMessage[] = []
) {
  const question =
    normalize(rawQuestion);

  if (!question) {
    return "Please ask me something about Sushant's portfolio.";
  }

  /* Follow-up */

  const followUpAnswer =
    answerFollowUpQuestion(
      question,
      conversation
    );

  if (followUpAnswer) {
    return followUpAnswer;
  }

  /* Greeting */

  if (
    hasAny(question, [
      "hi",
      "hello",
      "hey",
      "hiya",
      "good morning",
      "good evening",
    ])
  ) {
    return "Hi! I'm Sushant AI. Ask me about Sushant's skills, projects, experience, education, AI work, or career interests.";
  }

  /* Summary */

  const summaryAnswer =
    answerProfileSummary(question);

  if (summaryAnswer) {
    return summaryAnswer;
  }

  /* Skill */

  const yesNoSkillAnswer =
    answerYesNoSkillQuestion(question);

  if (yesNoSkillAnswer) {
    return yesNoSkillAnswer;
  }

  /* Project technology */

  const projectTechnologyAnswer =
    answerProjectTechnologyQuestion(
      question
    );

  if (
    projectTechnologyAnswer &&
    hasAny(question, [
      "project",
      "projects",
      "which project",
      "what project",
      "uses",
      "use",
      "built with",
    ])
  ) {
    return projectTechnologyAnswer;
  }

  /* Project category */

  const categoryAnswer =
    answerProjectCategoryQuestion(
      question
    );

  if (categoryAnswer) {
    return categoryAnswer;
  }

  /* Specific project */

  const projectAnswer =
    answerProjectQuestion(question);

  if (projectAnswer) {
    return projectAnswer;
  }

  /* Experience */

  const experienceAnswer =
    answerExperienceQuestion(question);

  if (experienceAnswer) {
    return experienceAnswer;
  }

  /* Education */

  const educationAnswer =
    answerEducationQuestion(question);

  if (educationAnswer) {
    return educationAnswer;
  }

  /* Career */

  const careerAnswer =
    answerCareerQuestion(question);

  if (careerAnswer) {
    return careerAnswer;
  }

  /* General skills */

  if (
    hasAny(question, [
      "skills",
      "technical skills",
      "technologies",
      "technology",
      "tech stack",
      "technology stack",
      "what can sushant",
    ])
  ) {
    return `Sushant's technical stack includes ${portfolioData.skills.languages.join(
      ", "
    )} for programming, ${portfolioData.skills.frontend.join(
      ", "
    )} for frontend development, ${portfolioData.skills.backend.join(
      ", "
    )} for backend development, and ${portfolioData.skills.databases.join(
      ", "
    )} for databases.`;
  }

  /* Project list */

  if (
    hasAny(question, [
      "projects",
      "project list",
      "what has sushant built",
      "what did sushant build",
      "portfolio projects",
    ])
  ) {
    return `Sushant's portfolio currently includes ${portfolioData.projects
      .map((project) => project.title)
      .join(", ")}.`;
  }

  /* GitHub */

  if (
    hasAny(question, [
      "github",
      "source code",
      "repository",
      "repo",
    ])
  ) {
    return `Sushant's GitHub profile is ${portfolioData.links.github}.`;
  }

  /* LinkedIn */

  if (
    hasAny(question, [
      "linkedin",
      "professional profile",
    ])
  ) {
    return `Sushant's LinkedIn profile is ${portfolioData.links.linkedin}.`;
  }

  /* Contact / Email */

if (
  hasAny(question, [
    "email",
    "contact",
    "contact details",
    "how can i contact",
    "how to contact",
    "reach sushant",
    "reach him",
    "email address",
  ])
) {
  return `You can contact Sushant at ${portfolioData.links.email}. You can also connect with him on LinkedIn or GitHub.`;
}

  /* About */

  if (
    hasAny(question, [
      "about sushant",
      "who is sushant",
      "tell me about sushant",
      "introduce sushant",
      "what does sushant do",
    ])
  ) {
    return portfolioData.person.description;
  }

  /* Fallback */

  return "I'm Sushant AI, a portfolio assistant. I can answer questions about Sushant's skills, projects, technologies, experience, education, AI work, and career interests.";
}

/* =========================================
   POST API
========================================= */

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    const question =
      body?.question;

    const conversation: ConversationMessage[] =
      Array.isArray(body?.conversation)
        ? body.conversation
        : [];

    if (
      !question ||
      typeof question !== "string"
    ) {
      return NextResponse.json(
        {
          error:
            "A valid question is required.",
        },
        {
          status: 400,
        }
      );
    }

    const answer =
      answerQuestion(
        question,
        conversation
      );

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error(
      "Ask Sushant AI error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to process the question right now.",
      },
      {
        status: 500,
      }
    );
  }
}