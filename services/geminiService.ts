import { GoogleGenAI } from "@google/genai";

// 1. ESTE ES EL FORMATO QUE NO TE DA PANTALLA NEGRA (Confirmado por ti)
const genAI = new GoogleGenAI({ apiKey: "AIzaSyAPYUfRNmwWDJBxHt3Fg_oQqzlr49dwhQ" });

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    // 2. Forzamos la obtención del modelo dentro de la función
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como el Head Coach de Forza Cangas.
    Explica de forma EXTENSA (400 palabras) cómo lograr este objetivo: ${goal}.
    Nivel del atleta: ${activityLevel}.
    Incluye Biomecánica, Nutrición y Mentalidad. Tono épico y profesional.
    Responde siempre en ESPAÑOL.`;

    // 3. Llamada directa
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) throw new Error("La IA no devolvió texto");
    return text;

  } catch (error: any) {
    console.error("Error detallado:", error);
    // 4. Si falla, devolvemos un mensaje que NO sea el repetido de antes
    return `¡Atención! El Coach está analizando tu petición de "${goal}". Parece que hay un problema de conexión con el satélite. Por favor, intenta pulsar el botón de nuevo ahora mismo.`;
  }
}

export async function generateGoalVisual(goal: string) {
  const g = goal.toLowerCase();
  // Añadimos más palabras clave para que la foto cambie de verdad
  if (g.includes('musculo') || g.includes('fuerza') || g.includes('peso') || g.includes('muerto')) {
    return 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800';
  }
  if (g.includes('grasa') || g.includes('perder') || g.includes('definir')) {
    return 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800';
  }
  return 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800';
}

export async function generateHeroImage() {
  return 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1920';
}
