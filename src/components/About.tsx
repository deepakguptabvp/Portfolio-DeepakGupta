import { Award, BookOpen, Coffee, Heart } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: <Award />, label: "Years Experience", value: "3+" },
  { icon: <BookOpen />, label: "Projects Completed", value: "5+" },
  { icon: <Coffee />, label: "Cups of Coffee", value: "50+" },
  { icon: <Heart />, label: "Happy Clients", value: "3+" },
];

export default function About() {
  return (
    <section id="about" className=" bg-slate-100 dark:bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center p-10 md:p-12">
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-800 to-slate-300">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I'm a passionate <strong> Frontend Developer</strong> with
              a love for creating beautiful and functional web applications.
              With almost 3 years of experience in the field, I've had the
              opportunity to work on various exciting projects and collaborate
              with talented people.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in web development started when I built my first
              website in college. Since then, I've been constantly learning and
              improving my skills to stay up-to-date with the latest
              technologies and best practices.
            </p>
            <div className="bg-gradient-to-r from-blue-800 to-slate-300 p-6 rounded-xl text-white">
              <p className="text-lg font-medium">
                "I believe in writing clean, maintainable code and creating
                intuitive user experiences that make a difference."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={600}
                width={600}
                alt="My Pic"
                className="rounded-lg shadow-xl animate-fade-in"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
          </div>

          <div className="lg:col-span-2 p-2 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-block p-3 bg-gradient-to-br from-blue-800 to-slate-300 text-white rounded-lg mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
