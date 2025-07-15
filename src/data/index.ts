import { Project, Skill, Experience} from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Online Store Application",
    description: "A full-featured online store with product catalog, wishlist, cart, and secure order management.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Show Projects",
    technologies: ["React", "Springboot", "MySQL"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/chiragmalik27/Online-Store"
  },
  {
    id: 2,
    title: "Roadmap Finder",
    description: "A platform that helps users find the best career paths and resources for their desired career.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Show Projects",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://example.com/roadmap-finder",
    github: "https://github.com/chiragmalik27/roadmap-finder"
  },
  {
    id: 3,
    title: "Employee Management System",
    description: "Web application that helps to manage employees and their details.",
    image: "https://www.freepik.com/free-vector/audience-segmentation-abstract-concept-illustration_11667653.htm#fromView=keyword&page=1&position=0&uuid=368d4783-d1cb-45c7-8897-2ef4970b1ede&query=Employee+Management",
    category: "Show Projects",
    technologies: ["Java", "Springboot", "MySQL"],
    link: "https://example.com/employee-management",
    github: "https://github.com/chiragmalik27/Ems-fullstack"
  },
];


export const skills: Skill[] = [
  { name: "Java", level: 90, category: "backend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Spring Boot", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Next.js", level: 80, category: "frontend" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "JP Morgan",
    position: "virtual Experience",
    duration: "2025 - Present",
    description: "Built REST APIs with controller integration using Java and Spring Boot. Integrated Apache Kafka for stream processing and H2 for in-memory database management.",
    logo: "https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    company: "Campus Summer Intership",
    position: "Nlp Web Scrapping ",
    duration: "2-months",
    description: "Developed and maintained web applications for clients across various industries. Worked with React, Node.js, and GraphQL.",
    logo: "https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  
];
export const aboutMe = {
  name: "Chirag Malik",
  title: "Full Stack Developer",
  description: "I'm a passionate software engineer with 2+ years of experience creating digital experiences that combine technical excellence with beautiful design. My focus is on building scalable, user-friendly applications that solve real-world problems.",
  longDescription: "I specialize in modern web technologies including React, TypeScript, Spring boot and Node.js, with a strong background in both frontend and backend development. Throughout my career, I've worked with startups and established companies to turn their visions into reality through thoughtful code and intuitive interfaces.\n\nWhen I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying at the forefront of technological innovation.",
  location: "Amritsar,Punjab",
  email: "chiragmalik1700@gmail.com",
  phone: "+91 9501480672",
  social: {
    github: "https://github.com/chiragmalik27",
    linkedin: "https://www.linkedin.com/in/chirag-malik-a9a859265/",
    twitter: "https://x.com/chiragmalik_27"
  }
};