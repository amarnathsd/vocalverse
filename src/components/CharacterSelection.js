import React, { useState } from 'react';

const characters = [
    'Donald Trump', 
    'Peter Griffin', 
    'Kamala Harris', 
    'Ryan Reynolds (Deadpool)', 
    'Hugh Jackman (Wolverine)'
];

const CharacterSelection = ({ onSelect }) => {
    const [selectedCharacters, setSelectedCharacters] = useState([]);

    const handleSelect = (character) => {
        if (selectedCharacters.includes(character)) {
            setSelectedCharacters(selectedCharacters.filter(c => c !== character));
        } else if (selectedCharacters.length < 2) {
            setSelectedCharacters([...selectedCharacters, character]);
        }
    };

    const handleConfirm = () => {
        onSelect(selectedCharacters);
    };

    return (
        <div className="character-selection">
            <h2>Select up to 2 Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character}>
                        <input 
                            type="checkbox" 
                            checked={selectedCharacters.includes(character)}
                            onChange={() => handleSelect(character)}
                        />
                        {character}
                    </li>
                ))}
            </ul>
            <button onClick={handleConfirm} disabled={selectedCharacters.length !== 2}>
                Confirm Selection
            </button>
        </div>
    );
};

export default CharacterSelection;
