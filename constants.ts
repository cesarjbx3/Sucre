
import { MenuItem } from './types';

export const MENU_DATA: MenuItem[] = [
  // Coffee
  { id: 'c1', name: 'Espresso doble', price: 35, size: '4oz', category: 'coffee' },
  { id: 'c2', name: 'Café americano', price: 40, size: '12oz', category: 'coffee' },
  { id: 'c3', name: 'Café cortado', price: 45, size: '12oz', category: 'coffee' },
  { id: 'c4', name: 'Flat white', price: 49, size: '8oz', category: 'coffee' },
  { id: 'c5', name: 'Cappuccino', price: 49, size: '10oz', category: 'coffee' },
  { id: 'c6', name: 'Latte', price: 55, size: '12oz', category: 'coffee' },
  { id: 'c7', name: 'Mocha', price: 60, size: '12oz', category: 'coffee' },
  
  // Frappes
  { id: 'f1', name: 'Moka', price: 75, category: 'frappe' },
  { id: 'f2', name: 'Caramelizada', price: 75, category: 'frappe' },
  { id: 'f3', name: 'Nutella', price: 75, category: 'frappe' },
  { id: 'f4', name: 'Clásico de Café', price: 75, category: 'frappe' },
  { id: 'f5', name: 'Cajeta', price: 75, category: 'frappe' },

  // Savory Crepes
  { id: 'cs1', name: 'Crepa del chef', price: 95, description: 'Combinación de jamón de pierna, queso gouda, champiñones frescos y un toque de crema.', category: 'crepe-savory' },
  { id: 'cs2', name: 'Crepa bretonne', price: 85, description: 'Queso de cabra, espinacas frescas, nuez y miel de abeja.', category: 'crepe-savory' },

  // Sweet Crepes
  { id: 'cd1', name: 'Crepa suzette', price: 79, description: 'Fresas en caramelo de limón terminado en un flameado con mantequilla y ron, coronado con helado de vainilla.', category: 'crepe-sweet' },
  { id: 'cd2', name: 'Crepa delicia', price: 65, description: 'Mantequilla, canela y azúcar con nueces decorada con cajeta.', category: 'crepe-sweet' },

  // Burgers
  { id: 'b1', name: 'Hamburguesa clásica', price: 95, description: '100 gr de carne de res, queso gouda, pepinillos y papas.', category: 'burgers' },
  { id: 'b2', name: 'Hamburguesa doble', price: 125, description: 'Doble carne de res de alta calidad con el sazón de la casa.', category: 'burgers' },
  { id: 'b3', name: 'Papas a la francesa', price: 55, description: '300 gramos de papas crujientes sazonadas.', category: 'burgers' },
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', icon: 'photo_camera', url: '#' },
  { name: 'Facebook', icon: 'share', url: '#' },
];
