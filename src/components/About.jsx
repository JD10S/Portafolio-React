// src/components/About.jsx
import { motion } from 'framer-motion';
import { TechIcons } from './TechIcons'; // <-- Usa el componente que ya tienes

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto text-center space-y-12">

        {/* Título + Texto */}
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
            Trabajo con PHP y Laravel para construir sistemas robustos y escalables. 
  Entiendo el ecosistema completo: bases de datos, APIs REST, autenticación y despliegue. 
  Me interesa dominar herramientas que resuelvan problemas reales, y con Laravel logro resultados rápidos y de calidad.
          </p>
        </motion.div>

        {/* Título de Tecnologías */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-left font-bold text-white"
        >
          Mis Tecnologías
        </motion.h3>

        {/* Iconos de tecnologías */}
        <TechIcons />
      </div>
    </section>
  );
}