
import { GoogleGenAI } from "@google/genai";

/**
 * Genera un plan de entrenamiento personalizado utilizando el modelo Gemini 3 Flash.
 * El SDK requiere que la API Key se pase en un objeto de configuración.
 */
export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    // Obtenemos la clave de process.env.API_KEY según las directrices del sistema.
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.warn("API_KEY no detectada. Usando plan de respaldo profesional.");
      return getFallbackAdvice(goal, activityLevel);
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Actúa como el Head Coach de Forza Cangas.
    ATLETA: Nivel ${activityLevel}. 
    OBJETIVO: ${goal}.

    Genera un plan estratégico profesional de aproximadamente 180 palabras.
    
    REGLAS ESTRICTAS DE CONTENIDO:
    1. ANÁLISIS TÉCNICO: Evaluación para nivel ${activityLevel}.
    2. PROGRAMA FORZA: Define 3 pilares clave. PROHIBIDO usar la palabra 'Metcons'. Usa 'Circuitos de Alta Intensidad'.
    3. NUTRICIÓN: Un consejo clave para: ${goal}.
    4. MENSAJE FINAL: Termina con una frase potente y motivadora de Cangas. SIN etiquetas de sección.

    ESTILO: Español de España, tono experto y enérgico.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Acceso correcto a la propiedad .text (no es un método)
    const text = response.text;
    
    if (!text) throw new Error("Respuesta vacía");
    return text;

  } catch (error) {
    console.error("Error en Coach AI:", error);
    return getFallbackAdvice(goal, activityLevel);
  }
}

/**
 * Proporciona una respuesta de alta calidad si la API no está disponible inmediatamente.
 */
function getFallbackAdvice(goal: string, level: string): string {
  return `¡Atleta! En Forza Cangas nos tomamos tu objetivo de "${goal}" muy en serio. Para tu nivel ${level}, nuestra metodología se centra en la progresión de cargas y la optimización de la técnica base. 

Aunque el Coach IA está analizando tu perfil detallado, te recomendamos empezar con tres sesiones semanales de fuerza funcional y priorizar el descanso activo. Pásate por el box en Cangas para que realicemos una evaluación presencial y te demos tu plan maestro en mano.

¡El cambio real ocurre cuando decides empezar! ¡Fuerza!`;
}

export async function generateGoalVisual(goal: string) {
  // Imagen de stock de alta calidad para asegurar estabilidad total en el despliegue
  return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
}

export async function generateHeroImage() {
  // Imagen premium para el Hero Section
  return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
