import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "All-in-One Booking System",
      description:
        "Comprehensive booking system for managing hotel, cab, and event bookings with real-time confirmation, availability tracking, and user notifications.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtlXFPyIrGksWVi6qcXcS2zB5Hq6RZGadZA&s",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Stripe"],
      liveUrl: "https://book-wise-dev.vercel.app/",
      githubUrl: "https://github.com/manu1242",
    },
    {
      title: "ONE - AI (GPT) Application",
      description:
        "AI-integrated platform using OpenAI APIs for content generation, summarization, image generation, and chatbots with export capabilities.",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstockcake.com%2Fi%2Ffuturistic-ai-portrait_1015818_230335&psig=AOvVaw2sxzoQkUJxVKkEeDQ7Xkd0&ust=1756984207847000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNC_9bS6vI8DFQAAAAAdAAAAABAL",
      technologies: ["React", "OpenAI API", "Node.js", "Prisma", "Vercel"],
      liveUrl: "https://one-gpt-ai-one.vercel.app/",
      githubUrl: "https://github.com/manu1242/ONE-AI",
    },
    {
      title: "Real-Time Weather App",
      description:
        "Weather forecasting application with location-based updates, interactive visualizations, and historical climate data analysis.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "Flask", "PostgreSQL"],
      liveUrl: "https://cloneweather.netlify.app/",
      githubUrl: "https://github.com/manu1242/weather",
    },
    {
      title: "Job Tracking Platform",
      description:
        "Job application management tool with job listings, status tracking, reminders, and resume builder features.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
      liveUrl: "https://job-tracker-gamma.vercel.app/",
      githubUrl: "https://github.com/manu1242/Job_tracker",
    },
    
    {
      title: "To-Do List Application",
      description:
        "Interactive to-do application with drag-and-drop task management, real-time updates, and productivity analytics.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQWa6-a-OsjUZ2f8wvNzBNi-TX6IeFXeeQQ&s",

      technologies: ["React", "Redux", "Firebase", "TailwindCSS"],
      liveUrl: "https://manutodolist.netlify.app/",
      githubUrl: "https://github.com/manu1242/To-Do-List",
    },
    {
      title: "Smart Billing System",
      description:
        "Billing and invoice management platform with product catalog, transaction history, and print/export options.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQWa6-a-OsjUZ2f8wvNzBNi-TX6IeFXeeQQ&s",
      technologies: [
        "MERN Stack",
        "Express.js",
        "MongoDB",
        "React",
        "PDF Generator",
      ],
      liveUrl: "https://store-project-ui.vercel.app/login",
      githubUrl: "https://github.com/manu1242/store",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-black/40 backdrop-blur-lg border border-red-500/30 rounded-2xl overflow-hidden hover:border-red-400/50 transition-all duration-300 transform group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="p-2 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-black/90 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
