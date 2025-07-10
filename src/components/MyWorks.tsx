import { CheckCircle, Briefcase } from "lucide-react";

type WorkItem = {
  title: string;
  description: string;
  year: string;
  logo: string;
  important: boolean;
  pbl: boolean; 
  campus:boolean;
};

const workItems: WorkItem[] = [
  {
    title: "Sipandu Integrated Service System",
    description:
      "Developed a comprehensive integrated service system for a government agency. My role involved full-stack development, from designing the database to building RESTful APIs with PHP and creating a responsive front-end. Gained significant experience in public sector application development.",
    year: "2025",
    logo: "/logos/sipandu.png",
    important: true,
    pbl: true,
    campus:false,
  },
  
  {
    title: "Roomify Booking System",
    description:
      "Developed a comprehensive integrated service system for a government agency. My role involved full-stack development, from designing the database to building RESTful APIs with PHP and creating a responsive front-end. Gained significant experience in public sector application development.",
    year: "2025",
    logo: "/logos/sipandu.png",
    important: false,
    pbl: false,
    campus:true,
  },

  {
    title: "Digsoft Website",
    description:
      "Built a modern and responsive landing page for a software company using Laravel and Tailwind CSS. I was responsible for translating UI/UX designs into a fully functional and pixel-perfect website, focusing on clean code and performance.",
    year: "2025",
    logo: "/logos/digsoft.png",
    important: false,
    pbl: false,
    campus:false,
  },

  {
    title: " Krisna & Wini Wedding Website",
    description:
      "Created a fully interactive wedding invitation website using Next.js and React. I focused on building an engaging user interface with features like an RSVP form and photo gallery. This project honed my skills in component-based architecture.",
    year: "2025",
    logo: "/logos/wedding.png",
    important: true,
    pbl: false,
    campus:false,
  },
  
  {
    title: "Sikoper (Coorporate Informatics System)",
    description:
      "Engineered the back-end for a regional e-commerce marketplace using CodeIgniter 3. My tasks included developing core features like product management, user authentication, shopping cart functionality, and order processing. Greatly improved my understanding of the MVC pattern.",
    year: "2024",
    logo: "/logos/bantenplace.png",
    important: false,
    pbl: false,
    campus:true,
  },

  {
    title: "Bantenplace E-commerce",
    description:
      "Engineered the back-end for a regional e-commerce marketplace using CodeIgniter 3. My tasks included developing core features like product management, user authentication, shopping cart functionality, and order processing. Greatly improved my understanding of the MVC pattern.",
    year: "2024",
    logo: "/logos/bantenplace.png",
    important: false,
    pbl: false,
    campus:true,
  },

].sort((a, b) => parseInt(b.year) - parseInt(a.year) || (b.important ? 1 : -1));

const WorkCard = ({ item }: { item: WorkItem }) => (
  <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="flex items-center gap-4 mb-3">
      <img
        src={item.logo}
        alt={`${item.title} logo`}
        className="w-12 h-12 rounded-full object-contain border-2 border-gray-200 dark:border-gray-600 bg-white"
      />
      <div>
        <span className="text-xs font-bold uppercase text-purple-600 dark:text-purple-400 tracking-wider">
          {item.year}
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {item.title}
        </h3>
        {item.pbl && (
           <p className="text-xs font-semibold text-purple-500 dark:text-purple-400/80 mt-1">
             Pemerintah Kelurahan Nuansa Utama, Jimbaran Bali & PBL Project
           </p>
        )}
        {item.campus && (
           <p className="text-xs font-semibold text-purple-500 dark:text-purple-400/80 mt-1">
             Campus Project (Bali State Polytechnic)
           </p>
        )}
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
      {item.description}
    </p>
    <div className="pt-3 border-t border-gray-200 dark:border-gray-700/50 flex items-center">
      {item.important ? (
        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
      ) : (
        <Briefcase className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" />
      )}
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {item.important ? "Major Project" : "Side Project"}
      </span>
    </div>
  </div>
);

export default function MyWorks() {
  return (
    <section id="my-works" className="py-20 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Work{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Roadmap
            </span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="md:hidden flex flex-col gap-8">
          {workItems.map((item, index) => (
            <WorkCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        <div className="hidden md:block relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-y-20">
            {workItems.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-8">
                
                <div className="flex justify-end">
                  {index % 2 === 0 && <WorkCard item={item} />}
                </div>

                <div className="z-10">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 rounded-full shadow-lg border-4 border-gray-50 dark:border-gray-900">
                    {item.important ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
                
                <div className="flex justify-start">
                  {index % 2 !== 0 && <WorkCard item={item} />}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}