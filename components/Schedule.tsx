
import React, { useState } from 'react';
import { CLASSES } from '../constants';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Lunes');
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const filteredClasses = CLASSES.filter(c => c.day === activeDay);

  const getIntensityLabel = (intensity: string) => {
    switch(intensity) {
      case 'High': return 'Alta Intensidad';
      case 'Medium': return 'Intensidad Media';
      default: return 'Baja Intensidad';
    }
  };

  return (
    <section id="horarios" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Horario de <span className="text-red-500">Clases</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Desde circuitos de alta intensidad hasta recuperación consciente, encuentra la clase perfecta para tu ritmo de vida en Cangas.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeDay === day ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredClasses.length > 0 ? (
            filteredClasses.map(item => (
              <div key={item.id} className="glass-morphism p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between group hover:border-red-500/50 transition-all">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="text-2xl font-bold text-red-500 w-32">{item.time}</div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-red-400 transition-colors">{item.name}</h3>
                    <p className="text-zinc-500 flex items-center">
                      <i className="fas fa-user-circle mr-2"></i> {item.instructor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    item.intensity === 'High' ? 'bg-red-500/10 text-red-500' : 
                    item.intensity === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-green-500/10 text-green-500'
                  }`}>
                    {getIntensityLabel(item.intensity)}
                  </span>
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs font-bold text-zinc-300 uppercase">
                    {item.category === 'Strength' ? 'Fuerza' : item.category}
                  </span>
                  <button className="bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white px-6 py-2 rounded-xl transition-all font-bold">
                    Reservar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-white/5">
              <p className="text-zinc-500 italic text-lg">Día de descanso: Gimnasio abierto para entrenamiento libre.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
