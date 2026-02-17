import { GoogleGenAI } from "@google/genai";
import { MENU_DATA } from "./constants";

// Inicialización directa según directrices
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el Sommelier de Antojos de "Sucre". 
Tu MISIÓN ÚNICA es ayudar al usuario a elegir qué producto del menú comprar basándote en lo que se le antoje en ese momento.

Reglas de comportamiento:
1. Si el usuario te dice qué se le antoja (ej. "algo dulce", "algo fuerte", "tengo mucha hambre"), debes recomendarle los productos más adecuados de nuestro menú.
2. Menú para recomendaciones: ${JSON.stringify(MENU_DATA)}
3. Si preguntan por horarios: Abrimos TODOS LOS DÍAS de 6:00 PM a 11:00 PM (18:00 - 23:00).
4. No hables de temas que no sean del menú o recomendaciones de comida/bebida de Sucre.
5. Sé persuasivo, elegante y muy descriptivo con los sabores.
6. Mantén las respuestas cortas y enfocadas en la venta.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });
    return response.text || "Lo siento, tuve un problema procesando tu solicitud. ¿Qué se te antoja hoy?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "En este momento no puedo darte recomendaciones, pero nuestro menú de crepas y café te encantará.";
  }
};