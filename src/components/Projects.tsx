"use client";
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

type ProjectCategory = "All" | "Websites" | "Applications" | "Mobile";

interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "TuneMasters - Academy",
    description:
      "Join our interactive platform to master instruments or vocals with expert courses. Connect with us and start your musical journey today!",
    image: "https://calarts.edu/sites/default/files/2024-11/music.jpg",
    category: "Applications",
    techStack: ["ReactJs", "NextJs", "Typescript", "Framer motion"],
    demoLink: "https://tune-masters-academy.vercel.app/",
    githubLink: "https://github.com/deepakguptabvp/TuneMasters-Academy",
  },
  {
    title: "Hunting Coder Blog Website",
    description:
      "Created a responsive blog website focused on the latest technologies. Features dynamic content updates and an engaging user-friendly design.",
    image:
      "https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.webp",
    category: "Websites",
    techStack: ["ReactJs", "NextJs", "Tailwind CSS", "Javascript"],
    demoLink: "https://huntingcoder-delta.vercel.app/",
    githubLink: "https://github.com/deepakguptabvp/huntingcoder",
  },
  {
    title: "5-day Weather Forecast App",
    description:
      "Developed a mobile-responsive 5-day weather forecast app with a sleek UI. Includes temperature switching between Celsius and Fahrenheit for user convenience.",
    image:
      "https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ",
    category: "Mobile",
    techStack: ["ReactJs", "JavaScript", "NextJs"],
    demoLink: "https://weather-forecast-app-beige.vercel.app/",
    githubLink: "https://github.com/deepakguptabvp/weather-forecast-app",
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Websites",
  "Applications",
  "Mobile",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className=" bg-gray-200 dark:bg-gray-800 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center p-10 md:p-12">
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-800 to-slate-300">
              My Projects
            </span>
          </h2>
        </div>

        {/* category filter */}
        <div className="flex flex-wrap justify-center p-2 md:p-2 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-6 md:px-20 md:py-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  height={300}
                  width={300}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
