
import React from 'react';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  return (
    <section id="equipo" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Nuestro <span className="text-red-500">Equipo</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            En Forza Cangas contamos con los mejores coaches. Profesionales con gran carisma, técnica impecable y siempre con una sonrisa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TRAINERS.map(trainer => (
            <div key={trainer.id} className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-800 border border-white/5 shadow-2xl transition-all hover:border-red-500/30">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.imageUrl} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center md:text-left">
                <span className="text-red-500 text-xs font-black tracking-[0.2em] uppercase mb-2 block">{trainer.specialty}</span>
                <h3 className="text-3xl font-black mb-3">{trainer.name}</h3>
                <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                  {trainer.bio}
                </p>
                <div className="flex justify-center md:justify-start space-x-6 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <a href="#" className="text-white hover:text-red-500 transition-colors"><i className="fab fa-instagram text-xl"></i></a>
                  <a href="#" className="text-white hover:text-red-500 transition-colors"><i className="fab fa-twitter text-xl"></i></a>
                  <a href="#" className="text-white hover:text-red-500 transition-colors"><i className="fab fa-linkedin-in text-xl"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
