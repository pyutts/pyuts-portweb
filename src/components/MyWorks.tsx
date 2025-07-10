import { CheckCircle, CircleDot } from "lucide-react"

type WorkItem = {
  title: string
  description: string
  year: string
  logo: string
  important: boolean
}

const workItems: WorkItem[] = [
  {
    title: "Bantenplace E-commerce",
    description: "Membangun platform e-commerce regional dengan sistem pembayaran Xendit.",
    year: "2023",
    logo: "/logos/bantenplace.png", // tambahkan ke /public/logos/
    important: true,
  },
  {
    title: "SIKOPER Cooperative System",
    description: "Aplikasi desktop koperasi menggunakan JavaFX dan SQLite.",
    year: "2022",
    logo: "/logos/sikoper.png",
    important: true,
  },
  {
    title: "Digsoft Website",
    description: "Landing page modern perusahaan software berbasis Laravel dan Tailwind.",
    year: "2024",
    logo: "/logos/digsoft.png",
    important: false,
  },
  {
    title: "Wedding Website",
    description: "Website undangan pernikahan interaktif dengan Next.js.",
    year: "2024",
    logo: "/logos/wedding.png",
    important: false,
  },
]

export default function MyWorks() {
  return (
    <section id="my-works" className="py-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My <span className="text-purple-600">Works</span> Roadmap
        </h2>

        <div className="relative border-l-4 border-purple-500 dark:border-purple-700 pl-6 space-y-12">
          {workItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Icon */}
              <div className="absolute -left-8 top-1">
                {item.important ? (
                  <CheckCircle className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                ) : (
                  <CircleDot className="text-gray-400 dark:text-gray-600 w-6 h-6" />
                )}
              </div>

              <div className="flex items-center gap-4 mb-2">
                {/* Logo */}
                <img
                  src={item.logo}
                  alt={`${item.title} logo`}
                  className="w-10 h-10 rounded-full object-contain border border-gray-200 dark:border-gray-700"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{item.description}</p>
              <span className="text-xs text-gray-400">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
