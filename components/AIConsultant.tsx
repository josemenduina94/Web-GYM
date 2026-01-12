
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
            <h2 className="text-4xl font-bold mb-6">Coach de Rendimiento <span className="text-red-500">AI</span></h2>
            <p className="text-zinc-400 mb-8 text-lg">
              Obtén un punto de partida personalizado al instante. Cuéntale a nuestro coach inteligente tus metas y nivel actual.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 glass-morphism p-8 rounded-3xl">
              <div>
                <label className="block text-sm font-semibold mb-2">¿Cuál es tu objetivo principal?</label>
                <input 
                  type="text" 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Ej: Ganar músculo, perder peso, correr mi primera 10k..."
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Nivel de Actividad Actual</label>
                <select 
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                >
                  <option>Principiante</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                  <option>Atleta Profesional</option>
                </select>
              </div>
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Diseñando tu plan...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-brain"></i>
                    <span>Generar Recomendación AI</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="min-h-[400px] flex items-center justify-center">
            {result ? (
              <div className="space-y-6 animate-fade-in w-full">
                <div className="relative group overflow-hidden rounded-3xl aspect-video">
                  <img src={result.image} alt="Visualización de Meta" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                </div>
                <div className="glass-morphism p-8 rounded-3xl relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-red-400">
                    <i className="fas fa-lightbulb mr-2"></i> Consejo del Coach
                  </h3>
                  <p className="text-zinc-200 text-xl italic leading-relaxed">"{result.advice}"</p>
                </div>
              </div>
            ) : (
              <div className="text-center p-12 glass-morphism rounded-3xl border-dashed border-2 border-white/10 w-full">
                <div className="bg-zinc-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-robot text-3xl text-red-500"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">¿Preparado para empezar?</h3>
                <p className="text-zinc-500">Completa el formulario para ver tu visualización personalizada y consejos de expertos.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
