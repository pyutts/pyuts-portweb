import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A modern e-commerce platform built with React and Tailwind CSS",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Tailwind CSS", "Redux"],
    },
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers and designers",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Task Management App",
      description: "A productivity app to manage tasks and projects efficiently",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Weather Dashboard",
      description: "A weather application with beautiful visualizations",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Tailwind CSS", "API Integration"],
    },
    {
      title: "Recipe Finder",
      description: "An app to discover and save your favorite recipes",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Tailwind CSS", "Context API"],
    },
    {
      title: "Fitness Tracker",
      description: "Track your workouts and monitor your fitness progress",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Tailwind CSS", "Chart.js"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Projects</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2 justify-end">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-purple-100/70 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

