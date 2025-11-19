// src/components/About.jsx
import { motion } from 'framer-motion';
import { TechIcons } from './TechIcons';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto text-center space-y-12">

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl text-left md:text-4xl font-bold text-white">
            Acerca de Mí
          </h2>
          <p className="max-w-3xl text-left text-gray-300 text-lg leading-relaxed">
  Construyo sistemas robustos con {" "}  
   <span className="font-semibold text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]">
     PHP y Laravel
  </span>, aplicando buenas prácticas y patrones de diseño.  
  Domino el ecosistema completo: 
  <span className="font-semibold text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]">
    bases de datos, APIs REST, autenticación {" "}
  </span> 
  y {" "}
  <span className="font-semibold text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.6)]">
    despliegue en producción.
  </span>
</p>
        </motion.div>

      
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-left font-bold text-white"
        >
          Mis Tecnologías
        </motion.h3>

        
        <TechIcons />
      </div>
    </section>
  );
}