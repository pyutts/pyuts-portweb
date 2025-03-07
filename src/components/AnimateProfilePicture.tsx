import { useState, useEffect } from "react"

export default function AnimatedProfilePicture() {
  const [showEmoji, setShowEmoji] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Start with emoji, then transition to profile picture
    const timer = setTimeout(() => {
      setShowEmoji(false)

      // After transition is complete
      setTimeout(() => {
        setAnimationComplete(true)
      }, 1000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <div
        className={`absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transition-all duration-1000 ${
          showEmoji ? "scale-100 rotate-0" : "scale-0 rotate-180"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center text-8xl md:text-9xl bg-gradient-to-br from-yellow-200 to-yellow-400">
          👨‍💻
        </div>
      </div>

      <div
        className={`absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transition-all duration-1000 ${
          !showEmoji ? "scale-100 rotate-0" : "scale-0 rotate-180"
        } ${animationComplete ? "animate-float" : ""}`}
      >
        <img
          src="https://images.unsplash.com/photo-1612831285584-3b7e6c1f8a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDUwMDZ8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjE1NzY2NjEz&ixlib=rb-1.2.1&q=80&w=400"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

