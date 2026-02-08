
import { GoogleGenAI } from "@google/genai";

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `Actúa como el Head Coach de Forza Cangas.
    ATLETA: Nivel ${activityLevel}. 
    OBJETIVO: ${goal}.

    Genera un plan estratégico profesional de aproximadamente 180 palabras.
    
    REGLAS ESTRICTAS:
    1. ANÁLISIS TÉCNICO: Evaluación técnica específica para nivel ${activityLevel}.
    2. PROGRAMA FORZA: Define 3 pilares clave. PROHIBIDO usar la palabra 'Metcons'. Cámbiala por 'Acondicionamiento Metabólico' o 'Circuitos de Alta Intensidad'.
    3. NUTRICIÓN: Un consejo nutricional clave para lograr ${goal}.
    4. MENSAJE FINAL: Termina con una frase potente y motivadora con el espíritu de Cangas. NO incluyas encabezados como "MENSAJE FINAL:" ni títulos adicionales. Escribe la frase como el último párrafo.

    ESTILO: Español de España, tono experto, enérgico y sin anglicismos innecesarios.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
        temperature: 0.7,
      }
    });

    return response.text || "¡Atleta! Tu plan está listo. Vamos a darle duro en el box.";
  } catch (error) {
    console.error("Error en Coach AI:", error);
    // Fallback profesional para que la app siempre funcione
    return `¡Atleta! Tu objetivo de "${goal}" es nuestra prioridad. Para tu nivel ${activityLevel}, en Forza Cangas aplicamos una metodología de progresión controlada. Pásate por el box de Cangas hoy mismo y diseñaremos tu rutina presencialmente para empezar de inmediato con el mejor equipo de Galicia. ¡Fuerza!`;
  }
}

export async function generateGoalVisual(goal: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Professional cinematic fitness photography, athlete achieving ${goal} in a modern industrial gym, dramatic lighting, red accents, 8k.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "16:9" } }
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
  } catch (error) {
    console.error("Error visual:", error);
  }
  return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
}

export async function generateHeroImage() {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = "Wide shot of a cinematic luxury industrial fitness studio, warm lighting, deep red accents, ultra-modern equipment, 4k.";
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: { imageConfig: { aspectRatio: "16:9" } }
        });
        
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
              if (part.inlineData) {
                return `data:image/png;base64,${part.inlineData.data}`;
              }
          }
        }
    } catch (e) {
        console.error("Error hero image:", e);
    }
    return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
