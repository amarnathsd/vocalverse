// src/services/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://ezmh9t6vbvhitgly.us-east-1.aws.endpoints.huggingface.cloud',
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TTS_API_KEY}`,
        'Content-Type': 'application/json',
    },
});

export default apiClient;
