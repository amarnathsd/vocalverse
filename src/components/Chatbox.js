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
        <div key={index} className={`row chat-line ${!line.text ? 'full-width' : ''}`}>
          <div className={`speaker-name ${!line.text ? 'col-12' : 'col-2'}`}>
            {line.character.startsWith('**') ? line.character.slice(2) : line.character}
          </div>
          {line.text && (
            <>
              <div className="chat-text col-7">
                <textarea
                  className="textarea"
                  value={line.text.startsWith('**') ? line.text.slice(2) : line.text}
                  onChange={(e) => handleEdit(index, e)}
                />
              </div>
              <div className="text-to-speech col-2">
                <TextToSpeech text={line.text} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
