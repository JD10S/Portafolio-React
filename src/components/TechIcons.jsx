// src/components/TechIcons.jsx
import { motion } from "framer-motion";


import { 
  FaPhp, 
  FaLaravel, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact,
  FaGitAlt, 
  FaGithub
} from "react-icons/fa6";


import {
  SiMysql,
  SiDotnet,
  SiReact,
  SiTailwindcss
} from "react-icons/si";

const techs = [
  { name: "PHP", Icon: FaPhp, color: "text-indigo-400" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
  { name: "Laravel", Icon: FaLaravel, color: "text-red-500" },
  { name: "MySQL", Icon: SiMysql, color: "text-blue-500" },
  { name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-blue-400" },

  { name: "React", Icon: FaReact, color: "text-cyan-400" },
  { name: "React Native", Icon: SiReact, color: "text-cyan-300" },



  { name: ".NET", Icon: SiDotnet, color: "text-purple-300" },

  { name: "Tailwind", Icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Git", Icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", Icon: FaGithub, color: "text-gray-300" },
];

export const TechIcons = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {techs.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-5 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
        >
          <tech.Icon className={`w-10 h-10 ${tech.color} mb-2`} />
          <span className="text-xs text-gray-300 font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};
