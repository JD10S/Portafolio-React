// src/components/Projects.jsx
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from "react";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false, 
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

const projects = [
  {
    img: '/projects/proyecto1.png',
    title: 'GymPro - Sistema de Gestión para Gimnasios Web',
    desc: 'Sistema completo en Laravel 11 + Livewire + FilamentPHP...',
    tech: ["Laravel", "Livewire", "Filament", "MySQL", "Tailwind", "React Native"],
    demo: '#',
    repo: 'https://github.com/JD10S/gym_web'
  },
  {
    img: '/projects/proyecto2.png',
    title: 'PrimeVideo Clone - Plataforma de Streaming',
    desc: 'Réplica exacta de Amazon Prime Video...',
    tech: ["HTML5", "Bootstrap 5", "LocalStorage", "Laravel 11", "MySQL", "API REST"],
    demo: '#',
    repo: '#'
  },
  {
    img: '/projects/proyecto3.png',
    title: 'GymFit (App de Escritorio)',
    desc: 'Desarrollada en C# .NET 8 con Windows Forms...',
    tech: ["C#", ".NET 8", "Windows Forms", "SQL Server Express", "Entity Framework Core"],
    demo: '#',
    repo: 'https://github.com/JD10S/GymApp'
  },
  {
    img: '/projects/proyecto4.png',
    title: 'Marketplace API – Módulo de Carrito de Compras',
    desc: 'API REST desarrollada en ASP.NET Core que implementa un carrito de compras por usuario. Incluye creación automática del carrito, adición y actualización de productos, cálculo del total y control de integridad referencial en PostgreSQL. Proyecto enfocado en arquitectura por capas y resolución de errores reales de backend.',
    tech: ["ASP.NET Core",
  "C#",
  "PostgreSQL",
  "Npgsql",
  "REST API",
  "Arquitectura en Capas"],
    demo: 'https://vercel.com/jd10s-projects/marketplace-react-frontend/38JAx9jsDj9ouS8TrHEBqmTRtEtL',
    repo: 'https://github.com/JD10S/marketplace-dotnet-backend'
  },
];

export default function Projects() {
  const sliderRef = useRef(null);

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Proyectos Destacados
        </motion.h2>

        <div className="relative">

         

          <Slider ref={sliderRef} {...sliderSettings}>
            {projects.map((p, i) => (
              <div key={i} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
                >
                  <div className="relative">
                    <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
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
                      <a href={p.demo} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Demo
                      </a>
                      <a href={p.repo} className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Repositorio
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          
          <div className="flex md:hidden justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="bg-gray-700/80 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              onClick={next}
              className="bg-gray-700/80 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg"
            >
              <ChevronRight size={26} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
