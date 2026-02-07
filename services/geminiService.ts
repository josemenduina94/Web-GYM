import { GoogleGenAI } from "@google/genai";

// 1. IMPORTANTE: He cambiado la forma de inicializarlo ligeramente
const genAI = new GoogleGenAI("AIzaSyAPYUfRNmwWDJBxHt3Fg_oQqzlr49dwhQ");

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    // 2. Usamos el modelo directamente con la constante genAI
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Eres el Head Coach de Forza Cangas. 
    Escribe un plan de 400 palabras para un atleta nivel ${activityLevel} que busca: ${goal}.
    
    ESTRUCTURA OBLIGATORIA:
    1. BIOMECÁNICA del ${goal}.
    2. RUTINA EN FORZA CANGAS.
    3. NUTRICIÓN PRO.
    4. MENTALIDAD GALLEGA.
    
    Sé muy técnico, usa términos de gimnasio y sé muy motivador. Que cada respuesta sea única.`;

    // 3. Este es el método que no debería fallar
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });
    
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Error real de la IA:", error);
    // Si falla, al menos intentamos que el mensaje de error sea dinámico
    return `¡A tope, Coach! Para lograr "${goal}", necesitamos que el sistema de Forza Cangas se reinicie. Intenta darle al botón de nuevo, que el servidor ha fallado en el último levantamiento.`;
  }
}

export async function generateGoalVisual(goal: string) {
  const g = goal.toLowerCase();
  if (g.includes('musculo') || g.includes('fuerza') || g.includes('peso muerto')) {
    return 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800';
  }
  if (g.includes('grasa') || g.includes('perder')) {
    return 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800';
  }
  return 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800';
}

export async function generateHeroImage() {
  return 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1920';
}
