
import React, { useState } from 'react';
import { ReservationData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    date: '',
    time: '',
    guests: 2,
    email: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-zinc-900 border border-primary/30 rounded-2xl overflow-hidden animate-scale-in">
        {isSuccess ? (
          <div className="p-12 text-center flex flex-col items-center gap-4">
            <span className="material-symbols-outlined text-primary text-6xl animate-bounce">check_circle</span>
            <h3 className="text-2xl font-bold font-display">¡Reserva Exitosa!</h3>
            <p className="text-gray-400">Te hemos enviado un correo de confirmación. Te esperamos pronto en Sucre.</p>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-primary/20 bg-primary/5">
              <h3 className="text-2xl font-display font-bold gold-gradient-text text-center">Reservar una Mesa</h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Nombre Completo</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-black border border-primary/20 rounded-lg p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Fecha</label>
                  <input 
                    required
                    type="date" 
                    className="w-full bg-black border border-primary/20 rounded-lg p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Hora</label>
                  <input 
                    required
                    type="time" 
                    className="w-full bg-black border border-primary/20 rounded-lg p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Número de Personas</label>
                <select 
                  className="w-full bg-black border border-primary/20 rounded-lg p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
                >
                  {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Persona' : 'Personas'}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Correo Electrónico</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-black border border-primary/20 rounded-lg p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-white transition-all mt-4"
              >
                Confirmar Reserva
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
