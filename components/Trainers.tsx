
import React from 'react';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  return (
    <section id="equipo" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros <span className="text-red-500">Coaches</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Aprende de expertos dedicados a ayudarte a alcanzar tus picos físicos más altos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TRAINERS.map(trainer => (
            <div key={trainer.id} className="group relative overflow-hidden rounded-3xl bg-zinc-800 border border-white/5">
              <img 
                src={trainer.imageUrl} 
                alt={trainer.name} 
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-red-400 text-sm font-bold tracking-widest uppercase mb-2 block">{trainer.specialty}</span>
                <h3 className="text-2xl font-bold mb-3">{trainer.name}</h3>
                <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {trainer.bio}
                </p>
                <div className="flex space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <a href="#" className="hover:text-red-500"><i className="fab fa-instagram text-xl"></i></a>
                  <a href="#" className="hover:text-red-500"><i className="fab fa-facebook text-xl"></i></a>
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
