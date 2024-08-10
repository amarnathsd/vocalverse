import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.REACT_APP_LLM_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generatePrompt = async (character1, character2) => {
    const prompt = `Generate a friendly and humorous conversation between two characters. Character 1: ${character1}, Character 2: ${character2}`;

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Hello" }],
            },
            {
                role: "model",
                parts: [{ text: "Great to meet you. What would you like to know?" }],
            },
        ],
    });

    try {
        let result = await chat.sendMessage(prompt);
        return result.response.text();
    } catch (error) {
        if (error.message.includes('SAFETY')) {
            console.error('Prompt blocked due to safety concerns:', error);
            return 'The generated content was blocked due to safety concerns. Please try a different prompt.';
        } else {
            console.error('Error generating prompt:', error);
            throw error;
        }
    }
};
