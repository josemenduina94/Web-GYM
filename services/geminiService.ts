import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";

// 1. Inicialización ultra-segura
const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  // 2. Simplificamos el prompt un poco para descartar que sea por exceso de texto
  const prompt = `Actúa como el Head Coach de Forza Cangas. 
  Cliente nivel: ${activityLevel}. Objetivo: ${goal}.
  
  PROPORCIONA UNA RESPUESTA DE 400 PALABRAS:
  1. ANÁLISIS BIOMECÁNICO.
  2. PROGRAMACIÓN EN FORZA CANGAS.
  3. NUTRICIÓN Y RECUPERACIÓN.
  4. MINDSET.
  5. CIERRE CON FUERZA GALLEGA.

  Responde en ESPAÑOL, con tono épico y profesional.`;

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      ],
    });

    const result = await model.generateContent(prompt);
    
    // 3. Verificación de seguridad
    if (!result || !result.response) {
      throw new Error("No hay respuesta del modelo");
    }

    const response = await result.response;
    return response.text();

  } catch (error: any) {
    // Esto imprimirá el error real en la consola de tu navegador (F12)
    console.error("ERROR DETALLADO:", error);
    
    // Si el error dice "API_KEY_INVALID", es que la llave está mal copiada
    return `Error técnico: ${error.message || 'Consulta la consola'}. En Forza Cangas no nos rendimos, ¡reintenta!`;
  }
}

export async function generateGoalVisual(goal: string) {
  return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
}

export async function generateHeroImage() {
  return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
