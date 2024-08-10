import React, { useEffect, useState } from "react";
import { generatePrompt } from "../services/llmService";
import { RotatingLines } from "react-loader-spinner";

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
        console.error("Failed to generate prompt:", error);
        setLoading(false);
      }
    };

    fetchPrompt();
  }, [characters, onPromptGenerated]);

  if (loading) {
    return (
      <div>
        {" "}
        <div className="loader-container">
          <div className="loader-text">Vocal Studio</div>
          <div className="spinner-container">
            <RotatingLines
              strokeColor="rgb(111, 66, 193)"
              animationDuration="1"
              width="40"
            />
          </div>
        </div>
      </div>
    );
  }

  return <div>Prompt loaded successfully.</div>;
};

export default PromptGeneration;
