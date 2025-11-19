// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; 
import { FaWhatsapp } from "react-icons/fa";



const SERVICE_ID = 'service_xucxh1s';      
const TEMPLATE_ID = 'template_fzhgkhc';    
const PUBLIC_KEY = 'bQlR90Ze78_kTY6VK';         


emailjs.init(PUBLIC_KEY);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const formRef = useRef(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current)
      .then((result) => {
        setStatus('¡Mensaje enviado! Te responderé pronto.');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        setStatus('Error al enviar. Intenta de nuevo.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800/60 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-700/50"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">

            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Hablemos
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                ¿Tienes un proyecto en mente o quieres conectar? Envíame un mensaje o encuéntrame en mis redes sociales.
              </p>

             <div className="flex gap-6 text-gray-400">
  <a
    href="https://github.com/JD10S"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    <Github size={28} />
  </a>

  <a
    href="https://www.linkedin.com/in/jeffer-peralta-b07486213"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    <Linkedin size={28} />
  </a>

  <a
    href="https://wa.me/573002029380?text=¡Hola!%20Me%20interesa%20contactarte."
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-400 transition"
  >
    <FaWhatsapp size={28} />
  </a>
</div>
            </div>

           
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-6 py-4 bg-gray-700/70 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-6 py-4 bg-gray-700/70 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base"
                required
              />
              <textarea
                name="message"
                placeholder="Tu Mensaje"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-6 py-4 bg-gray-700/70 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-base"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3.5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-500/40 text-base"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </motion.div>

        
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-green-400 font-medium text-lg"
          >
            {status}
          </motion.p>
        )}
      </div>
    </section>
  );
}