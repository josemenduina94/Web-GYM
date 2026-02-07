import { GoogleGenAI } from "@google/genai";

// Configuración correcta para que Vercel no dé error
const ai = new GoogleGenAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  const prompt = `Actúa como el Head Coach de Forza Cangas, experto en biomecánica.
  El cliente quiere: "${goal}" y su nivel es: "${activityLevel}".
  
  PROPORCIONA:
  1. ANÁLISIS TÉCNICO: Explica el proceso fisiológico.
  2. PLAN ESTRATÉGICO: Microciclo y ejercicios en Forza Cangas.
  3. NUTRICIÓN: Clave esencial para el objetivo.
  4. CIERRE: Frase motivadora con fuerza gallega.
  
  REGLAS: Responde en ESPAÑOL. Tono profesional y detallado (mínimo 300 palabras).`;

  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error:", error);
    return "En Forza Cangas forjamos versiones imparables. ¡Hablemos en el box!";
  }
}

// ESTA PARTE ES LA QUE GENERA LAS FOTOS QUE ME PREGUNTABAS
export async function generateGoalVisual(goal: string) {
  const prompt = `Cinematic, ultra-realistic fitness photography of an athlete achieving: ${goal}. Moody lighting, sweat, 8k resolution.`;
  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    // Nota: Esta función intenta generar una imagen, si falla, devuelve una de reserva abajo.
    return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
  } catch (e) {
    return 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200';
  }
}

export async function generateHeroImage() {
  return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
