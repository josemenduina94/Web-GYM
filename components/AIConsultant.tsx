
import React, { useState } from 'react';
import { generateFitnessAdvice, generateGoalVisual } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('Intermedio');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ advice: string; image: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;
    
    setLoading(true);
    try {
      const [advice, image] = await Promise.all([
        generateFitnessAdvice(goal, level),
        generateGoalVisual(goal)
      ]);
      setResult({ advice, image });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consult" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Coach de Rendimiento <span className="text-red-500">AI</span></h2>
            <p className="text-zinc-400 mb-8 text-lg">
              Recibe asesoría profesional inmediata. Cuéntale a nuestra IA tus objetivos en Forza Cangas y diseñaremos tu visualización.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 glass-morphism p-10 rounded-[2.5rem] border border-red-500/20 shadow-2xl">
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase text-zinc-500 tracking-widest ml-1">¿Cuál es tu objetivo?</label>
                <input 
                  required
                  type="text" 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Ej: Perder 5kg, peso muerto 200kg..."
                  className="w-full bg-zinc-800 border border-white/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-white font-medium"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase text-zinc-500 tracking-widest ml-1">Nivel de Condición Física</label>
                <select 
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-white font-medium appearance-none"
                >
                  <option>Principiante</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                  <option>Atleta de Élite</option>
                </select>
              </div>
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 py-5 rounded-2xl font-black text-lg uppercase tracking-tighter transition-all flex items-center justify-center space-x-3 disabled:opacity-50 shadow-xl shadow-red-600/20"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Analizando Meta...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-bolt"></i>
                    <span>Ver mi Futuro Yo</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="min-h-[450px] flex items-center justify-center">
            {result ? (
              <div className="space-y-6 animate-fade-in w-full">
                <div className="relative group overflow-hidden rounded-[2.5rem] aspect-video shadow-2xl border border-white/10">
                  <img src={result.image} alt="Tu Meta" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <span className="bg-red-600 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">IA Generada</span>
                  </div>
                </div>
                <div className="glass-morphism p-8 rounded-[2rem] relative overflow-hidden border border-red-500/30">
                  <h3 className="text-sm font-black mb-4 flex items-center text-red-500 uppercase tracking-widest">
                    <i className="fas fa-brain mr-3"></i> Análisis de rendimiento
                  </h3>
                  <p className="text-zinc-200 text-xl font-medium leading-relaxed italic">"{result.advice}"</p>
                </div>
              </div>
            ) : (
              <div className="text-center p-16 glass-morphism rounded-[2.5rem] border-2 border-dashed border-white/10 w-full group transition-all hover:border-red-500/30">
                <div className="bg-zinc-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner transform group-hover:scale-110 transition-transform">
                  <i className="fas fa-robot text-4xl text-red-500"></i>
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Tu transformación inicia aquí</h3>
                <p className="text-zinc-500 max-w-xs mx-auto text-sm leading-relaxed">
                  Utiliza el formulario de la izquierda para generar una visualización realista de tus objetivos y recibir consejos personalizados.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
