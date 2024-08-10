import React, { useEffect, useState } from 'react';
import { generatePrompt } from '../services/llmService';

const PromptGeneration = ({ characters, onPromptGenerated }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrompt = async () => {
            try {
                const prompt = await generatePrompt(characters[0], characters[1]);
                onPromptGenerated(prompt);
                console.log(prompt);
                setLoading(false);
            } catch (error) {
                console.error('Failed to generate prompt:', error);
                setLoading(false);
            }
        };

        fetchPrompt();
    }, [characters, onPromptGenerated]);

    if (loading) {
        return <div>Loading prompt...</div>;
    }

    return <div>Prompt loaded successfully.</div>;
};

export default PromptGeneration;
