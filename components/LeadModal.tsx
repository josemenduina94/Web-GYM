
import React, { useState } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, title }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-[2.5rem] shadow-2xl p-8 overflow-hidden">
        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
          <i className="fas fa-times text-xl"></i>
        </button>

        {step === 'form' ? (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{title}</h3>
            <p className="text-zinc-400 mb-8 text-sm">Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-1 ml-1">Nombre Completo</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-zinc-800 border border-white/5 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="Tu nombre..."
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-1 ml-1">Correo Electrónico</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-zinc-800 border border-white/5 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="ejemplo@gmail.es"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-1 ml-1">Teléfono</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-zinc-800 border border-white/5 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="648..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-red-600/20 mt-4"
              >
                ENVIAR SOLICITUD
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-10 animate-fade-in">
            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">¡Solicitud Recibida!</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Gracias, <span className="text-white font-bold">{formData.name}</span>. Nos pondremos en contacto contigo en las próximas 24 horas para finalizar tu reserva.
            </p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-bold transition-all"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
