
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

/**
 * ChatMessage interface for handling AI Concierge conversation state.
 * Gemini roles are typically 'user' and 'model'.
 */
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
