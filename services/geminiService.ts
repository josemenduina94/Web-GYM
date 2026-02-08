
import { GoogleGenAI } from "@google/genai";

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    // Create a new instance right before the call to ensure most up-to-date API key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `Actúa como el Head Coach de Forza Cangas (Cangas do Morrazo, Galicia).
    ATLETA: Nivel ${activityLevel}. 
    OBJETIVO: ${goal}.

    Genera un plan estratégico profesional (150-200 palabras).
    
    REGLAS DE CONTENIDO (ESTRICTO):
    1. ANÁLISIS TÉCNICO: Evaluación profesional para nivel ${activityLevel}.
    2. PROGRAMA FORZA: Define 3 pilares clave. PROHIBIDO usar la palabra 'Metcons'. Cámbiala por 'Entrenamiento de Acondicionamiento Metabólico' o 'Circuitos Funcionales de Alta Intensidad'.
    3. NUTRICIÓN: Un consejo nutricional de alto impacto para ${goal}.
    4. MENSAJE FINAL: Termina con una frase potente de Cangas. NO incluyas títulos como "CIERRE MOTIVADOR" ni "MENSAJE FINAL". Escribe la frase directamente como el último párrafo.

    ESTILO: Español de España, tono enérgico, profesional y motivador. Sin anglicismos innecesarios.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
        temperature: 0.75,
      }
    });

    return response.text || "Tu plan está listo. Vamos a por ello en el box.";
  } catch (error) {
    console.error("Error en Coach AI:", error);
    throw error;
  }
}

export async function generateGoalVisual(goal: string) {
  try {
    // Create a new instance right before the call to ensure most up-to-date API key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Professional sports photography, intense athlete training for ${goal}, industrial high-end gym, cinematic lighting, 8k.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "16:9" } }
    });

    // Iterate through all parts to find the image part as recommended
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
  } catch (error) {
    console.error("Error generating goal visual:", error);
    return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
  }
  return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
}

export async function generateHeroImage() {
    try {
        // Create a new instance right before the call to ensure most up-to-date API key
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = "Cinematic high-end gym interior in Galicia, industrial luxury aesthetic, dark with red accents, 4k.";
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: { imageConfig: { aspectRatio: "16:9" } }
        });
        
        // Iterate through all parts to find the image part as recommended
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
              if (part.inlineData) {
                return `data:image/png;base64,${part.inlineData.data}`;
              }
          }
        }
    } catch (e) {
        console.error("Error generating hero image:", e);
        return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
    }
    return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
