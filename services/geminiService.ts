import { GoogleGenAI } from "@google/genai";

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    // 1. Obtener la llave y configurar el cliente
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) throw new Error("API Key no encontrada en Vercel");

    const genAI = new GoogleGenAI(apiKey);
    
    // 2. Usar el modelo 1.5-flash
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como el Head Coach de Forza Cangas. 
    Cliente nivel: ${activityLevel}. Objetivo: ${goal}.
    
    PROPORCIONA UNA RESPUESTA DE 400 PALABRAS:
    1. ANÁLISIS BIOMECÁNICO.
    2. PROGRAMACIÓN EN FORZA CANGAS.
    3. NUTRICIÓN Y RECUPERACIÓN.
    4. MINDSET.
    5. CIERRE CON FUERZA GALLEGA.

    Responde en ESPAÑOL, con tono épico y profesional.`;

    // 3. Ejecutar la petición
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;

  } catch (error: any) {
    console.error("Error crítico:", error);
    return `Lo sentimos, el Coach está atendiendo a un atleta. (Error: ${error.message}). ¡Reintenta ahora!`;
  }
}

export async function generateGoalVisual(goal: string) {
  return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
}

export async function generateHeroImage() {
  return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
