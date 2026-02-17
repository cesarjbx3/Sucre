
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  size?: string;
  category: 'coffee' | 'frappe' | 'crepe-savory' | 'crepe-sweet' | 'crepe-traditional' | 'burgers';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ReservationData {
  name: string;
  date: string;
  time: string;
  guests: number;
  email: string;
}
