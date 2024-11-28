"use client";
import React from "react";
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  GitBranch,

} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

const skills: Skill[] = [
  {
    name: "Frontend Development",
    icon: <Layout />,
    level: 80,
    category: "Development",
  },
  {
    name: "Backend Development",
    icon: <Server />,
    level: 70,
    category: "Development",
  },
  {
    name: "Database Management",
    icon: <Database />,
    level: 80,
    category: "Development",
  },
  {
    name: "Mobile Development",
    icon: <Smartphone />,
    level: 70,
    category: "Development",
  },
  {
    name: "Version Control",
    icon: <GitBranch />,
    level: 85,
    category: "Tools",
  },
  {
    name: "Problem Solving",
    icon: <Code2 />,
    level: 90,
    category: "Soft Skills",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-300 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl  font-bold text-center justify-center p-8 md:text-5xl md:p-16">
          <span className="bg-gradient-to-r from-blue-800 to-slate-300 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:px-20 ">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-800 to-slate-300 text-white rounded p-2">
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>

              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-800 to-slate-300 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: "0%",
                    animation: "growWidth 1.5s ease-out forwards",
                    animationDelay: `${index * 100 + 500}ms`,
                  }}
                />
                <style jsx>{`
                  @keyframes growWidth {
                    from {
                      width: 0%;
                    }
                    to {
                      width: ${skill.level}%;
                    }
                  }
                `}</style>
              </div>
              <div className="mt-2 text-sm text-right text-gray-600 dark:text-gray-400">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
