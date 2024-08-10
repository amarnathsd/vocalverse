import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.REACT_APP_TTS_API_KEY);

export const generateSpeech = async (text) => {
    try {
        const response = await hf.textToSpeech({
            inputs: text,
            model: 'espnet/kan-bayashi_ljspeech_vits', 
        });
        return URL.createObjectURL(response); 
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        return null;
    }
};
