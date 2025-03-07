"use client"

import { useState, useEffect } from "react"
import { Github, Users, Star, GitFork, GitCommit } from "lucide-react"

interface GitHubProfileData {
  avatar_url: string
  name: string
  login: string
  bio: string
  followers: number
  public_repos: number
  html_url: string
}

export default function GitHubProfile() {
  const [profile, setProfile] = useState<GitHubProfileData | null>(null)
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
    commits: 0,
  })
  const [loading, setLoading] = useState(true)

  // In a real app, you would fetch this data from GitHub API
  // For demo purposes, we'll simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile({
        avatar_url: "/placeholder.svg?height=100&width=100",
        name: "John Doe",
        login: "johndoe",
        bio: "Frontend Developer & UI/UX Enthusiast",
        followers: 245,
        public_repos: 32,
        html_url: "https://github.com",
      })

      setStats({
        stars: 128,
        forks: 47,
        commits: 352,
      })

      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="mt-6 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600 dark:border-purple-400"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-6 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center gap-4 mb-4">
        <a href={profile?.html_url} target="_blank" rel="noopener noreferrer" className="relative group">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 group-hover:border-purple-400 transition-all duration-300">
            <img
              src={profile?.avatar_url || "/placeholder.svg?height=100&width=100"}
              alt={profile?.name || "GitHub Profile"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>

        <div>
          <a
            href={profile?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-900 dark:text-white font-bold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
          >
            {profile?.name} <Github size={16} className="ml-1" />
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-sm">@{profile?.login}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{profile?.bio}</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <Users size={14} />
          <span>{profile?.followers} followers</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M4 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M20 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M20 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M20 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            <path d="M2 5h16"></path>
            <path d="M2 12h16"></path>
            <path d="M2 19h16"></path>
          </svg>
          <span>{profile?.public_repos} repositories</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center p-2 rounded-lg bg-white/20 dark:bg-gray-700/20">
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
            <Star size={14} />
            <span className="text-xs">Stars</span>
          </div>
          <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{stats.stars}</span>
        </div>

        <div className="flex flex-col items-center p-2 rounded-lg bg-white/20 dark:bg-gray-700/20">
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
            <GitFork size={14} />
            <span className="text-xs">Forks</span>
          </div>
          <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{stats.forks}</span>
        </div>

        <div className="flex flex-col items-center p-2 rounded-lg bg-white/20 dark:bg-gray-700/20">
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
            <GitCommit size={14} />
            <span className="text-xs">Commits</span>
          </div>
          <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{stats.commits}</span>
        </div>
      </div>
    </div>
  )
}

