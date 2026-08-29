import profileImage from "../asset/profile.jpg";
import movie from "../asset/movie.png"
import githubImg from "../asset/githubUser.png"
import expense from "../asset/expense.png"
import caffe from "../asset/caffe.png"

export const personalInfo = {
  name: "Hitesh Bhatnagar",
  shortName: "Hitesh",
  headline: "Developer who learns by building.",
  githubUrl: "https://github.com/hiteshbhatnagar",
  linkedinUrl: "https://linkedin.com/in/hiteshbhatnagar",
  instagramUrl: "https://instagram.com/hitesh.6268",
  whatsappUrl: "https://wa.me/919518827898",
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

