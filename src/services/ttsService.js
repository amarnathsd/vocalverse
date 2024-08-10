// src/services/ttsService.js
import { HfInference } from '@huggingface/inference';

// Initialize Hugging Face Inference API with your token
const hf = new HfInference(process.env.REACT_APP_TTS_API_KEY);

// Function to generate speech using Hugging Face TTS API
export const generateSpeech = async (text) => {
    try {
        // Adjust the model ID if needed
        const response = await hf.textToSpeech({
            inputs: text,
            model: 'espnet/kan-bayashi_ljspeech_vits', // Example model; replace with the correct model ID
        });
        return URL.createObjectURL(response); // Convert response to a URL
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        return null;
    }
};
