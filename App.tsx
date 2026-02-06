
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIConsultant from './components/AIConsultant';
import Schedule from './components/Schedule';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';

const App: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: ''
  });

  const openModal = (title: string) => {
    setModalState({ isOpen: true, title });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <main>
        {/* Sección de Servicios */}
        <section id="servicios" className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Experiencia <span className="text-red-500">Forza</span></h2>
              <p className="text-zinc-500 mt-4">Instalaciones de nivel mundial para resultados excepcionales.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 hover:border-red-500/30 transition-all shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Equipamiento Élite" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Equipamiento de Élite</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">Entrena con maquinaria Hammer Strength y Technogym, diseñada para la máxima eficiencia biomecánica.</p>
                </div>
              </div>
              <div className="group rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 hover:border-red-500/30 transition-all shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Entrenamiento Personal" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Coaching Personalizado</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">Nuestros entrenadores en Cangas diseñan programas específicos para tus necesidades y objetivos reales.</p>
                </div>
              </div>
              <div className="group rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 hover:border-red-500/30 transition-all shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Zona Funcional" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Zona Funcional y HIIT</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">Espacios amplios y equipados para el entrenamiento metabólico y de alta intensidad más dinámico.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Schedule onReserve={() => openModal('Reservar Clase')} />
        <Trainers />
        <Pricing onJoin={(plan) => openModal(plan)} />
        
        <AIConsultant />
        
        {/* Llamada a la acción final */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20" alt="Gym background" />
             <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">¿LISTO PARA TU <br/><span className="text-red-500">MEJOR VERSIÓN?</span></h2>
            <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">Prueba Forza Cangas durante 7 días totalmente gratis. Sin compromisos, solo resultados.</p>
            <button 
              onClick={() => openModal('7 Días Gratis')}
              className="inline-block px-12 py-5 bg-white text-zinc-950 font-black rounded-2xl text-xl hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-2xl"
            >
              RESERVAR PRUEBA GRATIS
            </button>
          </div>
        </section>
      </main>

      <Footer />
      
      <LeadModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        title={modalState.title} 
      />
    </div>
  );
};

export default App;
