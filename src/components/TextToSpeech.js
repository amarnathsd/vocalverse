// src/components/TextToSpeech.js
import React, { useState } from 'react';
import { generateSpeech } from '../services/ttsService';

const TextToSpeech = ({ text }) => {
    const [audioUrl, setAudioUrl] = useState(null);

    const handleTTS = async () => {
        const url = await generateSpeech(text);
        setAudioUrl(url);
    };

    return (
        <div className="tts">
            <button onClick={handleTTS}>Play Audio</button>
            {audioUrl && <audio controls src={audioUrl}></audio>}
        </div>
    );
};

export default TextToSpeech;
