// src/components/TechIcons.jsx
import { motion } from 'framer-motion';
import { 
  FileCode2, 
  Database, 
  Globe, 
  Code2,
  Layers,
  Braces 
} from 'lucide-react';

const techs = [
  { name: 'PHP', Icon: Braces, color: 'text-purple-400' },
  { name: 'JavaScript', Icon: FileCode2, color: 'text-yellow-400' },
  { name: 'Laravel', Icon: Layers, color: 'text-red-500' },
  { name: 'MySQL', Icon: Database, color: 'text-blue-400' },
  { name: 'HTML', Icon: Globe, color: 'text-orange-500' },
  { name: 'CSS', Icon: Code2, color: 'text-blue-600' },
];

export const TechIcons = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
      {techs.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-5 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
        >
          <tech.Icon className={`w-10 h-10 ${tech.color} mb-2`} />
          <span className="text-xs text-gray-300 font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};