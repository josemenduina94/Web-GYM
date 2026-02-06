
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateFitnessAdvice(goal: string, activityLevel: string) {
  const prompt = `Actúa como un Head Coach de alto rendimiento de Forza Cangas, experto en fisiología del ejercicio y psicología deportiva. 
  Un atleta con un nivel de condición física "${activityLevel}" quiere lograr lo siguiente: "${goal}".
  
  Tu tarea es proporcionar una respuesta desarrollada y estructurada que incluya:
  1. Un análisis técnico de por qué ese objetivo es alcanzable para su nivel.
  2. Un enfoque estratégico de entrenamiento (frecuencia, tipo de ejercicios clave).
  3. Un pilar nutricional o de recuperación esencial para este objetivo específico.
  4. Un cierre con un "Grito de Guerra" o frase motivadora gallega/fuerte.
  
  La respuesta debe ser profesional, inspiradora y extensa (mínimo 150 palabras). Usa un tono que demuestre autoridad pero cercanía. Responde siempre en español. No uses negritas excesivas, usa un formato limpio con saltos de línea para que sea fácil de leer.`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // Cambiado a Pro para respuestas más complejas y de mayor calidad
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 4000 } // Añadido presupuesto de pensamiento para mayor profundidad
      }
    });
    return response.text || "¡Tu camino hacia la excelencia comienza con el primer paso! En Forza Cangas te daremos las herramientas para que logres tu mejor versión.";
  } catch (error) {
    console.error("Error generating advice:", error);
    return "Como entrenador, te digo que la constancia supera al talento. Tu objetivo es ambicioso pero perfectamente alcanzable con el plan adecuado. ¡Vente al box y trazaremos la ruta hacia el éxito juntos!";
  }
}

export async function generateGoalVisual(goal: string) {
  const prompt = `A cinematic, ultra-realistic motivational fitness photography of an athlete achieving the goal of "${goal}" in a state-of-the-art gym. Intense lighting, sweat, grit, professional sports photography style, 8k resolution, depth of field.`;
  
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
    console.error("Error generating image:", error);
    return 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200';
  }
}

export async function generateHeroImage() {
    const prompt = "Cinematic wide shot of a modern luxury fitness studio in Galicia, Spain, with sea views from the windows, high-end wooden and metal equipment, warm and neon lighting mix, morning light. 4k resolution.";
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
