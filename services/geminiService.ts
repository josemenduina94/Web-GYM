import { GoogleGenAI } from "@google/genai";

// 1. Ponemos la llave directamente. No toques ni una letra de esta línea.
const API_KEY = "AIzaSyAPYUfRNmwWDJBxHt3Fg_oQqzlr49dwhQ";

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    // 2. Inicializamos el motor con la llave directa
    const genAI = new GoogleGenAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como el Head Coach de Forza Cangas, experto con 20 años de experiencia.
    Un cliente con nivel "${activityLevel}" quiere lograr: "${goal}".

    Tu misión es darle una respuesta de 400 PALABRAS detallando:
    1. ANÁLISIS BIOMECÁNICO.
    2. PROGRAMACIÓN EN EL BOX.
    3. NUTRICIÓN Y RECUPERACIÓN.
    4. MINDSET.
    5. CIERRE MOTIVACIONAL GALLEGO.

    Usa un tono épico, técnico y profesional en ESPAÑOL.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Error crítico:", error);
    return "¡En Forza Cangas no nos rendimos! El sistema está ajustando tu plan, intenta pulsar el botón de nuevo o refresca la página.";
  }
}

export async function generateGoalVisual(goal: string) {
  return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
}

export async function generateHeroImage() {
  return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
