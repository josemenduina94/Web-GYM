import { GoogleGenAI } from "@google/genai";

// 1. Formato exacto que NO te da pantalla negra
const genAI = new GoogleGenAI("AIzaSyAPYUfRNmwWDJBxHt3Fg_oQqzlr49dwhQ");

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    // 2. Usamos la forma más básica de llamar al modelo
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como el Head Coach de Forza Cangas.
    Explica de forma EXTENSA (400 palabras) cómo lograr este objetivo: ${goal}.
    Nivel del atleta: ${activityLevel}.
    Incluye Biomecánica, Nutrición y Mentalidad. Tono épico y profesional.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Error:", error);
    // 3. He quitado el texto repetitivo. Si falla, te dirá el error real.
    return "Error al conectar con el Coach: " + error.message;
  }
}

export async function generateGoalVisual(goal: string) {
  const g = goal.toLowerCase();
  if (g.includes('musculo') || g.includes('fuerza') || g.includes('peso')) {
    return 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800';
  }
  return 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800';
}

export async function generateHeroImage() {
  return 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1920';
}
