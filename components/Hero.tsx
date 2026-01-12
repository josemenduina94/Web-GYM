
import React, { useEffect, useState } from 'react';
import { generateHeroImage } from '../services/geminiService';

const Hero: React.FC = () => {
  const [heroImg, setHeroImg] = useState<string>('');

  useEffect(() => {
    generateHeroImage().then(setHeroImg);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImg ? (
          <img 
            src={heroImg} 
            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-[10000ms] ease-linear hover:scale-100" 
            alt="Ambiente Forza Cangas"
          />
        ) : (
          <div className="w-full h-full bg-zinc-900 animate-pulse"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest text-red-400 uppercase bg-red-400/10 border border-red-400/20 rounded-full">
          Entrenamiento de Élite en Cangas
        </span>
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
          LIBERA TU <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">POTENCIAL</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubre un entorno de entrenamiento exclusivo impulsado por tecnología AI y los mejores coaches de O Morrazo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#tarifas" className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-red-500/20">
            Ver Planes de Socio
          </a>
          <a href="#horarios" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all backdrop-blur-md">
            Explorar Clases
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-zinc-500 text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;
