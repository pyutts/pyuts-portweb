import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackgroundElement from "./components/BackgroundElements"
import ProjectModal from "./components/ProjectsModal"
import MyWorks from "./components/MyWorks"

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  linkgithub?: string
  linkweb?: string
}

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Cek tema dari localStorage atau system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches)
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  // Terapkan tema ke document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  const openProjectModal = (project: Project) => setSelectedProject(project)
  const closeProjectModal = () => setSelectedProject(null)

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : ""
  }, [selectedProject])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-900/80 dark:to-black/80 transition-colors duration-500 overflow-x-hidden">
      <BackgroundElement />

      {/* Semua konten tetap terlihat (hanya diblur jika modal terbuka) */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          selectedProject
            ? "blur-sm brightness-50 pointer-events-none select-none scale-[0.98]"
            : "pointer-events-auto"
        }`}
      >
        <main>
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
          <About />
          {/* <MyWorks /> */}
          <Projects onProjectSelect={openProjectModal} />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      )}
    </div>
  )
}

export default App
