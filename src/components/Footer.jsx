// src/components/Footer.jsx
import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
     
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Jeffer Peralta. Todos los derechos reservados.
        </p>

       
        <div className="flex gap-5 text-gray-400">
          <a
            href="https://www.linkedin.com/in/jeffer-peralta-b07486213"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/JD10S"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}