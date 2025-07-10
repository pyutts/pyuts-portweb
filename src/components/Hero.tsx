import { Github, Linkedin, Mail } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import AnimatedProfilePicture from "./AnimateProfilePicture"

interface HeroProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Hero({ darkMode, setDarkMode }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-end mb-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-white">Hello, I'm</span>
              <span className="block mt-2 text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Putu Wiadnyana</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              A passionate{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Web Developer</span> creating
              modern and responsive web applications
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Download CV
              </a>
              <a
                href="#myworks"
                className="px-6 py-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-900 dark:text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50"
              >
                View Work
              </a>
            </div>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://github.com/pyutts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="http://linkedin.com/in/putuwiadnyana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:wiadyana6@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>

           
          </div>
          <div className="md:w-1/2 flex justify-center">
            <AnimatedProfilePicture />
          </div>
        </div>
      </div>
    </section>
  )
}

