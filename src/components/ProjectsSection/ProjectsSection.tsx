"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ServiceConnect – MERN Application",
    description:
      "A full-stack MERN application designed to connect users with service providers. Implemented authentication, REST APIs, and dynamic frontend components for real-world service workflows.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/Subham145/serviceconnect-MERN",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce web application featuring product listings, cart functionality, and clean UI design. Focused on frontend logic and user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Subham145/Task2_E-Commerce",
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description:
      "An educational web platform UI built to showcase courses and learning content. Designed responsive layouts with structured sections for students and instructors.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Subham145/Task3_E-Learning",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website showcasing skills, projects, and contact information. Built with a focus on responsiveness and professional presentation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Subham145/Task1_Portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        🚀 Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-xl border border-border bg-card dark:bg-card p-6 hover:shadow-lg dark:hover:shadow-lg transition-all"
            whileHover={{ y: -4 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {project.title}
            </h3>

            <p className="text-sm text-cosmic-muted mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-skyblue-100 dark:bg-skyblue-900/30 text-skyblue-700 dark:text-skyblue-300 border border-skyblue-300 dark:border-skyblue-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-skyblue-600 dark:text-skyblue-400 hover:text-skyblue-700 dark:hover:text-skyblue-300 hover:underline"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
