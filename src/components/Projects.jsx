// src/components/Projects.jsx
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

const projects = [
  {
    img: '/public/proyecto1.png',
    title: 'GymPro - Sistema de Gestión para Gimnasios Web',
    desc: 'Sistema completo en Laravel 11 + Livewire + FilamentPHP para gestión de membresías, pagos, asistencia por QR, clases y reportes. Incluye panel admin y app móvil con Expo.',
    tech: ["Laravel", "Livewire", "Filament", "MySQL", "Tailwind", "React Native"],
    demo: '#',
    repo: 'https://github.com/JD10S/gym_web'
  },
  {
    img: '/public/proyecto2.png',
    title: 'PrimeVideo Clone - Plataforma de Streaming Completa',
    desc: 'Réplica exacta de Amazon Prime Video con más de 15 pantallas. Reproductor de video personalizado, carruseles infinitos, categorías, búsqueda con filtros.',
    tech: ["HTML5", "Bootstrap 5", "LocalStorage", "Laravel 11", "MySQL", "API REST"],
    demo: '#',
    repo: '#'
  },
  {
    img: '/public/proyecto3.png',
    title: 'GymFit  (App de Escritorio)',
    desc: 'Desarrollada en C# .NET 8 con Windows Forms. Gestiona membresías, pagos,incluye base de datos local con SQL Server Express y sistema de backups automáticos.',
    tech: ["C#", ".NET 8", "Windows Forms", "SQL Server Express", "Entity Framework Core"],
    demo: '#',
    repo: 'https://github.com/JD10S/GymApp'
  },
 
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-left md:text-4xl font-bold text-white mb-12 text-center"
        >
          Proyectos Destacados
        </motion.h2>

        <Slider {...sliderSettings}>
          {projects.map((p, i) => (
            <div key={i} className="px-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-600/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={p.demo}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Demo
                    </a>
                    <a
                      href={p.repo}
                      className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Repositorio
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}