
import { GoogleGenAI } from "@google/genai";

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  // Inicializamos dentro de la función para asegurar que process.env.API_KEY esté disponible
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Actúa como el Head Coach de Forza Cangas.
  ATLETA: Nivel ${activityLevel}. 
  OBJETIVO: ${goal}.

  Genera un plan estratégico de alto impacto (150-200 palabras).
  
  REQUISITOS OBLIGATORIOS:
  1. ANÁLISIS DEL OBJETIVO: Una valoración técnica para alguien de nivel ${activityLevel}.
  2. PROGRAMA FORZA: 3 pilares de entrenamiento. PROHIBIDO usar la palabra 'Metcons'. Usa 'Acondicionamiento Metabólico' o 'Circuitos de Alta Intensidad'. Todo en español.
  3. NUTRICIÓN: Un consejo nutricional clave.
  4. CIERRE: Una frase motivadora potente con el espíritu de Cangas. NO incluyas títulos como "CIERRE MOTIVADOR", "MENSAJE FINAL" ni asteriscos de encabezado para esta frase; simplemente escríbela al final.

  ESTILO: Profesional, experto, directo y en español puro.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
        temperature: 0.7,
        maxOutputTokens: 1000 // Suficiente para evitar que el texto se corte
      }
    });

    return response.text || "¡Atleta! Tu plan está listo. Vamos a darle duro en el box.";
  } catch (error) {
    console.error("Error en Coach AI:", error);
    if (error.message?.includes("entity was not found")) {
      // Si hay error de proyecto/llave, el sistema externo pedirá re-selección si fuera necesario
    }
    return `¡Atleta! Tu objetivo de "${goal}" es posible. En Forza Cangas tenemos la metodología para lograrlo. Pásate por el box de Cangas y diseñaremos tu rutina presencialmente para empezar hoy mismo. ¡Fuerza!`;
  }
}

export async function generateGoalVisual(goal: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Professional cinematic fitness photography, athlete achieving ${goal} in Forza Cangas gym, dramatic lighting, 8k.`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
  } catch (error) {
    return 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200';
  }
}

export async function generateHeroImage() {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = "Cinematic wide shot of a modern luxury industrial fitness studio, warm lighting, 4k.";
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: { imageConfig: { aspectRatio: "16:9" } }
        });
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
        }
    } catch (e) {
        return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
    }
    return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920';
}
