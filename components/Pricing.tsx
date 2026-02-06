
import React from 'react';
import { PRICING_PLANS } from '../constants';

interface PricingProps {
  onJoin: (planName: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onJoin }) => {
  return (
    <section id="tarifas" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Planes de <span className="text-red-500">Socio</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Tarifas transparentes sin permanencia ni costes ocultos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map(plan => (
            <div 
              key={plan.id} 
              className={`relative p-8 rounded-[2.5rem] border flex flex-col transition-all duration-500 hover:translate-y-[-8px] ${
                plan.isPopular ? 'bg-red-600/5 border-red-500 shadow-2xl shadow-red-500/10' : 'bg-zinc-900 border-white/10 shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Más Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-black mb-2 uppercase">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-black tracking-tighter">{plan.price}€</span>
                  <span className="text-zinc-500 font-bold">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-zinc-300 text-sm">
                    <i className="fas fa-check text-red-500 mr-3 text-xs"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onJoin(`Plan ${plan.name}`)}
                className={`w-full py-5 rounded-2xl font-black uppercase transition-all ${
                  plan.isPopular ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                Unirme a Forza
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
