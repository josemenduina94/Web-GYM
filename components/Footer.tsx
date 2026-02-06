
import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-red-600 p-2 rounded-lg">
                <i className="fas fa-dumbbell text-xl"></i>
              </div>
              <span className="text-xl font-bold tracking-tighter">FORZA<span className="text-red-500">CANGAS</span></span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Tu centro de referencia en O Morrazo. Combinamos el esfuerzo tradicional gallego con la tecnología de vanguardia.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Enlaces</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-red-400 transition-colors">Sobre nosotros</button></li>
              <li><button onClick={() => scrollTo('equipo')} className="hover:text-red-400 transition-colors">Nuestro Equipo</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-red-400 transition-colors">Instalaciones</button></li>
              <li><button onClick={() => scrollTo('ai-consult')} className="hover:text-red-400 transition-colors">IA Blog & Consejos</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-zinc-500">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-red-500"></i>
                Av. de Eugenio Sequeiros, 42, 36940 Cangas, Pontevedra
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-red-500"></i>
                +34 648 12 34 56
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-red-500"></i>
                forzacangas@gmail.es
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
          <p>© 2026 Forza Cangas Studio. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
