"use client"

import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <div className="flex items-center">
      <Sun size={16} className="text-gray-500 dark:text-gray-400" />
      <label className="relative inline-flex items-center cursor-pointer mx-2">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
      </label>
      <Moon size={16} className="text-gray-500 dark:text-gray-400" />
    </div>
  )
}

