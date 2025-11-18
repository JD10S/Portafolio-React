// src/components/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  {
    date: 'Marzo 2025 - Presente',
    title: 'Fullstack Freelance • GymPro Web (Laravel)',
    desc: 'Sistema web full Laravel 11 + Livewire + FilamentPHP para gestión de membresías, asistencia por QR, clases, pagos recurrentes y panel admin. Incluye app móvil con React Native + Expo. Despliegue en producción con Forge + Vapor.',
  },

  {
    date: 'Junio 2024 - Presente',
    title: 'Fullstack Freelance • PrimeVideo Clone (HTML + Laravel API)',
    desc: 'Réplica completa de Amazon Prime Video con +15 pantallas responsive. Frontend puro con HTML5, Bootstrap 5 y JavaScript (carruseles infinitos, reproductor personalizado, "Continuar viendo"). Backend en desarrollo con Laravel 11 + Sanctum + API REST para autenticación y datos dinámicos.',
  },

  {
    date: 'Enero 2023 - Presente',
    title: 'Fullstack Freelance • GymFit Pro (C# .NET Desktop)',
    desc: 'Desarrollo completo de aplicación de escritorio para gestión de gimnasios en C# .NET 8 WinForms.',
  },
  
  {
    date: 'Enero 2021 - Diciembre 2022',
    title: 'Auxiliar de Sistemas Amedi IPS',
    desc: 'Administración de base de datos SQL Server para plataformas web internas,Soporte técnico nivel 2 y capacitación a +80 usuarios,Mantenimiento preventivo y correctivo de +50 equipos (PC, servidores, impresoras).',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-left md:text-4xl font-bold text-white mb-12 text-center"
        >
          Experiencia Profesional
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-6"
            >
             
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 shadow-lg" />
                {i < experiences.length - 1 && (
                  <div className="w-0.5 h-32 bg-gradient-to-b from-blue-500 to-transparent mt-2" />
                )}
              </div>

           
              <div className="flex-1 bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-600">
                <p className="text-blue-400 text-sm font-medium mb-1">{exp.date}</p>
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}