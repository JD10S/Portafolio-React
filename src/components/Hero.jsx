// src/components/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tighter whitespace-nowrap">
            Fullstack  Developer
          </h1>
          
          <p className="text-lg text-gray-300 max-w-lg">
            Desarrollo aplicaciones web completas con PHP y Laravel, desde la interfaz hasta la lógica del servidor. 
  Me enfoco en soluciones funcionales, mantenibles y escalables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/30 text-center"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
            >
              Contáctame
            </a>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30 scale-110"></div>
            <img
              src="/foto-perfil.jpg"
              alt="Jeffer Doria"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-gray-800 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}