
import React, { useState } from 'react';
import { CLASSES } from '../constants';

interface ScheduleProps {
  onReserve: () => void;
}

const Schedule: React.FC<ScheduleProps> = ({ onReserve }) => {
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
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Horario de <span className="text-red-500">Clases</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Desde circuitos de alta intensidad hasta recuperación consciente, encuentra la clase perfecta para tu ritmo de vida en Cangas.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all ${
                activeDay === day ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredClasses.length > 0 ? (
            filteredClasses.map(item => (
              <div key={item.id} className="glass-morphism p-6 rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between group hover:border-red-500/50 transition-all">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="text-4xl font-black text-red-500 w-28 tracking-tighter">{item.time}</div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-red-400 transition-colors">{item.name}</h3>
                    <p className="text-zinc-500 flex items-center text-sm font-medium">
                      <i className="fas fa-user-circle mr-2 text-red-500"></i> {item.instructor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    item.intensity === 'High' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 
                    item.intensity === 'Medium' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' : 'bg-green-500/10 text-green-500 border border-green-500/20'
                  }`}>
                    {getIntensityLabel(item.intensity)}
                  </span>
                  <span className="bg-zinc-800 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black text-zinc-400 uppercase tracking-wider">
                    {item.category === 'Strength' ? 'Fuerza' : item.category}
                  </span>
                  <button 
                    onClick={onReserve}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-2xl transition-all font-black uppercase text-sm"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-zinc-900/50 rounded-[2.5rem] border-2 border-dashed border-white/5">
              <p className="text-zinc-500 italic text-lg">Día de descanso: Gimnasio abierto para entrenamiento libre.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
