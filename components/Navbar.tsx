
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <i className="fas fa-dumbbell text-xl"></i>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">FORZA<span className="text-red-500">CANGAS</span></span>
          </div>
          
          <div className="hidden md:flex items-baseline space-x-8">
            <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="hover:text-red-500 transition-colors cursor-pointer font-medium">Servicios</a>
            <a href="#horarios" onClick={(e) => handleNavClick(e, 'horarios')} className="hover:text-red-500 transition-colors cursor-pointer font-medium">Horarios</a>
            <a href="#equipo" onClick={(e) => handleNavClick(e, 'equipo')} className="hover:text-red-500 transition-colors cursor-pointer font-medium">Equipo</a>
            <a href="#tarifas" onClick={(e) => handleNavClick(e, 'tarifas')} className="hover:text-red-500 transition-colors cursor-pointer font-medium">Tarifas</a>
            <button 
              onClick={(e) => handleNavClick(e, 'ai-consult')} 
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-red-500/20"
            >
              IA Coach
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl p-2">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10 p-4 absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="text-lg py-2 border-b border-white/5">Servicios</a>
            <a href="#horarios" onClick={(e) => handleNavClick(e, 'horarios')} className="text-lg py-2 border-b border-white/5">Horarios</a>
            <a href="#equipo" onClick={(e) => handleNavClick(e, 'equipo')} className="text-lg py-2 border-b border-white/5">Equipo</a>
            <a href="#tarifas" onClick={(e) => handleNavClick(e, 'tarifas')} className="text-lg py-2 border-b border-white/5">Tarifas</a>
            <button 
              onClick={(e) => handleNavClick(e, 'ai-consult')} 
              className="bg-red-600 w-full py-4 rounded-xl font-bold"
            >
              IA Coach
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
