import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-slate-200 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-3/4 lg:pr-12">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r  from-blue-800 to-slate-300 bg-clip-text text-transparent">
              Hi, I&apos;m Deepak Gupta
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Full Stack Developer specializing in building exceptional digital
            experiences
          </p>
          <div className="flex gap-4 mb-8">
            <Link
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Me
            </Link>
            <Link
              href="/deepakgupta_sde.pdf"
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              Download CV
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/deepakguptabvp"
              className="social-link"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/deepakgupta1597/"
              className="social-link"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="/deepakgupta_sde.pdf"
              className="social-link"
              title="Download CV"
            >
              <FileText className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xlxl">
              <Image
                src="/new.jpg"
                width={800}
                height={800}
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-600/5 to-slate-600/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
