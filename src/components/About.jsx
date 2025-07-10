import React from "react";
import { Code } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
      ],
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
        {
          name: "Socket.io",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        },
      ],
    },
    {
      title: "Database",
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },

        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      title: "Cloud & Tools",
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },

        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        },

        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Manohar</h3>
                    <p className="text-red-400">Mern Stack Developer</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  As a passionate full-stack developer, I've gained hands-on
                  experience by working on real-world projects involving modern
                  web technologies. Through internships and self-initiated
                  projects, I’ve built scalable web applications with a focus on
                  clean code, responsive design, and seamless user experiences.
                  I'm eager to contribute and grow in dynamic development
                  environments.
                </p>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                    <div className="text-2xl font-bold text-red-400">8+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                    <div className="text-2xl font-bold text-red-400">1+</div>
                    <div className="text-sm text-gray-400">years hands-on project experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Technical Arsenal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.title} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-black/40 backdrop-blur-lg border border-red-500/30 rounded-2xl p-6 hover:border-red-400/50 transition-all duration-300 h-full">
                    {/* Category Header */}
                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mb-3`}
                      >
                        <span className="text-white font-bold text-lg">
                          {category.title.charAt(0)}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                        {category.title}
                      </h4>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="group/skill flex flex-col items-center p-3 bg-black/30 rounded-xl hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105"
                          title={skill.name}
                        >
                          <div className="w-10 h-10 mb-2 flex items-center justify-center">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-8 h-8 object-contain filter group-hover/skill:drop-shadow-lg transition-all duration-300"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                            />
                            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg items-center justify-center text-white text-xs font-bold hidden">
                              {skill.name.charAt(0)}
                            </div>
                          </div>
                          <span className="text-gray-300 text-xs font-medium text-center group-hover/skill:text-white transition-colors leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full border border-red-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">
                  Always learning new technologies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
