
import React from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

const MenuCategory: React.FC<{ title: string; icon: string; items: MenuItem[] }> = ({ title, icon, items }) => (
  <div className="mb-12 md:mb-20">
    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
      <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">{icon}</span>
      <h3 className="text-xl md:text-3xl font-display font-bold tracking-tight">{title}</h3>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
      {items.map(item => (
        <div key={item.id} className="border-b border-primary/10 pb-4 group hover:border-primary/40 transition-colors">
          <div className="flex justify-between items-baseline mb-1 md:mb-2">
            <h4 className="text-base md:text-lg font-bold group-hover:text-primary transition-colors pr-2">{item.name}</h4>
            <span className="text-primary font-bold text-sm md:text-base whitespace-nowrap">${item.price}</span>
          </div>
          {item.size && <p className="text-gray-500 text-[10px] md:text-xs italic">{item.size}</p>}
          {item.description && <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-1 italic line-clamp-2 md:line-clamp-none">{item.description}</p>}
        </div>
      ))}
    </div>
  </div>
);

export const MenuSection: React.FC = () => {
  const categories = [
    { key: 'coffee', title: 'Barra Italiana', icon: 'coffee' },
    { key: 'frappe', title: 'Frappés', icon: 'icecream' },
    { key: 'crepe-savory', title: 'Crepas Saladas', icon: 'restaurant' },
    { key: 'crepe-sweet', title: 'Crepas Dulces', icon: 'cookie' },
    { key: 'burgers', title: 'Hamburguesas', icon: 'lunch_dining' },
  ];

  return (
    <section id="menu" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">El Menú Elixir</h2>
          <div className="w-16 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">Excelencia Seleccionada</p>
        </div>

        {categories.map(cat => (
          <MenuCategory 
            key={cat.key}
            title={cat.title}
            icon={cat.icon}
            items={MENU_DATA.filter(item => item.category === cat.key)}
          />
        ))}

        {/* Traditional Crepes Special Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
            <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">bakery_dining</span>
            <h3 className="text-xl md:text-3xl font-display font-bold tracking-tight">Crepas Tradicionales</h3>
          </div>
          <div className="bg-primary/5 p-6 md:p-8 rounded-xl border border-primary/20 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4 text-center md:text-left">
              <p className="text-xl md:text-2xl font-display font-bold">Base: <span className="text-primary">$59 MXN</span></p>
              <p className="text-[10px] md:text-sm text-gray-400 italic bg-black/40 px-4 py-2 rounded-full">Incluye 2 ingredientes • Extra $10 MXN</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {['Nutella', 'Cajeta', 'Philadelphia', 'Mermelada de fresa', 'Plátano', 'Fresas', 'Nueces', 'Helado de vainilla'].map(ing => (
                <div key={ing} className="flex items-center gap-2 text-gray-400 text-xs md:text-sm hover:text-primary transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full shrink-0"></span>
                  {ing}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
