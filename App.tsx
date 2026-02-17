
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MenuSection } from './components/MenuSection';
import { AIConcierge } from './components/AIConcierge';
import { ReservationModal } from './components/ReservationModal';
import { SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Manejador de scroll suave robusto
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      const offset = 80; // Compensación por el navbar fijo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = menuElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
            alt="Café artesanal" 
            className="w-full h-full object-cover scale-110 animate-subtle-zoom"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl opacity-0 animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
            El Arte del <br/>
            <span className="gold-gradient-text">Café y la Crepa</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Vive la excelencia del café artesanal y las crepas hechas a mano en un santuario de sabor refinado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="#menu" 
              onClick={handleScrollToMenu}
              className="w-full sm:w-auto bg-primary text-black px-12 md:px-16 py-4 md:py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl shadow-primary/20 text-sm md:text-base text-center active:scale-95"
            >
              Ver Menú
            </a>
            <button 
              onClick={() => setIsReservationOpen(true)}
              className="w-full sm:w-auto border border-primary text-primary px-12 md:px-16 py-4 md:py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 text-sm md:text-base text-center active:scale-95"
            >
              Reservar
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <span className="material-symbols-outlined text-primary text-4xl">expand_more</span>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 md:py-24 px-4 md:px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors"></div>
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000" 
                alt="Herencia" 
                className="rounded-lg grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl w-full aspect-video md:aspect-auto object-cover"
              />
              <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors"></div>
            </div>
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <span className="text-primary tracking-[0.4em] uppercase text-xs md:text-sm font-bold block mb-2 text-center lg:text-left">Nuestra Herencia</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-center lg:text-left">
                Elevando lo Simple a lo <span className="text-primary italic font-light">Sublime</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light text-center lg:text-left">
                <p>Nacido de la pasión por las técnicas tradicionales y el lujo moderno, Sucre eleva el placer de un café y una crepa a una experiencia sensorial de alto nivel.</p>
                <p>Cada servicio y cada doblez se elabora con precisión. Seleccionamos granos de origen único y usamos harina orgánica molida en piedra para nuestras masas.</p>
              </div>
              <div className="pt-6 border-t border-primary/10 flex justify-center lg:justify-start">
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="h-[1px] w-8 md:w-16 bg-primary"></span>
                  <span className="font-display italic text-xl md:text-2xl text-primary">La Tradición Sucre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />

      {/* Location & Hours Section */}
      <section id="location" className="py-16 md:py-24 px-4 md:px-6 bg-black border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 items-start">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-primary italic">Ubicación</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">location_on</span>
                  <p className="text-gray-300 leading-relaxed font-light">124 Rue de l'Elixir, Luxury District<br/>Paris, France 75001</p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
                  <p className="text-gray-300 font-light">+33 1 23 45 67 89</p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                  <p className="text-gray-300 font-light">concierge@elixircrepe.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-primary italic">Horarios</h3>
              <div className="space-y-4 text-gray-300 font-light">
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span>Todos los días</span>
                  <span className="text-primary font-bold">18:00 - 23:00</span>
                </div>
                <p className="text-xs text-gray-500 italic mt-4">Abiertos de noche para deleitar tus sentidos.</p>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-primary/20 group md:col-span-2 lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=800" 
                alt="Location View" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-primary/90 text-black px-6 md:px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1 text-sm md:text-base">
                  <span className="material-symbols-outlined">explore</span>
                  Cómo llegar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-4 md:px-6 bg-black border-t border-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">storm</span>
            <span className="text-xl md:text-2xl font-bold tracking-[0.4em] uppercase gold-gradient-text">Sucre</span>
          </div>
          
          <div className="flex gap-6 md:gap-8">
            {SOCIAL_LINKS.map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/20 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
                title={social.name}
              >
                <span className="material-symbols-outlined text-xl md:text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-xs md:text-sm font-light text-center leading-relaxed">
            © 2024 Sucre. Todos los derechos reservados. Crafted for the discerning palate.<br/>
            <span className="text-[10px] md:text-xs mt-2 inline-block opacity-50 italic">Experience Paris in every sip.</span>
          </p>
        </div>
      </footer>

      {/* AI Concierge & Reservation Components */}
      <AIConcierge />
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes subtle-zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-subtle-zoom { animation: subtle-zoom 20s linear infinite alternate; }
        html { scroll-behavior: smooth; }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(192, 160, 96, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(192, 160, 96, 0.4);
        }
      `}</style>
    </div>
  );
};

export default App;
