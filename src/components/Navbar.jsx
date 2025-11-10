// src/components/Navbar.jsx
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Acerca de', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Nombre */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">JP</span>
          </div>
          <h1 className="text-xl font-bold text-white">Jeffer Peralta</h1>
        </div>

        {/* Enlaces (ocultos en móvil) */}
        <ul className="hidden md:flex space-x-8 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón Descargar CV */}
        <a
          href="/cv/cv-jeffer-doria.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/25 flex items-center gap-2"
        >
          <span>Descargar CV</span>
        </a>
      </div>
    </nav>
  );
}