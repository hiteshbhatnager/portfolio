import profileImage from "../asset/profile.jpg";

export const personalInfo = {
  name: "Hitesh Bhatnagar",
  shortName: "Hitesh",
  headline: "Developer who learns by building.",
  githubUrl: "https://github.com/hiteshbhatnagar",
  linkedinUrl: "https://linkedin.com/in/hiteshbhatnagar",
  email: "hiteshbhatnagar@example.com",
  photo: profileImage
};

export const identity = {
  labels: ["Developer", "Student", "Builder", "Learner"],
  summary: "I learn by building."
};

export const howILearn = ["LEARN", "BUILD", "BREAK", "FIX", "UNDERSTAND", "REPEAT"];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Building With",
    items: ["React", "APIs", "Git", "GitHub"]
  },
  {
    category: "Exploring",
    items: ["Backend", "Systems", "Advanced Java"]
  }
];

export const projects = [
  {
    id: 1,
    name: "Movie Search",
    description: "Search movies using an API.",
    technologies: ["React", "API", "JavaScript"],
    githubUrl: "#",
    demoUrl: "#",
    image: "/movie-placeholder.jpg"
  },
  {
    id: 2,
    name: "GitHub User Finder",
    description: "Explore GitHub users and profiles.",
    technologies: ["JavaScript", "CSS", "GitHub API"],
    githubUrl: "#",
    demoUrl: "#",
    image: "/github-placeholder.jpg"
  },
  {
    id: 3,
    name: "Password Generator",
    description: "Generate secure passwords.",
    technologies: ["JavaScript", "DOM", "CSS"],
    githubUrl: "#",
    demoUrl: "#",
    image: "/password-placeholder.jpg"
  }
];

export const journeySteps = [
  { stage: "01", description: "Programming fundamentals" },
  { stage: "02", description: "Web development" },
  { stage: "03", description: "React & APIs" },
  { stage: "04", description: "Java" },
  { stage: "05", description: "Real-world projects" },
  { stage: "06", description: "What's next?" }
];

export const goals = {
  now: { label: "Build", detail: "Better software" },
  next: { label: "Deepen", detail: "Stronger fundamentals" },
  later: { label: "Create", detail: "Bigger projects" }
};
