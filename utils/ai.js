import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
    systemInstruction: "You are a strict data extractor. Return ONLY the single most relevant word or value requested. NO sentences, NO periods, NO markdown formatting, NO conversational filler. If the user asks for a capital, return ONLY the city name."
});

export async function callAI(inputText) {
    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY is not defined in .env file");
        }

        const result = await model.generateContent(inputText);
        const response = await result.response;
        let text = response.text().trim();

        text = text.replace(/\*\*/g, '').replace(/[.!]$/, '').trim();

        if (text.includes(" ")) {
            const words = text.split(" ");
            text = words[words.length - 1];
        }

        return text || "No response";


    } catch (err) {
        console.error("AI API Error Detail:", err);
        return `AI service temporarily unavailable (${err.message || 'Unknown Error'})`;
    }
}

