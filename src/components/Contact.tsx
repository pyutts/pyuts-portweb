import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Contact</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <div className="md:w-2/3 max-w-2xl">
            <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100/70 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <a
                      href="mailto:wiadyana6@gmail.com"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-lg font-medium"
                    >
                      wiadyana6@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100/70 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Denpasar Bali, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/pyutts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="http://linkedin.com/in/putuwiadnyana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/pyutsajabang"
                    className="p-3 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

