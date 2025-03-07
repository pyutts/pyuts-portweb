export default function About() {
    return (
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Me</span>
            </h2>
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          </div>
  
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who am I?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm a passionate Frontend Developer with 5 years of experience in building modern web applications. I
                  specialize in React, Tailwind CSS, and Next.js to create beautiful, responsive, and user-friendly
                  interfaces.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  My journey in web development started when I was in college, and since then, I've been constantly
                  learning and improving my skills to stay up-to-date with the latest technologies and trends.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When I'm not coding, you can find me hiking, reading books, or experimenting with new recipes in the
                  kitchen.
                </p>
              </div>
            </div>
  
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor's in Computer Science, University of Technology
                </p>
              </div>
              <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">5+ years in Frontend Development</p>
              </div>
              <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">San Francisco, California</p>
              </div>
              <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Interests</h3>
                <p className="text-gray-600 dark:text-gray-300">Web Design, UI/UX, Hiking, Reading</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  