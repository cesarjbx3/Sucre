

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  size?: string;
  category: 'coffee' | 'frappe' | 'crepe-savory' | 'crepe-sweet' | 'crepe-traditional' | 'burgers';
}

export interface ReservationData {
  name: string;
  date: string;
  time: string;
  guests: number;
  email: string;
}

// Added ChatMessage interface to resolve the missing export error in AIConcierge.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}