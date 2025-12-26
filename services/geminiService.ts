
import { GoogleGenAI, Type } from "@google/genai";
import { DomainResult, DomainStatus } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const searchDomains = async (query: string): Promise<DomainResult[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Search for domain names related to "${query}". Provide a mix of .com, .net, .io, .ai, .tech, and creative TLDs. For each, determine if it's available or taken (simulate realistically). Return exactly 8 results.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              domain: { type: Type.STRING },
              price: { type: Type.NUMBER },
              status: { 
                type: Type.STRING,
                description: "Must be 'AVAILABLE', 'TAKEN', or 'PREMIUM'"
              },
              isPopular: { type: Type.BOOLEAN }
            },
            required: ["domain", "price", "status"]
          }
        }
      }
    });

    return JSON.parse(response.text) as DomainResult[];
  } catch (error) {
    console.error("Gemini Domain Search Error:", error);
    // Fallback static data if API fails
    return [
      { domain: `${query}.com`, price: 12.99, status: DomainStatus.AVAILABLE },
      { domain: `${query}.io`, price: 45.00, status: DomainStatus.PREMIUM },
      { domain: `${query}.net`, price: 10.99, status: DomainStatus.TAKEN },
      { domain: `get${query}.com`, price: 12.99, status: DomainStatus.AVAILABLE }
    ];
  }
};
