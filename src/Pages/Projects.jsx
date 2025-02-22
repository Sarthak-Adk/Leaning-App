import React from "react";
import ProjectCard from "../Components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "To-Do List App",
    description: "A simple task manager using React and Firebase.",
    level: "Beginner",
    techStack: ["React", "Firebase"],
    status: "Not Started",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Fetch live weather data using OpenWeather API.",
    level: "Intermediate",
    techStack: ["JavaScript", "API", "Bootstrap"],
    status: "In Progress",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform with payment integration.",
    level: "Advanced",
    techStack: ["React", "Node.js", "MongoDB"],
    status: "Completed",
  },
  {
    id: 4,
    title: "Chat Application",
    description: "A real-time chat app using WebSockets and Node.js.",
    level: "Intermediate",
    techStack: ["React", "Node.js", "Socket.io"],
    status: "Not Started",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    level: "Beginner",
    techStack: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "Track daily expenses and generate reports.",
    level: "Intermediate",
    techStack: ["React", "Redux", "Firebase"],
    status: "In Progress",
  },
  {
    id: 7,
    title: "Social Media Dashboard",
    description: "A dashboard for managing social media accounts.",
    level: "Advanced",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    status: "Not Started",
  },
];

const Projects = () => {
  return (
  <>
   <section className="bg-white">
    <div className="container mx-auto px-4 py-8">
     <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
     {projectsData.map(pCard=>(
      <ProjectCard
       key={pCard.id}
       title={pCard.title}
       description={pCard.description}
       level={pCard.level}
       techStack={pCard.techStack}
       status={pCard.status} />
     )
    )}
    </div>
     </div>
     </section>
  </>
  );
};

export default Projects;
