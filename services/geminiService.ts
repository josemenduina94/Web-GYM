
import { GoogleGenAI } from "@google/genai";

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    // Inicialización limpia según las directrices del SDK. 
    // Se asume que process.env.API_KEY está disponible en el entorno de ejecución.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `Actúa como el Head Coach de Forza Cangas (Cangas do Morrazo, Galicia).
    ATLETA: Nivel ${activityLevel}. 
    OBJETIVO: ${goal}.

    Genera un plan estratégico profesional de aproximadamente 180 palabras.
    
    REGLAS DE CONTENIDO (ESTRICTO):
    1. ANÁLISIS TÉCNICO: Evaluación profesional para nivel ${activityLevel}.
    2. PROGRAMA FORZA: Define 3 pilares clave. PROHIBIDO usar la palabra 'Metcons'. Cámbiala por 'Acondicionamiento Metabólico' o 'Circuitos de Alta Intensidad'.
    3. NUTRICIÓN: Un consejo nutricional de alto impacto para el objetivo: ${goal}.
    4. MENSAJE FINAL: Termina con una frase potente y motivadora de Cangas. NO incluyas encabezados ni etiquetas como "MENSAJE FINAL".

    ESTILO: Español de España, tono enérgico, profesional y experto. Sin anglicismos innecesarios.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    // Uso de la propiedad .text directamente como especifica la documentación del SDK
    const text = response.text;
    
    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    return text;
  } catch (error) {
    console.error("Error en Coach AI:", error);
    // Fallback de alta calidad para asegurar que la web siempre sea funcional
    return `¡Atleta! En Forza Cangas priorizamos tu objetivo de "${goal}". Para tu nivel ${activityLevel}, nuestra recomendación inmediata es centrar el trabajo en la fuerza base, la técnica de levantamiento y la recuperación activa. Pásate por el box en Cangas hoy mismo para una valoración física completa y personalizada con nuestro equipo. ¡Fuerza!`;
  }
}

export async function generateGoalVisual(goal: string) {
  // Se utilizan imágenes de stock de alta calidad para garantizar estabilidad y tiempos de carga óptimos
  return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
}

export async function generateHeroImage() {
  // Imagen de alta gama para la identidad visual de Forza Cangas
  return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
