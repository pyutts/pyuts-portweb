import { useState, useEffect } from "react"

export default function AnimatedProfilePicture() {
  const [showEmoji, setShowEmoji] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmoji(false)
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
          src="https://avatars.githubusercontent.com/u/141645613?v=4"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

