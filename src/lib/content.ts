export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  number: string;
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface Project {
  number: string;
  title: string;
  dates: string;
  description: string;
  technologies: string[];
  url: string;
}

export interface FocusArea {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface Activity {
  role: string;
  organization: string;
  dates: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export const PERSONAL_INFO = {
  name: "Deepjyoti Dey",
  role: "Full-Stack Developer",
  education: {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "RCC Institute of Information Technology, Kolkata",
    dates: "Aug 2023 – Aug 2027",
    gpa: "CGPA 7.81",
  },
  secondaryEducation: {
    institution: "Ramakrishna Mission Boys' Home High School, Rahara",
    degree: "Higher Secondary",
    grade: "93.87%",
  },
  summary:
    "Computer Science undergraduate with strong full-stack development skills in Python, JavaScript, and TypeScript. Experienced building scalable web applications, REST APIs, and cloud-integrated systems using React, Next.js, Flask, and MongoDB.",
};

export const SOCIALS: Socials = {
  github: "https://github.com/Deepjyoti1307",
  linkedin: "https://www.linkedin.com/in/deepjyoti-dey-13j2004/",
  email: "dipudey351@gmail.com",
  phone: "+91 9163681186",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "HTML5", "CSS", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "FastAPI", "Flask", "Tailwind CSS"],
  },
  {
    category: "Backend & Cloud",
    items: ["REST APIs", "MongoDB", "Azure", "Firebase", "Supabase", "OAuth", "Webhooks"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Tarang",
    dates: "Jan 2026 – Feb 2026",
    description: "Safety-First Artist Bookings. Next.js 14 + TypeScript artist booking platform with Firebase/Appwrite auth, Tailwind CSS, and Framer Motion UI.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Appwrite", "Tailwind CSS"],
    url: "#", // TODO: User to supply actual URL
  },
  {
    number: "02",
    title: "Eventic",
    dates: "Apr 2026",
    description: "Full-Stack Event Management Platform. Clerk-based auth, MongoDB-backed RSVP workflows, public event pages, email notifications, HubSpot CRM sync.",
    technologies: ["Next.js", "Clerk", "MongoDB", "Tailwind CSS", "HubSpot API"],
    url: "#", // TODO: User to supply actual URL
  },
  {
    number: "03",
    title: "Murder Mystery Platform",
    dates: "May 2026",
    description: "Murder Mystery Game Platform. Secure batch access, timed quizzes, hint tracking, and an admin dashboard.",
    technologies: ["Next.js", "Clerk", "FastAPI", "MongoDB", "Tailwind CSS"],
    url: "#", // TODO: User to supply actual URL
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Full-Stack Web Development",
    description: "Designing and developing modern, responsive frontend layouts paired with robust server-side execution.",
    ctaText: "Check Projects",
    ctaLink: "#projects",
  },
  {
    title: "API & Cloud Integration",
    description: "Connecting scalable cloud infrastructures, databases, and third-party APIs like REST, Azure, Firebase, and Supabase.",
    ctaText: "View Experience",
    ctaLink: "#experience",
  },
  {
    title: "ML/Backend Systems",
    description: "Migrating ML prediction models to serverless setups and designing high-efficiency background compute routines.",
    ctaText: "View Experience",
    ctaLink: "#experience",
  },
  {
    title: "Product Design & Prototyping",
    description: "Translating application feature concepts into precise wireframes and interactive user journeys with Figma.",
    ctaText: "Get in Touch",
    ctaLink: "#contact",
  },
];

export const EXPERIENCE: ExperienceEntry = {
  number: "01",
  title: "Software Development Intern",
  company: "GoAvo AI",
  dates: "May 2026 – Present",
  bullets: [
    "Migrated turnout prediction ML models from Azure ML Studio VM compute to Azure Function App with in-process inference engine, blob artifact loading, and v1/v2 HTTP routes; rewired Flask API to call the Function App instead of AML /score endpoints.",
    "Optimized RSVP search across the Next.js frontend and Flask backend with a 3-character minimum threshold, 300ms debounce, and aligned API guards — reducing unnecessary queries and improving attendee lookup speed.",
    "Built a four-tier SaaS pricing and entitlement system (Free, Pro, Growth, Enterprise) with Pay-per-Event, Monthly, and Yearly billing; canonical MongoDB billing-records ledger; Razorpay/Cashfree checkout integration.",
  ],
};

export const ACTIVITIES: Activity[] = [
  {
    role: "PR and Management Lead",
    organization: "GDG on Campus RCCIIT",
    dates: "Sep 2025 – Present",
  },
  {
    role: "PR and Management Lead",
    organization: "ACM Student Chapter RCCIIT",
    dates: "Jan 2026 – Present",
  },
];
