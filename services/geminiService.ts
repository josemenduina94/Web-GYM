import { GoogleGenAI } from "@google/genai";

// Usamos la llave directa para asegurar que no falle por variables de entorno
const genAI = new GoogleGenAI("AIzaSyAPYUfRNmwWDJBxHt3Fg_oQqzlr49dwhQ");

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como el Head Coach de Forza Cangas. 
    Un cliente nivel "${activityLevel}" quiere: "${goal}".
    
    Misión: Da una respuesta de 400 PALABRAS en ESPAÑOL con:
    1. ANÁLISIS BIOMECÁNICO detallado.
    2. PROGRAMACIÓN DE ÉLITE en el box.
    3. NUTRICIÓN Y RECUPERACIÓN avanzada.
    4. MINDSET de guerrero.
    5. CIERRE MOTIVACIONAL GALLEGO.
    
    Usa un tono técnico, épico y profesional.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("Error:", error);
    return "¡En Forza Cangas no nos rendimos! El Coach está analizando tu caso. Pulsa el botón de nuevo para recibir tu plan de élite.";
  }
}

// ESTA FUNCIÓN HARÁ QUE LA FOTO CAMBIE SEGÚN EL OBJETIVO
export async function generateGoalVisual(goal: string) {
  const query = goal.toLowerCase();
  
  if (query.includes('musculo') || query.includes('fuerza') || query.includes('ganar')) {
    return 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=1000'; // Foto de pesas/músculo
  } else if (query.includes('grasa') || query.includes('perder') || query.includes('definir')) {
    return 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000'; // Foto de cardio/sudor
  } else if (query.includes('dieta') || query.includes('comer') || query.includes('nutricion')) {
    return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000'; // Foto de comida sana
  }
  
  // Foto por defecto del box
  return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000';
}

export async function generateHeroImage() {
  return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
