export interface SkillGroup { category: string; items: string[]; }
export interface ExperienceEntry { number: string; title: string; company: string; dates: string; bullets: string[]; }
export interface Project { number: string; title: string; dates: string; description: string; technologies: string[]; url: string; }
export interface FocusArea { title: string; description: string; ctaText: string; ctaLink: string; }
export interface Activity { role: string; organization: string; dates: string; }
export interface Socials { github: string; linkedin: string; email: string; phone: string; }

export const PERSONAL_INFO = {
  name: "Deepjyoti Dey", role: "Full-Stack Software Developer",
  education: { degree: "B.Tech, Computer Science and Engineering", institution: "RCC Institute of Information Technology, Kolkata", dates: "Aug 2023 – Aug 2027", gpa: "CGPA 7.81" },
  secondaryEducation: { institution: "Ramakrishna Mission Boys' Home High School, Rahara", degree: "Higher Secondary", grade: "93.87%" },
  summary: "Full-stack software developer and Computer Science undergraduate experienced in shipping client-facing features, integrating third-party systems, and deploying cloud-based services on Azure. Comfortable owning real-world workflows from architecture through production.",
};

export const SOCIALS: Socials = { github: "https://github.com/Deepjyoti1307", linkedin: "https://www.linkedin.com/in/deepjyoti-dey-9aab89424", email: "deepjyotidey1307@gmail.com", phone: "+91 9163681186" };

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C", "Dart", "HTML5", "CSS", "SQL"] },
  { category: "Frontend & Backend", items: ["React", "Next.js", "Flutter", "Node.js", "Express.js", "FastAPI", "Flask", "Tailwind CSS"] },
  { category: "Cloud, Data & APIs", items: ["Microsoft Azure", "Azure Functions", "MongoDB", "PostgreSQL", "Prisma ORM", "Firebase", "Supabase", "REST APIs", "OAuth", "JWT", "Webhooks", "RAG", "LLMs"] },
  { category: "Practices & Tools", items: ["Git", "GitHub", "CI/CD", "Agile/Scrum", "System Design", "Unit Testing", "Figma"] },
];

export const PROJECTS: Project[] = [
  { number: "01", title: "CRMS", dates: "Aug 2026", description: "Enterprise customer-records platform with role-based KYC approvals, configurable SLA timers, drag-and-drop stages, audit logs, document versioning, reporting, search, and real-time notifications.", technologies: ["Next.js 15", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"], url: "https://custrack-2026.vercel.app/" },
  { number: "02", title: "Eventic", dates: "Apr 2026", description: "Full-stack event management platform with Clerk-based authentication, MongoDB-backed RSVP workflows, public event pages, automated email notifications, and HubSpot CRM synchronization.", technologies: ["Next.js", "MongoDB", "Clerk", "HubSpot API"], url: "https://eventic-nu.vercel.app/" },
  { number: "03", title: "Murder Mystery", dates: "May 2026", description: "Full-stack game platform with secure batch-gated access, timed quizzes, hint tracking, a scoring engine with leaderboard, and an admin dashboard.", technologies: ["Next.js", "FastAPI", "MongoDB", "Clerk"], url: "https://murder-mystery-seven.vercel.app/" },
];

export const FOCUS_AREAS: FocusArea[] = [
  { title: "Full-Stack Web Development", description: "Designing and developing modern, responsive frontend layouts paired with robust server-side execution.", ctaText: "Check Projects", ctaLink: "#projects" },
  { title: "Cloud & Systems Integration", description: "Connecting cloud services, databases, and third-party systems—including payment gateways, CRM APIs, REST endpoints, and Azure Functions.", ctaText: "View Experience", ctaLink: "#experience" },
  { title: "Backend & AI Systems", description: "Designing secure backend services, migrating ML inference to serverless infrastructure, and working with RAG and large language models.", ctaText: "View Experience", ctaLink: "#experience" },
];

export const EXPERIENCE: ExperienceEntry[] = [{
  number: "01", title: "Software Development Intern", company: "GoAvo AI · Remote", dates: "May 2026 – Jul 2026",
  bullets: [
    "Re-architected ML inference by moving turnout-prediction models from Azure ML Studio VM compute to serverless Azure Function Apps with in-process inference, blob artifact loading, and v1/v2 routes; integrated the Flask REST API layer.",
    "Resolved RSVP search bottlenecks with a 3-character query threshold, 300 ms debounce, and matching API guards across the Next.js frontend and Flask backend—cutting unnecessary API calls and improving lookup latency.",
    "Built a four-tier SaaS pricing and entitlement system spanning pay-per-event, monthly, and yearly billing; backed by a canonical MongoDB billing ledger and integrated with Razorpay and Cashfree payment APIs.",
  ],
}];

export const ACTIVITIES: Activity[] = [
  { role: "PR and Management Lead", organization: "GDG on Campus RCCIIT", dates: "Sep 2025 – Present" },
  { role: "PR and Management Lead", organization: "ACM Student Chapter RCCIIT", dates: "Jan 2026 – Present" },
];
