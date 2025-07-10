
import { FaReact, FaBootstrap, FaLaravel, FaGithub, FaFigma} from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiTailwindcss, SiCodeigniter, SiMysql, SiNextdotjs, SiNpm, SiComposer, SiJavascript } from "react-icons/si";
import { MdOutlinePeople, MdAccessTime, MdTipsAndUpdates, MdHandshake, MdQuestionAnswer } from "react-icons/md";

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Skills
            </span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><FaReact className="text-purple-500" /> React</li>
              <li className="flex items-center gap-2"><SiJavascript className="text-yellow-500" /> JavaScript</li>
              <li className="flex items-center gap-2"><FaBootstrap className="text-purple-700" /> Bootstrap CSS</li>
              <li className="flex items-center gap-2"><SiTailwindcss className="text-cyan-500" /> Tailwind CSS</li>
            </ul>
          </div>

          <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><SiCodeigniter className="text-orange-500" /> CodeIgniter</li>
              <li className="flex items-center gap-2"><FaLaravel className="text-red-600" /> Laravel</li>
              <li className="flex items-center gap-2"><SiMysql className="text-blue-500" /> MySQL / SQLite</li>
              <li className="flex items-center gap-2"><SiNextdotjs className="text-black dark:text-white" /> Next.js</li>
            </ul>
          </div>

          <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><FaGithub className="text-gray-800 dark:text-gray-100" /> Git & GitHub</li>
              <li className="flex items-center gap-2"><FaCode className="text-blue-500" /> VS Code</li>
              <li className="flex items-center gap-2"><FaFigma className="text-pink-500" /> Figma</li>
              <li className="flex items-center gap-2"><SiNpm className="text-red-500" /> npm / yarn</li>
              <li className="flex items-center gap-2"><SiComposer className="text-indigo-500" /> Composer</li>
            </ul>
          </div>

          <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><MdQuestionAnswer className="text-green-500" /> Communication</li>
              <li className="flex items-center gap-2"><MdTipsAndUpdates className="text-green-500" /> Problem Solving</li>
              <li className="flex items-center gap-2"><MdHandshake className="text-green-500" /> Teamwork</li>
              <li className="flex items-center gap-2"><MdAccessTime className="text-green-500" /> Time Management</li>
              <li className="flex items-center gap-2"><MdOutlinePeople className="text-green-500" /> Adaptability</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
