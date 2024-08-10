import React, { useState } from 'react';
import CharacterSelection from '../components/CharacterSelection';
import PromptGeneration from '../components/PromptGeneration';
import ChatBox from '../components/Chatbox';

const HomePage = () => {
    const [selectedCharacters, setSelectedCharacters] = useState([]);
    const [conversation, setConversation] = useState([]);

    const handleCharacterSelect = (characters) => {
        setSelectedCharacters(characters);
    };

    const handlePromptGenerated = (prompt) => {
        const lines = prompt.split('\n').map(line => {
            const [character, text] = line.split(':');
            return { character, text };
        });
        setConversation(lines);
    };

    const handleEditConversation = (newConversation) => {
        setConversation(newConversation);
    };

    return (
        <div className="home-page">
            {selectedCharacters.length === 0 && (
                <CharacterSelection onSelect={handleCharacterSelect} />
            )}
            {selectedCharacters.length === 2 && conversation.length === 0 && (
                <PromptGeneration characters={selectedCharacters} onPromptGenerated={handlePromptGenerated} />
            )}
            {conversation.length > 0 && (
                <ChatBox conversation={conversation} onEdit={handleEditConversation} />
            )}
        </div>
    );
};

export default HomePage;
