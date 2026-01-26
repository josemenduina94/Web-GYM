
import React from 'react';

const Navbar: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <i className="fas fa-dumbbell text-xl"></i>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">FORZA<span className="text-red-500">CANGAS</span></span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="hover:text-red-500 transition-colors cursor-pointer">Servicios</a>
              <a href="#horarios" onClick={(e) => handleNavClick(e, 'horarios')} className="hover:text-red-500 transition-colors cursor-pointer">Horarios</a>
              <a href="#equipo" onClick={(e) => handleNavClick(e, 'equipo')} className="hover:text-red-500 transition-colors cursor-pointer">Equipo</a>
              <a href="#tarifas" onClick={(e) => handleNavClick(e, 'tarifas')} className="hover:text-red-500 transition-colors cursor-pointer">Tarifas</a>
              <a href="#ai-consult" onClick={(e) => handleNavClick(e, 'ai-consult')} className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold transition-all cursor-pointer">IA Coach</a>
            </div>
          </div>
          <div className="md:hidden">
            <i className="fas fa-bars text-2xl"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
