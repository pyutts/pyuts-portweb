export default function Skills() {
    const technicalSkills = [
      { name: "React", percentage: 90 },
      { name: "Tailwind CSS", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "TypeScript", percentage: 80 },
      { name: "HTML/CSS", percentage: 95 },
      { name: "Redux", percentage: 85 },
    ]
  
    return (
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              My{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Skills</span>
            </h2>
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200/70 dark:bg-gray-700/70 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full animate-grow-width"
                        style={{ width: `${skill.percentage}%`, animationDelay: `${index * 0.2}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-6">
              <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frontend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    React
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Redux
                  </li>
                </ul>
              </div>
  
              <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Express
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    MongoDB
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Firebase
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    REST APIs
                  </li>
                </ul>
              </div>
  
              <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tools</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    VS Code
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Figma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    npm/yarn
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Chrome DevTools
                  </li>
                </ul>
              </div>
  
              <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Communication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Problem Solving
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Teamwork
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Time Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Adaptability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  