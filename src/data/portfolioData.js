import profileImage from "../asset/profile.jpg";
import movie from "../asset/movie.png"
import githubImg from "../asset/githubUser.png"
import expense from "../asset/expense.png"
import caffe from "../asset/caffe.png"

export const personalInfo = {
  name: "Hitesh Bhatnagar",
  shortName: "Hitesh",
  headline: "I build what I learn.",
  subheadline: "Developer · Student · Builder",
  githubUrl: "https://github.com/hiteshbhatnager",
  linkedinUrl: "https://www.linkedin.com/in/hitesh-bhatnager-584662411/",
  instagramUrl: "https://instagram.com/hitesh.6268",
  whatsappUrl: "https://wa.me/919518827898",
  email: "bhatnagerhitesh@gmail.com",
  photo: profileImage
};

export const identity = {
  labels: ["Developer", "Student", "Builder", "Learner"],
  summary: "I learn by building.",
  status: [
    { label: "Currently", value: "Building projects" },
    { label: "Learning", value: "React + Java" },
    { label: "Exploring", value: "Backend & Systems" },
    { label: "Approach", value: "Learn → Build → Improve" },
  ]
};

export const howILearn = ["LEARN", "BUILD", "BREAK", "FIX", "UNDERSTAND", "REPEAT"];

export const skills = [
  {
    category: "Languages",
    tag: "USE",
    items: ["Java", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Building With",
    tag: "USE",
    items: ["React", "APIs", "Git", "GitHub"]
  },
  {
    category: "Exploring",
    tag: "LEARNING",
    items: ["Backend", "Systems", "Advanced Java"]
  }
];

export const projects = [
  {
    id: 1,
    name: "Movie Search",
    description: "Search movies using an API.",
    technologies: ["React", "API", "JavaScript"],
    githubUrl: "https://github.com/hiteshbhatnager/movie-search",
    demoUrl: "https://hiteshbhatnager.github.io/movie-search/",
    image: movie
  },
  {
    id: 2,
    name: "GitHub User Finder",
    description: "Explore GitHub users and profiles.",
    technologies: ["JavaScript", "CSS", "GitHub API"],
    githubUrl: "https://github.com/hiteshbhatnager/github-user-finder",
    demoUrl: "https://github-user-finder-git-main-hitesh24.vercel.app/",
    image: githubImg
  },
  {
    id: 4,
    name: "Expense Tracker",
    description: "Explore tracker and manage expenses.",
    technologies: ["JavaScript", "CSS", "GitHub API", "deploy vercel"],
    githubUrl: "https://github.com/hiteshbhatnager/expense-tracker",
    demoUrl: "https://expense-tracker-hitesh24.vercel.app/",
    image: expense
  },
  {
    id: 5,
    name: "cafe website",
    description: "makes you appear on internet.",
    technologies: ["JavaScript", "CSS", "GitHub API"],
    githubUrl: "https://github.com/hiteshbhatnager/cafe-website",
    demoUrl: "https://hiteshbhatnager.github.io/cafe-website/",
    image: caffe
  },
];

