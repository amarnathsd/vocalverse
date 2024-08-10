import React from "react";
import TextToSpeech from "./TextToSpeech";

const ChatBox = ({ conversation, onEdit }) => {
  const handleEdit = (index, event) => {
    const newConversation = [...conversation];
    newConversation[index].text = event.target.value;
    onEdit(newConversation);
  };

  return (
    <div className="chat-box">
      {conversation.map((line, index) => (
        <div key={index} className="chat-line d-flex">
          <div className="speaker-name">
            {line.character.startsWith('**') ? line.character.slice(2) : line.character}
          </div>
          {line.text ? (
            <>
              <div className="chat-text">
                <textarea
                  value={line.text.startsWith('**') ? line.text.slice(2) : line.text}
                  onChange={(e) => handleEdit(index, e)}
                />
              </div>
              <div className="text-to-speech">
                <TextToSpeech text={line.text} />
              </div>
            </>
          ) : (
                ""
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
