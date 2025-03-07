import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import BackgroundElements from "../components/BackgroundElements"

interface PortfolioProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Portfolio({ darkMode, setDarkMode }: PortfolioProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-900/80 dark:to-black/80 transition-colors duration-500 relative overflow-hidden backdrop-blur-sm">
      <BackgroundElements />

      {/* Email Service Demo Link */}
      <div className="fixed top-4 right-4 z-50">
        <Link
          to="/email-service"
          className="flex items-center space-x-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-900 dark:text-white border border-gray-200/50 dark:border-gray-700/50"
        >
          <Mail size={16} className="text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium">Email Service</span>
        </Link>
      </div>

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

