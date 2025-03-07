export default function BackgroundElements() {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Abstract geometric shapes with increased transparency */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 dark:opacity-30">
          {/* Circles with more blur and transparency */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
  
          {/* Abstract lines with increased transparency */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gray-700 dark:text-gray-300"
            ></path>
            <path
              d="M0,50 L100,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gray-700 dark:text-gray-300"
            ></path>
            <path
              d="M50,0 L50,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gray-700 dark:text-gray-300"
            ></path>
            <path
              d="M0,0 L100,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gray-700 dark:text-gray-300"
            ></path>
            <path
              d="M100,0 L0,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gray-700 dark:text-gray-300"
            ></path>
          </svg>
  
          {/* Geometric patterns with increased transparency */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
            <svg className="w-full h-full opacity-3" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gray-700 dark:text-gray-300"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
  
          {/* Subtle wave pattern with increased transparency */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M0,0 C150,90 350,0 500,100 C650,200 750,0 900,100 C1050,200 1150,90 1200,0 V120 H0 Z"
                className="fill-current text-gray-700 dark:text-gray-300"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  
  