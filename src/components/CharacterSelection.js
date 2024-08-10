import React, { useState } from "react";

const characters = [
  "Donald Trump",
  "Peter Griffin",
  "Kamala Harris",
  "Ryan Reynolds (Deadpool)",
  "Hugh Jackman (Wolverine)",
];

const CharacterSelection = ({ onSelect }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleSelect = (character) => {
    if (selectedCharacters.includes(character)) {
      setSelectedCharacters(selectedCharacters.filter((c) => c !== character));
    } else if (selectedCharacters.length < 2) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const handleConfirm = () => {
    onSelect(selectedCharacters);
  };

  return (
    <div className="character-selection d-flex justify-content-center align-items-center">
      <div className="selection-container">
        <h2>Select 2 Characters</h2>
        <ul className="character-list">
          {characters.map((character) => (
            <li key={character} className="character-item">
              <input
                type="checkbox"
                checked={selectedCharacters.includes(character)}
                onChange={() => handleSelect(character)}
                className="character-checkbox"
              />
              <span
                className={
                  selectedCharacters.includes(character)
                    ? "selected"
                    : "not-selected"
                }
              >
                {character}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleConfirm}
          disabled={selectedCharacters.length !== 2}
          className="confirm-button"
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

export default CharacterSelection;
