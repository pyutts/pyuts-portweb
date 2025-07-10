import { useEffect, useState, useCallback } from "react"
import { Github, ExternalLink, X } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  linkgithub?: string
  linkweb?: string
}

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  const handleClose = useCallback(() => {
    setIsAnimatingOut(true)
    setTimeout(onClose, 300)
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleClose])

  if (!project) return null

  return (
    <div
      className={`fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        isAnimatingOut ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
     <div
      className={`relative w-full max-w-3xl mx-4 md:mx-auto max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 transform transition-all duration-300 ease-in-out ${
        isAnimatingOut ? "opacity-0 translate-y-10 scale-95" : "opacity-100 translate-y-0 scale-100"
      }`}

        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-700 dark:hover:text-white"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="w-full aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs md:text-sm bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.linkgithub && (
              <a
                href={project.linkgithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
              >
                <Github size={18} /> GitHub
              </a>
            )}
            {project.linkweb && (
              <a
                href={project.linkweb}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
              >
                <ExternalLink size={18} /> Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
