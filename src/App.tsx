import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackgroundElement from "./components/BackgroundElements"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Detect system preference for dark mode
  useEffect(() => {
    // Check if user has a preference stored
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)

      // Listen for changes in system preference
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = (e: MediaQueryListEvent) => {
        setDarkMode(e.matches)
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Save preference
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-900/80 dark:to-black/80 transition-colors duration-500 relative overflow-hidden backdrop-blur-sm">
      <BackgroundElement />

      <main>
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

